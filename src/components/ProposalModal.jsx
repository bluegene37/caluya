// Gene - Oct 06, 2026: Executive Modernization Proposal modal and presentation deck for LGU Caluya

import React, { useState } from 'react';
import { 
  X, Sparkles, ChevronRight, ChevronLeft, Printer, Download, 
  CheckCircle, Shield, Globe, Award, Zap, Anchor, Laptop, Layers, HeartHandshake
} from 'lucide-react';
import { PROPOSAL_DATA, LGU_INFO } from '../data/caluyaData';

export function ProposalModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('deck'); // 'deck' or 'document'
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      title: "Executive Overview & Vision",
      subtitle: "Caluya Smart Island Digital Transformation 2026–2028",
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">Vision Statement</span>
            <p className="text-sm text-slate-800 leading-relaxed font-medium">
              "{PROPOSAL_DATA.vision}"
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Target Beneficiary</span>
              <p className="text-slate-600">42,895+ residents across 18 island barangays (Caluya, Semirara, Sibay, Sibato, Liwagao).</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Primary Mandates Addressed</span>
              <p className="text-slate-600">Ease of Doing Business (RA 11032), DILG Full Disclosure, MDRRMO Maritime Safety.</p>
            </div>
          </div>
          <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
            <strong>Key Benefit:</strong> Reduces citizen travel expense by ~₱15M annually by digitizing basic permit and document workflows.
          </div>
        </div>
      )
    },
    {
      title: "Core Problem: The Island Disconnect",
      subtitle: "Archipelagic Challenges Faced by Caluyanons",
      content: (
        <div className="space-y-3.5">
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs">
            <strong className="text-rose-900 block mb-0.5">1. Prohibitive Sea Travel Costs:</strong>
            <span className="text-rose-800">Citizens in Semirara or Sibay spend ₱400–₱800 per round-trip banca voyage plus lost work hours just to apply for or pick up municipal documents at Poblacion.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs">
            <strong className="text-amber-900 block mb-0.5">2. Weather Vulnerability & Maritime Safety:</strong>
            <span className="text-amber-800">Sudden gale warnings and rough sea conditions leave passengers and small fisherfolk stranded without real-time centralized digital warnings.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs">
            <strong className="text-sky-900 block mb-0.5">3. Untapped Global Tourism Potential:</strong>
            <span className="text-sky-800">World-class assets (Liwagao sandbar, Tatusan Festival, seaweed farms) lack a unified, official digital footprint to capture high-value eco-travelers.</span>
          </div>
        </div>
      )
    },
    {
      title: "The 4 Strategic Modernization Pillars",
      subtitle: "Holistic Solution Architecture for Caluya LGU",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PROPOSAL_DATA.pillars.map((p) => (
            <div key={p.num} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-sky-700 font-extrabold text-xs">
                  <span className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center text-[10px]">{p.num}</span>
                  <span>{p.title}</span>
                </div>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-200/60 text-[10px] font-semibold text-emerald-700">
                Impact: {p.impact}
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Technical Architecture & Island Optimization",
      subtitle: "Designed for Real-World Remote Island Connectivity",
      content: (
        <div className="space-y-3">
          {PROPOSAL_DATA.technicalFeatures.map((feat, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="font-bold text-slate-900 flex items-center space-x-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>{feat.name}</span>
              </div>
              <p className="mt-1 text-slate-600 pl-5">{feat.detail}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Implementation Roadmap & Phasing",
      subtitle: "Milestones from Pilot to Full E-Governance",
      content: (
        <div className="space-y-3">
          {PROPOSAL_DATA.roadmap.map((r, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">{r.phase}</span>
                <span className="text-sky-700 font-semibold bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">{r.timeline}</span>
              </div>
              <p className="mt-1.5 text-slate-600">{r.deliverables}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Budget Phasing & Return on Investment",
      subtitle: "Cost Efficiency & Maximum Community Value",
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="p-2.5 rounded-l-lg font-bold">Scope / Deliverable</th>
                  <th className="p-2.5 rounded-r-lg font-bold text-right">Investment Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PROPOSAL_DATA.budgetPhasing.map((b, idx) => (
                  <tr key={idx}>
                    <td className="p-2.5 text-slate-800 font-medium">{b.item}</td>
                    <td className="p-2.5 text-right font-mono font-bold text-sky-700">{b.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
            <span className="font-bold block">Tangible Public ROI:</span>
            <p>1. Over ₱15,000,000 saved across island households in sea transport fees.</p>
            <p>2. Direct eligibility for national recognition under DILG Seal of Good Local Governance (SGLG).</p>
            <p>3. Faster revenue collection turnaround for Business Permits and Real Property Taxes.</p>
          </div>
        </div>
      )
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white flex items-center justify-between border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm shadow-md">
              LGU
            </div>
            <div>
              <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider block">Official Project Pitch</span>
              <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                Caluya LGU Modernization & E-Governance Proposal
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-xs">
              <button
                onClick={() => setViewMode('deck')}
                className={`px-2.5 py-1 rounded font-bold transition-all ${
                  viewMode === 'deck' ? 'bg-amber-400 text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
              >
                Slide Deck
              </button>
              <button
                onClick={() => setViewMode('document')}
                className={`px-2.5 py-1 rounded font-bold transition-all ${
                  viewMode === 'document' ? 'bg-amber-400 text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
              >
                Full Document
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Print / Save to PDF"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-50">
          
          {viewMode === 'deck' ? (
            /* SLIDE DECK MODE */
            <div className="flex flex-col h-full justify-between space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm min-h-[380px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                      Slide {currentSlide + 1} of {slides.length}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Ref: PROP-CALUYA-2026
                    </span>
                  </div>

                  <h4 className="text-2xl font-extrabold text-slate-950 mt-4">
                    {slides[currentSlide].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mb-6">
                    {slides[currentSlide].subtitle}
                  </p>

                  {slides[currentSlide].content}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Prepared for: {PROPOSAL_DATA.preparedFor}</span>
                  <span className="font-semibold text-slate-600">Caluya, Antique</span>
                </div>
              </div>

              {/* Slide Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={currentSlide === 0}
                  onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 border border-slate-300 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {/* Dots indicator */}
                <div className="flex space-x-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        idx === currentSlide ? 'bg-sky-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  disabled={currentSlide === slides.length - 1}
                  onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 bg-sky-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sky-700 shadow-sm"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            /* FULL FORMAL DOCUMENT VIEW (PRINT-READY) */
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-900 printable-proposal">
              
              {/* Document Header */}
              <div className="text-center border-b-2 border-slate-900 pb-6 space-y-2">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  REPUBLIKA NG PILIPINAS • LALAWIGAN NG ANTIQUE
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  MUNICIPALITY OF CALUYA
                </h2>
                <div className="text-xs font-semibold text-sky-800">
                  OFFICE OF THE MUNICIPAL MAYOR & SANGGUNIANG BAYAN
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-1">
                  SPECIAL EXECUTIVE BRIEFING & STRATEGIC PROPOSAL • {PROPOSAL_DATA.date}
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                <h3 className="text-lg font-black text-slate-950 uppercase">
                  {PROPOSAL_DATA.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div><strong>Addressed To:</strong> {PROPOSAL_DATA.preparedFor}</div>
                  <div><strong>Prepared By:</strong> {PROPOSAL_DATA.preparedBy}</div>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
                  1. Executive Summary & Geographic Context
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                  {PROPOSAL_DATA.executiveSummary}
                </p>
              </div>

              {/* The 4 Strategic Pillars */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
                  2. Strategic Modernization Pillars
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PROPOSAL_DATA.pillars.map((p) => (
                    <div key={p.num} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                      <div className="font-bold text-sky-800">
                        {p.num}. {p.title}
                      </div>
                      <p className="text-slate-600">{p.desc}</p>
                      <div className="font-semibold text-emerald-700 pt-1">
                        Expected Impact: {p.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
                  3. Island-Resilient Technical Architecture
                </h4>
                <div className="space-y-2 text-xs">
                  {PROPOSAL_DATA.technicalFeatures.map((f, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className="font-bold text-slate-900">• {f.name}:</span>
                      <span className="text-slate-600">{f.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phased Roadmap */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
                  4. Phased Implementation Roadmap
                </h4>
                <div className="space-y-2 text-xs">
                  {PROPOSAL_DATA.roadmap.map((r, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>{r.phase}</span>
                        <span className="text-sky-700">{r.timeline}</span>
                      </div>
                      <p className="mt-1 text-slate-600">{r.deliverables}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signatures & Endorsement Block */}
              <div className="pt-8 border-t-2 border-slate-200 grid grid-cols-2 gap-8 text-xs">
                <div className="space-y-12">
                  <div>Presented By:</div>
                  <div>
                    <div className="font-bold border-t border-slate-400 pt-1 uppercase">Gene / Digital Transformation Lead</div>
                    <div className="text-slate-500">Modernization Taskforce</div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div>Received & Reviewed By:</div>
                  <div>
                    <div className="font-bold border-t border-slate-400 pt-1 uppercase">{LGU_INFO.mayor.name}</div>
                    <div className="text-slate-500">Municipal Mayor, Caluya, Antique</div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3.5 bg-white border-t border-slate-200 flex items-center justify-between text-xs flex-shrink-0">
          <div className="flex items-center space-x-2 text-slate-500">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Ready for municipal review & council resolution</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center space-x-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF Document</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl font-bold bg-slate-900 hover:bg-slate-800 text-white"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
