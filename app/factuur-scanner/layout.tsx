import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Factuur Scanner Huisarts: Facturen Automatisch Inlezen | ZenTrack',
  description: 'Factuurscanner voor huisartspraktijken. Sleep een factuur in je dashboard, ZenTrack herkent binnen 30 seconden alle producten, prijzen en leveranciers. Geen handmatig overtypen meer.',
  keywords: [
    'factuur scanner huisarts',
    'factuurherkenning medisch',
    'medische facturen scannen',
    'automatisch facturen verwerken',
    'factuurherkenning huisartspraktijk',
    'leverancier facturen digitaliseren',
    'automatische factuurverwerking',
    'factuurverwerking zorg',
    'inkoop facturen automatiseren',
    'factuur uploaden huisarts',
  ],
  openGraph: {
    title: 'Factuur Scanner: Facturen Automatisch Inlezen | ZenTrack',
    description: 'Upload een factuur in je dashboard. AI herkent binnen 30 seconden alle producten, prijzen en leveranciers.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/factuur-scanner',
  },
}

export default function FactuurScannerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
