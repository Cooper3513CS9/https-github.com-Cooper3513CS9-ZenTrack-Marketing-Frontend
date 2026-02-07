'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import {
  Boxes, Camera, ClipboardList, AlertTriangle, Clock, Shield, MessageCircle,
  Check, X, ArrowRight, Smartphone, CheckCircle2, ChevronRight, MapPin,
  BarChart3, Package, QrCode
} from 'lucide-react'

export default function VoorraadBeheerPage() {
  const router = useRouter()
  const [activeScenario, setActiveScenario] = useState(0)

  const navigateToRegister = () => {
    router.push('https://app.zentrack.nl/sign-up?utm_source=voorraad-beheer&utm_campaign=feature-page')
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
                  <ClipboardList className="w-3 h-3 text-emerald-600" />
                  <span className="font-bold text-[10px] text-emerald-800">VOORRAAD</span>
                </div>
                <p className="text-slate-700">Wat zit er in behandelkamer 2?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-2">Behandelkamer 2</p>
                <div className="space-y-1.5 text-slate-600">
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span> <span>Handschoenen M — 8 dozen</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span> <span>Injectienaald 21G — 5 dozen</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span> <span>Hechtmateriaal 3-0 — 2 stuks</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span> <span>Tongspatel — 0 stuks</span></p>
                </div>
                <div className="mt-2 bg-red-50 p-1.5 rounded border border-red-100 text-[10px] text-red-700 font-bold">
                  Tongspatel is op! Bestelsuggestie aangemaakt.
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
                  <QrCode className="w-3 h-3 text-emerald-600" />
                  <span className="font-bold text-[10px] text-emerald-800">SCAN</span>
                </div>
                <p className="text-slate-700">Barcode gescand: handschoenen.</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-1">Handschoenen Nitryl M</p>
                <div className="space-y-1 text-slate-600">
                  <p>Locatie: <span className="font-bold text-slate-800">Behandelkamer 2, Kast B</span></p>
                  <p>Voorraad: <span className="font-bold text-emerald-600">8 dozen</span></p>
                  <p>Verbruik: <span className="text-slate-500">~3 dozen/week</span></p>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 p-1.5 rounded border border-emerald-100">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span>Voorraad voldoende voor 2,5 weken</span>
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
                  <BarChart3 className="w-3 h-3 text-emerald-600" />
                  <span className="font-bold text-[10px] text-emerald-800">OVERZICHT</span>
                </div>
                <p className="text-slate-700">Wat moeten we bijbestellen?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-2">Bijbestel suggesties</p>
                <div className="space-y-1.5 text-slate-600">
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span> <span className="font-bold text-red-600">Tongspatel</span> <span className="text-[10px]">(op)</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span> <span>Hechtmateriaal 3-0</span> <span className="text-[10px]">(2 over)</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span> <span>Desinfectiemiddel</span> <span className="text-[10px]">(1 week)</span></p>
                </div>
                <div className="mt-2 bg-blue-50 p-1.5 rounded border border-blue-100 text-[10px] text-blue-700 font-bold">
                  3 producten onder minimumvoorraad
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
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeScenario === i ? 'w-6 bg-indigo-500' : 'w-1.5 bg-slate-300'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <Boxes className="w-4 h-4" />
                  <span>Per kast, kamer en locatie</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                  Voorraad Bijhouden<br />
                  <span className="text-emerald-600">Zonder Excel-Lijstjes.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                  ZenTrack geeft real-time inzicht in uw voorraad per kast, kamer en locatie. Automatisch bijgewerkt bij elke factuur en telling.
                  <strong className="text-slate-900 block mt-2">Altijd weten wat er is. Via WhatsApp of dashboard.</strong>
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
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Per kast en locatie</span>
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
              <p className="text-lg text-slate-600">Elke praktijk worstelt met voorraadoverzicht — tot je het slim aanpakt.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: ClipboardList,
                  title: 'Excel-lijsten die niet kloppen',
                  desc: 'De voorraadlijst is verouderd zodra iemand vergeet een telling in te voeren. En dat gebeurt dagelijks.',
                  color: 'text-red-500',
                  bg: 'bg-red-50',
                  border: 'border-red-100',
                },
                {
                  icon: AlertTriangle,
                  title: 'Pas bij gebruik ontdekken dat iets op is',
                  desc: 'Midden in een consult geen handschoenen meer. Of de assistente loopt naar een lege kast.',
                  color: 'text-orange-500',
                  bg: 'bg-orange-50',
                  border: 'border-orange-100',
                },
                {
                  icon: Clock,
                  title: 'Uren kwijt aan voorraadtellingen',
                  desc: 'Elke week alle kasten langs. Per kamer, per kast, per plank. Kost 2-3 uur per telling.',
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
                <Boxes className="w-4 h-4" />
                <span>3 simpele stappen</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Zo werkt <span className="text-emerald-600">Voorraad Beheer</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Producten toevoegen',
                  desc: 'Scan een barcode, upload een factuur of voeg handmatig toe. Koppel aan kast, kamer of locatie.',
                  icon: QrCode,
                  color: 'bg-indigo-500',
                },
                {
                  step: '2',
                  title: 'Automatisch bijwerken',
                  desc: 'Bij elke factuur, pakbon of telling wordt de voorraad automatisch aangepast. Geen handmatig werk.',
                  icon: Package,
                  color: 'bg-orange-500',
                },
                {
                  step: '3',
                  title: 'Alerts bij lage voorraad',
                  desc: 'Krijg een WhatsApp melding als iets onder het minimum komt. Met bestelsuggestie voor de beste prijs.',
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

        {/* ===== LOCATIE SYSTEEM ===== */}
        <section className="py-20 bg-slate-50 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Overzicht per locatie
              </h2>
              <p className="text-lg text-slate-600">Weet precies wat waar staat — per kamer, kast en plank.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Behandelkamers', desc: 'Per kamer overzicht', icon: '🏥', bg: 'bg-blue-50', border: 'border-blue-200' },
                { label: 'Voorraadkast', desc: 'Centrale opslag', icon: '🗄️', bg: 'bg-emerald-50', border: 'border-emerald-200' },
                { label: 'Spreekkamers', desc: 'Huisarts materiaal', icon: '🩺', bg: 'bg-purple-50', border: 'border-purple-200' },
                { label: 'Spoedkast', desc: 'Noodmedicatie', icon: '🚨', bg: 'bg-red-50', border: 'border-red-200' },
              ].map((item, i) => (
                <div key={i} className={`${item.bg} rounded-2xl p-5 border ${item.border} text-center`}>
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.label}</h3>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ZONDER VS MET ===== */}
        <section className="py-20 bg-white scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Zonder vs. met <span className="text-emerald-600">Voorraad Beheer</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Zonder Voorraad Beheer</h3>
                </div>
                <div className="space-y-3">
                  <FeatureX text="Excel-lijsten die nooit up-to-date zijn" />
                  <FeatureX text="Pas bij gebruik ontdekken dat iets op is" />
                  <FeatureX text="2-3 uur per week aan voorraadtellingen" />
                  <FeatureX text="Geen inzicht per kamer of locatie" />
                  <FeatureX text="Te veel bestellen uit angst voor tekort" />
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500 rounded-t-3xl"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Met Voorraad Beheer</h3>
                </div>
                <div className="space-y-3">
                  <FeatureCheck text="Real-time voorraad per kast en locatie" highlighted />
                  <FeatureCheck text="WhatsApp alert bij lage voorraad" />
                  <FeatureCheck text="Automatisch bijgewerkt via facturen" />
                  <FeatureCheck text="Verbruikspatronen en trends" />
                  <FeatureCheck text="Bestellen op basis van data, niet angst" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Boxes className="w-4 h-4" />
              <span>Altijd weten wat u op voorraad heeft</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Weg met Excel.<br />
              <span className="text-emerald-400">Welkom bij real-time inzicht.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
              Begin met uw eerste factuur of barcodescan. ZenTrack bouwt automatisch uw voorraadinzicht op.
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
