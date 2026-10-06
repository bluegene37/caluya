<!-- Gene - Oct 06, 2026: Vue 3 ProposalModal component for LGU Caluya Modernization Proposal -->
<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
    <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
      
      <!-- Gene - Oct 06, 2026: Updated ProposalModal header to highlight Vice Mayor Hon. Genevive L. Reyes and legislative pitch -->
      <!--
      <div class="px-6 py-4 bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white flex items-center justify-between border-b border-slate-800 flex-shrink-0">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm shadow-md">
            LGU
          </div>
          <div>
            <span class="text-[10px] font-bold text-sky-300 uppercase tracking-wider block">Official Project Pitch</span>
            <h3 class="text-base sm:text-lg font-extrabold text-white leading-tight">
              Caluya LGU Modernization & E-Governance Proposal
            </h3>
          </div>
        </div>
      -->
      <div class="px-6 py-4 bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white flex items-center justify-between border-b border-slate-800 flex-shrink-0">
        <div class="flex items-center space-x-3">
          <!-- Gene - Oct 06, 2026: Replaced SB text badge with official Caluya Municipal Logo in modal header -->
          <!--
          <div class="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs shadow-md">
            SB
          </div>
          -->
          <img
            src="/images/caluya-logo.png"
            alt="Official Seal of Caluya"
            class="w-11 h-11 rounded-full object-contain bg-white p-0.5 border border-amber-400 shadow-md shrink-0"
          />
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">Legislative & E-Governance Masterplan</span>
              <span class="text-[9px] px-1.5 py-0.5 rounded bg-sky-900 text-sky-200 border border-sky-700 font-mono">For Vice Mayor Review</span>
            </div>
            <h3 class="text-base sm:text-lg font-extrabold text-white leading-tight">
              Caluya Smart Island Digital Transformation Proposal
            </h3>
            <span class="text-[11px] text-slate-300 block">
              Sponsored for: <strong class="text-amber-300">{{ PROPOSAL_DATA.preparedFor }}</strong>
            </span>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <!-- View Mode Toggle -->
          <div class="hidden sm:flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-xs">
            <button
              @click="viewMode = 'deck'"
              :class="[
                'px-2.5 py-1 rounded font-bold transition-all cursor-pointer',
                viewMode === 'deck' ? 'bg-amber-400 text-slate-950' : 'text-slate-300 hover:text-white'
              ]"
            >
              Slide Deck
            </button>
            <button
              @click="viewMode = 'document'"
              :class="[
                'px-2.5 py-1 rounded font-bold transition-all cursor-pointer',
                viewMode === 'document' ? 'bg-amber-400 text-slate-950' : 'text-slate-300 hover:text-white'
              ]"
            >
              Full Document
            </button>
          </div>

          <button
            @click="handlePrint"
            class="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            title="Print / Save to PDF"
          >
            <Printer class="w-4 h-4" />
          </button>

          <button
            @click="$emit('close')"
            class="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Modal Body Content -->
      <div class="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-50">
        
        <!-- SLIDE DECK MODE -->
        <div v-if="viewMode === 'deck'" class="flex flex-col h-full justify-between space-y-6">
          
          <!-- Gene - Oct 06, 2026: Tailored Slide Deck for Municipal Vice Mayor Hon. Genevive L. Reyes and the Sangguniang Bayan ng Caluya -->
          <!--
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm min-h-[380px] flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                <span class="text-xs font-bold text-sky-700 uppercase tracking-wider">
                  Slide {{ currentSlide + 1 }} of {{ slides.length }}
                </span>
                <span class="text-xs text-slate-400 font-mono">
                  Ref: PROP-CALUYA-2026
                </span>
              </div>

              <h4 class="text-2xl font-extrabold text-slate-950 mt-4">
                {{ slides[currentSlide].title }}
              </h4>
              <p class="text-xs sm:text-sm text-slate-500 font-medium mb-6">
                {{ slides[currentSlide].subtitle }}
              </p>

              <div v-if="currentSlide === 0" class="space-y-4">
                <div class="p-4 rounded-2xl bg-sky-50 border border-sky-200">
                  <span class="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">Vision Statement</span>
                  <p class="text-sm text-slate-800 leading-relaxed font-medium">
                    "{{ PROPOSAL_DATA.vision }}"
                  </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span class="font-bold text-slate-900 block mb-1">Target Beneficiary</span>
                    <p class="text-slate-600">42,895+ residents across 18 island barangays (Caluya, Semirara, Sibay, Sibato, Liwagao).</p>
                  </div>
                  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span class="font-bold text-slate-900 block mb-1">Primary Mandates Addressed</span>
                    <p class="text-slate-600">Ease of Doing Business (RA 11032), DILG Full Disclosure, MDRRMO Maritime Safety.</p>
                  </div>
                </div>
                <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                  <strong>Key Benefit:</strong> Reduces citizen travel expense by ~₱15M annually by digitizing basic permit and document workflows.
                </div>
              </div>

              <div v-else-if="currentSlide === 1" class="space-y-3.5">
                <div class="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs">
                  <strong class="text-rose-900 block mb-0.5">1. Prohibitive Sea Travel Costs:</strong>
                  <span class="text-rose-800">Citizens in Semirara or Sibay spend ₱400–₱800 per round-trip banca voyage plus lost work hours just to apply for or pick up municipal documents at Poblacion.</span>
                </div>
                <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs">
                  <strong class="text-amber-900 block mb-0.5">2. Weather Vulnerability & Maritime Safety:</strong>
                  <span class="text-amber-800">Sudden gale warnings and rough sea conditions leave passengers and small fisherfolk stranded without real-time centralized digital warnings.</span>
                </div>
                <div class="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs">
                  <strong class="text-sky-900 block mb-0.5">3. Untapped Global Tourism Potential:</strong>
                  <span class="text-sky-800">World-class assets (Liwagao sandbar, Tatusan Festival, seaweed farms) lack a unified, official digital footprint to capture high-value eco-travelers.</span>
                </div>
              </div>

              <div v-else-if="currentSlide === 2" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="p in PROPOSAL_DATA.pillars"
                  :key="p.num"
                  class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div class="flex items-center space-x-2 text-sky-700 font-extrabold text-xs">
                      <span class="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center text-[10px]">{{ p.num }}</span>
                      <span>{{ p.title }}</span>
                    </div>
                    <p class="mt-1.5 text-xs text-slate-600 leading-relaxed">{{ p.desc }}</p>
                  </div>
                  <div class="mt-2.5 pt-2 border-t border-slate-200/60 text-[10px] font-semibold text-emerald-700">
                    Impact: {{ p.impact }}
                  </div>
                </div>
              </div>

              <div v-else-if="currentSlide === 3" class="space-y-3">
                <div
                  v-for="(feat, idx) in PROPOSAL_DATA.technicalFeatures"
                  :key="idx"
                  class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                >
                  <div class="font-bold text-slate-900 flex items-center space-x-1.5">
                    <CheckCircle class="w-3.5 h-3.5 text-emerald-600" />
                    <span>{{ feat.name }}</span>
                  </div>
                  <p class="mt-1 text-slate-600 pl-5">{{ feat.detail }}</p>
                </div>
              </div>

              <div v-else-if="currentSlide === 4" class="space-y-3">
                <div
                  v-for="(r, idx) in PROPOSAL_DATA.roadmap"
                  :key="idx"
                  class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                >
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-900">{{ r.phase }}</span>
                    <span class="text-sky-700 font-semibold bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">{{ r.timeline }}</span>
                  </div>
                  <p class="mt-1.5 text-slate-600">{{ r.deliverables }}</p>
                </div>
              </div>

              <div v-else-if="currentSlide === 5" class="space-y-4">
                <div class="overflow-x-auto text-xs">
                  <table class="w-full text-left">
                    <thead>
                      <tr class="bg-slate-100 text-slate-600">
                        <th class="p-2.5 rounded-l-lg font-bold">Scope / Deliverable</th>
                        <th class="p-2.5 rounded-r-lg font-bold text-right">Investment Scale</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                      <tr v-for="(b, idx) in PROPOSAL_DATA.budgetPhasing" :key="idx">
                        <td class="p-2.5 text-slate-800 font-medium">{{ b.item }}</td>
                        <td class="p-2.5 text-right font-mono font-bold text-sky-700">{{ b.cost }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
                  <span class="font-bold block">Tangible Public ROI:</span>
                  <p>1. Over ₱15,000,000 saved across island households in sea transport fees.</p>
                  <p>2. Direct eligibility for national recognition under DILG Seal of Good Local Governance (SGLG).</p>
                  <p>3. Faster revenue collection turnaround for Business Permits and Real Property Taxes.</p>
                </div>
              </div>

            </div>

            <div class="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Prepared for: {{ PROPOSAL_DATA.preparedFor }}</span>
              <span class="font-semibold text-slate-600">Caluya, Antique</span>
            </div>
          </div>
          -->

          <!-- New Upgraded Slide Deck for Vice Mayor & SB -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm min-h-[420px] flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                <div class="flex items-center space-x-2">
                  <span class="text-xs font-black text-sky-800 uppercase tracking-wider">
                    Slide {{ currentSlide + 1 }} of {{ slides.length }}
                  </span>
                  <span class="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full">
                    Sangguniang Bayan Briefing
                  </span>
                </div>
                <span class="text-xs text-slate-400 font-mono">
                  Ref: {{ PROPOSAL_DATA.docReference }}
                </span>
              </div>

              <h4 class="text-xl sm:text-2xl font-extrabold text-slate-950 mt-4 flex items-center gap-2">
                <span>{{ slides[currentSlide].title }}</span>
              </h4>
              <p class="text-xs sm:text-sm text-slate-500 font-medium mb-6">
                {{ slides[currentSlide].subtitle }}
              </p>

              <!-- Slide 0: Executive Briefing for Vice Mayor -->
              <div v-if="currentSlide === 0" class="space-y-4">
                <div class="p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-xs font-bold text-sky-800 uppercase tracking-wider">Vision for Sangguniang Bayan Leadership</span>
                    <span class="text-[10px] text-amber-800 bg-amber-100 font-bold px-2 py-0.5 rounded-full">Presiding Officer Mandate</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    "{{ PROPOSAL_DATA.vision }}"
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span class="font-bold text-slate-900 block mb-1">Target Beneficiary</span>
                    <p class="text-slate-600">42,895+ residents in 18 island barangays (Caluya, Semirara, Sibay, Sibato, Liwagao).</p>
                  </div>
                  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span class="font-bold text-slate-900 block mb-1">Legislative Mandates</span>
                    <p class="text-slate-600">RA 7160 (Local Government Code) & RA 11032 (Ease of Doing Business automation).</p>
                  </div>
                  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span class="font-bold text-slate-900 block mb-1">Appropriation Anchor</span>
                    <p class="text-slate-600">20% Municipal Development Fund (MDF) & 5% Local Disaster Fund (LDRRMF).</p>
                  </div>
                </div>

                <div class="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-start space-x-2">
                  <Award class="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong class="text-emerald-900 block">Historic Opportunity for the Sangguniang Bayan:</strong>
                    <span>Through Vice Mayor Genevive L. Reyes's sponsorship, Caluya can become the first island municipality in Antique with zero-travel digital public services and live sea-lane disaster monitoring.</span>
                  </div>
                </div>
              </div>

              <!-- Slide 1: Core Problem: Island Disconnect -->
              <div v-else-if="currentSlide === 1" class="space-y-3.5">
                <div class="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs">
                  <strong class="text-rose-900 block mb-1">1. Prohibitive Inter-Island Sea Travel Expenses:</strong>
                  <span class="text-rose-800">Citizens living in Semirara, Sibay, and Sibato spend ₱400–₱800 per round-trip pumpboat fare just to travel to Poblacion for basic civil registry copies, business permits, or tax clearances. A full day of work is lost at sea.</span>
                </div>
                <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs">
                  <strong class="text-amber-900 block mb-1">2. Monsoon Vulnerabilities & Stranded Passengers:</strong>
                  <span class="text-amber-800">Sudden habagat/amihan gale warnings cancel passenger boat sailings with zero digital notice, leaving island constituents stranded at ports without lodging or emergency support.</span>
                </div>
                <div class="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs">
                  <strong class="text-sky-900 block mb-1">3. Legislative & Public Information Isolation:</strong>
                  <span class="text-sky-800">Barangay officials and constituents in outlying islands frequently lack immediate access to newly enacted Sangguniang Bayan ordinances, resolutions, social welfare benefits, and municipal health schedules.</span>
                </div>
              </div>

              <!-- Slide 2: The 4 Strategic Pillars -->
              <div v-else-if="currentSlide === 2" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="p in PROPOSAL_DATA.pillars"
                  :key="p.num"
                  class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div class="flex items-center space-x-2 text-sky-800 font-extrabold text-xs">
                      <span class="w-5 h-5 rounded-full bg-sky-200 text-sky-900 flex items-center justify-center text-[10px] font-black">{{ p.num }}</span>
                      <span>{{ p.title }}</span>
                    </div>
                    <p class="mt-1.5 text-xs text-slate-600 leading-relaxed">{{ p.desc }}</p>
                  </div>
                  <div class="mt-2.5 pt-2 border-t border-slate-200/60 space-y-1">
                    <div class="text-[10px] font-semibold text-emerald-700">
                      Impact: {{ p.impact }}
                    </div>
                    <div class="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      SB Role: {{ p.viceMayorRole }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 3: Sangguniang Bayan Legislative Agenda -->
              <div v-else-if="currentSlide === 3" class="space-y-3">
                <div
                  v-for="(act, idx) in PROPOSAL_DATA.legislativeActions"
                  :key="idx"
                  class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                >
                  <div class="flex items-center justify-between pb-1">
                    <span class="font-extrabold text-sky-900">{{ act.measure }}</span>
                    <span class="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">{{ act.sponsor }}</span>
                  </div>
                  <div class="font-bold text-slate-900 mt-0.5">{{ act.title }}</div>
                  <p class="mt-1 text-slate-600">{{ act.scope }}</p>
                </div>
              </div>

              <!-- Slide 4: Draft Sangguniang Bayan Resolution -->
              <div v-else-if="currentSlide === 4" class="space-y-3">
                <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs space-y-3 font-serif">
                  <div class="text-center border-b border-amber-200/80 pb-2">
                    <div class="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-600">Sangguniang Bayan ng Caluya • Antique</div>
                    <div class="text-sm font-black text-slate-900 mt-0.5">{{ PROPOSAL_DATA.draftResolution.resolutionNo }} ({{ PROPOSAL_DATA.draftResolution.series }})</div>
                    <div class="text-[11px] font-sans font-bold text-amber-900 mt-1">Sponsored by: {{ PROPOSAL_DATA.draftResolution.sponsor }}</div>
                  </div>
                  <div class="text-[11px] text-slate-800 italic leading-relaxed text-center font-bold">
                    "{{ PROPOSAL_DATA.draftResolution.titleFull }}"
                  </div>
                  <div class="p-2.5 bg-white/90 rounded-lg border border-amber-200 text-[11px] font-sans text-slate-700 space-y-1">
                    <div class="font-bold text-slate-900">Key Resolving Action:</div>
                    <p>{{ PROPOSAL_DATA.draftResolution.resolvingClause }}</p>
                  </div>
                </div>
                <div class="p-2.5 bg-sky-50 rounded-xl border border-sky-200 text-[11px] text-sky-950 flex items-center justify-between">
                  <span><strong>Status:</strong> Drafted and ready for Committee Referral & 1st Reading</span>
                  <span class="text-sky-700 font-bold">Session Period: Oct 2026</span>
                </div>
              </div>

              <!-- Slide 5: Technical Architecture -->
              <div v-else-if="currentSlide === 5" class="space-y-2.5">
                <div
                  v-for="(feat, idx) in PROPOSAL_DATA.technicalFeatures"
                  :key="idx"
                  class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                >
                  <div class="font-bold text-slate-900 flex items-center space-x-1.5">
                    <CheckCircle class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{{ feat.name }}</span>
                  </div>
                  <p class="mt-0.5 text-slate-600 pl-5">{{ feat.detail }}</p>
                </div>
              </div>

              <!-- Slide 6: Phased Roadmap & Public ROI -->
              <div v-else-if="currentSlide === 6" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div v-for="(r, idx) in PROPOSAL_DATA.roadmap" :key="idx" class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div class="text-[10px] font-bold text-sky-700 uppercase">{{ r.timeline }}</div>
                      <div class="font-bold text-slate-900 mt-0.5">{{ r.phase }}</div>
                      <p class="text-[11px] text-slate-600 mt-1">{{ r.deliverables }}</p>
                    </div>
                  </div>
                </div>

                <div class="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
                  <span class="font-bold block text-sm">Public ROI & Tangible Value for Caluya:</span>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div class="p-2 bg-white rounded-lg border border-emerald-200">
                      <strong class="text-emerald-900 block">₱15,000,000+ Savings</strong>
                      <span class="text-slate-600 text-[11px]">Aggregated annual sea fares retained in citizen household pockets.</span>
                    </div>
                    <div class="p-2 bg-white rounded-lg border border-emerald-200">
                      <strong class="text-emerald-900 block">DILG SGLG Seal</strong>
                      <span class="text-slate-600 text-[11px]">Guarantees top marks in DILG Ease of Doing Business & Transparency audits.</span>
                    </div>
                    <div class="p-2 bg-white rounded-lg border border-emerald-200">
                      <strong class="text-emerald-900 block">24/7 Sea Safety</strong>
                      <span class="text-slate-600 text-[11px]">Instant storm surge and gale alerts protecting island fisherfolk bancas.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <span class="font-medium text-slate-600">Prepared for: <strong class="text-slate-900">{{ PROPOSAL_DATA.preparedFor }}</strong></span>
              <span class="font-semibold text-sky-800">Sangguniang Bayan ng Caluya • Antique</span>
            </div>
          </div>

          <!-- Slide Controls -->
          <div class="flex items-center justify-between pt-2">
            <button
              :disabled="currentSlide === 0"
              @click="currentSlide = Math.max(0, currentSlide - 1)"
              class="px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 border border-slate-300 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 cursor-pointer"
            >
              <ChevronLeft class="w-4 h-4" />
              <span>Previous</span>
            </button>

            <!-- Dots indicator -->
            <div class="flex space-x-1.5">
              <button
                v-for="(_, idx) in slides"
                :key="idx"
                @click="currentSlide = idx"
                :class="[
                  'h-2.5 rounded-full transition-all cursor-pointer',
                  idx === currentSlide ? 'bg-sky-600 w-6' : 'bg-slate-300 w-2.5 hover:bg-slate-400'
                ]"
              />
            </div>

            <button
              :disabled="currentSlide === slides.length - 1"
              @click="currentSlide = Math.min(slides.length - 1, currentSlide + 1)"
              class="px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 bg-sky-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sky-700 shadow-sm cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight class="w-4 h-4" />
            </button>
          </div>

        </div>

        <!-- Gene - Oct 06, 2026: Tailored Full Document View for Municipal Vice Mayor Hon. Genevive L. Reyes and the Sangguniang Bayan ng Caluya -->
        <!--
        <div v-else class="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-900 printable-proposal">
          
          <div class="text-center border-b-2 border-slate-900 pb-6 space-y-2">
            <div class="text-xs font-bold uppercase tracking-widest text-slate-500">
              REPUBLIKA NG PILIPINAS • LALAWIGAN NG ANTIQUE
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950">
              MUNICIPALITY OF CALUYA
            </h2>
            <div class="text-xs font-semibold text-sky-800">
              OFFICE OF THE MUNICIPAL MAYOR & SANGGUNIANG BAYAN
            </div>
            <div class="text-[11px] font-mono text-slate-400 pt-1">
              SPECIAL EXECUTIVE BRIEFING & STRATEGIC PROPOSAL • {{ PROPOSAL_DATA.date }}
            </div>
          </div>

          <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <h3 class="text-lg font-black text-slate-950 uppercase">
              {{ PROPOSAL_DATA.title }}
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div><strong>Addressed To:</strong> {{ PROPOSAL_DATA.preparedFor }}</div>
              <div><strong>Prepared By:</strong> {{ PROPOSAL_DATA.preparedBy }}</div>
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
              1. Executive Summary & Geographic Context
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {{ PROPOSAL_DATA.executiveSummary }}
            </p>
          </div>

          <div class="space-y-3">
            <h4 class="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
              2. Strategic Modernization Pillars
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="p in PROPOSAL_DATA.pillars"
                :key="p.num"
                class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5"
              >
                <div class="font-bold text-sky-800">
                  {{ p.num }}. {{ p.title }}
                </div>
                <p class="text-slate-600">{{ p.desc }}</p>
                <div class="font-semibold text-emerald-700 pt-1">
                  Expected Impact: {{ p.impact }}
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
              3. Island-Resilient Technical Architecture
            </h4>
            <div class="space-y-2 text-xs">
              <div
                v-for="(f, i) in PROPOSAL_DATA.technicalFeatures"
                :key="i"
                class="flex items-start space-x-2"
              >
                <span class="font-bold text-slate-900">• {{ f.name }}:</span>
                <span class="text-slate-600">{{ f.detail }}</span>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
              4. Phased Implementation Roadmap
            </h4>
            <div class="space-y-2 text-xs">
              <div
                v-for="(r, i) in PROPOSAL_DATA.roadmap"
                :key="i"
                class="p-3 rounded-lg bg-slate-50 border border-slate-200"
              >
                <div class="flex justify-between font-bold text-slate-900">
                  <span>{{ r.phase }}</span>
                  <span class="text-sky-700">{{ r.timeline }}</span>
                </div>
                <p class="mt-1 text-slate-600">{{ r.deliverables }}</p>
              </div>
            </div>
          </div>

          <div class="pt-8 border-t-2 border-slate-200 grid grid-cols-2 gap-8 text-xs">
            <div class="space-y-12">
              <div>Presented By:</div>
              <div>
                <div class="font-bold border-t border-slate-400 pt-1 uppercase">Gene / Digital Transformation Lead</div>
                <div class="text-slate-500">Modernization Taskforce</div>
              </div>
            </div>

            <div class="space-y-12">
              <div>Received & Reviewed By:</div>
              <div>
                <div class="font-bold border-t border-slate-400 pt-1 uppercase">{{ LGU_INFO.mayor.name }}</div>
                <div class="text-slate-500">Municipal Mayor, Caluya, Antique</div>
              </div>
            </div>
          </div>

        </div>
        -->

        <!-- FULL FORMAL DOCUMENT VIEW (PRINT-READY) FOR VICE MAYOR & SANGGUNIANG BAYAN -->
        <div v-else class="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-900 printable-proposal">
          
          <!-- Document Header -->
          <!-- Gene - Oct 06, 2026: Enhanced printable document header with official Caluya Municipal seal letterhead -->
          <!--
          <div class="text-center border-b-2 border-slate-900 pb-6 space-y-2">
            <div class="text-xs font-bold uppercase tracking-widest text-slate-500">
              REPUBLIKA NG PILIPINAS • LALAWIGAN NG ANTIQUE
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950">
              SANGGUNIANG BAYAN NG CALUYA
            </h2>
            <div class="text-xs font-semibold text-sky-900 uppercase tracking-wider">
              TANGGAPAN NG PANGALAWANG PUNONG BAYAN AT PRESIDING OFFICER
            </div>
            <div class="text-[11px] font-mono text-slate-500 pt-1">
              LEGISLATIVE MASTERPLAN & E-GOVERNANCE PROPOSAL • {{ PROPOSAL_DATA.date }} • REF: {{ PROPOSAL_DATA.docReference }}
            </div>
          </div>
          -->
          <div class="text-center border-b-2 border-slate-900 pb-6 space-y-2">
            <div class="flex items-center justify-center mb-2">
              <img
                src="/images/caluya-logo.png"
                alt="Official Seal of Caluya, Antique"
                class="w-20 h-20 object-contain drop-shadow"
              />
            </div>
            <div class="text-xs font-bold uppercase tracking-widest text-slate-500">
              REPUBLIKA NG PILIPINAS • LALAWIGAN NG ANTIQUE
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-950">
              SANGGUNIANG BAYAN NG CALUYA
            </h2>
            <div class="text-xs font-semibold text-sky-900 uppercase tracking-wider">
              TANGGAPAN NG PANGALAWANG PUNONG BAYAN AT PRESIDING OFFICER
            </div>
            <div class="text-[11px] font-mono text-slate-500 pt-1">
              LEGISLATIVE MASTERPLAN & E-GOVERNANCE PROPOSAL • {{ PROPOSAL_DATA.date }} • REF: {{ PROPOSAL_DATA.docReference }}
            </div>
          </div>

          <!-- Title & Metadata -->
          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <div class="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-wider">
              Official Legislative Pitch for Sangguniang Bayan Sponsorship
            </div>
            <h3 class="text-lg sm:text-xl font-black text-slate-950 uppercase leading-snug">
              {{ PROPOSAL_DATA.title }}
            </h3>
            <p class="text-xs text-slate-600 font-medium">
              {{ PROPOSAL_DATA.subTitle }}
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2 border-t border-slate-200">
              <div>
                <strong class="text-slate-900 block">Addressed To:</strong>
                <span>{{ PROPOSAL_DATA.preparedFor }}</span>
              </div>
              <div>
                <strong class="text-slate-900 block">Prepared By:</strong>
                <span>{{ PROPOSAL_DATA.preparedBy }}</span>
              </div>
              <div>
                <strong class="text-slate-900 block">Legislative Mandate:</strong>
                <span>Republic Act No. 7160 (Sec. 16) & RA 11032 (Ease of Doing Business)</span>
              </div>
              <div>
                <strong class="text-slate-900 block">Fiscal Allocation Recommendation:</strong>
                <span>20% Municipal Development Fund (MDF) & 5% MDRRM Fund</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Executive Summary -->
          <div class="space-y-3">
            <h4 class="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1.5 flex items-center justify-between">
              <span>1. Executive Summary & Archipelagic Context</span>
              <span class="text-[10px] text-slate-400 lowercase font-normal font-mono">18 island barangays</span>
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {{ PROPOSAL_DATA.executiveSummary }}
            </p>
          </div>

          <!-- Section 2: Legislative Sponsorship Agenda -->
          <div class="space-y-3">
            <h4 class="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1.5 flex items-center justify-between">
              <span>2. Sangguniang Bayan Legislative Action Agenda</span>
              <span class="text-[10px] text-sky-800 font-bold uppercase">Sponsorship Roadmap</span>
            </h4>
            <div class="space-y-3">
              <div
                v-for="(act, idx) in PROPOSAL_DATA.legislativeActions"
                :key="idx"
                class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              >
                <div class="flex items-center justify-between pb-1">
                  <span class="font-black text-sky-950">{{ act.measure }}</span>
                  <span class="text-[10px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">{{ act.sponsor }}</span>
                </div>
                <div class="font-bold text-slate-900 text-sm mt-0.5">{{ act.title }}</div>
                <p class="mt-1 text-slate-600 leading-relaxed">{{ act.scope }}</p>
              </div>
            </div>
          </div>

          <!-- Section 3: The 4 Strategic Modernization Pillars -->
          <div class="space-y-3">
            <h4 class="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1.5">
              3. Strategic Modernization Pillars
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="p in PROPOSAL_DATA.pillars"
                :key="p.num"
                class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div class="font-black text-sky-900 text-sm flex items-center space-x-2">
                    <span class="w-5 h-5 rounded-full bg-sky-200 text-sky-950 flex items-center justify-center text-[10px]">{{ p.num }}</span>
                    <span>{{ p.title }}</span>
                  </div>
                  <p class="text-slate-600 mt-2 leading-relaxed">{{ p.desc }}</p>
                </div>
                <div class="pt-2 border-t border-slate-200/80 space-y-1">
                  <div class="font-semibold text-emerald-700">
                    Expected Impact: {{ p.impact }}
                  </div>
                  <div class="font-bold text-amber-900 text-[11px]">
                    Council Mandate: {{ p.viceMayorRole }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 4: Full Draft Sangguniang Bayan Resolution -->
          <div class="space-y-3">
            <h4 class="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1.5 flex items-center justify-between">
              <span>4. Complete Draft Sangguniang Bayan Resolution</span>
              <span class="text-[10px] text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded">Ready for Floor Reading</span>
            </h4>
            
            <div class="p-6 rounded-2xl bg-amber-50/60 border border-amber-300 font-serif text-xs space-y-4">
              <div class="text-center space-y-1 border-b border-amber-200 pb-3">
                <div class="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-600">{{ PROPOSAL_DATA.draftResolution.title }}</div>
                <div class="text-sm font-black text-slate-950">{{ PROPOSAL_DATA.draftResolution.resolutionNo }}</div>
                <div class="text-[11px] font-sans text-amber-900 font-bold">Sponsored by: {{ PROPOSAL_DATA.draftResolution.sponsor }}</div>
              </div>

              <div class="text-center font-bold text-xs text-slate-900 leading-snug px-4">
                "{{ PROPOSAL_DATA.draftResolution.titleFull }}"
              </div>

              <div class="space-y-2.5 text-slate-800 text-[11.5px] leading-relaxed">
                <p v-for="(clause, idx) in PROPOSAL_DATA.draftResolution.whereasClauses" :key="idx" class="text-justify">
                  {{ clause }}
                </p>
              </div>

              <div class="p-3.5 bg-white/95 rounded-xl border border-amber-300 text-slate-900 font-sans text-xs space-y-1 shadow-2xs">
                <strong class="text-amber-950 block">RESOLVING CLAUSE:</strong>
                <p class="leading-relaxed">{{ PROPOSAL_DATA.draftResolution.resolvingClause }}</p>
              </div>
            </div>
          </div>

          <!-- Section 5: Technical Specifications -->
          <div class="space-y-3">
            <h4 class="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1.5">
              5. Island-Resilient Technical Architecture & Security
            </h4>
            <div class="space-y-2 text-xs">
              <div
                v-for="(f, i) in PROPOSAL_DATA.technicalFeatures"
                :key="i"
                class="flex items-start space-x-2"
              >
                <span class="font-bold text-slate-900 flex-shrink-0">• {{ f.name }}:</span>
                <span class="text-slate-600">{{ f.detail }}</span>
              </div>
            </div>
          </div>

          <!-- Section 6: Phased Implementation Roadmap & Budget -->
          <div class="space-y-3">
            <h4 class="text-sm font-extrabold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1.5">
              6. Phased Implementation Roadmap & Budget Phasing
            </h4>
            <div class="space-y-2 text-xs">
              <div
                v-for="(r, i) in PROPOSAL_DATA.roadmap"
                :key="i"
                class="p-3 rounded-lg bg-slate-50 border border-slate-200"
              >
                <div class="flex justify-between font-bold text-slate-900">
                  <span>{{ r.phase }}</span>
                  <span class="text-sky-800">{{ r.timeline }}</span>
                </div>
                <p class="mt-1 text-slate-600">{{ r.deliverables }}</p>
              </div>
            </div>

            <!-- Budget Table -->
            <div class="pt-3">
              <table class="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
                <thead class="bg-slate-100 text-slate-700">
                  <tr>
                    <th class="p-2.5 font-bold">Scope / Deliverable</th>
                    <th class="p-2.5 font-bold text-right">Fund Source / Investment</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr v-for="(b, idx) in PROPOSAL_DATA.budgetPhasing" :key="idx">
                    <td class="p-2.5 text-slate-800 font-medium">{{ b.item }}</td>
                    <td class="p-2.5 text-right font-mono font-bold text-sky-800">{{ b.cost }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Section 7: Formal Signatures & Endorsement Block -->
          <div class="pt-8 border-t-2 border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs">
            <div class="space-y-12">
              <div>Presented & Submitted By:</div>
              <div>
                <div class="font-bold border-t border-slate-400 pt-1 uppercase">Gene / Digital Transformation Taskforce</div>
                <div class="text-slate-500">Lead E-Governance Proponent</div>
              </div>
            </div>

            <div class="space-y-12">
              <div>Received & Endorsed for Legislative Sponsorship By:</div>
              <div>
                <div class="font-bold border-t border-slate-400 pt-1 uppercase">{{ PROPOSAL_DATA.targetOfficial }}</div>
                <div class="text-slate-500">{{ PROPOSAL_DATA.targetRole }}</div>
                <div class="text-[10px] text-slate-400">Sangguniang Bayan ng Caluya, Antique</div>
              </div>
            </div>

            <div class="space-y-12">
              <div>Attested & Recorded By:</div>
              <div>
                <div class="font-bold border-t border-slate-400 pt-1 uppercase">Secretary to the Sangguniang Bayan</div>
                <div class="text-slate-500">Office of the Sangguniang Bayan Secretariat</div>
              </div>
            </div>

            <div class="space-y-12">
              <div>Concurred & Approved for Implementation By:</div>
              <div>
                <div class="font-bold border-t border-slate-400 pt-1 uppercase">{{ LGU_INFO.mayor.name }}</div>
                <div class="text-slate-500">Municipal Mayor, Caluya, Antique</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Modal Bottom Bar -->
      <div class="px-6 py-3.5 bg-white border-t border-slate-200 flex items-center justify-between text-xs flex-shrink-0">
        <div class="flex items-center space-x-2 text-slate-500">
          <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Ready for Vice Mayor sponsorship & Sangguniang Bayan session</span>
        </div>
        <div class="flex items-center space-x-3">
          <button
            @click="handlePrint"
            class="px-3.5 py-1.5 rounded-xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center space-x-1.5 cursor-pointer"
          >
            <Printer class="w-3.5 h-3.5" />
            <span>Print / PDF Document</span>
          </button>
          <button
            @click="$emit('close')"
            class="px-4 py-1.5 rounded-xl font-bold bg-slate-900 hover:bg-slate-800 text-white cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for ProposalModal tailored for Vice Mayor Hon. Genevive L. Reyes
import { ref } from 'vue';
import { X, Printer, ChevronLeft, ChevronRight, CheckCircle, Award } from '@lucide/vue';
import { PROPOSAL_DATA, LGU_INFO } from '../data/caluyaData';

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close']);

const viewMode = ref('deck');
const currentSlide = ref(0);

// Gene - Oct 06, 2026: Updated slide deck to feature Vice Mayor legislative agenda and draft SB resolution
/*
const slides = [
  { title: "Executive Overview & Vision", subtitle: "Caluya Smart Island Digital Transformation 2026–2028" },
  { title: "Core Problem: The Island Disconnect", subtitle: "Archipelagic Challenges Faced by Caluyanons" },
  { title: "The 4 Strategic Modernization Pillars", subtitle: "Holistic Solution Architecture for Caluya LGU" },
  { title: "Technical Architecture & Island Optimization", subtitle: "Designed for Real-World Remote Island Connectivity" },
  { title: "Implementation Roadmap & Phasing", subtitle: "Milestones from Pilot to Full E-Governance" },
  { title: "Budget Phasing & Return on Investment", subtitle: "Cost Efficiency & Maximum Community Value" }
];
*/

const slides = [
  { title: "Executive Briefing for Vice Mayor & SB", subtitle: "Strategic Digital Transformation for all 18 Island Barangays" },
  { title: "Core Problem: The Island Disconnect", subtitle: "Archipelagic Travel Costs & Hazardous Sea Crossings" },
  { title: "The 4 Strategic Modernization Pillars", subtitle: "Legislative & Operational Solutions for Caluya LGU" },
  { title: "Sangguniang Bayan Legislative Agenda", subtitle: "Proposed E-Gov Ordinance, SB Resolution & 20% MDF Allocation" },
  { title: "Draft Sangguniang Bayan Resolution", subtitle: "Resolution Approving the Caluya Smart Island Masterplan" },
  { title: "Technical Architecture & Island Optimization", subtitle: "Engineered for Low-Bandwidth Island Networks & Offline Resilience" },
  { title: "Implementation Roadmap & Public ROI", subtitle: "₱15M+ Annual Household Savings & SGLG Governance Seal" }
];

const handlePrint = () => {
  window.print();
};
</script>
