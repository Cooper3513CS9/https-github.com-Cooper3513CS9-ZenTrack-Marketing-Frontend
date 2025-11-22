"use client";

import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('zentrack-cookie-consent');
    if (!consent) {
      // Show banner after a small delay
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('zentrack-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('zentrack-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-[60] p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex gap-4">
           <div className="bg-emerald-100 p-2 rounded-lg h-fit">
             <Cookie className="w-6 h-6 text-emerald-600" />
           </div>
           <div className="max-w-2xl">
             <h4 className="font-bold text-slate-900 text-sm mb-1">Wij gebruiken cookies (AVG Proof)</h4>
             <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
               ZenTrack gebruikt functionele cookies om de website te laten werken en anonieme statistieken om onze service te verbeteren. 
               Wij delen <strong className="text-slate-900">nooit</strong> data met derden voor advertentiedoeleinden.
             </p>
           </div>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button 
            onClick={handleDecline}
            className="flex-1 md:flex-none px-4 py-2 text-slate-500 text-sm font-medium hover:bg-slate-100 rounded-lg transition-colors"
          >
            Alleen noodzakelijke
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg transition-colors shadow-sm"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
};
