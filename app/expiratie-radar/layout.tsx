import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expiratie Radar: Vervaldatum-bewaking via WhatsApp | ZenTrack',
  description: 'Vervaldatum-bewaking voor huisartsenpraktijken: foto van de verpakking, automatische WhatsApp-alerts 30, 14 en 7 dagen vooraf met kastlocatie. Onderdeel van ZenTrack Compleet — start met de gratis inkoop-check.',
  keywords: [
    'vervaldatum tracking medicijnen',
    'expiratie radar huisarts',
    'verlopen medicijnen voorkomen',
    'houdbaarheidsdatum medische producten',
    'vervaldatum alerts whatsapp',
    'WhatsApp alerts medicijnen',
    'FIFO medicijnen huisarts',
    'steriel materiaal houdbaarheid',
    'productverspilling voorkomen zorg',
    'medische producten verlopen',
  ],
  openGraph: {
    title: 'Expiratie Radar: Vervaldatum-bewaking via WhatsApp | ZenTrack',
    description: 'Voorkom verlopen medicijnen: automatische WhatsApp-alerts vooraf, met kastlocatie. Onderdeel van ZenTrack Compleet.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/expiratie-radar',
  },
}

export default function ExpiratieRadarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
