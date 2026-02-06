"use client";

import React from 'react';
import Image from 'next/image';
import { LayoutDashboard, CheckCircle2, BarChart3, Users } from 'lucide-react';

export const ManagerDashboardSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-500/30">
              <LayoutDashboard className="w-4 h-4" />
              <span>Voor de Praktijkmanager</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Het <span className="text-blue-400">Control Center</span><br />
              terwijl je team mobiel werkt.
            </h2>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Je team scant en registreert via WhatsApp. Jij houdt het overzicht op je desktop. Keur bestellingen goed, analyseer kosten en beheer je team vanuit één centraal dashboard.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Jij geeft de 'Go'</h4>
                  <p className="text-slate-400 text-sm">ZenTrack zet de bestelling klaar. Jij klikt op 'Goedkeuren'. Tot die tijd gaat er niets de deur uit.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Kosten Analyse</h4>
                  <p className="text-slate-400 text-sm">Zie direct hoeveel je bespaart door slimme leverancierskeuzes en minder verspilling.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Team Beheer</h4>
                  <p className="text-slate-400 text-sm">Nodig assistentes uit, beheer rechten en zie wie er actief is.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Visual */}
          <div className="flex-1 w-full order-1 lg:order-2 relative">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative mx-auto max-w-[750px]">
                {/* Laptop Frame */}
                <div className="bg-slate-800 rounded-t-3xl border-[12px] border-slate-800 border-b-0 shadow-2xl">
                  <div className="bg-slate-900 rounded-t-xl overflow-hidden aspect-[16/10] relative border-b border-slate-700/50">
                    <Image
                      src="/images/dashboard-screenshot.png"
                      alt="ZenTrack Dashboard - Real-time voorraadbeheer met WhatsApp integratie"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 750px"
                      priority
                    />
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="bg-slate-800 h-4 rounded-b-xl mx-auto w-full shadow-2xl relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-b-md"></div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
