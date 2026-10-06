<!-- Gene - Oct 06, 2026: Vue 3 HealthView dedicated page component for Municipal Health and Rural Health Units -->
<template>
  <div>
    <!-- Dedicated Page Banner & Breadcrumbs -->
    <div class="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white py-12 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center space-x-2 text-xs text-slate-400 mb-3">
          <router-link to="/" class="hover:text-amber-400 transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-emerald-400 font-semibold">Municipal Health & RHU</span>
        </nav>
        <div class="flex items-center space-x-3 mb-2">
          <span class="w-10 h-10 rounded-2xl bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
            <HeartPulse class="w-5 h-5" />
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Municipal Health Office (RHU 1 & RHU 2)
          </h1>
        </div>
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Comprehensive healthcare services for Caluya's archipelagic communities. Access free maintenance medicine tracking, island doctor schedules, birthing clinic operations, and tele-health consultation requests.
        </p>
      </div>
    </div>

    <!-- Main Health Hub Content -->
    <HealthServicesHub />
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for HealthView
import HealthServicesHub from '../components/HealthServicesHub.vue';
import { HeartPulse } from '@lucide/vue';
</script>
