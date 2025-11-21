
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
  // 2: Invoice Scan (Medline)
  // 3: Packing Slip (Mismatch)
  // 4: Doctor Bag (Check)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % 5);
    }, 4000); // Switch every 4 seconds
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
                     <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm text-xs">
                        <div className="flex items-center gap-2 mb-1">
                           <Camera className="w-3 h-3 text-slate-500" />
                           <span className="font-bold text-[10px] text-slate-600">FOTO: HECHTMATERIAAL</span>
                        </div>
                        <p>Steriele datum check?</p>
                     </div>
                  </div>
                  <div className="flex justify-start">
                     <div className="bg-white p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-xs">
                        <p className="font-bold text-emerald-600 mb-1">✅ Geregistreerd</p>
                        <p>Hechtdraad Ethilon 3-0. <br/>Steriel tot: <span className="font-bold text-slate-800">Aug 2026</span>.</p>
                        <p className="mt-1 text-[10px] text-slate-400">Ik geef een seintje voor die tijd.</p>
                     </div>
                  </div>
               </div>
            );
        case 2: // Invoice
             return (
               <div className="animate-fade-in p-3">
                  <div className="flex justify-end mb-3">
                     <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm text-xs">
                         <div className="flex items-center gap-2 mb-1">
                           <FileText className="w-3 h-3 text-slate-500" />
                           <span className="font-bold text-[10px] text-slate-600">PDF: FACTUUR_NOV.PDF</span>
                        </div>
                        <p>Check deze even?</p>
                     </div>
                  </div>
                  <div className="flex justify-start">
                     <div className="bg-white p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-xs">
                        <p className="font-bold text-blue-600 mb-1">📊 Analyse Compleet</p>
                        <p>52 dozen Handschoenen M.</p>
                        <div className="mt-2 bg-blue-50 p-1.5 rounded border border-blue-100">
                           <p className="font-bold text-blue-700">💡 Besparingstip</p>
                           <p>Leverancier B is €0,30 goedkoper per doos.</p>
                        </div>
                     </div>
                  </div>
               </div>
            );
         case 3: // Packing Slip
             return (
               <div className="animate-fade-in p-3">
                  <div className="flex justify-end mb-3">
                     <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm text-xs">
                         <div className="flex items-center gap-2 mb-1">
                           <ScanLine className="w-3 h-3 text-slate-500" />
                           <span className="font-bold text-[10px] text-slate-600">SCAN: PAKKETLABEL</span>
                        </div>
                        <p>Net binnengekomen.</p>
                     </div>
                  </div>
                  <div className="flex justify-start">
                     <div className="bg-white p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-xs">
                        <p className="font-bold text-red-600 mb-1">⚠️ Mismatch Gedetecteerd</p>
                        <p>Besteld: 10 dozen.<br/>Geleverd: 8 dozen.</p>
                        <p className="mt-1 font-bold underline cursor-pointer text-slate-800">Claim mail opstellen?</p>
                     </div>
                  </div>
               </div>
            );
         case 4: // Doctor Bag
             return (
               <div className="animate-fade-in p-3">
                  <div className="flex justify-end mb-3">
                     <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm text-xs">
                         <div className="flex items-center gap-2 mb-1">
                           <Briefcase className="w-3 h-3 text-slate-500" />
                           <span className="font-bold text-[10px] text-slate-600">FOTO: OPEN DOKTERSTAS</span>
                        </div>
                        <p>Klaar voor visite?</p>
                     </div>
                  </div>
                  <div className="flex justify-start">
                     <div className="bg-white p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-xs">
                        <p className="font-bold text-orange-600 mb-1">🔍 Inhoud Check</p>
                        <p>Ik zie 1 Hechtset.</p>
                        <p className="font-bold text-slate-800">Standaard is 2.</p>
                        <div className="mt-1 flex gap-2">
                           <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold">Vul 1 aan</span>
                        </div>
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
                     <Logo className="w-8 h-8" variant="avatar" />
                  </div>
                  <div>
                     <p className="font-bold text-sm">ZenTrack</p>
                     <p className="text-[10px] opacity-80">Online</p>
                  </div>
               </div>

               {/* Chat Loop Content */}
               <div className="bg-[#efeae2] h-full pt-4 px-2 pb-20 relative">
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}></div>
                  {renderPhoneContent()}
               </div>

               {/* Input Mockup */}
               <div className="absolute bottom-0 w-full bg-[#f0f2f5] p-3 flex items-center gap-2">
                   <div className="w-6 h-6 bg-white rounded-full text-slate-400 flex items-center justify-center">+</div>
                   <div className="flex-1 h-8 bg-white rounded-full"></div>
                   <div className="w-8 h-8 bg-[#128C7E] rounded-full flex items-center justify-center text-white">
                      <MessageSquare className="w-4 h-4" />
                   </div>
               </div>
            </div>
          </div>

          {/* 2. TEXT CONTENT (Appears below phone on mobile) */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-fade-in">
              <ShieldCheck className="w-4 h-4" />
              <span>Geverifieerd Platform voor Huisartsen</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Je broekzak is <br className="hidden md:block" />
              <span className="text-emerald-600">je magazijn.</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-2">
               Via WhatsApp of SMS.
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Facturen, Verbruiksartikelen, Pakketten & Dokterstassen. ZenTrack regelt het allemaal via een simpele foto. 
              Weg met de gevestigde orde, welkom bij de toekomst.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button 
                onClick={() => window.open('https://wa.me/31623885227', '_blank')}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" /> Open WhatsApp Direct
              </button>
              <button 
                onClick={() => {
                  const featuresSection = document.getElementById('waarom');
                  featuresSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold transition-colors"
              >
                Bekijk features
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start text-xs md:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1"><Smartphone className="w-4 h-4 text-emerald-500" /> Geen app installeren</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Data op EU Servers</span>
              <span className="flex items-center gap-1"><UserCheck className="w-4 h-4 text-emerald-500" /> Jij houdt de regie</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
