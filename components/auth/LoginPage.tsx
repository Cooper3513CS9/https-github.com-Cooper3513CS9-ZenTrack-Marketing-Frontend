"use client";
import React, { useState } from 'react';
import { Mail, Smartphone, ArrowRight, Loader2 } from 'lucide-react';
import { Logo } from '../Logo';

interface LoginPageProps {
  onLoginSuccess: () => void;
  onBack: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onBack }) => {
  const [method, setMethod] = useState<'email' | 'sms'>('sms');
  const [step, setStep] = useState<'input' | 'verify'>('input');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    
    setLoading(true);
    // Simulate API call to Bird/Supabase
    setTimeout(() => {
      setLoading(false);
      setStep('verify');
    }, 1500);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate verification
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 1500);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="bg-slate-900 p-8 text-center">
          <div onClick={onBack} className="inline-flex items-center gap-2 cursor-pointer mb-6">
            <Logo className="w-10 h-10" variant="white" />
            <span className="text-2xl font-bold text-white tracking-tight">ZenTrack</span>
          </div>
          <h2 className="text-xl font-semibold text-white">Welkom terug</h2>
          <p className="text-slate-400 text-sm mt-2">Log in om je voorraad te beheren</p>
        </div>

        {/* Body */}
        <div className="p-8">
          {step === 'input' ? (
            <form onSubmit={handleSendCode} className="space-y-6">
              {/* Method Toggle */}
              <div className="flex p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setMethod('sms')}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all ${
                    method === 'sms' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Smartphone className="w-4 h-4" /> SMS
                </button>
                <button
                  type="button"
                  onClick={() => setMethod('email')}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all ${
                    method === 'email' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Mail className="w-4 h-4" /> E-mail
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {method === 'sms' ? 'Mobiel nummer' : 'E-mailadres'}
                </label>
                <div className="relative">
                  <input
                    type={method === 'sms' ? 'tel' : 'email'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={method === 'sms' ? '06 12345678' : 'naam@praktijk.nl'}
                    className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    required
                  />
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  We sturen een verificatiecode via {method === 'sms' ? 'MessageBird' : 'e-mail'}.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Code versturen <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                   <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900">Check je {method === 'sms' ? 'berichten' : 'inbox'}</h3>
                <p className="text-sm text-slate-500">We hebben een code gestuurd naar {inputValue}</p>
              </div>

              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-10 h-12 text-center text-xl font-bold bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                 {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Verifiëren & Inloggen'}
              </button>
              
              <button 
                type="button"
                onClick={() => setStep('input')}
                className="w-full text-sm text-slate-400 hover:text-slate-600"
              >
                Terug naar invoeren
              </button>
            </form>
          )}
        </div>
        
        {/* Footer Branding */}
        <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
            Beveiligd met <span className="font-semibold text-slate-500">Supabase</span> & <span className="font-semibold text-slate-500">Bird</span>
          </p>
        </div>
      </div>
    </div>
  );
};