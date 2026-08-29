"use client";

import React from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Moet ik ALLE producten scannen bij binnenkomst?",
      answer: "Nee, dat hoeft niet. ZenTrack werkt flexibel. Scan je wel? Dan heb je exacte vervaldatums. Scan je niet? Dan schatten we het verbruik. Veel praktijken scannen alleen dure of kritieke items."
    },
    {
      question: "Werkt dit met mijn huidige leveranciers?",
      answer: "Ja — wij zijn onafhankelijk en werken met vrijwel elke leverancier. Welke leverancier het ook is: jij uploadt de factuur, wij verwerken de data."
    },
    {
      question: "Hoe zit het met privacy (AVG)?",
      answer: "Veiligheid staat voorop. Onze data staat in EU-datacenters (Frankfurt/Amsterdam) die ISO 27001-gecertificeerd zijn, en we verwerken géén patiëntgegevens. Je houdt zelf de regie: ZenTrack bestelt nooit zonder jouw akkoord."
    },
    {
      question: "Wat als ik er niet uitkom?",
      answer: "Dan app je ons direct. Als early adopter heb je een directe lijn met de founders. Geen ticketsysteem, maar gewoon een antwoord."
    },
    {
      question: "Wat is de gratis inkoop-check?",
      answer: "Je uploadt je leveranciersfacturen en ZenTrack laat zien waar je te veel betaalt en hoeveel je kunt besparen. Begin met één factuur voor een eerste signaal; met 12 maanden facturen krijg je een volwaardig besparingsrapport. Vrijblijvend, geen creditcard, jouw data blijft van jou. Bij wélke leverancier het goedkoper kan, zie je met het abonnement."
    },
    {
      question: "Wat is de 60-dagen-leveringsgarantie?",
      answer: "Na 60 dagen maken we samen de balans op: heeft ZenTrack minder besparing aangewezen dan het abonnement tot dan kostte, dan mag je per direct stoppen én betalen we je het verschil terug. Voorwaarde: upload binnen 30 dagen je volledige inkoopadministratie van de afgelopen 12 maanden. De tijdwinst van je team rekenen we niet eens mee — die is de bonus."
    },
    {
      question: "Wat telt als een locatie?",
      answer: "Elk bezoekadres met een eigen voorraad telt als één locatie. Een gezondheidscentrum met drie vestigingen heeft dus drie ZenTrack-locaties. Binnen een locatie zijn team en facturen onbeperkt — iedereen een eigen inlog met een eigen rol."
    },
    {
      question: "Hoe werkt de vervaldatum-bewaking (Expiratie Radar)?",
      answer: "Je team stuurt een foto van de verpakking via WhatsApp en ZenTrack leest de vervaldatum. Je krijgt automatisch een waarschuwing 30, 14 en 7 dagen vooraf én op de dag zelf — met de kastlocatie erbij, zodat je direct weet waar je moet zijn. Onderdeel van het ZenTrack Compleet-abonnement."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Veelgestelde Vragen</h2>
            <p className="text-slate-600">Staat je vraag er niet bij? App ons gerust.</p>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-emerald-200 shadow-md' : 'border-slate-200'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-emerald-800' : 'text-slate-800'}`}>
                    {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <div 
                className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
