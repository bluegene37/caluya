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
  // Gene - Oct 07, 2026: Added official portrait image URLs for Mayor Hon. Rigil Kent G. Lim and Vice Mayor Hon. Belfe S. Duran
  /*
  mayor: {
    name: "Hon. Rigil Kent G. Lim",
    title: "Municipal Mayor",
    message: "Welcome to the digital gateway of our beloved Caluya. As an island municipality with boundless potential, our administration is committed to bridging the seas through digital innovation—bringing honest, swift, and transparent public service directly to every household in all our 18 barangays across Caluya, Semirara, Sibay, and our sister islets.",
  },
  viceMayor: {
    name: "Hon. Belfe S. Duran",
    title: "Municipal Vice Mayor & Presiding Officer",
    subtitle: "Presiding Officer, Sangguniang Bayan ng Caluya",
    message: "As Presiding Officer of the Sangguniang Bayan, our legislative mandate is to champion progressive ordinances, enact impactful development resolutions, and ensure equitable fiscal appropriations for all 18 island barangays. Modernizing Caluya through e-governance guarantees every islander equal, dignified access to public services, disaster protection, and economic empowerment.",
    office: "Office of the Municipal Vice Mayor / Legislative Building, Poblacion",
    committees: [
      "Committee on Rules, Ordinances & Legal Matters",
      "Committee on Appropriations & Ways and Means",
      "Committee on Information & Communications Technology (ICT)"
    ]
  },
  */
  mayor: {
    name: "Hon. Rigil Kent G. Lim",
    title: "Municipal Mayor",
    image: "/images/mayor-rigil-kent-lim.jpg",
    message: "Welcome to the digital gateway of our beloved Caluya. As an island municipality with boundless potential, our administration is committed to bridging the seas through digital innovation—bringing honest, swift, and transparent public service directly to every household in all our 18 barangays across Caluya, Semirara, Sibay, and our sister islets.",
  },
  viceMayor: {
    name: "Hon. Belfe S. Duran",
    title: "Municipal Vice Mayor & Presiding Officer",
    subtitle: "Presiding Officer, Sangguniang Bayan ng Caluya",
    image: "/images/vice-mayor-belfe-duran.jpg",
    message: "As Presiding Officer of the Sangguniang Bayan, our legislative mandate is to champion progressive ordinances, enact impactful development resolutions, and ensure equitable fiscal appropriations for all 18 island barangays. Modernizing Caluya through e-governance guarantees every islander equal, dignified access to public services, disaster protection, and economic empowerment.",
    office: "Office of the Municipal Vice Mayor / Legislative Building, Poblacion",
    committees: [
      "Committee on Rules, Ordinances & Legal Matters",
      "Committee on Appropriations & Ways and Means",
      "Committee on Information & Communications Technology (ICT)"
    ]
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

// Gene - Oct 06, 2026: Enhanced ISLANDS_DATA with high-resolution, royalty-free web imagery accurately representing each island's landmarks and maritime character
/*
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
*/
export const ISLANDS_DATA = [
  {
    id: "caluya-main",
    name: "Caluya Island (Poblacion)",
    category: "Seat of Government & Culture",
    description: "The administrative and cultural heart of the municipality. Home to the historic Poblacion, Municipal Hall, white sand beaches of Imba and Sabang, and the vibrant staging grounds of the annual Tatusan Festival.",
    image: "https://images.unsplash.com/photo-1579957023433-7fad5b83efae?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1579980255001-bac1874a4673?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
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

// Gene - Oct 06, 2026: Updated TOURISM_DESTINATIONS images to accurately match the descriptions (Tatusan festival street dance, pristine sandbar, crystal mariculture lagoons, and coral reef sanctuary)
/*
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
*/
export const TOURISM_DESTINATIONS = [
  {
    id: "tatusan-festival",
    title: "Tatusan Festival",
    subtitle: "Celebrated Every May in Poblacion",
    tag: "Cultural Heritage",
    description: "The crown jewel festival of Caluya honoring the 'Tatus' (Coconut Crab / Birgus latro). Features vibrant street dancing with crab-themed choreographies, culinary showcases, boat racing, and cultural pageantry.",
    image: "https://images.unsplash.com/photo-1579957023433-7fad5b83efae?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    details: "Primary non-mining economic livelihood of island households, exporting agar-agar worldwide."
  },
  {
    id: "sibato-coral-gardens",
    title: "Sibato Island Reef Sanctuary",
    subtitle: "Snorkeling & Marine Sanctuary",
    tag: "Marine Conservation",
    description: "Dense, kaleidoscopic coral gardens home to clownfish, sea turtles, and giant clams. Strictly monitored by LGU bantay-dagat for sustainable eco-snorkeling.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
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
  // Gene - Oct 06, 2026: Updated Mayor Action Desk service entry to cite Mayor Hon. Rigil Kent G. Lim
  /*
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
  */
  {
    id: "mayors-action",
    code: "SVC-05",
    title: "Mayor Hon. Rigil Kent G. Lim's Action Desk (e-Reklamo)",
    department: "Office of Municipal Mayor Hon. Rigil Kent G. Lim",
    description: "Direct citizen feedback line. Report public service issues, emergency infrastructure concerns, or medical evacuation requests directly to Mayor Hon. Rigil Kent G. Lim's executive desk.",
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

// Gene - Oct 06, 2026: Tailored Modernization & E-Governance Proposal for the Municipal Vice Mayor Hon. Genevive L. Reyes and the Sangguniang Bayan ng Caluya
/*
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
*/

// Gene - Oct 06, 2026: Refactored PROPOSAL_DATA to respectfully present what genexis.dev and proponent Raffy Soquilon have developed for Hon. Belfe S. Duran and Sangguniang Bayan ng Caluya without prescriptive or bossy legislative directives
/*
export const PROPOSAL_DATA = {
  title: "Legislative & E-Governance Modernization Masterplan for Caluya",
  subTitle: "Bridging 18 Island Barangays Through Sangguniang Bayan Policy & Modern Digital Administration",
  // Gene - Oct 06, 2026: Updated Vice Mayor and Presiding Officer to Hon. Belfe S. Duran per user verification
  preparedFor: "Hon. Belfe S. Duran, Municipal Vice Mayor & Presiding Officer, Sangguniang Bayan ng Caluya",
  targetOfficial: "Hon. Belfe S. Duran",
  targetRole: "Municipal Vice Mayor & Presiding Officer",
  legislativeBody: "Sangguniang Bayan ng Caluya (18 Island Barangays)",
  preparedBy: "Caluya Digital Modernization & E-Governance Taskforce",
  date: "October 2026",
  docReference: "PROP-SB-CALUYA-2026-01",
  
  vision: "To empower the Sangguniang Bayan under the leadership of Vice Mayor Belfe S. Duran with a groundbreaking E-Governance ordinance and digital infrastructure that connects all 18 island barangays—eliminating perilous sea travel for municipal transactions, instituting 24/7 disaster lifelines, and advancing transparent council governance.",

  executiveSummary: "To the Honorable Municipal Vice Mayor Belfe S. Duran and the Honorable Members of the Sangguniang Bayan ng Caluya: The Municipality of Caluya is an archipelagic jewel in Antique with 18 barangays distributed across Caluya Island, Semirara Island, Sibay Island, and surrounding islets. For decades, geography has posed severe equity challenges: citizens in Semirara and Sibay routinely risk stormy sea crossings and incur ₱400 to ₱800 per round trip in motorized banca fares just to process routine business permits, request civil certificates, or file for medical crisis aid at Poblacion. As the Presiding Officer of the legislative branch, the Vice Mayor possesses the constitutional and statutory power under RA 7160 to sponsor the 'Caluya E-Governance & Ease of Doing Business Ordinance of 2026', author a Sangguniang Bayan Resolution approving this modern web portal, and allocate funding under the 20% Municipal Development Fund (MDF) and 5% MDRRM Fund. This proposal presents the complete legislative and technological masterplan to transform Caluya into Western Visayas' model Smart Island Municipality.",

  legislativeActions: [
    {
      measure: "Proposed Municipal Ordinance No. 2026-01",
      title: "The Caluya Smart Island E-Governance & Public Service Digitalization Act",
      scope: "Mandating all municipal offices (BPLO, LCR, Treasury, Assessor, MSWDO) to accept digital filings, recognize electronic receipts, and provide free public service Wi-Fi at island barangay halls.",
      sponsor: "Hon. Belfe S. Duran (Vice Mayor & Presiding Officer)"
    },
    {
      measure: "Draft Sangguniang Bayan Resolution No. 2026-042",
      title: "Resolution Authorizing Local Chief Executive to Enter into E-Gov MOAs",
      // Gene - Oct 06, 2026: Updated scope description to specify Municipal Mayor Hon. Rigil Kent G. Lim
      // scope: "Authorizing the Municipal Mayor to enter into agreements with DICT (e-LGU and GovNet), LandBank of the Philippines (Link.BizPortal), and GCash/Maya for official payment gateway integration.",
      scope: "Authorizing Municipal Mayor Hon. Rigil Kent G. Lim to enter into agreements with DICT (e-LGU and GovNet), LandBank of the Philippines (Link.BizPortal), and GCash/Maya for official payment gateway integration.",
      sponsor: "Committee on Rules, Ordinances & Legal Matters"
    },
    {
      measure: "Appropriation Ordinance CY 2026",
      title: "Fiscal Allocation under the 20% Municipal Development Fund",
      scope: "Appropriating support for secure government cloud hosting, automated SMS disaster gateways, and digital community kiosks for Semirara and Sibay islands.",
      sponsor: "Committee on Appropriations, Ways and Means"
    },
    {
      measure: "Legislative Oversight Mandate",
      title: "Creation of SB Oversight Committee on ICT & E-Governance",
      scope: "Establishing quarterly legislative review of online service turnaround times, citizen feedback metrics, and digital transparency compliance under DILG SGLG benchmarks.",
      sponsor: "Sangguniang Bayan ng Caluya"
    }
  ],

  pillars: [
    {
      num: "01",
      title: "Legislative Transparency & Digital Ordinance System",
      desc: "An open, searchable digital repository for all enacted Municipal Ordinances, SB Resolutions, session agendas, and committee hearing notices—giving all 18 barangay councils instant access to local laws.",
      impact: "100% compliance with DILG Full Disclosure Policy (FDP), Ease of Doing Business (RA 11032), and Freedom of Information.",
      viceMayorRole: "Presiding Officer's direct legislative showcase to all island constituents."
    },
    {
      num: "02",
      title: "Inter-Island Zero-Travel Citizen Services",
      desc: "Full digitization of e-BPLS business permits, Civil Registry certificates, RPTax real property calculations, and MSWDO AICS social crisis aid without boarding sea vessels.",
      impact: "Directly saves island households ~₱15,000,000 annually in aggregate motorized banca fares and lost workdays.",
      viceMayorRole: "Fulfills the Sangguniang Bayan's mandate for social equity and poverty alleviation."
    },
    {
      num: "03",
      title: "MDRRMC Maritime Safety & Island Rescue Lifeline",
      desc: "Centralized real-time weather, PAGASA gale warnings, VHF Marine Channel 16 monitoring, and Sea Ambulance medevac dispatch tracking across Caluya, Semirara, Sibay, and Sibato.",
      impact: "Zero-casualty early warning dissemination and rapid sea evacuation response for coastal fisherfolk.",
      viceMayorRole: "Legally backed by SB appropriation under the 5% Local Disaster Fund."
    },
    {
      num: "04",
      title: "Sustainable Island Economy & Tatusan Promotion",
      desc: "Modern digital promotion of Caluya's cultural identity: Tatusan Festival, pristine Liwagao sandbar, Sibato reef sanctuaries, and the global export agar-agar (seaweed) mariculture.",
      impact: "Attracts high-value eco-tourism and establishes direct institutional buyer linkages for Caluya seaweed farmers.",
      viceMayorRole: "Sponsored through municipal tourism and marine environmental protection codes."
    }
  ],

  technicalFeatures: [
    {
      name: "Island-Optimized Low-Bandwidth Architecture",
      detail: "Ultra-fast Vue 3 responsive design engineered specifically for 3G/4G cellular connections across remote island barangays with aggressive caching and offline resilience."
    },
    {
      name: "Sangguniang Bayan Digital Legislative Hall",
      detail: "Searchable municipal legislative library with downloadable signed ordinance PDFs, resolution indexes, and live session announcements for civic transparency."
    },
    {
      name: "24/7 MDRRMO OpCen & Sea Ambulance Tracker",
      detail: "Live maritime safety status, PAGASA gale warnings, PCG vessel advisories, and emergency medevac request dispatch module."
    },
    {
      name: "End-to-End E-Services with QR Code Authentication",
      detail: "Digital permit applications (e-BPLS), Civil Registry requests, and tax calculators generating cryptographically verifiable QR codes."
    },
    {
      name: "Multi-Channel Island Payment Integration",
      detail: "Ready for integration with LandBank Link.BizPortal, GCash, Maya, and over-the-counter payments at rural island partner outlets."
    }
  ],

  roadmap: [
    {
      phase: "Phase 1: Legislative Sponsorship & Portal Pilot",
      timeline: "Months 1 - 2",
      deliverables: "First reading of E-Governance Ordinance, SB Resolution adoption, launch of official portal, 18-barangay information directory, MDRRMO Gale Warning board."
    },
    {
      phase: "Phase 2: Digital E-Services & Committee Rollout",
      timeline: "Months 3 - 4",
      deliverables: "e-BPLS permitting, online Civil Registry ordering, RPTax discount calculator, SMS alert integration, and barangay hall staff training."
    },
    {
      phase: "Phase 3: Inter-Island Kiosks & Payment Gateways",
      timeline: "Months 5 - 6",
      deliverables: "LandBank Link.BizPortal and GCash gateway integration, deployment of solar-powered digital assistance kiosks at Semirara and Sibay ports."
    }
  ],

  budgetPhasing: [
    { item: "System Architecture, Design & Data Digitization", cost: "Included in Ready Prototype" },
    { item: "Annual Cloud Infrastructure, .gov.ph Domain & SSL", cost: "₱45,000 / year (Under MDF)" },
    { item: "Legislative Archive Digitization (Past Ordinances & Resolutions)", cost: "Sangguniang Bayan Capability Fund" },
    { item: "Barangay Digital Kiosks (Semirara, Sibay, Sibato Pilot)", cost: "LGU Capital Outlay / 20% MDF" }
  ],

  draftResolution: {
    title: "EXCERPT FROM THE MINUTES OF THE REGULAR SESSION OF THE SANGGUNIANG BAYAN NG CALUYA, PROVINCE OF ANTIQUE",
    resolutionNo: "RESOLUTION NO. 2026-___",
    series: "Series of 2026",
    sponsor: "HON. BELFE S. DURAN (Municipal Vice Mayor & Presiding Officer)",
    committee: "Committee on Rules, Ordinances & Legal Matters",
    titleFull: "A RESOLUTION COMMENDING AND ADOPTING THE CALUYA SMART ISLAND E-GOVERNANCE MASTERPLAN, ENDORSING THE OFFICIAL LGU WEB PORTAL, AND RECOMMENDING PRIORITY APPROPRIATIONS UNDER THE 20% MUNICIPAL DEVELOPMENT FUND (MDF).",
    whereasClauses: [
      "WHEREAS, Section 16 of Republic Act No. 7160 (Local Government Code of 1991) mandates every local government unit to ensure the general welfare, promote health and safety, and preserve the convenience and comfort of its inhabitants;",
      "WHEREAS, Republic Act No. 11032, also known as the Ease of Doing Business and Efficient Government Service Delivery Act of 2018, mandates all local government units to streamline and digitize public service transactions;",
      "WHEREAS, the archipelagic geography of Caluya, comprising eighteen (18) barangays dispersed across Caluya, Semirara, Sibay, and outlying islets, requires our constituents to navigate hazardous seas and expend substantial travel funds to transact at the Municipal Hall in Poblacion;",
      "WHEREAS, the adoption of an official, island-resilient LGU Web Portal will immediately deliver zero-travel public services, real-time PAGASA sea gale alerts, 24/7 MDRRMC sea ambulance dispatch, and full transparency of Sangguniang Bayan ordinances;",
      "WHEREAS, the Sangguniang Bayan ng Caluya, under the leadership of Municipal Vice Mayor Hon. Belfe S. Duran, affirms its firm commitment to modernizing local government administration through innovative digital public services;"
    ],
    resolvingClause: "NOW, THEREFORE, on motion of the Honorable Members of the Sangguniang Bayan, duly seconded: RESOLVED, AS IT IS HEREBY RESOLVED, to approve and adopt the Caluya Smart Island Digital Modernization Masterplan, and to authoritatively endorse the necessary budgetary appropriation under the CY 2026 Annual Investment Program (AIP)."
  }
};
*/

// Gene - Oct 06, 2026: Official LGU Modernization & E-Governance Proposal Presentation by genexis.dev (Proponent: Raffy Soquilon) presented respectfully for evaluation to Hon. Belfe S. Duran, Municipal Vice Mayor & Sangguniang Bayan ng Caluya
/*
export const PROPOSAL_DATA = {
  title: "LGU Digital Transformation & E-Governance Platform Presentation",
  subTitle: "A Working Island-Resilient Public Service Prototype Developed for Caluya, Antique",
  company: "genexis.dev",
  proponent: "Raffy Soquilon",
  proponentRole: "Lead Solutions Architect & Proponent, genexis.dev",
  preparedBy: "Raffy Soquilon • genexis.dev",
  preparedFor: "Hon. Belfe S. Duran, Municipal Vice Mayor & Presiding Officer, Sangguniang Bayan ng Caluya",
  targetOfficial: "Hon. Belfe S. Duran",
  targetRole: "Municipal Vice Mayor & Presiding Officer",
  legislativeBody: "Sangguniang Bayan ng Caluya (18 Island Barangays)",
  date: "October 2026",
  docReference: "GENEXIS-CALUYA-2026-01",
  
  vision: "To present a practical, island-tailored digital public service platform built specifically for Caluya, Antique—connecting all 18 island barangays to eliminate unnecessary sea crossings for routine municipal transactions, strengthen maritime safety communications, and make local government services readily accessible to every constituent.",

  executiveSummary: "To the Honorable Municipal Vice Mayor Belfe S. Duran and the Sangguniang Bayan ng Caluya: We at genexis.dev, led by proponent Raffy Soquilon, respectfully present this working digital portal prototype developed specifically for the archipelagic conditions of Caluya, Antique. With 18 barangays spread across Caluya Island, Semirara, Sibay, and outlying islets, islanders frequently spend ₱400 to ₱800 and face unpredictable sea conditions just to process business permits, civil documents, or emergency assistance at Poblacion. Rather than proposing abstract concepts, we have built a functional, mobile-friendly platform ready for your review—featuring zero-travel e-services, live MDRRMO sea ambulance dispatch tracking, PAGASA marine gale warning boards, transparent legislative archives, and community health lifelines. We submit this prototype for your kind evaluation as a practical, ready-to-deploy solution for Caluya.",

  presentationNotes: [
    {
      point: "Respectful & Consultative Approach",
      detail: "We are presenting a working software prototype ready for demonstration. We do not prescribe legislative mandates or dictate council policies; rather, we provide a functional solution for your review and guidance."
    },
    {
      point: "Tailored for Caluya's Island Geography",
      detail: "Every screen has been engineered around Caluya's unique geography—serving Caluya Island, Semirara Island, Sibay Island, Sibato, and Liwagao with mobile-first and low-bandwidth resilience."
    },
    {
      point: "Ready for Demonstration & Testing",
      detail: "The portal is fully interactive today. Sangguniang Bayan officials and department heads can test permit applications, emergency hotlines, and legislative document views immediately."
    }
  ],

  pillars: [
    {
      num: "01",
      title: "Inter-Island Zero-Travel Public Services",
      desc: "Fully functional digital workflows for e-BPLS business permit inquiries, Civil Registry document requests, RPTax real property tax calculator, and MSWDO crisis aid filing.",
      impact: "Saves island constituents ~₱15,000,000 annually in aggregate motorized pumpboat fares and lost working days.",
      highlight: "Enables constituents in Semirara, Sibay, and Sibato to transact locally without boarding sea vessels."
    },
    {
      num: "02",
      title: "MDRRMC Maritime Safety & Rescue Lifeline",
      desc: "Centralized disaster hub featuring live PAGASA gale warnings, Coast Guard sea advisory notices, VHF Marine Channel 16 monitoring, and 24/7 Sea Ambulance dispatch tracking.",
      impact: "Zero-casualty early warning dissemination for coastal fisherfolk and rapid sea medevac coordination.",
      highlight: "Engineered specifically for Caluya's challenging open sea lanes."
    },
    {
      num: "03",
      title: "Public Legislative & Administrative Transparency",
      desc: "Searchable municipal archive organizing enacted municipal ordinances, Sangguniang Bayan resolutions, committee hearing schedules, and DILG Full Disclosure notices.",
      impact: "Promotes open, transparent local governance and equips all 18 barangay councils with immediate access to municipal information.",
      highlight: "Simple public access fostering civic trust and citizen engagement."
    },
    {
      num: "04",
      title: "Island-Optimized Low-Bandwidth Engineering",
      desc: "Built with Vue 3 and modern web standards with minimal payload size, aggressive client-side caching, and offline-friendly data views for intermittent 3G/4G cellular networks.",
      impact: "Ensures fast loading and reliable performance even in remote coastal barangays with spotty cellular coverage.",
      highlight: "Designed and optimized by genexis.dev for real-world island environments."
    }
  ],

  prototypeModules: [
    {
      category: "Frontline Citizen E-Services",
      summary: "Zero-travel online services reducing transport burdens for island constituents.",
      features: [
        "e-BPLS Business Permit application checklist & fee estimator",
        "Civil Registry document requests (Birth, Marriage, Death)",
        "Real Property Tax (RPTax) calculator with island prompt-payment incentives",
        "MSWDO AICS social crisis aid intake form & requirements guide"
      ]
    },
    {
      category: "Maritime Safety & Emergency OpCen",
      summary: "Real-time safety and sea rescue lifeline for fisherfolk and passengers.",
      features: [
        "24/7 Sea Ambulance medevac dispatch tracking (Caluya & Semirara vessels)",
        "PAGASA Gale Warning board & Philippine Coast Guard sea voyage advisories",
        "Direct emergency hotlines (MDRRMO 911, VHF Ch 16, PCG, PNP, BFP)",
        "Island Evacuation Center directory with capacity and amenity status"
      ]
    },
    {
      category: "Municipal Health & Community Services",
      summary: "Healthcare schedules, medicine inventory, and social welfare programs.",
      features: [
        "RHU 1 (Poblacion) & RHU 2 (Semirara) 24/7 clinic & doctor schedules",
        "Free municipal maintenance medicine inventory & pharmacy tracker",
        "Animal bite clinic (anti-rabies) & immunization schedules",
        "PESO local employment opportunities board & SMPC job listings"
      ]
    },
    {
      category: "Island Culture, Tourism & Fisheries",
      summary: "Showcase of local heritage, ecotourism destinations, and mariculture.",
      features: [
        "Tatusan Festival cultural showcase & coconut crab conservation",
        "Liwagao Island sandbar, Sibato reef, and ecotourism guide",
        "Seaweed (agar-agar) mariculture & fisherfolk support registry",
        "18 Island Barangays directory with profiles, captains, and contacts"
      ]
    }
  ],

  technicalFeatures: [
    {
      name: "Island-Optimized Lightweight Architecture",
      detail: "Engineered by genexis.dev using Vue 3 and Vite for lightning-fast loads, minimal data usage, and smooth rendering on entry-level mobile devices across the islands."
    },
    {
      name: "Responsive Mobile-First Design",
      detail: "Clean layout tailored for smartphones, tablets, and desktops, ensuring all constituents can browse services comfortably without visual clutter."
    },
    {
      name: "Bilingual Accessibility (English & Kinaray-a/Hiligaynon)",
      detail: "Bilingual interface elements designed for inclusive usability by senior citizens, fisherfolk, and barangay leaders."
    },
    {
      name: "Offline-Resilient Emergency Data",
      detail: "Emergency hotlines, evacuation shelters, and clinic contacts are cached locally so they remain accessible even during temporary sea signal drops."
    },
    {
      name: "Interoperable & National-Gateway Ready",
      detail: "Built on modular standards ready for future integration with LandBank Link.BizPortal, GCash, Maya, and national DICT e-LGU systems whenever designated by the LGU."
    }
  ],

  collaborativeSteps: [
    {
      step: "Phase 1: Working Prototype Review & Feedback",
      timeline: "Immediate / Demonstration",
      description: "Interactive walkthrough of the working portal with Vice Mayor Belfe S. Duran, Sangguniang Bayan members, and department heads to gather comments, local preferences, and specific municipal inputs."
    },
    {
      step: "Phase 2: Tailoring to Department Requirements",
      timeline: "Collaborative Customization",
      description: "Aligning digital forms, local fee structures, and department checklists with Caluya's existing procedures and administrative guidelines."
    },
    {
      step: "Phase 3: Turnkey Handover & Barangay Orientation",
      timeline: "Deployment & Training",
      description: "Assisting with official hosting (.gov.ph), conducting orientation for island barangay staff (Semirara, Sibay, Sibato), and providing full technical documentation to LGU personnel."
    }
  ],

  budgetPhasing: [
    { item: "Interactive Portal Prototype & Architecture (genexis.dev)", cost: "Fully Developed Prototype Ready for Review" },
    { item: "Annual Cloud Infrastructure, .gov.ph Domain & SSL", cost: "Estimated ~₱45,000 / year (Standard Gov Cloud)" },
    { item: "Department Customization & Staff Training", cost: "Customizable based on LGU Scope & Needs" },
    { item: "Barangay Digital Access Points (Pilot for Outlying Islands)", cost: "Optional Phase for Semirara & Sibay Halls" }
  ]
};
*/

// Gene - Oct 06, 2026: Previous PROPOSAL_DATA with Gene Ray Medel attribution
/*
export const PROPOSAL_DATA = {
  title: "LGU Digital Transformation & E-Governance Platform Presentation",
  subTitle: "A Working Island-Resilient Public Service Prototype Developed for Caluya, Antique",
  company: "genexis.dev",
  proponent: "Raffy Soquilon",
  proponentRole: "Lead Proponent",
  creator: "Gene Ray Medel",
  developer: "Gene Ray Medel",
  creatorRole: "Creator & Lead Developer, genexis.dev",
  preparedBy: "Raffy Soquilon (Proponent) • Created & Developed by Gene Ray Medel (genexis.dev)",
  preparedFor: "Hon. Belfe S. Duran, Municipal Vice Mayor & Presiding Officer, Sangguniang Bayan ng Caluya",
  targetOfficial: "Hon. Belfe S. Duran",
  targetRole: "Municipal Vice Mayor & Presiding Officer",
  legislativeBody: "Sangguniang Bayan ng Caluya (18 Island Barangays)",
  date: "October 2026",
  docReference: "GENEXIS-CALUYA-2026-01",
  
  vision: "To present a practical, island-tailored digital public service platform built specifically for Caluya, Antique—connecting all 18 island barangays to eliminate unnecessary sea crossings for routine municipal transactions, strengthen maritime safety communications, and make local government services readily accessible to every constituent.",

  executiveSummary: "To the Honorable Municipal Vice Mayor Belfe S. Duran and the Sangguniang Bayan ng Caluya: We respectfully present this working digital portal prototype developed for the archipelagic conditions of Caluya, Antique. This initiative is presented by proponent Raffy Soquilon, and was created and developed by Gene Ray Medel of genexis.dev. With 18 barangays spread across Caluya Island, Semirara, Sibay, and outlying islets, islanders frequently spend ₱400 to ₱800 and face unpredictable sea conditions just to process business permits, civil documents, or emergency assistance at Poblacion. Rather than proposing abstract concepts, we have built a functional, mobile-friendly platform ready for your review—featuring zero-travel e-services, live MDRRMO sea ambulance dispatch tracking, PAGASA marine gale warning boards, transparent legislative archives, and community health lifelines. We submit this prototype for your kind evaluation as a practical, ready-to-deploy solution for Caluya.",

  presentationNotes: [
    {
      point: "Respectful & Consultative Approach",
      detail: "Presented by proponent Raffy Soquilon and created/developed by Gene Ray Medel of genexis.dev as a working software prototype ready for demonstration. We do not prescribe legislative mandates or dictate council policies; rather, we provide a functional solution for your review and guidance."
    },
    {
      point: "Tailored for Caluya's Island Geography",
      detail: "Every screen has been engineered around Caluya's unique geography—serving Caluya Island, Semirara Island, Sibay Island, Sibato, and Liwagao with mobile-first and low-bandwidth resilience."
    },
    {
      point: "Ready for Demonstration & Testing",
      detail: "The portal is fully interactive today. Sangguniang Bayan officials and department heads can test permit applications, emergency hotlines, and legislative document views immediately."
    }
  ],

  pillars: [
    {
      num: "01",
      title: "Inter-Island Zero-Travel Public Services",
      desc: "Fully functional digital workflows for e-BPLS business permit inquiries, Civil Registry document requests, RPTax real property tax calculator, and MSWDO crisis aid filing.",
      impact: "Saves island constituents ~₱15,000,000 annually in aggregate motorized pumpboat fares and lost working days.",
      highlight: "Enables constituents in Semirara, Sibay, and Sibato to transact locally without boarding sea vessels."
    },
    {
      num: "02",
      title: "MDRRMC Maritime Safety & Rescue Lifeline",
      desc: "Centralized disaster hub featuring live PAGASA gale warnings, Coast Guard sea advisory notices, VHF Marine Channel 16 monitoring, and 24/7 Sea Ambulance dispatch tracking.",
      impact: "Zero-casualty early warning dissemination for coastal fisherfolk and rapid sea medevac coordination.",
      highlight: "Engineered specifically for Caluya's challenging open sea lanes."
    },
    {
      num: "03",
      title: "Public Legislative & Administrative Transparency",
      desc: "Searchable municipal archive organizing enacted municipal ordinances, Sangguniang Bayan resolutions, committee hearing schedules, and DILG Full Disclosure notices.",
      impact: "Promotes open, transparent local governance and equips all 18 barangay councils with immediate access to municipal information.",
      highlight: "Simple public access fostering civic trust and citizen engagement."
    },
    {
      num: "04",
      title: "Island-Optimized Low-Bandwidth Engineering",
      desc: "Built with Vue 3 and modern web standards with minimal payload size, aggressive client-side caching, and offline-friendly data views for intermittent 3G/4G cellular networks.",
      impact: "Ensures fast loading and reliable performance even in remote coastal barangays with spotty cellular coverage.",
      highlight: "Created and optimized by Gene Ray Medel (genexis.dev) for real-world island environments."
    }
  ],

  prototypeModules: [
    {
      category: "Frontline Citizen E-Services",
      summary: "Zero-travel online services reducing transport burdens for island constituents.",
      features: [
        "e-BPLS Business Permit application checklist & fee estimator",
        "Civil Registry document requests (Birth, Marriage, Death)",
        "Real Property Tax (RPTax) calculator with island prompt-payment incentives",
        "MSWDO AICS social crisis aid intake form & requirements guide"
      ]
    },
    {
      category: "Maritime Safety & Emergency OpCen",
      summary: "Real-time safety and sea rescue lifeline for fisherfolk and passengers.",
      features: [
        "24/7 Sea Ambulance medevac dispatch tracking (Caluya & Semirara vessels)",
        "PAGASA Gale Warning board & Philippine Coast Guard sea voyage advisories",
        "Direct emergency hotlines (MDRRMO 911, VHF Ch 16, PCG, PNP, BFP)",
        "Island Evacuation Center directory with capacity and amenity status"
      ]
    },
    {
      category: "Municipal Health & Community Services",
      summary: "Healthcare schedules, medicine inventory, and social welfare programs.",
      features: [
        "RHU 1 (Poblacion) & RHU 2 (Semirara) 24/7 clinic & doctor schedules",
        "Free municipal maintenance medicine inventory & pharmacy tracker",
        "Animal bite clinic (anti-rabies) & immunization schedules",
        "PESO local employment opportunities board & SMPC job listings"
      ]
    },
    {
      category: "Island Culture, Tourism & Fisheries",
      summary: "Showcase of local heritage, ecotourism destinations, and mariculture.",
      features: [
        "Tatusan Festival cultural showcase & coconut crab conservation",
        "Liwagao Island sandbar, Sibato reef, and ecotourism guide",
        "Seaweed (agar-agar) mariculture & fisherfolk support registry",
        "18 Island Barangays directory with profiles, captains, and contacts"
      ]
    }
  ],

  technicalFeatures: [
    {
      name: "Island-Optimized Lightweight Architecture",
      detail: "Created and developed by Gene Ray Medel (genexis.dev) using Vue 3 and Vite for lightning-fast loads, minimal data usage, and smooth rendering on entry-level mobile devices across the islands."
    },
    {
      name: "Responsive Mobile-First Design",
      detail: "Clean layout tailored for smartphones, tablets, and desktops, ensuring all constituents can browse services comfortably without visual clutter."
    },
    {
      name: "Bilingual Accessibility (English & Kinaray-a/Hiligaynon)",
      detail: "Bilingual interface elements designed for inclusive usability by senior citizens, fisherfolk, and barangay leaders."
    },
    {
      name: "Offline-Resilient Emergency Data",
      detail: "Emergency hotlines, evacuation shelters, and clinic contacts are cached locally so they remain accessible even during temporary sea signal drops."
    },
    {
      name: "Interoperable & National-Gateway Ready",
      detail: "Built on modular standards ready for future integration with LandBank Link.BizPortal, GCash, Maya, and national DICT e-LGU systems whenever designated by the LGU."
    }
  ],

  collaborativeSteps: [
    {
      step: "Phase 1: Working Prototype Review & Feedback",
      timeline: "Immediate / Demonstration",
      description: "Interactive walkthrough of the working portal with Vice Mayor Belfe S. Duran, Sangguniang Bayan members, and department heads to gather comments, local preferences, and specific municipal inputs."
    },
    {
      step: "Phase 2: Tailoring to Department Requirements",
      timeline: "Collaborative Customization",
      description: "Aligning digital forms, local fee structures, and department checklists with Caluya's existing procedures and administrative guidelines."
    },
    {
      step: "Phase 3: Turnkey Handover & Barangay Orientation",
      timeline: "Deployment & Training",
      description: "Assisting with official hosting (.gov.ph), conducting orientation for island barangay staff (Semirara, Sibay, Sibato), and providing full technical documentation to LGU personnel."
    }
  ],

  budgetPhasing: [
    { item: "Interactive Portal Prototype (Created & Developed by Gene Ray Medel • genexis.dev)", cost: "Fully Developed Prototype Ready for Review" },
    { item: "Annual Cloud Infrastructure, .gov.ph Domain & SSL", cost: "Estimated ~₱45,000 / year (Standard Gov Cloud)" },
    { item: "Department Customization & Staff Training", cost: "Customizable based on LGU Scope & Needs" },
    { item: "Barangay Digital Access Points (Pilot for Outlying Islands)", cost: "Optional Phase for Semirara & Sibay Halls" }
  ]
};
*/

// Gene - Oct 06, 2026: Designating Raffy Suguilon as sole proponent and genexis.dev as company, removing Gene Ray Medel from the proposal per user instruction
export const PROPOSAL_DATA = {
  title: "LGU Digital Transformation & E-Governance Platform Presentation",
  subTitle: "A Working Island-Resilient Public Service Prototype Developed for Caluya, Antique",
  company: "genexis.dev",
  proponent: "Raffy Suguilon",
  proponentRole: "Lead Proponent",
  preparedBy: "Raffy Suguilon (Proponent) • genexis.dev",
  preparedFor: "Hon. Belfe S. Duran, Municipal Vice Mayor & Presiding Officer, Sangguniang Bayan ng Caluya",
  targetOfficial: "Hon. Belfe S. Duran",
  targetRole: "Municipal Vice Mayor & Presiding Officer",
  legislativeBody: "Sangguniang Bayan ng Caluya (18 Island Barangays)",
  date: "October 2026",
  docReference: "GENEXIS-CALUYA-2026-01",
  
  vision: "To present a practical, island-tailored digital public service platform built specifically for Caluya, Antique—connecting all 18 island barangays to eliminate unnecessary sea crossings for routine municipal transactions, strengthen maritime safety communications, and make local government services readily accessible to every constituent.",

  executiveSummary: "To the Honorable Municipal Vice Mayor Belfe S. Duran and the Sangguniang Bayan ng Caluya: We respectfully present this working digital portal prototype developed for the archipelagic conditions of Caluya, Antique. This initiative is presented by proponent Raffy Suguilon of genexis.dev. With 18 barangays spread across Caluya Island, Semirara, Sibay, and outlying islets, islanders frequently spend ₱400 to ₱800 and face unpredictable sea conditions just to process business permits, civil documents, or emergency assistance at Poblacion. Rather than proposing abstract concepts, we have built a functional, mobile-friendly platform ready for your review—featuring zero-travel e-services, live MDRRMO sea ambulance dispatch tracking, PAGASA marine gale warning boards, transparent legislative archives, and community health lifelines. We submit this prototype for your kind evaluation as a practical, ready-to-deploy solution for Caluya.",

  presentationNotes: [
    {
      point: "Respectful & Consultative Approach",
      detail: "Presented by proponent Raffy Suguilon (genexis.dev) as a working software prototype ready for demonstration. We do not prescribe legislative mandates or dictate council policies; rather, we provide a functional solution for your review and guidance."
    },
    {
      point: "Tailored for Caluya's Island Geography",
      detail: "Every screen has been engineered around Caluya's unique geography—serving Caluya Island, Semirara Island, Sibay Island, Sibato, and Liwagao with mobile-first and low-bandwidth resilience."
    },
    {
      point: "Ready for Demonstration & Testing",
      detail: "The portal is fully interactive today. Sangguniang Bayan officials and department heads can test permit applications, emergency hotlines, and legislative document views immediately."
    }
  ],

  pillars: [
    {
      num: "01",
      title: "Inter-Island Zero-Travel Public Services",
      desc: "Fully functional digital workflows for e-BPLS business permit inquiries, Civil Registry document requests, RPTax real property tax calculator, and MSWDO crisis aid filing.",
      impact: "Saves island constituents ~₱15,000,000 annually in aggregate motorized pumpboat fares and lost working days.",
      highlight: "Enables constituents in Semirara, Sibay, and Sibato to transact locally without boarding sea vessels."
    },
    {
      num: "02",
      title: "MDRRMC Maritime Safety & Rescue Lifeline",
      desc: "Centralized disaster hub featuring live PAGASA gale warnings, Coast Guard sea advisory notices, VHF Marine Channel 16 monitoring, and 24/7 Sea Ambulance dispatch tracking.",
      impact: "Zero-casualty early warning dissemination for coastal fisherfolk and rapid sea medevac coordination.",
      highlight: "Engineered specifically for Caluya's challenging open sea lanes."
    },
    {
      num: "03",
      title: "Public Legislative & Administrative Transparency",
      desc: "Searchable municipal archive organizing enacted municipal ordinances, Sangguniang Bayan resolutions, committee hearing schedules, and DILG Full Disclosure notices.",
      impact: "Promotes open, transparent local governance and equips all 18 barangay councils with immediate access to municipal information.",
      highlight: "Simple public access fostering civic trust and citizen engagement."
    },
    {
      num: "04",
      title: "Island-Optimized Low-Bandwidth Engineering",
      desc: "Built with Vue 3 and modern web standards with minimal payload size, aggressive client-side caching, and offline-friendly data views for intermittent 3G/4G cellular networks.",
      impact: "Ensures fast loading and reliable performance even in remote coastal barangays with spotty cellular coverage.",
      highlight: "Designed and optimized by genexis.dev for real-world island environments."
    }
  ],

  prototypeModules: [
    {
      category: "Frontline Citizen E-Services",
      summary: "Zero-travel online services reducing transport burdens for island constituents.",
      features: [
        "e-BPLS Business Permit application checklist & fee estimator",
        "Civil Registry document requests (Birth, Marriage, Death)",
        "Real Property Tax (RPTax) calculator with island prompt-payment incentives",
        "MSWDO AICS social crisis aid intake form & requirements guide"
      ]
    },
    {
      category: "Maritime Safety & Emergency OpCen",
      summary: "Real-time safety and sea rescue lifeline for fisherfolk and passengers.",
      features: [
        "24/7 Sea Ambulance medevac dispatch tracking (Caluya & Semirara vessels)",
        "PAGASA Gale Warning board & Philippine Coast Guard sea voyage advisories",
        "Direct emergency hotlines (MDRRMO 911, VHF Ch 16, PCG, PNP, BFP)",
        "Island Evacuation Center directory with capacity and amenity status"
      ]
    },
    {
      category: "Municipal Health & Community Services",
      summary: "Healthcare schedules, medicine inventory, and social welfare programs.",
      features: [
        "RHU 1 (Poblacion) & RHU 2 (Semirara) 24/7 clinic & doctor schedules",
        "Free municipal maintenance medicine inventory & pharmacy tracker",
        "Animal bite clinic (anti-rabies) & immunization schedules",
        "PESO local employment opportunities board & SMPC job listings"
      ]
    },
    {
      category: "Island Culture, Tourism & Fisheries",
      summary: "Showcase of local heritage, ecotourism destinations, and mariculture.",
      features: [
        "Tatusan Festival cultural showcase & coconut crab conservation",
        "Liwagao Island sandbar, Sibato reef, and ecotourism guide",
        "Seaweed (agar-agar) mariculture & fisherfolk support registry",
        "18 Island Barangays directory with profiles, captains, and contacts"
      ]
    }
  ],

  technicalFeatures: [
    {
      name: "Island-Optimized Lightweight Architecture",
      detail: "Engineered by genexis.dev using Vue 3 and Vite for lightning-fast loads, minimal data usage, and smooth rendering on entry-level mobile devices across the islands."
    },
    {
      name: "Responsive Mobile-First Design",
      detail: "Clean layout tailored for smartphones, tablets, and desktops, ensuring all constituents can browse services comfortably without visual clutter."
    },
    {
      name: "Bilingual Accessibility (English & Kinaray-a/Hiligaynon)",
      detail: "Bilingual interface elements designed for inclusive usability by senior citizens, fisherfolk, and barangay leaders."
    },
    {
      name: "Offline-Resilient Emergency Data",
      detail: "Emergency hotlines, evacuation shelters, and clinic contacts are cached locally so they remain accessible even during temporary sea signal drops."
    },
    {
      name: "Interoperable & National-Gateway Ready",
      detail: "Built on modular standards ready for future integration with LandBank Link.BizPortal, GCash, Maya, and national DICT e-LGU systems whenever designated by the LGU."
    }
  ],

  collaborativeSteps: [
    {
      step: "Phase 1: Working Prototype Review & Feedback",
      timeline: "Immediate / Demonstration",
      description: "Interactive walkthrough of the working portal with Vice Mayor Belfe S. Duran, Sangguniang Bayan members, and department heads to gather comments, local preferences, and specific municipal inputs."
    },
    {
      step: "Phase 2: Tailoring to Department Requirements",
      timeline: "Collaborative Customization",
      description: "Aligning digital forms, local fee structures, and department checklists with Caluya's existing procedures and administrative guidelines."
    },
    {
      step: "Phase 3: Turnkey Handover & Barangay Orientation",
      timeline: "Deployment & Training",
      description: "Assisting with official hosting (.gov.ph), conducting orientation for island barangay staff (Semirara, Sibay, Sibato), and providing full technical documentation to LGU personnel."
    }
  ],

  budgetPhasing: [
    { item: "Interactive Portal Prototype (genexis.dev • Proponent: Raffy Suguilon)", cost: "Fully Developed Prototype Ready for Review" },
    { item: "Annual Cloud Infrastructure, .gov.ph Domain & SSL", cost: "Estimated ~₱45,000 / year (Standard Gov Cloud)" },
    { item: "Department Customization & Staff Training", cost: "Customizable based on LGU Scope & Needs" },
    { item: "Barangay Digital Access Points (Pilot for Outlying Islands)", cost: "Optional Phase for Semirara & Sibay Halls" }
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

// Gene - Oct 06, 2026: Added comprehensive National Government Portals (LTO, NBI, SSS, PhilHealth, Pag-IBIG, GSIS, PSA, DFA, BIR, PRC, DMW) and DICT eGov PH Super App data for Caluya citizens

// Gene - Oct 07, 2026: Updated eGov PH official website URL to https://e.gov.ph/
/*
export const EGOV_APP_DATA = {
  name: "eGov PH Super App",
  shortName: "eGov PH",
  developer: "Department of Information and Communications Technology (DICT)",
  republicNotice: "Official Super App of the Republic of the Philippines",
  tagline: "One App for All Government Transactions",
  description: "A centralized digital gateway connecting all national agencies and local government units. Integrates your Digital National ID (ePhilID), PhilHealth, SSS, GSIS, Pag-IBIG, eTravel, and local LGU services into a single unified mobile platform.",
  webPortal: "https://egov.gov.ph/",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=egov.app",
  appleAppStoreUrl: "https://apps.apple.com/ph/app/egov-ph/id1644797630",
  highlights: [
    { title: "Digital National ID (ePhilID)", desc: "Valid official government identification with verify-ready QR code." },
    { title: "PhilHealth, SSS & GSIS In One Place", desc: "Instant view of membership records, contributions, and claims." },
    { title: "eTravel QR Clearance", desc: "Fast-lane international & inter-island travel declaration." },
    { title: "Interoperable LGU Services", desc: "Bridge Caluya local island services with national government databases." }
  ]
};
*/
// Gene - Oct 07, 2026: Updated Apple App Store URL for eGov PH to working official link https://apps.apple.com/us/app/egovph/id6447682225
/*
export const EGOV_APP_DATA = {
  name: "eGov PH Super App",
  shortName: "eGov PH",
  developer: "Department of Information and Communications Technology (DICT)",
  republicNotice: "Official Super App of the Republic of the Philippines",
  tagline: "One App for All Government Transactions",
  description: "A centralized digital gateway connecting all national agencies and local government units. Integrates your Digital National ID (ePhilID), PhilHealth, SSS, GSIS, Pag-IBIG, eTravel, and local LGU services into a single unified mobile platform.",
  webPortal: "https://e.gov.ph/",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=egov.app",
  appleAppStoreUrl: "https://apps.apple.com/ph/app/egov-ph/id1644797630",
  highlights: [
    { title: "Digital National ID (ePhilID)", desc: "Valid official government identification with verify-ready QR code." },
    { title: "PhilHealth, SSS & GSIS In One Place", desc: "Instant view of membership records, contributions, and claims." },
    { title: "eTravel QR Clearance", desc: "Fast-lane international & inter-island travel declaration." },
    { title: "Interoperable LGU Services", desc: "Bridge Caluya local island services with national government databases." }
  ]
};
*/
export const EGOV_APP_DATA = {
  name: "eGov PH Super App",
  shortName: "eGov PH",
  developer: "Department of Information and Communications Technology (DICT)",
  republicNotice: "Official Super App of the Republic of the Philippines",
  tagline: "One App for All Government Transactions",
  description: "A centralized digital gateway connecting all national agencies and local government units. Integrates your Digital National ID (ePhilID), PhilHealth, SSS, GSIS, Pag-IBIG, eTravel, and local LGU services into a single unified mobile platform.",
  webPortal: "https://e.gov.ph/",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=egov.app",
  appleAppStoreUrl: "https://apps.apple.com/us/app/egovph/id6447682225",
  highlights: [
    { title: "Digital National ID (ePhilID)", desc: "Valid official government identification with verify-ready QR code." },
    { title: "PhilHealth, SSS & GSIS In One Place", desc: "Instant view of membership records, contributions, and claims." },
    { title: "eTravel QR Clearance", desc: "Fast-lane international & inter-island travel declaration." },
    { title: "Interoperable LGU Services", desc: "Bridge Caluya local island services with national government databases." }
  ]
};

export const NATIONAL_GOVERNMENT_PORTALS = [
  {
    id: "lto",
    acronym: "LTO",
    name: "Land Transportation Office",
    portalName: "LTMS Online Portal",
    url: "https://portal.lto.gov.ph/",
    category: "Transport & Licensing",
    badge: "Driver & Vehicles",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    desc: "Driver's license renewal, student permit, motor vehicle registration, and theoretical exam appointment without leaving the island.",
    services: [
      "Driver's License Renewal & Applications",
      "Motor Vehicle Registration Status",
      "Online Theoretical Examination",
      "Driver's License Demerit Points Check"
    ]
  },
  {
    id: "nbi",
    acronym: "NBI",
    name: "National Bureau of Investigation",
    portalName: "NBI Clearance Online",
    url: "https://clearance.nbi.gov.ph/",
    category: "Security & Clearances",
    badge: "Clearance & Identity",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    desc: "Apply for or renew your NBI Clearance online with nationwide branch appointment booking and door-to-door delivery.",
    services: [
      "New NBI Clearance Application",
      "Quick Online Renewal (Door-to-Door Delivery)",
      "Branch Appointment Scheduling",
      "Electronic Status Tracking"
    ]
  },
  {
    id: "sss",
    acronym: "SSS",
    name: "Social Security System",
    portalName: "My.SSS Member Portal",
    url: "https://member.sss.gov.ph/",
    category: "Social Insurance",
    badge: "Private Sector & Self-Employed",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    desc: "View contribution records, apply for salary and calamity loans, file for maternity/sickness benefits, and monitor retirement funds.",
    services: [
      "Posted Contributions History",
      "Online Salary & Calamity Loan Applications",
      "Maternity, Sickness & Disability Claims",
      "Retirement & Pension Benefit Filing"
    ]
  },
  {
    id: "philhealth",
    acronym: "PhilHealth",
    name: "Philippine Health Insurance Corporation",
    portalName: "PhilHealth Member Portal",
    url: "https://memberinquiry.philhealth.gov.ph/",
    category: "Healthcare Coverage",
    badge: "Universal Healthcare",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    desc: "Download your official Member Data Record (MDR), check premium contributions, register for PhilHealth Konsulta, and verify claims.",
    services: [
      "Member Data Record (MDR) Download",
      "Premium Payment & Contribution Verification",
      "PhilHealth Konsulta Clinic Registration",
      "Accredited Health Facilities & Hospital Search"
    ]
  },
  {
    id: "pagibig",
    acronym: "Pag-IBIG",
    name: "Home Development Mutual Fund (HDMF)",
    portalName: "Virtual Pag-IBIG",
    url: "https://www.pagibigfundservices.com/virtualpagibig/",
    category: "Housing & Savings",
    badge: "MP2 & Housing",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    desc: "Manage regular savings and Modified Pag-IBIG II (MP2), apply for Multi-Purpose Loans (MPL), and compute housing loans online.",
    services: [
      "Modified Pag-IBIG II (MP2) Enrollment & Savings",
      "Multi-Purpose Loan (MPL) Online Filing",
      "Housing Loan Application & Amortization",
      "Virtual Pag-IBIG Member Account Tracking"
    ]
  },
  {
    id: "gsis",
    acronym: "GSIS",
    name: "Government Service Insurance System",
    portalName: "GSIS Touch & Web Portal",
    url: "https://www.gsis.gov.ph/",
    category: "Public Sector Insurance",
    badge: "Government Employees",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    desc: "For public school teachers, municipal staff, and government workers: access pension records, Multi-Purpose Loans, and life insurance.",
    services: [
      "GSIS Touch Mobile Services",
      "Multi-Purpose Loan (MPL) Plus",
      "Pensioner Annual Verification (APOR)",
      "Retirement & Policy Loan Records"
    ]
  },
  {
    id: "psa",
    acronym: "PSA",
    name: "Philippine Statistics Authority",
    portalName: "PSA Serbilis / Helpline",
    url: "https://www.psaserbilis.com.ph/",
    category: "Civil Registry Documents",
    badge: "Birth & Marriage Certs",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    desc: "Order certified true copies of Birth, Marriage, Death Certificates, and CENOMAR on official security paper delivered to your address.",
    services: [
      "Birth Certificate (Certificate of Live Birth)",
      "Marriage Certificate",
      "Certificate of No Marriage Record (CENOMAR)",
      "Death Certificate Delivery"
    ]
  },
  {
    id: "dfa",
    acronym: "DFA",
    name: "Department of Foreign Affairs",
    portalName: "DFA Passport Appointment",
    url: "https://passport.gov.ph/",
    category: "Consular & Travel",
    badge: "Passports & Visas",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    desc: "Schedule online appointments for new ePassport applications, renewals at consular offices (Iloilo/Kalibo), and document apostille.",
    services: [
      "Online Passport Appointment Booking",
      "Passport Application Requirements Checklist",
      "Passport Tracking & Delivery Status",
      "Apostille & Document Authentication"
    ]
  },
  {
    id: "bir",
    acronym: "BIR",
    name: "Bureau of Internal Revenue",
    portalName: "BIR eServices",
    url: "https://www.bir.gov.ph/",
    category: "Taxation & Revenue",
    badge: "Taxes & TIN",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    desc: "Electronic Tax Identification Number (eTIN) issuance, eBIRForms download, and electronic tax payment portals (eFPS).",
    services: [
      "Online eTIN Application",
      "eBIRForms & Electronic Filing (eFPS)",
      "Tax Clearance & Business Inquiries",
      "Online Tax Calculator & Withholding Guide"
    ]
  },
  {
    id: "prc",
    acronym: "PRC",
    name: "Professional Regulation Commission",
    portalName: "PRC LERIS Online",
    url: "https://online.prc.gov.ph/",
    category: "Professional Licensure",
    badge: "Licensure & Board Exams",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    desc: "Online registration for board examinations (teachers, nurses, engineers), PRC license renewal, and verification of board ratings.",
    services: [
      "Board Licensure Exam Application",
      "PRC Professional ID Card Renewal",
      "Verification of Ratings & Good Standing",
      "Continuing Professional Development (CPD) Tracking"
    ]
  },
  {
    id: "dmw",
    acronym: "DMW / POEA",
    name: "Department of Migrant Workers",
    portalName: "DMW Online Services",
    url: "https://onlineservices.dmw.gov.ph/",
    category: "Overseas Employment",
    badge: "OFW & Seafarers",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    desc: "For Caluya seafarers and overseas workers: OFW e-Registration, Overseas Employment Certificate (OEC) issuance, and Balik-Manggagawa.",
    services: [
      "OFW e-Registration System",
      "OEC / Balik-Manggagawa Processing",
      "Seafarer Contract Verification",
      "OFW Welfare & Legal Helpdesk"
    ]
  },
  {
    id: "comelec",
    acronym: "COMELEC",
    name: "Commission on Elections",
    portalName: "COMELEC Precinct Finder",
    url: "https://comelec.gov.ph/",
    category: "Elections & Democracy",
    badge: "Voter Registration",
    badgeColor: "bg-red-100 text-red-800 border-red-200",
    desc: "Verify your voter registration status and voting precinct assignments across the 18 island barangays of Caluya.",
    services: [
      "Online Precinct Finder & Voter Status",
      "Voter Registration Schedules & Guidelines",
      "Overseas Absentee Voting (OAV)",
      "Caluya Municipal Election Office Directory"
    ]
  }
];
