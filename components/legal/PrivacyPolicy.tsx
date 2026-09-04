"use client";

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
                            Uw praktijkgegevens, facturen en foto&apos;s worden opgeslagen binnen de <strong>Europese Economische Ruimte</strong>,
                            in een datacenter in Frankfurt (Duitsland) op <strong>ISO 27001-gecertificeerde infrastructuur</strong>.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">4. Wie wij inschakelen</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                        Wij schakelen de volgende partijen in om de dienst te leveren. Met elk van hen hebben wij afspraken
                        over de verwerking van uw gegevens.
                    </p>
                    <ul className="list-disc list-inside text-slate-600 text-sm space-y-2 leading-relaxed">
                        <li><strong>Opslag en database</strong> — Supabase, datacenter Frankfurt (EER).</li>
                        <li><strong>Applicatie-hosting</strong> — Vercel, regio Frankfurt (EER).</li>
                        <li><strong>Tekstherkenning van facturen en foto&apos;s</strong> — Mistral AI, Frankrijk (EER).</li>
                        <li><strong>WhatsApp-berichten</strong> — Bird (MessageBird), Nederland (EER).</li>
                        <li><strong>E-mail</strong> — Brevo (EER).</li>
                        <li>
                            <strong>De assistent in het dashboard en in WhatsApp</strong> maakt gebruik van een taalmodel dat
                            via OpenRouter wordt uitgevoerd. Daarbij worden gegevens <strong>buiten de EER (Verenigde Staten)</strong>
                            verwerkt. Wij sturen daar geen patiëntgegevens naartoe: berichten worden vooraf gefilterd op
                            persoonsgegevens van patiënten, en u wordt gevraagd die niet in te voeren.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">5. Verwerkersovereenkomst</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Voor huisartsenpraktijken fungeren wij als 'Verwerker' in de zin van de AVG. 
                        Bij het afsluiten van een abonnement wordt automatisch onze standaard Verwerkersovereenkomst van kracht, 
                        waarin wij garanderen dat wij passende technische en organisatorische maatregelen nemen.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contact</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Voor vragen over privacy of het uitoefenen van uw rechten (inzage, correctie, verwijdering) kunt u contact met ons opnemen:
                        <br/><br/>
                        <strong>KlantFans</strong> (KvK 87779498), handelend onder de naam ZenTrack<br/>
                        T.a.v. privacy<br/>
                        Kruisweg 9L<br/>
                        3513 CS Utrecht<br/>
                        privacy@zentrack.nl
                    </p>
                </section>
            </div>
        </div>
      </div>
    </div>
  );
};
