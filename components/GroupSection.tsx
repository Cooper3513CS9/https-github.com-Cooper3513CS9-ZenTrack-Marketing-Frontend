import React from 'react';
import { Building2, ArrowRight, Globe, TrendingUp, Network, FileSpreadsheet, AlertCircle, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';

export const GroupSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="zorggroepen" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8 border border-purple-200 shadow-sm">
              <Network className="w-4 h-4" />
              <span>ZenTrack Enterprise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              De slimme schakel tussen strategie en <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">de dagelijkse zorg.</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-slate-900">Geef uw locaties rust, krijg zelf de regie.</strong><br/>
              ZenTrack is het operationele platform dat compliance borgt, inkoop harmoniseert en uw personeel op 40+ locaties ontzorgt.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16 mb-24">
          
          {/* Visual Side - Dashboard Preview (Premium Card) */}
          <div className="flex-1 w-full sticky top-24">
             <div className="bg-white rounded-[2.5rem] p-2 border border-slate-200 shadow-2xl shadow-purple-900/5 relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-700">
                <div className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden p-6 md:p-8">
                   
                   {/* Dashboard Header */}
                   <div className="flex items-center justify-between mb-8">
                      <div>
                         <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-purple-600" /> Regio Midden-Noord
                         </h3>
                         <p className="text-xs text-slate-500 font-medium pl-7">Totaaloverzicht</p>
                      </div>
                      <div className="px-3 py-1.5 bg-white border border-purple-100 text-purple-700 text-xs font-bold rounded-full flex items-center gap-2 shadow-sm">
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                         42 Locaties Live
                      </div>
                   </div>

                   {/* Insight Cards inside the visual */}
                   <div className="space-y-4">
                      {/* Alert Card */}
                      <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 relative overflow-hidden">
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                         <div className="p-2.5 bg-red-50 rounded-xl text-red-500 shrink-0">
                            <ShieldCheck className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-1">Compliance Signaal</p>
                            <p className="text-sm font-bold text-slate-900 leading-snug mb-2">3 locaties hebben verlopen medicatie in de kast.</p>
                            <div className="flex items-center gap-2 text-xs text-red-600 font-bold cursor-pointer hover:underline">
                               Bekijk details {'&'} adviseer <ArrowRight className="w-3 h-3" />
                            </div>
                         </div>
                      </div>

                      {/* Metrics Card */}
                      <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                         <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium text-slate-600">Leveringsbetrouwbaarheid</span>
                            <span className="text-lg font-bold text-emerald-600">98.5%</span>
                         </div>
                         {/* Fake Chart Bars */}
                         <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-xs text-slate-500 mb-1">
                                    <span>Contract A</span>
                                    <span className="font-bold">100%</span>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs text-slate-500 mb-1">
                                    <span>Contract B</span>
                                    <span className="font-bold">94%</span>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[94%]"></div>
                                </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Text Side - The 3 Pillars */}
          <div className="flex-1 pt-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-10">Meer dan alleen inkoop</h3>
            
            <div className="space-y-10">
              <div className="group">
                <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-purple-600 shadow-sm flex-shrink-0 group-hover:border-purple-200 group-hover:bg-purple-50 transition-colors">
                    <ShieldCheck className="w-7 h-7" />
                    </div>
                    <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">1. Kwaliteit {'&'} Veiligheid</h4>
                    <p className="text-slate-600 leading-relaxed">
                        Borg patiëntveiligheid over de hele keten. ZenTrack signaleert <strong>centraal</strong> wanneer kritieke voorraden opraken of expireren. U heeft de controle over compliance.
                    </p>
                    </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors">
                    <Globe className="w-7 h-7" />
                    </div>
                    <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">2. Strategische Data</h4>
                    <p className="text-slate-600 leading-relaxed">
                        Transformeer onderbuikgevoel naar harde data. Weet precies wat het totale verbruik is voor betere contractafspraken, zonder de autonomie van de locatie aan te tasten.
                    </p>
                    </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                    <Heart className="w-7 h-7" />
                    </div>
                    <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">3. Goed Werkgeverschap</h4>
                    <p className="text-slate-600 leading-relaxed">
                        Verlaag de werkdruk voor uw 150+ medewerkers. Geen administratieve rompslomp meer, maar een tool die voor hen werkt. Dat is investeren in uw mensen.
                    </p>
                    </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
               <button 
                 onClick={scrollToContact}
                 className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1"
               >
                  Plan een strategische sessie 
                  <ArrowRight className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>

        {/* VS Section: Financial vs Operational */}
        <div className="bg-white rounded-[3rem] border border-slate-200 shadow-xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-200 via-purple-500 to-emerald-500"></div>
            
            <div className="text-center mb-16">
                <div className="inline-block mb-4">
                    <span className="bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Reality Check</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">De Ontbrekende Schakel</h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Uw financiële software (ERP) kijkt terug en telt euro's. ZenTrack kijkt vooruit en beheert de fysieke werkelijkheid. <strong>Samen vormen ze een compleet beeld.</strong>
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                {/* The Old Way (Financial) */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col">
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-200">
                        <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm"><FileSpreadsheet className="w-6 h-6 text-slate-500" /></div>
                        <h4 className="font-bold text-xl text-slate-700">Uw Financiële Software</h4>
                    </div>
                    
                    <div className="space-y-6 flex-1">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-mono text-slate-400 mb-1">Grootboek 4000</p>
                            <p className="font-medium text-slate-900">Medische Kosten</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-mono text-slate-400 mb-1">Q4 Totaal</p>
                            <p className="text-2xl font-bold text-slate-900">€ 456.234,00</p>
                        </div>

                        <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 border-dashed">
                            <p className="text-slate-500 text-sm italic flex flex-col gap-2">
                                <span className="flex items-center gap-2"><AlertCircle className="w-4 h-4" /> "We hebben veel uitgegeven, maar waaraan?"</span>
                                <span className="flex items-center gap-2"><AlertCircle className="w-4 h-4" /> "Ligt dit nog in de kast of is het verbruikt?"</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Financiële Verantwoording</span>
                    </div>
                </div>

                {/* The ZenTrack Way (Operational) */}
                <div className="bg-gradient-to-b from-purple-50 to-white rounded-3xl p-8 border border-purple-100 shadow-lg ring-1 ring-purple-100 flex flex-col relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-purple-100/50">
                        <div className="p-3 bg-white border border-purple-100 rounded-xl shadow-sm text-purple-600"><Network className="w-6 h-6" /></div>
                        <h4 className="font-bold text-xl text-purple-900">ZenTrack Platform</h4>
                    </div>

                    <div className="space-y-6 flex-1 relative z-10">
                        <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm flex justify-between items-center">
                            <div>
                                <p className="text-xs font-bold text-purple-400 uppercase mb-1">Real-time Voorraad</p>
                                <p className="font-bold text-slate-900">42 Locaties Live</p>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm flex justify-between items-center">
                            <div>
                                <p className="text-xs font-bold text-purple-400 uppercase mb-1">Verbruikstrend</p>
                                <p className="font-bold text-slate-900">Stabiel (+1.2%)</p>
                            </div>
                            <TrendingUp className="w-5 h-5 text-emerald-500" />
                        </div>

                        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                                <p className="text-emerald-800 text-sm font-medium italic">
                                    "Voorraadniveaus veilig. Geen verspilling gedetecteerd."
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                        <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Operationele Grip</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
