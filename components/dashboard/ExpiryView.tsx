"use client";

import React from 'react';
import { AlertTriangle, Clock, Trash2, Calendar, CheckCircle2, ArrowLeft } from 'lucide-react';

interface Props {
    onBack?: () => void;
}

export const ExpiryView: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center gap-3 mb-6">
         <button onClick={onBack} className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600">
            <ArrowLeft className="w-5 h-5" />
         </button>
         <h2 className="text-xl font-bold text-slate-900">Expiratie Radar</h2>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Expiratie Radar</h2>
        <p className="text-slate-500">Proactieve monitoring van houdbaarheid en steriele datums.</p>
      </div>

      {/* Summary Cards (Buckets from Doc) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
         <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Verlopen</span>
                <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">2</p>
            <p className="text-xs text-slate-500 mt-1">Waarde: €45,60</p>
         </div>
         
         <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">&lt; 30 Dagen</span>
                <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">15</p>
            <p className="text-xs text-slate-500 mt-1">Waarde: €234,50</p>
         </div>

         <div className="bg-yellow-50 p-5 rounded-2xl border border-yellow-100">
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-yellow-700 uppercase tracking-wider">&lt; 60 Dagen</span>
                <Calendar className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">28</p>
            <p className="text-xs text-slate-500 mt-1">Waarde: €567,80</p>
         </div>

         <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Totaal OK</span>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">217</p>
            <p className="text-xs text-slate-500 mt-1">Items veilig</p>
         </div>
      </div>

      {/* Action List */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
         <div className="p-4 bg-slate-50 border-b border-slate-100 font-medium text-sm text-slate-500">
            Actie vereist (Gesorteerd op prioriteit)
         </div>
         <div className="divide-y divide-slate-100">
            {/* Critical Item */}
            <div className="p-4 flex items-center gap-4 hover:bg-red-50/30 transition-colors group">
               <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6" />
               </div>
               <div className="flex-1">
                  <h4 className="font-bold text-slate-900">Paracetamol 500mg</h4>
                  <p className="text-xs text-slate-500">Batch: LOT-2024-123 • Locatie: Spreekkamer 1</p>
               </div>
               <div className="text-right mr-4">
                  <p className="text-red-600 font-bold text-sm">Verloopt in 15 dagen</p>
                  <p className="text-xs text-slate-400">50 stuks (€45,60)</p>
               </div>
               <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-50">
                     Melden
                  </button>
                  <button className="px-3 py-1.5 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 flex items-center gap-1">
                     <Trash2 className="w-3 h-3" /> Afvoeren
                  </button>
               </div>
            </div>

            {/* Warning Item */}
            <div className="p-4 flex items-center gap-4 hover:bg-orange-50/30 transition-colors group">
               <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
               </div>
               <div className="flex-1">
                  <h4 className="font-bold text-slate-900">Insuline Novomix</h4>
                  <p className="text-xs text-slate-500">Batch: LOT-2024-456 • Locatie: Koelkast</p>
               </div>
               <div className="text-right mr-4">
                  <p className="text-orange-600 font-bold text-sm">Verloopt in 45 dagen</p>
                  <p className="text-xs text-slate-400">12 pennen (€189,00)</p>
               </div>
               <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-50">
                     Herinnering
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
