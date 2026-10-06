// Gene - Oct 06, 2026: Comprehensive datasets for Caluya, Antique LGU portal and proposal

export const LGU_INFO = {
  name: "Municipality of Caluya",
  province: "Antique",
  region: "Region VI (Western Visayas)",
  country: "Philippines",
  tagline: "The Island Jewel of Antique & Tatus Capital of the Philippines",
  classification: "1st Class Island Municipality",
  islandsCount: "3 Major Islands, 3 Minor Islands, 4 Islets",
  barangaysCount: 18,
  population: "42,895+ (Est. 2024 / PSA)",
  landArea: "148.90 sq km (Municipal Waters: 307,680+ hectares)",
  zipCode: "5711",
  mayor: {
    name: "Hon. Rigil Kent G. Lim",
    title: "Municipal Mayor",
    message: "Welcome to the digital gateway of our beloved Caluya. As an island municipality with boundless potential, our administration is committed to bridging the seas through digital innovation—bringing honest, swift, and transparent public service directly to every household in all our 18 barangays across Caluya, Semirara, Sibay, and our sister islets.",
  },
  viceMayor: {
    name: "Hon. Genevieve Lim-Reyes",
    title: "Municipal Vice Mayor & Presiding Officer",
  },
  sangguniangBayan: [
    "Hon. Mark Anthony Ecija",
    "Hon. Roberto M. Del Rosario",
    "Hon. Maria Elena Sanchez",
    "Hon. Jose Carlito Morales",
    "Hon. Noel G. Magbanua",
    "Hon. Christopher D. Villanueva",
    "Hon. Dennis S. Alarcon",
    "Hon. Arlene Joy Tan (LNB President)",
    "Hon. Kenjie B. Valente (SKMF President)",
  ],
  contacts: {
    address: "Municipal Hall, Barangay Poblacion, Caluya, Antique 5711",
    email: "mayor.office@caluya-antique.gov.ph",
    trunkline: "+63 (036) 288-7100",
    hotline: "+63 917-123-CALUYA (2258)",
    mdrrmo: "+63 998-765-4321 / VHF Ch 16",
    pnp: "+63 929-111-2222",
    pcg: "+63 917-888-PCG1",
  }
};

export const ISLANDS_DATA = [
  {
    id: "caluya-main",
    name: "Caluya Island (Poblacion)",
    category: "Seat of Government & Culture",
    description: "The administrative and cultural heart of the municipality. Home to the historic Poblacion, Municipal Hall, white sand beaches of Imba and Sabang, and the vibrant staging grounds of the annual Tatusan Festival.",
    barangays: ["Poblacion", "Banago", "Dawis", "Hininga-an", "Imba", "Masanag", "Sabang", "Salamento"],
    highlights: ["Municipal Hall & Government Center", "Imba White Sand Coast", "Tatusan Festival Grounds", "Agar-agar (Seaweed) Farming"],
    ports: ["Port of Caluya (Poblacion)"],
    status: "Normal Ferry Operations",
    badge: "Administrative Capital"
  },
  {
    id: "semirara",
    name: "Semirara Island",
    category: "Energy & Industrial Hub",
    description: "The largest and most populous island of Caluya, featuring a powerhouse economy driven by Semirara Mining & Power Corp alongside thriving coastal fisherfolk communities, marine reserves, and scenic rolling hills.",
    barangays: ["Semirara", "Alegria", "Tinogboc", "Sibolo"],
    highlights: ["Semirara Energy Complex", "Bujang Bay Marine Reserve", "Tinogboc Coastal Scenic Trail", "Livelihood & Training Center"],
    ports: ["Semirara Private Port / Caluya Sea Lane"],
    status: "Regular Vessel Schedule",
    badge: "Economic Powerhouse"
  },
  {
    id: "sibay",
    name: "Sibay Island",
    category: "Eco-Marine & Fishing Haven",
    description: "An emerald island paradise southeast of Caluya mainland. Rich in coral formations, untouched coastal cliffs, and hospitable island barangays sustained by sustainable artisanal fishing and sea agriculture.",
    barangays: ["Sibay", "Bacong", "Bonbon", "Dionela", "Harigue"],
    highlights: ["Sibay Cliff & Lighthouse", "Bonbon Marine Sanctuary", "Artisanal Fishing Communities", "Crystal Diving Corridors"],
    ports: ["Sibay Community Boat Pier"],
    status: "Small Craft Advisory Monitored",
    badge: "Eco-Heritage Reserve"
  },
  {
    id: "sibato-liwagao",
    name: "Sibato & Liwagao Islets",
    category: "Pristine Eco-Tourism & Sanctuaries",
    description: "Spellbinding white sandbars, powdery beaches, and turquoise lagoons. Liwagao offers world-class sandbar aesthetics and coconut crab habitats, while Sibato is renowned for vibrant coral gardens.",
    barangays: ["Sibato"],
    highlights: ["Liwagao Long White Sandbar", "Coconut Crab (Tatus) Sanctuary", "Giant Clam Protected Marine Zone", "Sea Turtle Nesting Shorelines"],
    ports: ["Charter Island-Hopping Bancas"],
    status: "Open for Eco-Tours with Guide Permit",
    badge: "Top Eco-Tourism Gem"
  }
];

