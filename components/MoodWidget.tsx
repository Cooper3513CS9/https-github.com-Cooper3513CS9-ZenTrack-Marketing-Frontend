import React from 'react';
import { MoodLog, MoodType } from '../types';

interface MoodWidgetProps {
  currentMood: MoodLog | null;
  onSelectMood: (score: number) => void;
}

const moodOptions: MoodType[] = [
  { score: 1, label: 'Stress', emoji: '😫', color: 'bg-red-100 text-red-600' },
  { score: 2, label: 'Zorgen', emoji: '😟', color: 'bg-orange-100 text-orange-600' },
  { score: 3, label: 'Neutraal', emoji: '😐', color: 'bg-slate-100 text-slate-600' },
  { score: 4, label: 'Goed', emoji: '🙂', color: 'bg-blue-100 text-blue-600' },
  { score: 5, label: 'Geweldig', emoji: '😁', color: 'bg-emerald-100 text-emerald-600' },
];

export const MoodWidget: React.FC<MoodWidgetProps> = ({ currentMood, onSelectMood }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col h-full justify-between">
      <div>
        <h2 className="text-lg font-semibold text-slate-800">Hoe voel je je?</h2>
        <p className="text-sm text-slate-500 mb-4">Track je mentale balans</p>
      </div>

      <div className="flex justify-between gap-2">
        {moodOptions.map((option) => {
          const isSelected = currentMood?.score === option.score;
          return (
            <button
              key={option.score}
              onClick={() => onSelectMood(option.score)}
              className={`flex flex-col items-center gap-2 p-2 rounded-2xl flex-1 transition-all duration-300 ${
                isSelected 
                  ? `${option.color} ring-2 ring-offset-2 ring-offset-white ring-gray-200 transform -translate-y-1` 
                  : 'hover:bg-slate-50 hover:-translate-y-1'
              }`}
            >
              <span className="text-2xl md:text-3xl filter drop-shadow-sm">{option.emoji}</span>
              <span className={`text-[10px] md:text-xs font-medium ${isSelected ? 'opacity-100' : 'opacity-60'}`}>
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};