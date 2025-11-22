"use client";
import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onLoginClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Waarom', href: '#waarom' },
    { name: 'Hoe het werkt', href: '#hoe-het-werkt' },
    { name: 'Prijzen', href: '#prijzen' },
    { name: 'Over Ons', href: '#over-ons' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMobileNav = () => {
      setIsMenuOpen(false);
  };

  const handleLogin = () => {
      setIsMenuOpen(false);
      onLoginClick();
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
            <Logo className="w-9 h-9" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">ZenTrack</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={onLoginClick} className="text-sm font-medium text-slate-600 hover:text-emerald-600">Inloggen</button>
            <button
              onClick={onLoginClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              Gratis proberen <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleMobileNav}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 rounded-lg"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-3">
                <button onClick={handleLogin} className="text-center py-2 text-slate-600 font-medium">Inloggen</button>
                <button onClick={handleLogin} className="bg-emerald-600 text-white py-3 rounded-xl text-center font-semibold">
                    Gratis proberen
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};