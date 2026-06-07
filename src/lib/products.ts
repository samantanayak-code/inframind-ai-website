export interface Product {
  slug: string;
  name: string;
  category: string;
  status: "production" | "pilot" | "demonstrable";
  description: string;
  longDescription: string;
  screenshot: string;
  screenshots: { src: string; alt: string; caption: string }[];
  metrics: { label: string; value: string }[];
  modules: string[];
  aiCapabilities: string[];
  techStack: { layer: string; technology: string }[];
  heroMetric: string;
  canonical: string;
}

export const products: Product[] = [
  {
    slug: "mahsr-digital-twin",
    name: "MAHSR T-3 Digital Twin",
    category: "Operational Intelligence",
    status: "production",
    description:
      "Project control hub for high-speed rail — chainage-referenced operational intelligence integrating progress tracking, contract management, QA/QC data, and schedule analytics.",
    longDescription:
      "The MAHSR T-3 Digital Twin is a comprehensive operational intelligence platform designed for the Mumbai-Ahmedabad High-Speed Rail T-3 Track Package. It integrates 13 functional modules into a single chainage-referenced dashboard, providing near-real-time visibility across 115.877 km of corridor construction.",
    screenshot: "/screenshots/mahsr-digital-twin/executive_alignment_intelligence.png",
    screenshots: [
      { src: "/screenshots/mahsr-digital-twin/executive_alignment_intelligence.png", alt: "Executive alignment intelligence view", caption: "Chainage-referenced corridor intelligence for decision-makers" },
      { src: "/screenshots/mahsr-digital-twin/full_page.png", alt: "Full dashboard overview", caption: "13-module operational intelligence dashboard" },
      { src: "/screenshots/mahsr-digital-twin/management_control_room.png", alt: "Management control room", caption: "Command center for real-time project visibility" },
      { src: "/screenshots/mahsr-digital-twin/engineering_query_console.png", alt: "Engineering query console", caption: "Engineering data query and analysis interface" },
      { src: "/screenshots/mahsr-digital-twin/calculation_handbook.png", alt: "Calculation handbook", caption: "Integrated calculation and verification module" },
      { src: "/screenshots/mahsr-digital-twin/temporal_execution_analytics.png", alt: "Temporal execution analytics", caption: "Time-based execution trend analysis" },
      { src: "/screenshots/mahsr-digital-twin/Heatmap_Screenshot.png", alt: "Heatmap visualization", caption: "Spatial heatmap of corridor progress and issues" },
      { src: "/screenshots/mahsr-digital-twin/strip_chart.png", alt: "Strip chart timeline", caption: "Chainage-referenced strip chart for track construction" },
    ],
    metrics: [
      { label: "MIS Reduction", value: "16 → Under 4 Person-Hours" },
      { label: "Modules", value: "13 Functional Modules" },
      { label: "Corridor", value: "115.877 km Chainage-Referenced" },
    ],
    modules: [
      "Dashboard — Project health overview",
      "Progress — Chainage-referenced progress tracking",
      "Contract — FIDIC obligation monitoring",
      "QA/QC — Quality data integration",
      "Analytics — Operational intelligence",
      "Track Analytics — Track-specific dashboards",
      "Scope — Work scope management",
      "Stakeholders — Multi-stakeholder RBAC",
      "Contract Management — Event tracking and MIS",
    ],
    aiCapabilities: [
      "LLM for anomaly narration",
      "Rule-based notice monitoring",
      "Prompt engineering for FIDIC workflows",
    ],
    techStack: [
      { layer: "Frontend", technology: "Next.js, React, Tailwind CSS" },
      { layer: "Backend", technology: "Python, Node.js" },
      { layer: "AI", technology: "OpenAI API (GPT-4)" },
      { layer: "Database", technology: "PostgreSQL" },
      { layer: "Hosting", technology: "Vercel" },
    ],
    heroMetric: "75% MIS effort reduction",
    canonical: "https://inframind.ai/products/mahsr-digital-twin",
  },
  {
    slug: "ncr-tracker",
    name: "NCR Tracker",
    category: "Quality Intelligence",
    status: "production",
    description:
      "AI-augmented non-conformance management transforming paper-based administration into real-time analytical intelligence.",
    longDescription:
      "NCR Tracker automates the entire non-conformance report lifecycle — from initial site observation through closure — using LLM-powered categorization, pattern detection analytics, and tiered escalation engines.",
    screenshot: "/screenshots/ncr-tracker/NCR_TRACKER_HERO_V1.png",
    screenshots: [
      { src: "/screenshots/ncr-tracker/NCR_TRACKER_HERO_V1.png", alt: "NCR Tracker hero dashboard", caption: "Real-time non-conformance visibility across project teams" },
      { src: "/screenshots/ncr-tracker/ncr-dashboard-overview.png", alt: "NCR dashboard overview", caption: "Live NCR count, status, and criticality breakdown" },
      { src: "/screenshots/ncr-tracker/site-observation-dashboard.png", alt: "Site observation dashboard", caption: "Pre-NCR quality concern tracking and logging" },
      { src: "/screenshots/ncr-tracker/ncr-register-list.png", alt: "NCR register list", caption: "Master searchable database with advanced filters" },
      { src: "/screenshots/ncr-tracker/ncr-detail-workflow.png", alt: "NCR detail workflow", caption: "End-to-end NCR lifecycle from observation to closure" },
      { src: "/screenshots/ncr-tracker/ncr-formal-car-submitted.png", alt: "Formal CAR submitted", caption: "Corrective Action Request formal submission" },
      { src: "/screenshots/ncr-tracker/analytics-severity-breakdown.png", alt: "Severity breakdown analytics", caption: "Severity distribution and trend analysis" },
      { src: "/screenshots/ncr-tracker/analytics-recurring-quality-issues.png", alt: "Recurring quality issues", caption: "Pattern detection for systemic quality problems" },
    ],
    metrics: [
      { label: "Closure Acceleration", value: "40%+ Faster Closure" },
      { label: "Categorization", value: "Automated via LLM" },
      { label: "Records", value: "Timestamp-Governed Audit Trails" },
    ],
    modules: [
      "NCR Dashboard — Real-time visibility into count, status, criticality",
      "Ops Dashboard — Site supervision operational view",
      "NCR Register — Master searchable database with filters",
      "Site Observations — Pre-NCR quality concern logging",
      "Notifications — Tiered escalation engine (7-day, 3-day, 1-day)",
      "User Management — RBAC and performance tracking",
    ],
    aiCapabilities: [
      "LLM categorization",
      "Pattern detection analytics",
      "Automated escalation",
    ],
    techStack: [
      { layer: "Frontend", technology: "React, Tailwind CSS" },
      { layer: "Backend", technology: "Node.js, Express" },
      { layer: "AI", technology: "OpenAI API (GPT-4)" },
      { layer: "Database", technology: "PostgreSQL" },
      { layer: "Hosting", technology: "Vercel" },
    ],
    heroMetric: "40%+ faster NCR closure",
    canonical: "https://inframind.ai/products/ncr-tracker",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
