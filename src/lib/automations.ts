import { LucideIcon, Download, FileSearch, Clock, AlertTriangle, FileText, BarChart3, Settings, Database, Bell, Layers } from "lucide-react";

export interface Automation {
  slug: string;
  name: string;
  category: string;
  status: "deployed" | "pilot" | "building";
  icon: LucideIcon;
  tagline: string;
  description: string;
  longDescription: string;
  metrics: { label: string; value: string }[];
  capabilities: string[];
  outcomes: string[];
  integrations: { name: string; direction: "feeds" | "fed-by" | "parallel" }[];
  techStack: { layer: string; technology: string }[];
  engagementModel: string;
  timeline: string;
  canonical: string;
}

export const automations: Automation[] = [
  {
    slug: "unifier-sync",
    name: "Unifier Sync",
    category: "Data Ingestion",
    status: "deployed",
    icon: Download,
    tagline: "Automated Unifier correspondence extraction and organization",
    description:
      "Automated extraction, download, indexing, and organization of Oracle Primavera Unifier correspondence, attachments, and document repositories for claims preparation, dispute resolution, project close-out, and contractual record management.",
    longDescription:
      "Unifier Sync eliminates the manual burden of downloading correspondence from Oracle Primavera Unifier. Built from the daily reality of managing 50+ correspondence items on a live INR 3,142 Crore megaproject, it batch-downloads PDF attachments, extracts COR numbers and reference data, and organizes files into date-and-reference-indexed folders — ready for claims preparation, arbitration evidence compilation, and contractual record management.",
    metrics: [
      { label: "Retrieval Effort", value: "80–95% Reduction" },
      { label: "Batch Capacity", value: "50 Records per Run" },
      { label: "Organization", value: "Auto COR/Date/Ref Indexing" },
      { label: "Arbitration Readiness", value: "Structured Evidence Repository" },
    ],
    capabilities: [
      "Batch download of correspondence attachments from Oracle Unifier",
      "Automatic COR number and reference extraction from Unifier JET UI",
      "Date-and-reference-indexed folder organization",
      "Anti-automation-detection measures for Unifier access",
      "Session isolation with temporary Chrome profiles",
      "Download completion monitoring with timeout handling",
      "Regex-based COR extraction from properties panel",
      "Configurable output directory and batch size",
    ],
    outcomes: [
      "80–95% reduction in manual retrieval effort",
      "Rapid arbitration document preparation",
      "Structured evidence repositories with COR indexing",
      "Improved correspondence completeness — no missed documents",
      "Faster stakeholder distribution of contractual records",
      "Defensible contemporaneous archive for dispute resolution",
    ],
    integrations: [
      { name: "OCR Intelligence Pipeline", direction: "feeds" },
      { name: "Contract Forensics Engine", direction: "feeds" },
      { name: "Letter Drafter EPC", direction: "feeds" },
      { name: "Claims Evidence Compiler", direction: "feeds" },
    ],
    techStack: [
      { layer: "Language", technology: "Python 3" },
      { layer: "Automation", technology: "Selenium WebDriver (Chrome)" },
      { layer: "Target", technology: "Oracle Primavera Unifier (JET UI)" },
      { layer: "Extraction", technology: "Regex + CSS Selector Engine" },
      { layer: "Organization", technology: "pathlib + shutil" },
    ],
    engagementModel: "Correspondence Digitization Sprint — 1-2 day engagement delivering immediate productivity gains and opening doors for larger AI deployments.",
    timeline: "1-2 days (Sprint) | 10 days (Full formalization)",
    canonical: "https://inframind.ai/automations/unifier-sync",
  },
  {
    slug: "fidic-notice-monitor",
    name: "FIDIC Notice Monitor",
    category: "Deadline Automation",
    status: "building",
    icon: Bell,
    tagline: "AI-powered FIDIC notice compliance automation",
    description:
      "Automated monitoring, tracking, and alerting on all FIDIC contractual notice obligations in real-time. Ensures 100% compliance and preserves every entitlement.",
    longDescription:
      "The FIDIC Notice Monitor is an AI-powered automation capability that monitors, tracks, and alerts on all FIDIC contractual notice obligations in real-time. It ensures no deadline is missed, no entitlement is forfeited, and no claim is time-barred. Designed by a practitioner with extensive FIDIC contracts experience on megaprojects like the MAHSR T-3 Track Package.",
    metrics: [
      { label: "Notice Compliance", value: "100%" },
      { label: "Entitlement Preservation", value: "100%" },
      { label: "Risk Reduction", value: "60–90%" },
      { label: "Alert Schedule", value: "7/3/1 Days" },
    ],
    capabilities: [
      "Real-time FIDIC notice compliance monitoring",
      "Automated deadline calculation from FIDIC clause rules",
      "7/3/1 day alert schedule with escalation logic",
      "4-level escalation matrix (Contracts Manager → Project Director)",
      "Forensic-grade notice archive compilation",
      "FIDIC-compliant notice generation from templates",
    ],
    outcomes: [
      "100% notice compliance — no deadline missed",
      "100% entitlement preservation — all claim rights maintained",
      "60–90% risk reduction through early warning",
      "75% reduction in manual tracking effort",
      "Forensic-grade records for dispute resolution",
    ],
    integrations: [
      { name: "Unifier Sync", direction: "fed-by" },
      { name: "Claims Evidence Compiler", direction: "feeds" },
      { name: "Letter Drafter EPC", direction: "feeds" },
    ],
    techStack: [
      { layer: "Language", technology: "Python 3" },
      { layer: "Scheduling", technology: "Deadline calculation engine" },
      { layer: "Alerting", technology: "Multi-channel notification system" },
      { layer: "Storage", technology: "Forensic-grade archive" },
    ],
    engagementModel: "Notice Compliance Assessment — evaluate current notice tracking processes and identify automation opportunities.",
    timeline: "9–15 weeks (MVP build) | 2–3 weeks (Assessment sprint)",
    canonical: "https://inframind.ai/automations/fidic-notice-monitor",
  },
  {
    slug: "fidic-claims-intelligence-suite",
    name: "FIDIC Claims Intelligence Suite",
    category: "Claims Support",
    status: "building",
    icon: Layers,
    tagline: "AI-Assisted Claims Preparation and Contractual Intelligence for EPC Projects",
    description:
      "Four integrated modules — Notice Monitor, EOT Event Log Compiler, Claim Narrative Drafter, Letter Drafter EPC — that automate FIDIC claims preparation, correspondence, and contractual record management.",
    longDescription:
      "The FIDIC Claims Intelligence Suite is a flagship automation capability that combines four integrated modules into a comprehensive claims preparation and contractual intelligence platform. It ensures 100% notice compliance, contemporaneous event logging, persuasive claim narratives, and contractually precise correspondence — designed by practitioners who have administered FIDIC contracts on EPC megaprojects.",
    metrics: [
      { label: "Notice Compliance", value: "100%" },
      { label: "Preparation Time", value: "85–90% Reduction" },
      { label: "Clause Accuracy", value: "100%" },
      { label: "First-Pass Acceptance", value: "90%+" },
    ],
    capabilities: [
      "FIDIC Notice Monitor — automated notice compliance across 20+ clause types",
      "EOT Event Log Compiler — contemporaneous delay event compilation",
      "Claim Narrative Drafter — AI-assisted FIDIC 20.1 claim drafting",
      "Letter Drafter EPC — contractually precise correspondence generation",
      "Integrated workflow from project event to claims support",
      "FIDIC 1999 and 2017 edition support",
    ],
    outcomes: [
      "100% notice compliance — zero missed deadlines",
      "85–90% reduction in claims preparation time",
      "100% entitlement preservation",
      "100% clause reference accuracy in correspondence",
      "Contemporaneous records for dispute resolution",
      "90%+ first-pass acceptance rate for claim narratives",
    ],
    integrations: [
      { name: "Unifier Sync", direction: "fed-by" },
      { name: "OCR Intelligence Pipeline", direction: "feeds" },
      { name: "Contract Forensics Engine", direction: "feeds" },
    ],
    techStack: [
      { layer: "Language", technology: "Python 3" },
      { layer: "AI Engine", technology: "LLM-assisted claim drafting" },
      { layer: "Compliance", technology: "FIDIC clause mapping engine" },
      { layer: "Storage", technology: "Forensic-grade archive" },
    ],
    engagementModel: "Claims Intelligence Assessment — evaluate current claims processes and identify automation opportunities across all four modules.",
    timeline: "12–20 weeks (Full suite MVP) | 2–3 weeks (Assessment sprint)",
    canonical: "https://inframind.ai/automations/fidic-claims-intelligence-suite",
  },
];

export function getAutomation(slug: string): Automation | undefined {
  return automations.find((a) => a.slug === slug);
}

export const automationCategories = [
  { id: "data-ingestion", label: "Data Ingestion", count: 1 },
  { id: "document-processing", label: "Document Processing", count: 0 },
  { id: "workflow-automation", label: "Workflow Automation", count: 0 },
  { id: "deadline-automation", label: "Deadline Automation", count: 1 },
  { id: "claims-support", label: "Claims Support", count: 1 },
  { id: "client-engagement", label: "Client Engagement", count: 0 },
];
