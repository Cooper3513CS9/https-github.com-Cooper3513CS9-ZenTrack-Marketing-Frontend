import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description: 'Privacybeleid van ZenTrack. Hoe wij omgaan met uw gegevens, welke data we verwerken en uw rechten onder de AVG. ZenTrack verwerkt geen patientgegevens.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/legal/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
