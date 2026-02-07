import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NPA Accreditatie — Altijd Audit-Proof | ZenTrack',
  description: 'Altijd audit-proof zonder paniek voor de visitatie. ZenTrack genereert automatisch de NPA-conforme documentatie voor uw huisartspraktijk.',
  keywords: [
    'NPA accreditatie',
    'NPA huisarts',
    'accreditatie huisartspraktijk',
    'NPA visitatie voorbereiden',
    'audit-proof huisarts',
    'NPA documentatie',
    'ZenTrack NPA',
    'kwaliteitsvisitatie huisarts',
    'accreditatie map genereren',
    'NPA compliant voorraadbeheer',
  ],
  openGraph: {
    title: 'NPA Accreditatie — Altijd Audit-Proof | ZenTrack',
    description: 'Automatische NPA-conforme documentatie. Altijd klaar voor de visitatie zonder extra werk.',
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
