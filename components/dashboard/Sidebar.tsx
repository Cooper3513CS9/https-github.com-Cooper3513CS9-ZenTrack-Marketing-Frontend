import React, { useState } from 'react';
import { MessageSquare, Box, ClipboardList, Settings, LogOut, Menu, X, LayoutDashboard } from 'lucide-react';
import { User } from '../../types';
import { Logo } from '../Logo';

interface SidebarProps {
  currentUser: User;
  onLogout: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
  pendingAlerts?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentUser, onLogout, currentView, onNavigate, pendingAlerts = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', badge: pendingAlerts },
    { id: 'chat', icon: MessageSquare, label: 'Emma Chat' },
    { id: 'inventory', icon: Box, label: 'Voorraad' },
    { id: 'orders', icon: ClipboardList, label: 'Bestellingen' },
    { id: 'settings', icon: Settings, label: 'Instellingen' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <div className={`
        fixed lg:relative top-0 left-0 h-screen z-50
        w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 flex items-center gap-3 h-20 border-b border-slate-800">
          <Logo className="w-8 h-8" variant="white" />
          <span className="text-xl font-bold text-white tracking-tight">ZenTrack</span>
        </div>

        <div className="px-4 py-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Navigatie</p>
            <nav className="space-y-1">
            {navItems.map((item) => (
                <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative ${
                    currentView === item.id 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' 
                    : 'hover:bg-slate-800 hover:text-white text-slate-400'
                }`}
                >
                <item.icon className={`w-5 h-5 ${currentView === item.id ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} />
                <span className="font-medium text-sm">{item.label}</span>
                
                {/* Status Dot/Badge */}
                {currentView === item.id && (
                    <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />
                )}
                {item.badge ? (
                   <div className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm animate-pulse">
                      {item.badge}
                   </div>
                ) : null}
                </button>
            ))}
            </nav>
        </div>

        <div className="mt-auto p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-4 px-2 p-3 bg-slate-800/50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold border-2 border-slate-700 shadow-sm">
              {currentUser.name.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">{currentUser.name}</p>
              <p className="text-xs text-slate-400 truncate">{currentUser.role === 'admin' ? 'Praktijkmanager' : 'Medewerker'}</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Uitloggen</span>
          </button>
        </div>
      </div>
    </>
  );
};