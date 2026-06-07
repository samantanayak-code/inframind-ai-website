export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  product: string;
  heroMetric: string;
  screenshot: string;
  screenshots: { src: string; alt: string; caption: string }[];
  problem: string;
  solution: string;
  impact: string;
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "mahsr-digital-twin",
    title: "MAHSR T-3 Digital Twin",
    subtitle: "Operational Intelligence for High-Speed Rail",
    product: "MAHSR Digital Twin",
    heroMetric: "75% MIS effort reduction",
    screenshot: "/screenshots/mahsr-digital-twin/management_control_room.png",
    screenshots: [
      { src: "/screenshots/mahsr-digital-twin/management_control_room.png", alt: "Management control room", caption: "Command center for near-real-time project visibility" },
      { src: "/screenshots/mahsr-digital-twin/executive_alignment_intelligence.png", alt: "Executive alignment intelligence", caption: "Corridor intelligence for decision-makers" },
      { src: "/screenshots/mahsr-digital-twin/full_page.png", alt: "Full dashboard", caption: "13-module integrated operational intelligence" },
      { src: "/screenshots/mahsr-digital-twin/strip_chart.png", alt: "Strip chart", caption: "Chainage-referenced construction timeline" },
      { src: "/screenshots/mahsr-digital-twin/temporal_execution_analytics.png", alt: "Execution analytics", caption: "Time-based progress and anomaly detection" },
    ],
    problem:
      "Information lag between site execution and management visibility exceeded 2-3 weeks on an INR 3,142 Crore FIDIC Yellow Book contract. Weekly MIS compilation required 16 person-hours of manual data aggregation across 13 functional modules.",
    solution:
      "A chainage-referenced operational intelligence platform integrating progress tracking, contract management, QA/QC data, and schedule analytics into a single dashboard. AI-powered anomaly narration and rule-based notice monitoring provide near-real-time visibility.",
    impact:
      "MIS compilation reduced from 16 person-hours to under 4. Near-real-time visibility across 115.877 km of corridor. Defensible contemporaneous records for dispute resolution.",
    metrics: [
      { label: "MIS Reduction", value: "16 → Under 4 Person-Hours" },
      { label: "Modules", value: "13 Functional Modules" },
      { label: "Corridor", value: "115.877 km" },
    ],
  },
  {
    slug: "ncr-tracker",
    title: "NCR Tracker",
    subtitle: "AI-Augmented Quality Governance",
    product: "NCR Tracker",
    heroMetric: "40%+ faster NCR closure",
    screenshot: "/screenshots/ncr-tracker/ncr-dashboard-overview.png",
    screenshots: [
      { src: "/screenshots/ncr-tracker/ncr-dashboard-overview.png", alt: "NCR dashboard overview", caption: "Live NCR visibility and status tracking" },
      { src: "/screenshots/ncr-tracker/ncr-register-list.png", alt: "NCR register", caption: "Searchable master database" },
      { src: "/screenshots/ncr-tracker/ncr-detail-workflow.png", alt: "NCR workflow", caption: "End-to-end lifecycle management" },
      { src: "/screenshots/ncr-tracker/site-observation-report.png", alt: "Site observation", caption: "Pre-NCR quality concern logging" },
      { src: "/screenshots/ncr-tracker/analytics-severity-breakdown.png", alt: "Severity analytics", caption: "Pattern detection and severity analysis" },
    ],
    problem:
      "Paper-based NCR management created notification lag, stale dashboards, and no pattern detection. Manual categorization was inconsistent across teams, and escalation deadlines were frequently missed.",
    solution:
      "Real-time analytical intelligence with LLM-powered automated categorization, pattern detection analytics, and tiered escalation engine. Timestamp-governed audit trails ensure dispute-resolution-ready records.",
    impact:
      "40%+ reduction in NCR closure cycle times. Automated categorization eliminates manual sorting. Pattern detection identifies systemic quality issues before they escalate.",
    metrics: [
      { label: "Closure Acceleration", value: "40%+ Faster" },
      { label: "Categorization", value: "Automated via LLM" },
      { label: "Records", value: "Timestamp-Governed" },
    ],
  },
  {
    slug: "contract-forensics",
    title: "Contract Forensics",
    subtitle: "AI-Powered Contractual Intelligence",
    product: "Contract Forensics",
    heroMetric: "Weeks to hours document review",
    screenshot: "/screenshots/contract-forensics/02_Analyse Document.png",
    screenshots: [
      { src: "/screenshots/contract-forensics/00_HOME.png", alt: "Contract Forensics home", caption: "Document intelligence platform" },
      { src: "/screenshots/contract-forensics/02_Analyse Document.png", alt: "Document analysis", caption: "AI-powered contract analysis" },
      { src: "/screenshots/contract-forensics/04_Audit Trail.png", alt: "Audit trail", caption: "Timestamp-governed audit trail" },
      { src: "/screenshots/contract-forensics/Audit Trail_ITEM_1.png", alt: "Audit detail", caption: "Item-level audit tracking" },
    ],
    problem:
      "Contract document review for dispute resolution required weeks of manual analysis. Identifying relevant clauses, cross-referencing notices, and building chronological timelines was labor-intensive and error-prone.",
    solution:
      "AI-powered contract analysis engine that compresses document review from weeks to hours. Automated clause extraction, notice tracking, and chronological timeline generation with full audit trails.",
    impact:
      "Document review compressed from weeks to hours. Automated clause extraction with 98%+ accuracy. Dispute-resolution-ready audit trails.",
    metrics: [
      { label: "Review Time", value: "Weeks → Hours" },
      { label: "Accuracy", value: "98%+ Clause Extraction" },
      { label: "Audit", value: "Full Trail" },
    ],
  },
  {
    slug: "ocr-intelligence",
    title: "OCR Intelligence",
    subtitle: "Document Digitization for AI Analysis",
    product: "OCR Intelligence",
    heroMetric: "98% OCR accuracy",
    screenshot: "/screenshots/pdf-ocr-web-app/00_HOME.png",
    screenshots: [
      { src: "/screenshots/pdf-ocr-web-app/00_HOME.png", alt: "OCR Intelligence home", caption: "Document digitization platform" },
      { src: "/screenshots/pdf-ocr-web-app/Screenshot 2026-05-24 191118.png", alt: "OCR processing", caption: "AI-enhanced document processing" },
      { src: "/screenshots/pdf-ocr-web-app/Screenshot 2026-05-24 191224.png", alt: "OCR results", caption: "Extracted text with layout preservation" },
      { src: "/screenshots/pdf-ocr-web-app/Screenshot 2026-05-24 191259.png", alt: "OCR output", caption: "Structured data extraction" },
    ],
    problem:
      "Paper-based construction documents — drawings, specifications, correspondence — cannot be analyzed by AI systems without digitization. Manual transcription is slow and error-prone, especially for handwritten annotations.",
    solution:
      "AI-enhanced OCR platform that digitizes construction documents with 98%+ accuracy. Preserves layout, extracts structured data, and handles handwritten annotations on technical drawings.",
    impact:
      "98% OCR accuracy on construction documents. Handwritten annotation recognition. Structured data extraction for downstream AI analysis.",
    metrics: [
      { label: "Accuracy", value: "98%+" },
      { label: "Handwriting", value: "Supported" },
      { label: "Layout", value: "Preserved" },
    ],
  },
  {
    slug: "tcb-simulation",
    title: "TCB Simulation",
    subtitle: "Construction Planning Intelligence",
    product: "TCB Simulation",
    heroMetric: "Production rate optimization",
    screenshot: "",
    screenshots: [],
    problem:
      "Construction planning for complex track packages requires simulating multiple scenarios to optimize resource allocation, production rates, and sequencing. Manual planning is time-consuming and cannot explore the full solution space.",
    solution:
      "AI-powered construction simulation platform that models track construction parameters, explores scenario combinations, and recommends optimal production strategies based on historical performance data.",
    impact:
      "Data-driven production rate optimization. Scenario modeling reduces planning time. Evidence-based resource allocation decisions.",
    metrics: [
      { label: "Planning", value: "Scenario-Based" },
      { label: "Optimization", value: "AI-Recommended" },
      { label: "Status", value: "L2 Pilot" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
