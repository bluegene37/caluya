<!-- Gene - Oct 06, 2026: Vue 3 TransparencySection component for DILG Full Disclosure and BAC compliance -->
<template>
  <section id="transparency" class="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
          <ShieldCheck class="w-3.5 h-3.5" />
          <span>Good Financial Housekeeping • DILG Full Disclosure</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Transparency Seal & Public Documents
        </h2>
        <p class="mt-3 text-base sm:text-lg text-slate-600">
          In compliance with Section 84 of the General Appropriations Act and DILG Memorandum Circulars, 
          the Municipality of Caluya upholds complete financial transparency, open procurement, and public accountability.
        </p>
      </div>

      <!-- Governance Badges Strip -->
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 class="w-5 h-5" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-slate-900">Full Disclosure Policy (FDP)</h4>
            <p class="text-xs text-slate-500">100% On-Time Public Posting</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
            <FileText class="w-5 h-5" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-slate-900">COA Annual Audit</h4>
            <p class="text-xs text-slate-500">Unmodified / Compliant Opinion</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
            <ShieldCheck class="w-5 h-5" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-slate-900">Anti-Red Tape (ARTA)</h4>
            <p class="text-xs text-slate-500">Citizen Charter Displayed</p>
          </div>
        </div>
      </div>

      <!-- Document Repository Card -->
      <div class="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
        
        <!-- Filters -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="tab in ['All', 'Full Disclosure', 'Procurement', 'Legislation', 'Audit']"
              :key="tab"
              @click="activeTab = tab"
              :class="[
                'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer',
                activeTab === tab
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              ]"
            >
              {{ tab }}
            </button>
          </div>

          <div class="relative">
            <Search class="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter documents..."
              v-model="filterDoc"
              class="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 w-60"
            />
          </div>
        </div>

        <!-- Document Rows -->
        <div class="mt-4 divide-y divide-slate-100">
          <div
            v-for="(doc, idx) in filteredDocs"
            :key="idx"
            class="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 px-2 rounded-xl transition-colors"
          >
            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  {{ doc.category }}
                </span>
                <span class="text-xs text-slate-400 font-mono">
                  Ref: {{ doc.reference }}
                </span>
              </div>
              <h4 class="text-sm font-bold text-slate-900">{{ doc.title }}</h4>
              <div class="text-xs text-slate-500">
                Published: {{ doc.date }} • Size: {{ doc.size }} • <span class="text-emerald-600 font-semibold">{{ doc.status }}</span>
              </div>
            </div>

            <div class="flex items-center space-x-2 flex-shrink-0">
              <button
                @click="downloadDoc(doc)"
                class="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-800 text-xs font-bold rounded-xl border border-slate-200 transition-colors cursor-pointer"
              >
                <Download class="w-3.5 h-3.5 text-sky-600" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
          All documents posted conform to DILG Memorandum Circular No. 2019-149 and Executive Order No. 2, s. 2016 (Freedom of Information).
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Gene - Oct 06, 2026: Vue 3 composition setup for TransparencySection
import { ref, computed } from 'vue';
import { ShieldCheck, CheckCircle2, FileText, Search, Download } from '@lucide/vue';
import { TRANSPARENCY_DOCUMENTS } from '../data/caluyaData';

const activeTab = ref('All');
const filterDoc = ref('');

const filteredDocs = computed(() => {
  return TRANSPARENCY_DOCUMENTS.filter(doc => {
    const matchesTab = activeTab.value === 'All' || doc.category.toLowerCase().includes(activeTab.value.toLowerCase());
    const matchesText = doc.title.toLowerCase().includes(filterDoc.value.toLowerCase()) || doc.reference.toLowerCase().includes(filterDoc.value.toLowerCase());
    return matchesTab && matchesText;
  });
});

const downloadDoc = (doc) => {
  alert(`Opening official document: "${doc.title}" (Ref: ${doc.reference}). In live deployment, this downloads the signed PDF directly from the LGU cloud repository.`);
};
</script>
