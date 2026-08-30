"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, FileText } from 'lucide-react';
import { WhatsAppContact } from './WhatsAppContact';

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai' | 'form'>('ai');
  
  // Standard Form State
  const [formState, setFormState] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      practiceName: '',
      message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const [sendFailed, setSendFailed] = useState(false);
  const [sending, setSending] = useState(false);

  // Fix 30 aug 2026: het formulier verstuurde niets maar toonde wel succes.
  // Nu echt POSTen; als de mail-route niet kan versturen tonen we een
  // eerlijke mailto-uitwijk in plaats van nep-succes.
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setSending(true);
      setSendFailed(false);
      try {
          const res = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  firstName: formState.firstName,
                  lastName: formState.lastName,
                  email: formState.email,
                  message: formState.message,
              }),
          });
          if (res.ok) {
              setSubmitted(true);
          } else {
              setSendFailed(true);
          }
      } catch {
          setSendFailed(true);
      } finally {
          setSending(false);
      }
  };

  const mailtoFallback = `mailto:info@zentrack.nl?subject=${encodeURIComponent('Vraag via zentrack.nl')}&body=${encodeURIComponent(formState.message || '')}`;

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-10">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Neem contact op</h2>
                    <p className="text-slate-600">
                        Klaar om uw voorraadbeheer te automatiseren? Stuur een WhatsApp berichtje of vul het contactformulier in.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Telefoon & WhatsApp</p>
                            <p className="text-slate-600">06-2666-7714</p>
                            <p className="text-xs text-slate-400">Bereikbaar tijdens kantooruren</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                         <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">E-mail</p>
                            <p className="text-slate-600">info@zentrack.nl</p>
                            <p className="text-xs text-slate-400">Antwoord binnen 24 uur</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                         <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Locatie</p>
                            <p className="text-slate-600">Utrecht, Nederland</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interaction Area */}
            <div className="lg:w-2/3">
                {/* Tabs */}
                <div className="flex mb-6 bg-slate-100 p-1 rounded-xl w-fit">
                    <button
                        onClick={() => setActiveTab('ai')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'ai' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        WhatsApp (Snelst)
                    </button>
                    <button 
                        onClick={() => setActiveTab('form')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'form' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <FileText className="w-4 h-4" />
                        Contactformulier
                    </button>
                </div>

                {activeTab === 'ai' ? (
                    <WhatsAppContact />
                ) : (
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-10">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Bedankt voor je bericht!</h3>
                                <p className="text-slate-600">We hebben je bericht ontvangen en reageren zo snel mogelijk.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-8 text-emerald-600 font-medium hover:underline">
                                    Nog een bericht sturen
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Voornaam</label>
                                        <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200" value={formState.firstName} onChange={e => setFormState({...formState, firstName: e.target.value})} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Achternaam</label>
                                        <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200" value={formState.lastName} onChange={e => setFormState({...formState, lastName: e.target.value})} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">E-mailadres</label>
                                    <input type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Bericht</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200" value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}></textarea>
                                </div>
                                {sendFailed && (
                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                                        Versturen lukte even niet. Mail ons direct op{' '}
                                        <a href={mailtoFallback} className="font-semibold underline">info@zentrack.nl</a>
                                        {' '}(je bericht staat dan al klaar).
                                    </div>
                                )}
                                <button type="submit" disabled={sending} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-colors disabled:opacity-60">
                                    {sending ? 'Bezig met versturen...' : 'Verstuur bericht'}
                                </button>
                            </form>
                        )}
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};