"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, ChevronDown, ScanLine, PackageCheck, Boxes, TrendingDown, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick?: () => void;
}

const featureDropdownItems = [
  { name: 'Factuur Scanner', href: '/factuur-scanner', icon: ScanLine, description: 'AI-gestuurde factuurverwerking' },
  { name: 'Pakbon Verificatie', href: '/pakbon-verificatie', icon: PackageCheck, description: 'Leveringen direct controleren' },
  { name: 'Voorraad Beheer', href: '/voorraad-beheer', icon: Boxes, description: 'Real-time per locatie' },
  { name: 'Slim Bestellen', href: '/slim-bestellen', icon: TrendingDown, description: 'Inkoopinzicht uit het netwerk' },
  { name: 'NPA Accreditatie', href: '/npa-accreditatie', icon: ShieldCheck, description: 'Uw NPA-dossier op orde' },
];

export const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const navItems = [
    { name: 'Waarom', href: '/#waarom' },
    { name: 'Hoe het werkt', href: '/#hoe-het-werkt' },
    // Features dropdown wordt apart gerenderd (na "Hoe het werkt")
    { name: 'Prijzen', href: '/#prijzen' },
    { name: 'Expiratie Radar', href: '/expiratie-radar', badge: 'Gratis' },
    { name: 'Over Ons', href: '/#over-ons' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleMobileNav = () => {
      setIsMenuOpen(false);
      setIsFeaturesOpen(false);
  };

  const handleLogin = () => {
      setIsMenuOpen(false);
      setIsFeaturesOpen(false);
      onLoginClick();
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-9 h-9" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">ZenTrack</span>
          </Link>

          {/* Desktop Nav — volgorde: Waarom → Hoe het werkt → Features ▾ → Prijzen → Expiratie Radar [Gratis] → Over Ons → Contact */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Waarom + Hoe het werkt (eerste 2 items, vóór Features dropdown) */}
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Features Dropdown */}
            <div className="relative group">
              <a
                href="/#features"
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-1"
              >
                Features
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </a>

              {/* Dropdown Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 w-[280px]">
                  {featureDropdownItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-600 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{item.name}</p>
                          <p className="text-xs text-slate-400">{item.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                  {/* Bekijk alles link */}
                  <div className="mt-1 pt-1 border-t border-slate-100">
                    <a
                      href="/#features"
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-emerald-600 hover:bg-emerald-50 transition-colors"
                    >
                      Bekijk alle features
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Prijzen + Expiratie Radar [Gratis] + Over Ons + Contact (items na Features dropdown) */}
            {navItems.slice(2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-1.5"
              >
                {item.name}
                {item.badge && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={onLoginClick} className="text-sm font-medium text-slate-600 hover:text-emerald-600">Inloggen</button>
            <button
              onClick={onRegisterClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              Gratis proberen <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => { setIsMenuOpen(!isMenuOpen); setIsFeaturesOpen(false); }}
              className="p-2 text-slate-600 hover:text-emerald-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {/* Waarom + Hoe het werkt (eerste 2 items) */}
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleMobileNav}
                className="flex items-center gap-2 px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 rounded-lg"
              >
                {item.name}
              </a>
            ))}

            {/* Features Accordion */}
            <div>
              <button
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 rounded-lg"
              >
                <span>Features</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isFeaturesOpen && (
                <div className="ml-4 pl-3 border-l-2 border-slate-100 space-y-0.5">
                  {featureDropdownItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleMobileNav}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-500 hover:text-emerald-600 hover:bg-slate-50 rounded-lg"
                      >
                        <Icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Prijzen + Expiratie Radar [Gratis] + Over Ons + Contact */}
            {navItems.slice(2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleMobileNav}
                className="flex items-center gap-2 px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 rounded-lg"
              >
                {item.name}
                {item.badge && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-200 ml-1">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}

            {/* Login / Register buttons */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-3">
                <button onClick={handleLogin} className="text-center py-2 text-slate-600 font-medium">Inloggen</button>
                <button onClick={() => { setIsMenuOpen(false); setIsFeaturesOpen(false); onRegisterClick?.(); }} className="bg-emerald-600 text-white py-3 rounded-xl text-center font-semibold">
                    Gratis proberen
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
