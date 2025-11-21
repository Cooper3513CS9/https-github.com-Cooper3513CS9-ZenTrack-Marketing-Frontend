
import React, { useEffect, useState } from 'react';
import { Search, Filter, AlertTriangle, CheckCircle2, MoreVertical, Loader2, RefreshCw, Package, MapPin, Plus, ArrowLeft } from 'lucide-react';
import { InventoryItem } from '../../types';
import { supabase } from '../../lib/supabase';

interface Props {
    onBack?: () => void;
}

export const InventoryView: React.FC<Props> = ({ onBack }) => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'demo'>('demo');

  const fetchInventory = async () => {
    setLoading(true);
    try {
      const isConfigured = !supabase.supabaseUrl.includes('your-project');
      
      if (isConfigured) {
          const { data, error } = await supabase
            .from('inventory_items')
            .select('*')
            .order('status', { ascending: true });

          if (error) throw error;
          
          if (data && data.length > 0) {
              setItems(data as InventoryItem[]);
              setConnectionStatus('connected');
              setLoading(false);
              return;
          }
      }

      await new Promise(resolve => setTimeout(resolve, 600));
      
      const mockData: InventoryItem[] = [
        { id: '1', name: 'Handschoenen Latex M', stock: 250, unit: 'stuks', status: 'ok', location: 'Kast A', expiry_date: '2026-05-01' },
        { id: '2', name: 'Paracetamol 500mg', stock: 8, unit: 'dozen', status: 'low', location: 'Spreekkamer 1', expiry_date: '2025-12-01' },
        { id: '3', name: 'Gaasjes 5x5cm', stock: 0, unit: 'stuks', status: 'critical', location: 'Behandelruimte', expiry_date: '2026-01-01' },
        { id: '4', name: 'Alcohol 70% Spray', stock: 12, unit: 'flessen', status: 'ok', location: 'Kast B', expiry_date: '2027-03-15' },
        { id: '5', name: 'Hechtmateriaal 3-0', stock: 45, unit: 'stuks', status: 'ok', location: 'Lade 4', expiry_date: '2026-08-01' },
        { id: '6', name: 'Naaldcontainers', stock: 2, unit: 'stuks', status: 'low', location: 'Spoelkeuken' },
        { id: '7', name: 'Onderzoekspapier', stock: 15, unit: 'rollen', status: 'ok', location: 'Magazijn' },
        { id: '8', name: 'Insuline Naalden', stock: 500, unit: 'stuks', status: 'ok', location: 'Kast A' },
      ];
      
      setItems(mockData);
      setConnectionStatus('demo');

    } catch (err) {
      console.error("Supabase fetch error:", err);
      setConnectionStatus('demo');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const StatusBadge = ({ status }: { status: string }) => {
    switch (status) {
      case 'critical':
        return <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> UIT (0)</span>;
      case 'low':
        return <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> LAAG</span>;
      default:
        return <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> OK</span>;
    }
  };

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center gap-3 mb-6">
         <button onClick={onBack} className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600">
            <ArrowLeft className="w-5 h-5" />
         </button>
         <h2 className="text-xl font-bold text-slate-900">Voorraad</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 hidden lg:flex">
              Digitale Voorraadkast
              {connectionStatus === 'connected' && <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-200">Live Data</span>}
          </h2>
          <p className="text-slate-500 hidden lg:block">Real-time inzicht per locatie.</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2 w-full md:w-auto justify-center">
          <Plus className="w-4 h-4" /> Artikel Toevoegen
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm mb-6 flex flex-col md:flex-row gap-4">
         <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Zoek op product of locatie..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
         </div>
         <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 text-sm font-medium">
                <Filter className="w-4 h-4" /> Status
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 text-sm font-medium">
                <MapPin className="w-4 h-4" /> Locatie
            </button>
            <button onClick={fetchInventory} className="p-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50" title="Verversen">
                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
         </div>
      </div>

      {/* Content Grid */}
      {loading ? (
         <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
         </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
           {filteredItems.map(item => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all group relative cursor-pointer">
                 <div className="flex justify-between items-start mb-3">
                    <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                       <Package className="w-6 h-6" />
                    </div>
                    <StatusBadge status={item.status} />
                 </div>
                 
                 <h3 className="font-bold text-slate-900 mb-1 truncate" title={item.name}>{item.name}</h3>
                 <p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
                    <MapPin className="w-3 h-3" /> {item.location}
                 </p>

                 <div className="flex items-end justify-between pt-4 border-t border-slate-50">
                    <div>
                       <p className="text-[10px] text-slate-400 uppercase font-bold">Voorraad</p>
                       <p className="text-xl font-bold text-slate-900">
                          {item.stock} <span className="text-sm font-medium text-slate-400">{item.unit}</span>
                       </p>
                    </div>
                    <div className="text-right">
                       {item.status === 'low' || item.status === 'critical' ? (
                          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg hover:bg-emerald-100">Bestellen</span>
                       ) : (
                          <button className="text-slate-300 hover:text-slate-600">
                             <MoreVertical className="w-5 h-5" />
                          </button>
                       )}
                    </div>
                 </div>
              </div>
           ))}
        </div>
      )}
    </div>
  );
};
