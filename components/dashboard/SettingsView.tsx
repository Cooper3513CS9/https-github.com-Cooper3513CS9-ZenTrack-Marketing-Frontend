
import React from 'react';
import { User, Bell, Shield, Smartphone, LogOut } from 'lucide-react';

export const SettingsView: React.FC = () => {
  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto max-w-3xl">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Instellingen</h2>
      <p className="text-slate-500 mb-8">Beheer uw account, notificaties en koppelingen.</p>

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
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-xl cursor-pointer">
              <span className="text-slate-700 font-medium">Expiratie Radar (WhatsApp)</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-emerald-600" />
            </label>
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-xl cursor-pointer">
              <span className="text-slate-700 font-medium">Wekelijks voorraadrapport per mail</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-emerald-600" />
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

        <div className="pt-4">
          <button className="w-full py-3 text-red-500 font-medium bg-red-50 rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
             <LogOut className="w-5 h-5" /> Uitloggen
          </button>
        </div>
      </div>
    </div>
  );
};
