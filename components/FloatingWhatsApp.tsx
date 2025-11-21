
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down a bit (e.g., 300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end animate-fade-in-up">
      {/* Tooltip / Callout */}
      <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 mb-3 mr-2 relative hidden md:block">
        <p className="text-sm font-bold text-slate-800">Vraag? App ons direct!</p>
        <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-slate-100 transform rotate-45"></div>
      </div>

      <a
        href="https://wa.me/31623885227?text=Hi%20ZenTrack,%20ik%20heb%20een%20vraag%20over..."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl shadow-emerald-900/20 transition-all hover:scale-110 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8 md:w-7 md:h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap pl-0 group-hover:pl-3 font-bold">
           Start Chat
        </span>
      </a>
    </div>
  );
};
