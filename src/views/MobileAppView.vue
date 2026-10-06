<!-- Gene - Oct 06, 2026: Vue 3 MobileAppView dedicated page component for Caluya e-Citizen Mobile App -->
<template>
  <div>
    <!-- Dedicated Page Banner & Breadcrumbs -->
    <div class="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white py-12 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center space-x-2 text-xs text-slate-400 mb-3">
          <router-link to="/" class="hover:text-amber-400 transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-amber-400 font-semibold">Caluya e-Citizen Mobile</span>
        </nav>
        <div class="flex items-center space-x-3 mb-2">
          <span class="w-10 h-10 rounded-2xl bg-amber-600/30 border border-amber-500/50 flex items-center justify-center text-amber-400">
            <Smartphone class="w-5 h-5" />
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Caluya e-Citizen Mobile Application
          </h1>
        </div>
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Official prototype demonstration package. Download the sample Android APK directly, test the in-browser interactive smartphone simulator, or follow the guide to add the web app to your iPhone home screen.
        </p>
      </div>
    </div>

    <!-- Main Mobile App Content -->
    <MobileAppSection />
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for MobileAppView
import MobileAppSection from '../components/MobileAppSection.vue';
import { Smartphone } from '@lucide/vue';
</script>
