// Gene - Oct 06, 2026: Top utility bar with Philippine Standard Time, accessibility controls, and MDRRMO sea condition ticker

import React, { useState, useEffect } from 'react';
import { Volume2, Sun, Moon, AlertTriangle, ShieldCheck, Waves } from 'lucide-react';

export function TopBar({ highContrast, setHighContrast, fontSize, setFontSize, language, setLanguage }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Manila',
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeStr(now.toLocaleString('en-PH', options) + ' PST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
        {/* Left: Philippine Standard Time & Republic Badge */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 text-amber-400 font-semibold tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>PHILIPPINE STANDARD TIME:</span>
          </div>
          <span className="font-mono text-slate-300 font-medium">{timeStr || 'Loading PST...'}</span>
        </div>

        {/* Center: Live MDRRMO Maritime Weather Advisory */}
        <div className="hidden lg:flex items-center space-x-2 text-sky-300 bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-800/50">
          <Waves className="w-3.5 h-3.5 text-sky-400 animate-bounce" />
          <span className="font-medium">MDRRMO Sea Advisory:</span>
          <span className="text-slate-300">Calm to Moderate Seas (Wave height: 0.8–1.5m). All island sea lanes open.</span>
        </div>

        {/* Right: Accessibility & Dialect controls */}
        <div className="flex items-center space-x-3">
          {/* Dialect Selector */}
          <div className="flex items-center space-x-1">
            <label htmlFor="lang-select" className="text-slate-400 hidden sm:inline">Language:</label>
            <select
              id="lang-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-slate-800 text-slate-200 border border-slate-700 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-amber-400"
            >
              <option value="en">English</option>
              <option value="kr">Kinaray-a / Hiligaynon</option>
              <option value="tg">Tagalog / Filipino</option>
            </select>
          </div>

          {/* Text Size Toggle */}
          <div className="flex items-center space-x-1 bg-slate-800 rounded px-1.5 py-0.5 border border-slate-700">
            <button
              onClick={() => setFontSize(prev => Math.max(14, prev - 1))}
              className="px-1 hover:text-amber-400 font-bold"
              title="Decrease text size"
            >
              A-
            </button>
            <span className="text-slate-500">|</span>
            <button
              onClick={() => setFontSize(prev => Math.min(20, prev + 1))}
              className="px-1 hover:text-amber-400 font-bold"
              title="Increase text size"
            >
              A+
            </button>
          </div>

          {/* Contrast Toggle */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`flex items-center space-x-1 px-2 py-0.5 rounded border transition-colors ${
              highContrast ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold' : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
            title="Toggle High Contrast for Accessibility"
          >
            <Sun className="w-3 h-3" />
            <span className="hidden sm:inline">Contrast</span>
          </button>
        </div>
      </div>
    </div>
  );
}
