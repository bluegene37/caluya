<!-- Gene - Oct 06, 2026: Vue 3 TourismView dedicated page component for Tatusan Festival and Island Tourism -->
<template>
  <div>
    <!-- Dedicated Page Banner & Breadcrumbs -->
    <div class="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white py-12 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center space-x-2 text-xs text-slate-400 mb-3">
          <router-link to="/" class="hover:text-amber-400 transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-amber-400 font-semibold">Tourism & Tatusan Festival</span>
        </nav>
        <div class="flex items-center space-x-3 mb-2">
          <span class="w-10 h-10 rounded-2xl bg-amber-600/30 border border-amber-500/50 flex items-center justify-center text-amber-400 text-lg">
            🦀
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Tatusan Festival & Island Eco-Tourism
          </h1>
        </div>
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          The pride and joy of Caluyanons. Celebrating the precious coconut crab (<em>Birgus latro</em> or <em>Tatus</em>), pristine crystal waters, powdery sandbars of Liwagao, rich diving reefs, and community homestay experiences.
        </p>
      </div>
    </div>

    <!-- Main Tourism Content -->
    <TourismShowcase />
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for TourismView
import TourismShowcase from '../components/TourismShowcase.vue';
</script>
