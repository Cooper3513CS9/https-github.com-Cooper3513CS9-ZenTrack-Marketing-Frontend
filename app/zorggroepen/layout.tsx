import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voor Zorggroepen: één platform voor alle locaties',
  description: 'Eén operationeel platform voor alle locaties: logistiek geborgd, inkoop geharmoniseerd en het personeel op elke locatie ontzorgd. Overzicht per locatie, één factuur, uitrol in jullie tempo.',
  keywords: [
    'zorggroep voorraadbeheer',
    'gezondheidscentrum inkoop',
    'meerdere locaties huisartsenpraktijk',
    'inkoop harmoniseren zorggroep',
    'voorraadbeheer meerdere locaties',
    'ketens huisartsenzorg software',
  ],
  openGraph: {
    title: 'ZenTrack voor Zorggroepen | Grip op alle locaties',
    description: 'Logistiek geborgd, inkoop geharmoniseerd, personeel ontzorgd — op elke locatie. Overzicht per locatie en één factuur.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/zorggroepen',
  },
}

export default function ZorggroepenLayout({ children }: { children: React.ReactNode }) {
  return children
}