export const BARANGAYS_LIST = [
  { name: "Alegria", island: "Semirara Island", population: "3,041", captain: "Hon. Roberto V. Tan" },
  { name: "Bacong", island: "Sibay Island", population: "650", captain: "Hon. Ernesto M. Perez" },
  { name: "Banago", island: "Caluya Island", population: "1,169", captain: "Hon. Danilo C. Javier" },
  { name: "Bonbon", island: "Sibay Island", population: "739", captain: "Hon. Salvador F. Ramos" },
  { name: "Dawis", island: "Caluya Island", population: "842", captain: "Hon. Rodrigo L. Gomez" },
  { name: "Dionela", island: "Sibay Island", population: "363", captain: "Hon. Marites E. Reyes" },
  { name: "Harigue", island: "Sibay Island", population: "3,022", captain: "Hon. Wilfredo S. Alba" },
  { name: "Hininga-an", island: "Caluya Island", population: "1,476", captain: "Hon. Carlito P. Sola" },
  { name: "Imba", island: "Caluya Island", population: "1,476", captain: "Hon. Melchor G. Diaz" },
  { name: "Masanag", island: "Caluya Island", population: "1,277", captain: "Hon. Cynthia B. Cruz" },
  { name: "Poblacion", island: "Caluya Island", population: "1,960", captain: "Hon. Edgardo R. Lim" },
  { name: "Sabang", island: "Caluya Island", population: "1,044", captain: "Hon. Arthur K. Morales" },
  { name: "Salamento", island: "Caluya Island", population: "1,196", captain: "Hon. Joel D. Villanueva" },
  { name: "Semirara", island: "Semirara Island", population: "13,605", captain: "Hon. Antonio S. Guingona" },
  { name: "Sibato", island: "Sibato Island", population: "520", captain: "Hon. Juanita B. Flores" },
  { name: "Sibay", island: "Sibay Island", population: "1,005", captain: "Hon. Vicente T. Soriano" },
  { name: "Sibolo", island: "Semirara Island", population: "1,493", captain: "Hon. Fernando M. Lopez" },
  { name: "Tinogboc", island: "Semirara Island", population: "3,288", captain: "Hon. Gabriel Q. Santos" }
];

export const TOURISM_DESTINATIONS = [
  {
    id: "tatusan-festival",
    title: "Tatusan Festival",
    subtitle: "Celebrated Every May in Poblacion",
    tag: "Cultural Heritage",
    description: "The crown jewel festival of Caluya honoring the 'Tatus' (Coconut Crab / Birgus latro). Features vibrant street dancing with crab-themed choreographies, culinary showcases, boat racing, and cultural pageantry.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    details: "Established to advocate for the protection and sustainable harvesting of the endangered coconut crab while celebrating municipal identity."
  },
  {
    id: "liwagao-island",
    title: "Liwagao Island Sandbar",
    subtitle: "Untouched Tropical Paradise",
    tag: "Eco-Adventure",
    description: "A breathtaking sandbar surrounded by neon aquamarine waters. Liwagao offers pristine swimming, drone photography vantage points, and a tranquil escape rivaling Boracay without the commercial crowds.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    details: "Accessible via chartered banca from Caluya Poblacion (approx. 45 mins sea journey depending on tides)."
  },
  {
    id: "agar-agar-farms",
    title: "Seaweed (Agar-Agar) Farms",
    subtitle: "Marine Agriculture Marvel",
    tag: "Agri-Tourism",
    description: "Caluya is recognized as one of the premier seaweed producers in Region VI. Explore shallow crystalline waters with thousands of floating lines of Eucheuma and Kappaphycus seaweeds, tended by smiling island farmers.",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=80",
    details: "Primary non-mining economic livelihood of island households, exporting agar-agar worldwide."
  },
  {
    id: "sibato-coral-gardens",
    title: "Sibato Island Reef Sanctuary",
    subtitle: "Snorkeling & Marine Sanctuary",
    tag: "Marine Conservation",
    description: "Dense, kaleidoscopic coral gardens home to clownfish, sea turtles, and giant clams. Strictly monitored by LGU bantay-dagat for sustainable eco-snorkeling.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    details: "Guided eco-tours require registration at the Municipal Tourism Office in Poblacion."
  }
];

