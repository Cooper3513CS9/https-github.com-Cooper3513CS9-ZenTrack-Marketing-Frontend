"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, Loader2, Bot, CalendarDays } from 'lucide-react';
import { scheduleDemoInteraction } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AiScheduler: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: "Hoi! 👋 Ik beheer de agenda van Jord. Zal ik een korte demo van 15 minuten voor je inplannen? Wat is je naam?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [booked, setBooked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await scheduleDemoInteraction(messages, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
      
      // Check for confirmation keywords AND ensure the agent actually confirmed, not just discussed time
      if ((response.toLowerCase().includes('staat genoteerd') || response.toLowerCase().includes('bevestigd')) && response.includes('@')) {
         // Rudimentary check if email was likely involved or confirmed contextually
         setBooked(true);
      } else if (response.toLowerCase().includes('staat genoteerd') || response.toLowerCase().includes('bevestigd')) {
          // Fallback if AI confirms without echoing email, assume it did its job based on prompt instructions
          setBooked(true);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, er ging iets mis. Probeer het later opnieuw." }]);
    } finally {
      setLoading(false);
    }
  };

  const openCalendar = () => {
      // Mock opening a calendar link
      window.open('https://calendly.com', '_blank');
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-[550px]">
      {/* Header */}
      <div className="bg-slate-900 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-white">ZenTrack Planner</h3>
            <p className="text-xs text-emerald-400">AI Assistant • 24/7 beschikbaar</p>
          </div>
        </div>
        {booked && (
            <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-fade-in">
                <CheckCircle className="w-3 h-3" /> Bevestigd
            </div>
        )}
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4" ref={scrollRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              msg.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
             <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
                <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
             </div>
          </div>
        )}
      </div>

      {/* Input / Action Area */}
      <div className="p-4 bg-white border-t border-slate-100">
        {booked ? (
            <div className="text-center py-2">
                <p className="text-emerald-600 font-bold text-sm">Bedankt! De uitnodiging zit in je mail.</p>
                <button onClick={() => window.location.reload()} className="text-xs text-slate-400 mt-2 underline">Nieuwe afspraak maken</button>
            </div>
        ) : (
            <div className="space-y-3">
                <form onSubmit={handleSend} className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Typ uw antwoord..."
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <button 
                        type="submit" 
                        disabled={loading || !input.trim()}
                        className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white p-3 rounded-xl transition-colors"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </form>
                
                <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-slate-100"></div>
                    <span className="flex-shrink-0 mx-2 text-slate-300 text-[10px] uppercase">Of kies zelf</span>
                    <div className="flex-grow border-t border-slate-100"></div>
                </div>

                <button 
                    onClick={openCalendar}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
                >
                    <CalendarDays className="w-4 h-4" />
                    Direct in Agenda Kiezen
                </button>
            </div>
        )}
      </div>
    </div>
  );
};
