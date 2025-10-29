// lib/solutionsData.js
export const SOLUTIONS = [
  { slug: "home-solar",        title: "Home Solar (Rooftop)",     emoji: "🏠", blurb: "Rooftop systems for families & apartments." },
  { slug: "agriculture",       title: "Agricultural / Farm",      emoji: "🚜", blurb: "Solar pumps, cold storage, irrigation." },
  { slug: "business",          title: "Business & Industrial",    emoji: "🏭", blurb: "Commercial rooftops, factories, warehouses." },
  { slug: "portable",          title: "Portable Solar",           emoji: "🧳", blurb: "Travel & emergency solar kits." },
  { slug: "on-grid",           title: "On-Grid / Net Metering",   emoji: "🔌", blurb: "Export excess to grid & lower bills." },
  { slug: "off-grid",          title: "Off-Grid",                 emoji: "🌄", blurb: "Power where there’s no grid." },
  { slug: "hybrid",            title: "Hybrid (On-Grid + Battery)", emoji: "⚡", blurb: "Back-up + export = best of both worlds." },
  { slug: "battery-storage",   title: "Battery Storage",          emoji: "🔋", blurb: "Store power, ride through outages." },
  { slug: "ev-charging",       title: "EV Charging + Solar",      emoji: "🚗", blurb: "Solar-powered EV charge points." },
  { slug: "street-lighting",   title: "Solar Street Lighting",    emoji: "🚦", blurb: "Smart solar lights for streets & campuses." },
  { slug: "water-heater",      title: "Solar Water Heater",       emoji: "🚿", blurb: "Hot water with minimal electricity." },
  { slug: "solar-pumping",     title: "Solar Water Pumping",      emoji: "💧", blurb: "Submersible & surface pumps." },
  { slug: "microgrids",        title: "Microgrids & Community",   emoji: "🧩", blurb: "Village, resort, mine sites, islands." },
  { slug: "schools",           title: "Schools & Colleges",       emoji: "🏫", blurb: "Labs & classrooms powered by sun." },
  { slug: "hospitals",         title: "Hospitals & Clinics",      emoji: "🏥", blurb: "Critical power with back-up." },
  { slug: "shops",             title: "Shops & Restaurants",      emoji: "🛍️", blurb: "Lower bills, reliable supply." },
  { slug: "carports",          title: "Solar Carports",           emoji: "🅿️", blurb: "Shade + power in parking." },
  { slug: "ground-mount",      title: "Ground-Mount Utility",     emoji: "🏞️", blurb: "Larger arrays on open land." },
  { slug: "om-services",       title: "O&M / AMC Services",       emoji: "🛠️", blurb: "Maintenance & performance audits." },
  { slug: "financing",         title: "Financing & Subsidies",    emoji: "💸", blurb: "Capex/Opex/EMI, Govt schemes." }
];

