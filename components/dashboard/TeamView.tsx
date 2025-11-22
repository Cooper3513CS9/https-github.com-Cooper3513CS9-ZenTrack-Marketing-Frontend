"use client";

import React, { useState } from 'react';
import { Users, UserPlus, MoreVertical, Shield, Mail, Phone, CheckCircle2, Clock, ArrowLeft } from 'lucide-react';
import { TeamMember } from '../../types';

interface Props {
    onBack?: () => void;
}

export const TeamView: React.FC<Props> = ({ onBack }) => {
  // Mock data based on documentation section 1.7
  const [members, setMembers] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'Ronald Beute',
      email: 'ronald@praktijk.nl',
      role: 'owner',
      status: 'active',
      lastActive: 'Nu online',
      avatar: 'RB'
    },
    {
      id: '2',
      name: 'Jord de Vries',
      email: 'jord@praktijk.nl',
      role: 'manager',
      status: 'active',
      lastActive: '5 min geleden',
      avatar: 'JV'
    },
    {
      id: '3',
      name: 'Anna de Jong',
      email: 'anna@praktijk.nl',
      role: 'assistant',
      status: 'offline',
      lastActive: '2 dagen geleden',
      avatar: 'AJ'
    }
  ]);

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'owner':
        return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-purple-100 text-purple-700 text-xs font-bold border border-purple-200"><Shield className="w-3 h-3" /> Eigenaar</span>;
      case 'manager':
        return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200"><Users className="w-3 h-3" /> Manager</span>;
      default:
        return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">Assistent</span>;
    }
  };

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center gap-3 mb-6">
         <button onClick={onBack} className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600">
            <ArrowLeft className="w-5 h-5" />
         </button>
         <h2 className="text-xl font-bold text-slate-900">Team</h2>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Team Beheer</h2>
          <p className="text-slate-500">Beheer toegang, rollen en nodig nieuwe collega's uit.</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2">
          <UserPlus className="w-4 h-4" /> Teamlid Uitnodigen
        </button>
      </div>

      {/* Members List */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Naam</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Rol</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center text-slate-600 font-bold text-sm">
                      {member.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{member.name}</p>
                      <p className="text-xs text-slate-500">{member.lastActive}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {getRoleBadge(member.role)}
                </td>
                <td className="px-6 py-4">
                  {member.status === 'active' ? (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-emerald-700">Actief</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-500">Offline</span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {member.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Role Info Box */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-3 text-purple-700 font-bold text-sm">
               <Shield className="w-4 h-4" /> Eigenaar
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
               Volledige toegang tot administratie, facturatie en team management. Kan andere gebruikers verwijderen.
            </p>
         </div>
         <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-sm">
               <Users className="w-4 h-4" /> Manager
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
               Kan bestellingen plaatsen, voorraad beheren en leveranciers aanpassen. Geen toegang tot facturatie instellingen.
            </p>
         </div>
         <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-3 text-slate-700 font-bold text-sm">
               <CheckCircle2 className="w-4 h-4" /> Assistent
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
               Kan voorraad scannen, pakbonnen verifiëren en WhatsApp gebruiken. Geen rechten om orders definitief te plaatsen.
            </p>
         </div>
      </div>
    </div>
  );
};
