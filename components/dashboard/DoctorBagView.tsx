"use client";

import React, { useState } from 'react';
import { Briefcase, Camera, Plus, AlertCircle, CheckCircle2, X, Upload, Loader2 } from 'lucide-react';

interface BagItem {
  id: string;
  name: string;
  required: number;
  current: number;
  status: 'ok' | 'low' | 'missing';
}

interface DoctorBag {
  id: string;
  doctor: string;
  lastChecked: string;
  items: BagItem[];
  photoUrl?: string;
}

export const DoctorBagView: React.FC = () => {
  const [bags, setBags] = useState<DoctorBag[]>([
    {
      id: '1',
      doctor: 'Dr. Jansen',
      lastChecked: 'Vandaag 09:30',
      photoUrl: 'https://images.unsplash.com/photo-1576091160550-112173faf525?w=500',
      items: [
        { id: '1', name: 'Stethoscoop', required: 1, current: 1, status: 'ok' },
        { id: '2', name: 'Bloeddrukmeter', required: 1, current: 1, status: 'ok' },
        { id: '3', name: 'Hechtsetjes', required: 3, current: 1, status: 'low' },
        { id: '4', name: 'Adrenaline pen', required: 2, current: 0, status: 'missing' },
        { id: '5', name: 'Verband 5x5cm', required: 5, current: 3, status: 'low' },
      ]
    },
    {
      id: '2',
      doctor: 'Dr. Peeters',
      lastChecked: 'Gisteren 16:45',
      items: [
        { id: '1', name: 'Stethoscoop', required: 1, current: 1, status: 'ok' },
        { id: '2', name: 'Bloeddrukmeter', required: 1, current: 1, status: 'ok' },
        { id: '3', name: 'Hechtsetjes', required: 3, current: 3, status: 'ok' },
        { id: '4', name: 'Adrenaline pen', required: 2, current: 2, status: 'ok' },
        { id: '5', name: 'Verband 5x5cm', required: 5, current: 4, status: 'low' },
      ]
    }
  ]);

  const [selectedBag, setSelectedBag] = useState<string | null>(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ok': return 'text-emerald-600 bg-emerald-50';
      case 'low': return 'text-orange-600 bg-orange-50';
      case 'missing': return 'text-red-600 bg-red-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ok': return <CheckCircle2 className="w-4 h-4" />;
      case 'low': return <AlertCircle className="w-4 h-4" />;
      case 'missing': return <X className="w-4 h-4" />;
      default: return null;
    }
  };

  const handlePhotoUpload = (bagId: string) => {
    setUploadingPhoto(true);
    // Simulate photo upload and AI analysis
    setTimeout(() => {
      setUploadingPhoto(false);
      alert('Tas analyse voltooid! Items bijgewerkt.');
    }, 2000);
  };

  const addToOrderList = (bagId: string) => {
    const bag = bags.find(b => b.id === bagId);
    if (!bag) return;

    const missingItems = bag.items.filter(item => item.current < item.required);
    if (missingItems.length === 0) {
      alert('Alle items zijn compleet!');
      return;
    }

    const orderText = missingItems
      .map(item => `${item.name} (${item.required - item.current}x)`)
      .join(', ');

    alert(`Toegevoegd aan bestellijst:\n${orderText}`);
  };

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
          <Briefcase className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Dokterstas & Koffers</h1>
          <p className="text-slate-500">Scan een foto voor completeness check</p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-200 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Nieuwe Tas Checken?</h2>
            <p className="text-slate-600">Upload een foto van de open dokterstas. ZenTrack analyseert automatisch de inhoud en zet ontbrekende items op de bestellijst.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors whitespace-nowrap">
            <Camera className="w-5 h-5" />
            Foto Uploaden
          </button>
        </div>
      </div>

      {/* Bags Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {bags.map(bag => (
          <div key={bag.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            {/* Bag Photo */}
            {bag.photoUrl && (
              <div className="relative h-48 md:h-56 bg-slate-100 overflow-hidden">
                <img src={bag.photoUrl} alt={bag.doctor} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-white rounded-lg px-3 py-1 text-xs font-bold text-slate-600 shadow-md">
                  {bag.lastChecked}
                </div>
              </div>
            )}

            {/* Bag Info */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">{bag.doctor}</h3>

              {/* Items List */}
              <div className="space-y-3 mb-6">
                {bag.items.map(item => {
                  const percentage = (item.current / item.required) * 100;
                  return (
                    <div key={item.id}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(item.status)}
                          <span className="text-sm font-medium text-slate-700">{item.name}</span>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${getStatusColor(item.status)}`}>
                          {item.current}/{item.required}
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`h-full transition-all ${
                            item.status === 'ok' ? 'bg-emerald-500' :
                            item.status === 'low' ? 'bg-orange-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status Summary */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">
                      {bag.items.filter(i => i.status === 'ok').length}
                    </p>
                    <p className="text-xs text-slate-500">OK</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-600">
                      {bag.items.filter(i => i.status === 'low').length}
                    </p>
                    <p className="text-xs text-slate-500">Laag</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-600">
                      {bag.items.filter(i => i.status === 'missing').length}
                    </p>
                    <p className="text-xs text-slate-500">Mist</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handlePhotoUpload(bag.id)}
                  disabled={uploadingPhoto}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-100 text-blue-700 rounded-lg font-bold hover:bg-blue-200 transition-colors disabled:opacity-50"
                >
                  {uploadingPhoto ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Analyseren...
                    </>
                  ) : (
                    <>
                      <Camera className="w-4 h-4" />
                      Heranalyse
                    </>
                  )}
                </button>
                <button
                  onClick={() => addToOrderList(bag.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Op Bestellijst
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
