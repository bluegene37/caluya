<!-- Gene - Oct 06, 2026: Vue 3 root application uniting Caluya portal components, proposal modal, and accessibility controls -->
<template>
    <!-- Gene - Oct 06, 2026: Implemented Dark and Light Mode theme toggle (Default is Light Mode: isDark = false) -->
    <!-- 
    :class="[
      'min-h-screen flex flex-col transition-colors selection:bg-amber-400 selection:text-slate-950',
      highContrast ? 'bg-black text-white high-contrast-mode' : 'bg-slate-50 text-slate-900'
    ]"
    <TopBar 
      :high-contrast="highContrast"
      :font-size="fontSize"
      :language="language"
      @toggle-contrast="highContrast = !highContrast"
      @adjust-font="handleAdjustFont"
      @update:language="language = $event"
    />
    -->
    <!-- Gene - Oct 06, 2026: Removed font, contrast, and language selection bindings per user request -->
    <!--
    <div 
      :class="[
        'min-h-screen flex flex-col transition-colors selection:bg-amber-400 selection:text-slate-950',
        isDark ? 'dark dark-theme' : 'light-theme bg-slate-50 text-slate-900',
        highContrast ? 'high-contrast-mode' : ''
      ]"
      :style="{ fontSize: `${fontSize}px` }"
    >
      <TopBar 
        :is-dark="isDark"
        :high-contrast="highContrast"
        :font-size="fontSize"
        :language="language"
        @toggle-theme="toggleTheme"
        @toggle-contrast="highContrast = !highContrast"
        @adjust-font="handleAdjustFont"
        @update:language="language = $event"
      />
    -->
    <div 
      :class="[
        'min-h-screen flex flex-col transition-colors selection:bg-amber-400 selection:text-slate-950',
        isDark ? 'dark dark-theme' : 'light-theme bg-slate-50 text-slate-900'
      ]"
    >
      <!-- Top Utility Bar (PST, Gale warning, Dark/Light Mode) -->
      <TopBar 
        :is-dark="isDark"
        @toggle-theme="toggleTheme"
      />

    <!-- Main Navigation Header -->
    <HeaderNav 
      :is-dark="isDark"
      :active-section="activeSection"
      @toggle-theme="toggleTheme"
      @open-proposal="isProposalOpen = true"
      @navigate="handleNavigate"
    />

    <!-- Main Page Content -->
    <!-- Gene - Oct 06, 2026: Integrated EmergencyRescueHub, HealthServicesHub, and PublicServicesDirectory to provide 24/7 rescue, healthcare, and public assistance -->
    <!-- 
    <main class="flex-grow">
      <HeroSection 
        @open-proposal="isProposalOpen = true"
        @navigate="handleNavigate"
      />
      <IslandExplorer />
      <ServicesHub />
      <TourismShowcase />
      <TransparencySection />
      <LeadershipSection />
    </main> 
    -->
    <!-- Main Page Content -->
    <!-- Gene - Oct 06, 2026: Converted single-page stacked layout into multi-page Vue Router <router-view> per user request -->
    <!--
    <main class="flex-grow">
      <HeroSection 
        @open-proposal="isProposalOpen = true"
        @navigate="handleNavigate"
      />

      <EmergencyRescueHub />
      <HealthServicesHub />
      <PublicServicesDirectory />
      <ServicesHub />
      <MobileAppSection />
      <IslandExplorer />
      <TourismShowcase />
      <TransparencySection />
      <LeadershipSection />
    </main>
    -->
    <main class="flex-grow">
      <router-view @open-proposal="isProposalOpen = true" />
    </main>

    <!-- Footer -->
    <FooterSection 
      @open-proposal="isProposalOpen = true"
      @navigate="handleNavigate"
    />

    <!-- Executive Modernization Proposal Modal -->
    <ProposalModal 
      :is-open="isProposalOpen"
      @close="isProposalOpen = false"
    />
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Main Vue 3 app state setup
import { ref } from 'vue';
import TopBar from './components/TopBar.vue';
import HeaderNav from './components/HeaderNav.vue';
import HeroSection from './components/HeroSection.vue';
// Gene - Oct 06, 2026: Added component imports for EmergencyRescueHub, HealthServicesHub, and PublicServicesDirectory
// import IslandExplorer from './components/IslandExplorer.vue';
// import ServicesHub from './components/ServicesHub.vue';
// import TourismShowcase from './components/TourismShowcase.vue';
// import TransparencySection from './components/TransparencySection.vue';
// import LeadershipSection from './components/LeadershipSection.vue';
// import FooterSection from './components/FooterSection.vue';
// import ProposalModal from './components/ProposalModal.vue';

import EmergencyRescueHub from './components/EmergencyRescueHub.vue';
import HealthServicesHub from './components/HealthServicesHub.vue';
import PublicServicesDirectory from './components/PublicServicesDirectory.vue';
// Gene - Oct 06, 2026: Added MobileAppSection import for citizen mobile app showcase and dummy APK download
/*
import ServicesHub from './components/ServicesHub.vue';
import IslandExplorer from './components/IslandExplorer.vue';
*/
import ServicesHub from './components/ServicesHub.vue';
import MobileAppSection from './components/MobileAppSection.vue';
import IslandExplorer from './components/IslandExplorer.vue';
import TourismShowcase from './components/TourismShowcase.vue';
import TransparencySection from './components/TransparencySection.vue';
import LeadershipSection from './components/LeadershipSection.vue';
import FooterSection from './components/FooterSection.vue';
import ProposalModal from './components/ProposalModal.vue';

// Gene - Oct 06, 2026: Added isDark state (default: false for light mode) and toggleTheme handler
const isDark = ref(false); // Default is Light Mode per user specification
const toggleTheme = () => {
  isDark.value = !isDark.value;
};

// Gene - Oct 06, 2026: Converted in-page scroll handleNavigate to Vue Router multi-page navigation
/*
const activeSection = ref('home');
const handleNavigate = (sectionId) => {
  activeSection.value = sectionId;
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
*/
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

const activeSection = ref('home');
const isProposalOpen = ref(false);

const handleNavigate = (target) => {
  let targetPath = '/';
  if (typeof target === 'string') {
    targetPath = target === 'home' ? '/' : (target.startsWith('/') ? target : `/${target}`);
  } else if (typeof target === 'object' && target.path) {
    targetPath = target.path;
  }
  router.push(targetPath);
};

// Gene - Oct 06, 2026: Removed font, contrast, and language state per user request
/*
const highContrast = ref(false);
const fontSize = ref(16);
const language = ref('en');

const handleAdjustFont = (delta) => {
  fontSize.value = Math.min(22, Math.max(13, fontSize.value + delta));
};
*/
</script>

<style>
/* High contrast accessibility override */
.high-contrast-mode {
  filter: contrast(1.2);
}
.high-contrast-mode .bg-white {
  background-color: #0f172a !important;
  color: #ffffff !important;
}
.high-contrast-mode .text-slate-900,
.high-contrast-mode .text-slate-950 {
  color: #ffffff !important;
}
.high-contrast-mode .text-slate-600,
.high-contrast-mode .text-slate-700 {
  color: #cbd5e1 !important;
}
.high-contrast-mode .bg-slate-50,
.high-contrast-mode .bg-slate-100 {
  background-color: #1e293b !important;
}
</style>
