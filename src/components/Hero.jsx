// Gene - Oct 06, 2026: Hero section showcasing Caluya's marine landscape, quick services, and key civic metrics

import React from 'react';
import { Compass, FileCheck, Anchor, Waves, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { LGU_INFO } from '../data/caluyaData';

export function Hero({ onOpenProposal, onNavigate }) {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background with scenic island aesthetic & mesh gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay scale-105 transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-400/30 backdrop-blur-md">
            <Anchor className="w-3.5 h-3.5 text-sky-400" />
            <span>Province of Antique • Western Visayas (Region VI)</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-400/30 backdrop-blur-md">
            <span>🦀 Home of the Tatusan Festival</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>1st Class Island Municipality</span>
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Bridging Our Islands Through <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              Modern Digital Governance
            </span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Welcome to the official digital gateway of <strong className="text-white font-semibold">Caluya, Antique</strong>. 
            Empowering 18 island barangays across Caluya, Semirara, Sibay, and our sister islets with zero-travel online services, 
            maritime safety communications, and sustainable eco-tourism.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-lg shadow-amber-400/20 transition-all transform active:scale-95"
          >
            <FileCheck className="w-4 h-4 text-slate-950" />
            <span>Access Citizen e-Services</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={onOpenProposal}
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-indigo-600/90 hover:bg-indigo-600 border border-indigo-400/40 shadow-lg shadow-indigo-600/30 backdrop-blur-md transition-all transform active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Explore Modernization Proposal</span>
          </button>

          <button
            onClick={() => onNavigate('islands')}
            className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 backdrop-blur-md transition-all"
          >
            <Compass className="w-4 h-4 text-teal-400" />
            <span>Discover 18 Barangays</span>
          </button>
        </div>

        {/* Quick Portal Feature Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            onClick={() => onNavigate('services')}
            className="cursor-pointer group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/60 transition-all backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="mt-3 text-base font-bold text-white group-hover:text-sky-300">Online e-BPLS & Certificates</h3>
            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
              Renew business permits or request birth/marriage certificates without long sea trips.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('services')}
            className="cursor-pointer group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800/60 transition-all backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="mt-3 text-base font-bold text-white group-hover:text-teal-300">Live Sea Lane & Gale Board</h3>
            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
              Real-time wave reports, passenger banca trip advisories between Caluya, Mindoro, and Panay.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('tourism')}
            className="cursor-pointer group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/60 transition-all backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              <span className="text-xl">🦀</span>
            </div>
            <h3 className="mt-3 text-base font-bold text-white group-hover:text-amber-300">Tatusan & Island Tourism</h3>
            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
              Celebrate the Coconut Crab festival, Liwagao sandbar, and sustainable seaweed farming.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('transparency')}
            className="cursor-pointer group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="mt-3 text-base font-bold text-white group-hover:text-emerald-300">Full Disclosure Portal</h3>
            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
              DILG compliance, CY 2026 municipal budgets, procurement plans, and ordinances.
            </p>
          </div>
        </div>

        {/* Civic Metrics Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-amber-400 font-mono">18</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Island Barangays</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-sky-400 font-mono">42,895+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Resilient Citizens</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-teal-400 font-mono">307,680 ha</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Municipal Waters</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono">1st Class</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Island Municipality</div>
          </div>
        </div>

      </div>
    </section>
  );
}
