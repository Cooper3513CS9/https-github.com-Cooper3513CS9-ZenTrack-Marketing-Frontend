import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Factuur Scanner — AI-Powered OCR voor Medische Facturen | ZenTrack',
  description: 'Stop met handmatig facturen overtypen. ZenTrack\'s AI Factuur Scanner herkent automatisch producten, prijzen en leveranciers. Upload via WhatsApp of dashboard — klaar in seconden.',
  keywords: [
    'factuur scanner',
    'factuur OCR',
    'medische facturen scannen',
    'automatisch facturen verwerken',
    'factuur herkenning huisarts',
    'leverancier facturen digitaliseren',
    'ZenTrack factuur scanner',
    'OCR medische producten',
    'factuurverwerking huisartspraktijk',
    'inkoop facturen automatiseren',
  ],
  openGraph: {
    title: 'Factuur Scanner — Stop met Handmatig Overtypen | ZenTrack',
    description: 'AI herkent automatisch producten, prijzen en leveranciers uit uw facturen. Upload via WhatsApp.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function FactuurScannerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
