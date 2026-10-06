<!-- Gene - Oct 06, 2026: Vue 3 LeadershipSection component with Mayor and council directory -->
<template>
  <section id="leadership" class="py-20 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200 mb-3">
          <Users class="w-3.5 h-3.5" />
          <span>Local Governance</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          LGU Leadership & Administration
        </h2>
        <p class="mt-3 text-base sm:text-lg text-slate-600">
          Dedicated leaders steering Caluya towards progressive development, island empowerment, and inclusive growth.
        </p>
      </div>

      <!-- Mayor's Executive Showcase -->
      <div class="mt-12 rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl overflow-hidden relative">
        <div class="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div class="lg:col-span-4 flex flex-col items-center text-center">
            <div class="relative w-44 h-44 rounded-2xl bg-gradient-to-tr from-sky-400 to-amber-300 p-1 shadow-2xl">
              <div class="w-full h-full rounded-2xl bg-slate-800 flex flex-col items-center justify-center overflow-hidden">
                <UserCheck class="w-20 h-20 text-sky-300/80" />
                <span class="text-[10px] text-slate-400 mt-2 font-mono">Official Portrait</span>
              </div>
              <div class="absolute -bottom-2 -right-2 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-md">
                MAYOR
              </div>
            </div>

            <h3 class="mt-4 text-2xl font-black text-white">{{ LGU_INFO.mayor.name }}</h3>
            <p class="text-xs font-bold uppercase tracking-wider text-amber-300">{{ LGU_INFO.mayor.title }}</p>
            <p class="text-[11px] text-slate-400 mt-1">Municipality of Caluya, Antique</p>
          </div>

          <div class="lg:col-span-8 space-y-4">
            <div class="inline-flex items-center space-x-2 text-xs font-semibold text-sky-300 bg-sky-900/50 px-3 py-1 rounded-full border border-sky-700/50">
              <Award class="w-3.5 h-3.5 text-amber-300" />
              <span>Executive Vision for Smart Island Governance</span>
            </div>

            <blockquote class="text-lg sm:text-xl text-slate-200 italic font-serif leading-relaxed">
              "{{ LGU_INFO.mayor.message }}"
            </blockquote>

            <div class="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div class="flex items-center space-x-2">
                <Mail class="w-4 h-4 text-sky-400" />
                <span class="truncate">{{ LGU_INFO.contacts.email }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Phone class="w-4 h-4 text-teal-400" />
                <span>{{ LGU_INFO.contacts.hotline }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <MapPin class="w-4 h-4 text-amber-400" />
                <span>Poblacion, Caluya</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Gene - Oct 06, 2026: Enhanced Vice Mayor Hon. Genevive L. Reyes showcase and Sangguniang Bayan legislative directory -->
      <!--
      <div class="mt-12 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
        <div class="border-b border-slate-200 pb-4 mb-6 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 class="text-xl font-bold text-slate-900">Sangguniang Bayan ng Caluya</h3>
            <p class="text-xs text-slate-500">Legislative Council & Policy Makers</p>
          </div>
          <div class="text-xs font-semibold text-sky-800 bg-sky-100 px-3 py-1 rounded-full">
            {{ LGU_INFO.viceMayor.title }}: <strong class="text-sky-950">{{ LGU_INFO.viceMayor.name }}</strong>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div
            v-for="(member, idx) in LGU_INFO.sangguniangBayan"
            :key="idx"
            class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-3 hover:border-sky-300 transition-colors"
          >
            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs flex-shrink-0">
              {{ idx + 1 }}
            </div>
            <div>
              <div class="font-bold text-xs text-slate-900">{{ member }}</div>
              <div class="text-[10px] text-slate-500">Sangguniang Bayan Member</div>
            </div>
          </div>
        </div>
      </div>
      -->

      <!-- Upgraded Vice Mayor & Sangguniang Bayan Legislative Showcase -->
      <div class="mt-12 space-y-6">
        
        <!-- Vice Mayor Executive Showcase -->
        <div class="rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 text-white p-6 sm:p-10 shadow-xl overflow-hidden relative border border-slate-800">
          <div class="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div class="lg:col-span-4 flex flex-col items-center text-center">
              <div class="relative w-44 h-44 rounded-2xl bg-gradient-to-tr from-amber-400 to-sky-300 p-1 shadow-2xl">
                <div class="w-full h-full rounded-2xl bg-slate-800 flex flex-col items-center justify-center overflow-hidden">
                  <Scale class="w-20 h-20 text-amber-300/80" />
                  <span class="text-[10px] text-slate-400 mt-2 font-mono">Legislative Portrait</span>
                </div>
                <div class="absolute -bottom-2 -right-2 bg-sky-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md">
                  VICE MAYOR
                </div>
              </div>

              <h3 class="mt-4 text-2xl font-black text-white">{{ LGU_INFO.viceMayor.name }}</h3>
              <p class="text-xs font-bold uppercase tracking-wider text-amber-300">{{ LGU_INFO.viceMayor.title }}</p>
              <p class="text-[11px] text-slate-400 mt-1">Presiding Officer, Sangguniang Bayan ng Caluya</p>
            </div>

            <div class="lg:col-span-8 space-y-4">
              <div class="inline-flex items-center space-x-2 text-xs font-semibold text-amber-300 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-700/50">
                <Scale class="w-3.5 h-3.5 text-amber-400" />
                <span>Legislative Mandate & Council Leadership</span>
              </div>

              <blockquote class="text-base sm:text-lg text-slate-200 italic font-serif leading-relaxed">
                "{{ LGU_INFO.viceMayor.message }}"
              </blockquote>

              <!-- Legislative Committees Led -->
              <div class="pt-2">
                <span class="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-2">Key Council Responsibilities & Committees:</span>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(comm, cIdx) in LGU_INFO.viceMayor.committees"
                    :key="cIdx"
                    class="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-sky-200 border border-slate-700"
                  >
                    {{ comm }}
                  </span>
                </div>
              </div>

              <div class="pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center space-x-2">
                <MapPin class="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{{ LGU_INFO.viceMayor.office }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sangguniang Bayan Members Directory -->
        <div class="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div class="border-b border-slate-200 pb-4 mb-6 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 class="text-xl font-bold text-slate-900">Members of the Sangguniang Bayan</h3>
              <p class="text-xs text-slate-500">Elected Councilors Representing All Island Barangays</p>
            </div>
            <div class="text-xs font-semibold text-sky-800 bg-sky-100 px-3 py-1 rounded-full">
              18 Island Barangays • Caluya, Semirara, Sibay, Sibato
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div
              v-for="(member, idx) in LGU_INFO.sangguniangBayan"
              :key="idx"
              class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-3 hover:border-sky-300 transition-colors"
            >
              <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-black text-xs flex-shrink-0">
                {{ idx + 1 }}
              </div>
              <div>
                <div class="font-bold text-xs text-slate-900">{{ member }}</div>
                <div class="text-[10px] text-slate-500">Sangguniang Bayan Member</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Municipal Hotlines Grid -->
      <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950">
          <span class="text-[10px] uppercase font-bold tracking-wider text-rose-700 block">MDRRMO Emergency</span>
          <span class="text-base font-extrabold font-mono block mt-1">911 / 0998-765-4321</span>
          <span class="text-[11px] text-rose-800 mt-0.5 block">VHF Radio Channel 16</span>
        </div>

        <div class="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-950">
          <span class="text-[10px] uppercase font-bold tracking-wider text-sky-700 block">Philippine Coast Guard</span>
          <span class="text-base font-extrabold font-mono block mt-1">0917-888-PCG1</span>
          <span class="text-[11px] text-sky-800 mt-0.5 block">Caluya Sub-Station</span>
        </div>

        <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950">
          <span class="text-[10px] uppercase font-bold tracking-wider text-indigo-700 block">Caluya Municipal PNP</span>
          <span class="text-base font-extrabold font-mono block mt-1">0929-111-2222</span>
          <span class="text-[11px] text-indigo-800 mt-0.5 block">Police Station Poblacion</span>
        </div>

        <div class="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950">
          <span class="text-[10px] uppercase font-bold tracking-wider text-teal-700 block">Municipal Health Office</span>
          <span class="text-base font-extrabold font-mono block mt-1">(036) 288-7100</span>
          <span class="text-[11px] text-teal-800 mt-0.5 block">RHU Poblacion & Semirara</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Gene - Oct 06, 2026: Added Scale icon for Vice Mayor legislative showcase
// import { Users, UserCheck, Award, Mail, Phone, MapPin } from '@lucide/vue';
import { Users, UserCheck, Award, Mail, Phone, MapPin, Scale } from '@lucide/vue';
import { LGU_INFO } from '../data/caluyaData';
</script>
