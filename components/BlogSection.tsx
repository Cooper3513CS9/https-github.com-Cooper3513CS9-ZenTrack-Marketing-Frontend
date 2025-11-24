"use client";

import React from 'react';
import { ArrowRight, BookOpen, Shield, TrendingUp } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const articles = [
    {
      category: "Onderzoek",
      title: "De verborgen kosten van 'grijze' voorraad",
      excerpt: "Uit data van 50 praktijken blijkt dat 15% van de medische verbruiksartikelen verloopt voordat het gebruikt wordt. Een analyse van de financiële impact.",
      date: "18 Nov 2025",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
      icon: TrendingUp
    },
    {
      category: "Wetgeving & Privacy",
      title: "AVG in de praktijk: Waarom WhatsApp veilig kan zijn",
      excerpt: "Hoe ZenTrack voldoet aan de NEN7510 normering door data te scheiden van de interface. Een technische deep-dive in onze architectuur.",
      date: "12 Nov 2025",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      icon: Shield
    },
    {
      category: "Praktijkmanagement",
      title: "Van 12 naar 2 uur: Case Study Huisartsenpraktijk West",
      excerpt: "Praktijkmanager Sarah vertelt hoe zij de logistieke stromen automatiseerde en wat dit deed met de werkdruk van haar assistentes.",
      date: "05 Nov 2025",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1631217868269-dfc1c5c3e042?auto=format&fit=crop&q=80&w=800",
      icon: BookOpen
    }
  ];

  return (
    <section id="inzichten" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
                <BookOpen className="w-4 h-4" />
                <span>Kennisbank</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Inzichten voor de moderne praktijk
            </h2>
            <p className="text-lg text-slate-600">
              Geen marketingpraatjes, maar inhoudelijke artikelen over praktijkvoering, wetgeving en logistieke optimalisatie.
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
            Alle artikelen lezen <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-800 border border-slate-200/50 flex items-center gap-2">
                   <article.icon className="w-3 h-3 text-emerald-600" />
                   {article.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-medium">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} leestijd</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                  {article.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>

                <div className="flex items-center text-emerald-600 font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Lees artikel <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA Bridge */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

           <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Meer vragen?</h3>
              <p className="text-slate-300">Koppel WhatsApp en chat direct met ons team.</p>
           </div>

           <a
              href="https://wa.me/31623885227?text=Ik%20heb%20vragen%20over%20ZenTrack"
              className="relative z-10 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap"
           >
              Open WhatsApp <ArrowRight className="w-4 h-4" />
           </a>
        </div>

      </div>
    </section>
  );
};
