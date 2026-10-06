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
            <li>
              <button @click="$emit('navigate', 'leadership')" class="hover:text-amber-400 transition-colors cursor-pointer">
                Office of the Municipal Mayor
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
            <li>
              <button @click="$emit('open-proposal')" class="text-amber-300 font-bold hover:underline cursor-pointer">
                📄 View LGU Modernization Proposal
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
            <li>
              <button @click="$emit('navigate', 'services')" class="hover:text-sky-400 transition-colors cursor-pointer">
                Mayor's Action Desk (e-Reklamo)
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
            <div>
              <span class="block text-slate-500 font-semibold">Official Email:</span>
              <span class="text-slate-300">mayor.office@caluya-antique.gov.ph</span>
            </div>
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
          <span class="block text-slate-400 text-[11px] mt-0.5">Created & Developed by <strong class="text-sky-300">Gene Ray Medel</strong> (genexis.dev) • Proponent: <strong class="text-white">Raffy Soquilon</strong></span>
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
  </footer>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for FooterSection
defineEmits(['navigate', 'open-proposal']);
</script>
