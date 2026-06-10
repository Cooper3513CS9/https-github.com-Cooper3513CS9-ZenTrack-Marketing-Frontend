import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Factuur Scanner Huisarts: Automatische Factuurherkenning | ZenTrack',
  description: 'Factuurscanner voor huisartspraktijken. Upload een factuur via WhatsApp, ZenTrack herkent binnen 30 seconden alle producten, prijzen en leveranciers. Geen handmatig overtypen meer.',
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
    'WhatsApp factuur uploaden',
  ],
  openGraph: {
    title: 'Factuur Scanner: Automatische Factuurherkenning | ZenTrack',
    description: 'Upload een factuur via WhatsApp. AI herkent binnen 30 seconden alle producten, prijzen en leveranciers.',
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
