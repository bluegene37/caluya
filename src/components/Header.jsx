// Gene - Oct 06, 2026: Official government header with municipal branding, navigation, and proposal trigger

import React, { useState } from 'react';
import { Menu, X, FileText, PhoneCall, Compass, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import { LGU_INFO } from '../data/caluyaData';

export function Header({ onOpenProposal, activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'islands', label: '18 Island Barangays' },
    { id: 'services', label: 'Citizen e-Services' },
    { id: 'tourism', label: 'Tatusan & Tourism' },
    { id: 'transparency', label: 'Full Disclosure Seal' },
    { id: 'leadership', label: 'LGU Leadership' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Municipal Seal Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            {/* Stylized Official Seal Icon */}
            <div className="relative flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-700 via-sky-600 to-amber-500 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-white relative overflow-hidden border border-amber-300/40">
                <span className="text-[9px] font-bold tracking-widest text-amber-300 uppercase">CALUYA</span>
                <span className="text-base font-extrabold leading-none text-cyan-300">🦀</span>
                <span className="text-[7px] text-sky-200 tracking-wider">ANTIQUE</span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 text-[9px] font-black px-1 rounded-full border border-white">
                5711
              </div>
            </div>

            {/* Title Text */}
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs font-bold text-sky-800 tracking-wider uppercase">
                Republic of the Philippines • Province of Antique
              </span>
              <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Municipality of Caluya
              </h1>
              <span className="text-[11px] text-slate-500 hidden sm:inline-block font-medium">
                Official Gateway & E-Governance Platform
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  activeSection === item.id
                    ? 'text-sky-700 bg-sky-50 shadow-xs'
                    : 'text-slate-600 hover:text-sky-700 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Modernization Proposal Button (Primary Call-to-Action) */}
            <button
              onClick={onOpenProposal}
              className="group relative inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>LGU Proposal</span>
              <span className="hidden md:inline-block bg-white/20 text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold">
                Review Plan
              </span>
            </button>

            {/* Quick Emergency Hotline */}
            <a
              href="tel:09987654321"
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors"
              title="Emergency MDRRMO Line"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
              <span className="hidden md:inline">MDRRMO: </span>
              <span className="font-bold">911</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenProposal}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 flex items-center space-x-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Proposal</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                activeSection === item.id
                  ? 'text-sky-700 bg-sky-50'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full py-2.5 rounded-xl text-sm font-bold text-white bg-indigo-600 flex items-center justify-center space-x-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>View LGU Digital Transformation Proposal</span>
            </button>
            <a
              href="tel:09987654321"
              className="w-full py-2 rounded-xl text-sm font-semibold text-rose-700 bg-rose-50 flex items-center justify-center space-x-2 border border-rose-200"
            >
              <PhoneCall className="w-4 h-4" />
              <span>MDRRMO Emergency Hotline (911)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
