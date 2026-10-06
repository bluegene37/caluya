<!-- Gene - Oct 06, 2026: Vue 3 HomeView page component serving as the central portal hub and directory to individual department pages -->
<template>
  <div class="space-y-0">
    <!-- Hero Slider -->
    <HeroSection 
      @open-proposal="$emit('open-proposal')"
      @navigate="handleHeroNavigate"
    />

    <!-- Quick Department Pages Directory Grid -->
    <section class="py-16 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200 mb-2">
            <Compass class="w-3.5 h-3.5" />
            <span>Multi-Department Portal Directory</span>
          </span>
          <h2 class="text-3xl font-extrabold text-slate-950 tracking-tight">
            Explore Caluya Government Services
          </h2>
          <p class="mt-2 text-sm sm:text-base text-slate-600">
            Dedicated portals for emergency rescue, rural health, social welfare, citizen permits, and island governance.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link
            v-for="dept in departments"
            :key="dept.path"
            :to="dept.path"
            class="group p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-xs', dept.bgClass]">
                  <component :is="dept.icon" :class="['w-6 h-6', dept.iconClass]" />
                </div>
                <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border" :class="dept.badgeClass">
                  {{ dept.badge }}
                </span>
              </div>
              <h3 class="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors flex items-center gap-1.5">
                <span>{{ dept.title }}</span>
                <ArrowRight class="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all text-sky-600" />
              </h3>
              <p class="mt-2 text-xs text-slate-600 leading-relaxed">
                {{ dept.desc }}
              </p>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700 group-hover:text-sky-800">
              <span>Open Dedicated Page</span>
              <span class="font-mono">→</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Gene - Oct 06, 2026: Embedded MobileAppSection directly on Home page per user request -->
    <MobileAppSection />

    <!-- Quick Archipelagic Fact Strip -->
    <section class="py-12 bg-slate-900 text-white border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
          <div class="space-y-1">
            <span class="text-xs font-bold uppercase tracking-widest text-amber-400">Archipelagic Geography</span>
            <h4 class="text-xl font-black text-white">18 Island Barangays</h4>
            <p class="text-xs text-slate-400">Spanning Caluya, Semirara, Sibay, Sibato, and Liwagao islands.</p>
          </div>
          <div class="space-y-1">
            <span class="text-xs font-bold uppercase tracking-widest text-sky-400">Maritime Connectivity</span>
            <h4 class="text-xl font-black text-white">24/7 Sea Lanes & Medevac</h4>
            <p class="text-xs text-slate-400">Continuous marine VHF radio monitoring and gale warning coordination.</p>
          </div>
          <div class="space-y-1">
            <span class="text-xs font-bold uppercase tracking-widest text-emerald-400">Digital Island Vision</span>
            <h4 class="text-xl font-black text-white">Zero-Travel E-Governance</h4>
            <p class="text-xs text-slate-400">Saving residents ~₱15M annually in inter-island pumpboat fares.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for HomeView
// Gene - Oct 06, 2026: Added MobileAppSection import for Home page embedding
/*
import HeroSection from '../components/HeroSection.vue';
*/
import HeroSection from '../components/HeroSection.vue';
import MobileAppSection from '../components/MobileAppSection.vue';
import { 
  Compass, 
  Siren, 
  HeartPulse, 
  Users, 
  FileCheck, 
  Smartphone, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Award,
  ArrowRight
} from '@lucide/vue';

defineEmits(['open-proposal']);

const router = useRouter();

const handleHeroNavigate = (target) => {
  // Map target IDs to route paths
  const routeMap = {
    'rescue': '/rescue',
    'health': '/health',
    'public-services': '/public-services',
    'services': '/services',
    'mobile-app': '/mobile-app',
    'islands': '/islands',
    'tourism': '/tourism',
    'transparency': '/transparency',
    'leadership': '/leadership'
  };

  const path = routeMap[target] || '/';
  router.push(path);
};

