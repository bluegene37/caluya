// Gene - Oct 06, 2026: LGU Leadership and Municipal Directory section

import React from 'react';
import { Users, Phone, Mail, MapPin, Award, Shield, UserCheck } from 'lucide-react';
import { LGU_INFO } from '../data/caluyaData';

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Local Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            LGU Leadership & Administration
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Dedicated leaders steering Caluya towards progressive development, island empowerment, and inclusive growth.
          </p>
        </div>

        {/* Mayor's Executive Showcase */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-44 h-44 rounded-2xl bg-gradient-to-tr from-sky-400 to-amber-300 p-1 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-slate-800 flex flex-col items-center justify-center overflow-hidden">
                  <UserCheck className="w-20 h-20 text-sky-300/80" />
                  <span className="text-[10px] text-slate-400 mt-2 font-mono">Official Portrait</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-md">
                  MAYOR
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-black text-white">{LGU_INFO.mayor.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-300">{LGU_INFO.mayor.title}</p>
              <p className="text-[11px] text-slate-400 mt-1">Municipality of Caluya, Antique</p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-sky-300 bg-sky-900/50 px-3 py-1 rounded-full border border-sky-700/50">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>Executive Vision for Smart Island Governance</span>
              </div>

              <blockquote className="text-lg sm:text-xl text-slate-200 italic font-serif leading-relaxed">
                "{LGU_INFO.mayor.message}"
              </blockquote>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span className="truncate">{LGU_INFO.contacts.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>{LGU_INFO.contacts.hotline}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Poblacion, Caluya</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Vice Mayor & Sangguniang Bayan Section */}
        <div className="mt-12 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div className="border-b border-slate-200 pb-4 mb-6 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Sangguniang Bayan ng Caluya</h3>
              <p className="text-xs text-slate-500">Legislative Council & Policy Makers</p>
            </div>
            <div className="text-xs font-semibold text-sky-800 bg-sky-100 px-3 py-1 rounded-full">
              {LGU_INFO.viceMayor.title}: <strong className="text-sky-950">{LGU_INFO.viceMayor.name}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {LGU_INFO.sangguniangBayan.map((member, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-3 hover:border-sky-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">{member}</div>
                  <div className="text-[10px] text-slate-500">Sangguniang Bayan Member</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Municipal Hotlines Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950">
            <span className="text-[10px] uppercase font-bold tracking-wider text-rose-700 block">MDRRMO Emergency</span>
            <span className="text-base font-extrabold font-mono block mt-1">911 / 0998-765-4321</span>
            <span className="text-[11px] text-rose-800 mt-0.5 block">VHF Radio Channel 16</span>
          </div>

          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-950">
            <span className="text-[10px] uppercase font-bold tracking-wider text-sky-700 block">Philippine Coast Guard</span>
            <span className="text-base font-extrabold font-mono block mt-1">0917-888-PCG1</span>
            <span className="text-[11px] text-sky-800 mt-0.5 block">Caluya Sub-Station</span>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950">
            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-700 block">Caluya Municipal PNP</span>
            <span className="text-base font-extrabold font-mono block mt-1">0929-111-2222</span>
            <span className="text-[11px] text-indigo-800 mt-0.5 block">Police Station Poblacion</span>
          </div>

          <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950">
            <span className="text-[10px] uppercase font-bold tracking-wider text-teal-700 block">Municipal Health Office</span>
            <span className="text-base font-extrabold font-mono block mt-1">(036) 288-7100</span>
            <span className="text-[11px] text-teal-800 mt-0.5 block">RHU Poblacion & Semirara</span>
          </div>
        </div>

      </div>
    </section>
  );
}
