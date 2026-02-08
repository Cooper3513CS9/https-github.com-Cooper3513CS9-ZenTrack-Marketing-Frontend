import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NPA Accreditatie — Uw Dossier Groeit Automatisch Mee | ZenTrack',
  description: 'Uw NPA-dossier wordt automatisch opgebouwd uit uw dagelijkse werkprocessen. Voorraad, expiraties en leveringen — altijd actueel, zonder extra werk.',
  keywords: [
    'NPA accreditatie',
    'NPA huisarts',
    'accreditatie huisartspraktijk',
    'NPA visitatie voorbereiden',
    'NPA dossier beheer',
    'NPA documentatie',
    'ZenTrack NPA',
    'kwaliteitsvisitatie huisarts',
    'NPA voorraadbeheer',
    'NPA compliant voorraadbeheer',
  ],
  openGraph: {
    title: 'NPA Accreditatie — Uw Dossier Groeit Automatisch Mee | ZenTrack',
    description: 'Uw NPA-dossier wordt automatisch opgebouwd uit elke factuur en controle. Nooit meer paniek voor de visitatie.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function NpaAccreditatieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
