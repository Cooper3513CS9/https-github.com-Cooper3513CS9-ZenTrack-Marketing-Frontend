import React, { useState, useEffect } from 'react';
import { Calculator, Clock, Euro, TrendingUp } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  // Defaults based on the specific feedback:
  // Spend: ~1000 (between 300-1800)
  // Hours: ~2 (between 1.5-3.5)
  // Rate: ~45 (between 30-70)
  const [monthlySpend, setMonthlySpend] = useState(1000);
  const [hoursPerWeek, setHoursPerWeek] = useState(2);
  const [hourlyRate, setHourlyRate] = useState(45);
  
  const [savings, setSavings] = useState({
    waste: 0,
    time: 0,
    total: 0
  });

  useEffect(() => {
    // Logic based on ZenTrack's value prop:
    // 1. Waste/Price Optimization: Conservative 8% savings on spend (less waste, better prices)
    const wasteSavings = (monthlySpend * 12) * 0.08;
    
    // 2. Time Savings: ZenTrack automates ~70% of manual checking/ordering
    const timeSavings = (hoursPerWeek * 52 * hourlyRate) * 0.70;
    
    setSavings({
      waste: Math.round(wasteSavings),
      time: Math.round(timeSavings),
      total: Math.round(wasteSavings + timeSavings)
    });
  }, [monthlySpend, hoursPerWeek, hourlyRate]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Side */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              <span>Besparingscalculator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Wat kost <span className="text-red-500">inefficiëntie</span> jouw praktijk?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
               Veel praktijken verliezen ongemerkt geld aan overbodige voorraad en kostbare tijd aan handmatig bestellen. Zelfs bij kleinere inkoopvolumes tikt dit aan.
            </p>
            
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700 mt-1">
                        <Euro className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">8% Inkoopvoordeel</h4>
                        <p className="text-sm text-slate-500">Door prijsvergelijking en voorkomen van expiries.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-700 mt-1">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">70% Tijdsbesparing</h4>
                        <p className="text-sm text-slate-500">Automatische pakbon checks en bestellijsten.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="flex-1 w-full max-w-xl bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xl relative">
             <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-2xl rounded-tr-2xl font-bold text-xs uppercase tracking-wider">
                Live Schatting
             </div>

             <div className="space-y-8 mb-8">
                {/* Slider 1: Monthly Spend */}
                {/* Range: Covers 300 - 1800 comfortably */}
                <div>
                   <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-slate-700">Maandelijkse inkoop (€)</label>
                      <span className="font-bold text-slate-900">€{monthlySpend}</span>
                   </div>
                   <input 
                     type="range" 
                     min="250" 
                     max="2500" 
                     step="50"
                     value={monthlySpend}
                     onChange={(e) => setMonthlySpend(parseInt(e.target.value))}
                     className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                   />
                   <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>€250</span>
                      <span>€2.500</span>
                   </div>
                </div>

                {/* Slider 2: Hours per Week */}
                {/* Range: Covers 1.5 - 3.5 comfortably */}
                <div>
                   <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-slate-700">Uren voorraadbeheer per week</label>
                      <span className="font-bold text-slate-900">{hoursPerWeek} uur</span>
                   </div>
                   <input 
                     type="range" 
                     min="0.5" 
                     max="5" 
                     step="0.5"
                     value={hoursPerWeek}
                     onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
                     className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                   />
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>0.5u</span>
                      <span>5u</span>
                   </div>
                </div>

                {/* Slider 3: Hourly Rate */}
                {/* Range: Covers 30 - 70 comfortably */}
                <div>
                   <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-slate-700">Uurtarief medewerker (€)</label>
                      <span className="font-bold text-slate-900">€{hourlyRate}</span>
                   </div>
                   <input 
                     type="range" 
                     min="30" 
                     max="80" 
                     step="5"
                     value={hourlyRate}
                     onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                     className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                   />
                   <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>€30</span>
                      <span>€80</span>
                   </div>
                </div>
             </div>

             <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    Geschatte jaarlijkse besparing
                </div>
                <div className="flex items-baseline gap-1 text-emerald-600">
                    <span className="text-5xl font-bold">€{savings.total.toLocaleString('nl-NL')}</span>
                    <span className="text-sm font-medium">/jaar</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                    <div>
                        <p className="text-xs text-slate-400">Op inkoop & verspilling</p>
                        <p className="font-bold text-slate-700">€{savings.waste.toLocaleString('nl-NL')}</p>
                    </div>
                    <div>
                        <p className="text-xs text-slate-400">Op arbeidskosten</p>
                        <p className="font-bold text-slate-700">€{savings.time.toLocaleString('nl-NL')}</p>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};