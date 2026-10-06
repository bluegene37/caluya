// Gene - Oct 06, 2026: Transparency Seal & Full Disclosure Policy portal for DILG and SGLG compliance

import React, { useState } from 'react';
import { ShieldCheck, Download, FileText, CheckCircle2, Search, ExternalLink } from 'lucide-react';
import { TRANSPARENCY_DOCUMENTS } from '../data/caluyaData';

export function TransparencySection() {
  const [activeTab, setActiveTab] = useState('All');
  const [filterDoc, setFilterDoc] = useState('');

  const filteredDocs = TRANSPARENCY_DOCUMENTS.filter(doc => {
    const matchesTab = activeTab === 'All' || doc.category.toLowerCase().includes(activeTab.toLowerCase());
    const matchesText = doc.title.toLowerCase().includes(filterDoc.toLowerCase()) || doc.reference.toLowerCase().includes(filterDoc.toLowerCase());
    return matchesTab && matchesText;
  });

  return (
    <section id="transparency" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Good Financial Housekeeping • DILG Full Disclosure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Transparency Seal & Public Documents
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            In compliance with Section 84 of the General Appropriations Act and DILG Memorandum Circulars, 
            the Municipality of Caluya upholds complete financial transparency, open procurement, and public accountability.
          </p>
        </div>

        {/* Governance Badges Strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Full Disclosure Policy (FDP)</h4>
              <p className="text-xs text-slate-500">100% On-Time Public Posting</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">COA Annual Audit</h4>
              <p className="text-xs text-slate-500">Unmodified / Compliant Opinion</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Anti-Red Tape (ARTA)</h4>
              <p className="text-xs text-slate-500">Citizen Charter Displayed</p>
            </div>
          </div>
        </div>

        {/* Document Repository Card */}
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex flex-wrap gap-2">
              {['All', 'Full Disclosure', 'Procurement', 'Legislation', 'Audit'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter documents..."
                value={filterDoc}
                onChange={(e) => setFilterDoc(e.target.value)}
                className="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 w-60"
              />
            </div>
          </div>

          {/* Document Rows */}
          <div className="mt-4 divide-y divide-slate-100">
            {filteredDocs.map((doc, idx) => (
              <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 px-2 rounded-xl transition-colors">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      {doc.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Ref: {doc.reference}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                  <div className="text-xs text-slate-500">
                    Published: {doc.date} • Size: {doc.size} • <span className="text-emerald-600 font-semibold">{doc.status}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 flex-shrink-0">
                  <button
                    onClick={() => alert(`Opening official document: "${doc.title}" (Ref: ${doc.reference}). In live deployment, this downloads the signed PDF directly from the LGU cloud repository.`)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-800 text-xs font-bold rounded-xl border border-slate-200 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-sky-600" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
            All documents posted conform to DILG Memorandum Circular No. 2019-149 and Executive Order No. 2, s. 2016 (Freedom of Information).
          </div>
        </div>

      </div>
    </section>
  );
}
