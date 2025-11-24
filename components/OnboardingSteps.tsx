"use client";

import React from 'react';
import { UserPlus, UploadCloud, MessageSquare } from 'lucide-react';

export const OnboardingSteps: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Meld uw praktijk aan",
      description: "Maak binnen 2 minuten een veilig account aan. U krijgt direct toegang tot uw eigen ZenTrack omgeving.",
      icon: UserPlus,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Upload één factuur",
      description: "Sleep een PDF factuur in uw dashboard. Wij lezen uw bestelhistoriek en leveranciers automatisch in.",
      icon: UploadCloud,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 3,
      title: "Ontvang direct inzicht",
      description: "Koppel WhatsApp en ontvang uw eerste voorraad- en bestelvoorstel. U bent live!",
      icon: MessageSquare,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Hoe start u met ZenTrack?</h2>
          <p className="text-slate-500 mt-2">Van aanmelden tot inzicht in 3 simpele stappen.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${step.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8" />
              </div>
              <div className="bg-white px-4">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Step Number Badge */}
              <div className="absolute top-0 right-1/2 -mr-10 -mt-2 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                {step.id}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <p className="text-sm text-slate-400 mb-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Geen betaalgegevens nodig voor start
           </p>
        </div>
      </div>
    </section>
  );
};
