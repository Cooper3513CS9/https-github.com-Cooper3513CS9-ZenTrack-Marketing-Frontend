
import React, { useEffect, useState } from 'react';
import { Search, Filter, AlertTriangle, CheckCircle, MoreVertical, Loader2, RefreshCw } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { InventoryItem } from '../../types';

export const InventoryView: React.FC = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from Supabase
  const fetchInventory = async () => {
    setLoading(true);
    try {
      // In a real app, replace this with actual supabase connection
      // const { data, error } = await supabase.from('inventory_items').select('*').order('name');
      
      // MOCK FALLBACK for Demo purposes if Supabase is not connected yet
      // REMOVE THIS TIMEOUT and uncomment lines above when keys are set
      await new Promise(resolve => setTimeout(resolve, 800)); 
      const mockData: InventoryItem[] = [
        { id: '1', name: 'Medische handschoenen M', stock: 142, unit: 'dozen', status: 'ok', location: 'Kast A' },
        { id: '2', name: 'Injectiespuiten 5ml', stock: 8, unit: 'dozen', status: 'low', location: 'Kast B' },
        { id: '3', name: 'Desinfectie Alcohol 70%', stock: 12, unit: 'flessen', status: 'ok', location: 'Kast A' },
        { id: '4', name: 'Onderzoekstafel papier', stock: 4, unit: 'rollen', status: 'critical', location: 'Kast C' },
        { id: '5', name: 'Hechtmateriaal 3-0', stock: 25, unit: 'stuks', status: 'ok', location: 'Lade 4' },
      ];
      
      setItems(mockData);
      setError(null);
    } catch (err) {
      console.error('Error fetching inventory:', err);
      setError('Kon voorraad niet laden. Controleer je internetverbinding.');
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

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Digitale Voorraadkast</h2>
          <p className="text-slate-500">Real-time data uit je Supabase database.</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm">
          + Artikel Toevoegen
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Zoek op naam, categorie of locatie..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 text-sm font-medium">
                <Filter className="w-4 h-4" /> Filters
            </button>
            <button 
                onClick={fetchInventory}
                className="p-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-emerald-600"
                title="Ververs Data"
            >
                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Data Content */}
        <div className="overflow-x-auto min-h-[300px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                <Loader2 className="w-8 h-8 animate-spin mb-2 text-emerald-500" />
                <p>Voorraad laden uit database...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-64 text-red-400">
                <AlertTriangle className="w-8 h-8 mb-2" />
                <p>{error}</p>
                <button onClick={fetchInventory} className="mt-4 text-emerald-600 font-bold hover:underline">Opnieuw proberen</button>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                <Search className="w-8 h-8 mb-2 opacity-50" />
                <p>Geen artikelen gevonden.</p>
            </div>
          ) : (
            <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
                <tr>
                    <th className="px-6 py-4">Productnaam</th>
                    <th className="px-6 py-4">Locatie</th>
                    <th className="px-6 py-4">Huidige Voorraad</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actie</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                {filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                    <td className="px-6 py-4 text-slate-500">{item.location}</td>
                    <td className="px-6 py-4 text-slate-900 font-bold">
                        {item.stock} <span className="font-normal text-slate-400 text-xs">{item.unit}</span>
                    </td>
                    <td className="px-6 py-4">
                        {item.status === 'ok' && <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold"><CheckCircle className="w-3 h-3" /> Voldoende</span>}
                        {item.status === 'low' && <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold"><AlertTriangle className="w-3 h-3" /> Laag</span>}
                        {item.status === 'critical' && <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold"><AlertTriangle className="w-3 h-3" /> Kritiek</span>}
                    </td>
                    <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="w-5 h-5" />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
