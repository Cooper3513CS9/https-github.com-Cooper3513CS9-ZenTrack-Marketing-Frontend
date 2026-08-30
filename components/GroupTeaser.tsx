import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Network } from 'lucide-react';

export const GroupTeaser: React.FC = () => {
  return (
    <section id="zorggroepen" className="py-16 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-purple-100 shadow-sm p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-purple-200">
              <Network className="w-3.5 h-3.5" />
              <span>Meerdere locaties</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
              Ook voor zorggroepen en gezondheidscentra
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Elke locatie krijgt rust, u houdt zelf de regie: overzicht en verantwoording per locatie,
              één factuur voor alles, en een uitrol in uw eigen tempo.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/zorggroepen"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3.5 rounded-xl font-bold transition-colors inline-flex items-center gap-2 shadow-lg shadow-purple-600/20"
            >
              <Building2 className="w-5 h-5" />
              Bekijk de zorggroep-aanpak
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
