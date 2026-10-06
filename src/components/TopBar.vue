<!-- Gene - Oct 06, 2026: Vue 3 TopBar component with Philippine Standard Time and accessibility controls -->
<template>
  <div class="bg-slate-900 text-slate-200 text-xs border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
      <!-- Left: Philippine Standard Time & Republic Badge -->
      <div class="flex items-center space-x-3">
        <div class="flex items-center space-x-1.5 text-amber-400 font-semibold tracking-wide">
          <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>PHILIPPINE STANDARD TIME:</span>
        </div>
        <span class="font-mono text-slate-300 font-medium">{{ timeStr || 'Loading PST...' }}</span>
      </div>

      <!-- Center: Live MDRRMO Maritime Weather Advisory -->
      <div class="hidden lg:flex items-center space-x-2 text-sky-300 bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-800/50">
        <Waves class="w-3.5 h-3.5 text-sky-400 animate-bounce" />
        <span class="font-medium">MDRRMO Sea Advisory:</span>
        <span class="text-slate-300">Calm to Moderate Seas (Wave height: 0.8–1.5m). All island sea lanes open.</span>
      </div>

      <!-- Right: Accessibility & Dialect controls -->
      <div class="flex items-center space-x-3">
        <!-- Dialect Selector -->
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

        <!-- Text Size Toggle -->
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

        <!-- Gene - Oct 06, 2026: Added Dark / Light mode toggle button (Default is Light Mode) and kept accessibility contrast -->
        <!-- 
        <button
          @click="$emit('toggle-contrast')"
          :class="[
            'flex items-center space-x-1 px-2 py-0.5 rounded border transition-colors',
            highContrast ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold' : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
          ]"
          title="Toggle High Contrast for Accessibility"
        >
          <Sun class="w-3 h-3" />
          <span class="hidden sm:inline">Contrast</span>
        </button>
        -->

        <!-- Theme Toggle (Light / Dark Mode - Default is Light) -->
        <button
          @click="$emit('toggle-theme')"
          class="flex items-center space-x-1 px-2.5 py-0.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 hover:border-amber-400/60 hover:text-amber-300 transition-all cursor-pointer font-medium"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <Sun v-if="isDark" class="w-3.5 h-3.5 text-amber-400 animate-spin" style="animation-duration: 8s;" />
          <Moon v-else class="w-3.5 h-3.5 text-sky-400" />
          <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>

        <!-- Contrast Toggle -->
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
