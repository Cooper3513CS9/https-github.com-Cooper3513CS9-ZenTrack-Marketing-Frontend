
import React from 'react';
import { Users, ShieldCheck, Heart, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="over-ons" className="py-20 bg-white border-t border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* The Story */}
            <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                    <Users className="w-4 h-4" />
                    <span>Ons Verhaal</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Uw digitale assistent.<br/><span className="text-emerald-600">De regisseur van de keten.</span>
                </h2>
                <div className="prose prose-slate text-slate-600 leading-relaxed">
                    <p className="text-lg mb-4">
                        <strong>Een huisartsenpraktijk is een complex logistiek punt.</strong> Er komen dagelijks goederen binnen van verschillende leveranciers, via diverse portalen en met losse pakbonnen.
                    </p>
                    <p className="mb-4">
                        Ronald en Jord zagen dat het voor praktijkhouders lastig is om het overzicht te bewaren in deze stroom. Producten verlopen ongemerkt en voorraadbeheer kost kostbare tijd die niet naar de patiënt gaat.
                    </p>
                    <p>
                        ZenTrack fungeert als de <strong>verbindende factor</strong>. Wij zijn de intelligente schil die over uw bestaande processen heen ligt. Of het nu gaat om het digitaliseren van voorraad, het verifiëren van leveringen of het bewaken van expiries: ZenTrack zorgt dat alle losse eindjes samenkomen in één helder overzicht.
                    </p>
                </div>
                
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                        <p className="text-3xl font-bold text-emerald-600 mb-1">100%</p>
                        <p className="text-xs font-bold text-slate-500 uppercase">Onafhankelijk</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                        <p className="text-3xl font-bold text-emerald-600 mb-1">4</p>
                        <p className="text-xs font-bold text-slate-500 uppercase">Fases (Keten)</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                        <p className="text-3xl font-bold text-emerald-600 mb-1">NL</p>
                        <p className="text-xs font-bold text-slate-500 uppercase">Support</p>
                    </div>
                </div>
            </div>

            {/* The Founders */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold mb-8 relative z-10">De Kracht achter ZenTrack</h3>
                
                <div className="space-y-6 relative z-10">
                    {/* Ronald */}
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center text-xl font-bold border-2 border-slate-600 flex-shrink-0">
                            RB
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Ronald Beute</h4>
                            <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Founder & Strategy</p>
                            <p className="text-slate-400 text-sm">"We bouwen geen software, we bouwen rust. Door de logistieke stromen te digitaliseren, geven we de regie terug aan de praktijk."</p>
                        </div>
                    </div>

                    {/* Jord */}
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                         <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center text-xl font-bold border-2 border-slate-600 flex-shrink-0">
                            JW
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Jord van der Woude</h4>
                            <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Co-Founder & Success</p>
                            <p className="text-slate-400 text-sm">"Huisartsen willen best digitaliseren, maar het moet simpel zijn. Daarom maken wij geavanceerde techniek onzichtbaar via WhatsApp."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-slate-100">
            <div className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Centraal Overzicht</h3>
                <p className="text-sm text-slate-600">
                    Van inkoopfactuur tot gebruik in de behandelkamer. Wij verbinden de data die nu versnipperd is.
                </p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Onafhankelijk Partner</h3>
                <p className="text-sm text-slate-600">
                    Wij werken voor de praktijk. Ons doel is om uw processen efficiënter en inzichtelijker te maken.
                </p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Huisarts Centraal</h3>
                <p className="text-sm text-slate-600">
                    Onze loyaliteit ligt bij u. Elk inzicht dat onze AI geeft, is gericht op uw tijdwinst en gemak.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};
