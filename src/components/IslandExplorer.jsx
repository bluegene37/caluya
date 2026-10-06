// Gene - Oct 06, 2026: Interactive Island Explorer and 18 Barangays directory component

import React, { useState } from 'react';
import { Compass, Search, MapPin, Users, Anchor, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ISLANDS_DATA, BARANGAYS_LIST } from '../data/caluyaData';

export function IslandExplorer() {
  const [selectedIslandId, setSelectedIslandId] = useState('caluya-main');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterIsland, setFilterIsland] = useState('All');

  const selectedIsland = ISLANDS_DATA.find((i) => i.id === selectedIslandId) || ISLANDS_DATA[0];

  const filteredBarangays = BARANGAYS_LIST.filter((b) => {
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.captain.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterIsland === 'All' || b.island.includes(filterIsland);
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="islands" className="py-20 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Archipelagic Geography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Our 18 Island Barangays
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Caluya is a tapestry of islands in the Sulu Sea and Tablas Strait. Discover the unique identity, 
            economic life, and leadership of each island cluster.
          </p>
        </div>

        {/* Island Navigation Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {ISLANDS_DATA.map((island) => {
            const isActive = island.id === selectedIslandId;
            return (
              <button
                key={island.id}
                onClick={() => setSelectedIslandId(island.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center space-x-2 border ${
                  isActive
                    ? 'bg-sky-700 text-white border-sky-800 shadow-md transform -translate-y-0.5'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-sky-400 hover:bg-sky-50/50'
                }`}
              >
                <span>{island.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                  isActive ? 'bg-sky-900 text-sky-200' : 'bg-slate-100 text-slate-600'
                }`}>
                  {island.barangays.length} Brgy{island.barangays.length > 1 ? 's' : ''}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Island Detailed Card */}
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Panel */}
            <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800">
                    {selectedIsland.category}
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{selectedIsland.status}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  {selectedIsland.name}
                </h3>
                <p className="mt-4 text-slate-600 text-base leading-relaxed">
                  {selectedIsland.description}
                </p>

                {/* Highlights */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Highlights & Landmarks</h4>
                  <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedIsland.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600 flex-shrink-0" />
                        <span className="font-medium">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ports & Access */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Anchor className="w-4 h-4 text-sky-600" />
                  <span className="font-semibold text-slate-800">Port Hub:</span>
                  <span>{selectedIsland.ports.join(', ')}</span>
                </div>
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  {selectedIsland.badge}
                </span>
              </div>
            </div>

            {/* Right Barangays Quick List */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <h4 className="text-base font-bold text-white flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span>Barangays on this Island</span>
                  </h4>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-mono">
                    {selectedIsland.barangays.length} Total
                  </span>
                </div>

                <div className="space-y-2.5">
                  {selectedIsland.barangays.map((bName) => {
                    const bData = BARANGAYS_LIST.find((b) => b.name === bName);
                    return (
                      <div
                        key={bName}
                        className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-teal-500/50 transition-all flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-sm text-white">{bName}</div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            Brgy Captain: <span className="text-slate-200 font-medium">{bData?.captain || 'Brgy Official'}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-mono font-bold text-teal-300">{bData?.population || 'N/A'}</div>
                          <div className="text-[10px] text-slate-400">residents</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Direct LGU Dispatch: 24/7 Monitored</span>
                <span className="text-teal-400 font-semibold">VHF Ch 16 Connected</span>
              </div>
            </div>

          </div>
        </div>

        {/* Searchable Directory of all 18 Barangays */}
        <div className="mt-16 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Municipal Barangay Registry</h3>
              <p className="text-xs sm:text-sm text-slate-500">Official listing of all 18 local government barangays across Caluya</p>
            </div>

            {/* Search & Island Filter */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search barangay or official..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white w-52 sm:w-64"
                />
              </div>

              <select
                value={filterIsland}
                onChange={(e) => setFilterIsland(e.target.value)}
                className="py-2 px-3 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="All">All Island Clusters</option>
                <option value="Caluya">Caluya Island</option>
                <option value="Semirara">Semirara Island</option>
                <option value="Sibay">Sibay Island</option>
                <option value="Sibato">Sibato Island</option>
              </select>
            </div>
          </div>

          {/* Barangay Table / Grid */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4 font-bold">Barangay Name</th>
                  <th className="py-3 px-4 font-bold">Island Cluster</th>
                  <th className="py-3 px-4 font-bold">Punong Barangay (Captain)</th>
                  <th className="py-3 px-4 font-bold text-right">Population (PSA)</th>
                  <th className="py-3 px-4 font-bold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBarangays.map((b) => (
                  <tr key={b.name} className="hover:bg-sky-50/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                      <span>Barangay {b.name}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                        {b.island}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-800 font-medium">{b.captain}</td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-700">{b.population}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Active LGU
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredBarangays.length === 0 && (
              <div className="py-12 text-center text-slate-500">
                No barangays matched your search query. Try clearing the filter.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
