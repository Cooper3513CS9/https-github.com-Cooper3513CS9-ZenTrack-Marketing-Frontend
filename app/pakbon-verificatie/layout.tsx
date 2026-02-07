import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pakbon Verificatie — Altijd Weten of Alles Geleverd Is | ZenTrack',
  description: 'Weet binnen 30 seconden of uw levering compleet is. ZenTrack vergelijkt automatisch pakbonnen met facturen en voorraad. Geen ontbrekende artikelen meer.',
  keywords: [
    'pakbon verificatie',
    'pakbon controleren',
    'levering controleren huisarts',
    'ontbrekende artikelen detecteren',
    'pakbon factuur vergelijken',
    'goederenontvangt huisartspraktijk',
    'ZenTrack pakbon',
    'levering mismatch detectie',
    'medische levering verificatie',
    'bestelling controle praktijk',
  ],
  openGraph: {
    title: 'Pakbon Verificatie — Nooit Meer Ontbrekende Leveringen | ZenTrack',
    description: 'Vergelijk automatisch pakbonnen met facturen. Detecteer ontbrekende artikelen in 30 seconden.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function PakbonVerificatieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
