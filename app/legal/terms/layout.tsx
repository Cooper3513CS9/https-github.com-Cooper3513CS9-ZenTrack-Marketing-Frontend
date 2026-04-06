import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden',
  description: 'Algemene voorwaarden van ZenTrack voorraadbeheer voor huisartspraktijken. Abonnementsvoorwaarden, serviceovereenkomst en gebruiksvoorwaarden.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/legal/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