export const ONLINE_SERVICES = [
  {
    id: "ebpls",
    code: "SVC-01",
    title: "e-BPLS (Business Permit Application)",
    department: "Business Permits & Licensing Office (BPLO)",
    description: "Renew or apply for a new business permit online. Submit fire safety, sanitary, and barangay clearances digitally without inter-island travel.",
    turnaround: "1 - 2 Working Days",
    fee: "Varies by Gross Sales",
    actionText: "Start Application"
  },
  {
    id: "civil-registry",
    code: "SVC-02",
    title: "Civil Registry Certificate Request",
    department: "Local Civil Registrar (LCR)",
    description: "Request certified true copies of Birth, Marriage, and Death certificates with secure QR verification and island courier options.",
    turnaround: "24 Hours (Digital PDF Verification)",
    fee: "₱150 / Copy",
    actionText: "Request Certificate"
  },
  {
    id: "rptax",
    code: "SVC-03",
    title: "Real Property Tax (RPTax) Assessment",
    department: "Municipal Assessor & Treasury Office",
    description: "Check your tax declaration balance, compute early payment discounts, and generate official electronic billing statements.",
    turnaround: "Instant Online Calculator",
    fee: "Free Assessment",
    actionText: "Check Assessment"
  },
  {
    id: "boat-advisory",
    code: "SVC-04",
    title: "Vessel Sea Travel & Gale Advisory",
    department: "MDRRMO & Philippine Coast Guard",
    description: "Real-time sea conditions, PAGASA gale warnings, and daily passenger boat departures between Caluya, Libertad (Antique), and Bulalacao (Mindoro).",
    turnaround: "Updated hourly",
    fee: "Free Public Advisory",
    actionText: "View Live Board"
  },
  {
    id: "mayors-action",
    code: "SVC-05",
    title: "e-Reklamo & Citizen Helpdesk",
    department: "Office of the Municipal Mayor",
    description: "Direct citizen feedback line. Report public service issues, emergency infrastructure concerns, or medical evacuation requests directly to the Mayor's desk.",
    turnaround: "Response within 48 Hours",
    fee: "Free Service",
    actionText: "Submit Feedback"
  },
  {
    id: "fisherfolk-reg",
    code: "SVC-06",
    title: "Fisherfolk & Motorized Banca Registry",
    department: "Municipal Agriculture & Fisheries Office",
    description: "Register municipal fishing boats, apply for fuel subsidy programs, and enroll in Bantay-Dagat coastal cooperative programs.",
    turnaround: "2 - 3 Working Days",
    fee: "Free for Municipal Fisherfolk",
    actionText: "Register Banca"
  }
];

export const TRANSPARENCY_DOCUMENTS = [
  {
    title: "CY 2026 Executive Budget & Annual Investment Program (AIP)",
    category: "Full Disclosure Policy (FDP)",
    reference: "LGU-CAL-2026-FDP-01",
    date: "January 15, 2026",
    size: "4.2 MB",
    status: "Published & Audited"
  },
  {
    title: "CY 2025 Annual Procurement Plan (APP) & BAC Notices",
    category: "Bids and Awards Committee",
    reference: "BAC-CAL-2025-APP-R4",
    date: "December 28, 2025",
    size: "2.8 MB",
    status: "Active Public Bidding"
  },
  {
    title: "Municipal Ordinance No. 2024-09: Tatus Habitat Protection & Conservation",
    category: "Sangguniang Bayan Legislation",
    reference: "SB-ORD-2024-09",
    date: "November 14, 2024",
    size: "1.1 MB",
    status: "In Full Effect"
  },
  {
    title: "CY 2024 COA Annual Audit Report (Unmodified / Qualified Opinion)",
    category: "Commission on Audit",
    reference: "COA-R6-CALUYA-2024",
    date: "June 30, 2025",
    size: "5.6 MB",
    status: "Official Record"
  },
  {
    title: "Quarterly Report on 20% Municipal Development Fund Utilization",
    category: "Treasury & Accounting",
    reference: "MDF-UTIL-Q4-2025",
    date: "January 10, 2026",
    size: "1.7 MB",
    status: "DILG Compliant"
  }
];

