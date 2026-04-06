import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voorraadbeheer Huisartspraktijk: Real-time Zonder Excel | ZenTrack',
  description: 'Voorraadbeheer in huisartspraktijken kost gemiddeld 1-3 uur per week aan handmatig tellen en bestellen. ZenTrack vervangt Excel-lijsten door real-time tracking per kast, kamer en locatie via WhatsApp.',
  keywords: [
    'voorraadbeheer huisartspraktijk',
    'voorraadbeheer huisarts',
    'voorraad bijhouden zonder excel',
    'medische voorraad software',
    'voorraad tracking praktijk',
    'real-time voorraad overzicht',
    'digitaal voorraadbeheer zorg',
    'inventarisatie huisartspraktijk',
    'voorraad per locatie kast',
    'WhatsApp voorraadbeheer',
  ],
  openGraph: {
    title: 'Voorraadbeheer Huisartspraktijk: Real-time Zonder Excel | ZenTrack',
    description: 'Bespaar 1-3 uur per week. ZenTrack vervangt Excel-lijsten door real-time voorraadtracking per kast en locatie.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/voorraad-beheer',
  },
}

export default function VoorraadBeheerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
