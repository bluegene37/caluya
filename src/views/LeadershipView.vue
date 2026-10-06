<!-- Gene - Oct 06, 2026: Vue 3 LeadershipView dedicated page component for Mayor, Vice Mayor, and Sangguniang Bayan Directory -->
<template>
  <div>
    <!-- Dedicated Page Banner & Breadcrumbs -->
    <div class="bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white py-12 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center space-x-2 text-xs text-slate-400 mb-3">
          <router-link to="/" class="hover:text-amber-400 transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-purple-400 font-semibold">LGU Leadership & Council</span>
        </nav>
        <div class="flex items-center space-x-3 mb-2">
          <span class="w-10 h-10 rounded-2xl bg-purple-600/30 border border-purple-500/50 flex items-center justify-center text-purple-400">
            <Award class="w-5 h-5" />
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
            LGU Leadership & Sangguniang Bayan ng Caluya
          </h1>
        </div>
        <!-- Gene - Oct 06, 2026: Updated Vice Mayor name to Hon. Belfe S. Duran per user verification -->
        <!--
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          The executive and legislative officials of the Municipality of Caluya, Antique. Led by the Office of the Municipal Mayor, Vice Mayor Hon. Genevive L. Reyes, and the 10 honorable members of the Sangguniang Bayan council.
        </p>
        -->
        <!-- Gene - Oct 06, 2026: Updated description to include Municipal Mayor Hon. Rigil Kent G. Lim -->
        <!--
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          The executive and legislative officials of the Municipality of Caluya, Antique. Led by the Office of the Municipal Mayor, Vice Mayor Hon. Belfe S. Duran, and the 10 honorable members of the Sangguniang Bayan council.
        </p>
        -->
        <p class="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          The executive and legislative officials of the Municipality of Caluya, Antique. Led by Municipal Mayor Hon. Rigil Kent G. Lim, Vice Mayor Hon. Belfe S. Duran, and the 10 honorable members of the Sangguniang Bayan council.
        </p>
      </div>
    </div>

    <!-- Main Leadership Content -->
    <LeadershipSection />
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for LeadershipView
import LeadershipSection from '../components/LeadershipSection.vue';
import { Award } from '@lucide/vue';
</script>
