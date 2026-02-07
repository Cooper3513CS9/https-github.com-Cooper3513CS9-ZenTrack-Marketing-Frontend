import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Slim Bestellen — Nooit Meer Te Veel Betalen | ZenTrack',
  description: 'Vergelijk prijzen van 9.000+ medische producten bij meerdere leveranciers. ZenTrack vindt automatisch de beste prijs. Bespaar tot €4.800 per jaar.',
  keywords: [
    'slim bestellen',
    'medische producten prijsvergelijking',
    'goedkoper inkopen huisarts',
    'leverancier vergelijken',
    'inkoopkosten besparen praktijk',
    'beste prijs medische supplies',
    'ZenTrack slim bestellen',
    'automatisch bestellen huisarts',
    'inkoopoptimalisatie zorg',
    'prijsintelligentie medisch',
  ],
  openGraph: {
    title: 'Slim Bestellen — Bespaar tot €4.800/jaar | ZenTrack',
    description: 'Vergelijk prijzen bij meerdere leveranciers. Bespaar automatisch op medische producten.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function SlimBestellenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
