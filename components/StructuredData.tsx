/**
 * Structured Data (JSON-LD) voor ZenTrack
 * Bevat Organization, SoftwareApplication, WebSite en FAQPage schema's
 * voor AI-zichtbaarheid en Google Rich Results
 */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.zentrack.nl/#organization",
  name: "ZenTrack",
  url: "https://www.zentrack.nl",
  logo: "https://www.zentrack.nl/zentrack-logo-dark.png",
  description:
    "ZenTrack automatiseert voorraadbeheer voor Nederlandse huisartspraktijken via WhatsApp. AI-factuurscanner, expiratie-alerts en NPA-accreditatie documentatie.",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kruisweg 9L",
    addressLocality: "Utrecht",
    postalCode: "3513 CS",
    addressCountry: "NL",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Dutch",
  },
  sameAs: [
    // Voeg hier LinkedIn, GetApp, etc. toe zodra die bestaan
  ],
}

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.zentrack.nl/#software",
  name: "ZenTrack",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Voorraadbeheer Software",
  operatingSystem: "Web, WhatsApp",
  description:
    "Automatisch voorraadbeheer via WhatsApp voor huisartspraktijken. Upload facturen, track voorraad, ontvang expiratie-alerts en bereid NPA-visitaties voor.",
  url: "https://www.zentrack.nl",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zentrack.nl/#organization",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "79",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "79",
        priceCurrency: "EUR",
        unitText: "maand",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          unitCode: "MON",
        },
      },
      description: "Voor 1 huisartspraktijk",
      url: "https://app.zentrack.nl/sign-up",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "149",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "149",
        priceCurrency: "EUR",
        unitText: "maand",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          unitCode: "MON",
        },
      },
      description: "Voor meerdere locaties",
      url: "https://app.zentrack.nl/sign-up",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "249",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "249",
        priceCurrency: "EUR",
        unitText: "maand",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          unitCode: "MON",
        },
      },
      description: "Voor zorggroepen",
      url: "https://app.zentrack.nl/sign-up",
    },
  ],
  featureList: [
    "AI-factuurscanner via WhatsApp",
    "Real-time voorraadbeheer per kast en locatie",
    "Automatische expiratie-alerts (30/60/90 dagen)",
    "Prijsvergelijking bij meerdere leveranciers",
    "NPA 3.0 accreditatie documentatie (Principe 13: middelen)",
    "Pakbon verificatie in 30 seconden",
  ],
  screenshot: "https://www.zentrack.nl/zentrack-logo-dark.png",
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.zentrack.nl/#website",
  name: "ZenTrack",
  url: "https://www.zentrack.nl",
  description:
    "Slim voorraadbeheer voor Nederlandse huisartspraktijken",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.zentrack.nl/#organization",
  },
  inLanguage: "nl-NL",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Moet ik ALLE producten scannen bij binnenkomst?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nee, dat hoeft niet. ZenTrack werkt flexibel. Scan je wel? Dan heb je exacte vervaldatums. Scan je niet? Dan schatten we het verbruik. Veel praktijken scannen alleen dure of kritieke items.",
      },
    },
    {
      "@type": "Question",
      name: "Werkt dit met mijn huidige leveranciers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, 100%. Wij zijn onafhankelijk. Of je nu bestelt bij Medline, Henry Schein of de lokale apotheek: jij stuurt de factuur, wij verwerken de data.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe zit het met privacy (AVG)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veiligheid staat voorop. Onze servers staan in Europa (Frankfurt/Amsterdam) en we verwerken geen patientgegevens. We voldoen aan alle ISO- en NEN-normen voor dataopslag.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is de Expiratie Radar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De Expiratie Radar is een gratis tool die vervaldatums van je medische producten bijhoudt. Je voegt producten toe via WhatsApp en ZenTrack waarschuwt je automatisch als iets bijna verloopt.",
      },
    },
    {
      "@type": "Question",
      name: "Is de Expiratie Radar echt gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, 100% gratis voor maximaal 25 producten gedurende 6 maanden. Geen creditcard nodig, geen verplichtingen.",
      },
    },
    {
      "@type": "Question",
      name: "Wat kost ZenTrack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ZenTrack start vanaf EUR 79 per maand voor een enkele praktijk. Professional (meerdere locaties) kost EUR 149/maand en Enterprise (zorggroepen) EUR 249/maand. Je kunt 14 dagen gratis uitproberen zonder creditcard.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe werkt voorraadbeheer via WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stuur een foto van je leveranciersfactuur naar ZenTrack via WhatsApp. De AI-factuurscanner leest automatisch alle producten, hoeveelheden en prijzen uit. Je voorraad wordt direct bijgewerkt en je ontvangt alerts bij bijna verlopen producten.",
      },
    },
  ],
}

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  )
}
