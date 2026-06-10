import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Slim Bestellen: Grip op je Inkoopkosten | ZenTrack',
  description: 'Huisartspraktijken besteden gemiddeld €1.000-2.500/maand aan medische verbruiksartikelen. ZenTrack geeft je grip op wat je betaalt en signaleert waar je kunt besparen.',
  keywords: [
    'slim bestellen huisarts',
    'grip op inkoopkosten huisarts',
    'inkoopinzicht huisartspraktijk',
    'medische verbruiksartikelen besparen',
    'inkoopkosten besparen praktijk',
    'voorraad bestel-advies huisarts',
    'inkoopoptimalisatie huisarts',
    'minder verspilling huisartspraktijk',
    'bestellen via whatsapp huisarts',
    'kostenbesparing huisartspraktijk',
  ],
  openGraph: {
    title: 'Slim Bestellen: Grip op je Inkoopkosten | ZenTrack',
    description: 'Krijg grip op wat je uitgeeft aan medische verbruiksartikelen. ZenTrack signaleert besparingen voor huisartspraktijken.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/slim-bestellen',
  },
}

export default function SlimBestellenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
