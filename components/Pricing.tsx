
import React from 'react';
import { Check, Rocket, Shield, Zap, BarChart3, MessageSquare } from 'lucide-react';

interface PricingProps {
  onRegisterClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRegisterClick }) => {
  return (
    <section id="prijzen" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
       {/* Background accent */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pilot Offer Section - Highlighted */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-emerald-900/80 to-slate-800 rounded-3xl p-8 md:p-12 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl z-20">
                NOG 15 PLEKKEN BESCHIKBAAR
             </div>
             
             <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                <div className="flex-1">
                   <div className="flex items-center gap-2 text-emerald-400 font-bold mb-4">
                      <Rocket className="w-5 h-5" />
                      <span>PILOT GROEP UITBREIDING</span>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold mb-6">Word Pilot Partner</h2>
                   <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                     Na 10 intensieve gesprekken breiden we uit. We zoeken nog 15 praktijken voor de laatste testfase.
                     Jouw feedback bepaalt de toekomst van ZenTrack.
                   </p>
                   <ul className="space-y-3 text-sm text-slate-300 mb-8">
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 3 maanden gratis (t.w.v. €447)</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Directe lijn met founders</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Na pilot: 50% lifetime korting (€25/mnd)</li>
                   </ul>
                   <button 
                     onClick={onRegisterClick}
                     className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-emerald-600/20"
                   >
                     Word Pilot Partner →
                   </button>
                </div>
                <div className="w-full md:w-auto bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
                    <div className="text-center">
                        <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Pilot Deal</p>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-4xl font-bold text-white">Gratis</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-6">voor de eerste 3 maanden</p>
                        <div className="border-t border-slate-700 pt-4 mt-4">
                            <p className="text-xs text-slate-500 mb-1">Daarna voor partners</p>
                            <p className="text-xl font-bold text-emerald-400">€25 <span className="text-sm font-normal text-slate-500">/maand</span></p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Future Pricing Tiers */}
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold mb-4">Toekomstige Pakketten</h2>
           <p className="text-slate-400">De standaardtarieven na de pilot fase.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1: Protect */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 flex flex-col hover:border-slate-600 transition-colors">
                <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-900/50 text-blue-400 rounded-xl flex items-center justify-center mb-4">
                        <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">ZenTrack PROTECT</h3>
                    <p className="text-sm text-slate-400 h-10">Bescherm tegen leverfouten en onnodige kosten.</p>
                </div>
                <div className="mb-8">
                    <span className="text-3xl font-bold">€79</span><span className="text-slate-500">/maand</span>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                    <FeatureItem text="Factuur upload & OCR" />
                    <FeatureItem text="Pakbon verificatie" />
                    <FeatureItem text="Missende items detectie" />
                    <FeatureItem text="Basis voorraad overzicht" />
                    <FeatureItem text="GDPR Compliant" />
                </div>
                <button onClick={onRegisterClick} className="w-full py-3 rounded-xl border border-slate-600 hover:bg-slate-700 text-white font-medium transition-colors">
                    Start met Beschermen
                </button>
            </div>

            {/* Tier 2: Control */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-emerald-500/50 flex flex-col relative shadow-xl">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    MEEST POPULAIR
                </div>
                <div className="mb-6">
                    <div className="w-12 h-12 bg-emerald-900/50 text-emerald-400 rounded-xl flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">ZenTrack CONTROL</h3>
                    <p className="text-sm text-slate-400 h-10">Complete supply chain controle & expiratie.</p>
                </div>
                <div className="mb-8">
                    <span className="text-3xl font-bold">€149</span><span className="text-slate-500">/maand</span>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Alles uit Protect +</div>
                    <FeatureItem text="Auto-factuur verwerking" highlighted />
                    <FeatureItem text="Real-time expiratie alerts" highlighted />
                    <FeatureItem text="WhatsApp Integratie" highlighted />
                    <FeatureItem text="AI-bestelsuggesties" />
                    <FeatureItem text="Team toegang (8 users)" />
                </div>
                <button onClick={onRegisterClick} className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors shadow-lg shadow-emerald-900/20">
                    Kies Control
                </button>
            </div>

            {/* Tier 3: Optimize */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 flex flex-col hover:border-slate-600 transition-colors">
                <div className="mb-6">
                    <div className="w-12 h-12 bg-purple-900/50 text-purple-400 rounded-xl flex items-center justify-center mb-4">
                        <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">ZenTrack OPTIMIZE</h3>
                    <p className="text-sm text-slate-400 h-10">Maximale efficiency & multi-locatie.</p>
                </div>
                <div className="mb-8">
                    <span className="text-3xl font-bold">€249</span><span className="text-slate-500">/maand</span>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                    <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Alles uit Control +</div>
                    <FeatureItem text="Predictive Ordering (ML)" />
                    <FeatureItem text="Multi-locatie support" />
                    <FeatureItem text="Leverancier prijsvergelijking" />
                    <FeatureItem text="Custom rapportages" />
                    <FeatureItem text="Priority Support (<2u)" />
                </div>
                <button onClick={onRegisterClick} className="w-full py-3 rounded-xl border border-slate-600 hover:bg-slate-700 text-white font-medium transition-colors">
                    Contact Verkoop
                </button>
            </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-10 border-t border-slate-800 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-500 text-sm font-medium">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 14 dagen gratis proberen</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Geen setup kosten</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Maandelijks opzegbaar</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Nederlandse support</span>
        </div>

      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ text: string; highlighted?: boolean }> = ({ text, highlighted }) => (
    <div className="flex items-start gap-3">
        <div className={`mt-1 p-0.5 rounded-full ${highlighted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-400'}`}>
            <Check className="w-3 h-3" />
        </div>
        <span className={`text-sm ${highlighted ? 'text-white font-medium' : 'text-slate-300'}`}>{text}</span>
    </div>
);
