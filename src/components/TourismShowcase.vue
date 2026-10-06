<!-- Gene - Oct 06, 2026: Vue 3 TourismShowcase component with Tatusan Festival and eco-destinations -->
<template>
  <section id="tourism" class="py-20 bg-slate-900 text-white relative overflow-hidden">
    <!-- Decorative gradient glow -->
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Eco-Tourism & Cultural Pride</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          The Island Wonders of Caluya
        </h2>
        <p class="mt-3 text-base sm:text-lg text-slate-300">
          From the world-renowned Tatusan Festival celebrating our prized coconut crab to the blinding white sandbars 
          of Liwagao and crystal coral gardens of Sibato.
        </p>
      </div>

      <!-- Featured Festival Banner -->
      <div class="mt-12 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-600 to-rose-700 p-1 shadow-2xl">
        <div class="bg-slate-950/90 rounded-[22px] p-6 sm:p-10 backdrop-blur-md">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-7 space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950">
                  Official Municipal Festival
                </span>
                <span class="text-xs text-amber-300 font-semibold flex items-center space-x-1">
                  <Calendar class="w-3.5 h-3.5" />
                  <span>Every May in Poblacion</span>
                </span>
              </div>

              <h3 class="text-3xl sm:text-4xl font-extrabold text-white">
                Tatusan Festival: Honor to the Coconut Crab
              </h3>

              <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                The Tatusan Festival is Caluya’s most vibrant cultural extravaganza. Named after the prized coconut crab (<em class="text-amber-300 font-serif">Birgus latro</em>), 
                locally known as <strong class="text-white">Tatus</strong>, this annual celebration combines high-energy street dancing, 
                intricate crustacean-inspired regalia, agricultural exhibitions, and an enduring advocacy for marine conservation.
              </p>

              <div class="pt-2 flex flex-wrap gap-4 text-xs text-slate-200">
                <div class="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <span>🦀</span>
                  <span>Crab Race & Culinary Cookoff</span>
                </div>
                <div class="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <span>⛵</span>
                  <span>Paraw Regatta Sailing Race</span>
                </div>
                <div class="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <span>💃</span>
                  <span>Tribal Street Dance Competition</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 relative">
              <div class="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-white/20 group">
                <!-- Gene - Oct 06, 2026: Updated featured image to vibrant cultural street dancing accurately matching Tatusan Festival description -->
                <!--
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
                  alt="Tatusan Festival Celebration"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                -->
                <img
                  src="https://images.unsplash.com/photo-1579957023433-7fad5b83efae?auto=format&fit=crop&w=800&q=80"
                  alt="Tatusan Festival Celebration"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <span class="text-xs font-semibold text-white bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    Poblacion Festival Grounds
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Tourism Destinations Grid -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="dest in TOURISM_DESTINATIONS"
          :key="dest.id"
          @click="selectedDest = dest"
          class="group cursor-pointer bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/10 transition-all flex flex-col justify-between"
        >
          <div>
            <div class="relative aspect-[16/10] overflow-hidden">
              <img
                :src="dest.image"
                :alt="dest.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute top-2.5 left-2.5">
                <span class="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                  {{ dest.tag }}
                </span>
              </div>
            </div>

            <div class="p-5">
              <h4 class="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                {{ dest.title }}
              </h4>
              <p class="text-xs font-medium text-slate-400 mt-0.5">
                {{ dest.subtitle }}
              </p>
              <p class="mt-2.5 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                {{ dest.description }}
              </p>
            </div>
          </div>

          <div class="p-5 pt-0 flex items-center justify-between text-xs text-amber-400 font-bold">
            <span>View Travel Guide</span>
            <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      <!-- Responsible Eco-Tourism & Tatus Conservation Notice -->
      <div class="mt-12 p-6 rounded-2xl bg-teal-950/60 border border-teal-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center flex-shrink-0">
            <Shield class="w-5 h-5" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-teal-200">Municipal Ordinance: Coconut Crab (Tatus) Protection</h4>
            <p class="text-xs text-teal-300/80 mt-0.5">
              Catching, possessing, or transporting gravid (egg-bearing) or undersized tatus (carapace width &lt; 9cm) is strictly penalized by law. Help us preserve this island treasure for future generations!
            </p>
          </div>
        </div>
        <button 
          @click="showGuidelines"
          class="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-bold whitespace-nowrap shadow-sm cursor-pointer"
        >
          Tourism Guidelines
        </button>
      </div>

    </div>

    <!-- Destination Details Modal -->
    <div v-if="selectedDest" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div class="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-white">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <span class="text-xs font-bold text-amber-400 uppercase tracking-wider">{{ selectedDest.tag }}</span>
          <button @click="selectedDest = null" class="text-slate-400 hover:text-white cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>

        <div class="mt-4">
          <div class="rounded-xl overflow-hidden aspect-video">
            <img :src="selectedDest.image" :alt="selectedDest.title" class="w-full h-full object-cover" />
          </div>

          <h3 class="mt-4 text-2xl font-extrabold text-white">{{ selectedDest.title }}</h3>
          <p class="text-xs text-slate-400">{{ selectedDest.subtitle }}</p>

          <p class="mt-3 text-sm text-slate-300 leading-relaxed">{{ selectedDest.description }}</p>

          <div class="mt-4 p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300">
            <span class="font-bold text-amber-300 block mb-1">Travel Access & Notes:</span>
            {{ selectedDest.details }}
          </div>
        </div>

        <div class="mt-6 flex justify-end">
          <button
            @click="selectedDest = null"
            class="px-5 py-2 bg-amber-400 text-slate-950 font-bold rounded-xl text-xs hover:bg-amber-300 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for TourismShowcase
import { ref } from 'vue';
import { Sparkles, Calendar, ArrowRight, Shield, X } from '@lucide/vue';
import { TOURISM_DESTINATIONS } from '../data/caluyaData';

const selectedDest = ref(null);

const showGuidelines = () => {
  alert("Municipal Tourism Hotline: +63 917-123-CALUYA. Visitors must register at the Tourism Office, Barangay Poblacion before visiting protected sanctuaries.");
};
</script>
