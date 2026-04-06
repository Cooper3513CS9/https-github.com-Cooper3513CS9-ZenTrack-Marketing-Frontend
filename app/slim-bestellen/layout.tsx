import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Slim Bestellen: Vergelijk Inkoopprijzen Medische Producten | ZenTrack',
  description: 'Huisartspraktijken besteden gemiddeld €1.000-2.500/maand aan medische verbruiksartikelen. Prijsverschillen tussen leveranciers lopen op tot 40%. ZenTrack vergelijkt automatisch en signaleert besparingen.',
  keywords: [
    'slim bestellen huisarts',
    'medische producten prijsvergelijking',
    'goedkoper inkopen huisartspraktijk',
    'leverancier vergelijken zorg',
    'inkoopkosten besparen praktijk',
    'prijsintelligentie medisch',
    'inkoopoptimalisatie huisarts',
    'medische verbruiksartikelen vergelijken',
    'leverancierskeuze huisarts',
    'kostenbesparing huisartspraktijk',
  ],
  openGraph: {
    title: 'Slim Bestellen: Vergelijk Inkoopprijzen | ZenTrack',
    description: 'Prijsverschillen tot 40% tussen leveranciers. ZenTrack vergelijkt automatisch en signaleert besparingen voor huisartspraktijken.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/slim-bestellen',
  },
}

export default function SlimBestellenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
