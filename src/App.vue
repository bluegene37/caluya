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
    <main class="flex-grow">
      <!-- Hero Section -->
      <HeroSection 
        @open-proposal="isProposalOpen = true"
        @navigate="handleNavigate"
      />

      <!-- 24/7 Emergency, Rescue, and MDRRMO/DRRMC Hub -->
      <EmergencyRescueHub />

      <!-- Municipal Health & Rural Health Units (RHU) Services -->
      <HealthServicesHub />

      <!-- Public Assistance & Social Services (MSWDO, Agriculture, PESO) -->
      <PublicServicesDirectory />

      <!-- Citizen e-Services Hub -->
      <ServicesHub />

      <!-- Gene - Oct 06, 2026: Added MobileAppSection for citizen mobile app dummy download and interactive preview -->
      <!--
      <IslandExplorer />
      -->
      <!-- Caluya e-Citizen Mobile App (Downloadable Sample Dummy APK) -->
      <MobileAppSection />

      <!-- 18 Island Barangays Explorer -->
      <IslandExplorer />

      <!-- Tatusan Festival & Eco-Tourism Showcase -->
      <TourismShowcase />

      <!-- Transparency Seal & DILG Full Disclosure -->
      <TransparencySection />

      <!-- Municipal Leadership & Directory -->
      <LeadershipSection />
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

const activeSection = ref('home');
const isProposalOpen = ref(false);
const handleNavigate = (sectionId) => {
  activeSection.value = sectionId;
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
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
