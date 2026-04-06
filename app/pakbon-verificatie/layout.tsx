import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pakbon Verificatie: Levering Controleren in 30 Seconden | ZenTrack',
  description: 'Controleer binnen 30 seconden of uw medische levering compleet is. ZenTrack vergelijkt automatisch pakbonnen met facturen en voorraad. Detecteer ontbrekende artikelen direct bij ontvangst.',
  keywords: [
    'pakbon verificatie huisarts',
    'pakbon controleren praktijk',
    'levering controleren huisartspraktijk',
    'ontbrekende artikelen detecteren',
    'pakbon factuur vergelijken',
    'goederenontvangst huisartspraktijk',
    'levering mismatch detectie',
    'medische levering verificatie',
    'bestelling controle praktijk',
    'leveringscontrole zorg',
  ],
  openGraph: {
    title: 'Pakbon Verificatie: Levering Controleren in 30 Seconden | ZenTrack',
    description: 'Vergelijk automatisch pakbonnen met facturen. Detecteer ontbrekende artikelen direct bij ontvangst.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/pakbon-verificatie',
  },
}

export default function PakbonVerificatieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
