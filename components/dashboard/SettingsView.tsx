"use client";

import React, { useState } from 'react';
import { User, Bell, Smartphone, LogOut, Check, ArrowLeft, Save } from 'lucide-react';

interface Props {
    onBack?: () => void;
    onLogout?: () => void;
}

export const SettingsView: React.FC<Props> = ({ onBack, onLogout }) => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto max-w-3xl">
      
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center gap-3 mb-6">
         <button onClick={onBack} className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600">
            <ArrowLeft className="w-5 h-5" />
         </button>
         <h2 className="text-xl font-bold text-slate-900">Instellingen</h2>
      </div>

      <div className="hidden lg:block mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Instellingen</h2>
        <p className="text-slate-500">Beheer uw account, notificaties en koppelingen.</p>
      </div>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-600" /> Profiel & Praktijk
          </h3>
          <div className="grid gap-4">
            <div>
               <label className="block text-sm font-medium text-slate-700 mb-1">Praktijknaam</label>
               <input type="text" value="Huisartsenpraktijk De Beuk" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900" readOnly />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Contactpersoon</label>
                  <input type="text" value="Dr. Janssen" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900" readOnly />
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Rol</label>
                  <input type="text" value="Praktijkmanager (Admin)" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-500" readOnly />
               </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-emerald-600" /> Notificaties
          </h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="text-slate-700 font-medium text-sm">Expiratie Radar (WhatsApp)</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-emerald-600 rounded" />
            </label>
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="text-slate-700 font-medium text-sm">Wekelijks voorraadrapport per mail</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-emerald-600 rounded" />
            </label>
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="text-slate-700 font-medium text-sm">Pakbon afwijkingen alert</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-emerald-600 rounded" />
            </label>
          </div>
        </div>

        {/* Integrations */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-emerald-600" /> Koppelingen
          </h3>
          <div className="flex items-center justify-between p-4 border border-emerald-100 bg-emerald-50/50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white font-bold">
                 W
              </div>
              <div>
                 <p className="font-bold text-slate-900">WhatsApp Business</p>
                 <p className="text-xs text-emerald-600">Verbonden: +31 6 1234 5678</p>
              </div>
            </div>
            <button className="text-sm text-emerald-600 font-bold hover:underline">Wijzigen</button>
          </div>
        </div>

        {/* Save Actions */}
        <div className="flex items-center justify-end gap-4 pt-2">
            {saved && (
                <span className="text-emerald-600 text-sm font-bold flex items-center gap-1 animate-fade-in">
                    <Check className="w-4 h-4" /> Opgeslagen
                </span>
            )}
            <button 
                onClick={handleSave}
                className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
                <Save className="w-4 h-4" /> Wijzigingen Opslaan
            </button>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <button 
            onClick={onLogout}
            className="w-full py-3 text-red-500 font-medium bg-red-50 rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
          >
             <LogOut className="w-5 h-5" /> Uitloggen
          </button>
        </div>
      </div>
    </div>
  );
};
