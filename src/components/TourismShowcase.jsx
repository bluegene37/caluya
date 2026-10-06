// Gene - Oct 06, 2026: Tourism Showcase with Tatusan Festival, Liwagao Island sandbar, seaweed farms, and eco-guidelines

import React, { useState } from 'react';
import { Compass, Calendar, MapPin, Sparkles, Shield, Camera, ArrowRight, X, Heart } from 'lucide-react';
import { TOURISM_DESTINATIONS } from '../data/caluyaData';

export function TourismShowcase() {
  const [selectedDest, setSelectedDest] = useState(null);

  return (
    <section id="tourism" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Eco-Tourism & Cultural Pride</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Island Wonders of Caluya
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            From the world-renowned Tatusan Festival celebrating our prized coconut crab to the blinding white sandbars 
            of Liwagao and crystal coral gardens of Sibato.
          </p>
        </div>

        {/* Featured Festival Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-600 to-rose-700 p-1 shadow-2xl">
          <div className="bg-slate-950/90 rounded-[22px] p-6 sm:p-10 backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950">
                    Official Municipal Festival
                  </span>
                  <span className="text-xs text-amber-300 font-semibold flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Every May in Poblacion</span>
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Tatusan Festival: Honor to the Coconut Crab
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  The Tatusan Festival is Caluya’s most vibrant cultural extravaganza. Named after the prized coconut crab (<em className="text-amber-300 font-serif">Birgus latro</em>), 
                  locally known as <strong className="text-white">Tatus</strong>, this annual celebration combines high-energy street dancing, 
                  intricate crustacean-inspired regalia, agricultural exhibitions, and an enduring advocacy for marine conservation.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-200">
                  <div className="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                    <span>🦀</span>
                    <span>Crab Race & Culinary Cookoff</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                    <span>⛵</span>
                    <span>Paraw Regatta Sailing Race</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                    <span>💃</span>
                    <span>Tribal Street Dance Competition</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-white/20 group">
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
                    alt="Tatusan Festival Celebration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-semibold text-white bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      Poblacion Festival Grounds
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Tourism Destinations Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOURISM_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => setSelectedDest(dest)}
              className="group cursor-pointer bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                      {dest.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {dest.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-400 mt-0.5">
                    {dest.subtitle}
                  </p>
                  <p className="mt-2.5 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs text-amber-400 font-bold">
                <span>View Travel Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Eco-Tourism & Tatus Conservation Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-950/60 border border-teal-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-teal-200">Municipal Ordinance: Coconut Crab (Tatus) Protection</h4>
              <p className="text-xs text-teal-300/80 mt-0.5">
                Catching, possessing, or transporting gravid (egg-bearing) or undersized tatus (carapace width &lt; 9cm) is strictly penalized by law. Help us preserve this island treasure for future generations!
              </p>
            </div>
          </div>
          <button 
            onClick={() => alert("Municipal Tourism Hotline: +63 917-123-CALUYA. Register at Tourism Office, Barangay Poblacion before visiting protected sanctuaries.")}
            className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-bold whitespace-nowrap shadow-sm"
          >
            Tourism Guidelines
          </button>
        </div>

      </div>

      {/* Destination Details Modal */}
      {selectedDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{selectedDest.tag}</span>
              <button onClick={() => setSelectedDest(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4">
              <div className="rounded-xl overflow-hidden aspect-video">
                <img src={selectedDest.image} alt={selectedDest.title} className="w-full h-full object-cover" />
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-white">{selectedDest.title}</h3>
              <p className="text-xs text-slate-400">{selectedDest.subtitle}</p>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{selectedDest.description}</p>

              <div className="mt-4 p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300">
                <span className="font-bold text-amber-300 block mb-1">Travel Access & Notes:</span>
                {selectedDest.details}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedDest(null)}
                className="px-5 py-2 bg-amber-400 text-slate-950 font-bold rounded-xl text-xs hover:bg-amber-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
