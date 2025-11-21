
import React from 'react';
import { Package, Truck, Clock, ChevronRight, FileText } from 'lucide-react';

export const OrdersView: React.FC = () => {
  const orders = [
    { id: '#ORD-2025-001', supplier: 'Henry Schein', date: 'Vandaag, 09:30', status: 'pending', items: 12, total: '€423,50' },
    { id: '#ORD-2024-892', supplier: 'Medline', date: 'Gisteren, 14:15', status: 'shipped', items: 5, total: '€120,00' },
    { id: '#ORD-2024-880', supplier: 'Holland Pharma', date: '18 Nov, 11:00', status: 'delivered', items: 24, total: '€1.250,20' },
  ];

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Besteloverzicht</h2>
          <p className="text-slate-500">Status van lopende en afgeronde leveringen.</p>
        </div>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 p-4 bg-slate-50 rounded-xl">
               {order.status === 'pending' && <Clock className="w-6 h-6 text-orange-500" />}
               {order.status === 'shipped' && <Truck className="w-6 h-6 text-blue-500" />}
               {order.status === 'delivered' && <Package className="w-6 h-6 text-emerald-500" />}
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
        ))}
      </div>
    </div>
  );
};
