import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "ZenTrack | Slim Voorraadbeheer voor Huisartspraktijken",
    template: "%s | ZenTrack",
  },
  description: "Automatisch voorraadbeheer via WhatsApp voor huisartspraktijken. AI-factuurscanner, expiratie-alerts, NPA-accreditatie documentatie en slimmer bestellen. 14 dagen gratis.",
  metadataBase: new URL('https://www.zentrack.nl'),
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' }
    ],
    apple: '/apple-touch-icon.svg?v=2',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.zentrack.nl',
    siteName: 'ZenTrack',
    title: 'ZenTrack | Slim Voorraadbeheer voor Huisartspraktijken',
    description: 'Automatisch voorraadbeheer via WhatsApp. AI-factuurscanner, expiratie-alerts en NPA-documentatie voor huisartspraktijken.',
    images: [
      {
        url: '/zentrack-logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'ZenTrack - Voorraadbeheer voor Huisartspraktijken',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZenTrack | Slim Voorraadbeheer voor Huisartspraktijken',
    description: 'Automatisch voorraadbeheer via WhatsApp voor huisartspraktijken.',
  },
  keywords: [
    'voorraadbeheer huisarts',
    'voorraadbeheer huisartspraktijk',
    'medische voorraad software',
    'NPA accreditatie software',
    'factuur scanner huisarts',
    'expiratie tracking medicijnen',
    'WhatsApp voorraadbeheer',
  ],
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large' as const,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://www.zentrack.nl',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}