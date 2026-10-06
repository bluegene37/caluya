<!-- Gene - Oct 06, 2026: Vue 3 HeaderNav component with municipal branding and proposal trigger -->
<template>
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo & Municipal Seal Brand -->
        <div class="flex items-center space-x-3 cursor-pointer" @click="handleNavClick('home')">
          <!-- Stylized Official Seal Icon -->
          <div class="relative flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-700 via-sky-600 to-amber-500 p-0.5 shadow-md flex items-center justify-center">
            <div class="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-white relative overflow-hidden border border-amber-300/40">
              <span class="text-[9px] font-bold tracking-widest text-amber-300 uppercase">CALUYA</span>
              <span class="text-base font-extrabold leading-none text-cyan-300">🦀</span>
              <span class="text-[7px] text-sky-200 tracking-wider">ANTIQUE</span>
            </div>
            <div class="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 text-[9px] font-black px-1 rounded-full border border-white">
              5711
            </div>
          </div>

          <!-- Title Text -->
          <div class="flex flex-col">
            <span class="text-[10px] sm:text-xs font-bold text-sky-800 tracking-wider uppercase">
              Republic of the Philippines • Province of Antique
            </span>
            <h1 class="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Municipality of Caluya
            </h1>
            <span class="text-[11px] text-slate-500 hidden sm:inline-block font-medium">
              Official Gateway & E-Governance Platform
            </span>
          </div>
        </div>

        <!-- Desktop Navigation Links -->
        <nav class="hidden xl:flex items-center space-x-1 lg:space-x-2">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="handleNavClick(item.id)"
            :class="[
              'px-3 py-1.5 rounded-lg text-sm font-semibold transition-all',
              activeSection === item.id
                ? 'text-sky-700 bg-sky-50 shadow-xs'
                : 'text-slate-600 hover:text-sky-700 hover:bg-slate-100/70'
            ]"
          >
            {{ item.label }}
          </button>
        </nav>

        <!-- Right Action Buttons -->
        <div class="hidden sm:flex items-center space-x-2.5">
          <!-- Gene - Oct 06, 2026: Added Theme Mode Switcher (Light/Dark Mode toggle) in HeaderNav -->
          <button
            @click="$emit('toggle-theme')"
            class="p-2 rounded-xl border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <Sun v-if="isDark" class="w-4 h-4 text-amber-500 animate-spin" style="animation-duration: 8s;" />
            <Moon v-else class="w-4 h-4 text-slate-700" />
          </button>

          <!-- Modernization Proposal Button (Primary Call-to-Action) -->
          <button
            @click="$emit('open-proposal')"
            class="group relative inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
          >
            <Sparkles class="w-4 h-4 text-amber-300 animate-spin" style="animation-duration: 4s;" />
            <span>LGU Proposal</span>
            <span class="hidden md:inline-block bg-white/20 text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold">
              Review Plan
            </span>
          </button>

          <!-- Quick Emergency Hotline -->
          <a
            href="tel:09987654321"
            class="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors"
            title="Emergency MDRRMO Line"
          >
            <PhoneCall class="w-3.5 h-3.5 text-rose-600 animate-pulse" />
            <span class="hidden md:inline">MDRRMO: </span>
            <span class="font-bold">911</span>
          </a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex sm:hidden items-center space-x-2">
          <button
            @click="$emit('open-proposal')"
            class="px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 flex items-center space-x-1"
          >
            <FileText class="w-3.5 h-3.5" />
            <span>Proposal</span>
          </button>
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            <X v-if="mobileMenuOpen" class="w-6 h-6" />
            <Menu v-else class="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="mobileMenuOpen" class="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
      <button
        v-for="item in navItems"
        :key="item.id"
        @click="handleNavClick(item.id)"
        :class="[
          'block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold',
          activeSection === item.id
            ? 'text-sky-700 bg-sky-50'
            : 'text-slate-700 hover:bg-slate-50'
        ]"
      >
        {{ item.label }}
      </button>
      <div class="pt-3 border-t border-slate-100 flex flex-col space-y-2">
        <!-- Gene - Oct 06, 2026: Added Theme Mode Switcher in mobile drawer -->
        <button
          @click="$emit('toggle-theme')"
          class="w-full py-2.5 rounded-xl text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center space-x-2 border border-slate-300 transition-colors cursor-pointer"
        >
          <Sun v-if="isDark" class="w-4 h-4 text-amber-500 animate-spin" style="animation-duration: 8s;" />
          <Moon v-else class="w-4 h-4 text-slate-700" />
          <span>{{ isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}</span>
        </button>

        <button
          @click="mobileMenuOpen = false; $emit('open-proposal')"
          class="w-full py-2.5 rounded-xl text-sm font-bold text-white bg-indigo-600 flex items-center justify-center space-x-2 shadow-sm"
        >
          <Sparkles class="w-4 h-4 text-amber-300" />
          <span>View LGU Digital Transformation Proposal</span>
        </button>
        <a
          href="tel:09987654321"
          class="w-full py-2 rounded-xl text-sm font-semibold text-rose-700 bg-rose-50 flex items-center justify-center space-x-2 border border-rose-200"
        >
          <PhoneCall class="w-4 h-4" />
          <span>MDRRMO Emergency Hotline (911)</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for HeaderNav
import { ref } from 'vue';
// Gene - Oct 06, 2026: Added Sun & Moon icons, isDark prop (default false for Light Mode), and toggle-theme emit in HeaderNav
// import { Menu, X, FileText, PhoneCall, Sparkles } from '@lucide/vue';
import { Menu, X, FileText, PhoneCall, Sparkles, Sun, Moon } from '@lucide/vue';

// defineProps({
//   activeSection: {
//     type: String,
//     default: 'home'
//   }
// });
// const emit = defineEmits(['open-proposal', 'navigate']);

defineProps({
  isDark: {
    type: Boolean,
    default: false // Default is Light Mode per user specification
  },
  activeSection: {
    type: String,
    default: 'home'
  }
});

const emit = defineEmits(['open-proposal', 'navigate', 'toggle-theme']);

const mobileMenuOpen = ref(false);

// Gene - Oct 06, 2026: Expanded navItems to include 24/7 Rescue, Health Services, and Public Assistance for Caluya citizens
// const navItems = [
//   { id: 'home', label: 'Home' },
//   { id: 'islands', label: '18 Island Barangays' },
//   { id: 'services', label: 'Citizen e-Services' },
//   { id: 'tourism', label: 'Tatusan & Tourism' },
//   { id: 'transparency', label: 'Full Disclosure Seal' },
//   { id: 'leadership', label: 'LGU Leadership' },
// ];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'rescue', label: '🚨 Rescue & MDRRMO' },
  { id: 'health', label: 'Health Services' },
  { id: 'public-services', label: 'Public Assistance' },
  { id: 'services', label: 'Citizen e-Services' },
  { id: 'islands', label: '18 Barangays' },
  { id: 'tourism', label: 'Tourism' },
  { id: 'transparency', label: 'Transparency' },
  { id: 'leadership', label: 'Leadership' },
];

const handleNavClick = (id) => {
  emit('navigate', id);
  mobileMenuOpen.value = false;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
