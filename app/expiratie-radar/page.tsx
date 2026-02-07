'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import {
  Radar, Camera, ClipboardList, AlertTriangle, Clock, Shield, MessageCircle,
  Check, X, ArrowRight, Smartphone, CheckCircle2, ChevronRight
} from 'lucide-react'

export default function ExpiratieRadarPage() {
  const router = useRouter()
  const [activeScenario, setActiveScenario] = useState(0)

  const navigateToRegister = () => {
    router.push('https://app.zentrack.nl/sign-up?utm_source=expiratie-radar&utm_campaign=free-tier')
  }
  const navigateToLogin = () => {
    router.push('https://app.zentrack.nl/sign-in')
  }
  const navigateToLegal = (view: string) => {
    if (view === 'legal-privacy') router.push('/legal/privacy')
    if (view === 'legal-terms') router.push('/legal/terms')
  }

  // Auto-rotate phone scenarios
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
                  <span className="font-bold text-[10px] text-emerald-800">SCAN: HANDSCHOENEN</span>
                </div>
                <p className="text-slate-700">Even scannen voor de houdbaarheid.</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-1">Handschoenen Nitryl M</p>
                <div className="space-y-1 text-slate-600">
                  <p>Batch: <span className="font-mono text-[10px] bg-slate-100 px-1 rounded">LOT-L524</span></p>
                  <p>Houdbaar tot: <span className="font-bold text-emerald-600">Maart 2027</span></p>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-400 bg-emerald-50 p-1.5 rounded border border-emerald-100">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span>Nog 13 maanden — alert staat klaar.</span>
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
                  <ClipboardList className="w-3 h-3 text-emerald-600" />
                  <span className="font-bold text-[10px] text-emerald-800">OVERZICHT</span>
                </div>
                <p className="text-slate-700">Wat verloopt er binnenkort?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-2">Expiratie Radar — 8 producten</p>
                <div className="space-y-1.5 text-slate-600">
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span> <span className="font-bold text-red-600">Adrenaline auto-injector</span> <span className="text-[10px] text-red-500">(2 dagen!)</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span> <span>Hechtmateriaal 3-0</span> <span className="text-[10px] text-orange-500">(3 weken)</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span> <span>Lidocaine 1%</span> <span className="text-[10px] text-slate-400">(4 maanden)</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span> <span>Handschoenen</span> <span className="text-[10px] text-slate-400">(13 maanden)</span></p>
                </div>
                <div className="mt-2 bg-red-50 p-1.5 rounded border border-red-100 text-[10px] text-red-700 font-bold">
                  1 product vereist directe actie!
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
                  <Camera className="w-3 h-3 text-emerald-600" />
                  <span className="font-bold text-[10px] text-emerald-800">FOTO: MEDICIJN ETIKET</span>
                </div>
                <p className="text-slate-700">Even checken of deze nog goed is.</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-1">Foto herkend!</p>
                <div className="space-y-1 text-slate-600">
                  <p>Omeprazol 20mg — Batch OM-892</p>
                  <p>Houdbaar tot: <span className="font-bold text-orange-600">Juli 2025</span></p>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-orange-700 bg-orange-50 p-1.5 rounded border border-orange-100">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="font-bold">Nog 3 weken — bestel op tijd bij!</span>
                </div>
                <div className="mt-1.5 bg-slate-50 p-1.5 rounded border border-slate-100 text-center cursor-pointer hover:bg-slate-100 transition-colors">
                  <span className="text-slate-700 font-bold text-[10px]">Toevoegen aan bestellijst</span>
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

              {/* Phone Visual (Mobile First) */}
              <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                <div className="relative w-[260px] md:w-[320px] h-[520px] md:h-[640px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-slate-900/50">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] h-24 pt-8 px-4 flex items-center gap-3 text-white z-10 relative shadow-md">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#075E54] font-bold text-lg">
                      <Logo className="w-6 h-6" variant="avatar" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">ZenTrack</p>
                      <p className="text-[10px] text-emerald-100 opacity-80">Online</p>
                    </div>
                  </div>
                  {/* WhatsApp Body */}
                  <div className="absolute inset-0 top-24 bg-[#E5DDD5] z-0 flex flex-col justify-end pb-6">
                    <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
                    <div className="relative z-10 px-2">
                      {renderPhoneContent()}
                    </div>
                  </div>
                </div>

                {/* Scenario dots */}
                <div className="absolute bottom-4 flex gap-2 left-1/2 -translate-x-1/2 md:hidden">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={() => setActiveScenario(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeScenario === i ? 'w-6 bg-orange-500' : 'w-1.5 bg-slate-300'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <Radar className="w-4 h-4" />
                  <span>Gratis — Geen creditcard nodig</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                  Expiratie Radar.<br />
                  <span className="text-emerald-600">Gratis voor elke praktijk.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                  Houd vervaldatums bij van 25 producten. Ontvang automatische WhatsApp alerts. Voorkom verlopen medicijnen.
                  <strong className="text-slate-900 block mt-2">Via WhatsApp. In 5 minuten klaar.</strong>
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                  <button
                    onClick={navigateToRegister}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                  >
                    Start Gratis <ArrowRight className="w-5 h-5" />
                  </button>
                  <a href="#hoe-werkt-radar" className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-600 font-bold border border-slate-200 hover:bg-slate-50 transition-colors text-center">
                    Hoe werkt het?
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> Via WhatsApp</span>
                  <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> GDPR Compliant</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min setup</span>
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
              <p className="text-lg text-slate-600">Elke praktijk heeft ermee te maken — tot je er iets aan doet.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: ClipboardList,
                  title: 'Excel-lijstjes bijhouden',
                  desc: 'Handmatig bijhouden in spreadsheets. Vergeten updates, onleesbare notities, fouten bij elke telling.',
                  color: 'text-red-500',
                  bg: 'bg-red-50',
                  border: 'border-red-100',
                },
                {
                  icon: AlertTriangle,
                  title: 'Verlopen tijdens een consult',
                  desc: 'Adrenaline pen verlopen, hechtmateriaal over datum. Je ontdekt het pas als je het nodig hebt.',
                  color: 'text-orange-500',
                  bg: 'bg-orange-50',
                  border: 'border-orange-100',
                },
                {
                  icon: Clock,
                  title: 'Elke week kastjes checken',
                  desc: 'De assistente loopt wekelijks alle kasten langs. Kost uren per maand — en toch mis je dingen.',
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
        <section id="hoe-werkt-radar" className="py-20 bg-white scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                <Radar className="w-4 h-4" />
                <span>3 simpele stappen</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Zo werkt de <span className="text-emerald-600">Expiratie Radar</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Product toevoegen',
                  desc: 'Stuur een foto van het etiket via WhatsApp, typ het VERVAL commando, of voeg het toe via het dashboard.',
                  icon: Camera,
                  color: 'bg-blue-500',
                },
                {
                  step: '2',
                  title: 'Verkeerslicht toont status',
                  desc: 'ZenTrack geeft elk product een kleur: groen (veilig), geel (let op), oranje (binnenkort) of rood (actie!).',
                  icon: Radar,
                  color: 'bg-orange-500',
                },
                {
                  step: '3',
                  title: 'Automatische alerts',
                  desc: 'Je krijgt een WhatsApp bericht als een product bijna verloopt. Op tijd bijbestellen, zonder na te denken.',
                  icon: MessageCircle,
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

        {/* ===== VERKEERSLICHT SYSTEEM ===== */}
        <section className="py-20 bg-slate-50 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Het Verkeerslicht Systeem
              </h2>
              <p className="text-lg text-slate-600">In een oogopslag zien welke producten aandacht nodig hebben.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { color: 'bg-emerald-500', label: 'Veilig', range: '6+ maanden', textColor: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' },
                { color: 'bg-yellow-500', label: 'Let op', range: '2-6 maanden', textColor: 'text-yellow-700', bg: 'bg-yellow-50', border: 'border-yellow-200' },
                { color: 'bg-orange-500', label: 'Binnenkort', range: '2-4 weken', textColor: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-200' },
                { color: 'bg-red-500', label: 'Actie!', range: '<2 weken', textColor: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200' },
              ].map((item, i) => (
                <div key={i} className={`${item.bg} rounded-2xl p-5 border ${item.border} text-center`}>
                  <div className={`w-6 h-6 ${item.color} rounded-full mx-auto mb-3`}></div>
                  <h3 className={`text-lg font-bold ${item.textColor} mb-1`}>{item.label}</h3>
                  <p className="text-sm text-slate-600">{item.range}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GRATIS VS BETAALD ===== */}
        <section className="py-20 bg-white scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Begin gratis, <span className="text-emerald-600">groei wanneer je wilt</span>
              </h2>
              <p className="text-lg text-slate-600">De Expiratie Radar is gratis. Wil je meer? Upgrade op elk moment.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* FREE */}
              <div className="bg-emerald-50 rounded-3xl p-8 border-2 border-emerald-200 relative">
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Gratis
                </div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
                    <Radar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Expiratie Radar</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-slate-900">€0</span>
                    <span className="text-slate-500">/maand</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">6 maanden gratis, geen creditcard</p>
                </div>
                <button
                  onClick={navigateToRegister}
                  className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 mb-6"
                >
                  Start Gratis
                </button>
                <div className="space-y-3">
                  <FeatureCheck text="Tot 25 producten" />
                  <FeatureCheck text="Verkeerslicht systeem" />
                  <FeatureCheck text="WhatsApp alerts" />
                  <FeatureCheck text="Dashboard overzicht" />
                  <FeatureCheck text="6 maanden gratis" />
                  <FeatureCheck text="Geen creditcard nodig" />
                </div>
              </div>

              {/* CONTROL */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500 rounded-t-3xl"></div>
                <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Meest Gekozen
                </div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Control</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-slate-900">€149</span>
                    <span className="text-slate-500">/maand</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">14 dagen gratis proberen</p>
                </div>
                <button
                  onClick={navigateToRegister}
                  className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors mb-6"
                >
                  Probeer 14 Dagen Gratis
                </button>
                <div className="space-y-3">
                  <FeatureCheck text="Alles uit Expiratie Radar +" highlighted />
                  <FeatureCheck text="Onbeperkt producten" />
                  <FeatureCheck text="FIFO voorraadbeheer" />
                  <FeatureCheck text="Factuur OCR verwerking" />
                  <FeatureCheck text="Pakbon verificatie" />
                  <FeatureCheck text="AI bestelsuggesties" />
                  <FeatureCheck text="Team toegang (8 users)" />
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="/#prijzen" className="text-emerald-600 hover:text-emerald-700 font-bold text-sm transition-colors">
                Bekijk alle plannen <ChevronRight className="w-4 h-4 inline" />
              </a>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Radar className="w-4 h-4" />
              <span>100% gratis starten</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start vandaag nog.<br />
              <span className="text-emerald-400">Geen creditcard nodig.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
              In 5 minuten klaar. Voeg je eerste product toe via WhatsApp en de Expiratie Radar doet de rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <button
                onClick={navigateToRegister}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
              >
                Start Gratis <ArrowRight className="w-5 h-5" />
              </button>
              <a href="/#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-300 font-bold border border-slate-700 hover:bg-slate-800 transition-colors text-center">
                Neem contact op
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 25 producten gratis</span>
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

// Reusable feature check component
const FeatureCheck: React.FC<{ text: string; highlighted?: boolean }> = ({ text, highlighted }) => (
  <div className="flex items-start gap-3">
    <div className={`mt-0.5 p-0.5 rounded-full ${highlighted ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
      <Check className="w-3 h-3" />
    </div>
    <span className={`text-sm ${highlighted ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>{text}</span>
  </div>
)
