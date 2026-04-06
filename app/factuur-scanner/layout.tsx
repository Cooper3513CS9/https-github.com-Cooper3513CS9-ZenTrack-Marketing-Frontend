import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Factuur Scanner Huisarts: AI-OCR voor Medische Facturen | ZenTrack',
  description: 'AI-factuurscanner voor huisartspraktijken. Upload een factuur via WhatsApp, ZenTrack herkent binnen 30 seconden alle producten, prijzen en leveranciers via OCR. Geen handmatig overtypen meer.',
  keywords: [
    'factuur scanner huisarts',
    'factuur OCR medisch',
    'medische facturen scannen',
    'automatisch facturen verwerken',
    'factuurherkenning huisartspraktijk',
    'leverancier facturen digitaliseren',
    'OCR medische producten',
    'factuurverwerking zorg',
    'inkoop facturen automatiseren',
    'WhatsApp factuur uploaden',
  ],
  openGraph: {
    title: 'Factuur Scanner: AI-OCR voor Medische Facturen | ZenTrack',
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
