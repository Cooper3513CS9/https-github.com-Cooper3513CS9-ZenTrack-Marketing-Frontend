(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/services/geminiService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeInvoiceAction",
    ()=>analyzeInvoiceAction,
    "chatWithEmma",
    ()=>chatWithEmma,
    "getZenAdvice",
    ()=>getZenAdvice,
    "scheduleDemoInteraction",
    ()=>scheduleDemoInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/web/index.mjs [app-client] (ecmascript)");
;
const apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GEMINI_API_KEY || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_KEY;
const ai = apiKey ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
    apiKey
}) : null;
const isApiConfigured = ()=>{
    return !!apiKey && apiKey !== 'dummy-key';
};
const analyzeInvoiceAction = async (invoiceText)=>{
    try {
        if (!isApiConfigured()) {
            console.warn("Gemini API not configured. Using fallback response.");
            return "✅ Bericht ontvangen. Ik ben bezig met het verwerken van de gegevens.";
        }
        if (!ai) {
            return "✅ Bericht ontvangen. Ik ben bezig met het verwerken van de gegevens.";
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
                temperature: 0.4
            }
        });
        return response.text || "✅ Scannen gelukt. Ik verwerk de gegevens.";
    } catch (error) {
        console.error("Error interpreting invoice:", error);
        return "✅ Bericht ontvangen. Ik ben bezig met het verwerken van de gegevens.";
    }
};
const getZenAdvice = async (tasks, recentMood)=>{
    try {
        if (!isApiConfigured() || !ai) {
            return "Focus op het nu en neem even rust.";
        }
        const taskSummary = tasks.map((t)=>`- ${t.text} (${t.completed ? 'completed' : 'pending'})`).join('\n');
        const moodSummary = recentMood ? `Recente stemming score: ${recentMood.score}/5. ${recentMood.note ? `Notitie: ${recentMood.note}` : ''}` : "Geen recente stemming gelogd.";
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
            contents: prompt
        });
        return response.text || "Adem in, adem uit. Doe het stap voor stap.";
    } catch (error) {
        console.error("Error getting zen advice:", error);
        return "Focus op het nu en neem even rust.";
    }
};
const chatWithEmma = async (history, newMessage)=>{
    try {
        if (!isApiConfigured() || !ai) {
            return "Sorry, ik kon even geen verbinding maken. Probeer het zo nog eens.";
        }
        const context = history.map((m)=>`${m.sender === 'user' ? 'Gebruiker' : 'Emma'}: ${m.text}`).join('\n');
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
            contents: prompt
        });
        return response.text || "Ik kijk het even voor je na...";
    } catch (error) {
        console.error("Error communicating with Emma:", error);
        return "Sorry, ik kon even geen verbinding maken. Probeer het zo nog eens.";
    }
};
const scheduleDemoInteraction = async (history, userInput)=>{
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
      ${history.map((h)=>`${h.role}: ${h.text}`).join('\n')}

      User: ${userInput}
      
      Jouw antwoord:
    `;
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });
        return response.text || "Kan ik je helpen met het plannen van een demo?";
    } catch (error) {
        console.error("Error in scheduling agent:", error);
        return "Excuses, ik kan momenteel mijn agenda niet laden. Stuur een appje naar 06-23885227.";
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/messageBirdService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "birdService",
    ()=>birdService
]);
class MessageBirdService {
    apiKey = null;
    channelId = '035a8594-4934-4b24-833b-253110088d30';
    constructor(){
    // In a real app, we would initialize with a key, but we shouldn't store keys in frontend code.
    // this.apiKey = process.env.REACT_APP_BIRD_API_KEY;
    }
    /**
   * Simulates sending a message via MessageBird WhatsApp Channel
   */ async sendMessage(to, text, isImage = false) {
        const payload = {
            to: to,
            from: this.channelId,
            type: isImage ? 'image' : 'text',
            content: isImage ? {
                image: {
                    url: 'placeholder_url'
                }
            } : {
                text: text
            }
        };
        console.log('[MessageBird] Sending payload:', payload);
        // SIMULATION:
        // Since we cannot make backend API calls from this frontend demo without CORS/Security issues,
        // we simulate the network delay and success response of the Bird API.
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({
                    id: crypto.randomUUID(),
                    status: 'sent'
                });
            }, 600);
        });
    }
    /**
   * Simulates receiving a status update webhook from WhatsApp (Sent -> Delivered -> Read)
   */ simulateStatusUpdates(messageId, onUpdate) {
        // WhatsApp flow: Sent (1 tick) -> Delivered (2 ticks) -> Read (Blue ticks)
        // 1. Delivered after 1.5s
        setTimeout(()=>{
            onUpdate('delivered');
        }, 1500);
        // 2. Read after 3s
        setTimeout(()=>{
            onUpdate('read');
        }, 3000);
    }
}
const birdService = new MessageBirdService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/ChatArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatArea",
    ()=>ChatArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/geminiService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$messageBirdService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/messageBirdService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Helper to render WhatsApp ticks
const StatusTicks = ({ status })=>{
    if (!status || status === 'pending') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
        className: "w-3 h-3 text-slate-400 animate-spin"
    }, void 0, false, {
        fileName: "[project]/components/dashboard/ChatArea.tsx",
        lineNumber: 17,
        columnNumber: 47
    }, ("TURBOPACK compile-time value", void 0));
    if (status === 'sent') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
        className: "w-3 h-3 text-slate-400"
    }, void 0, false, {
        fileName: "[project]/components/dashboard/ChatArea.tsx",
        lineNumber: 18,
        columnNumber: 33
    }, ("TURBOPACK compile-time value", void 0));
    if (status === 'delivered') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
        className: "w-3 h-3 text-slate-400"
    }, void 0, false, {
        fileName: "[project]/components/dashboard/ChatArea.tsx",
        lineNumber: 19,
        columnNumber: 38
    }, ("TURBOPACK compile-time value", void 0));
    if (status === 'read') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
        className: "w-3 h-3 text-blue-500"
    }, void 0, false, {
        fileName: "[project]/components/dashboard/ChatArea.tsx",
        lineNumber: 20,
        columnNumber: 33
    }, ("TURBOPACK compile-time value", void 0));
    return null;
};
_c = StatusTicks;
const ChatArea = ({ messages, setMessages, onBack })=>{
    _s();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatArea.useEffect": ()=>{
            scrollToBottom();
        }
    }["ChatArea.useEffect"], [
        messages,
        isTyping
    ]);
    const handleSendMessage = async (e)=>{
        e.preventDefault();
        if (!inputValue.trim()) return;
        const tempId = Date.now().toString();
        // 1. Optimistic UI Update (Pending State)
        const userMsg = {
            id: tempId,
            text: inputValue,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            }),
            type: 'text',
            status: 'pending'
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        setInputValue('');
        setIsTyping(true);
        // 2. Send via MessageBird Service
        // We use a default test number since we are in a demo environment
        const birdResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$messageBirdService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["birdService"].sendMessage('+31612345678', userMsg.text);
        // 3. Update message with Sent status
        setMessages((prev)=>prev.map((msg)=>msg.id === tempId ? {
                    ...msg,
                    status: birdResponse.status,
                    id: birdResponse.id
                } : msg));
        // 4. Simulate WhatsApp Webhook Delivery/Read updates
        __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$messageBirdService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["birdService"].simulateStatusUpdates(birdResponse.id, (newStatus)=>{
            setMessages((prev)=>prev.map((msg)=>msg.id === birdResponse.id ? {
                        ...msg,
                        status: newStatus
                    } : msg));
        });
        // 5. Get AI Reply (Simulating the Bot response coming back via Bird)
        const aiResponseText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatWithEmma"])(messages, userMsg.text);
        setTimeout(()=>{
            const botMsg = {
                id: (Date.now() + 1).toString(),
                text: aiResponseText,
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                type: 'text'
            };
            setMessages((prev)=>[
                    ...prev,
                    botMsg
                ]);
            setIsTyping(false);
        }, 1500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col h-screen bg-[#efeae2] relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#f0f2f5] px-4 py-3 flex items-center justify-between border-b border-[#d1d7db]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 sm:gap-4",
                        children: [
                            onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "lg:hidden -ml-2 p-2 text-slate-600 hover:bg-slate-200 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/ChatArea.tsx",
                                    lineNumber: 96,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm",
                                children: "Z"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-slate-900",
                                        children: "Emma (ZenTrack)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "WhatsApp Business • Online"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                        lineNumber: 93,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-5 h-5 cursor-pointer hover:text-slate-700"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                className: "w-5 h-5 cursor-pointer hover:text-slate-700"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                        lineNumber: 107,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/ChatArea.tsx",
                lineNumber: 92,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 sm:p-8 space-y-4",
                style: {
                    backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
                    backgroundBlendMode: 'soft-light',
                    backgroundColor: '#efeae2'
                },
                children: [
                    messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `max-w-[85%] sm:max-w-[60%] p-3 rounded-lg text-sm shadow-sm relative group ${msg.sender === 'user' ? 'bg-[#d9fdd3] text-slate-900 rounded-tr-none' : 'bg-white text-slate-900 rounded-tl-none'}`,
                                children: [
                                    msg.type === 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 rounded-lg overflow-hidden border border-slate-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-100 p-4 flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                    className: "w-6 h-6 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/ChatArea.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-xs text-slate-500",
                                                    children: "Bijlage.pdf"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/ChatArea.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/ChatArea.tsx",
                                            lineNumber: 126,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                                        lineNumber: 125,
                                        columnNumber: 20
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "whitespace-pre-line leading-relaxed pr-6",
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                                        lineNumber: 132,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end justify-end gap-1 mt-1 -mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-500/80",
                                                children: msg.timestamp
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                                lineNumber: 136,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            msg.sender === 'user' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pb-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusTicks, {
                                                    status: msg.status
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/ChatArea.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 24
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                                lineNumber: 138,
                                                columnNumber: 22
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                                        lineNumber: 135,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, msg.id, false, {
                            fileName: "[project]/components/dashboard/ChatArea.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))),
                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-3 rounded-lg rounded-tl-none shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-4 h-4 animate-spin text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                lineNumber: 150,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/ChatArea.tsx",
                            lineNumber: 149,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                        lineNumber: 148,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/ChatArea.tsx",
                lineNumber: 114,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#f0f2f5] p-3 sm:p-4 flex items-center gap-2 sm:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 text-slate-500 hover:bg-slate-200 rounded-full transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/ChatArea.tsx",
                            lineNumber: 160,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 text-slate-500 hover:bg-slate-200 rounded-full transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/ChatArea.tsx",
                            lineNumber: 163,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSendMessage,
                        className: "flex-1 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: inputValue,
                                onChange: (e)=>setInputValue(e.target.value),
                                placeholder: "Typ een bericht...",
                                className: "flex-1 py-3 px-4 rounded-lg border-none focus:ring-0 bg-white text-slate-900 placeholder:text-slate-500 shadow-sm"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            inputValue.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-sm transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/ChatArea.tsx",
                                    lineNumber: 176,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "p-3 text-slate-500 hover:bg-slate-200 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/ChatArea.tsx",
                                    lineNumber: 180,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/ChatArea.tsx",
                                lineNumber: 179,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/ChatArea.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/ChatArea.tsx",
                lineNumber: 158,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/ChatArea.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChatArea, "YHp2NKxOy159eblwTs1/m0tkE1o=");
_c1 = ChatArea;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatusTicks");
__turbopack_context__.k.register(_c1, "ChatArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/chat/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ChatArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/ChatArea.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ChatPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            text: `Hoi Dr. Janssen! 👋\nAlles is rustig vandaag. Ik heb 2 pakbonnen geverifieerd en er zijn geen urgente tekorten.`,
            sender: 'bot',
            timestamp: '09:00',
            type: 'text'
        }
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$ChatArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatArea"], {
        messages: messages,
        setMessages: setMessages,
        onBack: ()=>router.push('/dashboard')
    }, void 0, false, {
        fileName: "[project]/app/dashboard/chat/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(ChatPage, "y8Ysvb5NRdcoYUGEizxKx/gBsds=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ChatPage;
var _c;
__turbopack_context__.k.register(_c, "ChatPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_38e9d54b._.js.map