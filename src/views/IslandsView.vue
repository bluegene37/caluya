<!-- Gene - Oct 06, 2026: Vue 3 IslandsView dedicated page component for 18 Island Barangays Explorer -->
<template>
  <div>
    <!-- Dedicated Page Banner & Breadcrumbs -->
    <div class="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-12 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center space-x-2 text-xs text-slate-400 mb-3">
          <router-link to="/" class="hover:text-amber-400 transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-teal-400 font-semibold">18 Island Barangays</span>
        </nav>
        <div class="flex items-center space-x-3 mb-2">
          <span class="w-10 h-10 rounded-2xl bg-teal-600/30 border border-teal-500/50 flex items-center justify-center text-teal-400">
            <MapPin class="w-5 h-5" />
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
            18 Island Barangays of Caluya
          </h1>
        </div>
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          The archipelagic pride of northern Antique. Explore the distinctive communities of Caluya Mainland, the industrial energy of Semirara Island, the seaweed heritage of Sibay Island, and the pristine islets of Sibato and Liwagao.
        </p>
      </div>
    </div>

    <!-- Main Island Explorer Content -->
    <IslandExplorer />
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for IslandsView
import IslandExplorer from '../components/IslandExplorer.vue';
import { MapPin } from '@lucide/vue';
</script>
