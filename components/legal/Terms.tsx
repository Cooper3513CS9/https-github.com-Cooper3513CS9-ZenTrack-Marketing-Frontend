
import React, { useEffect } from 'react';
import { FileText, ArrowLeft } from 'lucide-react';

interface Props {
    onBack: () => void;
}

export const Terms: React.FC<Props> = ({ onBack }) => {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        <button onClick={onBack} className="mb-8 flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Terug naar website
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-slate-900" />
                <h1 className="text-3xl font-bold text-slate-900">Algemene Voorwaarden</h1>
            </div>
            
            <p className="text-slate-500 text-sm mb-8">Versie 1.0 - November 2025</p>

            <div className="prose prose-slate max-w-none space-y-6">
                <section>
                    <h2 className="text-lg font-bold text-slate-900">Artikel 1. Definities</h2>
                    <p className="text-slate-600 text-sm">
                        In deze voorwaarden wordt verstaan onder:
                        <br/>1.1 <strong>ZenTrack:</strong> de gebruiker van deze algemene voorwaarden, gevestigd te Utrecht.
                        <br/>1.2 <strong>Klant:</strong> de huisartsenpraktijk of medische instelling die een overeenkomst aangaat met ZenTrack.
                        <br/>1.3 <strong>Dienst:</strong> de SaaS-oplossing voor voorraadbeheer zoals aangeboden via zentrack.nl.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-slate-900">Artikel 2. Toepasselijkheid</h2>
                    <p className="text-slate-600 text-sm">
                        Deze voorwaarden zijn van toepassing op alle aanbiedingen en overeenkomsten waarbij ZenTrack diensten levert aan de Klant. Afwijkingen zijn slechts geldig indien schriftelijk overeengekomen.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-slate-900">Artikel 3. Gebruik en Licentie</h2>
                    <p className="text-slate-600 text-sm">
                        3.1 ZenTrack verleent de Klant een niet-exclusief, niet-overdraagbaar recht om de software te gebruiken voor de duur van de overeenkomst.
                        <br/>3.2 Het is de Klant niet toegestaan de software te verkopen, verhuren of reverse-engineeren.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-slate-900">Artikel 4. Betaling en Opzegging</h2>
                    <p className="text-slate-600 text-sm">
                        4.1 Abonnementen worden maandelijks of jaarlijks gefactureerd, voorafgaand aan de periode.
                        <br/>4.2 Betaling dient te geschieden binnen 14 dagen na factuurdatum.
                        <br/>4.3 <strong>Opzegging:</strong> Klanten kunnen hun abonnement maandelijks opzeggen met inachtneming van een opzegtermijn van één maand.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-slate-900">Artikel 5. Aansprakelijkheid</h2>
                    <p className="text-slate-600 text-sm">
                        5.1 ZenTrack spant zich in om de dienst 24/7 beschikbaar te houden (inspanningsverplichting), maar garandeert geen 100% uptime.
                        <br/>5.2 ZenTrack is niet aansprakelijk voor indirecte schade, waaronder gevolgschade, gederfde winst of gemiste besparingen.
                        <br/>5.3 De Klant blijft te allen tijde eindverantwoordelijk voor medische beslissingen en de daadwerkelijke aanwezigheid van voorraad voor kritieke handelingen.
                    </p>
                </section>
            </div>
        </div>
      </div>
    </div>
  );
};
