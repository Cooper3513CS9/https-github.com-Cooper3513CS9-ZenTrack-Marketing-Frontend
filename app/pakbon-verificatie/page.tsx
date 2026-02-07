'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import {
  PackageCheck, Camera, ClipboardList, AlertTriangle, Clock, Shield, MessageCircle,
  Check, X, ArrowRight, Smartphone, CheckCircle2, ChevronRight, PackageSearch,
  FileText, ShieldCheck
} from 'lucide-react'

export default function PakbonVerificatiePage() {
  const router = useRouter()
  const [activeScenario, setActiveScenario] = useState(0)

  const navigateToRegister = () => {
    router.push('https://app.zentrack.nl/sign-up?utm_source=pakbon-verificatie&utm_campaign=feature-page')
  }
  const navigateToLogin = () => {
    router.push('https://app.zentrack.nl/sign-in')
  }
  const navigateToLegal = (view: string) => {
    if (view === 'legal-privacy') router.push('/legal/privacy')
    if (view === 'legal-terms') router.push('/legal/terms')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const renderPhoneContent = () => {
    switch (activeScenario) {
      case 0:
        return (
          <div className="animate-fade-in p-3">
            <div className="flex justify-end mb-3">
              <div className="bg-[#DCF8C6] p-2.5 rounded-lg rounded-tr-none max-w-[90%] shadow-sm text-xs">
                <div className="flex items-center gap-2 mb-1 pb-1 border-b border-emerald-200/50">
                  <Camera className="w-3 h-3 text-emerald-600" />
                  <span className="font-bold text-[10px] text-emerald-800">PAKBON FOTO</span>
                </div>
                <p className="text-slate-700">Net levering van Mediq ontvangen.</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-1">Pakbon gescand!</p>
                <div className="space-y-1.5 text-slate-600">
                  <p className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-500 shrink-0" /> <span>10 van 10 artikelen geleverd</span></p>
                  <p className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-500 shrink-0" /> <span>Komt overeen met factuur MED-4821</span></p>
                </div>
                <div className="mt-2 bg-emerald-50 p-1.5 rounded border border-emerald-100 text-[10px] text-emerald-700 font-bold">
                  Levering compleet — alles klopt!
                </div>
              </div>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="animate-fade-in p-3">
            <div className="flex justify-end mb-3">
              <div className="bg-[#DCF8C6] p-2.5 rounded-lg rounded-tr-none max-w-[90%] shadow-sm text-xs">
                <div className="flex items-center gap-2 mb-1 pb-1 border-b border-emerald-200/50">
                  <Camera className="w-3 h-3 text-emerald-600" />
                  <span className="font-bold text-[10px] text-emerald-800">PAKBON CHECK</span>
                </div>
                <p className="text-slate-700">Levering Henry Schein controleren.</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-2">Mismatch gedetecteerd!</p>
                <div className="space-y-1.5 text-slate-600">
                  <p className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-500 shrink-0" /> <span>7 van 8 artikelen geleverd</span></p>
                  <p className="flex items-center gap-1.5"><X className="w-3 h-3 text-red-500 shrink-0" /> <span className="font-bold text-red-600">Ontbreekt: Hechtmateriaal 3-0</span></p>
                </div>
                <div className="mt-2 bg-red-50 p-1.5 rounded border border-red-100 text-[10px] text-red-700 font-bold">
                  Neem contact op met Henry Schein
                </div>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="animate-fade-in p-3">
            <div className="flex justify-end mb-3">
              <div className="bg-[#DCF8C6] p-2.5 rounded-lg rounded-tr-none max-w-[90%] shadow-sm text-xs">
                <div className="flex items-center gap-2 mb-1 pb-1 border-b border-emerald-200/50">
                  <ClipboardList className="w-3 h-3 text-emerald-600" />
                  <span className="font-bold text-[10px] text-emerald-800">STATUS</span>
                </div>
                <p className="text-slate-700">Open leveringen?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-2">Leveringsoverzicht</p>
                <div className="space-y-1.5 text-slate-600">
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span> <span>Mediq — 3 leveringen compleet</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span> <span>Henry Schein — 1 artikel ontbreekt</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span> <span>Pharmaline — levering onderweg</span></p>
                </div>
                <div className="mt-2 bg-orange-50 p-1.5 rounded border border-orange-100 text-[10px] text-orange-700 font-bold">
                  1 open mismatch — actie vereist
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative">
      <Header onLoginClick={navigateToLogin} onRegisterClick={navigateToRegister} />

      <main>
        {/* ===== HERO ===== */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                <div className="relative w-[260px] md:w-[320px] h-[520px] md:h-[640px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-slate-900/50">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
                  <div className="bg-[#075E54] h-24 pt-8 px-4 flex items-center gap-3 text-white z-10 relative shadow-md">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#075E54] font-bold text-lg">
                      <Logo className="w-6 h-6" variant="avatar" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">ZenTrack</p>
                      <p className="text-[10px] text-emerald-100 opacity-80">Online</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 top-24 bg-[#E5DDD5] z-0 flex flex-col justify-end pb-6">
                    <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
                    <div className="relative z-10 px-2">
                      {renderPhoneContent()}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 flex gap-2 left-1/2 -translate-x-1/2 md:hidden">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={() => setActiveScenario(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeScenario === i ? 'w-6 bg-teal-500' : 'w-1.5 bg-slate-300'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <PackageCheck className="w-4 h-4" />
                  <span>Automatische levering controle</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                  Weet Binnen 30 Sec<br />
                  <span className="text-emerald-600">of Alles Geleverd Is.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                  Maak een foto van de pakbon — ZenTrack vergelijkt automatisch met uw facturen en voorraad.
                  <strong className="text-slate-900 block mt-2">Ontbrekende artikelen? Direct een melding.</strong>
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                  <button
                    onClick={navigateToRegister}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                  >
                    Gratis Proberen <ArrowRight className="w-5 h-5" />
                  </button>
                  <a href="#hoe-werkt-het" className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-600 font-bold border border-slate-200 hover:bg-slate-50 transition-colors text-center">
                    Hoe werkt het?
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-2"><PackageSearch className="w-4 h-4" /> Directe mismatch detectie</span>
                  <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> GDPR Compliant</span>
                  <span className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> Via WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HET PROBLEEM ===== */}
        <section className="py-20 bg-slate-50 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Herkenbaar? <span className="text-red-500">Dit gaat mis.</span>
              </h2>
              <p className="text-lg text-slate-600">Ontbrekende leveringen kosten u geld en tijd — elke week.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: ClipboardList,
                  title: 'Handmatig dozen tellen',
                  desc: 'De assistente telt dozen en streept af op de pakbon. Kost 15 minuten per levering — en toch worden dingen gemist.',
                  color: 'text-red-500',
                  bg: 'bg-red-50',
                  border: 'border-red-100',
                },
                {
                  icon: AlertTriangle,
                  title: 'Ontbrekende artikelen pas later ontdekt',
                  desc: 'U merkt het pas als u het product nodig heeft. De leverancier zegt: "te laat om te claimen".',
                  color: 'text-orange-500',
                  bg: 'bg-orange-50',
                  border: 'border-orange-100',
                },
                {
                  icon: Clock,
                  title: 'Verkeerde aantallen betaald',
                  desc: '8 dozen besteld, 7 geleverd, 8 betaald. Zonder pakbon-factuur vergelijking betaalt u voor lucht.',
                  color: 'text-yellow-600',
                  bg: 'bg-yellow-50',
                  border: 'border-yellow-100',
                },
              ].map((item, i) => (
                <div key={i} className={`${item.bg} rounded-2xl p-6 border ${item.border}`}>
                  <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOE WERKT HET ===== */}
        <section id="hoe-werkt-het" className="py-20 bg-white scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                <PackageCheck className="w-4 h-4" />
                <span>3 simpele stappen</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Zo werkt <span className="text-emerald-600">Pakbon Verificatie</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Pakbon fotograferen',
                  desc: 'Maak een foto van de pakbon bij ontvangst van de levering. Via WhatsApp of het dashboard.',
                  icon: Camera,
                  color: 'bg-teal-500',
                },
                {
                  step: '2',
                  title: 'Automatische vergelijking',
                  desc: 'ZenTrack vergelijkt de pakbon met uw factuur en bestelling. Aantallen, producten, artikelnummers.',
                  icon: PackageSearch,
                  color: 'bg-orange-500',
                },
                {
                  step: '3',
                  title: 'Resultaat in seconden',
                  desc: 'Direct een melding: alles klopt of er ontbreken artikelen. Met actiepunten voor de leverancier.',
                  icon: ShieldCheck,
                  color: 'bg-emerald-500',
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Stap {item.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ZONDER VS MET ===== */}
        <section className="py-20 bg-slate-50 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Zonder vs. met <span className="text-emerald-600">Pakbon Verificatie</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Zonder Verificatie</h3>
                </div>
                <div className="space-y-3">
                  <FeatureX text="15 minuten per levering handmatig controleren" />
                  <FeatureX text="Ontbrekende artikelen pas bij gebruik ontdekt" />
                  <FeatureX text="Te laat om te claimen bij de leverancier" />
                  <FeatureX text="Betalen voor niet-geleverde producten" />
                  <FeatureX text="Geen audit trail van leveringen" />
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500 rounded-t-3xl"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Met Pakbon Verificatie</h3>
                </div>
                <div className="space-y-3">
                  <FeatureCheck text="Controle in 30 seconden via WhatsApp foto" highlighted />
                  <FeatureCheck text="Directe melding bij ontbrekende artikelen" />
                  <FeatureCheck text="Automatische factuur-pakbon vergelijking" />
                  <FeatureCheck text="Nooit meer betalen voor niet-geleverd" />
                  <FeatureCheck text="Complete leveringshistorie als bewijs" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <PackageCheck className="w-4 h-4" />
              <span>Nooit meer ontbrekende leveringen</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Levering ontvangen?<br />
              <span className="text-emerald-400">Controleer in 30 seconden.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
              Foto maken, versturen, klaar. ZenTrack vergelijkt automatisch met uw facturen en meldt afwijkingen.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <button
                onClick={navigateToRegister}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
              >
                Gratis Proberen <ArrowRight className="w-5 h-5" />
              </button>
              <a href="/#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-300 font-bold border border-slate-700 hover:bg-slate-800 transition-colors text-center">
                Neem contact op
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 14 dagen gratis</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Via WhatsApp</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Nederlandse servers</span>
            </div>
          </div>
        </section>
      </main>

      <Footer onLoginClick={navigateToRegister} onNavigate={navigateToLegal} />
    </div>
  )
}

const FeatureCheck: React.FC<{ text: string; highlighted?: boolean }> = ({ text, highlighted }) => (
  <div className="flex items-start gap-3">
    <div className={`mt-0.5 p-0.5 rounded-full ${highlighted ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
      <Check className="w-3 h-3" />
    </div>
    <span className={`text-sm ${highlighted ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>{text}</span>
  </div>
)

const FeatureX: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 p-0.5 rounded-full bg-red-100 text-red-500">
      <X className="w-3 h-3" />
    </div>
    <span className="text-sm text-slate-600">{text}</span>
  </div>
)
