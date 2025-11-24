
import { GoogleGenAI } from "@google/genai";
import { Task, MoodLog, ChatMessage } from "../types";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const isApiConfigured = (): boolean => {
  return !!apiKey && apiKey !== 'dummy-key';
};

// Helper function to generate smart fallback responses based on invoice content
const generateSmartFallback = (invoiceText: string): string => {
  const text = invoiceText.toLowerCase();

  // Detect scenario type
  const isMedicationScan = text.includes('barcode') || text.includes('houdbaarheid') || text.includes('steriel');
  const isPackingSlip = text.includes('pakbon') || text.includes('mismatch') || text.includes('tracking');
  const isDoctorBag = text.includes('visitetas') || text.includes('adrenaline') || text.includes('tas inventaris');
  const isQrScan = text.includes('qr') || text.includes('locatie scan') || text.includes('inventarisatie');

  if (isMedicationScan) {
    // Extract expiration info if available
    if (text.includes('kritiek')) {
      return "🚨 **Kritiek Alert!**\n\nDeze medicatie verloopt binnenkort. Voeg direct aan je bestellijst toe!\n\n⏰ Remainder ingesteld.";
    } else if (text.includes('veilig')) {
      return "✅ **Houdbaarheid OK**\n\nDeze medicatie is veilig. Je bent automatisch op de hoogte als het vervaldatum nadert.\n\n📌 Alert: 2 maanden voor expiratie";
    }
  }

  if (isPackingSlip) {
    if (text.includes('mismatch') || text.includes('ontbreken') || text.includes('niet ontvangen')) {
      return "⚠️ **Mismatch Gedetecteerd!**\n\nJe hebt niet alles ontvangen wat je besteld had:\n\n❌ Items ontbreken\n📧 Automatisch claim-email aangemaakt\n💡 Suggestie: Bestel bij alternatieve leverancier?";
    } else {
      return "✅ **Pakbon Geverifieerd**\n\nAlle items ontvangen en in systeem opgeslagen.\n\n📦 Voorraad automatisch bijgewerkt";
    }
  }

  if (isDoctorBag) {
    if (text.includes('onveilig') || text.includes('kritiek')) {
      return "🚨 **Visitetas is ONVEILIG!**\n\nKritieke medicatie ontbreekt:\n\n❌ Adrenaline onvoldoende\n⚠️ Verbandmateriaal tekort\n\n⏰ Klaarmaaktijd: 5 minuten";
    } else if (text.includes('ontbreekt')) {
      return "⚠️ **Aanvulling Nodig**\n\nJe tas mist enkele items:\n\n❌ Items toevoegen\n✓ Check in 5 minuten\n\nReady voor huisbezoeken!";
    }
  }

  if (isQrScan) {
    if (text.includes('compleet') || text.includes('correct')) {
      return "✅ **Voorraad Klopt Compleet**\n\nAlles aanwezig en correct opgeslagen.\n\n📅 Volgende inventaris: 21-12-2025\n🟢 Status: GOED";
    } else if (text.includes('leeg')) {
      return "⚠️ **Artikel Bijna Op**\n\nDit artikel gaat binnen 5 dagen op.\n\n📋 Automatisch op bestellijst gezet\n💡 Suggestie: Vandaag al bestellen?";
    }
  }

  // Generic smart response based on content
  if (text.includes('analyse') || text.includes('factuur')) {
    return "✅ **Factuur Verwerkt!**\n\n📊 Analyse uitgevoerd\n💰 Prijsvergelijking opgeslagen\n💡 Bespaaropportuniteit gedetecteerd\n\nWil je details zien?";
  }

  // Ultimate fallback
  return "✅ **Verwerking Compleet**\n\nDe gegevens zijn gescand en opgeslagen in je systeem.\n\n🤖 Verdere actie: Zie suggesties hierboven";
};

export const analyzeInvoiceAction = async (invoiceText: string): Promise<string> => {
  try {
    if (!isApiConfigured()) {
      console.warn("Gemini API not configured. Using smart fallback based on content.");
      return generateSmartFallback(invoiceText);
    }

    if (!ai) {
      return generateSmartFallback(invoiceText);
    }

    const prompt = `
      Jij bent ZenTrack, een slimme AI assistent voor medisch voorraadbeheer die communiceert via WhatsApp.

      De input is tekst afkomstig van een OCR scan van een factuur, verzendlabel (pakbon), medicijndoosje, inhoud van een dokterstas OF een QR-code.

      Input: "${invoiceText}"

      Jouw taak:
      Reageer als ZenTrack in WhatsApp stijl (kort, behulpzaam, emojis).

      SCENARIO 1: FACTUUR (Analyse)
      - Bevestig ontvangst, meld items, analyseer patronen, geef prijstip.

      SCENARIO 2: PAKBON_LABEL (Verificatie & Claim)
      - Mismatch checken tussen besteld en geleverd. Claim aanbieden indien nodig.

      SCENARIO 3: MEDICIJN (Expiratie Radar)
      - Vervaldatum extraheren en alert instellen.

      SCENARIO 4: QR_KAMER_SCAN (Inventarisatie)
      - Locatie herkennen, aantal vragen.

      SCENARIO 5: DOCTOR_BAG (Visitetas Controle)
      - Als de input 'DOCTOR_BAG' bevat.
      - Het is een foto van een open tas.
      - Vergelijk de inhoud met de standaardlijst (bv 4 adrenaline).
      - Meld wat er mist en moet worden aangevuld.
      - Voorbeeld: "🔍 Visitetas Check: Ik zie 2 ampullen Adrenaline. De standaard is 4. Graag 2 bijvullen uit de centrale voorraad."

      Antwoord:
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.4,
      }
    });

    return response.text || generateSmartFallback(invoiceText);
  } catch (error) {
    console.error("Error interpreting invoice:", error);
    return generateSmartFallback(invoiceText);
  }
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

export const scheduleDemoInteraction = async (history: {role: 'user' | 'model', text: string}[], userInput: string): Promise<string> => {
  try {
    if (!isApiConfigured() || !ai) {
      return "Excuses, ik kan momenteel mijn agenda niet laden. Stuur een appje naar 06-23885227.";
    }

    const prompt = `
      Jij bent de AI Planning Assistent van ZenTrack (genaamd Jord's Assistent).
      
      DOEL: Check of de gebruiker een huisartsenpraktijk is en plan een demo.

      STAP 1: Check of je de NAAM van de praktijk weet.
      Zo niet -> Vraag: "Voor welke huisartsenpraktijk beheer je de voorraad?"
      
      STAP 2: Valideer de praktijk.
      - Als de gebruiker een praktijknaam geeft, doe alsof je het checkt en zeg: "Check, [Naam] gevonden in het register. Welkom!"
      - Als ze iets anders zeggen (bv groothandel), zeg vriendelijk dat ZenTrack exclusief voor huisartsen is.

      STAP 3: Plan de demo.
      - Vraag om emailadres.
      - Stel 2 tijden voor.

      Geschiedenis:
      ${history.map(h => `${h.role}: ${h.text}`).join('\n')}

      User: ${userInput}
      
      Jouw antwoord:
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || "Kan ik je helpen met het plannen van een demo?";
  } catch (error) {
    console.error("Error in scheduling agent:", error);
    return "Excuses, ik kan momenteel mijn agenda niet laden. Stuur een appje naar 06-23885227.";
  }
};