export const PROPOSAL_DATA = {
  title: "Modern LGU Digital Portal & Citizen Transformation Masterplan",
  preparedFor: "The Honorable Municipal Mayor Rigil Kent G. Lim, Vice Mayor, and Sangguniang Bayan Members",
  preparedBy: "Caluya Digital Modernization Taskforce",
  date: "October 2026",
  vision: "To establish Caluya as the premier Smart Island Municipality in Western Visayas—empowering all 18 island barangays with frictionless digital governance, resilient maritime safety communications, and world-class tourism discovery.",
  
  executiveSummary: "The Municipality of Caluya is geographically unique: an archipelagic jewel in Antique with 18 barangays spread across Caluya, Semirara, Sibay, and surrounding islets. While economically vibrant with both the Semirara energy sector and thriving seaweed/tatus industries, our citizens face high maritime transportation costs (₱200–₱800 per round trip) and travel delays just to process municipal permits, civil registry requests, or verify government advisories. This proposal outlines a modern, cost-effective, high-reliability LGU Web Portal and E-Governance Platform designed specifically for island conditions (low bandwidth, mobile-first, offline-resilient, and maritime-safety-focused).",

  pillars: [
    {
      num: "01",
      title: "Inter-Island Citizen Empowerment",
      desc: "Zero-travel municipal services. Residents in Semirara, Sibay, or Sibato can apply for permits, register bancas, and request certificates online via mobile phone without crossing stormy seas.",
      impact: "Saves ~₱15M annually in aggregate citizen maritime transport costs."
    },
    {
      num: "02",
      title: "Maritime Safety & Disaster Resilience",
      desc: "Live sea-lane advisory and PAGASA gale warning dashboard integrated with MDRRMO and Coast Guard alerts, protecting our fishermen and passenger bancas.",
      impact: "Near-instant dissemination of weather and small-craft sea bans across all coastal barangays."
    },
    {
      num: "03",
      title: "Tourism & Eco-Heritage Showcase",
      desc: "Modern digital storytelling for the Tatusan Festival, pristine Liwagao and Sibato beaches, and authentic homestay listings to attract high-value, eco-conscious tourists.",
      impact: "Projected 300% increase in verified tourism inquiries and direct local business bookings."
    },
    {
      num: "04",
      title: "Full Disclosure & SGLG Governance",
      desc: "Automated DILG Full Disclosure Policy (FDP) repository, Bids & Awards Committee transparency, and public feedback mechanism to cement Caluya's Seal of Good Local Governance.",
      impact: "100% compliance with Ease of Doing Business (RA 11032) and DILG transparency audits."
    }
  ],

  technicalFeatures: [
    {
      name: "Ultra-Fast Lightweight Architecture",
      detail: "Optimized for 3G/4G island mobile signals with aggressive caching, minimal asset payloads, and offline-ready service capabilities."
    },
    {
      name: "Bilingual / Dialect Inclusive",
      detail: "Full English and Kinaray-a / Hiligaynon toggle to ensure ease of use for grassroots fisherfolk and elderly residents."
    },
    {
      name: "Secure Gov-Grade Cloud Infrastructure",
      detail: "Cloudflare DDoS protection, SSL 256-bit encryption, role-based admin access for LGU departments, and data privacy compliance (RA 10173)."
    },
    {
      name: "Citizen Verification & QR Receipts",
      detail: "Every online certificate or permit issuance features a cryptographic QR code that PNP, PCG, or banks can verify in one tap."
    }
  ],

  roadmap: [
    {
      phase: "Phase 1: Foundation & Portal Launch",
      timeline: "Months 1 - 2",
      deliverables: "Official Portal deployment, Information architecture for 18 barangays, MDRRMO Gale Warning system, Tourism & Tatusan showcase, Full Disclosure Seal."
    },
    {
      phase: "Phase 2: Digital Citizen Services (e-BPLS & Civil Registry)",
      timeline: "Months 3 - 4",
      deliverables: "Interactive e-Permits application, online document tracking, SMS notification gateway to residents, Assessor RPTax calculator."
    },
    {
      phase: "Phase 3: Digital Payment Gateway & Island Kiosks",
      timeline: "Months 5 - 6",
      deliverables: "Integration with Landbank Link.BizPortal, GCash, Maya, and installation of self-service e-Kiosks at Semirara and Sibay barangay centers."
    }
  ],

  budgetPhasing: [
    { item: "Architecture, UI/UX Design & Content Digitization", cost: "Included in Prototype Phase" },
    { item: "Cloud Hosting, Domain (.gov.ph), & High-Availability CDN", cost: "₱45,000 / year" },
    { item: "e-Services Modules (BPLO, Civil Registry, Assessor, MDRRMO)", cost: "Phased LGU Software Fund" },
    { item: "Staff Training & Department Admin Onboarding", cost: "Comprehensive Turnkey Handover" }
  ]
};

