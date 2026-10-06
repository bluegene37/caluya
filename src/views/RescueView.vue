<!-- Gene - Oct 06, 2026: Vue 3 RescueView dedicated page component for 24/7 Rescue and MDRRMO -->
<template>
  <div>
    <!-- Dedicated Page Banner & Breadcrumbs -->
    <div class="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white py-12 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center space-x-2 text-xs text-slate-400 mb-3">
          <router-link to="/" class="hover:text-amber-400 transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-rose-400 font-semibold">24/7 Rescue & MDRRMO</span>
        </nav>
        <div class="flex items-center space-x-3 mb-2">
          <span class="w-10 h-10 rounded-2xl bg-rose-600/30 border border-rose-500/50 flex items-center justify-center text-rose-400">
            <Siren class="w-5 h-5 animate-pulse" />
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
            24/7 Rescue & MDRRMO Command Center
          </h1>
        </div>
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Municipal Disaster Risk Reduction & Management Office of Caluya, Antique. Continuous maritime monitoring, storm gale warnings, emergency medical evacuation (medevac), and inter-island pumpboat safety.
        </p>
      </div>
    </div>

    <!-- Main Rescue Hub Content -->
    <EmergencyRescueHub />
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for RescueView
import EmergencyRescueHub from '../components/EmergencyRescueHub.vue';
import { Siren } from '@lucide/vue';
</script>
