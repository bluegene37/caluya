<!-- Gene - Oct 06, 2026: Vue 3 MobileAppSection component with interactive phone mockup, dummy APK download, QR code, and offline island capabilities -->
<template>
  <section id="mobile-app" class="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
    <!-- Subtle Background Ambient Glows -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-3 backdrop-blur-md">
          <Smartphone class="w-3.5 h-3.5 text-sky-400" />
          <span>LGU Smart Island Mobile Application</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Caluya e-Citizen Mobile
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
          <strong class="text-amber-300 font-semibold">"Ang LGU sa Imong Palad"</strong> — Municipal services, 24/7 rescue SOS, and real-time sea gale advisories tailored for the 18 island barangays with offline mesh capabilities.
        </p>
      </div>

      <!-- Main Showcase Grid: Download Card & Interactive Phone Mockup -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Download Actions & App Highlights (7 Cols) -->
        <div class="lg:col-span-7 space-y-8">
          
          <!-- Key Value Pillars -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm space-y-1.5">
              <div class="flex items-center space-x-2.5 text-amber-400 font-bold text-sm">
                <WifiOff class="w-4 h-4 shrink-0" />
                <span>Offline-First Island Mode</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                Works even when inter-island fiber or cellular data drops during severe monsoon rains. Caches emergency directories and forms locally.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm space-y-1.5">
              <div class="flex items-center space-x-2.5 text-rose-400 font-bold text-sm">
                <Radio class="w-4 h-4 shrink-0" />
                <span>One-Tap Maritime SOS</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                Instantly transmits GPS coordinates to the MDRRMO Emergency Command Center & Coast Guard Sub-station Caluya via SMS fallback.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm space-y-1.5">
              <div class="flex items-center space-x-2.5 text-sky-400 font-bold text-sm">
                <Bell class="w-4 h-4 shrink-0" />
                <span>Live Gale & Sea Advisories</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                Receive prompt notifications before traveling by pumpboat between Caluya, Semirara, Sibay, Sibato, and mainland Antique.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm space-y-1.5">
              <div class="flex items-center space-x-2.5 text-emerald-400 font-bold text-sm">
                <ShieldCheck class="w-4 h-4 shrink-0" />
                <span>Digital Island Resident e-ID</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                Tamper-proof QR-coded municipal ID for faster barangay clearances, senior subsidies, and local fuel/ferry fare discounts.
              </p>
            </div>
          </div>

          <!-- Download Action Card -->
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-800/95 to-slate-900 border-2 border-sky-500/40 shadow-2xl relative overflow-hidden">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-700">
              <div class="flex items-center space-x-3.5">
                <div class="w-14 h-14 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 to-amber-400 shadow-lg shrink-0">
                  <img
                    src="/images/caluya-logo.png"
                    alt="Caluya e-Citizen Logo"
                    class="w-full h-full rounded-xl object-contain bg-slate-950 p-0.5"
                  />
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span>Caluya e-Citizen App</span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono font-bold border border-amber-400/40">
                      v1.0.4-beta
                    </span>
                  </h3>
                  <!-- Gene - Oct 06, 2026: Updated reference to Office of Mayor Hon. Rigil Kent G. Lim -->
                  <!--
                  <p class="text-xs text-slate-400">
                    Official Prototype Package • Office of the Mayor & Sangguniang Bayan
                  </p>
                  -->
                  <p class="text-xs text-slate-400">
                    Official Prototype Package • Office of Mayor Hon. Rigil Kent G. Lim & Sangguniang Bayan
                  </p>
                </div>
              </div>

              <div class="text-left sm:text-right shrink-0">
                <span class="text-[11px] text-slate-400 block font-mono">Package Size: ~601 KB</span>
                <span class="text-[11px] text-emerald-400 font-semibold block">Android 8.0+ / iOS PWA</span>
              </div>
            </div>

            <!-- Download Buttons & QR Code -->
            <div class="pt-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              
              <!-- Direct Download Android Button -->
              <div class="sm:col-span-8 space-y-3">
                <a
                  href="/downloads/caluya-citizen-app-v1.0.apk"
                  download="caluya-citizen-app-v1.0.apk"
                  @click="handleDownloadClick"
                  class="w-full inline-flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-600 hover:from-emerald-600 hover:to-sky-700 text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-emerald-500/25 transition-all transform active:scale-98 cursor-pointer"
                >
                  <Download class="w-5 h-5 text-white animate-bounce" />
                  <div class="text-left">
                    <span class="block text-xs uppercase tracking-wider font-medium opacity-90">Direct Download Sample</span>
                    <span class="block text-sm sm:text-base font-black">Download Android APK (.apk)</span>
                  </div>
                </a>

                <!-- Alternative iOS Web App / PWA -->
                <button
                  @click="showIosModal = true"
                  class="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Sparkles class="w-3.5 h-3.5 text-amber-400" />
                  <span>iPhone / iPad User? Add to Home Screen (PWA Guide)</span>
                </button>
              </div>

              <!-- QR Code Mockup (4 cols) -->
              <div class="sm:col-span-4 flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-center">
                <div class="w-24 h-24 bg-white rounded-xl p-1.5 shadow-md flex items-center justify-center">
                  <!-- Vector QR Code representation -->
                  <svg class="w-full h-full text-slate-950" viewBox="0 0 100 100" fill="currentColor">
                    <!-- Top-left finder pattern -->
                    <rect x="5" y="5" width="28" height="28" rx="4" />
                    <rect x="9" y="9" width="20" height="20" fill="white" rx="2" />
                    <rect x="13" y="13" width="12" height="12" rx="1" />
                    <!-- Top-right finder pattern -->
                    <rect x="67" y="5" width="28" height="28" rx="4" />
                    <rect x="71" y="9" width="20" height="20" fill="white" rx="2" />
                    <rect x="75" y="13" width="12" height="12" rx="1" />
                    <!-- Bottom-left finder pattern -->
                    <rect x="5" y="67" width="28" height="28" rx="4" />
                    <rect x="9" y="71" width="20" height="20" fill="white" rx="2" />
                    <rect x="13" y="75" width="12" height="12" rx="1" />
                    <!-- Mock data modules -->
                    <rect x="38" y="10" width="8" height="8" />
                    <rect x="50" y="15" width="8" height="8" />
                    <rect x="38" y="25" width="8" height="8" />
                    <rect x="10" y="40" width="8" height="8" />
                    <rect x="25" y="45" width="8" height="8" />
                    <rect x="42" y="42" width="16" height="16" rx="2" fill="#0284c7" />
                    <rect x="65" y="40" width="8" height="8" />
                    <rect x="80" y="45" width="8" height="8" />
                    <rect x="38" y="65" width="8" height="8" />
                    <rect x="52" y="72" width="8" height="8" />
                    <rect x="70" y="68" width="10" height="10" />
                    <rect x="82" y="82" width="8" height="8" />
                  </svg>
                </div>
                <span class="text-[10px] text-slate-300 font-bold mt-2 flex items-center gap-1">
                  <QrCode class="w-3 h-3 text-sky-400" />
                  <span>Scan to Download</span>
                </span>
                <span class="text-[9px] text-slate-500">Android direct APK</span>
              </div>

            </div>

            <!-- Prototype Notice -->
            <div class="mt-4 pt-3 border-t border-slate-700/60 flex items-start space-x-2 text-[11px] text-slate-400">
              <AlertTriangle class="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Evaluation Prototype:</strong> This is a sample demonstration APK package (Build 2026.10.06) prepared for LGU review and stakeholder testing prior to the public Google Play Store launch.
              </span>
            </div>

          </div>

        </div>

        <!-- Right: Interactive Mobile Phone Simulator Mockup (5 Cols) -->
        <div class="lg:col-span-5 flex justify-center">
          
          <!-- Smartphone Outer Chassis -->
          <div class="w-full max-w-[340px] rounded-[44px] bg-slate-950 p-3.5 border-4 border-slate-700/80 shadow-2xl relative">
            
            <!-- Side Buttons Mockup -->
            <div class="absolute -left-[7px] top-24 w-1 h-12 bg-slate-700 rounded-l-md" />
            <div class="absolute -left-[7px] top-40 w-1 h-12 bg-slate-700 rounded-l-md" />
            <div class="absolute -right-[7px] top-28 w-1 h-16 bg-slate-700 rounded-r-md" />

            <!-- Phone Screen Glass -->
            <div class="rounded-[36px] bg-slate-900 border border-slate-800 overflow-hidden flex flex-col h-[610px] select-none text-slate-100">
              
              <!-- Dynamic Island / Top Notch & Status Bar -->
              <div class="bg-slate-950 px-5 pt-3 pb-2 flex items-center justify-between text-[11px] font-semibold text-slate-300 border-b border-slate-800/80">
                <span>17:05</span>
                <!-- Dynamic Pill -->
                <div class="w-20 h-4 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center">
                  <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                  <span class="text-[8px] font-mono text-sky-400">Caluya SOS</span>
                </div>
                <div class="flex items-center space-x-1 font-mono text-[10px]">
                  <span>4G</span>
                  <span>•</span>
                  <span>98%</span>
                </div>
              </div>

              <!-- App Header in Screen -->
              <div class="bg-gradient-to-r from-sky-900 to-indigo-950 p-3.5 border-b border-sky-800/60 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <img
                    src="/images/caluya-logo.png"
                    alt="Logo"
                    class="w-8 h-8 rounded-full bg-white p-0.5 object-contain"
                  />
                  <div>
                    <h4 class="text-xs font-bold leading-tight text-white">e-Caluya Citizen</h4>
                    <span class="text-[9px] text-amber-300 font-medium">Bayan ng Caluya, Antique</span>
                  </div>
                </div>
                <span class="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-semibold">
                  Online
                </span>
              </div>

              <!-- Interactive Screen Tabs Content Area -->
              <div class="flex-1 overflow-y-auto p-3.5 space-y-3 bg-slate-950/60">
                
                <!-- Screen 1: Dashboard & Emergency (activeScreen === 'home') -->
                <div v-if="activeScreen === 'home'" class="space-y-3 animate-fadeIn">
                  <!-- Red Maritime SOS Trigger -->
                  <div 
                    @click="triggerDummySos"
                    class="p-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-700 text-white shadow-lg cursor-pointer transform active:scale-95 transition-all text-center border border-rose-400/40"
                  >
                    <div class="flex items-center justify-center space-x-2">
                      <Radio class="w-5 h-5 text-white animate-pulse" />
                      <span class="font-black text-sm uppercase tracking-wider">TAP FOR MARITIME SOS</span>
                    </div>
                    <span class="text-[10px] text-rose-100 opacity-90 block mt-0.5">
                      Transmits GPS to MDRRMO & PCG Caluya
                    </span>
                  </div>

                  <!-- Sea Condition Widget -->
                  <div class="p-3 rounded-xl bg-slate-900 border border-sky-500/30 flex items-center justify-between">
                    <div>
                      <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">Sea Lane Status</span>
                      <span class="text-xs font-bold text-white">Calm • All bancas cleared</span>
                    </div>
                    <span class="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                      Open
                    </span>
                  </div>

                  <!-- Quick Service Shortcuts Grid -->
                  <div class="grid grid-cols-2 gap-2 text-xs">
                    <button 
                      @click="activeScreen = 'id'"
                      class="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 flex flex-col items-center text-center space-y-1 cursor-pointer"
                    >
                      <ShieldCheck class="w-5 h-5 text-amber-400" />
                      <span class="font-bold text-[11px]">Digital ID</span>
                      <span class="text-[9px] text-slate-400">Citizen QR</span>
                    </button>

                    <button 
                      @click="activeScreen = 'meds'"
                      class="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 flex flex-col items-center text-center space-y-1 cursor-pointer"
                    >
                      <HeartPulse class="w-5 h-5 text-rose-400" />
                      <span class="font-bold text-[11px]">RHU Meds</span>
                      <span class="text-[9px] text-slate-400">Stock Check</span>
                    </button>
                  </div>

                  <!-- Recent Municipal Notice -->
                  <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px]">
                    <!-- Gene - Oct 06, 2026: Updated notice title to specify Office of Mayor Hon. Rigil Kent G. Lim -->
                    <!--
                    <span class="text-[9px] text-amber-300 font-bold uppercase tracking-wider block">Notice from Mayor's Office</span>
                    -->
                    <span class="text-[9px] text-amber-300 font-bold uppercase tracking-wider block">Notice from Office of Mayor Hon. Rigil Kent G. Lim</span>
                    <p class="text-slate-300 mt-0.5 text-[10.5px]">
                      Weekly mobile health mission arrives in Sibay Island this Thursday. Bring your PhilHealth / Caluya e-ID.
                    </p>
                  </div>
                </div>

                <!-- Screen 2: Digital Resident ID (activeScreen === 'id') -->
                <div v-else-if="activeScreen === 'id'" class="space-y-3 animate-fadeIn">
                  <div class="p-4 rounded-2xl bg-gradient-to-tr from-amber-500 via-sky-600 to-indigo-800 text-white shadow-xl border border-amber-300/40 relative overflow-hidden">
                    <div class="flex items-center justify-between border-b border-white/20 pb-2 mb-3">
                      <div>
                        <span class="text-[8px] font-bold tracking-widest uppercase block opacity-80">Republika ng Pilipinas</span>
                        <span class="text-xs font-black uppercase tracking-wider">Caluya Resident e-ID</span>
                      </div>
                      <img src="/images/caluya-logo.png" class="w-7 h-7 rounded-full bg-white p-0.5" />
                    </div>

                    <div class="flex items-center space-x-3">
                      <div class="w-14 h-16 rounded-lg bg-slate-900/60 border border-white/30 flex flex-col items-center justify-center text-center p-1">
                        <span class="text-lg">🧑‍💼</span>
                        <span class="text-[7px] text-slate-200 mt-1">VERIFIED</span>
                      </div>
                      <div class="space-y-0.5">
                        <div class="text-[9px] opacity-75">Full Name</div>
                        <div class="text-xs font-black tracking-wide">JUAN DELA CRUZ</div>
                        <div class="text-[9px] opacity-75 mt-1">Barangay & Island</div>
                        <div class="text-[10px] font-bold text-amber-200">Poblacion, Caluya</div>
                        <div class="text-[8px] font-mono opacity-80">ID: CAL-2026-98124</div>
                      </div>
                    </div>

                    <!-- Mock QR in ID -->
                    <div class="mt-3 pt-2 border-t border-white/20 flex items-center justify-between">
                      <span class="text-[8px] font-mono text-amber-200">SECURE DIGITALLY ENCRYPTED</span>
                      <QrCode class="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] text-slate-300 text-center">
                    Valid for all 18 Island Barangays • RPTax Discounts • Ferry Subsidy
                  </div>

                  <button
                    @click="activeScreen = 'home'"
                    class="w-full py-1.5 text-center text-xs text-sky-400 font-bold hover:underline"
                  >
                    ← Back to Dashboard
                  </button>
                </div>

                <!-- Screen 3: RHU Medicine Stock (activeScreen === 'meds') -->
                <div v-else-if="activeScreen === 'meds'" class="space-y-2.5 animate-fadeIn">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-white">RHU Free Medicines</span>
                    <span class="text-[9px] text-emerald-400 font-bold">RHU 1 & RHU 2 Stock</span>
                  </div>

                  <div class="space-y-2 text-xs">
                    <div class="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <strong class="block text-white text-[11px]">Amlodipine 5mg</strong>
                        <span class="text-[9px] text-slate-400">Hypertension</span>
                      </div>
                      <span class="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">In Stock</span>
                    </div>

                    <div class="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <strong class="block text-white text-[11px]">Amoxicillin 500mg</strong>
                        <span class="text-[9px] text-slate-400">Antibiotic</span>
                      </div>
                      <span class="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">In Stock</span>
                    </div>

                    <div class="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <strong class="block text-white text-[11px]">Tetanus Toxoid / Anti-Venom</strong>
                        <span class="text-[9px] text-slate-400">Emergency Sea Sting</span>
                      </div>
                      <span class="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">Limited (RHU 1)</span>
                    </div>
                  </div>

                  <button
                    @click="activeScreen = 'home'"
                    class="w-full py-1.5 text-center text-xs text-sky-400 font-bold hover:underline"
                  >
                    ← Back to Dashboard
                  </button>
                </div>

              </div>

              <!-- Phone Bottom App Navigation Bar -->
              <div class="bg-slate-950 border-t border-slate-800/80 px-4 py-2.5 flex items-center justify-around text-slate-400">
                <button 
                  @click="activeScreen = 'home'"
                  :class="['flex flex-col items-center cursor-pointer', activeScreen === 'home' ? 'text-sky-400' : '']"
                >
                  <Smartphone class="w-4 h-4" />
                  <span class="text-[8px] mt-0.5">Home</span>
                </button>

                <button 
                  @click="activeScreen = 'id'"
                  :class="['flex flex-col items-center cursor-pointer', activeScreen === 'id' ? 'text-sky-400' : '']"
                >
                  <ShieldCheck class="w-4 h-4" />
                  <span class="text-[8px] mt-0.5">e-ID</span>
                </button>

                <button 
                  @click="activeScreen = 'meds'"
                  :class="['flex flex-col items-center cursor-pointer', activeScreen === 'meds' ? 'text-sky-400' : '']"
                >
                  <HeartPulse class="w-4 h-4" />
                  <span class="text-[8px] mt-0.5">Health</span>
                </button>
              </div>

              <!-- Home Indicator Bar -->
              <div class="bg-slate-950 pb-1.5 flex justify-center">
                <div class="w-28 h-1 bg-slate-700 rounded-full" />
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>

    <!-- iOS PWA Help Modal -->
    <div v-if="showIosModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div class="bg-slate-900 border border-slate-700 max-w-md w-full rounded-3xl p-6 shadow-2xl text-white space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center space-x-2">
            <Sparkles class="w-5 h-5 text-amber-400" />
            <h4 class="font-bold text-base">Install on iPhone / iPad (PWA)</h4>
          </div>
          <button @click="showIosModal = false" class="p-1 text-slate-400 hover:text-white rounded-lg">
            <X class="w-5 h-5" />
          </button>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed">
          The Caluya e-Citizen app operates as a Progressive Web Application on iOS devices without needing an App Store account:
        </p>

        <ol class="space-y-2.5 text-xs text-slate-300 list-decimal list-inside bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
          <li>Open this portal in <strong>Safari</strong> on your iPhone.</li>
          <li>Tap the <strong>Share</strong> button (box with an upward arrow at the bottom).</li>
          <li>Scroll down and select <strong>"Add to Home Screen"</strong>.</li>
          <li>Tap <strong>"Add"</strong> in the top-right corner.</li>
        </ol>

        <div class="p-3 bg-sky-950/60 rounded-xl border border-sky-800/60 text-[11px] text-sky-200">
          The official Caluya icon will appear on your iPhone home screen, working with instant offline caching and fullscreen navigation!
        </div>

        <button
          @click="showIosModal = false"
          class="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors cursor-pointer"
        >
          Understood, Close
        </button>
      </div>
    </div>

    <!-- Download Trigger Toast Notification -->
    <div 
      v-if="showDownloadToast" 
      class="fixed bottom-6 right-6 z-50 max-w-sm bg-slate-900 border border-emerald-500/50 text-white p-4 rounded-2xl shadow-2xl animate-bounce flex items-start space-x-3"
    >
      <CheckCircle class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
      <div class="text-xs space-y-1">
        <strong class="text-emerald-300 block font-bold">Sample APK Download Started!</strong>
        <p class="text-slate-300 text-[11px]">
          File <span class="font-mono text-amber-300">caluya-citizen-app-v1.0.apk</span> (601 KB) is downloading. This sample package demonstrates LGU mobile features for evaluation.
        </p>
      </div>
      <button @click="showDownloadToast = false" class="text-slate-400 hover:text-white">
        <X class="w-4 h-4" />
      </button>
    </div>

  </section>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for MobileAppSection
import { ref } from 'vue';
import { 
  Smartphone, 
  Download, 
  QrCode, 
  ShieldCheck, 
  WifiOff, 
  Bell, 
  Radio, 
  HeartPulse, 
  CheckCircle, 
  Sparkles, 
  AlertTriangle,
  X 
} from '@lucide/vue';

const activeScreen = ref('home');
const showIosModal = ref(false);
const showDownloadToast = ref(false);

const handleDownloadClick = () => {
  showDownloadToast.value = true;
  setTimeout(() => {
    showDownloadToast.value = false;
  }, 6000);
};

const triggerDummySos = () => {
  alert('🚨 [MDRRMO Simulation] Simulated Maritime SOS Alert sent to Caluya Coast Guard & MDRRMO Command Center (Lat 12.012°N, Long 121.564°E).');
};
</script>
