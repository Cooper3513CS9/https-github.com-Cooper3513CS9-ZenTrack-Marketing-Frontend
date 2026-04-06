import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expiratie Radar: Gratis Vervaldatum Tracking Medicijnen | ZenTrack',
  description: 'Gratis vervaldatum tracking voor medische producten in huisartspraktijken. Track tot 25 producten, ontvang WhatsApp alerts bij bijna-verlopen medicijnen. Voorkom productverspilling door verlopen houdbaarheidsdatums.',
  keywords: [
    'vervaldatum tracking medicijnen',
    'expiratie radar huisarts',
    'verlopen medicijnen voorkomen',
    'houdbaarheidsdatum medische producten',
    'gratis vervaldatum tracking',
    'WhatsApp alerts medicijnen',
    'FIFO medicijnen huisarts',
    'steriel materiaal houdbaarheid',
    'productverspilling voorkomen zorg',
    'medische producten verlopen',
  ],
  openGraph: {
    title: 'Expiratie Radar: Gratis Vervaldatum Tracking | ZenTrack',
    description: 'Voorkom verlopen medicijnen. Gratis tracking voor 25 producten met automatische WhatsApp alerts.',
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
