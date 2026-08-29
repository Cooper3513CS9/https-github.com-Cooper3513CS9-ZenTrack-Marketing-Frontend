"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Pricing } from '@/components/Pricing';

const faqs = [
  {
    q: 'Wat kost ZenTrack?',
    a: 'ZenTrack kost €99 per locatie per maand (lijstprijs, maandelijks opzegbaar). Founding-praktijken betalen €79 per maand bij een looptijd van 12 maanden. Alles zit erin: er zijn geen pakketten of losse modules.',
  },
  {
    q: 'Wat telt als een locatie?',
    a: 'Eén locatie is één bezoekadres met eigen voorraad. Teamleden en facturen zijn onbeperkt; je betaalt nooit per gebruiker of per factuur.',
  },
  {
    q: 'Is er een gratis versie van ZenTrack?',
    a: 'Ja: de inkoop-check is gratis, zonder creditcard of verplichting. Je uploadt je eigen leveranciersfacturen en ziet wat je te veel betaalt en hoeveel. Bestellen, prijsbewaking met leveranciersnamen en de vervaldatum-bewaking via WhatsApp zitten in het abonnement.',
  },
  {
    q: 'Hoe werkt de 60-dagen-leveringsgarantie?',
    a: 'Na 60 dagen maken we samen de balans op. Heeft ZenTrack minder besparing aangewezen dan het abonnement tot dan kostte, dan mag je per direct stoppen en betalen we het verschil terug. Voorwaarde: upload binnen 30 dagen je volledige inkoopadministratie van de afgelopen 12 maanden, zodat we eerlijk kunnen rekenen.',
  },
  {
    q: 'Wij hebben meerdere locaties. Wat kost dat?',
    a: 'Elke locatie (bezoekadres) telt als één ZenTrack. Vanaf vijf locaties geldt een staffelkorting op aanvraag; voor zorggroepen met 20 of meer locaties maken we een partnerschap op maat. Je krijgt één factuur voor alle locaties, met overzicht per locatie.',
  },
  {
    q: 'Zit ik ergens aan vast?',
    a: 'De lijstprijs van €99 is maandelijks opzegbaar. Het founding-tarief van €79 heeft een looptijd van 12 maanden met kwartaalfacturen. Je data kun je altijd exporteren of laten verwijderen.',
  },
];

export default function PrijzenPage() {
  const router = useRouter();
  const navigateToRegister = () => { window.location.href = 'https://app.zentrack.nl/sign-up'; };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => { window.location.href = 'https://app.zentrack.nl/sign-in'; }} onRegisterClick={navigateToRegister} />
      <main>

        {/* ANTWOORD-EERST */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-emerald-50/50 to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Wat kost ZenTrack?
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              ZenTrack kost <strong>€99 per locatie per maand</strong> (maandelijks opzegbaar).
              Founding-praktijken betalen <strong>€79 per maand</strong> bij 12 maanden.
              De <Link href="/inkoop-check" className="text-emerald-600 underline">inkoop-check</Link> is gratis.
            </p>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Er geldt een 60-dagen-leveringsgarantie: wijzen wij minder besparing aan dan het abonnement tot dan kostte,
              dan krijg je het verschil terug en mag je per direct stoppen.
            </p>
          </div>
        </section>

        {/* PRIJSKAARTEN (zelfde sectie als homepage) */}
        <Pricing onRegisterClick={navigateToRegister} />

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Veelgestelde vragen over de prijs</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button onClick={navigateToRegister} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald-600/20">
                Start de gratis inkoop-check
              </button>
              <p className="text-sm text-slate-500 mt-4">
                Vragen over meerdere locaties of zorggroepen? Mail <a href="mailto:info@zentrack.nl" className="text-emerald-600 underline">info@zentrack.nl</a> of bel 06-2388-5227.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer onLoginClick={() => { window.location.href = 'https://app.zentrack.nl/sign-in'; }} onNavigate={(v) => router.push(v === 'legal-terms' ? '/legal/terms' : '/legal/privacy')} />
    </div>
  );
}
