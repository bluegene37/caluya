<!-- Gene - Oct 06, 2026: Vue 3 TopBar component with Philippine Standard Time and accessibility controls -->
<template>
  <div class="bg-slate-900 text-slate-200 text-xs border-b border-slate-800">
    <!-- Gene - Oct 06, 2026: Expanded top bar width to match expanded header nav -->
    <!--
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
    -->
    <!-- Gene - Oct 06, 2026: Reverted TopBar width from excessively wide 1850px back to max-w-7xl -->
    <!--
    <div class="w-full max-w-[1850px] mx-auto px-2.5 sm:px-4 lg:px-6 py-1.5 flex flex-wrap items-center justify-between gap-2">
    -->
    <!-- Gene - Oct 06, 2026: Prevented top bar from wrapping by using flex items-center justify-between and responsive text -->
    <!--
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
      <div class="flex items-center space-x-3">
        <div class="flex items-center space-x-1.5 text-amber-400 font-semibold tracking-wide">
          <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>PHILIPPINE STANDARD TIME:</span>
        </div>
        <span class="font-mono text-slate-300 font-medium">{{ timeStr || 'Loading PST...' }}</span>
      </div>

      <router-link
        to="/rescue"
        class="hidden lg:flex items-center space-x-2 text-sky-300 bg-sky-950/60 hover:bg-sky-900/80 px-2.5 py-0.5 rounded-full border border-sky-800/50 transition-colors cursor-pointer"
        title="View 24/7 Rescue & Sea Advisory Page"
      >
        <Waves class="w-3.5 h-3.5 text-sky-400 animate-bounce" />
        <span class="font-medium">MDRRMO Sea Advisory:</span>
        <span class="text-slate-300">Calm to Moderate Seas (Wave height: 0.8–1.5m). All island sea lanes open.</span>
        <span class="text-[10px] text-amber-400 font-bold ml-1">View Live Board →</span>
      </router-link>
    -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-2 overflow-hidden">
      <!-- Left: Philippine Standard Time & Republic Badge -->
      <div class="flex items-center space-x-2 sm:space-x-3 shrink-0">
        <div class="flex items-center space-x-1.5 text-amber-400 font-semibold tracking-wide text-[11px] sm:text-xs">
          <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="hidden sm:inline">PHILIPPINE STANDARD TIME:</span>
          <span class="sm:hidden">PST:</span>
        </div>
        <span class="font-mono text-slate-300 font-medium text-[11px] sm:text-xs">{{ timeStr || 'Loading PST...' }}</span>
      </div>

      <!-- Center: Live MDRRMO Maritime Weather Advisory -->
      <router-link
        to="/rescue"
        class="hidden md:flex items-center space-x-2 text-sky-300 bg-sky-950/60 hover:bg-sky-900/80 px-2.5 py-0.5 rounded-full border border-sky-800/50 transition-colors cursor-pointer shrink-0 truncate max-w-md lg:max-w-xl"
        title="View 24/7 Rescue & Sea Advisory Page"
      >
        <Waves class="w-3.5 h-3.5 text-sky-400 animate-bounce shrink-0" />
        <span class="font-medium text-[11px] shrink-0">MDRRMO Sea Advisory:</span>
        <span class="text-slate-300 text-[11px] hidden xl:inline truncate">Calm Seas (0.8–1.5m). Sea lanes open.</span>
        <span class="text-[10px] text-amber-400 font-bold ml-1 shrink-0">Live Board →</span>
      </router-link>

      <!-- Gene - Oct 06, 2026: Removed font, contrast, and language selection controls per user request, retaining Light/Dark theme toggle -->
      <!--
      <div class="flex items-center space-x-3">
        <div class="flex items-center space-x-1">
          <label for="lang-select" class="text-slate-400 hidden sm:inline">Language:</label>
          <select
            id="lang-select"
            :value="language"
            @change="$emit('update:language', $event.target.value)"
            class="bg-slate-800 text-slate-200 border border-slate-700 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-amber-400"
          >
            <option value="en">English</option>
            <option value="kr">Kinaray-a / Hiligaynon</option>
            <option value="tg">Tagalog / Filipino</option>
          </select>
        </div>

        <div class="flex items-center space-x-1 bg-slate-800 rounded px-1.5 py-0.5 border border-slate-700">
          <button
            @click="$emit('adjust-font', -1)"
            class="px-1 hover:text-amber-400 font-bold"
            title="Decrease text size"
          >
            A-
          </button>
          <span class="text-slate-500">|</span>
          <button
            @click="$emit('adjust-font', 1)"
            class="px-1 hover:text-amber-400 font-bold"
            title="Increase text size"
          >
            A+
          </button>
        </div>

        <button
          @click="$emit('toggle-theme')"
          class="flex items-center space-x-1 px-2.5 py-0.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400/60 hover:text-amber-300 transition-all cursor-pointer font-medium"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <Sun v-if="isDark" class="w-3.5 h-3.5 text-amber-400 animate-spin" style="animation-duration: 8s;" />
          <Moon v-else class="w-3.5 h-3.5 text-sky-400" />
          <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>

        <button
          @click="$emit('toggle-contrast')"
          :class="[
            'flex items-center space-x-1 px-2 py-0.5 rounded border transition-colors cursor-pointer',
            highContrast ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold' : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
          ]"
          title="Toggle High Contrast for Accessibility"
        >
          <span class="text-[10px] font-bold">Contrast</span>
        </button>
      </div>
      -->

      <!-- Right: Clean Theme Toggle Only (Light / Dark Mode - placed on the right) -->
      <div class="flex items-center space-x-3 ml-auto shrink-0">
        <button
          @click="$emit('toggle-theme')"
          class="flex items-center space-x-1.5 px-3 py-1 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400/60 hover:text-amber-300 transition-all cursor-pointer text-xs font-semibold"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <Sun v-if="isDark" class="w-3.5 h-3.5 text-amber-400 animate-spin" style="animation-duration: 8s;" />
          <Moon v-else class="w-3.5 h-3.5 text-sky-400" />
          <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for TopBar
import { ref, onMounted, onUnmounted } from 'vue';
// Gene - Oct 06, 2026: Added Moon icon import, isDark prop (default false for Light Mode), and toggle-theme emit
// import { Waves, Sun } from '@lucide/vue';
import { Waves, Sun, Moon } from '@lucide/vue';

// defineProps({
//   highContrast: {
//     type: Boolean,
//     default: false
//   },
//   fontSize: {
//     type: Number,
//     default: 16
//   },
//   language: {
//     type: String,
//     default: 'en'
//   }
// });
// defineEmits(['toggle-contrast', 'adjust-font', 'update:language']);

// Gene - Oct 06, 2026: Cleaned props and emits removing highContrast, fontSize, and language
/*
defineProps({
  isDark: {
    type: Boolean,
    default: false // Default is Light Mode per user specification
  },
  highContrast: {
    type: Boolean,
    default: false
  },
  fontSize: {
    type: Number,
    default: 16
  },
  language: {
    type: String,
    default: 'en'
  }
});

defineEmits(['toggle-theme', 'toggle-contrast', 'adjust-font', 'update:language']);
*/
defineProps({
  isDark: {
    type: Boolean,
    default: false // Default is Light Mode per user specification
  }
});

defineEmits(['toggle-theme']);

const timeStr = ref('');
let timer = null;

const updateTime = () => {
  const now = new Date();
  const options = {
    timeZone: 'Asia/Manila',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  timeStr.value = now.toLocaleString('en-PH', options) + ' PST';
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
