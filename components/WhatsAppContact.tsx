"use client";

import React from 'react';
import { MessageCircle, Clock, UserCheck, Shield, ArrowRight, Zap } from 'lucide-react';

export const WhatsAppContact: React.FC = () => {
  const phoneNumber = '31610482270';
  const prefilledMessage = encodeURIComponent(
    'Hoi Jord, ik ben geïnteresseerd in een demo van ZenTrack voor mijn praktijk. Kunnen we een kort gesprek inplannen?'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-[550px]">
      {/* Header - WhatsApp Green */}
      <div className="bg-[#075E54] p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white">
          <MessageCircle className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-white">WhatsApp met Jord</h3>
          <p className="text-xs text-emerald-200">Meestal binnen 1 uur antwoord</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8 bg-slate-50 flex flex-col justify-between">
        {/* Main Message */}
        <div>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm mb-6">
            <p className="text-slate-700 text-sm leading-relaxed">
              Hoi! 👋 Wil je zien hoe ZenTrack werkt voor jouw praktijk?
              Stuur een berichtje via WhatsApp en we plannen samen een korte demo van 15 minuten in.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <p className="text-sm text-slate-600">Reactie meestal binnen 1 uur</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <p className="text-sm text-slate-600">Persoonlijk contact met Jord, de oprichter</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <p className="text-sm text-slate-600">Vrijblijvend en gratis</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Open WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Meta message - this IS the product */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <Zap className="w-3 h-3" />
            <span>Zo werkt ZenTrack ook in de praktijk — via WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
};
