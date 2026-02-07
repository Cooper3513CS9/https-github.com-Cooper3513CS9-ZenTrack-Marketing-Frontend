import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expiratie Radar — Gratis Vervaldatum Tracking | ZenTrack',
  description: 'Gratis vervaldatum tracking voor medische producten. Houd tot 25 producten bij, ontvang automatische WhatsApp alerts en voorkom verlopen medicijnen. Geen creditcard nodig.',
  keywords: [
    'expiratie radar',
    'vervaldatum tracking',
    'medische producten houdbaarheid',
    'verlopen medicijnen voorkomen',
    'gratis voorraad tracking',
    'WhatsApp alerts medicijnen',
    'huisarts voorraad',
    'steriel materiaal tracking',
    'FIFO medicijnen',
    'ZenTrack gratis',
  ],
  openGraph: {
    title: 'Expiratie Radar — Gratis voor elke praktijk | ZenTrack',
    description: 'Nooit meer verlopen medicijnen. Track 25 producten gratis via WhatsApp.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function ExpiratieRadarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
