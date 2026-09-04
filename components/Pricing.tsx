"use client";

import React from 'react';
import Link from 'next/link';
import { Check, Building2, Zap, FileSearch, ArrowRight, Info, ShieldCheck } from 'lucide-react';

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

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Eén compleet abonnement per locatie.</h2>
          <p className="text-slate-400 text-lg">Start met de gratis inkoop-check. Upgrade wanneer jij er klaar voor bent.</p>
          <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">Een praktijk is al gauw uren per week kwijt aan bestellen, voorraad en vervaldatums. Kostbare tijd van je team.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* KAART 1: GRATIS INKOOP-CHECK */}
          <div className="bg-slate-800/50 rounded-3xl p-8 border-2 border-emerald-500/40 hover:border-emerald-400 transition-colors flex flex-col relative">
            <div className="absolute -top-3 -right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
              Gratis
            </div>
            <div className="mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
                <FileSearch className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Inkoop-check</h3>
              <p className="text-slate-400 text-sm mt-2 min-h-[60px]">Zie op je eigen facturen waar je besparingskansen zitten. Vrijblijvend, jouw data blijft van jou.</p>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">€0</span>
            </div>
            <p className="text-sm font-semibold text-emerald-400 mb-6 min-h-[40px]">Sleep één factuur en zie binnen 2 minuten wat wij zien.</p>
            <button onClick={onRegisterClick} className="w-full py-3 rounded-xl border border-emerald-500/50 text-white font-bold hover:bg-emerald-600 hover:border-emerald-600 transition-colors mb-8 flex items-center justify-center gap-2">
              Start de gratis check <ArrowRight className="w-4 h-4" />
            </button>
            <div className="space-y-3 flex-1">
              <FeatureItem text="Facturen automatisch ingelezen" />
              <FeatureItem text="Besparingsrapport: indicatie van wat je te veel betaalt — en hoeveel" />
              <FeatureItem text="Uitgaven per leverancier en categorie" />
              <FeatureItem text="Vraag het je assistent: chat over je eigen cijfers" />
              <FeatureItem text="Geen creditcard, geen verplichting" />
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Hoe meer maanden facturen je uploadt (liefst 12), hoe scherper het rapport. Wáár je die besparing precies pakt, zie je met het abonnement.
              </p>
            </div>
          </div>

          {/* KAART 2: ZENTRACK COMPLEET (hero) */}
          <div className="bg-white text-slate-900 rounded-3xl p-8 border border-emerald-500 shadow-xl relative transform lg:-translate-y-4 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500"></div>
            <div className="mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">ZenTrack Compleet</h3>
              <p className="text-slate-500 text-sm mt-2 min-h-[60px]">Alles erin. Eén prijs per locatie, team en facturen onbeperkt.</p>
            </div>
            <div className="mb-1">
              <span className="text-4xl font-bold text-slate-900">€79</span>
              <span className="text-slate-500">/mnd per locatie · excl. btw</span>
            </div>
            <p className="text-xs text-slate-500 mb-4">Founding-tarief · excl. btw · looptijd 12 maanden · per kwartaal gefactureerd — daarna lijstprijs €99/mnd, maandelijks opzegbaar</p>
            <p className="text-sm font-semibold text-emerald-700 mb-6 min-h-[40px]">ZenTrack zet je bestelling klaar. Jij keurt goed met één JA via WhatsApp.</p>
            <button onClick={onRegisterClick} className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 mb-8">
              Begin met de gratis check
            </button>
            <div className="space-y-3 flex-1">
              <FeatureItem text="Bestelvoorstellen staan klaar en goedkeuren is JA appen; bij aangesloten webshops plaatsen wij direct, anders ligt hij verzendklaar" highlighted light />
              <FeatureItem text="Doorlopende prijsbewaking: zie precies wáár je die besparing pakt" light />
              <FeatureItem text="Vervaldatum-alerts via WhatsApp: 30, 14 en 7 dagen vooraf én op de dag zelf, mét kastlocatie" light />
              <FeatureItem text="Pakbon-foto → levering automatisch gecheckt" light />
              <FeatureItem text="Binnenkomende voorraad automatisch verwerkt via facturen en pakbonnen" light />
              <FeatureItem text="Alles vastgelegd: wie keurde wat goed, alle facturen doorzoekbaar" light />
              <FeatureItem text="Datums & documenten voor je visitatie-map, met bewijsrapport" light />
              <FeatureItem text="Emma in dashboard én WhatsApp (jij bepaalt wie), en ze onthoudt jullie afspraken" light />
              <FeatureItem text="Team onbeperkt, ieder een eigen rol" light />
            </div>
          </div>

          {/* KAART 3: MEERDERE LOCATIES */}
          <div className="bg-slate-800/50 rounded-3xl p-8 border border-dashed border-purple-500/40 hover:border-purple-500 transition-colors flex flex-col">
            <div className="mb-6">
              <div className="w-12 h-12 bg-purple-900/50 rounded-2xl flex items-center justify-center mb-4 text-purple-400">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Meerdere locaties</h3>
              <p className="text-slate-400 text-sm mt-2 min-h-[60px]">Gezondheidscentra, ketens en zorggroepen. Elke locatie (bezoekadres) telt als één ZenTrack.</p>
            </div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">Staffelkorting op aanvraag</span>
            </div>
            <p className="text-sm font-semibold text-purple-300 mb-6 min-h-[40px]">Meer locaties, beter tarief. Zorggroepen: partnerschap op maat.</p>
            <Link href="/zorggroepen" className="w-full py-3 rounded-xl border border-purple-500/50 text-white font-bold hover:bg-purple-600 hover:border-purple-600 transition-colors mb-8 flex items-center justify-center gap-2">
              Bekijk de zorggroep-aanpak <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="space-y-3 flex-1">
              <FeatureItem text="Eén factuur voor alle locaties" />
              <FeatureItem text="Overzicht en verantwoording per locatie" />
              <FeatureItem text="Uitrol locatie voor locatie, in jullie tempo" />
            </div>
          </div>
        </div>

        {/* 60-DAGEN-GARANTIE */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-slate-800/60 rounded-2xl p-6 border border-emerald-500/30">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg mt-0.5 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-2">De 60-dagen-garantie</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Na 60 dagen maken we samen de balans op. Hebben wij minder besparing aangewezen dan je abonnement tot dan kostte?
                  Dan mag je per direct stoppen én betalen we je het verschil terug.
                  <span className="text-slate-300"> Voorbeeld: abonnement kostte €158, wij wezen €110 aan. Je krijgt €48 terug en je bent vrij.</span>
                </p>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  Voorwaarde: upload binnen 30 dagen je volledige inkoopadministratie van de afgelopen 12 maanden (alle leveranciers), zodat we eerlijk kunnen rekenen.
                  De tijdwinst van je team rekenen we niet eens mee. Die is de bonus. Volledige voorwaarden in onze algemene voorwaarden.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Uitleg */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg mt-0.5 shrink-0">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-2">Zo werkt het</h4>
                <ul className="space-y-1.5 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span><strong className="text-slate-300">Stap 1: gratis inkoop-check.</strong> Upload je facturen en zie wat je te veel betaalt. Geen verplichting, jouw data blijft van jou.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span><strong className="text-slate-300">Stap 2: pas upgraden als het uit kan.</strong> De check laat éérst zien wat er te halen valt. Je koopt nooit blind.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span><strong className="text-slate-300">Eén tarief, alles erin.</strong> Geen pakketten of verborgen modules: het verschil zit alleen in het aantal locaties.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-10 border-t border-slate-800 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-500 text-sm font-medium">
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Eerst bewijs, dan betalen</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Geen setup-kosten</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Data op EU-servers (Frankfurt/Amsterdam)</span>
        </div>

      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ text: string; highlighted?: boolean; light?: boolean }> = ({ text, highlighted, light }) => (
  <div className="flex items-start gap-3">
    <div className={`mt-1 p-0.5 rounded-full ${highlighted ? 'bg-emerald-100 text-emerald-600' : light ? 'bg-slate-200 text-slate-500' : 'bg-slate-700 text-slate-400'}`}>
      <Check className="w-3 h-3" />
    </div>
    <span className={`text-sm ${highlighted ? (light ? 'text-slate-900 font-semibold' : 'text-white font-semibold') : light ? 'text-slate-600' : 'text-slate-300'}`}>{text}</span>
  </div>
);
