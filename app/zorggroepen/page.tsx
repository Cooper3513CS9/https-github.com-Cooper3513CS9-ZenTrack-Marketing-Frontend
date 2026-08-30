"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Check, Network } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GroupSection } from '@/components/GroupSection';

export default function ZorggroepenPage() {
  const router = useRouter();
  const navigateToRegister = () => { window.location.href = 'https://app.zentrack.nl/sign-up'; };
  const navigateToLogin = () => { window.location.href = 'https://app.zentrack.nl/sign-in'; };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={navigateToLogin} onRegisterClick={navigateToRegister} />
      <main>

        {/* ANTWOORD-EERST */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-purple-50/60 to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-purple-200">
              <Network className="w-4 h-4" />
              <span>Voor zorggroepen, ketens en gezondheidscentra</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              ZenTrack voor zorggroepen
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Elke locatie (bezoekadres) telt als één ZenTrack. U krijgt <strong>overzicht en verantwoording per locatie</strong>,
              één factuur voor alles, en een uitrol locatie voor locatie in uw eigen tempo.
              Vanaf vijf locaties geldt een staffelkorting; vanaf twintig maken we een partnerschap op maat.
            </p>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Uw locaties merken er vooral rust van: minder administratie, bestellen met één JA via WhatsApp,
              en vervaldatums die zichzelf melden.
            </p>
          </div>
        </section>

        {/* HET VERHAAL — hergebruikt van de homepage */}
        <GroupSection />

        {/* CTA */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Begin klein.<br />
              <span className="text-purple-400">Rol uit als het werkt.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
              De meeste zorggroepen starten met één locatie en de gratis inkoop-check. Bevalt het bewijs,
              dan schalen we op — locatie voor locatie, in uw tempo.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a
                href="/#contact"
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-purple-900/20 inline-flex items-center justify-center gap-2"
              >
                Plan een strategische sessie <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={navigateToRegister}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-300 font-bold border border-slate-700 hover:bg-slate-800 transition-colors text-center"
              >
                Start met de gratis inkoop-check
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              Liever direct contact? Mail <a href="mailto:info@zentrack.nl" className="text-purple-400 underline">info@zentrack.nl</a> of bel 06-2388-5227.
              Bekijk anders eerst <Link href="/prijzen" className="text-purple-400 underline">de prijzen en de 60-dagen-leveringsgarantie</Link>.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Eén factuur, overzicht per locatie</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Uitrol in uw tempo</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Data op EU-servers (Frankfurt/Amsterdam)</span>
            </div>
          </div>
        </section>

      </main>
      <Footer onLoginClick={navigateToRegister} onNavigate={(v) => router.push(v === 'legal-terms' ? '/legal/terms' : '/legal/privacy')} />
    </div>
  );
}