const departments = [
  {
    path: '/rescue',
    title: '24/7 Rescue & MDRRMO',
    desc: 'Disaster operations center, real-time gale warning board, emergency hotlines, and sea medevac dispatch.',
    icon: Siren,
    bgClass: 'bg-rose-50 border border-rose-200',
    iconClass: 'text-rose-600',
    badge: 'Emergency 911',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200'
  },
  {
    path: '/health',
    title: 'Municipal Health & RHU',
    desc: 'Rural Health Units (RHU 1 Poblacion & RHU 2 Semirara), free maintenance pharmacy tracker, and doctor schedules.',
    icon: HeartPulse,
    bgClass: 'bg-emerald-50 border border-emerald-200',
    iconClass: 'text-emerald-600',
    badge: 'RHU 1 & RHU 2',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    path: '/public-services',
    title: 'Public Assistance & MSWDO',
    desc: 'Crisis assistance (AICS), Senior Citizens & PWD ID registration, agriculture seed dispersal, and scholarships.',
    icon: Users,
    bgClass: 'bg-indigo-50 border border-indigo-200',
    iconClass: 'text-indigo-600',
    badge: 'Social Welfare',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  {
    path: '/services',
    title: 'Citizen e-Services Hub',
    desc: 'Online e-BPLS business permit simulator, civil registry certificate applications, and RPTax assessment calculator.',
    icon: FileCheck,
    bgClass: 'bg-sky-50 border border-sky-200',
    iconClass: 'text-sky-600',
    badge: 'e-BPLS & Tax',
    badgeClass: 'bg-sky-50 text-sky-700 border-sky-200'
  },
  {
    path: '/mobile-app',
    title: 'Caluya e-Citizen Mobile',
    desc: 'Download the sample Android APK package, preview the interactive smartphone simulator, or install the iOS PWA.',
    icon: Smartphone,
    bgClass: 'bg-amber-50 border border-amber-200',
    iconClass: 'text-amber-600',
    badge: 'Download APK',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    path: '/islands',
    title: '18 Island Barangays',
    desc: 'Archipelagic directory and island guides for Caluya Mainland, Semirara Island, Sibay, Sibato, and Liwagao.',
    icon: MapPin,
    bgClass: 'bg-teal-50 border border-teal-200',
    iconClass: 'text-teal-600',
    badge: 'Barangays',
    badgeClass: 'bg-teal-50 text-teal-700 border-teal-200'
  },
  {
    path: '/tourism',
    title: 'Tatusan Festival & Tourism',
    desc: 'World-renowned coconut crab festival heritage, Liwagao powder sandbars, coral atolls, and eco-traveler guidelines.',
    icon: Sparkles,
    bgClass: 'bg-amber-50 border border-amber-200',
    iconClass: 'text-amber-500',
    badge: 'Eco-Tourism',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    path: '/transparency',
    title: 'Full Disclosure Seal',
    desc: 'DILG Full Disclosure Policy portal, BAC procurement bids, municipal budgets, and Citizen’s Charter standards.',
    icon: ShieldCheck,
    bgClass: 'bg-blue-50 border border-blue-200',
    iconClass: 'text-blue-600',
    badge: 'DILG Portal',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    path: '/leadership',
    title: 'LGU Leadership & Council',
    // Gene - Oct 06, 2026: Updated Vice Mayor name to Hon. Belfe S. Duran per user verification
    /*
    desc: 'Municipal Mayor, Vice Mayor Hon. Genevive L. Reyes, and Sangguniang Bayan councilors and committees.',
    */
    desc: 'Municipal Mayor, Vice Mayor Hon. Belfe S. Duran, and Sangguniang Bayan councilors and committees.',
    icon: Award,
    bgClass: 'bg-purple-50 border border-purple-200',
    iconClass: 'text-purple-600',
    badge: 'Council & Mayor',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200'
  }
];
</script>
