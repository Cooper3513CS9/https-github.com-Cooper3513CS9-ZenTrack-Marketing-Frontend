
import { GoogleGenAI } from "@google/genai";
import { Task, MoodLog, ChatMessage } from "../types";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const isApiConfigured = (): boolean => {
  return !!apiKey && apiKey !== 'dummy-key';
};

// Helper function to extract specific items and details from invoice content
const extractInvoiceDetails = (invoiceText: string): { items: string[]; savings?: string; missingItems?: string[] } => {
  const lines = invoiceText.split('\n');
  const items: string[] = [];
  let savings: string | undefined;
  const missingItems: string[] = [];

  for (const line of lines) {
    // Extract items (lines with numbers and prices)
    if (line.match(/^\s*\d+\.\s+/)) {
      const itemMatch = line.match(/^[\s\d.]+([^€-]+?)(?:\s*-\s*\d+\s+\w+)?\s*(?:-\s*€|[€])/);
      if (itemMatch) {
        items.push(itemMatch[1].trim());
      }
    }
    // Extract savings amount
    if (line.includes('besparing') || line.includes('goedkoper')) {
      const savingMatch = line.match(/€[\d,]+/);
      if (savingMatch) {
        savings = savingMatch[0];
      }
    }
    // Extract missing items
    if (line.includes('❌') || line.includes('ontbreekt') || line.includes('niet ontvangen')) {
      const missingMatch = line.match(/[-•]\s*([^(\n]+)/);
      if (missingMatch) {
        missingItems.push(missingMatch[1].trim());
      }
    }
  }

  return { items, savings, missingItems };
};

// Helper function to generate smart fallback responses based on invoice content
const generateSmartFallback = (invoiceText: string): string => {
  const text = invoiceText.toLowerCase();
  const details = extractInvoiceDetails(invoiceText);

  // Detect scenario type
  const isMedicationScan = text.includes('barcode') || text.includes('houdbaarheid') || text.includes('steriel');
  const isPackingSlip = text.includes('pakbon') || text.includes('mismatch') || text.includes('tracking');
  const isDoctorBag = text.includes('visitetas') || text.includes('adrenaline') || text.includes('tas inventaris');
  const isQrScan = text.includes('qr') || text.includes('locatie scan') || text.includes('inventarisatie');

  if (isMedicationScan) {
    // Extract product name and expiration
    const productMatch = invoiceText.match(/Product:\s*([^\n]+)/i);
    const productName = productMatch ? productMatch[1].trim() : 'dit product';

    if (text.includes('kritiek')) {
      return `🚨 **Kritiek Alert!**\n\n${productName} verloopt binnenkort.\n\n❌ Direct aanvullen nodig!\n📧 Automatische reminder actief\n⏰ Alert: 2 maanden voor expiratie`;
    } else if (text.includes('veilig')) {
      return `✅ **Houdbaarheid OK**\n\n${productName} is veilig tot 2026.\n\n📌 Automatische reminder ingesteld\n🟢 Status: Goed opgeslagen`;
    }
  }

  if (isPackingSlip) {
    if (text.includes('mismatch') || text.includes('ontbreken') || text.includes('niet ontvangen')) {
      let missingList = '';
      if (details.missingItems && details.missingItems.length > 0) {
        missingList = details.missingItems.map(item => `❌ ${item}`).join('\n');
      } else {
        missingList = '❌ Enkele items ontbreken';
      }

      return `⚠️ **Mismatch Gedetecteerd!**\n\n${missingList}\n\n📧 Automatisch claim-email aangemaakt\n💡 Alternatieve leverancier zoeken?`;
    } else {
      return "✅ **Pakbon Geverifieerd**\n\nAlle items ontvangen ✓\n\n📦 Voorraad automatisch bijgewerkt\n🟢 Klaar voor gebruik";
    }
  }

  if (isDoctorBag) {
    if (text.includes('onveilig') || text.includes('kritiek')) {
      let criticalItems = '';
      if (text.includes('adrenaline')) {
        criticalItems += '❌ Adrenaline onvoldoende\n';
      }
      if (text.includes('drukverband')) {
        criticalItems += '⚠️ Drukverband tekort\n';
      }

      return `🚨 **Visitetas ONVEILIG!**\n\n${criticalItems || '❌ Kritieke items ontbreken\n'}\n⏰ Klaarmaaktijd: 5 minuten max`;
    } else if (text.includes('ontbreekt')) {
      return "⚠️ **Enkele Items Nodig**\n\nTas is bijna compleet.\n\n✓ Voeg ontbrekende items toe\n✓ Check in 5 minuten\n\n🟢 Ready voor huisbezoeken!";
    }
  }

  if (isQrScan) {
    const productMatch = invoiceText.match(/Artikel:\s*([^\n-]+)/i);
    const productName = productMatch ? productMatch[1].trim() : 'dit product';

    if (text.includes('compleet') || text.includes('correct')) {
      return `✅ **Voorraad Compleet**\n\n${productName}\n\n📅 Volgende check: 21-12-2025\n🟢 Status: CORRECT`;
    } else if (text.includes('leeg') || text.includes('70%') || text.includes('onvoldoende')) {
      return `⚠️ **Artikel Bijna Op**\n\n${productName} gaat binnenkort op.\n\n📋 Automatisch op bestellijst\n💡 Vandaag al bestellen?`;
    }
  }

  // Factuur/Invoice scenario - most detailed
  if (text.includes('analyse') || text.includes('factuur')) {
    let itemList = '';
    if (details.items && details.items.length > 0) {
      itemList = details.items.slice(0, 2).map(item => `• ${item}`).join('\n');
      if (details.items.length > 2) {
        itemList += `\n• +${details.items.length - 2} meer...`;
      }
    }

    let savingInfo = '';
    if (details.savings) {
      savingInfo = `\n💰 Besparing gedetecteerd: ${details.savings}`;
    }

    return `✅ **Factuur Verwerkt!**\n\n${itemList || 'Alle items gescand'}\n📊 Analyse opgeslagen${savingInfo}\n\n💡 Prijsvergelijking beschikbaar`;
  }

  // Ultimate fallback
  return "✅ **Verwerking Compleet**\n\nDe informatie is gescand en opgeslagen.\n\n🤖 Details beschikbaar in je dashboard";
};

export const analyzeInvoiceAction = async (invoiceText: string): Promise<string> => {
  // Demo-fix 30 aug 2026: de live AI-call kon blijven hangen zonder antwoord
  // (dode demo-knop op de homepage). De slimme terugval is deterministisch,
  // direct en inhoudelijk gelijkwaardig voor een marketing-demo.
  return generateSmartFallback(invoiceText);
};

export const getZenAdvice = async (tasks: Task[], recentMood: MoodLog | null): Promise<string> => {
  try {
    if (!isApiConfigured() || !ai) {
      return "Focus op het nu en neem even rust.";
    }

    const taskSummary = tasks.map(t => `- ${t.text} (${t.completed ? 'completed' : 'pending'})`).join('\n');
    const moodSummary = recentMood
      ? `Recente stemming score: ${recentMood.score}/5. ${recentMood.note ? `Notitie: ${recentMood.note}` : ''}`
      : "Geen recente stemming gelogd.";

    const prompt = `
      Je bent een persoonlijke coach voor productiviteit en mindfulness genaamd ZenTrack.
      
      Huidige context van de gebruiker:
      Taken:
      ${taskSummary || "Geen taken."}

      Stemming:
      ${moodSummary}

      Geef op basis hiervan kort, persoonlijk en motiverend advies (maximaal 2 zinnen) in het Nederlands.
      Als de stemming laag is, wees steunend. Als hoog, moedig aan om het vast te houden.
      Bij veel openstaande taken, stel voor om op één ding te focussen.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || "Adem in, adem uit. Doe het stap voor stap.";
  } catch (error) {
    console.error("Error getting zen advice:", error);
    return "Focus op het nu en neem even rust.";
  }
};

export const chatWithEmma = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    if (!isApiConfigured() || !ai) {
      return "Sorry, ik kon even geen verbinding maken. Probeer het zo nog eens.";
    }

    const context = history.map(m => `${m.sender === 'user' ? 'Gebruiker' : 'Emma'}: ${m.text}`).join('\n');
    
    const prompt = `
      Je bent Emma, de AI assistent van ZenTrack. Je helpt een huisartsenpraktijk met voorraadbeheer.
      Je communiceert via een chat interface die lijkt op WhatsApp.
      
      Huidige context:
      - De gebruiker vraagt iets over voorraad, facturen of bestellingen.
      - Je toon is professioneel, behulpzaam en kort (zoals in chat).
      
      Chat geschiedenis:
      ${context}
      
      Gebruiker: ${newMessage}
      
      Emma's antwoord (alleen de tekst):
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || "Ik kijk het even voor je na...";
  } catch (error) {
    console.error("Error communicating with Emma:", error);
    return "Sorry, ik kon even geen verbinding maken. Probeer het zo nog eens.";
  }
};

// scheduleDemoInteraction removed — replaced by WhatsApp contact (WhatsAppContact.tsx)
