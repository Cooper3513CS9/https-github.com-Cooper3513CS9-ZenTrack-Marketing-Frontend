
import React from 'react';
import { Users, FileSpreadsheet, AlertOctagon, Coffee, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const scenarios = [
    {
      title: "De 'Collega op Vakantie' Stress",
      pain: "Kennis zit in één hoofd. Als de praktijkmanager of hoofdhuisarts op vakantie is, weet niemand wat er besteld moet worden. Gevolg: paniek of fouten.",
      gain: "100% Overdraagbaar. ZenTrack werkt via WhatsApp. Iedereen kan een foto maken van een lege doos. Geen inwerkproces, geen afhankelijkheid.",
      icon: Users
    },
    {
      title: "Het Excel & Lijstjes Moeras",
      pain: "Papieren lijstjes op de kasten die niet worden bijgewerkt. Excel bestanden die 'locked' zijn. Handmatige invoerfouten die leiden tot retouren.",
      gain: "Geen administratie meer. Chat gewoon met je voorraad. ZenTrack houdt de administratie op de achtergrond bij. Weg met die lijstjes.",
      icon: FileSpreadsheet
    },
    {
      title: "Het 'Lege Doos' Moment",
      pain: "Je grijpt mis tijdens een behandeling. De doos is leeg en er staat niets in de kast. Gevolg: spoedbestellingen en frustratie in het team.",
      gain: "Nooit meer misgrijpen. ZenTrack ziet het verbruikspatroon en waarschuwt je proactief *voordat* het op is. Altijd voorraad.",
      icon: AlertOctagon
    },
    {
      title: "Werk mee naar huis nemen",
      pain: "Op vrijdagavond of zaterdag nog snel bestellingen doen omdat het doordeweeks te druk was. Werk en privé lopen door elkaar.",
      gain: "Weekend is Weekend. ZenTrack zet de bestelling voor je klaar. Jij hoeft op vrijdagochtend alleen maar 'Ja' te zeggen in de app.",
      icon: Coffee
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
              <XCircle className="w-4 h-4" />
              <span>De Huidige Realiteit</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Herken je deze <span className="text-red-500 decoration-red-200 underline decoration-4 underline-offset-4">frustraties?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Je bent niet de enige. 80% van de praktijken worstelt met verouderde processen die onnodig veel energie kosten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {scenarios.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              </div>

              <div className="space-y-6 relative">
                {/* Connection Line */}
                <div className="absolute left-[11px] top-8 bottom-8 w-0.5 bg-slate-200"></div>

                {/* The Pain */}
                <div className="relative pl-8">
                   <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs border-2 border-white shadow-sm z-10">
                      <XCircle className="w-3 h-3" />
                   </div>
                   <p className="text-sm text-slate-500 leading-relaxed">
                     <span className="font-bold text-slate-900 block mb-1">Het Probleem</span>
                     {item.pain}
                   </p>
                </div>

                {/* The Gain */}
                <div className="relative pl-8">
                   <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs border-2 border-white shadow-sm z-10">
                      <CheckCircle2 className="w-3 h-3" />
                   </div>
                   <p className="text-sm text-slate-700 font-medium leading-relaxed bg-white p-3 rounded-xl border border-emerald-100 shadow-sm">
                     <span className="font-bold text-emerald-600 block mb-1">De ZenTrack Oplossing</span>
                     {item.gain}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