// Gene - Oct 06, 2026: Added comprehensive MDRRMO Rescue, Health Services, and Public Social Services data for all Caluya citizens

export const MDRRMO_RESCUE_DATA = {
  office: "Municipal Disaster Risk Reduction & Management Office (MDRRMO)",
  council: "Municipal Disaster Risk Reduction & Management Council (MDRRMC)",
  opsCenter: "24/7 Disaster Operations Center (OpCen), Barangay Poblacion, Caluya",
  head: "Engr. Ronald M. Alcantara (MDRRM Officer)",
  hotlines: {
    emergency: "911 / +63 998-765-4321",
    radio: "VHF Marine Channel 16 (156.800 MHz) & Ch 68 Working",
    seaAmbulance: "+63 999-333-4444 (24/7 Medevac Dispatch)",
    coastGuard: "+63 917-888-PCG1 (PCG Caluya Sub-Station)",
    semiraraSubstation: "+63 919-456-7890",
    sibaySubstation: "+63 920-567-8901",
    pnp: "+63 929-111-2222",
    bfp: "+63 929-222-3333"
  },
  seaEvacuationAssets: [
    { name: "MDRRMO Sea Ambulance 01 (Bantay Kaligtasan)", type: "High-Speed Twin-Engine Medical Boat", capacity: "6 Patients + 4 Medics", station: "Port of Caluya (Poblacion)", status: "Ready for Dispatch" },
    { name: "MDRRMO Sea Ambulance 02 (Semirara Lifeline)", type: "Reinforced Rescue Vessel", capacity: "4 Patients + 3 Medics", station: "Semirara Island Port", status: "Ready for Dispatch" },
    { name: "PCG Search & Rescue Aluminum Craft (SAR-201)", type: "Patrol & SAR Craft", capacity: "12 Persons", station: "Sibay Island Sub-Station", status: "On Sea Patrol" },
    { name: "Bantay Dagat Multi-Mission Patrol Bancas (x4)", type: "Motorized Outrigger Patrol", capacity: "8 Persons each", station: "Liwagao / Sibato / Banago / Alegria", status: "Active Coastal Standby" }
  ],
  evacuationCenters: [
    {
      island: "Caluya Island (Poblacion Cluster)",
      centers: [
        { name: "Caluya Municipal Evacuation Center", location: "Barangay Poblacion (Elevated Zone)", capacity: "800 Individuals", amenities: "Solar Generator, Potable Water, Medical Clinic, Kitchen" },
        { name: "Caluya National High School Gymnasium", location: "Barangay Poblacion", capacity: "650 Individuals", amenities: "Water Tanks, Separate Restrooms, Child-Friendly Space" },
        { name: "Imba Barangay Multipurpose Hall", location: "Barangay Imba", capacity: "250 Individuals", amenities: "Emergency Radio, Standby Generator" },
        { name: "Dawis Coastal Evacuation Shelter", location: "Barangay Dawis", capacity: "200 Individuals", amenities: "First Aid Kit, Rainwater Collector" }
      ]
    },
    {
      island: "Semirara Island Cluster",
      centers: [
        { name: "Semirara Comprehensive Evacuation Complex", location: "Barangay Semirara", capacity: "1,800 Individuals", amenities: "Full Medical Bay, Backup Genset, Satellite Phone, Industrial Kitchen" },
        { name: "Tinogboc Disaster Evacuation Center", location: "Barangay Tinogboc", capacity: "750 Individuals", amenities: "Solar Power, Community Washrooms" },
        { name: "Alegria Island Storm Shelter", location: "Barangay Alegria", capacity: "500 Individuals", amenities: "Radio Link to Poblacion, Medical Supplies" },
        { name: "Sibolo Resilient Community Hall", location: "Barangay Sibolo", capacity: "300 Individuals", amenities: "Emergency Rations Storage, Cistern" }
      ]
    },
    {
      island: "Sibay Island Cluster",
      centers: [
        { name: "Sibay Central Disaster Evacuation Center", location: "Barangay Sibay", capacity: "700 Individuals", amenities: "VHF Marine Transceiver, Solar Lighting, Medical Room" },
        { name: "Harigue Community High Ground Shelter", location: "Barangay Harigue", capacity: "450 Individuals", amenities: "Emergency Water Filtration, Relief Supplies" },
        { name: "Bacong & Bonbon Resilient Center", location: "Barangay Bonbon", capacity: "350 Individuals", amenities: "First Aid Post, Solar Power" }
      ]
    },
    {
      island: "Sibato Island Cluster",
      centers: [
        { name: "Sibato Island Elevated Community Hall", location: "Barangay Sibato", capacity: "300 Individuals", amenities: "High Ground Shelter above Storm Surge Line, VHF Radio" }
      ]
    }
  ],
  typhoonRules: [
    { signal: "Signal No. 1 (39–61 km/h winds)", maritimeRule: "Small seacrafts, motorized bancas, and artisanal fishing boats strictly prohibited from sailing. Fisherfolk advised to haul boats to high ground.", landRule: "Disaster OpCen placed on Blue Alert. Prepositioning of food packs." },
    { signal: "Signal No. 2 (62–88 km/h winds)", maritimeRule: "ALL sea voyages suspended across all Caluya routes. No vessels permitted to leave port under PCG order.", landRule: "MDRRMO placed on Red Alert. Pre-emptive evacuation of shoreline residents." },
    { signal: "Signal No. 3 (89–117 km/h winds)", maritimeRule: "Total maritime shutdown. High storm surge threat (up to 2.5–3.0 meters in low-lying coves).", landRule: "Mandatory forced evacuation to designated elevated evacuation centers." },
    { signal: "Signal No. 4 & 5 (>118 km/h winds)", maritimeRule: "Catastrophic sea conditions. Severe coastal inundation.", landRule: "Full lockdown. Emergency responders sheltered in reinforced bunkers until eye passes." }
  ]
};

