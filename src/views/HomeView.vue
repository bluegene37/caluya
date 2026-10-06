<!-- Gene - Oct 06, 2026: Vue 3 HomeView page component serving as the central portal hub and directory to individual department pages -->
<template>
  <div class="space-y-0">
    <!-- Hero Slider -->
    <HeroSection 
      @open-proposal="$emit('open-proposal')"
      @navigate="handleHeroNavigate"
    />

    <!-- Gene - Oct 06, 2026: Enriched HomeView with 24/7 Citizen Action Strip, Executive Leadership Showcase featuring Vice Mayor Hon. Belfe S. Duran, and 18 Island Barangays Preview -->
    <!--
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

    <MobileAppSection />
    -->

    <!-- Citizen Emergency & Quick Action Bar -->
    <!-- Gene - Oct 06, 2026: Optimized Citizen Emergency bar and Executive Leadership card for mobile screens -->
    <!--
    <section class="bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 text-white py-4 border-b border-slate-800 shadow-inner">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between gap-4 text-xs">
          <div class="flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-wider">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>24/7 Caluya Citizen Direct Lines:</span>
          </div>

          <div class="flex flex-wrap items-center gap-2 sm:gap-4">
            <a 
              href="tel:09987654321" 
              class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-600/30 hover:bg-rose-600/50 border border-rose-500/40 text-rose-200 transition-colors"
            >
              <PhoneCall class="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              <span>MDRRMO 911 Hotline</span>
            </a>

            <router-link 
              to="/rescue" 
              class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-600/30 hover:bg-sky-600/50 border border-sky-500/40 text-sky-200 transition-colors"
            >
              <Waves class="w-3.5 h-3.5 text-sky-400" />
              <span>Live Sea Advisory & Gale Warning</span>
            </router-link>

            <router-link 
              to="/health" 
              class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-200 transition-colors"
            >
              <HeartPulse class="w-3.5 h-3.5 text-emerald-400" />
              <span>RHU 1 & RHU 2 Free Meds Tracker</span>
            </router-link>

            <router-link 
              to="/services" 
              class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/40 text-amber-200 transition-colors"
            >
              <FileCheck class="w-3.5 h-3.5 text-amber-400" />
              <span>Online e-BPLS Simulator</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-sky-950 text-white shadow-xl relative overflow-hidden">
          <div class="absolute -right-16 -bottom-16 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div class="absolute -left-16 -top-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-8 space-y-4">
              <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Award class="w-3.5 h-3.5" />
                <span>Executive & Legislative Leadership • Municipality of Caluya</span>
              </div>

              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Empowering 18 Island Barangays Through Zero-Travel E-Governance
              </h2>

              <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                Led by our Municipal Mayor and <strong class="text-amber-300 font-extrabold">Vice Mayor Hon. Belfe S. Duran</strong> (Presiding Officer of the Sangguniang Bayan), Caluya is championing a landmark legislative initiative to eliminate costly inter-island pumpboat travel and deliver 24/7 emergency rescue, digital permits, and healthcare access directly to all citizens.
              </p>

              <div class="pt-2 flex flex-wrap items-center gap-3">
                <button
                  @click="$emit('open-proposal')"
                  class="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 shadow-lg shadow-amber-400/20 transition-all transform active:scale-95 cursor-pointer"
                >
                  <Sparkles class="w-4 h-4 text-slate-950" />
                  <span>Review Vice Mayor's Modernization Proposal</span>
                  <ArrowRight class="w-4 h-4 ml-1" />
                </button>

                <router-link
                  to="/leadership"
                  class="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
                >
                  <Users class="w-4 h-4 text-sky-400" />
                  <span>Meet the Sangguniang Bayan Council</span>
                </router-link>
              </div>
            </div>
    -->
    <section class="bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 text-white py-3 sm:py-4 border-b border-slate-800 shadow-inner">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 text-xs">
          <div class="flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
            <span class="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>24/7 Citizen Direct Lines:</span>
          </div>

          <div class="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
            <a 
              href="tel:09987654321" 
              class="inline-flex items-center justify-center space-x-1 sm:space-x-1.5 px-2.5 py-1.5 rounded-full bg-rose-600/30 hover:bg-rose-600/50 border border-rose-500/40 text-rose-200 text-[11px] sm:text-xs transition-colors"
            >
              <PhoneCall class="w-3.5 h-3.5 text-rose-400 animate-pulse shrink-0" />
              <span>911 Hotline</span>
            </a>

            <router-link 
              to="/rescue" 
              class="inline-flex items-center justify-center space-x-1 sm:space-x-1.5 px-2.5 py-1.5 rounded-full bg-sky-600/30 hover:bg-sky-600/50 border border-sky-500/40 text-sky-200 text-[11px] sm:text-xs transition-colors"
            >
              <Waves class="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Sea Advisory</span>
            </router-link>

            <router-link 
              to="/health" 
              class="inline-flex items-center justify-center space-x-1 sm:space-x-1.5 px-2.5 py-1.5 rounded-full bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-200 text-[11px] sm:text-xs transition-colors"
            >
              <HeartPulse class="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>RHU Meds</span>
            </router-link>

            <router-link 
              to="/services" 
              class="inline-flex items-center justify-center space-x-1 sm:space-x-1.5 px-2.5 py-1.5 rounded-full bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/40 text-amber-200 text-[11px] sm:text-xs transition-colors"
            >
              <FileCheck class="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>e-BPLS</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Executive Leadership & Sangguniang Bayan Sponsorship Card -->
    <section class="py-8 sm:py-12 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-sky-950 text-white shadow-xl relative overflow-hidden">
          <div class="absolute -right-16 -bottom-16 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div class="absolute -left-16 -top-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div class="lg:col-span-8 space-y-3 sm:space-y-4">
              <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wide uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Award class="w-3.5 h-3.5" />
                <span>Leadership • Municipality of Caluya</span>
              </div>

              <h2 class="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug sm:leading-tight">
                Empowering 18 Island Barangays Through Zero-Travel E-Governance
              </h2>

              <!-- Gene - Oct 06, 2026: Updated proposal banner copy to attribute genexis.dev and proponent Raffy Soquilon presenting for Hon. Belfe S. Duran -->
              <!--
              <p class="text-xs sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                Led by our Municipal Mayor and <strong class="text-amber-300 font-extrabold">Vice Mayor Hon. Belfe S. Duran</strong> (Presiding Officer of the Sangguniang Bayan), Caluya is championing a landmark legislative initiative to eliminate costly inter-island pumpboat travel and deliver 24/7 emergency rescue, digital permits, and healthcare access directly to all citizens.
              </p>

              <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  @click="$emit('open-proposal')"
                  class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 shadow-lg shadow-amber-400/20 transition-all transform active:scale-95 cursor-pointer"
                >
                  <Sparkles class="w-4 h-4 text-slate-950" />
                  <span>Review Vice Mayor's Proposal</span>
                  <ArrowRight class="w-4 h-4 ml-1" />
                </button>

                <router-link
                  to="/leadership"
                  class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
                >
                  <Users class="w-4 h-4 text-sky-400" />
                  <span>Sangguniang Bayan Council</span>
                </router-link>
              </div>
            </div>

            <div class="lg:col-span-4 bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/60 space-y-4">
              <div class="flex items-center space-x-3 pb-3 border-b border-slate-700/60">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md">
                  VM
                </div>
                <div>
                  <div class="text-xs uppercase tracking-wider text-amber-400 font-bold">Municipal Vice Mayor</div>
                  <div class="text-base font-extrabold text-white">Hon. Belfe S. Duran</div>
                  <div class="text-[11px] text-slate-400">Presiding Officer, Sangguniang Bayan</div>
                </div>
              </div>

              <div class="space-y-2 text-xs text-slate-300">
                <div class="flex items-start space-x-2">
                  <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Author & Sponsor of Caluya E-Governance Ordinance of 2026</span>
                </div>
                <div class="flex items-start space-x-2">
                  <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>₱15.2M Annual Travel Expense Relief for Island Residents</span>
                </div>
                <div class="flex items-start space-x-2">
                  <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>100% Full Disclosure & DILG Good Financial Housekeeping</span>
                </div>
              </div>
            </div>
            -->
            <!-- Gene - Oct 06, 2026: Updated narrative to include Municipal Mayor Hon. Rigil Kent G. Lim and simplified button label to 'Proposal' -->
            <!--
            <p class="text-xs sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              Presented for the evaluation of <strong class="text-amber-300 font-extrabold">Vice Mayor Hon. Belfe S. Duran</strong> (Presiding Officer of the Sangguniang Bayan) and the municipal administration, this digital portal by <strong class="text-sky-300 font-bold">genexis.dev</strong> (proponent Raffy Soquilon) connects all 18 island barangays with zero-travel public services, 24/7 sea ambulance dispatch, and disaster alerts.
            </p>

            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                @click="$emit('open-proposal')"
                class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 shadow-lg shadow-amber-400/20 transition-all transform active:scale-95 cursor-pointer"
              >
                <Sparkles class="w-4 h-4 text-slate-950" />
                <span>View genexis.dev Proposal</span>
                <ArrowRight class="w-4 h-4 ml-1" />
              </button>

              <router-link
                to="/leadership"
                class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
              >
                <Users class="w-4 h-4 text-sky-400" />
                <span>Sangguniang Bayan Council</span>
              </router-link>
            </div>
            -->
            <p class="text-xs sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              Presented for the evaluation of Municipal Mayor <strong class="text-white font-extrabold">Hon. Rigil Kent G. Lim</strong>, Vice Mayor <strong class="text-amber-300 font-extrabold">Hon. Belfe S. Duran</strong> (Presiding Officer of the Sangguniang Bayan), and the municipal administration, this digital portal by <strong class="text-sky-300 font-bold">genexis.dev</strong> (proponent Raffy Soquilon) connects all 18 island barangays with zero-travel public services, 24/7 sea ambulance dispatch, and disaster alerts.
            </p>

            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                @click="$emit('open-proposal')"
                class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 shadow-lg shadow-amber-400/20 transition-all transform active:scale-95 cursor-pointer"
              >
                <Sparkles class="w-4 h-4 text-slate-950" />
                <span>Proposal</span>
                <ArrowRight class="w-4 h-4 ml-1" />
              </button>

              <router-link
                to="/leadership"
                class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
              >
                <Users class="w-4 h-4 text-sky-400" />
                <span>Sangguniang Bayan Council</span>
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-4 bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/60 space-y-4">
            <div class="flex items-center space-x-3 pb-3 border-b border-slate-700/60">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md">
                VM
              </div>
              <div>
                <div class="text-xs uppercase tracking-wider text-amber-400 font-bold">Municipal Vice Mayor</div>
                <div class="text-base font-extrabold text-white">Hon. Belfe S. Duran</div>
                <div class="text-[11px] text-slate-400">Presiding Officer, Sangguniang Bayan</div>
              </div>
            </div>

            <div class="space-y-2 text-xs text-slate-300">
              <div class="flex items-start space-x-2">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Target: Zero-Travel Services for 18 Island Barangays</span>
              </div>
              <div class="flex items-start space-x-2">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>₱15M+ Annual Sea Travel Fare Savings for Island Families</span>
              </div>
              <!-- Gene - Oct 06, 2026: Updated technology attribution in HomeView proposal callout to specify Gene Ray Medel of genexis.dev as creator & developer and Raffy Soquilon as proponent -->
              <!--
              <div class="flex items-start space-x-2">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Technology by genexis.dev (Proponent: Raffy Soquilon)</span>
              </div>
              -->
              <div class="flex items-start space-x-2">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Created & Developed by Gene Ray Medel (genexis.dev) • Proponent: Raffy Soquilon</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Multi-Department Portal Directory -->
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

    <!-- 18 Island Barangays Archipelago Spotlight -->
    <section class="py-16 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200 mb-2">
              <MapPin class="w-3.5 h-3.5" />
              <span>Archipelagic Geography</span>
            </span>
            <h2 class="text-3xl font-extrabold text-slate-950 tracking-tight">
              18 Island Barangays of Caluya
            </h2>
            <p class="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              An archipelagic municipality in the northernmost tip of Antique, Western Visayas, divided across 5 major island clusters.
            </p>
          </div>

          <router-link
            to="/islands"
            class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors self-start md:self-auto"
          >
            <span>Explore All 18 Barangays</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="cluster in islandClusters" 
            :key="cluster.name"
            class="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                  Island Cluster
                </span>
                <span class="text-xs font-mono font-bold text-slate-500">5711</span>
              </div>
              <h3 class="text-lg font-bold text-slate-900">{{ cluster.name }}</h3>
              <p class="mt-1 text-xs font-semibold text-teal-700">
                {{ cluster.barangays }}
              </p>
              <p class="mt-3 text-xs text-slate-600 leading-relaxed">
                {{ cluster.desc }}
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-slate-200 flex justify-end">
              <router-link to="/islands" class="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center space-x-1">
                <span>View Details</span>
                <span>→</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Caluya e-Citizen Mobile App Section (Directly embedded on Home page per user request) -->
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
// Gene - Oct 06, 2026: Imported useRouter from vue-router to prevent fatal ReferenceError runtime crash causing empty Home page
/*
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
*/
import { useRouter } from 'vue-router';
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
  ArrowRight,
  PhoneCall,
  Waves,
  Building2,
  Calendar,
  CheckCircle2
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
    // Gene - Oct 06, 2026: Updated Mayor name to Hon. Rigil Kent G. Lim alongside Vice Mayor Hon. Belfe S. Duran
    /*
    desc: 'Municipal Mayor, Vice Mayor Hon. Belfe S. Duran, and Sangguniang Bayan councilors and committees.',
    */
    desc: 'Municipal Mayor Hon. Rigil Kent G. Lim, Vice Mayor Hon. Belfe S. Duran, and Sangguniang Bayan councilors and committees.',
    icon: Award,
    bgClass: 'bg-purple-50 border border-purple-200',
    iconClass: 'text-purple-600',
  }
];

// Gene - Oct 06, 2026: Island clusters summary for Caluya archipelagic geography section
const islandClusters = [
  { name: 'Caluya Mainland', barangays: 'Poblacion, Masanag, Salacay, Harigue, Sabang, Ysulat', desc: 'Seat of Municipal Government, RHU 1, Port of Caluya, and historical center.' },
  { name: 'Semirara Island', barangays: 'Semirara, Tinogboc, Alegria', desc: 'Regional economic catalyst, airstrip, deep-water port, and RHU 2 medical station.' },
  { name: 'Sibay Island', barangays: 'Bacong, Imba, San Jose, Sibay', desc: 'Pristine agricultural hills, mariculture coastlines, and thriving fishing villages.' },
  { name: 'Sibato Island', barangays: 'Sibato', desc: 'Marine sanctuary corridors, coral reefs, and Bantay-Dagat coastal patrol base.' },
  { name: 'Liwagao Island', barangays: 'Liwagao', desc: 'World-renowned white powdery sandbar, crystal turquoise shallows, and coconut groves.' },
];
</script>
