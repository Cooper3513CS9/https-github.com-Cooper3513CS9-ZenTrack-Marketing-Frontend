import React, { useState } from 'react';
import { ArrowLeft, Building2, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { Logo } from '../Logo';

interface RegisterPageProps {
  onRegisterSuccess: () => void;
  onLoginClick: () => void;
  onBack: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onRegisterSuccess, onLoginClick, onBack }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate registration
    setTimeout(() => {
      setLoading(false);
      onRegisterSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
        
        {/* Left Side - Info */}
        <div className="bg-slate-900 p-8 md:w-2/5 flex flex-col justify-between text-white">
          <div>
            <div onClick={onBack} className="inline-flex items-center gap-2 cursor-pointer mb-8 hover:opacity-80">
                <Logo className="w-8 h-8" variant="white" />
                <span className="text-xl font-bold tracking-tight">ZenTrack</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Start vandaag</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Maak een account aan en begin direct met het automatiseren van uw voorraadbeheer.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> 14 dagen gratis</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Geen betaalgegevens nodig</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Setup in 5 minuten</li>
            </ul>
          </div>
          <div className="mt-8">
             <p className="text-xs text-slate-500">Hulp nodig? <br/> WhatsApp Jord: 06-23885227</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:w-3/5">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Account aanmaken</h3>
              <button onClick={onBack} className="text-slate-400 hover:text-slate-600 md:hidden">
                  <ArrowLeft className="w-5 h-5" />
              </button>
           </div>

           <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                  <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Voornaam</label>
                      <input type="text" required className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Jan" />
                  </div>
                  <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Achternaam</label>
                      <input type="text" required className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Janssen" />
                  </div>
              </div>

              <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">E-mailadres</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input type="email" required className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="jan@praktijk.nl" />
                  </div>
              </div>

               <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Praktijknaam</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input type="text" required className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Huisartsenpraktijk De Beuk" />
                  </div>
              </div>

              <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Wachtwoord</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input type="password" required className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="••••••••" />
                  </div>
              </div>

              <div className="pt-2">
                <button type="submit" disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Account Aanmaken <ArrowRight className="w-4 h-4" /></>}
                </button>
              </div>

              <p className="text-center text-xs text-slate-500 mt-4">
                  Heeft u al een account? <button type="button" onClick={onLoginClick} className="text-emerald-600 font-bold hover:underline">Inloggen</button>
              </p>
           </form>
        </div>

      </div>
    </div>
  );
};