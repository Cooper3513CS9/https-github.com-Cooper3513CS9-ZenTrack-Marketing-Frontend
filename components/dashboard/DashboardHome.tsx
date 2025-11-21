
import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, AlertTriangle, FileText, Users, ShoppingCart, 
  Camera, UserPlus, Settings, Radar, CheckCircle2, 
  ArrowUpRight, MessageSquare, Loader2, X, Check
} from 'lucide-react';
import { User, ChatMessage } from '../../types';
import { chatWithEmma } from '../../services/geminiService';

interface DashboardHomeProps {
  user: User;
  onNavigate: (view: string) => void;
  hasPendingApproval?: boolean;
  onApproveOrder?: () => void;
}

export const DashboardHome: React.FC<DashboardHomeProps> = ({ user, onNavigate, hasPendingApproval = false, onApproveOrder }) => {
  
  return (
    <div className="p-4 md:p-8 max-w-[1600px] mx-auto space-y-8 overflow-y-auto h-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">ZenTrack Dashboard</h1>
          <p className="text-slate-500">Welkom terug, {user.name}. Hier is je overzicht voor vandaag.</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-sm text-slate-600">
           <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
           Laatste update: Zojuist
        </div>
      </div>

      {/* 1. THE APPROVAL CENTER (Core Feature) */}
      {hasPendingApproval ? (
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden animate-fade-in-up">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2 uppercase tracking-wider text-xs">
                        <Radar className="w-4 h-4" /> AI Bestelvoorstel
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Maandelijkse Aanvulling</h2>
                    <p className="text-slate-300 text-sm mb-4 max-w-xl">
                        Op basis van je verbruikspatroon (gem. 21 dagen) adviseer ik om nu te bestellen. 
                        Leverancier <span className="text-white font-semibold">Medline</span> is momenteel het goedkoopst voor deze combinatie.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        <div className="bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700">
                            <span className="text-slate-400 text-xs block">Totaalbedrag</span>
                            <span className="font-bold">€423,50</span>
                        </div>
                        <div className="bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700">
                            <span className="text-slate-400 text-xs block">Items</span>
                            <span className="font-bold">12 producten</span>
                        </div>
                        <div className="bg-emerald-900/30 px-3 py-2 rounded-lg border border-emerald-500/30">
                            <span className="text-emerald-400 text-xs block">Besparing</span>
                            <span className="font-bold text-emerald-300">€42,00</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <button 
                        onClick={onApproveOrder}
                        className="flex-1 md:flex-none px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                        <X className="w-4 h-4" /> Negeren
                    </button>
                    <button 
                        onClick={onApproveOrder}
                        className="flex-1 md:flex-none px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                    >
                        <Check className="w-5 h-5" />
                        Goedkeuren
                    </button>
                </div>
             </div>
          </div>
      ) : (
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 flex items-center justify-between animate-fade-in">
              <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                      <h3 className="font-bold text-emerald-900">Bestelling Goedgekeurd!</h3>
                      <p className="text-sm text-emerald-700">Order #ORD-2025-002 is verstuurd naar Medline. Je ontvangt de bevestiging per mail.</p>
                  </div>
              </div>
              <button onClick={() => onNavigate('orders')} className="text-sm font-bold text-emerald-700 hover:underline">Bekijk status</button>
          </div>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <StatsCard 
          title="Lage Voorraad" 
          value="2 Items" 
          subtitle="Papier, Gazen"
          icon={AlertTriangle}
          color="bg-orange-100 text-orange-600"
          status="warning"
        />
        <StatsCard 
          title="Maandelijkse Kosten" 
          value="€7.802,45" 
          subtitle="52 facturen totaal"
          icon={FileText}
          color="bg-emerald-100 text-emerald-600"
        />
        <StatsCard 
          title="Team Online" 
          value="1" 
          subtitle="Jord Online"
          icon={Users}
          color="bg-blue-100 text-blue-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Quick Actions */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Snelle Acties</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               <QuickActionBtn icon={ShoppingCart} label="Nieuwe Bestelling" onClick={() => onNavigate('orders')} />
               <QuickActionBtn icon={Box} label="Voorraad Tellen" onClick={() => onNavigate('inventory')} />
               <QuickActionBtn icon={Camera} label="Factuur Uploaden" onClick={() => onNavigate('chat')} />
               <QuickActionBtn icon={UserPlus} label="Teamlid Uitnodigen" onClick={() => onNavigate('settings')} />
               <QuickActionBtn icon={Settings} label="Voorraadkast Setup" onClick={() => onNavigate('inventory')} />
               <QuickActionBtn icon={Radar} label="Expiratie Radar" onClick={() => onNavigate('inventory')} />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Recente Activiteit</h3>
            <div className="space-y-6">
               <ActivityItem 
                  icon={FileText} 
                  title="Factuur verwerkt Henry Schein Medical bv" 
                  amount="€568.11"
                  time="1 week geleden"
                  type="info"
               />
               <ActivityItem 
                  icon={AlertTriangle} 
                  title="Grote uitgave geregistreerd Henry Schein Medical bv" 
                  amount="€568.11"
                  time="1 week geleden"
                  type="warning"
               />
               <ActivityItem 
                  icon={FileText} 
                  title="Factuur verwerkt Medline Netherlands" 
                  amount="€423.38"
                  time="1 week geleden"
                  type="info"
               />
               <ActivityItem 
                  icon={CheckCircle2} 
                  title="Pakbon geverifieerd Bestelling #4492" 
                  amount="Compleet"
                  time="2 weken geleden"
                  type="success"
               />
            </div>
          </div>
        </div>

        {/* Right Column (1/3) - Emma Chat */}
        <div className="lg:col-span-1 h-full min-h-[500px]">
           <MiniChatWidget user={user} onExpand={() => onNavigate('chat')} />
        </div>
      </div>
    </div>
  );
};

const StatsCard: React.FC<{ title: string; value: string; subtitle: string; icon: any; color: string; status?: 'success' | 'warning' }> = ({ title, value, subtitle, icon: Icon, color, status }) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
     <div className="flex justify-between items-start mb-4">
        <div>
           <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
           <h3 className={`text-3xl font-bold ${status === 'success' ? 'text-slate-900' : status === 'warning' ? 'text-orange-600' : 'text-slate-900'}`}>{value}</h3>
        </div>
        <div className={`p-3 rounded-xl ${color}`}>
           <Icon className="w-6 h-6" />
        </div>
     </div>
     <div className="flex items-center gap-2 text-xs font-medium">
        {status === 'success' ? (
            <span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> {subtitle}</span>
        ) : status === 'warning' ? (
             <span className="text-orange-600 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> {subtitle}</span>
        ) : (
            <span className="text-slate-400">{subtitle}</span>
        )}
     </div>
  </div>
);

const QuickActionBtn: React.FC<{ icon: any; label: string; onClick: () => void }> = ({ icon: Icon, label, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-xl transition-all group">
     <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
     </div>
     <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-700">{label}</span>
  </button>
);

const ActivityItem: React.FC<{ icon: any; title: string; amount: string; time: string; type: 'info' | 'warning' | 'success' }> = ({ icon: Icon, title, amount, time, type }) => {
    const getColors = () => {
        if (type === 'warning') return 'bg-orange-50 text-orange-600 border-orange-100';
        if (type === 'success') return 'bg-emerald-50 text-emerald-600 border-emerald-100';
        return 'bg-slate-50 text-slate-600 border-slate-100';
    }

    return (
        <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl border ${getColors()}`}>
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h4 className="text-sm font-semibold text-slate-900 leading-snug max-w-[80%]">
                        <span className="text-slate-500 font-normal mr-1">{type === 'warning' ? 'Financieel Systeem' : 'Systeem'}</span>
                        {title}
                    </h4>
                    <span className="text-xs font-bold text-slate-700">{amount}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{time}</p>
            </div>
        </div>
    );
};

const MiniChatWidget: React.FC<{ user: User; onExpand: () => void }> = ({ user, onExpand }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: '1',
            text: `Hoi ${user.name.split(' ')[0]}! Kan ik je ergens mee helpen?`,
            sender: 'bot',
            timestamp: '09:00',
            type: 'text'
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            const response = await chatWithEmma(messages, userMsg.text);
            setTimeout(() => {
                 const botMsg: ChatMessage = {
                    id: (Date.now()+1).toString(),
                    text: response,
                    sender: 'bot',
                    timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                };
                setMessages(prev => [...prev, botMsg]);
                setIsTyping(false);
            }, 1000);
        } catch (error) {
            setIsTyping(false);
        }
    };

    return (
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-lg shadow-emerald-900/5 h-full flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-emerald-50 p-6 border-b border-emerald-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm">Z</div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-emerald-50 rounded-full"></div>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">Emma</h3>
                        <p className="text-xs text-emerald-600 font-medium">Je Praktijk Assistent</p>
                    </div>
                </div>
                <button onClick={onExpand} className="p-2 hover:bg-emerald-100 rounded-lg transition-colors text-emerald-600">
                    <ArrowUpRight className="w-5 h-5" />
                </button>
            </div>

            {/* Info Box */}
            <div className="px-6 pt-6">
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 mb-2">
                    <p className="text-sm text-emerald-800 font-medium mb-2">Emma kan helpen met:</p>
                    <ul className="text-xs text-emerald-700 space-y-1.5">
                        <li className="flex items-center gap-2"><Camera className="w-3 h-3" /> Foto's van facturen/pakbonnen</li>
                        <li className="flex items-center gap-2"><Box className="w-3 h-3" /> Vragen over voorraad</li>
                        <li className="flex items-center gap-2"><MessageSquare className="w-3 h-3" /> Advies en ondersteuning</li>
                    </ul>
                </div>
                <div className="text-center py-2">
                    <p className="text-xl font-bold text-slate-900 tracking-wider font-mono">+31 970 580 241 224</p>
                    <p className="text-xs text-slate-400">Antwoord meestal binnen 2 minuten</p>
                </div>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3" ref={scrollRef}>
                {messages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                            msg.sender === 'user' 
                            ? 'bg-emerald-600 text-white rounded-tr-none' 
                            : 'bg-slate-100 text-slate-800 rounded-tl-none'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-slate-50 p-2 rounded-xl rounded-tl-none">
                            <Loader2 className="w-4 h-4 text-slate-400 animate-spin" />
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 bg-slate-50">
                 <button 
                    onClick={onExpand}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                 >
                    <MessageSquare className="w-5 h-5" /> Open WhatsApp
                 </button>
                 <p className="text-[10px] text-center text-slate-400 mt-2">Of stuur een bericht hierboven</p>
            </div>
        </div>
    );
}
