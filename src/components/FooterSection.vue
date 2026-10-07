<!-- Gene - Oct 06, 2026: Vue 3 FooterSection component with Philippine Government standards -->
<template>
  <footer class="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
    <!-- Top Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Brand Info -->
        <div class="space-y-4">
          <!-- Gene - Oct 06, 2026: Replaced crab placeholder with official Caluya Municipal Seal logo -->
          <!--
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-slate-900 border border-amber-400/50 flex items-center justify-center text-lg">
              🦀
            </div>
            <div>
              <h4 class="font-bold text-white text-sm">Municipality of Caluya</h4>
              <p class="text-[11px] text-slate-400">Province of Antique, Philippines</p>
            </div>
          </div>
          -->
          <div class="flex items-center space-x-3">
            <img
              src="/images/caluya-logo.png"
              alt="Official Seal of Caluya, Antique"
              class="w-12 h-12 rounded-full object-contain bg-white/10 p-0.5 border border-amber-400/60 shadow-md"
            />
            <div>
              <h4 class="font-bold text-white text-sm">Municipality of Caluya</h4>
              <p class="text-[11px] text-slate-400">Province of Antique, Philippines</p>
            </div>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">
            The premier archipelagic municipality in Western Visayas. 18 resilient barangays united across Caluya, Semirara, Sibay, and surrounding islets.
          </p>
          <div class="text-[11px] text-slate-500">
            Official Portal & E-Governance Platform • ZIP 5711
          </div>
        </div>

        <!-- Municipal Government -->
        <div>
          <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            Local Government (LGU)
          </h4>
          <ul class="space-y-2 text-xs">
            <!-- Gene - Oct 06, 2026: Updated Mayor link to include Mayor Hon. Rigil Kent G. Lim and simplified Proposal button to 'Proposal' -->
            <!--
            <li>
              <button @click="$emit('navigate', 'leadership')" class="hover:text-amber-400 transition-colors cursor-pointer">
                Office of the Municipal Mayor
              </button>
            </li>
            -->
            <li>
              <button @click="$emit('navigate', 'leadership')" class="hover:text-amber-400 transition-colors cursor-pointer">
                Office of Municipal Mayor Hon. Rigil Kent G. Lim
              </button>
            </li>
            <li>
              <button @click="$emit('navigate', 'leadership')" class="hover:text-amber-400 transition-colors cursor-pointer">
                Sangguniang Bayan Resolutions
              </button>
            </li>
            <li>
              <button @click="$emit('navigate', 'transparency')" class="hover:text-amber-400 transition-colors cursor-pointer">
                DILG Full Disclosure Portal
              </button>
            </li>
            <li>
              <button @click="$emit('navigate', 'transparency')" class="hover:text-amber-400 transition-colors cursor-pointer">
                Bids and Awards Committee (BAC)
              </button>
            </li>
            <!--
            <li>
              <button @click="$emit('open-proposal')" class="text-amber-300 font-bold hover:underline cursor-pointer">
                📄 View LGU Modernization Proposal
              </button>
            </li>
            -->
            <li>
              <button @click="$emit('open-proposal')" class="text-amber-300 font-bold hover:underline cursor-pointer">
                📄 Proposal
              </button>
            </li>
          </ul>
        </div>

        <!-- Citizen Services -->
        <div>
          <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            Citizen e-Services
          </h4>
          <ul class="space-y-2 text-xs">
            <li>
              <button @click="$emit('navigate', 'services')" class="hover:text-sky-400 transition-colors cursor-pointer">
                Online e-BPLS Business Permits
              </button>
            </li>
            <li>
              <button @click="$emit('navigate', 'services')" class="hover:text-sky-400 transition-colors cursor-pointer">
                Civil Registry Certificate Requests
              </button>
            </li>
            <li>
              <button @click="$emit('navigate', 'services')" class="hover:text-sky-400 transition-colors cursor-pointer">
                Real Property Tax (RPTax) Calculator
              </button>
            </li>
            <li>
              <button @click="$emit('navigate', 'services')" class="hover:text-sky-400 transition-colors cursor-pointer">
                MDRRMO Sea Lane & Gale Board
              </button>
            </li>
            <!-- Gene - Oct 06, 2026: Updated link text to cite Mayor Hon. Rigil Kent G. Lim -->
            <!--
            <li>
              <button @click="$emit('navigate', 'services')" class="hover:text-sky-400 transition-colors cursor-pointer">
                Mayor's Action Desk (e-Reklamo)
              </button>
            </li>
            -->
            <li>
              <button @click="$emit('navigate', 'services')" class="hover:text-sky-400 transition-colors cursor-pointer">
                Mayor Hon. Rigil Kent G. Lim's Action Desk (e-Reklamo)
              </button>
            </li>
            <!-- Gene - Oct 06, 2026: Added Caluya Mobile App download link to FooterSection -->
            <li>
              <button @click="$emit('navigate', 'mobile-app')" class="text-emerald-400 hover:text-emerald-300 font-bold transition-colors cursor-pointer flex items-center space-x-1">
                <span>📱 Download Mobile App (Sample APK)</span>
              </button>
            </li>
          </ul>
        </div>

        <!-- Contact & Emergency -->
        <div>
          <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            Emergency & Contact
          </h4>
          <div class="space-y-2.5 text-xs">
            <div>
              <span class="block text-slate-500 font-semibold">Municipal Hall:</span>
              <span class="text-slate-300">Barangay Poblacion, Caluya, Antique</span>
            </div>
            <div>
              <span class="block text-slate-500 font-semibold">MDRRMO 24/7 Hotline:</span>
              <span class="text-rose-400 font-bold font-mono">911 / 0998-765-4321</span>
            </div>
            <div>
              <span class="block text-slate-500 font-semibold">Marine Radio Frequency:</span>
              <span class="text-sky-300 font-mono">VHF Channel 16</span>
            </div>
            <!-- Gene - Oct 06, 2026: Updated contact label to specify Office of Mayor Hon. Rigil Kent G. Lim -->
            <!--
            <div>
              <span class="block text-slate-500 font-semibold">Official Email:</span>
              <span class="text-slate-300">mayor.office@caluya-antique.gov.ph</span>
            </div>
            -->
            <div>
              <span class="block text-slate-500 font-semibold">Office of Mayor Hon. Rigil Kent G. Lim:</span>
              <span class="text-slate-300">mayor.office@caluya-antique.gov.ph</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Gene - Oct 06, 2026: Added National Government Agency Portals (LTO, NBI, SSS, PhilHealth, Pag-IBIG, GSIS, PSA, DFA, BIR, PRC, DMW, COMELEC) and DICT eGov PH Super App Gateway -->
    <div class="border-t border-slate-800/90 bg-slate-900/60 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- eGov PH App Showcase Banner -->
        <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 border border-sky-500/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 max-w-2xl">
            <div class="w-14 h-14 rounded-2xl bg-white p-1.5 shadow-md shrink-0 flex items-center justify-center">
              <img
                src="/images/caluya-logo.png"
                alt="eGov PH Republic Logo"
                class="w-full h-full object-contain"
              />
            </div>
            <div>
              <div class="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40 mb-1">
                <span>{{ EGOV_APP_DATA.republicNotice }}</span>
              </div>
              <h3 class="text-lg sm:text-xl font-black text-white">
                {{ EGOV_APP_DATA.name }}
              </h3>
              <p class="text-xs text-sky-400 font-semibold">
                {{ EGOV_APP_DATA.developer }}
              </p>
              <p class="text-xs text-slate-300 mt-1 leading-relaxed">
                {{ EGOV_APP_DATA.description }}
              </p>
            </div>
          </div>

          <!-- eGov App Download & Portal Links -->
          <div class="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <a
              :href="EGOV_APP_DATA.googlePlayUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-600 transition-all shadow-sm hover:scale-105"
            >
              <Smartphone class="w-4 h-4 text-emerald-400" />
              <div class="text-left">
                <span class="block text-[9px] uppercase tracking-wider text-slate-400">Get it on</span>
                <span class="block text-xs font-bold leading-none">Google Play</span>
              </div>
            </a>

            <a
              :href="EGOV_APP_DATA.appleAppStoreUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-600 transition-all shadow-sm hover:scale-105"
            >
              <Download class="w-4 h-4 text-sky-400" />
              <div class="text-left">
                <span class="block text-[9px] uppercase tracking-wider text-slate-400">Download on</span>
                <span class="block text-xs font-bold leading-none">App Store</span>
              </div>
            </a>

            <!-- Gene - Oct 07, 2026: Updated eGov Portal link label to highlight official domain e.gov.ph -->
            <!--
            <a
              :href="EGOV_APP_DATA.webPortal"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md hover:scale-105"
            >
              <span>Official eGov Portal</span>
              <ExternalLink class="w-3.5 h-3.5" />
            </a>
            -->
            <a
              :href="EGOV_APP_DATA.webPortal"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md hover:scale-105"
            >
              <span>Official eGov Portal (e.gov.ph)</span>
              <ExternalLink class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <!-- National Government Agency Links Grid -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
            <div>
              <h4 class="text-sm font-extrabold text-white uppercase tracking-wider flex items-center space-x-2">
                <Building2 class="w-4 h-4 text-sky-400" />
                <span>National Government Agency Portals (Pambansang Tanggapan)</span>
              </h4>
              <p class="text-xs text-slate-400 mt-0.5">
                Official online services for LTO, NBI, SSS, PhilHealth, Pag-IBIG, GSIS, PSA, DFA, BIR, PRC, DMW, and COMELEC.
              </p>
            </div>
            <span class="text-[11px] text-amber-400 font-semibold shrink-0">
              Zero Sea-Travel National Access
            </span>
          </div>

          <div class="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <a
              v-for="portal in NATIONAL_GOVERNMENT_PORTALS"
              :key="portal.id"
              :href="portal.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-3 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-sky-500 hover:bg-slate-800/80 transition-all flex flex-col justify-between"
              :title="portal.desc"
            >
              <div>
                <div class="flex items-center justify-between">
                  <span class="font-black text-xs font-mono text-sky-400 group-hover:text-amber-300 transition-colors">
                    {{ portal.acronym }}
                  </span>
                  <ExternalLink class="w-3 h-3 text-slate-500 group-hover:text-sky-300 transition-colors" />
                </div>
                <div class="mt-1 font-bold text-slate-200 text-xs truncate group-hover:text-white">
                  {{ portal.portalName }}
                </div>
                <p class="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">
                  {{ portal.name }}
                </p>
              </div>
              <span class="mt-2 text-[9px] font-semibold text-slate-500 group-hover:text-sky-400 block truncate">
                {{ portal.badge }} →
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>

    <!-- Gene - Oct 06, 2026: Added genexis.dev and Raffy Soquilon proponent attribution in footer bottom bar -->
    <!--
    <div class="bg-slate-900 border-t border-slate-800/80 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
        <div>
          © 2026 Municipality of Caluya, Antique. Republic of the Philippines. All rights reserved.
        </div>
        <div class="flex items-center space-x-4">
          <span>Freedom of Information (FOI)</span>
          <span>•</span>
          <span>Data Privacy Act (RA 10173)</span>
          <span>•</span>
          <span>Bagong Pilipinas</span>
        </div>
      </div>
    </div>
    -->
    <!-- Gene - Oct 06, 2026: Updated bottom footer attribution to explicit 'Created by: genexis.dev • Proponent: Raffy Soquilon' -->
    <!--
    <div class="bg-slate-900 border-t border-slate-800/80 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
        <div class="text-center sm:text-left">
          <span>© 2026 Municipality of Caluya, Antique. Republic of the Philippines. All rights reserved.</span>
          <span class="block text-slate-500 text-[10px] mt-0.5">Prototype engineered by <strong class="text-sky-300">genexis.dev</strong> • Proponent: <strong class="text-slate-300">Raffy Soquilon</strong></span>
        </div>
        <div class="flex items-center space-x-3 text-slate-400 text-[11px]">
          <span>Freedom of Information (FOI)</span>
          <span>•</span>
          <span>Data Privacy Act (RA 10173)</span>
          <span>•</span>
          <button @click="$emit('open-proposal')" class="text-amber-400 hover:text-amber-300 font-bold hover:underline cursor-pointer">
            Evaluation Proposal
          </button>
        </div>
      </div>
    </div>
    -->
    <!-- Gene - Oct 06, 2026: Updated footer bottom attribution to specify Gene Ray Medel (genexis.dev) as creator & developer, and Raffy Soquilon as proponent -->
    <!--
    <div class="bg-slate-900 border-t border-slate-800/80 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
        <div class="text-center sm:text-left">
          <span>© 2026 Municipality of Caluya, Antique. Republic of the Philippines. All rights reserved.</span>
          <span class="block text-slate-400 text-[11px] mt-0.5">Created by: <strong class="text-sky-300">genexis.dev</strong> • Proponent: <strong class="text-white">Raffy Soquilon</strong></span>
        </div>
        <div class="flex items-center space-x-3 text-slate-400 text-[11px]">
          <span>Freedom of Information (FOI)</span>
          <span>•</span>
          <span>Data Privacy Act (RA 10173)</span>
          <span>•</span>
          <button @click="$emit('open-proposal')" class="text-amber-400 hover:text-amber-300 font-bold hover:underline cursor-pointer">
            Evaluation Proposal
          </button>
        </div>
      </div>
    </div>
    -->
    <div class="bg-slate-900 border-t border-slate-800/80 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
        <div class="text-center sm:text-left">
          <span>© 2026 Municipality of Caluya, Antique. Republic of the Philippines. All rights reserved.</span>
          <!-- Gene - Oct 06, 2026: Updated footer bottom attribution to include active https://genexis.dev link and attribute proponent Raffy Suguilon -->
          <!--
          <span class="block text-slate-400 text-[11px] mt-0.5">Created & Developed by <strong class="text-sky-300">Gene Ray Medel</strong> (genexis.dev) • Proponent: <strong class="text-white">Raffy Soquilon</strong></span>
          -->
          <span class="block text-slate-400 text-[11px] mt-0.5">
            Created & Developed by <strong class="text-sky-300">Gene Ray Medel</strong> • <a href="https://genexis.dev" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300 underline font-semibold transition-colors">https://genexis.dev</a> • Proponent: <strong class="text-white">Raffy Suguilon</strong>
          </span>
        </div>
        <div class="flex items-center space-x-3 text-slate-400 text-[11px]">
          <span>Freedom of Information (FOI)</span>
          <span>•</span>
          <span>Data Privacy Act (RA 10173)</span>
          <span>•</span>
          <!-- Gene - Oct 06, 2026: Updated proposal button label to 'Proposal' -->
          <!--
          <button @click="$emit('open-proposal')" class="text-amber-400 hover:text-amber-300 font-bold hover:underline cursor-pointer">
            Evaluation Proposal
          </button>
          -->
          <button @click="$emit('open-proposal')" class="text-amber-400 hover:text-amber-300 font-bold hover:underline cursor-pointer">
            Proposal
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Gene - Oct 06, 2026: Previous FooterSection setup
/*
defineEmits(['navigate', 'open-proposal']);
*/

// Gene - Oct 06, 2026: Vue 3 composition setup for FooterSection with National Government Agency portals and eGov PH App
import { ExternalLink, Smartphone, Download, Building2 } from '@lucide/vue';
import { NATIONAL_GOVERNMENT_PORTALS, EGOV_APP_DATA } from '../data/caluyaData';

defineEmits(['navigate', 'open-proposal']);
</script>
