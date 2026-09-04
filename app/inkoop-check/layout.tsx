import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gratis Inkoop-check voor Huisartsenpraktijken',
  description: 'Upload je leveranciersfacturen en zie waar je besparingskansen zitten — met een indicatie van het bedrag. Gratis, zonder creditcard. Jouw facturen, jouw cijfers, jouw data.',
  keywords: [
    'inkoop check huisartsenpraktijk',
    'besparen medische verbruiksartikelen',
    'inkoopkosten huisarts',
    'factuur analyse praktijk',
    'gratis besparingsrapport',
  ],
  openGraph: {
    title: 'Gratis Inkoop-check | ZenTrack',
    description: 'Zie op je eigen facturen waar je besparingskansen zitten. Gratis en vrijblijvend.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/inkoop-check',
  },
}

export default function InkoopCheckLayout({ children }: { children: React.ReactNode }) {
  return children
}
