import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voorraad Beheer — Zonder Excel, Zonder Stress | ZenTrack',
  description: 'Voorraad bijhouden zonder Excel-lijstjes. ZenTrack biedt real-time inzicht per kast, kamer en locatie. Via WhatsApp of dashboard — altijd actueel.',
  keywords: [
    'voorraad beheer huisarts',
    'voorraadbeheer huisartspraktijk',
    'voorraad bijhouden zonder excel',
    'medische voorraad systeem',
    'voorraad tracking praktijk',
    'real-time voorraad overzicht',
    'ZenTrack voorraad beheer',
    'kasten beheer huisarts',
    'inventarisatie huisartspraktijk',
    'voorraad per locatie',
  ],
  openGraph: {
    title: 'Voorraad Beheer — Zonder Excel, Zonder Stress | ZenTrack',
    description: 'Real-time voorraad inzicht per kast en locatie. Via WhatsApp of dashboard — altijd actueel.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function VoorraadBeheerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
