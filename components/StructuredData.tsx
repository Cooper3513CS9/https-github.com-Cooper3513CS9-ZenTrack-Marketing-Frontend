/**
 * Structured Data (JSON-LD) voor ZenTrack
 * Bevat Organization, SoftwareApplication, WebSite en FAQPage schema's
 * voor AI-zichtbaarheid en Google Rich Results.
 * BELANGRIJK: houd dit exact in lijn met de zichtbare site-teksten
 * (Pricing.tsx, FAQ.tsx) en public/llms.txt — AI's citeren uit alle drie.
 */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.zentrack.nl/#organization",
  name: "ZenTrack",
  url: "https://www.zentrack.nl",
  logo: "https://www.zentrack.nl/zentrack-logo-dark.png",
  description:
    "ZenTrack is een digitale collega voor inkoop, voorraad en vervaldatums in Nederlandse huisartsenpraktijken. Facturen worden automatisch gelezen, bestellingen keur je goed met één JA via WhatsApp, en alles is vastgelegd.",
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
    email: "info@zentrack.nl",
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
  applicationSubCategory: "Inkoop- en voorraadbeheer voor huisartsenpraktijken",
  operatingSystem: "Web, WhatsApp",
  description:
    "Digitale collega voor de huisartsenpraktijk: gratis inkoop-check op je eigen facturen, bestelvoorstellen die je goedkeurt met één JA via WhatsApp, voorraad die zichzelf bijtelt, vervaldatum-alerts vooraf en een doorzoekbaar factuurarchief.",
  url: "https://www.zentrack.nl",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zentrack.nl/#organization",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Gratis inkoop-check",
      price: "0",
      priceCurrency: "EUR",
      description:
        "Upload je facturen en zie waar je besparingskansen zitten — vrijblijvend, zonder creditcard. Hoe meer maanden facturen (liefst 12), hoe scherper het rapport.",
      url: "https://app.zentrack.nl/sign-up",
    },
    {
      "@type": "Offer",
      name: "ZenTrack Compleet",
      price: "99",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "99",
        priceCurrency: "EUR",
        unitText: "per locatie per maand",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          unitCode: "MON",
        },
      },
      description:
        "Eén product met alles erin, per locatie (bezoekadres): bestelvoorstellen met JA-goedkeuring via WhatsApp, doorlopende prijsbewaking, vervaldatum-alerts, pakbon-controle, visitatie-bewijsrapport en onbeperkt team. Founding-tarief €79 per maand bij 12 maanden. 60-dagen-garantie.",
      url: "https://app.zentrack.nl/sign-up",
    },
  ],
  featureList: [
    "Gratis inkoop-check: zie op je eigen facturen waar je besparingskansen zitten",
    "Facturen automatisch inlezen (foto of PDF)",
    "Bestelvoorstellen klaargezet — goedkeuren met één JA via WhatsApp",
    "Vervaldatum-alerts 30, 14 en 7 dagen vooraf én op de dag zelf, met kastlocatie",
    "Pakbon-foto: levering automatisch gecheckt tegen de bestelling",
    "Binnenkomende voorraad automatisch verwerkt via facturen en pakbonnen",
    "Alles vastgelegd: goedkeuringen en facturen doorzoekbaar terug te vinden",
    "Datums en documenten voor de visitatie-voorbereiding, met bewijsrapport",
    "Chat met je eigen cijfers, in dashboard en WhatsApp",
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
    "Slim inkoop- en voorraadbeheer voor Nederlandse huisartsenpraktijken",
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
      name: "Wat is de gratis inkoop-check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je uploadt je facturen en ZenTrack laat zien waar je besparingskansen zitten en hoeveel je kunt besparen. Begin met één factuur voor een eerste signaal; met 12 maanden facturen krijg je een volwaardig besparingsrapport. Vrijblijvend, geen creditcard nodig. Wáár je die besparing precies pakt zie je met het abonnement; daar zitten ook kant-en-klare bestelvoorstellen bij, die jij met één JA goedkeurt.",
      },
    },
    {
      "@type": "Question",
      name: "Wat kost ZenTrack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De inkoop-check is gratis. ZenTrack Compleet — met alles erin — kost EUR 99 per locatie per maand (maandelijks opzegbaar); het founding-tarief is EUR 79 per maand bij 12 maanden. Voor meerdere locaties geldt een staffelkorting op aanvraag; voor zorggroepen is er een partnerschap op maat. Team en facturen zijn altijd onbeperkt.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is de 60-dagen-garantie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Na 60 dagen maken we de balans op: heeft ZenTrack minder besparing aangewezen dan het abonnement tot dan kostte, dan mag je per direct stoppen en betalen we je het verschil terug. Voorwaarde is dat je binnen 30 dagen je volledige inkoopadministratie van de afgelopen 12 maanden hebt geüpload. De tijdwinst van je team rekenen we niet eens mee.",
      },
    },
    {
      "@type": "Question",
      name: "Wat telt als een locatie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elk bezoekadres met een eigen voorraad telt als één locatie. Een gezondheidscentrum met drie vestigingen heeft dus drie ZenTrack-locaties. Binnen een locatie zijn team en facturen onbeperkt.",
      },
    },
    {
      "@type": "Question",
      name: "Bestelt ZenTrack automatisch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nee — ZenTrack bestelt nooit zonder jouw akkoord. ZenTrack zet het bestelvoorstel kant-en-klaar en jij keurt goed met één JA via WhatsApp. Bij aangesloten webshops plaatsen we de bestelling daarna direct voor je; bij overige leveranciers ligt hij verzendklaar zodat je hem zelf met één klik verstuurt.",
      },
    },
    {
      "@type": "Question",
      name: "Werkt dit met mijn huidige leveranciers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja — wij zijn onafhankelijk en lezen facturen van vrijwel elke leverancier. Welke leverancier het ook is: jij uploadt de factuur, wij verwerken de data.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe zit het met privacy (AVG)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jouw cijfers zijn van jou: andere praktijken zien nooit jouw facturen, prijzen of naam, en we verkopen niets door. ZenTrack wordt wel slimmer van geanonimiseerde patronen van alle gebruikers — nooit herleidbaar. De data staat op ISO 27001-gecertificeerde EU-infrastructuur (Frankfurt/Amsterdam), we verwerken geen patiëntgegevens en koppelen bewust niet met je HIS. Een verwerkersovereenkomst is op aanvraag beschikbaar.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe werkt de vervaldatum-bewaking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je team stuurt een foto van de verpakking en ZenTrack leest de vervaldatum. Je krijgt automatisch een WhatsApp-waarschuwing 30, 14 en 7 dagen vooraf én op de dag zelf — met de kastlocatie erbij. Onderdeel van het ZenTrack Compleet-abonnement.",
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
    </>
  )
}

// Alleen op de homepage mounten — FAQPage-schema hoort op de pagina waar de FAQ zichtbaar is
export function HomeFaqStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  )
}
