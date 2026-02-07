'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import {
  TrendingDown, Camera, ClipboardList, AlertTriangle, Clock, Shield, MessageCircle,
  Check, X, ArrowRight, Smartphone, CheckCircle2, ChevronRight, Search,
  BarChart3, ShoppingCart, DollarSign
} from 'lucide-react'

export default function SlimBestellenPage() {
  const router = useRouter()
  const [activeScenario, setActiveScenario] = useState(0)

  const navigateToRegister = () => {
    router.push('https://app.zentrack.nl/sign-up?utm_source=slim-bestellen&utm_campaign=feature-page')
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
                  <Search className="w-3 h-3 text-emerald-600" />
                  <span className="font-bold text-[10px] text-emerald-800">PRIJS CHECK</span>
                </div>
                <p className="text-slate-700">Wat kost handschoenen nitryl M?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-2">Prijsvergelijking</p>
                <div className="space-y-1.5 text-slate-600">
                  <p className="flex items-center justify-between"><span>Mediq</span> <span className="font-bold">€12,50/doos</span></p>
                  <p className="flex items-center justify-between"><span>Henry Schein</span> <span className="font-bold text-emerald-600">€10,90/doos</span></p>
                  <p className="flex items-center justify-between"><span>Pharmaline</span> <span className="font-bold">€11,75/doos</span></p>
                </div>
                <div className="mt-2 bg-emerald-50 p-1.5 rounded border border-emerald-100 text-[10px] text-emerald-700 font-bold">
                  Besparing: €1,60/doos bij Henry Schein
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
                  <ShoppingCart className="w-3 h-3 text-emerald-600" />
                  <span className="font-bold text-[10px] text-emerald-800">BESTEL TIP</span>
                </div>
                <p className="text-slate-700">Wat moet ik bestellen?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-2">Bestelsuggestie</p>
                <div className="space-y-1.5 text-slate-600">
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span> <span className="font-bold">Handschoenen M</span> <span className="text-[10px] text-red-500">(op!)</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span> <span>Injectienaald 21G</span> <span className="text-[10px] text-orange-500">(bijna op)</span></p>
                  <p className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span> <span>Pleisterstrips</span> <span className="text-[10px] text-slate-400">(3 dozen)</span></p>
                </div>
                <div className="mt-2 bg-blue-50 p-1.5 rounded border border-blue-100 text-[10px] text-blue-700 font-bold">
                  Tip: Bundel bij Henry Schein = €24 besparing
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
                  <span className="font-bold text-[10px] text-emerald-800">BESPARING</span>
                </div>
                <p className="text-slate-700">Hoeveel heb ik bespaard?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-slate-100">
                <p className="font-bold text-slate-800 mb-2">Besparingsoverzicht Q4</p>
                <div className="space-y-1.5 text-slate-600">
                  <p className="flex items-center justify-between"><span>Prijsverschillen gevonden</span> <span className="font-bold">47</span></p>
                  <p className="flex items-center justify-between"><span>Bestellingen geoptimaliseerd</span> <span className="font-bold">12</span></p>
                  <p className="flex items-center justify-between"><span>Dubbele bestellingen voorkomen</span> <span className="font-bold">3</span></p>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">Totale besparing Q4</span>
                  <span className="font-bold text-emerald-600 text-sm">€1.240</span>
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
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeScenario === i ? 'w-6 bg-amber-500' : 'w-1.5 bg-slate-300'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <TrendingDown className="w-4 h-4" />
                  <span>9.000+ producten vergeleken</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                  Nooit Meer Te Veel<br />
                  <span className="text-emerald-600">Betalen voor Supplies.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                  ZenTrack vergelijkt automatisch prijzen bij meerdere leveranciers en geeft bestelsuggesties op basis van uw verbruik.
                  <strong className="text-slate-900 block mt-2">Bespaar tot €4.800 per jaar. Zonder extra werk.</strong>
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
                  <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" /> Tot €4.800/jaar besparing</span>
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
              <p className="text-lg text-slate-600">De meeste praktijken betalen te veel — zonder het te weten.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: DollarSign,
                  title: 'Altijd dezelfde leverancier',
                  desc: 'U bestelt al jaren bij dezelfde leverancier uit gewoonte. Maar is dat nog steeds de beste prijs?',
                  color: 'text-red-500',
                  bg: 'bg-red-50',
                  border: 'border-red-100',
                },
                {
                  icon: AlertTriangle,
                  title: 'Stille prijsverhogingen',
                  desc: 'Leveranciers verhogen geleidelijk hun prijzen. Zonder monitoring betaalt u maanden te veel.',
                  color: 'text-orange-500',
                  bg: 'bg-orange-50',
                  border: 'border-orange-100',
                },
                {
                  icon: Clock,
                  title: 'Geen tijd om te vergelijken',
                  desc: '3 webshops openen, prijzen opzoeken, vergelijken, bestellen. Kost een uur per bestelling.',
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
                <TrendingDown className="w-4 h-4" />
                <span>3 simpele stappen</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Zo werkt <span className="text-emerald-600">Slim Bestellen</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Verbruik wordt bijgehouden',
                  desc: 'Via facturen en voorraadtellingen leert ZenTrack wat u gebruikt, hoeveel en wanneer.',
                  icon: BarChart3,
                  color: 'bg-amber-500',
                },
                {
                  step: '2',
                  title: 'Prijzen automatisch vergeleken',
                  desc: 'ZenTrack vergelijkt 9.000+ producten bij meerdere leveranciers. U krijgt altijd de beste prijs.',
                  icon: Search,
                  color: 'bg-orange-500',
                },
                {
                  step: '3',
                  title: 'Bestelsuggestie via WhatsApp',
                  desc: 'U krijgt een melding: "Handschoenen bijna op. Beste prijs: Henry Schein €10,90." Een tik = besteld.',
                  icon: ShoppingCart,
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

        {/* ===== BESPARING VOORBEELD ===== */}
        <section className="py-20 bg-slate-50 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Waar u bespaart
              </h2>
              <p className="text-lg text-slate-600">Prijsverschillen van 15-40% zijn geen uitzondering.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Prijsvergelijking', desc: 'Meerdere leveranciers', icon: '🔍', bg: 'bg-amber-50', border: 'border-amber-200' },
                { label: 'Bundelkorting', desc: 'Slim combineren', icon: '📦', bg: 'bg-emerald-50', border: 'border-emerald-200' },
                { label: 'Timing', desc: 'Bestel op juiste moment', icon: '⏰', bg: 'bg-blue-50', border: 'border-blue-200' },
                { label: 'Duplicaten', desc: 'Voorkomen dubbel bestellen', icon: '🚫', bg: 'bg-purple-50', border: 'border-purple-200' },
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
                Zonder vs. met <span className="text-emerald-600">Slim Bestellen</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Zonder Slim Bestellen</h3>
                </div>
                <div className="space-y-3">
                  <FeatureX text="Altijd dezelfde leverancier, ook al is het duurder" />
                  <FeatureX text="Geen zicht op prijswijzigingen" />
                  <FeatureX text="Een uur per week kwijt aan vergelijken" />
                  <FeatureX text="Te veel bestellen of te laat bestellen" />
                  <FeatureX text="Dubbele bestellingen door miscommunicatie" />
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500 rounded-t-3xl"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Met Slim Bestellen</h3>
                </div>
                <div className="space-y-3">
                  <FeatureCheck text="Automatische prijsvergelijking bij 3+ leveranciers" highlighted />
                  <FeatureCheck text="Direct melding bij prijswijzigingen" />
                  <FeatureCheck text="Bestelsuggesties op basis van verbruik" />
                  <FeatureCheck text="Optimale bestelmomenten (op tijd, niet te vroeg)" />
                  <FeatureCheck text="Besparingsoverzicht per kwartaal" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <TrendingDown className="w-4 h-4" />
              <span>Bespaar tot €4.800 per jaar</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Slim inkopen?<br />
              <span className="text-emerald-400">ZenTrack doet het rekenwerk.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
              Na een paar facturen kent ZenTrack uw verbruik. Daarna krijgt u automatisch de beste prijs bij elke bestelling.
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
