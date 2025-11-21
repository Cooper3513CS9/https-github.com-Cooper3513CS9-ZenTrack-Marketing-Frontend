
import React from 'react';
import { AlertTriangle, TrendingUp, Heart, Users, ShieldCheck, Battery, BellRing } from 'lucide-react';

interface RightPanelProps {
  pendingApproval?: boolean;
}

export const RightPanel: React.FC<RightPanelProps> = ({ pendingApproval }) => {
  return (
    <div className="w-80 bg-white border-l border-slate-200 hidden xl:flex flex-col h-screen overflow-y-auto">
      <div className="p-6 border-b border-slate-100">
        <h3 className="font-semibold text-slate-800">Praktijk Balans</h3>
        <p className="text-xs text-slate-500">Real-time welzijn</p>
      </div>

      {/* New "Zen Metrics" */}
      <div className="p-4 space-y-4">
         <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
            <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-800 uppercase">Team Rust</span>
            </div>
            <p className="text-2xl font-bold text-slate-800">98%</p>
            <p className="text-xs text-slate-500 mt-1">Geen spoedbestellingen deze week.</p>
         </div>

         <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-blue-800 uppercase">Vakantie Proof</span>
            </div>
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Systeem beveiligd</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Iedereen kan nu bestellen.</p>
         </div>
      </div>

      {/* Alerts */}
      <div className="p-4 border-t border-slate-100">
         <div className="flex items-center justify-between mb-3">
             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Aandachtspunten</h4>
             {pendingApproval && (
                 <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">1 Actie</span>
             )}
         </div>
         
         {pendingApproval && (
            <div className="bg-white p-3 rounded-xl border border-emerald-200 shadow-sm mb-3 cursor-pointer hover:bg-emerald-50 transition-colors group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                <div className="flex items-start gap-3">
                <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg">
                    <BellRing className="w-4 h-4" />
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-800">1 Wachtend Besluit</p>
                    <p className="text-xs text-slate-500">AI inkoopvoorstel klaar.</p>
                </div>
                </div>
            </div>
         )}

         <div className="bg-white p-3 rounded-xl border border-slate-200 mb-3 hover:border-orange-300 transition-colors cursor-pointer group">
            <div className="flex items-start gap-3">
               <div className="p-1.5 bg-orange-100 text-orange-600 rounded-lg group-hover:bg-orange-200 transition-colors">
                   <AlertTriangle className="w-4 h-4" />
               </div>
               <div>
                 <p className="text-sm font-bold text-slate-800">Ibuprofen voorraad laag</p>
                 <p className="text-xs text-slate-500">Bestel voor vrijdag om weekendstress te voorkomen.</p>
               </div>
            </div>
         </div>
      </div>

      {/* Operational Health */}
      <div className="p-4 border-t border-slate-100 mt-auto">
         <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Operationele Status</h4>
         <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
               <span className="text-slate-600 flex items-center gap-2">
                 <Battery className="w-4 h-4 text-emerald-500" /> Energie Team
               </span>
               <span className="font-medium text-emerald-600">Hoog</span>
            </div>
            <div className="flex items-center justify-between text-sm">
               <span className="text-slate-600 flex items-center gap-2">
                 <TrendingUp className="w-4 h-4 text-slate-400" /> Bestelfouten
               </span>
               <span className="font-medium text-slate-900">0 deze maand</span>
            </div>
         </div>
      </div>
    </div>
  );
};