export const HEALTH_SERVICES_DATA = {
  office: "Municipal Health Office (MHO) & Rural Health Units (RHU)",
  mhoHead: "Dr. Maria Corazon D. Tan, MD (Municipal Health Officer)",
  hotline: "+63 (036) 288-7100 / +63 917-222-MEDS (6337)",
  facilities: [
    {
      name: "RHU 1 - Poblacion Main Health Center",
      location: "Barangay Poblacion, Caluya Island",
      hours: "Monday – Sunday: 24/7 Emergency & Birthing; Consultations: 8:00 AM – 5:00 PM",
      phone: "+63 (036) 288-7100",
      staff: "1 Medical Doctor, 1 Nurse Supervisor, 3 Midwives, 1 Medical Technologist",
      services: [
        "24/7 Outpatient & Emergency Triage",
        "Maternal, Prenatal, Delivery & Postnatal Care (PhilHealth Accredited)",
        "Expanded Program on Immunization (EPI for Infants)",
        "Animal Bite Treatment Center (Free Anti-Rabies Post-Exposure Vaccine)",
        "Tuberculosis DOTS Clinic & GeneXpert Laboratory",
        "Municipal Free Pharmacy & Maintenance Medicine Dispensing",
        "Laboratory Testing (CBC, Urinalysis, Blood Sugar, Dengue NS1)",
        "Telehealth Medical Consultation for Outlying Islands"
      ]
    },
    {
      name: "RHU 2 - Semirara Island Health Station & Birthing Clinic",
      location: "Barangay Semirara, Semirara Island",
      hours: "Monday – Sunday: 24/7 Emergency & Birthing; Consultations: 8:00 AM – 5:00 PM",
      phone: "+63 919-456-7890",
      staff: "1 Medical Doctor, 2 Registered Nurses, 3 Midwives",
      services: [
        "24/7 Emergency Stabilization & Trauma Care",
        "Accredited Birthing Home & Newborn Care",
        "Industrial & Coastal Fisherfolk Occupational Health",
        "Free Chronic Illness Maintenance Medication",
        "Routine Child Vaccination",
        "Tele-Radiology & Referral to Panay/Mindoro Hospitals"
      ]
    },
    {
      name: "Sibay Island Health Sub-Station",
      location: "Barangay Sibay, Sibay Island",
      hours: "Monday – Friday: 8:00 AM – 5:00 PM (24/7 On-Call Midwife)",
      phone: "+63 920-567-8901",
      staff: "1 Public Health Nurse, 2 Licensed Midwives, 18 BHWs",
      services: [
        "Primary Healthcare & First Aid",
        "Prenatal Checkups & Home Care",
        "Maintenance Drug Distribution (Hypertension/Diabetes)",
        "Emergency Sea Ambulance Coordination to Poblacion"
      ]
    }
  ],
  availableMedicines: [
    { category: "Hypertension & Cardiovascular", items: ["Amlodipine 5mg & 10mg", "Losartan 50mg", "Metoprolol 50mg"], status: "In Stock (Free)" },
    { category: "Diabetes Care", items: ["Metformin 500mg", "Gliclazide 30mg", "Insulin Syringes"], status: "In Stock (Free)" },
    { category: "Antibiotics & Anti-Infectives", items: ["Amoxicillin 500mg", "Co-Amoxiclav 625mg", "Cefalexin 500mg", "Azithromycin 500mg"], status: "In Stock (With Prescription)" },
    { category: "Pediatric & Maternal Vitamins", items: ["Ferrous Sulfate + Folic Acid", "Vitamin A 100,000 IU", "Zinc Sulfate Syrup", "Multivitamins Syrup"], status: "In Stock (Free)" },
    { category: "Emergency & Anti-Rabies", items: ["Rabies Vaccine (PVRV)", "Anti-Tetanus Serum (ATS)", "EpiPen / Epinephrine", "IV Fluids (NSS/D5LR)"], status: "In Stock (24/7 RHU)" },
    { category: "Respiratory & Allergy", items: ["Salbutamol Nebules", "Cetirizine 10mg", "Paracetamol 500mg / Drops"], status: "In Stock (Free)" }
  ],
  doctorSchedule: [
    { doctor: "Dr. Maria Corazon D. Tan, MD", specialty: "General Medicine & Public Health", station: "RHU 1 Poblacion", days: "Mon, Wed, Fri (8AM - 4PM)", telehealth: "Available Daily" },
    { doctor: "Dr. Jerome K. Villanueva, MD", specialty: "Occupational & Emergency Medicine", station: "RHU 2 Semirara", days: "Tue, Thu, Sat (8AM - 4PM)", telehealth: "Available Daily" },
    { doctor: "Dr. Liza M. Robles, MD (Visiting OB-GYN)", specialty: "Maternal & Women's Health", station: "RHU 1 & RHU 2 Rotating", days: "1st & 3rd Thursday of Month", telehealth: "By Appointment" },
    { doctor: "Dr. Anthony C. Alarcon, DDM", specialty: "Public Dental Health", station: "RHU 1 Poblacion", days: "Tuesday & Thursday (9AM - 3PM)", telehealth: "N/A" }
  ]
};

