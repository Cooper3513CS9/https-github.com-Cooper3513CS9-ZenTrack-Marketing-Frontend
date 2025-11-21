
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
      answer: "Ja, 100%. Wij zijn onafhankelijk. Of je nu bestelt bij Medline, Henry Schein of de lokale apotheek: jij stuurt de factuur, wij verwerken de data."
    },
    {
      question: "Hoe zit het met privacy (AVG)?",
      answer: "Veiligheid staat voorop. Onze servers staan in Europa (Frankfurt/Amsterdam) en we verwerken géén patiëntgegevens. We voldoen aan alle ISO- en NEN-normen voor dataopslag."
    },
    {
      question: "Wat als ik er niet uitkom?",
      answer: "Dan app je Jord. Letterlijk. Als pilot partner heb je een directe lijn met de founders. Geen ticketsysteem, maar gewoon een antwoord."
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
                  openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
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
