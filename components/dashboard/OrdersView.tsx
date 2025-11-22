"use client";

import React, { useState } from 'react';
import { Truck, Clock, ChevronRight, FileText, AlertCircle, CheckCircle2, Mail, ArrowLeft } from 'lucide-react';

interface Props {
    onBack?: () => void;
}

export const OrdersView: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'deliveries'>('orders');

  const orders = [
    { id: '#HS-2025-1236', supplier: 'Henry Schein', date: 'Vandaag, 09:30', status: 'pending', items: 12, total: '€423,50' },
    { id: '#HS-2025-1235', supplier: 'Medline', date: 'Gisteren, 14:15', status: 'shipped', items: 5, total: '€120,00' },
  ];

  const deliveries = [
    { 
      id: 'PB-12346', 
      orderId: '#HS-1235', 
      supplier: 'Henry Schein', 
      date: '18-11-2025', 
      status: 'incomplete', // Mismatch detected
      items: '8/10 geleverd',
      issue: '2 dozen handschoenen missen'
    },
    { 
      id: 'PB-12345', 
      orderId: '#HS-1234', 
      supplier: 'Prolepha', 
      date: '19-11-2025', 
      status: 'complete', 
      items: '12/12 geleverd',
      issue: null
    },
  ];

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center gap-3 mb-6">
         <button onClick={onBack} className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600">
            <ArrowLeft className="w-5 h-5" />
         </button>
         <h2 className="text-xl font-bold text-slate-900">Bestellingen</h2>
      </div>

      <div className="hidden lg:block mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Inkoop & Logistiek</h2>
        <p className="text-slate-500">Beheer bestellingen en verifieer inkomende leveringen.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200 mb-6">
         <button 
            onClick={() => setActiveTab('orders')}
            className={`pb-3 px-2 text-sm font-bold transition-colors relative ${activeTab === 'orders' ? 'text-emerald-600' : 'text-slate-500 hover:text-slate-700'}`}
         >
            Bestellingen
            {activeTab === 'orders' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"></div>}
         </button>
         <button 
            onClick={() => setActiveTab('deliveries')}
            className={`pb-3 px-2 text-sm font-bold transition-colors relative ${activeTab === 'deliveries' ? 'text-emerald-600' : 'text-slate-500 hover:text-slate-700'}`}
         >
            Leveringen (Pakbon)
            {activeTab === 'deliveries' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"></div>}
         </button>
      </div>

      <div className="space-y-4">
        {activeTab === 'orders' ? (
            // ORDERS LIST
            orders.map((order) => (
            <div key={order.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 p-4 bg-slate-50 rounded-xl">
                {order.status === 'pending' && <Clock className="w-6 h-6 text-orange-500" />}
                {order.status === 'shipped' && <Truck className="w-6 h-6 text-blue-500" />}
                </div>
                
                <div className="flex-1 w-full">
                <div className="flex justify-between mb-1">
                    <h3 className="font-bold text-slate-900">{order.supplier}</h3>
                    <span className="font-mono text-slate-500 text-sm">{order.id}</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">{order.date}</p>
                
                <div className="flex items-center gap-4 text-sm">
                    <span className="bg-slate-100 px-2 py-1 rounded text-slate-600 font-medium">{order.items} items</span>
                    <span className="font-bold text-slate-900">{order.total}</span>
                </div>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 rounded-xl text-slate-600 text-sm font-medium hover:bg-slate-50 flex items-center justify-center gap-2">
                        <FileText className="w-4 h-4" /> Factuur
                    </button>
                    <button className="flex-1 md:flex-none px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 flex items-center justify-center gap-2">
                        Details <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
            ))
        ) : (
            // DELIVERIES LIST (Pakbon Verification)
            deliveries.map((del) => (
                <div key={del.id} className={`bg-white border rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 transition-shadow ${del.status === 'incomplete' ? 'border-red-200 shadow-sm' : 'border-slate-200'}`}>
                    <div className={`flex-shrink-0 p-4 rounded-xl ${del.status === 'incomplete' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
                        {del.status === 'incomplete' ? <AlertCircle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                    </div>
                    
                    <div className="flex-1 w-full">
                        <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-bold text-slate-900">Pakbon {del.id}</h3>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${del.status === 'incomplete' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                {del.status === 'incomplete' ? 'Afwijking' : 'Compleet'}
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 mb-2">Bij order {del.orderId} • {del.supplier} • {del.date}</p>
                        
                        {del.issue && (
                            <div className="bg-red-50 p-2 rounded-lg border border-red-100 text-sm text-red-700 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" /> 
                                <span><strong>Mismatch:</strong> {del.issue}</span>
                            </div>
                        )}
                        {!del.issue && <p className="text-sm text-emerald-600 font-medium">✓ {del.items}</p>}
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                        {del.status === 'incomplete' ? (
                            <button className="flex-1 md:flex-none px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 flex items-center justify-center gap-2 shadow-md shadow-red-200">
                                <Mail className="w-4 h-4" /> Claim Starten
                            </button>
                        ) : (
                            <button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 rounded-xl text-slate-400 text-sm font-medium cursor-default">
                                Afgerond
                            </button>
                        )}
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
};
