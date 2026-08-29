import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prijzen: wat kost ZenTrack?',
  description: 'ZenTrack kost €99 per locatie per maand (maandelijks opzegbaar); founding-praktijken betalen €79. De inkoop-check is gratis. Met 60-dagen-leveringsgarantie: wijzen wij minder besparing aan dan het abonnement kostte, dan krijg je het verschil terug.',
  keywords: [
    'zentrack prijzen',
    'wat kost praktijksoftware',
    'kosten voorraadbeheer huisartsenpraktijk',
    'prijs inkoopsoftware huisarts',
  ],
  openGraph: {
    title: 'Prijzen | ZenTrack',
    description: 'Eén product, één prijs per locatie: €99 per maand (founding €79). Gratis inkoop-check om mee te starten, met 60-dagen-leveringsgarantie.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/prijzen',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost ZenTrack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ZenTrack kost €99 per locatie per maand (lijstprijs, maandelijks opzegbaar). Founding-praktijken betalen €79 per maand bij een looptijd van 12 maanden. Alles zit erin: er zijn geen pakketten of losse modules.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat telt als een locatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eén locatie is één bezoekadres met eigen voorraad. Teamleden en facturen zijn onbeperkt; je betaalt nooit per gebruiker of per factuur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is er een gratis versie van ZenTrack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja: de inkoop-check is gratis, zonder creditcard of verplichting. Je uploadt je eigen leveranciersfacturen en ziet wat je te veel betaalt en hoeveel. Bestellen, prijsbewaking met leveranciersnamen en de vervaldatum-bewaking via WhatsApp zitten in het abonnement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt de 60-dagen-leveringsgarantie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na 60 dagen maken we samen de balans op. Heeft ZenTrack minder besparing aangewezen dan het abonnement tot dan kostte, dan mag je per direct stoppen en betalen we het verschil terug. Voorwaarde: upload binnen 30 dagen je volledige inkoopadministratie van de afgelopen 12 maanden, zodat we eerlijk kunnen rekenen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wij hebben meerdere locaties. Wat kost dat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elke locatie (bezoekadres) telt als één ZenTrack. Vanaf vijf locaties geldt een staffelkorting op aanvraag; voor zorggroepen met 20 of meer locaties maken we een partnerschap op maat. Je krijgt één factuur voor alle locaties, met overzicht per locatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zit ik ergens aan vast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De lijstprijs van €99 is maandelijks opzegbaar. Het founding-tarief van €79 heeft een looptijd van 12 maanden met kwartaalfacturen. Je data kun je altijd exporteren of laten verwijderen.',
      },
    },
  ],
}

export default function PrijzenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
