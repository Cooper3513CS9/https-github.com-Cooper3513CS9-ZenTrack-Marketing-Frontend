"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Camera, Paperclip, Loader2, Sparkles, RefreshCw, FileText, CheckCircle2, ScanLine, CheckCheck, QrCode, Briefcase, Box } from 'lucide-react';
import { analyzeInvoiceAction } from '../services/geminiService';
import { Logo } from './Logo';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  isImage?: boolean;
  imageType?: 'invoice' | 'packing_slip' | 'medication' | 'qr' | 'bag';
}

export const WhatsAppDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      text: 'Hoi! Ik ben ZenTrack. Stuur me een foto van een factuur, verzendlabel of scan een QR-code in de kast. 📸', 
      sender: 'bot', 
      timestamp: '09:00' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [uploadingState, setUploadingState] = useState<'idle' | 'uploading' | 'scanning'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  
  // Use ref for the container to control internal scrolling without jumping the page
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, uploadingState]);

  const handleSimulateUpload = async (scenario: 'invoice' | 'packing_slip' | 'medication' | 'qr' | 'bag') => {
    if (isTyping || uploadingState !== 'idle') return;

    setUploadingState('uploading');
    for (let i = 0; i <= 100; i += 10) {
        setUploadProgress(i);
        await new Promise(r => setTimeout(r, 50));
    }

    setUploadingState('scanning');
    await new Promise(r => setTimeout(r, 1500));

    setUploadingState('idle');
    setUploadProgress(0);

    let userText = "";
    let invoiceContent = "";

    if (scenario === 'invoice') {
      userText = "Foto van factuur #2025-882";
      // Realistic invoice data with Nitril Gloves priced slightly high to trigger AI advice
      invoiceContent = `
        FACTUUR ANALYSE:
        Datum: 21-11-2025
        Regels:
        1. Nitril Onderzoekshandschoenen Maat M (Poedervrij) - 10 dozen - € 8,95/st
        2. Onderzoekspapier 50cm - 6 rollen - € 6,50/st
        3. Injectiespuiten 5ml - 200 stuks - € 0,12/st
        Totaal excl BTW: € 152,50

        CONTEXT: De marktprijs voor Nitril M is momenteel rond de € 6,50. Signaleer dit.
      `;
    } else if (scenario === 'packing_slip') {
      userText = "Foto van pakbon";
      invoiceContent = `
        PAKBON SCAN:
        Order Ref: #PO-2291
        Inhoud doos:
        - 8x Nitril Handschoenen L
        - 2x Handdesinfectie 500ml

        MATCH CHECK:
        Oorspronkelijke bestelling: 10x Nitril Handschoenen L.
        Resultaat: Er missen 2 dozen handschoenen.
      `;
    } else if (scenario === 'medication') {
      userText = "Foto doosje Hechtdraad";
      invoiceContent = "MEDICIJN SCAN: Ethilon 3-0 (Zwart). Batch: #LOT-B291. Steriele houdbaarheid tot: 01-08-2026. Huidige datum: Nov 2025. Status: Veilig.";
    } else if (scenario === 'bag') {
      userText = "Foto van inhoud dokterstas";
      invoiceContent = "DOCTOR_BAG: Visitetas Check. Gevonden: 1x Bloeddrukmeter, 1x Stethoscoop, 0x Adrenaline Ampul (Kritiek!), 1x Glucosemeter. Advies: Vul Adrenaline direct aan.";
    } else {
      userText = "QR Scan: Kast 2, Plank 1";
      invoiceContent = "QR_KAMER_SCAN: Locatie herkend: Behandelruimte 1. Product: Alcohol 70%. Huidige voorraad in systeem: 2. Vraag de gebruiker om de nieuwe telling.";
    }

    // Add User Message
    const newMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isImage: true,
      imageType: scenario
    };

    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);

    // Call AI
    try {
      const aiResponse = await analyzeInvoiceAction(invoiceContent);
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500); 

    } catch (e) {
      setIsTyping(false);
    }
  };

  const resetDemo = () => {
     setMessages([
      { 
        id: '1', 
        text: 'Hoi! Ik ben ZenTrack. Stuur me een foto van een factuur, verzendlabel of scan een QR-code in de kast. 📸', 
        sender: 'bot', 
        timestamp: '09:00' 
      }
     ]);
     setUploadingState('idle');
  };

  return (
    <section id="demo" className="py-20 bg-emerald-900 text-white overflow-hidden relative">
       {/* Background decoration */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Description */}
          <div className="flex-1">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold mb-4">
              <Sparkles className="w-5 h-5" />
              <span>Live Demo</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ervaar het gemak</h2>
            <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
              Simuleer een echte situatie. ZenTrack herkent labels, scant dokterstassen en checkt steriele datums.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => handleSimulateUpload('invoice')}
                disabled={isTyping || uploadingState !== 'idle'}
                className="bg-white text-emerald-900 hover:bg-emerald-50 px-4 py-4 rounded-xl font-semibold transition-colors flex items-center justify-start gap-3 disabled:opacity-50 text-left"
              >
                <div className="bg-emerald-100 p-2 rounded-lg"><FileText className="w-5 h-5 text-emerald-600"/></div>
                <div>
                    <span className="block text-sm font-bold">1. Simuleer Factuur</span>
                    <span className="text-xs opacity-70">Nitril handschoenen & Analyse</span>
                </div>
              </button>

              <button
                onClick={() => handleSimulateUpload('bag')}
                disabled={isTyping || uploadingState !== 'idle'}
                className="bg-emerald-800 border border-emerald-700 hover:bg-emerald-700 text-white px-4 py-4 rounded-xl font-semibold transition-colors flex items-center justify-start gap-3 disabled:opacity-50 text-left"
              >
                <div className="bg-emerald-900 p-2 rounded-lg"><Briefcase className="w-5 h-5 text-emerald-300"/></div>
                <div>
                    <span className="block text-sm font-bold">2. Dokterstas Check</span>
                    <span className="text-xs opacity-70">Scan inhoud & vul aan</span>
                </div>
              </button>

              <button
                onClick={() => handleSimulateUpload('medication')}
                disabled={isTyping || uploadingState !== 'idle'}
                className="bg-emerald-800 border border-emerald-700 hover:bg-emerald-700 text-white px-4 py-4 rounded-xl font-semibold transition-colors flex items-center justify-start gap-3 disabled:opacity-50 text-left"
              >
                <div className="bg-emerald-900 p-2 rounded-lg"><Box className="w-5 h-5 text-emerald-300"/></div>
                <div>
                    <span className="block text-sm font-bold">3. Artikel Scan</span>
                    <span className="text-xs opacity-70">Steriele datum & alert</span>
                </div>
              </button>

              <button
                onClick={() => handleSimulateUpload('packing_slip')}
                disabled={isTyping || uploadingState !== 'idle'}
                className="bg-emerald-800 border border-emerald-700 hover:bg-emerald-700 text-white px-4 py-4 rounded-xl font-semibold transition-colors flex items-center justify-start gap-3 disabled:opacity-50 text-left"
              >
                <div className="bg-emerald-900 p-2 rounded-lg"><CheckCircle2 className="w-5 h-5 text-emerald-300"/></div>
                <div>
                    <span className="block text-sm font-bold">4. Pakbon Verificatie</span>
                    <span className="text-xs opacity-70">Controleer op tekorten</span>
                </div>
              </button>
            </div>
             <button onClick={resetDemo} className="mt-6 text-sm text-emerald-400 hover:text-emerald-200 flex items-center gap-2">
                <RefreshCw className="w-3 h-3" /> Reset demo
             </button>
          </div>

          {/* Phone Simulator */}
          <div className="flex-1 flex justify-center">
            <div className="w-[320px] md:w-[350px] h-[650px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden flex flex-col transform transition-transform duration-500 hover:scale-[1.02]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
              
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] p-4 pt-10 flex items-center gap-3 text-white z-10">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Logo className="w-6 h-6" variant="avatar" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">ZenTrack</h3>
                  <p className="text-xs text-emerald-100 opacity-80">Online</p>
                </div>
              </div>

              {/* Chat Area */}
              <div 
                ref={chatContainerRef}
                className="flex-1 bg-[#E5DDD5] overflow-y-auto p-4 space-y-4 scrollbar-hide relative"
              >
                 
                 {messages.map((msg) => (
                   <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                     <div 
                        className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm relative group ${
                          msg.sender === 'user' 
                            ? 'bg-[#DCF8C6] text-slate-800 rounded-tr-none' 
                            : 'bg-white text-slate-800 rounded-tl-none'
                        }`}
                     >
                       {msg.isImage && (
                         <div className="mb-2 p-2 bg-white/50 rounded flex items-center gap-2 border border-slate-200/50">
                            <div className="w-10 h-12 bg-slate-100 flex items-center justify-center rounded border border-slate-300 relative overflow-hidden">
                              {msg.imageType === 'invoice' ? (
                                  <FileText className="w-5 h-5 text-red-500" />
                              ) : msg.imageType === 'packing_slip' ? (
                                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                              ) : msg.imageType === 'qr' ? (
                                  <QrCode className="w-5 h-5 text-slate-900" />
                              ) : msg.imageType === 'bag' ? (
                                  <Briefcase className="w-5 h-5 text-orange-600" />
                              ) : (
                                  <Camera className="w-5 h-5 text-slate-500" />
                              )}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-700 uppercase">
                                    {msg.imageType === 'invoice' ? 'Factuur.pdf' : msg.imageType === 'packing_slip' ? 'Label.jpg' : msg.imageType === 'bag' ? 'Tas.jpg' : 'Foto.jpg'}
                                </span>
                                <span className="text-[9px] opacity-60">1.2 MB • JPG</span>
                            </div>
                         </div>
                       )}
                       <p className="whitespace-pre-line">{msg.text}</p>
                       
                       <div className="flex items-end justify-end gap-1 mt-1 -mb-1">
                         <span className="text-[10px] text-slate-500/80">{msg.timestamp}</span>
                         {msg.sender === 'user' && (
                           <CheckCheck className="w-3 h-3 text-blue-400" />
                         )}
                       </div>
                     </div>
                   </div>
                 ))}

                 {/* Uploading / Scanning Visuals */}
                 {uploadingState === 'uploading' && (
                    <div className="flex justify-end px-4">
                        <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm w-[150px]">
                            <p className="text-xs text-slate-600 mb-1 flex items-center gap-2">
                                <Loader2 className="w-3 h-3 animate-spin" /> Uploaden...
                            </p>
                            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 transition-all duration-100" style={{ width: `${uploadProgress}%` }}></div>
                            </div>
                        </div>
                    </div>
                 )}

                 {uploadingState === 'scanning' && (
                    <div className="flex justify-end px-4">
                        <div className="relative">
                            <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none shadow-sm opacity-50 blur-[1px]">
                                <div className="w-24 h-32 bg-slate-100 flex items-center justify-center">
                                    <FileText className="text-slate-300" />
                                </div>
                            </div>
                            {/* Scan Line Animation */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                                <div className="w-full h-0.5 bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-scan-vertical absolute top-0"></div>
                                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                                    <ScanLine className="w-3 h-3" /> Verwerken
                                </span>
                            </div>
                        </div>
                    </div>
                 )}

                 {isTyping && uploadingState === 'idle' && (
                   <div className="flex justify-start">
                     <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                       <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                     </div>
                   </div>
                 )}
              </div>

              {/* Input Area */}
              <div className="bg-[#F0F0F0] p-3 flex items-center gap-2">
                 <div className="bg-white rounded-full p-2 text-slate-400">
                   <Paperclip className="w-5 h-5" />
                 </div>
                 <div className="flex-1 bg-white rounded-full py-2 px-4 text-sm text-slate-400">
                   Bericht...
                 </div>
                 <div className="bg-[#128C7E] rounded-full p-2 text-white">
                   <Send className="w-5 h-5" />
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
