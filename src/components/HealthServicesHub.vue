<!-- Gene - Oct 06, 2026: Comprehensive Health Services Hub for Caluya Antique with RHU clinics, free medicines, and telehealth -->
<template>
  <section id="health" class="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
          <HeartPulse class="w-3.5 h-3.5" />
          <span>Kalusugan ng Caluyanon</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Municipal Health & Medical Services
        </h2>
        <p class="mt-3 text-base sm:text-lg text-slate-600">
          Primary healthcare, free maintenance medicines, maternal birthing care, and island telehealth 
          accessible to all families in our 18 barangays without cost.
        </p>
      </div>

      <!-- Quick Health Metrics & Contact Cards -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Building class="w-5 h-5" />
            </div>
            <h3 class="font-bold text-lg text-slate-900">RHU 1 - Poblacion Main</h3>
            <p class="text-xs text-slate-500 mt-1">Municipal Health Center & Birthing Home</p>
            <div class="mt-4 space-y-1.5 text-xs text-slate-600">
              <div><strong>Hours:</strong> 24/7 Emergency & Birthing</div>
              <div><strong>Phone:</strong> (036) 288-7100</div>
              <div><strong>Doctor:</strong> Dr. Maria Corazon D. Tan, MD</div>
            </div>
          </div>
          <button
            @click="openConsultModal('RHU 1 - Poblacion')"
            class="mt-6 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Book RHU 1 Consult
          </button>
        </div>

        <div class="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
              <Activity class="w-5 h-5" />
            </div>
            <h3 class="font-bold text-lg text-slate-900">RHU 2 - Semirara Island</h3>
            <p class="text-xs text-slate-500 mt-1">Island Station & Trauma Facility</p>
            <div class="mt-4 space-y-1.5 text-xs text-slate-600">
              <div><strong>Hours:</strong> 24/7 Emergency & Birthing</div>
              <div><strong>Phone:</strong> +63 919-456-7890</div>
              <div><strong>Doctor:</strong> Dr. Jerome K. Villanueva, MD</div>
            </div>
          </div>
          <button
            @click="openConsultModal('RHU 2 - Semirara')"
            class="mt-6 w-full py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Book Semirara Consult
          </button>
        </div>

        <div class="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
              <Stethoscope class="w-5 h-5" />
            </div>
            <h3 class="font-bold text-lg text-slate-900">Island Telehealth Hotline</h3>
            <p class="text-xs text-slate-500 mt-1">Direct Physician Link for Remote Islets</p>
            <div class="mt-4 space-y-1.5 text-xs text-slate-600">
              <div><strong>Coverage:</strong> Sibay, Sibato, Liwagao, Fisherfolk</div>
              <div><strong>Hotline:</strong> +63 917-222-MEDS (6337)</div>
              <div><strong>Availability:</strong> Daily 8:00 AM – 6:00 PM</div>
            </div>
          </div>
          <button
            @click="openConsultModal('Telehealth Remote Consult')"
            class="mt-6 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Connect to Telehealth
          </button>
        </div>

      </div>

      <!-- Free Medicines Pharmacy Inventory Board -->
      <div class="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div class="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 mb-1">
              <Pill class="w-3.5 h-3.5" />
              <span>Libreng Gamot sa RHU</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900">Municipal Free Maintenance Medicine Inventory</h3>
            <p class="text-xs text-slate-500 mt-0.5">
              Available for free dispensing with valid prescription across Poblacion and Semirara RHU pharmacies
            </p>
          </div>
          <button
            @click="showMedsModal = true"
            class="px-4 py-2 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 rounded-xl text-xs font-bold border border-emerald-300 self-start sm:self-auto cursor-pointer"
          >
            Inquire Medicine Availability
          </button>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(cat, idx) in HEALTH_SERVICES_DATA.availableMedicines"
            :key="idx"
            class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80"
          >
            <div class="flex items-center justify-between pb-2 border-b border-slate-200">
              <span class="font-bold text-xs text-slate-900">{{ cat.category }}</span>
              <span class="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                {{ cat.status }}
              </span>
            </div>
            <ul class="mt-2.5 space-y-1 text-xs text-slate-600">
              <li v-for="(item, iIdx) in cat.items" :key="iIdx" class="flex items-center space-x-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Doctor Clinic & Specialty Schedule Table -->
      <div class="mt-10 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center space-x-2">
          <Calendar class="w-4 h-4 text-sky-600" />
          <span>Doctor Consultation & Visiting Specialist Schedule</span>
        </h3>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-200">
                <th class="py-3 px-4 font-bold">Physician Name</th>
                <th class="py-3 px-4 font-bold">Specialty</th>
                <th class="py-3 px-4 font-bold">Facility Station</th>
                <th class="py-3 px-4 font-bold">Clinic Days</th>
                <th class="py-3 px-4 font-bold text-right">Telehealth</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="(doc, idx) in HEALTH_SERVICES_DATA.doctorSchedule" :key="idx" class="hover:bg-slate-50">
                <td class="py-3.5 px-4 font-bold text-slate-900">{{ doc.doctor }}</td>
                <td class="py-3.5 px-4 text-slate-600">{{ doc.specialty }}</td>
                <td class="py-3.5 px-4 font-medium text-sky-700">{{ doc.station }}</td>
                <td class="py-3.5 px-4 text-slate-800">{{ doc.days }}</td>
                <td class="py-3.5 px-4 text-right font-semibold text-emerald-700">{{ doc.telehealth }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Animal Bite / Anti-Rabies Special Alert -->
      <div class="mt-8 p-5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center space-x-3 text-xs">
          <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 font-bold">
            🐶
          </div>
          <div>
            <h4 class="font-bold text-amber-950">Free Animal Bite Treatment Center (ABTC) at RHU 1 Poblacion</h4>
            <p class="text-amber-800 mt-0.5">
              Immediate anti-rabies post-exposure prophylaxis (PEP) and anti-tetanus shots are given free of charge for dog/cat bites. Wash wound with running soap & water for 15 minutes before reporting.
            </p>
          </div>
        </div>
        <span class="text-xs font-bold text-amber-900 bg-amber-200/80 px-3 py-1.5 rounded-xl whitespace-nowrap">
          24/7 RHU Priority
        </span>
      </div>

    </div>

    <!-- Interactive Modal: Consult Booking -->
    <div v-if="showConsultModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 class="font-bold text-base text-slate-900">Book Doctor Consultation / Telehealth</h3>
          <button @click="showConsultModal = false" class="text-slate-400 hover:text-slate-600 cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form v-if="!consultSubmitted" @submit.prevent="consultSubmitted = true" class="mt-4 space-y-3.5 text-xs">
          <div>
            <label class="block font-bold text-slate-700 uppercase mb-1">Patient Name</label>
            <input
              type="text"
              required
              v-model="consultForm.name"
              placeholder="Full name"
              class="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 uppercase mb-1">Mobile Number</label>
              <input
                type="tel"
                required
                v-model="consultForm.phone"
                placeholder="0917-000-0000"
                class="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label class="block font-bold text-slate-700 uppercase mb-1">Barangay</label>
              <input
                type="text"
                required
                v-model="consultForm.barangay"
                placeholder="e.g. Semirara / Banago"
                class="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 uppercase mb-1">Facility / Mode</label>
            <input
              type="text"
              readonly
              :value="selectedFacility"
              class="w-full bg-slate-100 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800"
            />
          </div>

          <div>
            <label class="block font-bold text-slate-700 uppercase mb-1">Symptoms or Medical Concern</label>
            <textarea
              rows="3"
              required
              v-model="consultForm.symptoms"
              placeholder="Briefly describe your condition (fever, cough, prenatal, maintenance refill)..."
              class="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm"
            ></textarea>
          </div>

          <div class="pt-2 flex justify-end space-x-2">
            <button
              type="button"
              @click="showConsultModal = false"
              class="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md cursor-pointer"
            >
              Confirm Appointment
            </button>
          </div>
        </form>

        <div v-else class="py-6 text-center space-y-3">
          <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <HeartPulse class="w-6 h-6" />
          </div>
          <h4 class="text-lg font-bold text-slate-900">Consultation Scheduled!</h4>
          <p class="text-xs text-slate-600 max-w-sm mx-auto">
            Appointment Ref: <strong class="font-mono text-emerald-700">CLINIC-CAL-2026-402</strong>.
            The RHU duty nurse will call <strong>{{ consultForm.phone }}</strong> to confirm your doctor schedule or initiate the telehealth video/voice link.
          </p>
          <button
            @click="consultSubmitted = false; showConsultModal = false"
            class="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- Medicine Inquire Modal -->
    <div v-if="showMedsModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div class="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 class="font-bold text-base text-slate-900">RHU Pharmacy Inquiry</h3>
          <button @click="showMedsModal = false" class="text-slate-400 hover:text-slate-600 cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>
        <div class="mt-4 space-y-3 text-xs text-slate-600">
          <p>
            To claim free maintenance medications at <strong>RHU 1 Poblacion</strong> or <strong>RHU 2 Semirara</strong>:
          </p>
          <ol class="list-decimal pl-4 space-y-1 text-slate-700">
            <li>Bring your <strong>Doctor's Prescription</strong> (valid within 3 months).</li>
            <li>Present any valid government ID or Barangay Residency Certificate.</li>
            <li>Senior Citizens & PWDs are given priority express dispensing.</li>
          </ol>
          <div class="p-3 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-200">
            <strong>Island Delivery:</strong> Residents in Sibay, Sibato, and Liwagao may request prescription refills through their visiting Barangay Health Worker (BHW).
          </div>
        </div>
        <div class="mt-5 flex justify-end">
          <button
            @click="showMedsModal = false"
            class="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for HealthServicesHub
import { ref } from 'vue';
import { 
  HeartPulse, Building, Activity, Stethoscope, 
  Pill, Calendar, X 
} from '@lucide/vue';
import { HEALTH_SERVICES_DATA } from '../data/caluyaData';

const showConsultModal = ref(false);
const showMedsModal = ref(false);
const consultSubmitted = ref(false);
const selectedFacility = ref('RHU 1 - Poblacion');

const consultForm = ref({
  name: '',
  phone: '',
  barangay: '',
  symptoms: ''
});

const openConsultModal = (facility) => {
  selectedFacility.value = facility;
  showConsultModal.value = true;
};
</script>
