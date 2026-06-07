export interface Service {
  slug: string;
  name: string;
  description: string;
  deliverables: string[];
  process: string[];
  targetClient: string;
  timeline: string;
}

export const services: Service[] = [
  {
    slug: "ai-strategy",
    name: "AI Strategy Consulting",
    description:
      "Comprehensive AI adoption roadmap for EPC contractors. From opportunity identification through deployment, we design AI strategies that address your specific operational challenges.",
    deliverables: [
      "AI Opportunity Assessment Report",
      "Technology Stack Recommendation",
      "Implementation Roadmap (6-12 months)",
      "ROI Projection Model",
      "Vendor Evaluation Framework",
    ],
    process: [
      "Discovery — Map current operational workflows and pain points",
      "Assessment — Identify AI-applicable opportunities across project lifecycle",
      "Strategy — Design tailored AI adoption roadmap",
      "Validation — Pilot scope definition and success criteria",
      "Delivery — Implementation support and change management",
    ],
    targetClient: "EPC contractors seeking AI adoption",
    timeline: "60-90 minutes consultation",
  },
  {
    slug: "digital-twin-architecture",
    name: "Digital Twin Architecture",
    description:
      "Design and deploy chainage-referenced operational intelligence platforms for linear infrastructure. From requirements gathering through production deployment.",
    deliverables: [
      "Digital Twin Architecture Document",
      "Module Specifications (13+ modules)",
      "Data Integration Blueprint",
      "Deployment Plan",
      "User Training Program",
    ],
    process: [
      "Requirements — Map project-specific data flows and stakeholders",
      "Architecture — Design module structure and integration points",
      "Development — Agile build with bi-weekly demos",
      "Deployment — Phased rollout with user training",
      "Optimization — Continuous improvement based on usage analytics",
    ],
    targetClient: "EPC contractors on linear infrastructure",
    timeline: "90 minutes consultation",
  },
  {
    slug: "contract-intelligence",
    name: "Contract Intelligence Design",
    description:
      "AI-powered contract analysis systems that compress document review from weeks to hours. Clause extraction, notice tracking, and dispute-resolution-ready audit trails.",
    deliverables: [
      "Contract Analysis Requirements Document",
      "AI Model Configuration",
      "Audit Trail Architecture",
      "Integration Blueprint",
      "Compliance Framework",
    ],
    process: [
      "Analysis — Map contract types and review workflows",
      "Design — Configure AI models for domain-specific extraction",
      "Build — Deploy analysis engine with audit trail",
      "Validate — Accuracy testing against manual review",
      "Operationalize — Integration with existing contract management",
    ],
    targetClient: "Legal counsel and contracts managers",
    timeline: "60 minutes consultation (NDA required)",
  },
  {
    slug: "expert-advisory",
    name: "Expert Advisory",
    description:
      "ICC Arbitration and dispute resolution support backed by 19 years of EPC infrastructure experience. Fact witness testimony and expert report preparation.",
    deliverables: [
      "Expert Report Preparation",
      "Fact Witness Statement Support",
      "Document Review and Analysis",
      "Technical Consultation",
      "Tribunal Presentation Support",
    ],
    process: [
      "Engagement — Execute NDA and scope definition",
      "Document Review — Analyze project records and correspondence",
      "Analysis — Apply technical expertise to factual matrix",
      "Report — Prepare expert opinion or fact witness statement",
      "Support — Tribunal preparation and cross-examination support",
    ],
    targetClient: "Legal counsel and expert witnesses",
    timeline: "30-60 minutes consultation (NDA required)",
  },
  {
    slug: "planning-scheduling",
    name: "Planning, Scheduling & Programme Controls",
    description:
      "End-to-end programme controls for EPC megaprojects — from baseline schedule development through recovery planning. Primavera P6 expertise backed by live megaproject execution experience.",
    deliverables: [
      "Primavera P6 Baseline Schedule Development",
      "Recovery Schedule Preparation",
      "Integrated Master Scheduling",
      "Resource and Cost Loading",
      "Progress Measurement Systems",
      "Schedule Governance Framework",
      "Interface Planning",
      "Programme Health Checks",
    ],
    process: [
      "Assessment — Review current schedule maturity and project constraints",
      "Baseline — Develop or validate P6 baseline schedule with resource loading",
      "Governance — Establish schedule review cadence and change control",
      "Monitoring — Progress measurement and earned value analysis",
      "Recovery — Identify slippage and prepare recovery schedules",
    ],
    targetClient: "EPC contractors and project controls teams",
    timeline: "60 minutes consultation",
  },
  {
    slug: "delay-analysis-eot",
    name: "Delay Analysis, EOT & Claims Support",
    description:
      "Forensic delay analysis and Extension of Time assessment under FIDIC contract regimes. Time Impact Analysis, Window Analysis, and concurrent delay resolution backed by 19 years of claims experience.",
    deliverables: [
      "Time Impact Analysis (TIA)",
      "Delay Impact Analysis (DIA)",
      "Window Analysis",
      "Extension of Time (EOT) Assessment",
      "Prolongation Claims",
      "Concurrent Delay Analysis",
      "FIDIC Claims Support",
      "Arbitration / Dispute Support",
    ],
    process: [
      "Entitlement — Identify contractual basis for delay claims",
      "Analysis — Apply TIA, DIA, or Window Analysis methodology",
      "Concurrent — Resolve concurrent delay apportionment",
      "Quantification — Calculate prolongation and disruption costs",
      "Presentation — Prepare claims submission or expert report",
    ],
    targetClient: "Contract managers, legal counsel, and project directors",
    timeline: "60 minutes consultation (NDA required)",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export interface ConsultationType {
  name: string;
  duration: string;
  format: string;
  for: string;
}

export const consultationTypes: ConsultationType[] = [
  { name: "AI Strategy Consultation", duration: "60-90 min", format: "Video call or in-person", for: "EPC contractors seeking AI adoption" },
  { name: "Contract Intelligence Consultation", duration: "60 min", format: "Video call (NDA required)", for: "Legal counsel and contracts managers" },
  { name: "Digital Twin Consultation", duration: "90 min", format: "Video call or in-person", for: "EPC contractors on linear infrastructure" },
  { name: "Expert Advisory Consultation", duration: "30-60 min", format: "Video call (NDA required)", for: "Legal counsel and expert witnesses" },
  { name: "Planning & Scheduling Consultation", duration: "60 min", format: "Video call or in-person", for: "EPC contractors and project controls teams" },
  { name: "Delay Analysis & EOT Consultation", duration: "60 min", format: "Video call (NDA required)", for: "Contract managers, legal counsel, and project directors" },
];
