<!-- Gene - Oct 06, 2026: Upgraded HeroSection to a Big Hero Image Slider with beautiful text overlays and curated free photos of Caluya Antique -->
<!-- Preserving previous static hero implementation commented out below:
<template>
  <section id="home" class="relative overflow-hidden bg-slate-950 text-white">
    <div class="absolute inset-0 z-0">
      <div 
        class="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay scale-105 transform duration-1000"
        style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80');"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950" />
    </div>
    ...
  </section>
</template>
-->

<template>
  <section 
    id="home" 
    class="relative overflow-hidden bg-slate-950 text-white select-none min-h-[680px] lg:min-h-[780px] flex flex-col justify-between"
    @mouseenter="pauseAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Big Hero Background Carousel -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out',
          currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
        ]"
        :style="{ backgroundImage: `url('${slide.image}')` }"
      >
        <!-- Dark gradient scrims & vignette for maximum text legibility -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/70" />
        <div class="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/90" />
      </div>

      <!-- Subtle background ambient glows -->
      <div class="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
    </div>

    <!-- Main Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24 w-full flex-grow flex flex-col justify-between">
      
      <!-- Top Row: Province Identification & Slide Counter -->
      <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
        <!-- Gene - Oct 06, 2026: Added quick mobile app sample download chip to Hero badges -->
        <!--
        <div class="flex flex-wrap items-center gap-2">
          <span class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-300 border border-sky-400/30 backdrop-blur-md">
            <Anchor class="w-3.5 h-3.5 text-sky-400" />
            <span>Province of Antique • Western Visayas (Region VI)</span>
          </span>
          <span class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
            <ShieldCheck class="w-3.5 h-3.5 text-emerald-400" />
            <span>1st Class Island Municipality</span>
          </span>
        </div>
        -->
        <div class="flex flex-wrap items-center gap-2">
          <span class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-300 border border-sky-400/30 backdrop-blur-md">
            <Anchor class="w-3.5 h-3.5 text-sky-400" />
            <span>Province of Antique • Western Visayas (Region VI)</span>
          </span>
          <span class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
            <ShieldCheck class="w-3.5 h-3.5 text-emerald-400" />
            <span>1st Class Island Municipality</span>
          </span>
          <button
            @click="$emit('navigate', 'mobile-app')"
            class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/40 backdrop-blur-md transition-colors cursor-pointer"
          >
            <Smartphone class="w-3.5 h-3.5 text-amber-400" />
            <span>📱 Download Mobile App (Sample APK)</span>
          </button>
        </div>

        <!-- Slide Index Counter & Pause Indicator -->
        <div class="flex items-center space-x-2 text-xs font-mono font-bold bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700/80 backdrop-blur-md">
          <span class="text-amber-400">0{{ currentSlide + 1 }}</span>
          <span class="text-slate-500">/</span>
          <span class="text-slate-400">0{{ slides.length }}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1"></span>
        </div>
      </div>

      <!-- Middle: Dynamic Slide Headline & Beautiful Text Overlays -->
      <div class="max-w-4xl transition-all duration-700 transform">
        <!-- Active Slide Badge -->
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-400/20 text-amber-300 border border-amber-400/40 backdrop-blur-md mb-4 shadow-sm animate-fadeIn">
          <span>{{ slides[currentSlide].badge }}</span>
        </div>

        <!-- Large Hero Display Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-md">
          {{ slides[currentSlide].title }}
        </h1>

        <!-- Expressive Subtitle -->
        <p class="mt-4 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl leading-relaxed drop-shadow-sm font-normal">
          {{ slides[currentSlide].subtitle }}
        </p>

        <!-- Dynamic Action Buttons for Slide -->
        <div class="mt-8 flex flex-wrap items-center gap-3.5">
          <button
            @click="handlePrimaryAction(slides[currentSlide])"
            class="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-400/25 transition-all transform active:scale-95 cursor-pointer"
          >
            <component :is="slides[currentSlide].primaryIcon" class="w-4 h-4 text-slate-950" />
            <span>{{ slides[currentSlide].primaryCta }}</span>
            <ArrowRight class="w-4 h-4 ml-1" />
          </button>

          <button
            @click="handleSecondaryAction(slides[currentSlide])"
            class="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 hover:border-amber-400/50 shadow-lg backdrop-blur-md transition-all transform active:scale-95 cursor-pointer"
          >
            <Sparkles class="w-4 h-4 text-amber-300" />
            <span>{{ slides[currentSlide].secondaryCta }}</span>
          </button>
        </div>
      </div>

      <!-- Slider Interactive Navigation & Pill Selector -->
      <div class="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-slate-800/70">
        
        <!-- Slide Pills / Tabs -->
        <div class="flex flex-wrap items-center gap-2">
          <button
            v-for="(slide, sIdx) in slides"
            :key="sIdx"
            @click="goToSlide(sIdx)"
            :class="[
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 border cursor-pointer',
              currentSlide === sIdx
                ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md scale-105'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white backdrop-blur-sm'
            ]"
          >
            <span>{{ slide.tabName }}</span>
            <span 
              v-if="currentSlide === sIdx" 
              class="inline-block w-1.5 h-1.5 rounded-full bg-slate-950"
            />
          </button>
        </div>

        <!-- Left / Right Arrow Controls -->
        <div class="flex items-center space-x-2 self-end md:self-auto">
          <button
            @click="prevSlide"
            class="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 text-slate-300 hover:text-white transition-all cursor-pointer backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <ChevronLeft class="w-5 h-5" />
          </button>

          <button
            @click="nextSlide"
            class="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 text-slate-300 hover:text-white transition-all cursor-pointer backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>

      </div>

    </div>

    <!-- Quick Portal Feature Tiles Strip (Docked at Base of Hero) -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          @click="$emit('navigate', 'services')"
          class="cursor-pointer group p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/60 hover:bg-slate-800/80 transition-all backdrop-blur-md shadow-lg"
        >
          <div class="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
            <FileCheck class="w-5 h-5" />
          </div>
          <h3 class="mt-3 text-sm font-bold text-white group-hover:text-sky-300">Online e-BPLS & Certificates</h3>
          <p class="mt-1 text-[11px] text-slate-400 leading-relaxed">
            Renew business permits & request birth records without inter-island travel.
          </p>
        </div>

        <div 
          @click="$emit('navigate', 'rescue')"
          class="cursor-pointer group p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-rose-500/60 hover:bg-slate-800/80 transition-all backdrop-blur-md shadow-lg"
        >
          <div class="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors">
            <Siren class="w-5 h-5 animate-pulse" />
          </div>
          <h3 class="mt-3 text-sm font-bold text-white group-hover:text-rose-300">24/7 Rescue & Sea Medevac</h3>
          <p class="mt-1 text-[11px] text-slate-400 leading-relaxed">
            MDRRMO disaster dispatch, sea ambulance fleet, and gale warning board.
          </p>
        </div>

        <div 
          @click="$emit('navigate', 'tourism')"
          class="cursor-pointer group p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/60 hover:bg-slate-800/80 transition-all backdrop-blur-md shadow-lg"
        >
          <div class="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
            <span class="text-base">🦀</span>
          </div>
          <h3 class="mt-3 text-sm font-bold text-white group-hover:text-amber-300">Tatusan & Island Tourism</h3>
          <p class="mt-1 text-[11px] text-slate-400 leading-relaxed">
            Coconut crab festival heritage, Liwagao sandbar & seaweed farms.
          </p>
        </div>

        <div 
          @click="$emit('navigate', 'health')"
          class="cursor-pointer group p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/60 hover:bg-slate-800/80 transition-all backdrop-blur-md shadow-lg"
        >
          <div class="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
            <HeartPulse class="w-5 h-5" />
          </div>
          <h3 class="mt-3 text-sm font-bold text-white group-hover:text-emerald-300">RHU Healthcare & Free Meds</h3>
          <p class="mt-1 text-[11px] text-slate-400 leading-relaxed">
            24/7 birthing clinics, doctor consults, and free maintenance pharmacy.
          </p>
        </div>
      </div>

      <!-- Civic Metrics Strip -->
      <div class="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <div class="text-2xl lg:text-3xl font-extrabold text-amber-400 font-mono">18</div>
          <div class="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Island Barangays</div>
        </div>
        <div>
          <div class="text-2xl lg:text-3xl font-extrabold text-sky-400 font-mono">42,895+</div>
          <div class="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Resilient Citizens</div>
        </div>
        <div>
          <div class="text-2xl lg:text-3xl font-extrabold text-teal-400 font-mono">307,680 ha</div>
          <div class="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Municipal Waters</div>
        </div>
        <div>
          <div class="text-2xl lg:text-3xl font-extrabold text-emerald-400 font-mono">1st Class</div>
          <div class="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Island Municipality</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for Big Hero Image Slider with Caluya Antique imagery
