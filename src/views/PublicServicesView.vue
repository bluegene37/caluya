<!-- Gene - Oct 06, 2026: Vue 3 PublicServicesView dedicated page component for MSWDO and Public Assistance -->
<template>
  <div>
    <!-- Dedicated Page Banner & Breadcrumbs -->
    <div class="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-12 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center space-x-2 text-xs text-slate-400 mb-3">
          <router-link to="/" class="hover:text-amber-400 transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-indigo-400 font-semibold">Public Assistance & MSWDO</span>
        </nav>
        <div class="flex items-center space-x-3 mb-2">
          <span class="w-10 h-10 rounded-2xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400">
            <Users class="w-5 h-5" />
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Public Assistance & Social Services (MSWDO)
          </h1>
        </div>
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Municipal Social Welfare & Development Office and Community Support Programs. Access financial crisis assistance (AICS), Senior Citizen and PWD registry, agriculture/fisherfolk subsidies, and educational assistance.
        </p>
      </div>
    </div>

    <!-- Main Public Services Directory Content -->
    <PublicServicesDirectory />
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for PublicServicesView
import PublicServicesDirectory from '../components/PublicServicesDirectory.vue';
import { Users } from '@lucide/vue';
</script>