export const PUBLIC_SERVICES_DATA = {
  mswdo: {
    name: "Municipal Social Welfare and Development Office (MSWDO)",
    head: "Mrs. Susan P. Javier, RSW (MSWD Officer)",
    hotline: "+63 (036) 288-7105 / +63 918-333-HELP",
    programs: [
      {
        title: "AICS (Assistance to Individuals in Crisis Situation)",
        desc: "Immediate financial and relief assistance for medical hospitalization, medicines, burial costs, and transportation assistance for stranded islanders.",
        requirements: ["Barangay Certificate of Indigency", "Valid Government / Voter's ID", "Medical Abstract / Death Certificate / Official Billing", "Social Worker Case Summary"],
        turnaround: "Same-Day Cash Assistance or Guarantee Letter"
      },
      {
        title: "Office of Senior Citizens Affairs (OSCA) & Social Pension",
        desc: "Registration for Caluya Senior Citizen ID, Purchase Booklet (20% discount + VAT exemption), and quarterly Social Pension distribution for indigent elderly.",
        requirements: ["Birth Certificate or Valid ID showing age 60+", "1x1 Photo (2 copies)", "Barangay Certification of Residency"],
        turnaround: "1 Working Day for ID Issuance"
      },
      {
        title: "Persons with Disability (PWD) Affairs Office (PDAO)",
        desc: "PWD ID issuance, assistive device grants (wheelchairs, crutches, hearing aids), and livelihood training programs for island PWD residents.",
        requirements: ["Medical Certificate stating disability type", "Barangay Indigency", "Valid ID", "2x2 Photo"],
        turnaround: "1 - 2 Working Days"
      },
      {
        title: "Solo Parents Welfare Assistance",
        desc: "Solo Parent ID registration granting flexible work benefits, educational scholarships for children, and priority municipal assistance under RA 11861.",
        requirements: ["Barangay Certificate of Solo Parent", "Children's Birth Certificates", "Proof of Solo Parent Status (Death Cert/Annulment/Legal Separation)"],
        turnaround: "2 Working Days"
      }
    ]
  },
  agricultureAndFisheries: {
    name: "Municipal Agriculture & Fisheries Office (MAFO)",
    head: "Mr. Rolando B. Flores (Municipal Agriculturist)",
    hotline: "+63 (036) 288-7110 / +63 920-444-ISLA",
    services: [
      {
        name: "Fisherfolk Registry (FishR) & BoatR Banca Licensing",
        detail: "Free registration of motorized fishing boats (3 gross tons and below), motorized banca color-coding per island, and safety gear issuance (life jackets, GPS beacons)."
      },
      {
        name: "Seaweed (Agar-Agar) Mariculture Support Program",
        detail: "Distribution of high-yield Eucheuma and Kappaphycus seaweed seedlings, nylon lines, floats, and post-typhoon rehabilitation assistance for island sea farmers."
      },
      {
        name: "Fuel Subsidy for Small Municipal Fisherfolk",
        detail: "Discount vouchers and cash subsidies for gasoline/diesel fuel during high inflation or monsoon seasons for registered municipal fisherfolk."
      },
      {
        name: "Bantay-Dagat Coastal Watch & Sanctuary Protection",
        detail: "Community marine patrol monitoring illegal commercial fishing, protecting coconut crab (tatus) breeding zones, and safeguarding coral reef sanctuaries."
      }
    ]
  },
  pesoEmployment: {
    name: "Public Employment Service Office (PESO Caluya)",
    head: "Mr. Dennis G. Morales (PESO Manager)",
    hotline: "+63 (036) 288-7115",
    openings: [
      { role: "Heavy Equipment Operators & Mechanics", employer: "Semirara Mining and Power Corp (SMPC)", location: "Semirara Island", vacancies: "25 Positions", status: "Urgent Hiring" },
      { role: "Registered Nurses & Medical Technologists", employer: "LGU Caluya Municipal Health Office", location: "Poblacion & Semirara RHU", vacancies: "4 Positions", status: "Open for Application" },
      { role: "Administrative & Revenue Collection Staff", employer: "Municipal Treasury & Assessor", location: "Poblacion Hall", vacancies: "3 Positions", status: "Civil Service Eligible" },
      { role: "Eco-Tourism Boat Captains & Tour Guides", employer: "Caluya Tourism Cooperatives", location: "Liwagao & Sibato Tours", vacancies: "12 Positions", status: "Training Provided" },
      { role: "Special Program for Employment of Students (SPES)", employer: "LGU Summer Youth Employment", location: "All 18 Barangays", vacancies: "100 Slots", status: "Youth / Students" }
    ]
  },
  publicSafetyAndUtilities: {
    pnp: { name: "Philippine National Police (PNP Caluya Municipal Station)", contact: "+63 929-111-2222", chief: "PMAJ Arnel S. Cruz", address: "Poblacion, Caluya" },
    bfp: { name: "Bureau of Fire Protection (BFP Caluya Station)", contact: "+63 929-222-3333", marshal: "SINSP Richard T. Gomez", address: "Poblacion, Caluya" },
    pcg: { name: "Philippine Coast Guard (PCG Caluya Sub-Station)", contact: "+63 917-888-PCG1", commander: "CG PO1 Mark B. David", address: "Port of Caluya & Semirara Detachment" },
    power: { name: "Caluya Island Electric Cooperative & Semirara Power", contact: "+63 918-555-POWR", note: "Report power outages and fallen electric lines 24/7" },
    water: { name: "Caluya Island Water System & Sanitation", contact: "+63 919-666-WATR", note: "Island potable water maintenance and delivery" }
  }
};
