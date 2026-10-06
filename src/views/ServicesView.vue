<!-- Gene - Oct 06, 2026: Vue 3 ServicesView dedicated page component for Citizen e-Services Hub -->
<template>
  <div>
    <!-- Dedicated Page Banner & Breadcrumbs -->
    <div class="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white py-12 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center space-x-2 text-xs text-slate-400 mb-3">
          <router-link to="/" class="hover:text-amber-400 transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-sky-400 font-semibold">Citizen e-Services</span>
        </nav>
        <div class="flex items-center space-x-3 mb-2">
          <span class="w-10 h-10 rounded-2xl bg-sky-600/30 border border-sky-500/50 flex items-center justify-center text-sky-400">
            <FileCheck class="w-5 h-5" />
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Citizen e-Services & Financial Calculators
          </h1>
        </div>
        <!-- Gene - Oct 06, 2026: Updated Mayor reference to Mayor Hon. Rigil Kent G. Lim -->
        <!--
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Zero-contact municipal transactions complying with Republic Act No. 11032. Estimate business permits, calculate Real Property Tax, request civil certificates, and send direct feedback to the Mayor's Action Desk.
        </p>
        -->
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Zero-contact municipal transactions complying with Republic Act No. 11032. Estimate business permits, calculate Real Property Tax, request civil certificates, and send direct feedback to Mayor Hon. Rigil Kent G. Lim's Action Desk.
        </p>
      </div>
    </div>

    <!-- Main Citizen Services Content -->
    <ServicesHub />
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for ServicesView
import ServicesHub from '../components/ServicesHub.vue';
import { FileCheck } from '@lucide/vue';
</script>