import { ref, onMounted, onUnmounted } from 'vue';
// Gene - Oct 06, 2026: Added Smartphone icon import for mobile app badge
/*
import { 
  Anchor, ShieldCheck, FileCheck, ArrowRight, Sparkles, 
  Compass, Waves, ChevronLeft, ChevronRight, Siren, HeartPulse, Ship 
} from '@lucide/vue';
*/
import { 
  Anchor, ShieldCheck, FileCheck, ArrowRight, Sparkles, 
  Compass, Waves, ChevronLeft, ChevronRight, Siren, HeartPulse, Ship,
  Smartphone
} from '@lucide/vue';

const emit = defineEmits(['navigate', 'open-proposal']);

const currentSlide = ref(0);
let timer = null;

// Curated high-resolution royalty-free photos depicting Caluya, Antique landmarks & themes
const slides = [
  {
    tabName: "Liwagao Sandbar",
    badge: "🏝️ Eco-Tourism Jewel • Liwagao Island Sandbar",
    title: "Pristine Sandbars & Crystal Waters of Caluya",
    subtitle: "Where blinding white powdery sands meet the radiant turquoise tides of the Tablas Strait and Sulu Sea.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85",
    primaryCta: "Discover 18 Island Barangays",
    primaryIcon: Compass,
    primaryTarget: "islands",
    secondaryCta: "Review Modernization Plan",
    secondaryTarget: "proposal"
  },
  {
    tabName: "Tatusan Festival",
    badge: "🦀 Cultural Heritage • Home of the Tatusan Festival",
    title: "Honoring the Prized Coconut Crab ('Tatus')",
    subtitle: "Celebrated every May in Poblacion with high-energy tribal street dancing, paraw regattas, and marine conservation.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2200&q=85",
    primaryCta: "Explore Tatusan Culture",
    primaryIcon: Sparkles,
    primaryTarget: "tourism",
    secondaryCta: "View Conservation Rules",
    secondaryTarget: "transparency"
  },
  {
    tabName: "Semirara Island",
    badge: "⚡ Economic Powerhouse • Semirara Island Cluster",
    title: "Industrial Vitality & Coastal Resiliency",
    subtitle: "Powering regional energy progress while fostering vibrant island fisherfolk communities and rich marine reserves.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=85",
    primaryCta: "Semirara Public Services",
    primaryIcon: FileCheck,
    primaryTarget: "public-services",
    secondaryCta: "24/7 Island Rescue (911)",
    secondaryTarget: "rescue"
  },
  {
    tabName: "Coral Sanctuaries",
    badge: "🤿 Marine Protected Corridors • Sibato & Sibay Islets",
    title: "Kaleidoscopic Coral Gardens & Sea Turtles",
    subtitle: "Pristine reef sanctuaries strictly safeguarded by our dedicated Bantay-Dagat coastal guardians.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2200&q=85",
    primaryCta: "MDRRMO Sea Safety Board",
    primaryIcon: Waves,
    primaryTarget: "rescue",
    secondaryCta: "Eco-Tour Guidelines",
    secondaryTarget: "tourism"
  },
  {
    tabName: "Agar-Agar Mariculture",
    badge: "🌾 Island Mariculture • Premier Seaweed Capital",
    title: "World-Class Seaweed Farming in Clear Lagoons",
    subtitle: "Thousands of floating lines of Eucheuma seaweed sustaining generations of hardworking island fisherfolk families.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2200&q=85",
    primaryCta: "Fisherfolk & Farmer Aid",
    primaryIcon: Anchor,
    primaryTarget: "public-services",
    secondaryCta: "Citizen e-Permits",
    secondaryTarget: "services"
  },
  {
    tabName: "Sunset Sea Lanes",
    badge: "⚓ Smart Island Governance • Province of Antique",
    title: "Bridging Our Islands Through Modern E-Governance",
    subtitle: "Zero-travel municipal certificates, real-time sea medevac dispatch, and complete public financial transparency.",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=2200&q=85",
    primaryCta: "Access Citizen e-Services",
    primaryIcon: FileCheck,
    // Gene - Oct 06, 2026: Updated CTA to highlight Vice Mayor Proposal
    // secondaryCta: "View LGU Proposal",
    secondaryCta: "Vice Mayor Proposal",
    secondaryTarget: "proposal"
  }
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const startAutoplay = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(nextSlide, 5500);
};

const pauseAutoplay = () => {
  if (timer) clearInterval(timer);
};

const handlePrimaryAction = (slide) => {
  if (slide.primaryTarget === 'proposal') {
    emit('open-proposal');
  } else {
    emit('navigate', slide.primaryTarget);
  }
};

const handleSecondaryAction = (slide) => {
  if (slide.secondaryTarget === 'proposal') {
    emit('open-proposal');
  } else {
    emit('navigate', slide.secondaryTarget);
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  pauseAutoplay();
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.4s ease-out forwards;
}
</style>
