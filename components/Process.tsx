
import React, { useState, useEffect } from 'react';
import { FileText, ClipboardCheck, Smartphone, Radar, ArrowRight, Clock, ChevronRight } from 'lucide-react';

const timelineSteps = [
  {
    id: 0,
    time: "09:00",
    title: "Facturen & Verbruik",
    description: "De post komt binnen. Je maakt een foto van een factuur of een doosje hechtmateriaal. ZenTrack herkent het product en de steriele datum direct.",
    icon: FileText,
    color: "bg-blue-500",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    action: "📸 Klik & Klaar"
  },
  {
    id: 1,
    time: "11:30",
    title: "Voorraad & QR",
    description: "Even de behandelkamer checken? Scan de QR-code op de kast en geef je telling door. ZenTrack weet nu precies wat er in elke kamer ligt.",
    icon: Smartphone,
    color: "bg-emerald-500",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    action: "📱 Scan de Kamer"
  },
  {
    id: 2,
    time: "14:00",
    title: "Levering & Tracking",
    description: "Ping! 'Je bestelling wordt bezorgd.' Bij aankomst scan je het pakketlabel. ZenTrack checkt direct of er items missen in de levering.",
    icon: ClipboardCheck,
    color: "bg-purple-500",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    action: "📦 Track & Verify"
  },
  {
    id: 3,
    time: "Continu",
    title: "Expiratie Radar",
    description: "Op de achtergrond waakt ZenTrack over je kast. Verloopt er steriel materiaal volgende maand? Je krijgt vandaag al een appje.",
    icon: Radar,
    color: "bg-orange-500",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    action: "🔔 Auto-Alert"
  }
];

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false); // Disabled auto-play for user control

  // Manual navigation
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  const ActiveIcon = timelineSteps[activeStep].icon;

  return (
    <section id="hoe-het-werkt" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full text-sm font-bold text-slate-600 mb-4 shadow-sm">
             <Clock className="w-4 h-4 text-emerald-500" />
             <span>5 minuten per dag</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Een dag met <span className="text-emerald-600">ZenTrack</span>
          </h2>
        </div>

        {/* Compact Interactive Timeline */}
        <div className="bg-slate-50 rounded-[2.5rem] p-2 md:p-4 border border-slate-100 shadow-xl shadow-slate-200/50">
           
           {/* 1. Time Navigation (Tabs) */}
           <div className="flex overflow-x-auto scrollbar-hide gap-2 p-2 mb-2 md:mb-6 snap-x">
              {timelineSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={`
                    flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 snap-center
                    ${activeStep === index 
                      ? 'bg-white text-slate-900 shadow-md ring-1 ring-black/5 scale-100' 
                      : 'bg-transparent text-slate-500 hover:bg-white/50 scale-95'}
                  `}
                >
                   <div className={`w-2 h-2 rounded-full ${activeStep === index ? step.color : 'bg-slate-300'}`}></div>
                   <span className="font-bold font-mono text-sm">{step.time}</span>
                   <span className={`hidden md:inline text-sm font-medium ${activeStep === index ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                     - {step.title}
                   </span>
                </button>
              ))}
           </div>

           {/* 2. Active Content Card */}
           <div className="bg-white rounded-[2rem] p-6 md:p-10 border border-slate-100 transition-all duration-500 ease-in-out min-h-[300px] flex flex-col md:flex-row gap-8 items-center md:items-stretch">
              
              {/* Visual / Icon Side */}
              <div className="flex-shrink-0">
                 <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl ${timelineSteps[activeStep].color} flex items-center justify-center shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-3`}>
                    <ActiveIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                 </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                 <div className={`inline-flex items-center justify-center md:justify-start gap-2 ${timelineSteps[activeStep].textColor} font-bold text-sm mb-2 uppercase tracking-wider`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${timelineSteps[activeStep].color}`}></span>
                    {timelineSteps[activeStep].title}
                 </div>
                 
                 <p className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                   {timelineSteps[activeStep].description}
                 </p>

                 {/* Action Badge */}
                 <div className="flex justify-center md:justify-start">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${timelineSteps[activeStep].borderColor} bg-slate-50 text-slate-700 font-semibold text-sm`}>
                       {timelineSteps[activeStep].action}
                    </div>
                 </div>
              </div>

              {/* Next Button (Desktop) */}
              <div className="hidden md:flex items-center">
                 <button 
                   onClick={() => handleStepClick((activeStep + 1) % timelineSteps.length)}
                   className="p-3 rounded-full hover:bg-slate-50 text-slate-300 hover:text-emerald-600 transition-colors"
                 >
                    <ChevronRight className="w-8 h-8" />
                 </button>
              </div>

           </div>
           
           {/* Mobile Dots */}
           <div className="flex md:hidden justify-center gap-2 mt-6 pb-2">
              {timelineSteps.map((_, idx) => (
                 <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${activeStep === idx ? `w-6 ${timelineSteps[activeStep].color}` : 'w-1.5 bg-slate-200'}`}></div>
              ))}
           </div>

        </div>
        
        {/* Footer summary */}
        <div className="text-center mt-8 text-slate-500 text-sm">
           <p>De data bouwt op. <strong className="text-slate-900">Over 3 maanden</strong> heb je volledig inzicht.</p>
        </div>

      </div>
    </section>
  );
};
