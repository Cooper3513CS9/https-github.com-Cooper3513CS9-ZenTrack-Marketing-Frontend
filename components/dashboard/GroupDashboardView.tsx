'use client';

import React, { useState } from 'react';
import { TrendingUp, AlertCircle, ArrowRight, ArrowLeft, MapPin, Euro, BarChart3, Lock } from 'lucide-react';

interface Props {
    onBack?: () => void;
}

export const GroupDashboardView: React.FC<Props> = ({ onBack }) => {
  const [viewMode, setViewMode] = useState<'full' | 'analytics'>('full');

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto bg-slate-50">
      <div className="lg:hidden flex items-center gap-3 mb-6">
         <button onClick={onBack} className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600">
            <ArrowLeft className="w-5 h-5" />
         </button>
         <h2 className="text-xl font-bold text-slate-900">Zorggroep</h2>
      </div>

      <div className="flex justify-end mb-4">
          <div className="bg-white border border-slate-200 rounded-lg p-1 flex text-xs">
              <button onClick={() => setViewMode('full')} className={`px-3 py-1.5 rounded-md font-bold transition-colors ${viewMode === 'full' ? 'bg-purple-100 text-purple-700' : 'text-slate-500'}`}>Full Enterprise</button>
              <button onClick={() => setViewMode('analytics')} className={`px-3 py-1.5 rounded-md font-bold transition-colors ${viewMode === 'analytics' ? 'bg-slate-100 text-slate-700' : 'text-slate-500'}`}>Analytics Only</button>
          </div>
      </div>

      <div className="mb-8">
         <div className="flex items-center gap-2 mb-1">
            <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${viewMode === 'full' ? 'bg-purple-100 text-purple-700' : 'bg-slate-200 text-slate-600'}`}>
                {viewMode === 'full' ? 'Hoofdkantoor' : 'Analytics Viewer'}
            </span>
         </div>
         <h2 className="text-2xl font-bold text-slate-900">Gezond Noord Dashboard</h2>
         <p className="text-slate-500">Geaggregeerd inzicht over 40 locaties.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
               <div><p className="text-xs font-bold text-slate-400 uppercase">Totale Spend (30d)</p><h3 className="text-3xl font-bold text-slate-900">€156.234</h3></div>
               <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><Euro className="w-6 h-6" /></div>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-600"><TrendingUp className="w-3 h-3" /> +3.2% vs vorige maand</div>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
               <div><p className="text-xs font-bold text-slate-400 uppercase">Prijsafwijkingen</p><h3 className="text-3xl font-bold text-slate-900">5</h3></div>
               <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><AlertCircle className="w-6 h-6" /></div>
            </div>
            <p className="text-xs text-slate-500">Producten met {'>'} 10% prijsverschil.</p>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
               <div><p className="text-xs font-bold text-slate-400 uppercase">Expiry Risico</p><h3 className="text-3xl font-bold text-slate-900">€4.200</h3></div>
               <div className="p-3 bg-red-50 text-red-600 rounded-xl"><AlertCircle className="w-6 h-6" /></div>
            </div>
            <p className="text-xs text-slate-500">Waarde verloopt binnen 30 dagen.</p>
         </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         {/* Price Benchmark */}
         <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
               <h3 className="font-bold text-slate-900 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-purple-600" /> Prijs Benchmark</h3>
            </div>
            <div className="p-4">
                <div className="flex justify-between mb-2"><span className="font-medium text-slate-800">Handschoenen Latex M</span><span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded">20% Variatie</span></div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm"><span className="text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Locatie Alkmaar</span><span className="font-mono font-bold text-emerald-600">€12,50</span></div>
                    <div className="flex items-center justify-between text-sm bg-red-50 p-1 rounded"><span className="text-slate-700 flex items-center gap-1 font-medium"><MapPin className="w-3 h-3" /> Locatie Heerhugowaard</span><span className="font-mono font-bold text-red-600">€15,00 ⚠️</span></div>
                </div>
            </div>
         </div>

         {/* Transfer Opportunities (Locked in Analytics Mode) */}
         <div className={`bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden relative ${viewMode === 'analytics' ? 'bg-slate-50' : ''}`}>
            {viewMode === 'analytics' && (
                <div className="absolute inset-0 bg-slate-50/80 backdrop-blur-[2px] flex flex-col items-center justify-center z-10 p-6 text-center">
                    <div className="bg-white p-4 rounded-full shadow-lg mb-3"><Lock className="w-6 h-6 text-slate-400" /></div>
                    <h3 className="font-bold text-slate-900 mb-1">Real-time Voorraad</h3>
                    <p className="text-xs text-slate-500 max-w-xs mb-4">Upgrade naar ZenTrack Enterprise voor live transfers.</p>
                </div>
            )}
            <div className="p-6 border-b border-slate-100"><h3 className="font-bold text-slate-900 flex items-center gap-2"><ArrowRight className="w-5 h-5 text-blue-600" /> Transfer Suggesties</h3></div>
            <div className="p-6">
               <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-4">
                  <div className="flex justify-between items-start mb-3"><span className="font-bold text-blue-900 text-sm">Overschot ➔ Tekort</span><span className="bg-white text-blue-600 text-[10px] font-bold px-2 py-1 rounded shadow-sm">Handschoenen</span></div>
                  <div className="text-xs text-slate-600 mb-3">Transfer van 250 stuks bespaart €31,25.</div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-xs font-bold transition-colors">Transfer Goedkeuren</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
