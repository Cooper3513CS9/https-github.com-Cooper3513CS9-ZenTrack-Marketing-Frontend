"use client";

import React, { useState, useEffect } from 'react';
import { Check, Rocket, Building2, Users, Crown, Zap, Shield } from 'lucide-react';

interface PricingProps {
  onRegisterClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRegisterClick }) => {
  const [activeTab, setActiveTab] = useState<'solo' | 'group'>('solo');

  // Enterprise Calculator Logic
  const [locations, setLocations] = useState(15);
  const [enterpriseData, setEnterpriseData] = useState({
      pricePerLoc: 0,
      dashboardFee: 0,
      monthlyTotal: 0,
      yearlyTotal: 0,
      savings: 0,
      roi: 0
  });

  useEffect(() => {
      let pricePerLoc = 49;
      let dashboardFee = 0;

      // Tier Logic
      if (locations < 10) { // Tier 1 (2-9)
          pricePerLoc = 69;
          dashboardFee = 299;
      } else if (locations < 25) { // Tier 2 (10-24)
          pricePerLoc = 59;
          dashboardFee = 499;
      } else if (locations < 50) { // Tier 3 (25-49)
          pricePerLoc = 49;
          dashboardFee = 699;
      } else { // Tier 4 (50+)
          pricePerLoc = 39;
          dashboardFee = 999;
      }

      const monthlyTotal = (locations * pricePerLoc) + dashboardFee;
      const yearlyTotal = monthlyTotal * 12;
      
      // ROI Calculation (Conservative: ~5x return based on docs)
      const estimatedSavings = yearlyTotal * 5.2; 
      const roi = Math.round(((estimatedSavings - yearlyTotal) / yearlyTotal) * 100);

      setEnterpriseData({
          pricePerLoc,
          dashboardFee,
          monthlyTotal,
          yearlyTotal,
          savings: Math.round(estimatedSavings),
          roi
      });
  }, [locations]);

  return (
    <section id="prijzen" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
       {/* Background accent */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pilot Offer Banner */}
        <div className="mb-16 bg-gradient-to-r from-emerald-900/50 to-slate-800/50 rounded-3xl p-1 border border-emerald-500/30">
            <div className="bg-slate-900/80 backdrop-blur rounded-[22px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                        <Rocket className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg">Pilot Partner Worden?</h3>
                        <p className="text-slate-400 text-sm">Nog 15 plekken. 3 maanden gratis + 50% lifetime korting.</p>
                    </div>
                </div>
                <button onClick={onRegisterClick} className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-emerald-900/20 whitespace-nowrap">
                    Claim Pilot Plek →
                </button>
            </div>
        </div>

        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparante Prijzen</h2>
           <p className="text-slate-400 text-lg">Kies het plan dat past bij jouw praktijkgrootte.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
            <div className="bg-slate-800 p-1.5 rounded-xl flex gap-1">
                <button 
                    onClick={() => setActiveTab('solo')}
                    className={`px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'solo' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                    <Users className="w-4 h-4" /> Solo Praktijk
                </button>
                <button 
                    onClick={() => setActiveTab('group')}
                    className={`px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'group' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                    <Building2 className="w-4 h-4" /> Zorggroep & Ketens
                </button>
            </div>
        </div>

        {/* CONTENT: SOLO (3 Tiers) */}
        {activeTab === 'solo' && (
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
                {/* PLAN 1: PROTECT */}
                <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-colors flex flex-col">
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center mb-4 text-slate-300">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Protect</h3>
                        <p className="text-slate-400 text-sm mt-2">Bescherm tegen leverfouten en onnodige kosten.</p>
                    </div>
                    <div className="mb-6">
                        <span className="text-4xl font-bold text-white">€79</span>
                        <span className="text-slate-500">/mnd</span>
                    </div>
                    <button onClick={onRegisterClick} className="w-full py-3 rounded-xl border border-slate-600 text-white font-bold hover:bg-slate-700 transition-colors mb-8">
                        Start met Beschermen
                    </button>
                    <div className="space-y-3 flex-1">
                        <FeatureItem text="Factuur upload & OCR" />
                        <FeatureItem text="Pakbon verificatie" />
                        <FeatureItem text="Missende items detectie" />
                        <FeatureItem text="Basis voorraad overzicht" />
                        <FeatureItem text="GDPR Compliant" />
                    </div>
                </div>

                {/* PLAN 2: CONTROL (Popular) */}
                <div className="bg-white text-slate-900 rounded-3xl p-8 border border-emerald-500 shadow-xl relative transform md:-translate-y-4 flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500"></div>
                    <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Meest Gekozen
                    </div>
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Control</h3>
                        <p className="text-slate-500 text-sm mt-2">Complete supply chain controle & expiratie.</p>
                    </div>
                    <div className="mb-6">
                        <span className="text-4xl font-bold text-slate-900">€149</span>
                        <span className="text-slate-500">/mnd</span>
                    </div>
                    <button onClick={onRegisterClick} className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 mb-8">
                        Kies Control
                    </button>
                    <div className="space-y-3 flex-1">
                        <FeatureItem text="Alles uit Protect +" highlighted />
                        <FeatureItem text="Auto-factuur verwerking" />
                        <FeatureItem text="Real-time expiratie alerts" />
                        <FeatureItem text="WhatsApp Integratie (Emma)" />
                        <FeatureItem text="AI-bestelsuggesties" />
                        <FeatureItem text="Team toegang (8 users)" />
                    </div>
                </div>

                {/* PLAN 3: OPTIMIZE */}
                <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 hover:border-purple-500 transition-colors flex flex-col">
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-purple-900/50 rounded-2xl flex items-center justify-center mb-4 text-purple-400">
                            <Crown className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Optimize</h3>
                        <p className="text-slate-400 text-sm mt-2">Maximale efficiency & predictive ordering.</p>
                    </div>
                    <div className="mb-6">
                        <span className="text-4xl font-bold text-white">€249</span>
                        <span className="text-slate-500">/mnd</span>
                    </div>
                    <button onClick={onRegisterClick} className="w-full py-3 rounded-xl border border-slate-600 text-white font-bold hover:bg-purple-600 hover:border-purple-600 transition-colors mb-8">
                        Kies Optimize
                    </button>
                    <div className="space-y-3 flex-1">
                        <FeatureItem text="Alles uit Control +" />
                        <FeatureItem text="Predictive Ordering (ML)" />
                        <FeatureItem text="Multi-locatie support" />
                        <FeatureItem text="Leverancier prijsvergelijking" />
                        <FeatureItem text="Custom rapportages" />
                        <FeatureItem text="Priority Support (<2u)" />
                    </div>
                </div>
            </div>
        )}

        {/* CONTENT: GROUP (Calculator) */}
        {activeTab === 'group' && (
            <div className="max-w-4xl mx-auto animate-fade-in">
                <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl relative">
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-purple-500/30">
                            <Building2 className="w-4 h-4" /> Enterprise Calculator
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Schaalvoordeel voor Zorggroepen</h3>
                        <p className="text-slate-400 text-sm">Hoe meer locaties, hoe lager de prijs per praktijk.</p>
                    </div>

                    {/* Slider */}
                    <div className="mb-8 bg-slate-900/50 p-6 rounded-2xl border border-slate-600">
                        <div className="flex justify-between items-end mb-4">
                            <label className="text-sm font-bold text-slate-300">Aantal Locaties</label>
                            <span className="text-3xl font-bold text-white bg-slate-700 px-3 py-1 rounded-lg min-w-[3ch] text-center">{locations}</span>
                        </div>
                        <input 
                            type="range" 
                            min="2" max="100" 
                            value={locations} 
                            onChange={(e) => setLocations(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                        />
                        <div className="flex justify-between text-xs text-slate-500 mt-2">
                            <span>2</span>
                            <span>50</span>
                            <span>100+</span>
                        </div>
                    </div>

                    {/* Calculation Result */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                            <p className="text-xs text-slate-400 mb-1">Prijs per locatie</p>
                            <p className="text-xl font-bold text-white">€{enterpriseData.pricePerLoc}</p>
                        </div>
                        <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                            <p className="text-xs text-slate-400 mb-1">Manager Dashboard</p>
                            <p className="text-xl font-bold text-white">€{enterpriseData.dashboardFee}</p>
                        </div>
                    </div>

                    <div className="mb-8 pt-6 border-t border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-lg font-bold text-white">Totaal per maand</span>
                            <span className="text-2xl font-bold text-purple-400">€{enterpriseData.monthlyTotal.toLocaleString('nl-NL')}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-400">Geschatte jaarlijkse besparing</span>
                            <span className="text-sm font-bold text-emerald-400">~ €{enterpriseData.savings.toLocaleString('nl-NL')}</span>
                        </div>
                    </div>

                    <button onClick={onRegisterClick} className="w-full py-4 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/20">
                        Vraag Offerte Aan
                    </button>
                    
                    <div className="mt-6 text-center">
                        <p className="text-xs text-slate-400 mb-2">Budget beperkt?</p>
                        <button className="text-sm font-bold text-slate-300 hover:text-white border-b border-dashed border-slate-500 pb-0.5 hover:border-white transition-colors">
                            Bekijk de "Analytics Only" optie (€499/mnd)
                        </button>
                    </div>
                </div>
            </div>
        )}

        {/* Trust Badges */}
        <div className="mt-20 pt-10 border-t border-slate-800 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-500 text-sm font-medium">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 14 dagen gratis proberen</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Geen setup kosten</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Data op Nederlandse servers</span>
        </div>

      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ text: string; highlighted?: boolean }> = ({ text, highlighted }) => (
    <div className="flex items-start gap-3">
        <div className={`mt-1 p-0.5 rounded-full ${highlighted ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-700 text-slate-400'}`}>
            <Check className="w-3 h-3" />
        </div>
        <span className={`text-sm ${highlighted ? 'text-white font-semibold' : 'text-slate-300'}`}>{text}</span>
    </div>
);
