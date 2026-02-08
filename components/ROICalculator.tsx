"use client";
import React, { useState, useEffect } from 'react';
import { Calculator, Clock, Euro, TrendingUp, AlertCircle } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  // Defaults based on market feedback
  const [monthlySpend, setMonthlySpend] = useState(1000);
  const [hoursPerWeek, setHoursPerWeek] = useState(2);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [emergencyOrders, setEmergencyOrders] = useState(2);
  const [savingsPercentage, setSavingsPercentage] = useState(5); // Default conservative 5%

  const [savings, setSavings] = useState({
    waste: 0,
    time: 0,
    emergency: 0,
    total: 0,
    paybackDays: 0
  });

  useEffect(() => {
    // 1. Waste/Price Optimization: Variable % savings on spend
    const wasteSavings = (monthlySpend * 12) * (savingsPercentage / 100);
    
    // 2. Time Savings: ZenTrack automates ~70%
    const timeSavings = (hoursPerWeek * 52 * hourlyRate) * 0.70;

    // 3. Emergency Orders (Spoedkosten):
    // Avg cost of rush order = €12.50 shipping + €25 handling/stress/disruption = €37.50
    const emergencySavings = (emergencyOrders * 12) * 37.50;
    
    const total = Math.round(wasteSavings + timeSavings + emergencySavings);

    // Calculate Payback Period based on Pro Plan (€149/mo = €1788/yr)
    const subscriptionCost = 1788;
    const paybackDays = Math.round((subscriptionCost / total) * 365);
    
    setSavings({
      waste: Math.round(wasteSavings),
      time: Math.round(timeSavings),
      emergency: Math.round(emergencySavings),
      total: total,
      paybackDays: paybackDays < 365 ? paybackDays : 365
    });
  }, [monthlySpend, hoursPerWeek, hourlyRate, emergencyOrders, savingsPercentage]);

  // Helper for dynamic badge styling
  const getBadgeStyle = (days: number) => {
      if (days <= 30) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      if (days <= 90) return 'bg-blue-100 text-blue-800 border-blue-200';
      return 'bg-orange-100 text-orange-800 border-orange-200';
  };

  return (
    <section id="calculator" className="py-20 bg-white overflow-hidden border-t border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Side */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              <span>Besparingscalculator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Reken uit wat je laat liggen.
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
               Naast directe kosten verliezen praktijken veel geld aan 'onzichtbare' posten: spoedleveringen, verlopen voorraad en dure administratieve uren.
            </p>
            
            <div className="space-y-6 pl-2">
                <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-emerald-100 rounded-xl text-emerald-700 mt-1 shadow-sm">
                        <Euro className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">Inkoopvoordeel</h4>
                        <p className="text-sm text-slate-500">Besparing door inzicht uit factuurdata van het hele netwerk.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-blue-100 rounded-xl text-blue-700 mt-1 shadow-sm">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">Tijdwinst</h4>
                        <p className="text-sm text-slate-500">70% minder tijd kwijt aan tellen en bestellen.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="flex-1 w-full max-w-xl bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200 shadow-2xl relative overflow-hidden">
             {/* Payback Badge - Dynamic Colors */}
             <div className={`absolute -top-1 right-0 px-4 py-1.5 rounded-l-xl font-bold text-xs uppercase tracking-wider shadow-sm border-l border-b animate-fade-in ${getBadgeStyle(savings.paybackDays)}`}>
                Terugverdiend in {savings.paybackDays} dagen
             </div>

             <div className="space-y-8 mb-8 mt-14">
                {/* Slider 1: Spend */}
                <div>
                   <div className="flex justify-between mb-2 items-end">
                      <label className="text-sm font-bold text-slate-700">Maandelijkse inkoop</label>
                      <span className="font-mono font-bold text-slate-900 bg-white px-2 py-1 rounded border border-slate-200">€{monthlySpend}</span>
                   </div>
                   <input 
                     type="range" 
                     min="250" max="2500" step="50"
                     value={monthlySpend}
                     onChange={(e) => setMonthlySpend(parseInt(e.target.value))}
                     className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                   />
                </div>

                {/* Slider 1.5: Savings % */}
                <div>
                   <div className="flex justify-between mb-2 items-end">
                      <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                         Geschatte inkoopbesparing
                         <div className="group relative">
                            <AlertCircle className="w-3 h-3 text-slate-400 cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-slate-800 text-white text-[10px] p-2 rounded hidden group-hover:block">
                               Conservatief: 5% | Gemiddeld: 10% | Ambitie: 20-30%
                            </div>
                         </div>
                      </label>
                      <span className="font-mono font-bold text-slate-900 bg-white px-2 py-1 rounded border border-slate-200">{savingsPercentage}%</span>
                   </div>
                   <input
                     type="range"
                     min="0" max="30" step="1"
                     value={savingsPercentage}
                     onChange={(e) => setSavingsPercentage(parseInt(e.target.value))}
                     className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                   />
                </div>

                {/* Slider 2: Hours */}
                <div>
                   <div className="flex justify-between mb-2 items-end">
                      <label className="text-sm font-bold text-slate-700">Uren beheer / week</label>
                      <span className="font-mono font-bold text-slate-900 bg-white px-2 py-1 rounded border border-slate-200">{hoursPerWeek}u</span>
                   </div>
                   <input 
                     type="range" 
                     min="0.5" max="8" step="0.5"
                     value={hoursPerWeek}
                     onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
                     className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                   />
                </div>

                {/* Slider 3: Emergency Orders */}
                <div>
                   <div className="flex justify-between mb-2 items-end">
                      <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                         Spoedbestellingen / maand
                         <div className="group relative">
                            <AlertCircle className="w-3 h-3 text-slate-400 cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-800 text-white text-[10px] p-2 rounded hidden group-hover:block">
                               Extra verzendkosten + stress
                            </div>
                         </div>
                      </label>
                      <span className="font-mono font-bold text-slate-900 bg-white px-2 py-1 rounded border border-slate-200">{emergencyOrders}x</span>
                   </div>
                   <input 
                     type="range" 
                     min="0" max="10" step="1"
                     value={emergencyOrders}
                     onChange={(e) => setEmergencyOrders(parseInt(e.target.value))}
                     className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                   />
                </div>
                
                {/* Hourly Rate (Smaller) */}
                <div className="pt-2 border-t border-slate-200">
                   <div className="flex justify-between items-center">
                      <label className="text-xs font-medium text-slate-500">Uurtarief medewerker</label>
                      <div className="flex items-center gap-2">
                         <span className="text-xs font-bold text-slate-700">€{hourlyRate}</span>
                         <input 
                           type="range" min="30" max="80" step="5"
                           value={hourlyRate}
                           onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                           className="w-24 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-500"
                         />
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                <div className="flex items-center gap-2 mb-2 text-slate-500 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    Jouw potentiële winst
                </div>
                <div className="flex items-baseline gap-1 text-slate-900">
                    <span className="text-5xl font-bold tracking-tight">€{savings.total.toLocaleString('nl-NL')}</span>
                    <span className="text-lg font-medium text-slate-400">/jaar</span>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-emerald-50 rounded-lg p-2">
                        <p className="text-[10px] text-emerald-600 font-bold uppercase">Inkoop</p>
                        <p className="font-bold text-slate-700 text-sm">€{savings.waste}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-2">
                        <p className="text-[10px] text-blue-600 font-bold uppercase">Tijd</p>
                        <p className="font-bold text-slate-700 text-sm">€{savings.time}</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-2">
                        <p className="text-[10px] text-orange-600 font-bold uppercase">Spoed</p>
                        <p className="font-bold text-slate-700 text-sm">€{savings.emergency}</p>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
