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
              <span>Gratis — geen creditcard, geen verplichting</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              De gratis inkoop-check.<br />
              <span className="text-emerald-600">Betaal je niet te veel?</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Upload je eigen leveranciersfacturen en zie zwart-op-wit wat je te veel betaalt — en hoeveel je kunt besparen.
              <strong className="text-slate-900 block mt-2">Jouw facturen, jouw cijfers, jouw data.</strong>
            </p>
            <button onClick={navigateToRegister} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald-600/20 inline-flex items-center gap-2">
              Start de gratis check <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* ZO WERKT HET — DE LADDER */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Zo werkt het — in drie stappen</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <Upload className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">1. Begin met één factuur</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Sleep één factuur (PDF of foto) en zie binnen twee minuten een eerste signaal: welke producten herkend zijn en waar je op déze factuur al te veel betaalt.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">2. Upload meer maanden</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Met een kwartaal krijg je een jaar-indicatie; met 12 maanden facturen een volwaardig besparingsrapport op basis van jouw échte volumes. Hoe completer, hoe scherper.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">3. Jij beslist wat erna komt</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Het rapport toont wát er te besparen valt en hoevéél. Wil je ook zien wáár het goedkoper kan en het regelen met één JA via WhatsApp? Dat zit in het abonnement — met 60-dagen-leveringsgarantie.</p>
              </div>
            </div>
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
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Andere praktijken zien nooit jouw facturen, prijzen of naam — en we verkopen niets door</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Geen patiëntgegevens, bewust geen koppeling met je HIS</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Data op ISO 27001-gecertificeerde EU-infrastructuur; export of verwijderen kan altijd</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Verwerkersovereenkomst op aanvraag via <a href="mailto:info@zentrack.nl" className="text-emerald-600 underline">info@zentrack.nl</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <button onClick={navigateToRegister} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald-600/20 inline-flex items-center gap-2">
                Start de gratis inkoop-check <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-slate-500 mt-4">Of bekijk eerst <Link href="/#prijzen" className="text-emerald-600 underline">de prijzen en de 60-dagen-leveringsgarantie</Link>.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer onLoginClick={() => { window.location.href = 'https://app.zentrack.nl/sign-in'; }} onNavigate={(v) => router.push(v === 'legal-terms' ? '/legal/terms' : '/legal/privacy')} />
    </div>
  );
}
