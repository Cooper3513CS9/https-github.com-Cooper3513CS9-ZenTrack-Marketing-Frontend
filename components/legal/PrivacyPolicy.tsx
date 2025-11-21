
import React, { useEffect } from 'react';
import { ShieldCheck, ArrowLeft, Lock, Server } from 'lucide-react';

interface Props {
    onBack: () => void;
}

export const PrivacyPolicy: React.FC<Props> = ({ onBack }) => {
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
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                <h1 className="text-3xl font-bold text-slate-900">Privacyverklaring</h1>
            </div>
            
            <p className="text-slate-500 text-sm mb-8">Laatst bijgewerkt: 21 November 2025</p>

            <div className="prose prose-slate max-w-none space-y-8">
                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">1. Inleiding</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        ZenTrack (hierna "wij") respecteert de privacy van onze gebruikers (huisartsen en praktijkmanagers). 
                        Wij verwerken persoonsgegevens uitsluitend in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
                    </p>
                </section>

                <section className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                    <h2 className="text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2">
                        <Lock className="w-5 h-5" />
                        Belangrijk: Geen Patiëntgegevens
                    </h2>
                    <p className="text-emerald-800 text-sm leading-relaxed">
                        ZenTrack is een systeem voor <strong>voorraadbeheer</strong>. Wij verwerken expliciet <strong>geen</strong> medische dossiers of patiëntgegevens. 
                        Mocht u per abuis een document uploaden met patiëntinformatie, dan zal ons systeem dit waar mogelijk detecteren en direct verwijderen.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">2. Welke gegevens verwerken wij?</h2>
                    <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
                        <li><strong>Contactgegevens:</strong> Naam, e-mailadres, telefoonnummer van de praktijkhouder/manager.</li>
                        <li><strong>Bedrijfsgegevens:</strong> Praktijknaam, adres, KvK-nummer.</li>
                        <li><strong>Voorraaddata:</strong> Facturen, pakbonnen, foto's van medische verbruiksartikelen.</li>
                        <li><strong>Gebruiksdata:</strong> Logfiles van systeemgebruik voor beveiliging en optimalisatie.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">3. Locatie van gegevens</h2>
                    <div className="flex items-start gap-4">
                        <div className="bg-slate-100 p-3 rounded-lg">
                            <Server className="w-6 h-6 text-slate-600" />
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Al onze data wordt opgeslagen op beveiligde servers binnen de <strong>Europese Economische Ruimte (EER)</strong>. 
                            Wij maken gebruik van datacenters in Frankfurt (Duitsland) en Amsterdam (Nederland) die voldoen aan ISO 27001 en NEN 7510 normen.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">4. Verwerkersovereenkomst</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Voor huisartsenpraktijken fungeren wij als 'Verwerker' in de zin van de AVG. 
                        Bij het afsluiten van een abonnement wordt automatisch onze standaard Verwerkersovereenkomst van kracht, 
                        waarin wij garanderen dat wij passende technische en organisatorische maatregelen nemen.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">5. Contact</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Voor vragen over privacy of het uitoefenen van uw rechten (inzage, correctie, verwijdering) kunt u contact opnemen met onze Functionaris Gegevensbescherming:
                        <br/><br/>
                        <strong>ZenTrack B.V.</strong><br/>
                        T.a.v. Privacy Officer<br/>
                        Stationsplein 1<br/>
                        3511 ED Utrecht<br/>
                        privacy@zentrack.nl
                    </p>
                </section>
            </div>
        </div>
      </div>
    </div>
  );
};
