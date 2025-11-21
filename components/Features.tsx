
import React from 'react';
import { TrendingUp, DollarSign, Clock, Radar, UserCheck, QrCode, Briefcase } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="waarom" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Van simpele scanner naar <span className="text-emerald-600">automatische piloot</span>
            </h2>
            <p className="text-lg text-slate-600">
              ZenTrack begint simpel: jij scant, wij registreren. Naarmate we meer data hebben, nemen we het denkwerk over. <strong className="text-slate-900">Jij blijft altijd de baas</strong> (Human in the Loop).
            </p>

            <div className="space-y-6">
              {/* Feature 0: Human in the Loop (Core Value) */}
              <div className="flex gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Human in the Loop</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    ZenTrack doet <strong>nooit</strong> iets automatisch. Je krijgt altijd een berichtje met een voorstel.
                    <span className="block mt-1 text-emerald-600 font-medium text-xs">→ Jij zegt 'Ja' of 'Nee'. Jij hebt de controle.</span>
                  </p>
                </div>
              </div>
              
               {/* Feature: Doctor's Bags */}
              <div className="flex gap-4 px-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Dokterstassen & Koffers</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Foto van de open tas voor vertrek. ZenTrack herkent wat er mist (bv. Hechtsetjes) en zet het op de bestellijst.
                    <span className="block mt-1 text-blue-600 font-medium text-xs">→ Nooit meer misgrijpen tijdens een visite.</span>
                  </p>
                </div>
              </div>

              {/* Feature 1: Radar */}
              <div className="flex gap-4 px-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                  <Radar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Expiratie Radar</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Scan steriele materialen bij binnenkomst. ZenTrack berekent de datum en stuurt een <strong>WhatsApp bericht</strong> voordat het verloopt.
                    <span className="block mt-1 text-orange-600 font-medium text-xs">→ "Let op: Hechtdraad verloopt volgende maand"</span>
                  </p>
                </div>
              </div>

              {/* Feature 3: Price */}
              <div className="flex gap-4 px-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Pakbon Verificatie</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Scan het label op de doos. ZenTrack checkt direct of de levering compleet is en matcht dit met je bestelling.
                    <span className="block mt-1 text-green-600 font-medium text-xs">→ Mismatch? Wij maken de claim-mail voor je.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">De weg naar Automatisering</h3>
            <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:h-full before:w-0.5 before:bg-slate-200">
              <div className="relative">
                <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
                <h4 className="font-bold text-slate-900">Dag 1: Scannen & Registreren</h4>
                <p className="text-sm text-slate-500 mt-1">Facturen, verbruiksartikelen en pakbonnen scannen. Directe verificatie aan de deur.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
                <h4 className="font-bold text-slate-900">Maand 1-2: Data Verzamelen</h4>
                <p className="text-sm text-slate-500 mt-1">ZenTrack leert je verbruik. Expiratie notificaties komen binnen via WhatsApp.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
                <h4 className="font-bold text-slate-900">Maand 3: Diepte Rapportages</h4>
                <p className="text-sm text-slate-500 mt-1">Eerste kwartaalrapportage. Waar lekt geld weg? Welke voorraad ligt te lang?</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shadow-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
                <h4 className="font-bold text-slate-900">Toekomst: Automatisch Bestellen</h4>
                <p className="text-sm text-slate-500 mt-1">ZenTrack zet de bestelling klaar voordat jij weet dat het op is. Jij klikt alleen op 'Akkoord'.</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
              <Clock className="w-5 h-5 text-slate-400" />
              <span className="text-sm text-slate-600 font-medium">Start vandaag met <span className="text-slate-900">alleen scannen</span></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
