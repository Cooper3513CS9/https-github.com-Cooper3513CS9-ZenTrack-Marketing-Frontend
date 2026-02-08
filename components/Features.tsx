"use client";

import React from 'react';
import Link from 'next/link';
import { Radar, ScanLine, PackageCheck, Boxes, TrendingDown, ShieldCheck, UserCheck, ArrowRight, Clock, Calculator } from 'lucide-react';

const features = [
  {
    title: 'Expiratie Radar',
    description: 'Houd vervaldatums bij van 25 producten. Automatische WhatsApp alerts voordat iets verloopt.',
    href: '/expiratie-radar',
    icon: Radar,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    ctaColor: 'text-emerald-600',
    cardBorder: 'border-2 border-orange-200',
    cardBg: 'bg-orange-50/30',
    isHighlighted: true,
    ctaText: 'Start Gratis',
  },
  {
    title: 'Factuur Scanner',
    description: 'Maak een foto of upload een PDF. AI herkent producten, prijzen en leveranciers in 30 seconden.',
    href: '/factuur-scanner',
    icon: ScanLine,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    ctaColor: 'text-blue-600',
    cardBorder: 'border border-slate-200',
    cardBg: 'bg-white',
    isHighlighted: false,
    ctaText: 'Meer info',
  },
  {
    title: 'Pakbon Verificatie',
    description: 'Scan de pakbon bij levering. ZenTrack vergelijkt direct met de factuur en meldt ontbrekende artikelen.',
    href: '/pakbon-verificatie',
    icon: PackageCheck,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    ctaColor: 'text-teal-600',
    cardBorder: 'border border-slate-200',
    cardBg: 'bg-white',
    isHighlighted: false,
    ctaText: 'Meer info',
  },
  {
    title: 'Voorraad Beheer',
    description: 'Real-time inzicht per behandelkamer en locatie. Voorraadstand altijd actueel via WhatsApp.',
    href: '/voorraad-beheer',
    icon: Boxes,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    ctaColor: 'text-indigo-600',
    cardBorder: 'border border-slate-200',
    cardBg: 'bg-white',
    isHighlighted: false,
    ctaText: 'Meer info',
  },
  {
    title: 'Slim Bestellen',
    description: 'Profiteer van inzicht uit collega-praktijken. ZenTrack vergelijkt factuurdata en herinnert u wanneer het tijd is om bij te bestellen.',
    href: '/slim-bestellen',
    icon: TrendingDown,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    ctaColor: 'text-amber-600',
    cardBorder: 'border border-slate-200',
    cardBg: 'bg-white',
    isHighlighted: false,
    ctaText: 'Meer info',
  },
  {
    title: 'NPA Accreditatie',
    description: 'Uw NPA-dossier groeit automatisch mee. Voorraad, expiraties en leveringen — altijd gedocumenteerd.',
    href: '/npa-accreditatie',
    icon: ShieldCheck,
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    ctaColor: 'text-violet-600',
    cardBorder: 'border border-slate-200',
    cardBg: 'bg-white',
    isHighlighted: false,
    ctaText: 'Meer info',
  },
  {
    title: 'Besparingscalculator',
    description: 'Wat levert ZenTrack uw praktijk op? Reken het uit met uw eigen cijfers — in 30 seconden.',
    href: '/#calculator',
    icon: Calculator,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    ctaColor: 'text-emerald-600',
    cardBorder: 'border-2 border-emerald-200',
    cardBg: 'bg-emerald-50/30',
    isHighlighted: false,
    ctaText: 'Bereken uw besparing',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Alles in één platform
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Wat kan ZenTrack voor <span className="text-emerald-600">uw praktijk</span>?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Van factuurverwerking tot expiratiebeheer — ontdek alle mogelijkheden en start vandaag.
          </p>
        </div>

        {/* Trust Banner: Human in the Loop */}
        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-10 max-w-3xl mx-auto">
          <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
            <UserCheck className="w-5 h-5" />
          </div>
          <p className="text-slate-700 text-sm">
            <strong className="text-slate-900">Jij beslist altijd.</strong> ZenTrack stelt voor, jij geeft de &apos;Go&apos;.
            <span className="text-emerald-600 font-medium"> Emma is je assistent, niet je baas.</span>
          </p>
        </div>

        {/* Feature Grid: 6 clickable cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.href} href={feature.href} className="group">
                <div className={`relative ${feature.cardBg} ${feature.cardBorder} rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>

                  {/* Gratis Badge for Expiratie Radar */}
                  {feature.isHighlighted && (
                    <span className="absolute -top-3 -right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      Gratis
                    </span>
                  )}

                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center ${feature.iconColor} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                    {feature.description}
                  </p>

                  {/* CTA Link */}
                  <div className={`flex items-center gap-1.5 font-semibold text-sm ${feature.ctaColor}`}>
                    <span>{feature.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Automation Timeline (preserved from original) */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-8 border border-slate-100 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">De weg naar Automatisering</h3>
          <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:h-full before:w-0.5 before:bg-slate-200">
            <div className="relative">
              <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-900">Dag 1: Scannen & Registreren</h4>
              <p className="text-sm text-slate-500 mt-1">Facturen, verbruiksartikelen en pakbonnen scannen. Directe verificatie aan de deur.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-900">Maand 1-2: Data Verzamelen</h4>
              <p className="text-sm text-slate-500 mt-1">ZenTrack leert je verbruik. Expiratie notificaties komen binnen via WhatsApp.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-900">Maand 3: Diepte Rapportages</h4>
              <p className="text-sm text-slate-500 mt-1">Eerste kwartaalrapportage. Waar lekt geld weg? Welke voorraad ligt te lang?</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shadow-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <h4 className="font-bold text-slate-900">Toekomst: Automatisch Bestellen</h4>
              <p className="text-sm text-slate-500 mt-1">ZenTrack zet de bestelling klaar voordat jij weet dat het op is. Jij klikt alleen op &apos;Akkoord&apos;.</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
            <Clock className="w-5 h-5 text-slate-400" />
            <span className="text-sm text-slate-600 font-medium">Start vandaag met <span className="text-slate-900">alleen scannen</span></span>
          </div>
        </div>

      </div>
    </section>
  );
};
