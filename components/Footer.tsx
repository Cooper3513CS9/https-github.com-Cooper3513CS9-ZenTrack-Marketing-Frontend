"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onLoginClick: () => void;
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLoginClick, onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Kolom 1: ZenTrack info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <Logo className="w-8 h-8" variant="white" />
              <span className="text-lg font-bold tracking-tight">ZenTrack</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Intelligent voorraadbeheer voor Nederlandse praktijken. Rust en zekerheid voor uw medische verbruiksartikelen.
            </p>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
                  <span>Stationsplein 1<br/>3511 ED Utrecht</span>
              </p>
              <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" /> 06-2388-5227
              </p>
              <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" /> info@zentrack.nl
              </p>
            </div>
          </div>

          {/* Kolom 2: Product (bestaande anchor links — BEHOUDEN) */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#waarom" className="hover:text-emerald-400 transition-colors">Waarom ZenTrack</a></li>
              <li><a href="/#hoe-het-werkt" className="hover:text-emerald-400 transition-colors">Hoe het werkt</a></li>
              <li>
                <Link href="/expiratie-radar" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  Expiratie Radar
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-600 text-white">
                    Gratis
                  </span>
                </Link>
              </li>
              <li><a href="/#prijzen" className="hover:text-emerald-400 transition-colors">Prijzen</a></li>
            </ul>
          </div>

          {/* Kolom 3: Features (NIEUW — landing page links) */}
          <div>
            <h4 className="text-white font-semibold mb-6">Features</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/factuur-scanner" className="hover:text-emerald-400 transition-colors">Factuur Scanner</Link></li>
              <li><Link href="/pakbon-verificatie" className="hover:text-emerald-400 transition-colors">Pakbon Verificatie</Link></li>
              <li><Link href="/voorraad-beheer" className="hover:text-emerald-400 transition-colors">Voorraad Beheer</Link></li>
              <li><Link href="/slim-bestellen" className="hover:text-emerald-400 transition-colors">Slim Bestellen</Link></li>
              <li><Link href="/npa-accreditatie" className="hover:text-emerald-400 transition-colors">NPA Accreditatie</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Bedrijf & Legal (BEHOUDEN) */}
          <div>
            <h4 className="text-white font-semibold mb-6">Bedrijf & Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#over-ons" className="hover:text-emerald-400 transition-colors">Over Ons</a></li>
              <li>
                  <button onClick={() => onNavigate('legal-terms')} className="hover:text-emerald-400 transition-colors text-left">
                      Algemene Voorwaarden
                  </button>
              </li>
              <li>
                  <button onClick={() => onNavigate('legal-privacy')} className="hover:text-emerald-400 transition-colors text-left">
                      Privacyverklaring
                  </button>
              </li>
              <li className="pt-2 text-slate-500 text-xs">
                  KvK: i.o.<br/>
                  BTW: i.o.
              </li>
            </ul>
          </div>

          {/* Kolom 5: CTA block (BEHOUDEN) */}
          <div id="beta" className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
             <h4 className="text-white font-bold mb-2">Probeer ZenTrack</h4>
             <p className="text-xs text-slate-400 mb-4">14 dagen gratis proberen. Geen creditcard nodig.</p>
             <ul className="text-xs space-y-2 mb-6 text-slate-300">
                <li>• 30 min onboarding call</li>
                <li>• Upload eerste facturen</li>
                <li>• Direct resultaat</li>
             </ul>
             <button onClick={onLoginClick} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
               Gratis Proberen →
             </button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 ZenTrack. Alle rechten voorbehouden.</p>
          <p>Data op Nederlandse servers (ISO 27001) • AVG/GDPR Compliant</p>
        </div>
      </div>
    </footer>
  );
};
