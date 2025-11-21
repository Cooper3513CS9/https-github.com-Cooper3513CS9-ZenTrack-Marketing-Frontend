
import React from 'react';
import { FileText, CheckCircle2, Clock, AlertCircle, Download, Search, Filter, ArrowUpRight, Sparkles, ArrowLeft } from 'lucide-react';

interface Props {
    onBack?: () => void;
}

export const InvoicesView: React.FC<Props> = ({ onBack }) => {
  // Mock data simulating the OCR pipeline described in docs
  const invoices = [
    { id: 'INV-2025-001', supplier: 'Henry Schein', date: '19-11-2025', amount: '€687,41', status: 'paid', confidence: 100, items: 12 },
    { id: 'INV-2025-002', supplier: 'Med Partners', date: '18-11-2025', amount: '€423,38', status: 'processing', confidence: 85, items: 5 },
    { id: 'INV-2025-003', supplier: 'Prolepha', date: '15-11-2025', amount: '€568,11', status: 'verified', confidence: 98, items: 8 },
    { id: 'INV-2025-004', supplier: 'Medline', date: '12-11-2025', amount: '€1.205,00', status: 'attention', confidence: 65, items: 24 },
  ];

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center gap-3 mb-6">
         <button onClick={onBack} className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600">
            <ArrowLeft className="w-5 h-5" />
         </button>
         <h2 className="text-xl font-bold text-slate-900">Facturen</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Factuur Verwerking</h2>
          <p className="text-slate-500">Real-time status van OCR analyse en product matching.</p>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 flex items-center gap-2">
          <ArrowUpRight className="w-4 h-4" /> Upload Factuur
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
         <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Verwerkt deze maand</p>
            <p className="text-3xl font-bold text-slate-900">€7.802,45</p>
            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md">
               <CheckCircle2 className="w-3 h-3" /> 52 facturen succesvol
            </div>
         </div>
         <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">AI Nauwkeurigheid</p>
            <p className="text-3xl font-bold text-slate-900">95.9%</p>
            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 w-fit px-2 py-1 rounded-md">
               <Sparkles className="w-3 h-3" /> Mistral Vision Embeddings
            </div>
         </div>
         <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Te Controleren</p>
            <p className="text-3xl font-bold text-slate-900">1</p>
            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-50 w-fit px-2 py-1 rounded-md">
               <AlertCircle className="w-3 h-3" /> Actie vereist
            </div>
         </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex gap-4">
           <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Zoek op leverancier of factuurnummer..." className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
           </div>
           <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600">
              <Filter className="w-4 h-4" />
           </button>
        </div>

        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
            <tr>
              <th className="px-6 py-4">Factuur #</th>
              <th className="px-6 py-4">Leverancier</th>
              <th className="px-6 py-4">Datum</th>
              <th className="px-6 py-4">Bedrag</th>
              <th className="px-6 py-4">AI Confidence</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 font-medium text-slate-900">{inv.id}</td>
                <td className="px-6 py-4 text-slate-600">{inv.supplier}</td>
                <td className="px-6 py-4 text-slate-500">{inv.date}</td>
                <td className="px-6 py-4 font-bold text-slate-900">{inv.amount}</td>
                <td className="px-6 py-4">
                    {/* Confidence Bar */}
                    <div className="w-24">
                        <div className="flex justify-between text-[10px] mb-1">
                            <span className="text-slate-500">Match</span>
                            <span className={`font-bold ${inv.confidence > 90 ? 'text-emerald-600' : inv.confidence > 70 ? 'text-orange-500' : 'text-red-500'}`}>{inv.confidence}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                                className={`h-full rounded-full ${inv.confidence > 90 ? 'bg-emerald-500' : inv.confidence > 70 ? 'bg-orange-400' : 'bg-red-400'}`} 
                                style={{ width: `${inv.confidence}%` }}
                            ></div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                  {inv.status === 'paid' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Betaald
                    </span>
                  )}
                  {inv.status === 'verified' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Goedgekeurd
                    </span>
                  )}
                  {inv.status === 'processing' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                      <Clock className="w-3.5 h-3.5 animate-pulse" /> Verwerken...
                    </span>
                  )}
                  {inv.status === 'attention' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
                      <AlertCircle className="w-3.5 h-3.5" /> Check Nodig
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                   <button className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                      <Download className="w-4 h-4" />
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
