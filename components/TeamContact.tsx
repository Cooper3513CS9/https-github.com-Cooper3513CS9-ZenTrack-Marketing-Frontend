"use client";
import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

export const TeamContact: React.FC = () => {
  return (
    <section id="over-ons" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          
          {/* Avatar / Image */}
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
               {/* Placeholder for Jord's image or generic professional avatar */}
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" 
                 alt="Jord - Customer Success" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute bottom-2 right-2 bg-emerald-500 text-white p-2 rounded-full border-2 border-white">
                <MessageCircle className="w-5 h-5" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Spreek direct met Jord</h2>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl">
              "Bij ZenTrack geloven we in persoonlijk contact. Geen chatbots (behalve onze slimme AI 😉), maar een echt gesprek over hoe we jouw praktijk kunnen helpen. Ik help je graag met de setup."
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
                <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Rol</p>
                    <p className="text-slate-600">Customer Success Manager</p>
                </div>
                 <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Direct Contact</p>
                    <div className="flex flex-col gap-1">
                        <a href="mailto:jord@zentrack.nl" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium">
                            <Mail className="w-4 h-4" /> Email Ons
                        </a>
                        <a href="https://wa.me/31623885227" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium">
                            <MessageCircle className="w-4 h-4" /> WhatsApp (06-2388-5227)
                        </a>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};