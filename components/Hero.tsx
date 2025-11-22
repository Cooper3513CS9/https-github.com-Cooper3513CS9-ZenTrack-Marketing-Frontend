"use client";

import React, { useState, useEffect } from 'react';
import { MessageSquare, ShieldCheck, Smartphone, UserCheck, Camera, Sparkles, CheckCircle2, FileText, Pill, Box, Briefcase, ScanLine } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  // Animation State for the Phone Loop
  const [activeScenario, setActiveScenario] = useState(0);
  
  // 0: Intro (Chat list)
  // 1: Item Scan (Hechtmateriaal)
  // 2: Invoice Scan (Stealth Mode)
  // 3: Packing Slip (Mismatch)
  // 4: Doctor Bag (Check)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % 5);
    }, 6000); // Slightly longer reading time
    return () => clearInterval(interval);
  }, []);

  const renderPhoneContent = () => {
     switch(activeScenario) {
        case 0: // Intro / Idle
            return (
                <div className="flex items-center justify-center h-full text-slate-400 flex-col gap-3">
                    <Logo className="w-16 h-16 opacity-20" variant="default" />
                    <p className="text-xs font-medium opacity-60">Klaar voor input...</p>
                </div>
            );
        case 1: // Consumable Item Scan (Sterile Date)
            return (
               <div className="animate-fade-in p-3">
                  <div className="flex justify-end mb-3">
                     <div className="bg-[#DCF8C6] p-2.5 rounded-lg rounded-tr-none max-w-[90%] shadow-sm text-xs">
                        <div className="flex items-center gap-2 mb-1 pb-1 border-b border-emerald-200/50">
                           <Camera className="w-3 h-3 text-emerald-600" />
                           <span className="font-bold text-[10px] text-emerald-800">SCAN: HECHTMATERIAAL</span>
                        </div>
                        <p className="text-slate-700">Even scannen voor de houdbaarheid. 📸</p>
                     </div>
                  </div>
                  <div className="flex justify-start">
                     <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1">Ethilon 3-0 (Zwart)</p>
                        <div className="space-y-1 text-slate-600">
                           <p>📦 Batch: <span className="font-mono text-[10px] bg-slate-100 px-1 rounded">LOT-B291</span></p>
                           <p>📅 Steriel tot: <span className="font-bold text-emerald-600">Aug 2026</span></p>
                        </div>
                        <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-400 bg-slate-50 p-1 rounded">
                           <CheckCircle2 className="w-3 h-3" />
                           <span>Alert ingesteld voor juli '26.</span>
                        </div>
                     </div>
                  </div>
               </div>
            );
        case 2: // Invoice (STEALTH MODE - Professional "Optimization")
             return (
               <div className="animate-fade-in p-3">
                  <div className="flex justify-end mb-3">
                     <div className="bg-[#DCF8C6] p-2.5 rounded-lg rounded-tr-none max-w-[90%] shadow-sm text-xs">
                         <div className="flex items-center gap-2 mb-1 pb-1 border-b border-emerald-200/50">
                           <FileText className="w-3 h-3 text-emerald-600" />
                           <span className="font-bold text-[10px] text-emerald-800">PDF: FACTUUR_NOV.PDF</span>
                        </div>
                        <p className="text-slate-700">Factuur geüpload. Zit er nog iets geks in?</p>
                     </div>
                  </div>
                  <div className="flex justify-start">
                     <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1">✅ Analyse Compleet</p>
                        <p className="text-slate-600 mb-2">12 artikelen herkend. Totaal: €423,50.</p>
                        
                        <div className="bg-blue-50 p-2 rounded border border-blue-100">
                           <p className="font-bold text-blue-700 flex items-center gap-1 mb-1">
                              <Sparkles className="w-3 h-3" /> Signaal
                           </p>
                           <p className="text-blue-800 leading-snug">
                              Voor <span className="italic">Nitril Handschoenen M</span> is een inkoopvoordeel beschikbaar.
                           </p>
                           <div className="mt-2 flex gap-2">
                              <span className="text-[10px] bg-white border border-blue-200 px-2 py-1 rounded text-blue-600 cursor-pointer">Details?</span>
                              <span className="text-[10px] bg-blue-600 text-white px-2 py-1 rounded cursor-pointer">Regel het</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            );
         case 3: // Packing Slip (More helpful tone)
             return (
               <div className="animate-fade-in p-3">
                  <div className="flex justify-end mb-3">
                     <div className="bg-[#DCF8C6] p-2.5 rounded-lg rounded-tr-none max-w-[90%] shadow-sm text-xs">
                         <div className="flex items-center gap-2 mb-1 pb-1 border-b border-emerald-200/50">
                           <ScanLine className="w-3 h-3 text-emerald-600" />
                           <span className="font-bold text-[10px] text-emerald-800">FOTO: PAKKETLABEL</span>
                        </div>
                        <p className="text-slate-700">De levering van vandaag.</p>
                     </div>
                  </div>
                  <div className="flex justify-start">
                     <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                        <p className="font-bold text-orange-600 mb-1 flex items-center gap-1">
                           ⚠️ Mismatch bij Order #HS-291
                        </p>
                        <ul className="list-disc pl-3 space-y-0.5 text-slate-600 mb-2">
                           <li>Verwacht: 10 dozen</li>
                           <li>Gescand: 8 dozen</li>
                        </ul>
                        <p className="font-medium text-slate-800">Er ontbreken 2 items op de pakbon.</p>
                        <div className="mt-2 bg-slate-50 p-1.5 rounded border border-slate-100 text-center cursor-pointer hover:bg-slate-100 transition-colors">
                           <span className="text-slate-700 font-bold">✉️ Claim-mail aanmaken</span>
                        </div>
                     </div>
                  </div>
               </div>
            );
         case 4: // Doctor Bag (Specific details)
             return (
               <div className="animate-fade-in p-3">
                  <div className="flex justify-end mb-3">
                     <div className="bg-[#DCF8C6] p-2.5 rounded-lg rounded-tr-none max-w-[90%] shadow-sm text-xs">
                         <div className="flex items-center gap-2 mb-1 pb-1 border-b border-emerald-200/50">
                           <Briefcase className="w-3 h-3 text-emerald-600" />
                           <span className="font-bold text-[10px] text-emerald-800">FOTO: OPEN DOKTERSTAS</span>
                        </div>
                        <p className="text-slate-700">Visite check. Is de tas compleet?</p>
                     </div>
                  </div>
                  <div className="flex justify-start">
                     <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1">🔍 Tas Analyse</p>
                        <div className="space-y-1 mb-2 text-slate-600">
                           <p className="text-emerald-600 font-medium">✅ Stethoscoop</p>
                           <p className="text-emerald-600 font-medium">✅ Bloeddrukmeter</p>
                           <p className="text-red-500 font-bold">❌ Adrenaline (0/2)</p>
                           <p className="text-orange-500 font-bold">⚠️ Hechtset (1/2)</p>
                        </div>
                        <p className="text-[10px] text-slate-500 border-t border-slate-100 pt-1 mt-1">
                           Zal ik ze klaarzetten voor de assistente?
                        </p>
                     </div>
                  </div>
               </div>
            );
        default: return null;
     }
  }

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* 1. PHONE VISUAL (Mobile First - Appears on top on mobile) */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative w-[260px] md:w-[300px] h-[520px] md:h-[600px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
               {/* Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-b-xl z-20"></div>
               
               {/* Screen Header */}
               <div className="bg-[#075E54] h-20 pt-6 px-4 flex items-center gap-3 text-white z-10 relative shadow-md">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                     <Logo className="w-5 h-5" variant="avatar" />
                  </div>
                  <div>
                     <p className="font-bold text-sm">ZenTrack</p>
                     <p className="text-[10px] opacity-80">Online</p>
                  </div>
               </div>

               {/* Screen Body (Chat Animation) */}
               <div className="bg-[#ECE5DD] h-full pt-4 pb-20 px-2 overflow-hidden relative">
                  {/* Chat Background Pattern */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: '400px' }}></div>
                  
                  {/* The Live Changing Content */}
                  {renderPhoneContent()}

               </div>

               {/* Progress Bar (Loop Indicator) */}
               <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800 z-20 flex">
                  {[0, 1, 2, 3, 4].map((step) => (
                     <div key={step} className="flex-1 h-full bg-slate-700 mx-[1px]">
                        <div 
                           className={`h-full bg-emerald-500 transition-all duration-[6000ms] ease-linear ${activeScenario === step ? 'w-full' : activeScenario > step ? 'w-full' : 'w-0'}`}
                        ></div>
                     </div>
                  ))}
               </div>
            </div>
          </div>

          {/* 2. TEXT CONTENT */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wide mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Geverifieerd Platform voor Huisartsen
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Slim voorraadbeheer. <span className="text-emerald-600 block">Gewoon via WhatsApp.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Maak een foto van een factuur, product of pakbon en ZenTrack regelt de rest. Geen nieuwe software leren, geen inlogcodes zoeken. Jij houdt de regie op het dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://wa.me/31623885227?text=Hi%20ZenTrack,%20ik%20wil%20starten', '_blank')}
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-emerald-500/20 transform hover:-translate-y-1"
              >
                <MessageSquare className="w-6 h-6" />
                Open WhatsApp Direct
              </button>
              
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Bekijk features
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
               <span className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-emerald-500" /> Geen app installeren</span>
               <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Data op EU Servers</span>
               <span className="flex items-center gap-2"><UserCheck className="w-4 h-4 text-emerald-500" /> Jij houdt de regie</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
