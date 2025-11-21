
import React from 'react';
import { LayoutDashboard, CheckCircle2, BarChart3, Users, ArrowRight } from 'lucide-react';

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
                  <p className="text-slate-400 text-sm">AI zet de bestelling klaar. Jij klikt op 'Goedkeuren'. Tot die tijd gaat er niets de deur uit.</p>
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
            
            <div className="relative mx-auto bg-slate-800 rounded-t-3xl border-[12px] border-slate-800 border-b-0 shadow-2xl max-w-[600px]">
                <div className="bg-slate-900 rounded-t-xl overflow-hidden aspect-[16/10] relative border-b border-slate-700/50">
                   {/* Mock UI */}
                   <div className="absolute inset-0 bg-slate-50 flex flex-col">
                      {/* Header */}
                      <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4">
                          <div className="flex items-center gap-2">
                             <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-xs">Z</div>
                             <span className="font-bold text-slate-800 text-sm">ZenTrack Dashboard</span>
                          </div>
                          <div className="flex items-center gap-3">
                             <div className="w-20 h-2 bg-slate-100 rounded-full"></div>
                             <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                          </div>
                      </div>
                      {/* Body */}
                      <div className="flex-1 p-4 flex gap-4">
                          {/* Sidebar */}
                          <div className="w-40 hidden md:block space-y-2">
                             <div className="h-8 w-full bg-emerald-50 rounded-lg border border-emerald-100"></div>
                             <div className="h-8 w-full bg-white rounded-lg"></div>
                             <div className="h-8 w-full bg-white rounded-lg"></div>
                             <div className="h-8 w-full bg-white rounded-lg"></div>
                          </div>
                          {/* Content */}
                          <div className="flex-1 space-y-4">
                             {/* Cards */}
                             <div className="grid grid-cols-3 gap-3">
                                <div className="h-20 bg-white rounded-xl border border-slate-200 shadow-sm p-3">
                                   <div className="w-8 h-8 bg-orange-100 rounded-lg mb-2"></div>
                                   <div className="w-12 h-2 bg-slate-100 rounded"></div>
                                </div>
                                <div className="h-20 bg-white rounded-xl border border-slate-200 shadow-sm p-3">
                                   <div className="w-8 h-8 bg-emerald-100 rounded-lg mb-2"></div>
                                   <div className="w-16 h-2 bg-slate-100 rounded"></div>
                                </div>
                                <div className="h-20 bg-white rounded-xl border border-slate-200 shadow-sm p-3">
                                   <div className="w-8 h-8 bg-blue-100 rounded-lg mb-2"></div>
                                   <div className="w-10 h-2 bg-slate-100 rounded"></div>
                                </div>
                             </div>
                             {/* Action Card */}
                             <div className="h-32 bg-slate-800 rounded-xl shadow-lg p-4 flex items-center gap-4 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                                <div className="flex-1">
                                   <div className="w-32 h-3 bg-slate-600 rounded mb-2"></div>
                                   <div className="w-48 h-2 bg-slate-700 rounded"></div>
                                </div>
                                <div className="w-24 h-8 bg-emerald-500 rounded-lg shadow-lg shadow-emerald-900/20"></div>
                             </div>
                             {/* List */}
                             <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-2">
                                <div className="w-32 h-4 bg-slate-100 rounded mb-4"></div>
                                <div className="h-8 w-full border-b border-slate-50"></div>
                                <div className="h-8 w-full border-b border-slate-50"></div>
                                <div className="h-8 w-full border-b border-slate-50"></div>
                             </div>
                          </div>
                      </div>
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
