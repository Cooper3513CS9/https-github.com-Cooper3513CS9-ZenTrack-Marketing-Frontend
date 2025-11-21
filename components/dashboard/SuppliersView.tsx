
import React from 'react';
import { Truck, Mail, Phone, Plus, MoreVertical, Clock, Euro, Search, Edit2, ArrowLeft } from 'lucide-react';
import { Supplier } from '../../types';

interface Props {
    onBack?: () => void;
}

export const SuppliersView: React.FC<Props> = ({ onBack }) => {
  // Mock Data based on documentation
  const suppliers: Supplier[] = [
    {
      id: '1',
      name: 'Henry Schein Medical',
      email: 'bestellingen@henryschein.nl',
      phone: '036-5358901',
      lead_time_days: 2,
      min_order_value: 50,
      delivery_costs: 7.50,
      status: 'active'
    },
    {
      id: '2',
      name: 'Medline Netherlands',
      email: 'orders-nl@medline.com',
      phone: '026-3123456',
      lead_time_days: 3,
      min_order_value: 150,
      delivery_costs: 0,
      status: 'active'
    },
    {
      id: '3',
      name: 'Prolepha Medisch',
      email: 'verkoop@prolepha.nl',
      phone: '076-1234567',
      lead_time_days: 1,
      min_order_value: 0,
      delivery_costs: 12.50,
      status: 'active'
    },
    {
      id: '4',
      name: 'Holland Pharma',
      email: 'info@hollandpharma.nl',
      phone: '0548-123456',
      lead_time_days: 1,
      min_order_value: 25,
      delivery_costs: 4.95,
      status: 'inactive'
    }
  ];

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center gap-3 mb-6">
         <button onClick={onBack} className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600">
            <ArrowLeft className="w-5 h-5" />
         </button>
         <h2 className="text-xl font-bold text-slate-900">Leveranciers</h2>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Leveranciers</h2>
          <p className="text-slate-500">Beheer uw leveranciers, condities en contactgegevens.</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" /> Nieuwe Leverancier
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 bg-white p-2 rounded-2xl border border-slate-200 flex items-center gap-3 max-w-md shadow-sm">
         <Search className="w-5 h-5 text-slate-400 ml-2" />
         <input 
            type="text" 
            placeholder="Zoek op naam, email of telefoon..." 
            className="flex-1 bg-transparent outline-none text-sm py-2"
         />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow relative group">
             {/* Header */}
             <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                      <Truck className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-900">{supplier.name}</h3>
                      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide ${
                          supplier.status === 'active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
                      }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${supplier.status === 'active' ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                          {supplier.status === 'active' ? 'Actief' : 'Inactief'}
                      </div>
                   </div>
                </div>
                <button className="text-slate-400 hover:text-slate-600 p-1 rounded hover:bg-slate-50">
                   <MoreVertical className="w-5 h-5" />
                </button>
             </div>

             {/* Contact Info */}
             <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-center gap-3 text-slate-600">
                   <Mail className="w-4 h-4 text-slate-400" />
                   <a href={`mailto:${supplier.email}`} className="hover:text-emerald-600 transition-colors">{supplier.email}</a>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                   <Phone className="w-4 h-4 text-slate-400" />
                   <a href={`tel:${supplier.phone}`} className="hover:text-emerald-600 transition-colors">{supplier.phone}</a>
                </div>
             </div>

             {/* Conditions Grid */}
             <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-2 rounded-lg">
                   <p className="text-[10px] text-slate-400 font-bold uppercase mb-1 flex items-center gap-1"><Clock className="w-3 h-3" /> Levertijd</p>
                   <p className="text-sm font-semibold text-slate-700">{supplier.lead_time_days} werkdagen</p>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg">
                   <p className="text-[10px] text-slate-400 font-bold uppercase mb-1 flex items-center gap-1"><Euro className="w-3 h-3" /> Min. Order</p>
                   <p className="text-sm font-semibold text-slate-700">€{supplier.min_order_value},-</p>
                </div>
             </div>

             {/* Edit Action Overlay (Hover) */}
             <div className="absolute top-4 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-500 hover:text-emerald-600 hover:border-emerald-200">
                   <Edit2 className="w-4 h-4" />
                </button>
             </div>
          </div>
        ))}
        
        {/* Add New Card */}
        <button className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all group h-full min-h-[200px]">
           <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-emerald-100 flex items-center justify-center mb-3 transition-colors">
              <Plus className="w-6 h-6" />
           </div>
           <span className="font-bold">Leverancier Toevoegen</span>
        </button>
      </div>
    </div>
  );
};
