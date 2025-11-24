"use client";

import React from 'react';
import Image from 'next/image';
import { Smartphone, Zap, Check } from 'lucide-react';

interface DirectOnboardingProps {}

export const DirectOnboarding: React.FC<DirectOnboardingProps> = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold animate-pulse">
              <Zap className="w-4 h-4" />
              <span>Snelste onboarding ooit</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Geen formulieren.<br />
              <span className="text-emerald-400">Start in 10 seconden.</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
              Vergeet account managers, contracten en lange registratieformulieren. Scan de code en start direct. Regel je account in 1 minuut via onze beveiligde digitale intake.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">1</div>
                <p className="text-lg">Scan de QR code met je camera</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">2</div>
                <p className="text-lg">Verstuur het pre-filled bericht</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">3</div>
                <p className="text-lg">Je account is direct actief 🚀</p>
              </div>
            </div>

            <div className="pt-6">
               {/* Mobile Button */}
              <div className="lg:hidden">
                <a
                  href="https://wa.me/31623885227?text=Hi%20ZenTrack,%20ik%20wil%20graag%20starten!"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-emerald-900/20 transition-transform active:scale-95"
                >
                  <Smartphone className="w-6 h-6" />
                  Open WhatsApp Direct
                </a>
              </div>
            </div>
          </div>

          {/* Desktop QR Card (Hidden on mobile) */}
          <div className="hidden lg:block flex-1">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-slate-800">
              <div className="relative group cursor-pointer mb-6">
                 {/* Real QR Code Image */}
                 <Image
                    src="/qr-codes/onboarding-qr.png"
                    alt="Scan to start onboarding"
                    width={320}
                    height={320}
                    priority
                    className="w-full rounded-2xl"
                 />

                 {/* Scan effect line */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Start Onboarding</h3>
                <p className="text-slate-500">Richt je camera hierop om direct te chatten met ZenTrack.</p>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 py-2 px-4 rounded-full">
                   <Check className="w-4 h-4" /> Altijd een mens (of AI) beschikbaar
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
