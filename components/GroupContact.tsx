"use client";

import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Send, Check, ArrowRight } from 'lucide-react';

// Contactblok voor /zorggroepen: houdt de zorggroep-lead op de eigen pagina en
// maakt hem herkenbaar in de inbox ([Zorggroep]-onderwerp + aantal locaties).
export const GroupContact: React.FC = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', locaties: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const whatsappUrl = `https://wa.me/31626667714?text=${encodeURIComponent(
    'Hoi ZenTrack, ik wil een strategische sessie plannen voor onze zorggroep.'
  )}`;
  const mailtoFallback = `mailto:info@zentrack.nl?subject=${encodeURIComponent('[Zorggroep] Strategische sessie plannen')}&body=${encodeURIComponent(form.message)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, context: 'zorggroep' }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Links: uitnodiging + directe kanalen */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Plan een strategische sessie</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Vertel kort over uw organisatie en het aantal locaties. Een van de oprichters
              neemt contact op om samen door te nemen wat ZenTrack voor uw zorggroep kan betekenen —
              vrijblijvend, en in uw tempo.
            </p>
            <div className="space-y-4 mb-8">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 transition-colors">
                <span className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0"><MessageCircle className="w-5 h-5" /></span>
                <span><strong>WhatsApp</strong> — 06-2666-7714, meestal binnen een uur antwoord</span>
              </a>
              <a href="mailto:info@zentrack.nl" className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 transition-colors">
                <span className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0"><Mail className="w-5 h-5" /></span>
                <span><strong>E-mail</strong> — info@zentrack.nl, antwoord binnen 24 uur</span>
              </a>
              <span className="flex items-center gap-3 text-slate-700">
                <span className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0"><Phone className="w-5 h-5" /></span>
                <span><strong>Telefoon</strong> — 06-2666-7714, tijdens kantooruren</span>
              </span>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg">
              <MessageCircle className="w-5 h-5" /> Direct via WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Rechts: formulier */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
            {status === 'sent' ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4"><Check className="w-7 h-7" /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Bedankt voor uw bericht</h3>
                <p className="text-slate-600 text-sm">We nemen binnen 24 uur contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="zg-voornaam" className="block text-sm font-medium text-slate-700 mb-1">Voornaam</label>
                    <input id="zg-voornaam" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" />
                  </div>
                  <div>
                    <label htmlFor="zg-achternaam" className="block text-sm font-medium text-slate-700 mb-1">Achternaam</label>
                    <input id="zg-achternaam" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" />
                  </div>
                </div>
                <div>
                  <label htmlFor="zg-email" className="block text-sm font-medium text-slate-700 mb-1">E-mailadres</label>
                  <input id="zg-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" />
                </div>
                <div>
                  <label htmlFor="zg-locaties" className="block text-sm font-medium text-slate-700 mb-1">Aantal locaties <span className="text-slate-400 font-normal">(optioneel)</span></label>
                  <input id="zg-locaties" inputMode="numeric" value={form.locaties} onChange={(e) => setForm({ ...form, locaties: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" placeholder="bijv. 8" />
                </div>
                <div>
                  <label htmlFor="zg-bericht" className="block text-sm font-medium text-slate-700 mb-1">Waar wilt u het over hebben?</label>
                  <textarea id="zg-bericht" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm resize-none" />
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> {status === 'sending' ? 'Versturen…' : 'Verstuur en plan een sessie'}
                </button>
                {status === 'error' && (
                  <p className="text-sm text-red-600">
                    Versturen lukte niet. Mail ons direct via{' '}
                    <a href={mailtoFallback} className="underline">info@zentrack.nl</a> of app naar 06-2666-7714.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
