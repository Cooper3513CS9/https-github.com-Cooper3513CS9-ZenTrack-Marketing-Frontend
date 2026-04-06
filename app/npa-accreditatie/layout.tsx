import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NPA Accreditatie Huisarts: Voorraadbeheer voor NPA 3.0 Visitatie | ZenTrack',
  description: 'NPA-accreditatie (versie 3.0, Principe 13) vereist dat medische middelen geschikt en beschikbaar zijn. ZenTrack documenteert automatisch voorraad, expiraties en leveringen voor uw NPA-visitatie. Ruim 70% van huisartspraktijken heeft het NPA-keurmerk (bron: npacertificering.nl).',
  keywords: [
    'NPA accreditatie huisarts',
    'NPA 3.0 normen voorraadbeheer',
    'NPA visitatie voorbereiden',
    'accreditatie huisartspraktijk',
    'NPA dossier beheer',
    'kwaliteitsvisitatie huisarts',
    'NPA voorraadbeheer software',
    'NPA compliant voorraad',
    'NPA 3.0 Principe 13 middelen',
    'npacertificering huisarts',
  ],
  openGraph: {
    title: 'NPA 3.0 Accreditatie Huisarts: Voorraadbeheer Checklist | ZenTrack',
    description: 'NPA 3.0 Principe 13 vereist geschikte en beschikbare medische middelen. ZenTrack bouwt uw NPA-dossier automatisch op.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/npa-accreditatie',
  },
}

export default function NpaAccreditatieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
