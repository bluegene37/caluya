<!-- Gene - Oct 06, 2026: Comprehensive Public Services, Social Welfare (MSWDO), Agriculture/Fisheries, and PESO Employment Directory for Caluya -->
<template>
  <section id="public-services" class="py-20 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 border border-indigo-200 mb-3">
          <HandHeart class="w-3.5 h-3.5" />
          <span>Lingkod Bayan Para sa Lahat</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Public Assistance & Social Services
        </h2>
        <p class="mt-3 text-base sm:text-lg text-slate-600">
          Everything Caluyanons need: MSWDO crisis cash assistance (AICS), Senior Citizen & PWD benefits, 
          fisherfolk and seaweed subsidies, and verified local island employment opportunities.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="mt-10 flex flex-wrap justify-center gap-2">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer',
            activeTab === tab.id
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab 1: MSWDO & Social Welfare -->
      <div v-if="activeTab === 'mswdo'" class="mt-10 space-y-6">
        <div class="p-6 rounded-3xl bg-indigo-50/60 border border-indigo-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold text-indigo-800 uppercase tracking-wider">Office of Social Welfare & Development</span>
            <h3 class="text-xl font-bold text-slate-900 mt-0.5">{{ PUBLIC_SERVICES_DATA.mswdo.name }}</h3>
            <p class="text-xs text-slate-600 mt-1">Head: {{ PUBLIC_SERVICES_DATA.mswdo.head }} • Hotline: {{ PUBLIC_SERVICES_DATA.mswdo.hotline }}</p>
          </div>
          <button
            @click="showAicsModal = true"
            class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer self-start sm:self-auto"
          >
            Apply for AICS Crisis Assistance
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(prog, idx) in PUBLIC_SERVICES_DATA.mswdo.programs"
            :key="idx"
            class="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                <h4 class="font-bold text-base text-slate-900">{{ prog.title }}</h4>
                <span class="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-full">
                  {{ prog.turnaround }}
                </span>
              </div>
              <p class="mt-3 text-xs text-slate-600 leading-relaxed">{{ prog.desc }}</p>
              
              <div class="mt-4 pt-3 border-t border-slate-200/70">
                <span class="text-[11px] font-bold text-slate-700 uppercase block mb-1">Standard Requirements:</span>
                <ul class="space-y-1 text-xs text-slate-600">
                  <li v-for="(req, rIdx) in prog.requirements" :key="rIdx" class="flex items-center space-x-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>{{ req }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              @click="showAicsModal = true"
              class="mt-6 text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center space-x-1 cursor-pointer"
            >
              <span>Submit Pre-Registration Online</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Tab 2: Agriculture & Fisherfolk Support -->
      <div v-if="activeTab === 'agri'" class="mt-10 space-y-6">
        <div class="p-6 rounded-3xl bg-teal-50/60 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold text-teal-800 uppercase tracking-wider">Marine & Agriculture Office</span>
            <h3 class="text-xl font-bold text-slate-900 mt-0.5">{{ PUBLIC_SERVICES_DATA.agricultureAndFisheries.name }}</h3>
            <p class="text-xs text-slate-600 mt-1">Head: {{ PUBLIC_SERVICES_DATA.agricultureAndFisheries.head }} • Hotline: {{ PUBLIC_SERVICES_DATA.agricultureAndFisheries.hotline }}</p>
          </div>
          <button
            @click="alert('Fisherfolk Registration Desk: Visit Municipal Agriculture Office in Poblacion or coordinate with your Barangay Fisherfolk Coordinator.')"
            class="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer self-start sm:self-auto"
          >
            Register Fishing Boat / FishR
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(svc, idx) in PUBLIC_SERVICES_DATA.agricultureAndFisheries.services"
            :key="idx"
            class="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-all"
          >
            <div class="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-3">
              🌾
            </div>
            <h4 class="font-bold text-base text-slate-900">{{ svc.name }}</h4>
            <p class="mt-2 text-xs text-slate-600 leading-relaxed">{{ svc.detail }}</p>
          </div>
        </div>
      </div>

      <!-- Tab 3: PESO Local Island Jobs -->
      <div v-if="activeTab === 'jobs'" class="mt-10 space-y-6">
        <div class="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold text-amber-800 uppercase tracking-wider">Employment & Livelihood</span>
            <h3 class="text-xl font-bold text-slate-900 mt-0.5">{{ PUBLIC_SERVICES_DATA.pesoEmployment.name }}</h3>
            <p class="text-xs text-slate-600 mt-1">Manager: {{ PUBLIC_SERVICES_DATA.pesoEmployment.head }} • Office Hotline: {{ PUBLIC_SERVICES_DATA.pesoEmployment.hotline }}</p>
          </div>
          <span class="text-xs font-bold bg-amber-200 text-amber-950 px-3 py-1.5 rounded-xl">
            Live Verified Vacancies
          </span>
        </div>

        <div class="divide-y divide-slate-200 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div
            v-for="(job, idx) in PUBLIC_SERVICES_DATA.pesoEmployment.openings"
            :key="idx"
            class="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
          >
            <div>
              <div class="flex items-center space-x-2">
                <span class="font-bold text-sm text-slate-900">{{ job.role }}</span>
                <span class="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {{ job.status }}
                </span>
              </div>
              <div class="text-xs text-slate-500 mt-0.5">
                Employer: <strong class="text-slate-800">{{ job.employer }}</strong> • Location: {{ job.location }}
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <span class="font-mono text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-lg">
                {{ job.vacancies }}
              </span>
              <button
                @click="alert(`Applying for: ${job.role} at ${job.employer}. Please submit your Resume and Barangay Clearance to PESO Caluya Office, Poblacion or email peso@caluya-antique.gov.ph.`)"
                class="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Apply via PESO
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 4: Public Safety & Utilities Contacts -->
      <div v-if="activeTab === 'safety'" class="mt-10 space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Law Enforcement</span>
            <h4 class="font-bold text-base text-slate-900 mt-2">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.pnp.name }}</h4>
            <div class="mt-3 text-xs text-slate-600 space-y-1">
              <div>Station Chief: <strong>{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.pnp.chief }}</strong></div>
              <div>Hotline: <strong class="text-indigo-700 font-mono">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.pnp.contact }}</strong></div>
              <div>Address: {{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.pnp.address }}</div>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <span class="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded">Fire Protection</span>
            <h4 class="font-bold text-base text-slate-900 mt-2">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.bfp.name }}</h4>
            <div class="mt-3 text-xs text-slate-600 space-y-1">
              <div>Fire Marshal: <strong>{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.bfp.marshal }}</strong></div>
              <div>Hotline: <strong class="text-rose-700 font-mono">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.bfp.contact }}</strong></div>
              <div>Address: {{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.bfp.address }}</div>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <span class="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">Maritime Safety</span>
            <h4 class="font-bold text-base text-slate-900 mt-2">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.pcg.name }}</h4>
            <div class="mt-3 text-xs text-slate-600 space-y-1">
              <div>Commander: <strong>{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.pcg.commander }}</strong></div>
              <div>Hotline: <strong class="text-teal-700 font-mono">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.pcg.contact }}</strong></div>
              <div>Stations: {{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.pcg.address }}</div>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200 md:col-span-2 lg:col-span-3">
            <h4 class="font-bold text-sm text-slate-900">Island Utilities (Power & Potable Water) Emergency Lines</h4>
            <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div class="p-3 bg-white rounded-xl border border-slate-200">
                <span class="font-bold block text-slate-900">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.power.name }}</span>
                <span class="text-amber-700 font-mono font-bold">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.power.contact }}</span>
                <span class="text-slate-500 block mt-0.5">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.power.note }}</span>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200">
                <span class="font-bold block text-slate-900">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.water.name }}</span>
                <span class="text-sky-700 font-mono font-bold">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.water.contact }}</span>
                <span class="text-slate-500 block mt-0.5">{{ PUBLIC_SERVICES_DATA.publicSafetyAndUtilities.water.note }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- Interactive Modal: AICS Crisis Cash Assistance Pre-Registration -->
    <div v-if="showAicsModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 class="font-bold text-base text-slate-900">MSWDO Crisis Assistance (AICS) Application</h3>
          <button @click="showAicsModal = false" class="text-slate-400 hover:text-slate-600 cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form v-if="!aicsSubmitted" @submit.prevent="aicsSubmitted = true" class="mt-4 space-y-3.5 text-xs">
          <div>
            <label class="block font-bold text-slate-700 uppercase mb-1">Beneficiary Full Name</label>
            <input
              type="text"
              required
              v-model="aicsForm.name"
              placeholder="Full name of beneficiary"
              class="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 uppercase mb-1">Contact Number</label>
              <input
                type="tel"
                required
                v-model="aicsForm.phone"
                placeholder="0917-000-0000"
                class="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label class="block font-bold text-slate-700 uppercase mb-1">Barangay</label>
              <input
                type="text"
                required
                v-model="aicsForm.barangay"
                placeholder="e.g. Tinogboc / Sabang"
                class="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 uppercase mb-1">Type of Assistance Needed</label>
            <select v-model="aicsForm.type" class="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm">
              <option>Medical & Hospitalization Assistance</option>
              <option>Prescription Medicine Purchase Aid</option>
              <option>Burial / Funeral Expense Assistance</option>
              <option>Transportation Allowance (Stranded / Sea Travel Aid)</option>
              <option>Emergency Food Assistance (Gale / Calamity)</option>
            </select>
          </div>

          <div>
            <label class="block font-bold text-slate-700 uppercase mb-1">Brief Description of Circumstance</label>
            <textarea
              rows="3"
              required
              v-model="aicsForm.details"
              placeholder="Describe the crisis situation requiring urgent municipal financial support..."
              class="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm"
            ></textarea>
          </div>

          <div class="p-3 bg-indigo-50 text-indigo-900 rounded-xl text-[11px]">
            Please prepare your <strong>Barangay Certificate of Indigency</strong> and supporting receipts/bills when meeting the social worker.
          </div>

          <div class="pt-2 flex justify-end space-x-2">
            <button
              type="button"
              @click="showAicsModal = false"
              class="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md cursor-pointer"
            >
              Submit Pre-Application
            </button>
          </div>
        </form>

        <div v-else class="py-6 text-center space-y-3">
          <div class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
            <HandHeart class="w-6 h-6" />
          </div>
          <h4 class="text-lg font-bold text-slate-900">AICS Pre-Registration Received!</h4>
          <p class="text-xs text-slate-600 max-w-sm mx-auto">
            Reference Tracking: <strong class="font-mono text-indigo-700">AICS-CAL-2026-782</strong>.
            The MSWDO social worker has received your request. An SMS notification will be sent to <strong>{{ aicsForm.phone }}</strong> for cash assistance release schedule.
          </p>
          <button
            @click="aicsSubmitted = false; showAicsModal = false"
            class="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for PublicServicesDirectory
import { ref } from 'vue';
import { HandHeart, ArrowRight, X } from '@lucide/vue';
import { PUBLIC_SERVICES_DATA } from '../data/caluyaData';

const activeTab = ref('mswdo');
const showAicsModal = ref(false);
const aicsSubmitted = ref(false);

const tabs = [
  { id: 'mswdo', label: 'Social Welfare (MSWDO & AICS)' },
  { id: 'agri', label: 'Agriculture & Fisherfolk' },
  { id: 'jobs', label: 'Local Jobs (PESO Caluya)' },
  { id: 'safety', label: 'Public Safety & Utilities' }
];

const aicsForm = ref({
  name: '',
  phone: '',
  barangay: '',
  type: 'Medical & Hospitalization Assistance',
  details: ''
});
</script>
