<!-- Gene - Oct 06, 2026: Vue 3 TransparencyView dedicated page component for DILG Full Disclosure Seal and BAC Procurement -->
<template>
  <div>
    <!-- Dedicated Page Banner & Breadcrumbs -->
    <div class="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-12 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center space-x-2 text-xs text-slate-400 mb-3">
          <router-link to="/" class="hover:text-amber-400 transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-blue-400 font-semibold">Full Disclosure & Transparency</span>
        </nav>
        <div class="flex items-center space-x-3 mb-2">
          <span class="w-10 h-10 rounded-2xl bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-400">
            <ShieldCheck class="w-5 h-5" />
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Full Disclosure Seal & Governance Transparency
          </h1>
        </div>
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Upholding the DILG Full Disclosure Policy, Freedom of Information (FOI), and Seal of Good Local Governance (SGLG). Review annual budgets, procurement bidding documents, BAC resolutions, and Citizen's Charter timelines.
        </p>
      </div>
    </div>

    <!-- Main Transparency Content -->
    <TransparencySection />
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for TransparencyView
import TransparencySection from '../components/TransparencySection.vue';
import { ShieldCheck } from '@lucide/vue';
</script>
