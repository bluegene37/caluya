<!-- Gene - Oct 06, 2026: Comprehensive Emergency, Rescue, and MDRRMO/DRRMC command hub for Caluya Antique -->
<template>
  <section id="rescue" class="py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
    <!-- Red alert background gradient pulse -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 mb-3 animate-pulse">
          <AlertTriangle class="w-3.5 h-3.5 text-rose-400" />
          <span>24/7 Island Emergency Command</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          MDRRMO Rescue & Maritime Safety Hub
        </h2>
        <p class="mt-3 text-base sm:text-lg text-slate-300">
          Rapid disaster response, emergency island sea evacuation (Medevac), and live gale warning advisories 
          protecting all 18 island barangays across Caluya, Semirara, Sibay, and our sister islets.
        </p>
      </div>

      <!-- Emergency Quick Action Strip -->
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- Call 911 / OpCen -->
        <a
          :href="`tel:${MDRRMO_RESCUE_DATA.hotlines.emergency}`"
          class="p-5 rounded-2xl bg-gradient-to-br from-rose-950 to-slate-900 border-2 border-rose-600/60 hover:border-rose-500 shadow-xl shadow-rose-950/40 transition-all flex flex-col justify-between group"
        >
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold tracking-wider uppercase text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800">
              24/7 COMMAND
            </span>
            <PhoneCall class="w-5 h-5 text-rose-400 group-hover:animate-bounce" />
          </div>
          <div class="mt-4">
            <span class="text-xs text-slate-400 block font-semibold">MDRRMO Operations Center</span>
            <span class="text-xl sm:text-2xl font-black font-mono text-white mt-1 block">
              911 / 0998-765-4321
            </span>
            <span class="text-[11px] text-rose-300 mt-1 block">Touch to dial immediately</span>
          </div>
        </a>

        <!-- VHF Marine Channel 16 -->
        <div class="p-5 rounded-2xl bg-slate-900/90 border border-sky-800/60 shadow-lg flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold tracking-wider uppercase text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
              MARINE RADIO
            </span>
            <Radio class="w-5 h-5 text-sky-400 animate-pulse" />
          </div>
          <div class="mt-4">
            <span class="text-xs text-slate-400 block font-semibold">VHF Emergency Distress</span>
            <span class="text-xl sm:text-2xl font-black font-mono text-sky-300 mt-1 block">
              Channel 16
            </span>
            <span class="text-[11px] text-slate-400 mt-1 block">156.800 MHz • Monitored 24/7</span>
          </div>
        </div>

        <!-- Request Sea Medevac -->
        <button
          @click="showMedevacModal = true"
          class="p-5 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 border-2 border-indigo-600/60 hover:border-indigo-400 shadow-xl transition-all flex flex-col justify-between text-left cursor-pointer group"
        >
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold tracking-wider uppercase text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800">
              SEA AMBULANCE
            </span>
            <Ship class="w-5 h-5 text-indigo-300 group-hover:scale-110 transition-transform" />
          </div>
          <div class="mt-4">
            <span class="text-xs text-slate-400 block font-semibold">Emergency Patient Transfer</span>
            <span class="text-lg font-black text-white mt-1 block">
              Dispatch Sea Ambulance
            </span>
            <span class="text-[11px] text-indigo-300 mt-1 block">Request urgent boat transfer →</span>
          </div>
        </button>

        <!-- Coast Guard Substation -->
        <a
          :href="`tel:${MDRRMO_RESCUE_DATA.hotlines.coastGuard}`"
          class="p-5 rounded-2xl bg-slate-900/90 border border-teal-800/60 shadow-lg flex flex-col justify-between group"
        >
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold tracking-wider uppercase text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
              COAST GUARD
            </span>
            <ShieldAlert class="w-5 h-5 text-teal-400" />
          </div>
          <div class="mt-4">
            <span class="text-xs text-slate-400 block font-semibold">PCG Caluya Sub-Station</span>
            <span class="text-base sm:text-lg font-black font-mono text-teal-300 mt-1 block">
              0917-888-PCG1
            </span>
            <span class="text-[11px] text-slate-400 mt-1 block">Maritime SAR & Port Clearances</span>
          </div>
        </a>

      </div>

      <!-- Sea Evacuation Fleet & Status -->
      <div class="mt-12 bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <h3 class="text-xl font-bold text-white flex items-center space-x-2">
              <Ship class="w-5 h-5 text-sky-400" />
              <span>Municipal Sea Ambulance & Evacuation Fleet</span>
            </h3>
            <p class="text-xs text-slate-400 mt-1">
              High-speed marine rescue assets stationed across Caluya, Semirara, and Sibay for rapid casualty transfers
            </p>
          </div>
          <button
            @click="showMedevacModal = true"
            class="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold flex items-center space-x-2 shadow-md cursor-pointer self-start sm:self-auto"
          >
            <Siren class="w-4 h-4 animate-spin" style="animation-duration: 3s;" />
            <span>Request Emergency Dispatch</span>
          </button>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(asset, idx) in MDRRMO_RESCUE_DATA.seaEvacuationAssets"
            :key="idx"
            class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-sky-500/50 transition-all"
          >
            <div class="flex items-center justify-between text-xs">
              <span class="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                {{ asset.status }}
              </span>
              <span class="text-slate-400 text-[11px]">Asset #{{ idx + 1 }}</span>
            </div>
            <h4 class="mt-3 font-bold text-sm text-white">{{ asset.name }}</h4>
            <p class="text-xs text-slate-400 mt-0.5">{{ asset.type }}</p>
            <div class="mt-3 pt-3 border-t border-slate-700/60 text-xs text-slate-300 space-y-1">
              <div>Capacity: <strong class="text-white">{{ asset.capacity }}</strong></div>
              <div>Station: <strong class="text-sky-300">{{ asset.station }}</strong></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Typhoon Signals & Maritime Rules Reference -->
      <div class="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Left: PAGASA Tropical Cyclone Rules -->
        <div class="lg:col-span-6 bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800">
          <div class="flex items-center space-x-2 text-amber-400 font-bold text-base border-b border-slate-800 pb-4 mb-4">
            <Wind class="w-5 h-5 text-amber-400" />
            <span>PAGASA Cyclone Warning Protocols for Caluya Islands</span>
          </div>

          <div class="space-y-3">
            <div
              v-for="(rule, idx) in MDRRMO_RESCUE_DATA.typhoonRules"
              :key="idx"
              class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-xs space-y-1.5"
            >
              <div class="font-extrabold text-amber-300 text-sm">
                {{ rule.signal }}
              </div>
              <div>
                <strong class="text-sky-300">Sea Operations: </strong>
                <span class="text-slate-300">{{ rule.maritimeRule }}</span>
              </div>
              <div>
                <strong class="text-rose-300">Community Alert: </strong>
                <span class="text-slate-400">{{ rule.landRule }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Designated Island Evacuation Centers -->
        <div class="lg:col-span-6 bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <h3 class="text-base font-bold text-white flex items-center space-x-2">
                <Building2 class="w-5 h-5 text-teal-400" />
                <span>Designated Island Evacuation Centers</span>
              </h3>
              <span class="text-xs text-slate-400">High Ground & Storm Shelters</span>
            </div>

            <!-- Island Cluster Tabs -->
            <div class="flex flex-wrap gap-2 mb-4">
              <button
                v-for="(grp, idx) in MDRRMO_RESCUE_DATA.evacuationCenters"
                :key="idx"
                @click="activeEvacIsland = idx"
                :class="[
                  'px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer',
                  activeEvacIsland === idx ? 'bg-teal-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                ]"
              >
                {{ grp.island.split(' ')[0] }}
              </button>
            </div>

            <!-- Centers List -->
            <div class="space-y-3">
              <div
                v-for="(center, cIdx) in MDRRMO_RESCUE_DATA.evacuationCenters[activeEvacIsland].centers"
                :key="cIdx"
                class="p-3 rounded-xl bg-slate-800/70 border border-slate-700 text-xs"
              >
                <div class="flex items-center justify-between font-bold text-white">
                  <span>{{ center.name }}</span>
                  <span class="text-teal-300 font-mono text-[11px]">{{ center.capacity }}</span>
                </div>
                <div class="text-slate-400 text-[11px] mt-0.5">Location: {{ center.location }}</div>
                <div class="text-slate-300 text-[11px] mt-1 pt-1 border-t border-slate-700/50">
                  Equipped with: {{ center.amenities }}
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Disaster Rations Pre-Positioned</span>
            <span class="text-teal-400 font-semibold">MSWDO Relief Ready</span>
          </div>
        </div>

      </div>

    </div>

    <!-- Interactive Modal: Request Emergency Sea Medevac -->
    <div v-if="showMedevacModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div class="bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center space-x-2 text-rose-400">
            <Siren class="w-6 h-6 animate-pulse" />
            <h3 class="font-extrabold text-lg text-white">Emergency Sea Medevac Dispatch Request</h3>
          </div>
          <button @click="showMedevacModal = false" class="text-slate-400 hover:text-white cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form v-if="!medevacSubmitted" @submit.prevent="medevacSubmitted = true" class="mt-5 space-y-4 text-xs">
          <div class="p-3 bg-rose-950/70 border border-rose-800 rounded-xl text-rose-200">
            <strong>CRITICAL EMERGENCY NOTICE:</strong> Use this form to alert the MDRRMO Sea Rescue Unit immediately. If in active cardiac arrest, severe hemorrhage, or immediate danger, call <strong>911</strong> or radio <strong>VHF Ch 16</strong> simultaneously.
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase mb-1">Patient Name</label>
            <input
              type="text"
              required
              v-model="medevacForm.patientName"
              placeholder="Full name of patient"
              class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-300 uppercase mb-1">Current Island / Location</label>
              <select v-model="medevacForm.island" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white">
                <option>Semirara Island (Brgy Semirara/Tinogboc/Alegria)</option>
                <option>Sibay Island (Brgy Sibay/Harigue/Bacong)</option>
                <option>Sibato Island</option>
                <option>Liwagao Island / Islet</option>
                <option>Caluya Poblacion / Remote Cove</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-slate-300 uppercase mb-1">Contact Phone</label>
              <input
                type="tel"
                required
                v-model="medevacForm.phone"
                placeholder="0917-000-0000"
                class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
              />
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase mb-1">Medical Condition / Urgency</label>
            <select v-model="medevacForm.condition" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white">
              <option>Obstetric Emergency / Difficult Labor</option>
              <option>Severe Trauma / Maritime Accident / Fracture</option>
              <option>Stroke / Acute Cardiovascular Event</option>
              <option>Severe Respiratory Distress / Asthma</option>
              <option>Poisoning / Venomous Marine Sting (Box Jellyfish/Stonefish)</option>
              <option>Other Urgent Medical Emergency</option>
            </select>
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase mb-1">Destination Hospital Preference</label>
            <select v-model="medevacForm.destination" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white">
              <option>Caluya Rural Health Unit (Poblacion Emergency Clinic)</option>
              <option>Culasi District Hospital (Mainland Panay via Lipata Port)</option>
              <option>Pandan Provincial Hospital (Mainland Panay)</option>
              <option>Bulalacao Community Hospital (Oriental Mindoro)</option>
            </select>
          </div>

          <div class="pt-2 flex justify-end space-x-3">
            <button
              type="button"
              @click="showMedevacModal = false"
              class="px-4 py-2 font-bold text-slate-400 hover:text-white cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl shadow-lg flex items-center space-x-1.5 cursor-pointer"
            >
              <Siren class="w-4 h-4" />
              <span>Broadcast Medevac Dispatch</span>
            </button>
          </div>
        </form>

        <div v-else class="py-8 text-center space-y-4">
          <div class="w-16 h-16 bg-rose-900/60 text-rose-400 rounded-full flex items-center justify-center mx-auto border-2 border-rose-500 animate-pulse">
            <Ship class="w-8 h-8" />
          </div>
          <h4 class="text-2xl font-black text-white">Sea Medevac Alert Activated!</h4>
          <p class="text-sm text-slate-300 max-w-md mx-auto">
            Dispatch Reference: <strong class="font-mono text-rose-400">MEDEVAC-CAL-2026-091</strong>.
            The nearest Municipal Sea Ambulance crew and Coast Guard watch have been alerted. Stand by your phone: <strong>{{ medevacForm.phone }}</strong>.
          </p>
          <div class="p-3 bg-slate-800 rounded-xl text-xs text-slate-300 max-w-sm mx-auto">
            VHF Radio Channel: Keep radio on <strong>Ch 16</strong> for incoming vessel coordinates.
          </div>
          <button
            @click="medevacSubmitted = false; showMedevacModal = false"
            class="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for EmergencyRescueHub
import { ref } from 'vue';
import { 
  AlertTriangle, PhoneCall, Radio, Ship, ShieldAlert, 
  Wind, Building2, Siren, X 
} from '@lucide/vue';
import { MDRRMO_RESCUE_DATA } from '../data/caluyaData';

const activeEvacIsland = ref(0);
const showMedevacModal = ref(false);
const medevacSubmitted = ref(false);

const medevacForm = ref({
  patientName: '',
  island: 'Semirara Island (Brgy Semirara/Tinogboc/Alegria)',
  phone: '',
  condition: 'Obstetric Emergency / Difficult Labor',
  destination: 'Culasi District Hospital (Mainland Panay via Lipata Port)'
});
</script>
