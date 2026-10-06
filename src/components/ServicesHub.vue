<!-- Gene - Oct 06, 2026: Vue 3 ServicesHub component with interactive e-services, RPTax calculator and modals -->
<template>
  <section id="services" class="py-20 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200 mb-3">
          <FileCheck class="w-3.5 h-3.5" />
          <span>Ease of Doing Business • RA 11032</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Citizen e-Services Hub
        </h2>
        <p class="mt-3 text-base sm:text-lg text-slate-600">
          No need to spend ₱500+ and hours crossing rough waters to Poblacion. Process your municipal documents, 
          calculate taxes, and check sea advisories directly online.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="svc in ONLINE_SERVICES"
          :key="svc.id"
          class="group p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-500 hover:shadow-xl hover:bg-white transition-all flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-mono font-bold text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded-md">
                {{ svc.code }}
              </span>
              <span class="text-xs text-slate-500 font-medium flex items-center space-x-1">
                <Clock class="w-3.5 h-3.5 text-slate-400" />
                <span>{{ svc.turnaround }}</span>
              </span>
            </div>

            <h3 class="mt-4 text-xl font-bold text-slate-950 group-hover:text-sky-700 transition-colors">
              {{ svc.title }}
            </h3>
            
            <p class="text-xs font-semibold text-slate-500 mt-1">
              {{ svc.department }}
            </p>

            <p class="mt-3 text-sm text-slate-600 leading-relaxed">
              {{ svc.description }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-700">
              Fee: <strong class="text-slate-900">{{ svc.fee }}</strong>
            </span>
            <button
              @click="activeModal = svc.id"
              class="inline-flex items-center space-x-1 text-xs font-bold text-sky-700 group-hover:text-sky-800 bg-white group-hover:bg-sky-50 px-3 py-1.5 rounded-lg border border-slate-200 group-hover:border-sky-300 shadow-2xs transition-all cursor-pointer"
            >
              <span>{{ svc.actionText }}</span>
              <ArrowRight class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <!-- Feature Highlight: RPTax Instant Calculator Widget Inline -->
      <div class="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white shadow-xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-6">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
              <Calculator class="w-3.5 h-3.5" />
              <span>Instant Self-Assessment Tool</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
              Real Property Tax (RPTax) Online Estimator
            </h3>
            <p class="mt-3 text-slate-300 text-sm leading-relaxed">
              Check your estimated municipal property tax for residential, commercial, or agricultural land in Caluya. 
              Pay early to avail of the <strong>20% Prompt Payment Discount</strong> authorized under the Municipal Revenue Code.
            </p>
            <div class="mt-4 flex items-center space-x-3 text-xs text-sky-300">
              <ShieldCheck class="w-4 h-4 text-emerald-400" />
              <span>Official Caluya Assessor & Treasury Formula</span>
            </div>
          </div>

          <div class="lg:col-span-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-200 mb-1">Assessed Value (₱)</label>
                <input
                  type="number"
                  v-model="assessedValue"
                  class="w-full bg-slate-900/80 border border-slate-700 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-amber-400"
                  placeholder="e.g. 250000"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-200 mb-1">Property Classification</label>
                <select
                  v-model="propertyType"
                  class="w-full bg-slate-900/80 border border-slate-700 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="residential">Residential (1% Basic + 1% SEF)</option>
                  <option value="commercial">Commercial (2% Basic + 1% SEF)</option>
                  <option value="agricultural">Agricultural (1% Basic + 1% SEF)</option>
                </select>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between">
              <label class="flex items-center space-x-2 text-xs text-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  v-model="promptDiscount"
                  class="rounded text-amber-500 focus:ring-amber-400"
                />
                <span>Apply 20% Early Payment Discount (Q1)</span>
              </label>
            </div>

            <div class="mt-5 p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span class="text-[11px] uppercase tracking-wider text-slate-400 block">Estimated Tax Due</span>
                <span class="text-2xl font-mono font-extrabold text-amber-400">
                  ₱{{ netTax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
                </span>
              </div>
              <div class="text-right">
                <span class="text-[10px] text-emerald-400 block font-semibold">
                  {{ promptDiscount ? `Savings: ₱${discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}` : 'No discount applied' }}
                </span>
                <button
                  @click="generateEBill"
                  class="mt-1 px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg shadow-sm cursor-pointer"
                >
                  Generate E-Bill
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>

    <!-- Interactive Modal: e-BPLS Simulator -->
    <div v-if="activeModal === 'ebpls'" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div class="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
          <div class="flex items-center space-x-2 text-sky-800">
            <FileCheck class="w-5 h-5" />
            <h3 class="font-extrabold text-lg">Online e-BPLS Business Permit Portal</h3>
          </div>
          <button @click="activeModal = null" class="p-1 rounded-full text-slate-400 hover:text-slate-600 cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form v-if="!bplsSubmitted" @submit.prevent="bplsSubmitted = true" class="mt-5 space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase">Application Type</label>
            <div class="mt-1 grid grid-cols-2 gap-2">
              <button type="button" class="py-2 text-xs font-bold rounded-xl bg-sky-600 text-white border border-sky-600">
                New Business
              </button>
              <button type="button" class="py-2 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                Permit Renewal
              </button>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700">Registered Business Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Caluya Island Seaweed Trading"
              class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-700">Barangay Location</label>
              <select class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2">
                <option v-for="b in BARANGAYS_LIST" :key="b.name" :value="b.name">
                  {{ b.name }} ({{ b.island }})
                </option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700">Line of Business</label>
              <select class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2">
                <option>Fishery / Seaweed / Marine</option>
                <option>Retail / Sari-Sari / Grocery</option>
                <option>Tourism / Homestay / Resort</option>
                <option>Mining / Energy Supply</option>
                <option>Food & Restaurant</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700">Tax Identification Number (TIN)</label>
            <input
              type="text"
              required
              placeholder="000-000-000-000"
              class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2"
            />
          </div>

          <div class="p-3 bg-sky-50 rounded-xl border border-sky-200 text-xs text-sky-900">
            <p class="font-semibold">Automatic Clearance Verification:</p>
            <p class="mt-0.5 text-sky-700">Barangay clearance, sanitary inspection, and BFP fire safety inspection are routed digitally to departments.</p>
          </div>

          <div class="pt-2 flex justify-end space-x-3">
            <button
              type="button"
              @click="activeModal = null"
              class="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-md cursor-pointer"
            >
              Submit e-BPLS Application
            </button>
          </div>
        </form>

        <div v-else class="py-8 text-center space-y-4">
          <div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-bold text-slate-900">e-BPLS Application Submitted!</h4>
          <p class="text-sm text-slate-600 max-w-md mx-auto">
            Application Tracking Number: <strong class="font-mono text-sky-700">CAL-BPLS-2026-0842</strong>.
            The BPLO Caluya team has received your documents. You will receive an SMS notification once approved for electronic payment.
          </p>
          <button
            @click="bplsSubmitted = false; activeModal = null"
            class="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>

    <!-- Interactive Modal: Live Sea Advisory Board -->
    <div v-if="activeModal === 'boat-advisory'" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div class="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
          <div class="flex items-center space-x-2 text-sky-800">
            <Waves class="w-5 h-5 text-sky-600" />
            <h3 class="font-extrabold text-lg">MDRRMO & PCG Live Sea Travel Board</h3>
          </div>
          <button @click="activeModal = null" class="p-1 rounded-full text-slate-400 hover:text-slate-600 cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>

        <div class="mt-5 space-y-4">
          <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start space-x-3">
            <CheckCircle class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 class="font-bold text-sm text-emerald-950">Gale Warning Status: NO ACTIVE GALE WARNING</h4>
              <p class="text-xs text-emerald-800 mt-0.5">
                Philippine Coast Guard Caluya Sub-Station has cleared all passenger bancas and motorized fishing vessels for normal navigation. Wave height: 0.8–1.5m.
              </p>
            </div>
          </div>

          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 pt-2">Today's Sea Vessel Schedules</h4>
          
          <div class="space-y-2.5">
            <div
              v-for="(s, idx) in seaSchedules"
              :key="idx"
              class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2"
            >
              <div>
                <div class="font-bold text-xs sm:text-sm text-slate-900">{{ s.route }}</div>
                <div class="text-[11px] text-slate-500 mt-0.5">Vessel: {{ s.vessel }} • Departure: {{ s.departure }}</div>
              </div>
              <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                {{ s.status }}
              </span>
            </div>
          </div>

          <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center space-x-2">
            <AlertCircle class="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>Life vests are strictly mandatory for all passengers per PCG Memorandum Circular.</span>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            @click="activeModal = null"
            class="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer"
          >
            Close Board
          </button>
        </div>
      </div>
    </div>

    <!-- Interactive Modal: Civil Registry Request -->
    <div v-if="activeModal === 'civil-registry'" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
          <div class="flex items-center space-x-2 text-sky-800">
            <FileText class="w-5 h-5 text-sky-600" />
            <h3 class="font-extrabold text-lg">Civil Registry Document Request</h3>
          </div>
          <button @click="activeModal = null" class="p-1 rounded-full text-slate-400 hover:text-slate-600 cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form v-if="!civilSubmitted" @submit.prevent="civilSubmitted = true" class="mt-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-700">Document Type</label>
            <select class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2">
              <option>Certificate of Live Birth</option>
              <option>Certificate of Marriage</option>
              <option>Certificate of Death</option>
              <option>Certificate of No Marriage Record (CENOMAR Endorsement)</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700">Full Name on Certificate</label>
            <input
              type="text"
              required
              placeholder="First Name, Middle Name, Last Name"
              class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-700">Date of Event</label>
              <input
                type="date"
                required
                class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700">Place (Barangay)</label>
              <select class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2">
                <option v-for="b in BARANGAYS_LIST" :key="b.name" :value="b.name">
                  {{ b.name }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700">Delivery / Receiving Option</label>
            <select class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2">
              <option>Digital QR Verified Copy (Download via Email / Portal)</option>
              <option>Semirara Island Barangay Hall Pickup</option>
              <option>Sibay Island Barangay Hall Pickup</option>
              <option>Poblacion Municipal Hall Counter</option>
            </select>
          </div>

          <div class="pt-2 flex justify-end space-x-3">
            <button
              type="button"
              @click="activeModal = null"
              class="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-md cursor-pointer"
            >
              Submit Request
            </button>
          </div>
        </form>

        <div v-else class="py-8 text-center space-y-4">
          <div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-bold text-slate-900">Request Queued at LCR Caluya!</h4>
          <p class="text-sm text-slate-600 max-w-md mx-auto">
            Request Ref: <strong class="font-mono text-sky-700">LCR-CAL-2026-3091</strong>.
            The Local Civil Registrar is retrieving the archive. Estimated turnaround: 24 business hours.
          </p>
          <button
            @click="civilSubmitted = false; activeModal = null"
            class="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>

    <!-- Interactive Modal: Mayor's e-Reklamo / Citizen Helpdesk -->
    <div v-if="activeModal === 'mayors-action'" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
          <div class="flex items-center space-x-2 text-rose-800">
            <Send class="w-5 h-5 text-rose-600" />
            <!-- Gene - Oct 06, 2026: Updated Helpdesk modal header to include Mayor Hon. Rigil Kent G. Lim -->
            <!--
            <h3 class="font-extrabold text-lg">Mayor's Action Helpdesk (e-Reklamo)</h3>
            -->
            <h3 class="font-extrabold text-lg">Mayor Hon. Rigil Kent G. Lim's Action Helpdesk (e-Reklamo)</h3>
          </div>
          <button @click="activeModal = null" class="p-1 rounded-full text-slate-400 hover:text-slate-600 cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form v-if="!ticketSubmitted" @submit.prevent="ticketSubmitted = true" class="mt-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-700">Your Full Name (Optional for Anonymous)</label>
            <input
              type="text"
              v-model="reklamoData.name"
              placeholder="Juan Dela Cruz"
              class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-700">Mobile Number</label>
              <input
                type="tel"
                required
                v-model="reklamoData.contact"
                placeholder="0917-000-0000"
                class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700">Your Barangay</label>
              <select v-model="reklamoData.barangay" class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2">
                <option v-for="b in BARANGAYS_LIST" :key="b.name" :value="b.name">
                  {{ b.name }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700">Concern Category</label>
            <select v-model="reklamoData.category" class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2">
              <option>Public Works & Roads</option>
              <option>Island Boat Safety / PCG Matter</option>
              <option>Health & Medical Assistance</option>
              <option>Bantay-Dagat / Marine Sanctuary Incident</option>
              <option>Electrical / Power Service</option>
              <option>General Public Inquiry</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700">Description of Concern</label>
            <textarea
              rows="4"
              required
              v-model="reklamoData.message"
              placeholder="Describe the issue with specific location details..."
              class="mt-1 w-full text-sm border border-slate-300 rounded-xl px-3 py-2"
            ></textarea>
          </div>

          <div class="pt-2 flex justify-end space-x-3">
            <button
              type="button"
              @click="activeModal = null"
              class="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <!-- Gene - Oct 06, 2026: Updated button text to cite Mayor Hon. Rigil Kent G. Lim -->
            <!--
            <button
              type="submit"
              class="px-5 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md cursor-pointer"
            >
              Send to Mayor's Action Desk
            </button>
            -->
            <button
              type="submit"
              class="px-5 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md cursor-pointer"
            >
              Send to Mayor Hon. Rigil Kent G. Lim's Action Desk
            </button>
          </div>
        </form>

        <div v-else class="py-8 text-center space-y-4">
          <div class="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-bold text-slate-900">Incident Ticket Dispatched!</h4>
          <!-- Gene - Oct 06, 2026: Updated ticket confirmation notice to cite Mayor Hon. Rigil Kent G. Lim -->
          <!--
          <p class="text-sm text-slate-600 max-w-md mx-auto">
            Ticket Reference: <strong className="font-mono text-rose-700">MAYOR-TKT-2026-1192</strong>.
            Your report has been directly logged into the Mayor's Executive Action Queue. An update will be sent via SMS to {{ reklamoData.contact || 'your number' }}.
          </p>
          -->
          <p class="text-sm text-slate-600 max-w-md mx-auto">
            Ticket Reference: <strong class="font-mono text-rose-700">MAYOR-TKT-2026-1192</strong>.
            Your report has been directly logged into Mayor Hon. Rigil Kent G. Lim's Executive Action Queue. An update will be sent via SMS to {{ reklamoData.contact || 'your number' }}.
          </p>
          <button
            @click="ticketSubmitted = false; activeModal = null"
            class="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer"
          >
            Close Helpdesk
          </button>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for ServicesHub
import { ref, computed } from 'vue';
import { 
  FileCheck, Clock, ArrowRight, Calculator, ShieldCheck, 
  X, CheckCircle, Waves, AlertCircle, FileText, Send 
} from '@lucide/vue';
import { ONLINE_SERVICES, BARANGAYS_LIST } from '../data/caluyaData';

const activeModal = ref(null);

// RPTax Calculator State
const assessedValue = ref('250000');
const propertyType = ref('residential');
const promptDiscount = ref(true);

// e-BPLS & Civil State
const bplsSubmitted = ref(false);
const civilSubmitted = ref(false);

// e-Reklamo State
const ticketSubmitted = ref(false);
const reklamoData = ref({
  name: '',
  contact: '',
  barangay: 'Poblacion',
  category: 'Public Works & Roads',
  message: ''
});

// Sea Schedules
const seaSchedules = [
  { route: "Caluya Poblacion ↔ Libertad, Antique (Panay Mainland)", departure: "07:30 AM & 01:00 PM", status: "On Schedule", vessel: "M/B Island Voyager" },
  { route: "Caluya Poblacion ↔ Bulalacao, Oriental Mindoro", departure: "08:00 AM", status: "Boarding", vessel: "M/B Mindoro Express" },
  { route: "Caluya Poblacion ↔ Semirara Island", departure: "Hourly (06:00 AM - 04:30 PM)", status: "Active Operations", vessel: "Inter-Island Bancas" },
  { route: "Caluya Poblacion ↔ Sibay Island", departure: "09:00 AM & 02:00 PM", status: "On Schedule", vessel: "M/B Sibay Star" },
  { route: "Poblacion ↔ Liwagao & Sibato (Eco-Tours)", departure: "Charter / Guided Booking", status: "Permit Cleared", vessel: "Registered Tourism Bancas" },
];

// Computed RPTax
const numericVal = computed(() => parseFloat(assessedValue.value) || 0);

const grossTax = computed(() => {
  const basicRate = propertyType.value === 'commercial' ? 0.02 : 0.01;
  const sefRate = 0.01;
  return numericVal.value * (basicRate + sefRate);
});

const discountAmount = computed(() => {
  return promptDiscount.value ? grossTax.value * 0.20 : 0;
});

const netTax = computed(() => {
  return grossTax.value - discountAmount.value;
});

const generateEBill = () => {
  alert(`Assessor Reference Generated for Assessed Value ₱${numericVal.value.toLocaleString()}. In Phase 2, this connects directly to LandBank Link.BizPortal for electronic payment!`);
};
</script>
