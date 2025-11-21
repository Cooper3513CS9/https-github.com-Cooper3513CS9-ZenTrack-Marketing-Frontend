import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { Task, MoodLog } from '../types';
import { getZenAdvice } from '../services/geminiService';

interface AiCoachWidgetProps {
  tasks: Task[];
  recentMood: MoodLog | null;
}

export const AiCoachWidget: React.FC<AiCoachWidgetProps> = ({ tasks, recentMood }) => {
  const [advice, setAdvice] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleGetAdvice = async () => {
    setLoading(true);
    const result = await getZenAdvice(tasks, recentMood);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 shadow-md text-white h-full flex flex-col justify-center">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-purple-400/20 blur-xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <h2 className="text-lg font-bold opacity-90">Zen Coach</h2>
        </div>

        {advice ? (
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-4 text-indigo-50">
              "{advice}"
            </p>
            <button 
              onClick={() => setAdvice("")}
              className="text-xs font-medium text-white/60 hover:text-white transition-colors"
            >
              Nieuw advies vragen
            </button>
          </div>
        ) : (
          <div className="text-center py-4">
             <p className="text-indigo-100 mb-6 text-sm">
               Krijg persoonlijk advies op basis van je taken en stemming.
             </p>
             <button
              onClick={handleGetAdvice}
              disabled={loading}
              className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition-all duration-200 disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Genereer Inzicht</span>
                  <Sparkles className="w-4 h-4 ml-2 text-yellow-300 group-hover:rotate-12 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};