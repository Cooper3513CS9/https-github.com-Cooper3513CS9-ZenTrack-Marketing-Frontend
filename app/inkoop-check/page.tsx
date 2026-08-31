"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Check, FileSearch, ArrowRight, ShieldCheck, Upload, LineChart, Lock } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function InkoopCheckPage() {
  const router = useRouter();
  const navigateToRegister = () => { window.location.href = 'https://app.zentrack.nl/sign-up'; };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => { window.location.href = 'https://app.zentrack.nl/sign-in'; }} onRegisterClick={navigateToRegister} />
      <main>

        {/* HERO */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-emerald-50/50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <FileSearch className="w-4 h-4" />
              <span>Gratis, zonder creditcard of verplichting</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Waar zitten jouw<br />
              <span className="text-emerald-600">inkoopkansen?</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Upload je leveranciersfacturen en ontdek welke producten ook elders verkrijgbaar zijn, in welke categorieën ZenTrack lagere prijzen heeft gevonden — en een indicatie van het bedrag.
              <strong className="text-slate-900 block mt-2">Jouw facturen, jouw cijfers, jouw data.</strong>
            </p>
            <button onClick={navigateToRegister} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald-600/20 inline-flex items-center gap-2">
              Analyseer mijn facturen gratis <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* ZO WERKT HET — DE LADDER */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Zo werkt het, in drie stappen</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <Upload className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">1. Upload je eerste factuur</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Upload een PDF of foto. ZenTrack herkent de leverancier, producten, aantallen en prijzen en laat binnen enkele minuten een eerste analyse zien.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">2. Maak de analyse betrouwbaarder</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Met meer facturen vindt ZenTrack meer vergelijkbare producten en wordt de indicatie scherper: een kwartaal geeft een jaar-indicatie, twaalf maanden een volwaardig besparingsrapport op jouw échte volumes.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">3. Bekijk waar kansen liggen</h3>
                <p className="text-sm text-slate-600 leading-relaxed">De gratis check toont hoeveel besparingskansen er zijn, in welke categorieën, en een indicatie van het bedrag. Met ZenTrack Compleet zie je om welke producten, merken en leveranciers het gaat — en krijg je kant-en-klare bestelvoorstellen die je goedkeurt met één JA via WhatsApp. Bij aangesloten webshops plaatsen wij de bestelling daarna direct. Mét 60-dagen-garantie.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6 text-center max-w-2xl mx-auto">
              De vergelijking gebruikt periodiek ververste lijstprijzen van vergelijkbare producten.
              Elke besparing is een indicatie — definitief wordt hij pas wanneer je daadwerkelijk anders bestelt.
            </p>
          </div>
        </section>

        {/* VERTROUWEN */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Jouw cijfers zijn van jou</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Andere praktijken zien nooit jouw facturen, prijzen of naam, en we verkopen niets door</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Geen patiëntgegevens, bewust geen koppeling met je HIS</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Data op ISO 27001-gecertificeerde EU-infrastructuur; export of verwijderen kan altijd</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Verwerkersovereenkomst op aanvraag via <a href="mailto:info@zentrack.nl" className="text-emerald-600 underline">info@zentrack.nl</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <button onClick={navigateToRegister} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald-600/20 inline-flex items-center gap-2">
                Analyseer mijn facturen gratis <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-slate-500 mt-4">Of bekijk eerst <Link href="/prijzen" className="text-emerald-600 underline">de prijzen en de 60-dagen-garantie</Link>.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer onLoginClick={() => { window.location.href = 'https://app.zentrack.nl/sign-in'; }} onNavigate={(v) => router.push(v === 'legal-terms' ? '/legal/terms' : '/legal/privacy')} />
    </div>
  );
}