// Optional detailed copy. Edit freely.
export const DETAILS = {
  "home-solar": {
    hero: "🏠 Home Solar (Rooftop)",
    overview: "Custom rooftop solar for houses & apartments with net-metering and clean aesthetics.",
    benefits: [
      "Slash bills by 60–95% with net-metering",
      "25-year panel performance warranty",
      "Fast ROI (3–5 years typical)"
    ],
    includes: [
      "Site survey & shadow analysis",
      "Panel, inverter, mounting, wiring",
      "Net-metering paperwork"
    ],
    idealFor: "Independent homes, apartments, societies",
    cta: "Request a free rooftop assessment"
  },
  "agriculture": {
    hero: "🚜 Agricultural / Farm",
    overview: "Solar for irrigation, dairy, cold storage—cut diesel costs & keep pumps running.",
    benefits: ["Up to 80% diesel savings", "Low maintenance", "Govt. subsidies available"],
    includes: ["Solar pump kits (AC/DC)", "Remote monitoring (optional)", "Structures & cabling"],
    idealFor: "Farms, dairy, horticulture",
    cta: "Ask for a farm pump quote"
  },
  "business": {
    hero: "🏭 Business & Industrial",
    overview: "From shops to factories—reduce operational costs with reliable solar power.",
    benefits: ["Lower operating expenses", "Tax benefits (varies)", "Energy independence"],
    includes: ["Commercial rooftop/ground systems", "Protection & compliance", "Monitoring dashboard"],
    idealFor: "Factories, warehouses, malls, offices",
    cta: "Book a commercial energy audit"
  },
  "portable": {
    hero: "🧳 Portable Solar",
    overview: "Compact kits for camping, shops-on-wheels, and emergency back-up.",
    benefits: ["Lightweight & modular", "Charge phones/lights/tools", "No noise, no fumes"],
    includes: ["Foldable panels", "Charge controller/inverter", "Battery options"],
    idealFor: "Travelers, remote work sites, kiosks",
    cta: "Get a portable kit recommendation"
  },
  "on-grid": {
    hero: "🔌 On-Grid / Net Metering",
    overview: "Export extra energy to grid; pay only for net consumption.",
    benefits: ["Maximize bill savings", "Simple architecture", "Low capex vs hybrid"],
    includes: ["Panels + on-grid inverter", "Bi-directional meter", "Net-metering assistance"],
    idealFor: "Urban homes, businesses with reliable grid",
    cta: "Check net-metering eligibility"
  },
  "off-grid": {
    hero: "🌄 Off-Grid",
    overview: "Live independently with solar + batteries (and optional generator).",
    benefits: ["Works without grid", "Configurable autonomy", "Reliable in remote locations"],
    includes: ["Panels + charge controller", "Battery bank", "Optional genset as backup"],
    idealFor: "Remote homes, farms, off-site cabins",
    cta: "Design an off-grid system"
  },
  "hybrid": {
    hero: "⚡ Hybrid (On-Grid + Battery)",
    overview: "Seamless backup + grid export for best resilience and savings.",
    benefits: ["Backup during outages", "Peak shaving", "Great for sensitive loads"],
    includes: ["Hybrid inverter", "Battery storage", "Smart changeover"],
    idealFor: "Homes/businesses with frequent outages",
    cta: "Size a hybrid system"
  },
  "battery-storage": {
    hero: "🔋 Battery Storage",
    overview: "Add batteries to store daytime energy and use at night/peak tariffs.",
    benefits: ["Outage protection", "Tariff optimization", "Extend solar usefulness"],
    includes: ["Lithium/Lead-acid options", "BMS & safety gear", "Smart app monitoring"],
    idealFor: "Areas with outages, time-of-day tariffs",
    cta: "Get a battery sizing plan"
  },
  "ev-charging": {
    hero: "🚗 EV Charging + Solar",
    overview: "Green charging at home, office or public parking with solar supply.",
    benefits: ["Lower charging costs", "Faster chargers available", "Brand/CSR value"],
    includes: ["AC/DC chargers", "Load management", "Payment backend (optional)"],
    idealFor: "Homes, apartments, malls, workplaces",
    cta: "Plan your EV charger + solar"
  },
  "street-lighting": {
    hero: "🚦 Solar Street Lighting",
    overview: "Standalone solar street lights for roads, colonies, campuses.",
    benefits: ["No trenching/wiring", "Dusk-to-dawn control", "Low O&M"],
    includes: ["Integrated light units", "Poles & foundations", "Timers/sensors"],
    idealFor: "Housing societies, campuses, rural roads",
    cta: "Light up your campus"
  },
  "water-heater": {
    hero: "🚿 Solar Water Heater",
    overview: "Heaters for homes, hostels, hotels, hospitals.",
    benefits: ["Huge electricity savings", "All-season options", "Quick payback"],
    includes: ["FPC/ETC systems", "Tanks & plumbing", "Mounting kits"],
    idealFor: "Homes, hotels, hostels, hospitals",
    cta: "Pick the right heater size"
  },
  "solar-pumping": {
    hero: "💧 Solar Water Pumping",
    overview: "AC/DC pumps for borewells & surface water.",
    benefits: ["No diesel bills", "Low running cost", "Reliable flow"],
    includes: ["Pump + controller", "Panels + structure", "Protection & wiring"],
    idealFor: "Farms, gardens, community water",
    cta: "Ask for pump head/flow sizing"
  },
  "microgrids": {
    hero: "🧩 Microgrids & Community",
    overview: "Islanded or grid-connected microgrids for communities.",
    benefits: ["Shared reliability", "Smart controls", "Scalable"],
    includes: ["PV + storage + controller", "Smart meters", "O&M support"],
    idealFor: "Villages, resorts, mines, islands",
    cta: "Plan a microgrid"
  },
  "schools": {
    hero: "🏫 Schools & Colleges",
    overview: "Power classrooms, labs, hostels; teach sustainability by example.",
    benefits: ["Lower bills", "CSR/branding", "Learning opportunity"],
    includes: ["Rooftop PV", "Safety & compliance", "Monitoring for students"],
    idealFor: "Schools, colleges, training centers",
    cta: "Start your campus solar journey"
  },
  "hospitals": {
    hero: "🏥 Hospitals & Clinics",
    overview: "Reliable, clean power for critical facilities.",
    benefits: ["Lower bills", "Battery backup", "Clean & quiet"],
    includes: ["Hybrid PV + storage", "Essential load panels", "Surge/earthing"],
    idealFor: "Hospitals, clinics, labs",
    cta: "Design a resilient system"
  },
  "shops": {
    hero: "🛍️ Shops & Restaurants",
    overview: "Keep lights, AC and POS running—save costs daily.",
    benefits: ["Fast ROI", "Brand appeal", "Silent backup"],
    includes: ["Small rooftop PV", "Inverter & batteries (opt.)", "Load study"],
    idealFor: "Retail, cafés, salons, restaurants",
    cta: "Calculate your savings"
  },
  "carports": {
    hero: "🅿️ Solar Carports",
    overview: "Generate power & create shaded parking.",
    benefits: ["Use parking area", "EV-ready", "Great for campuses"],
    includes: ["Steel structure", "PV modules", "Drainage & cabling"],
    idealFor: "Offices, malls, institutions",
    cta: "See carport layouts"
  },
  "ground-mount": {
    hero: "🏞️ Ground-Mount / Utility",
    overview: "Larger arrays on land—utility or captive use.",
    benefits: ["Scale up easily", "Lower LCOE at scale", "Trackers optional"],
    includes: ["Engineering & permits", "Piling/structure", "SCADA/monitoring"],
    idealFor: "Large campuses, utility projects",
    cta: "Discuss land availability"
  },
  "om-services": {
    hero: "🛠️ O&M / AMC",
    overview: "Keep your plant healthy with preventive maintenance.",
    benefits: ["Higher generation", "Fewer breakdowns", "Performance reports"],
    includes: ["Cleaning & checks", "IV curve testing (opt.)", "Ticketing support"],
    idealFor: "Any existing solar owner",
    cta: "Book an O&M plan"
  },
  "financing": {
    hero: "💸 Financing & Subsidies",
    overview: "Capex/Opex/EMI models; guidance on govt. schemes.",
    benefits: ["Lower upfront cost", "Better ROI", "Hassle-free paperwork"],
    includes: ["Financial modeling", "Subsidy assistance", "Lender tie-ups"],
    idealFor: "Homes & businesses seeking low capex",
    cta: "Check your eligibility"
  }
};
