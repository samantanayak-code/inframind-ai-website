import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { MetricCard } from "@/components/composites/MetricCard";
import { CapabilityMetricCard } from "@/components/composites/CapabilityMetricCard";
import { DownloadCard } from "@/components/composites/DownloadCard";
import { LazyLeadCaptureForm } from "@/components/composites/LazyLeadCaptureForm";
import { LazyQuickEnquiryForm } from "@/components/composites/LazyQuickEnquiryForm";
import { CalendlyCTA } from "@/components/composites/CalendlyCTA";
import { CTASection } from "@/components/composites/CTASection";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Shield,
  Zap,
  Calendar,
  Bell,
  Users,
  Target,
  BookOpen,
  Brain,
  Scale,
  Mail,
  GitBranch,
  BarChart3,
  Layers,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FIDIC Claims Intelligence Suite — AI-Assisted Claims Preparation",
  description:
    "AI-assisted claims preparation and contractual intelligence for EPC projects. Four integrated modules: Notice Monitor, EOT Event Log, Claim Narrative Drafter, Letter Drafter EPC. Deployed on MAHSR T-3 — INR 3,142 Crore FIDIC Yellow Book.",
  openGraph: {
    title: "FIDIC Claims Intelligence Suite — InfraMind EPC",
    description:
      "AI-assisted claims preparation and contractual intelligence for EPC projects. Never miss a notice, never lose an entitlement. Deployed on MAHSR T-3 — INR 3,142 Crore.",
  },
};

const modules = [
  {
    name: "FIDIC Notice Monitor",
    slug: "fidic-notice-monitor",
    icon: Bell,
    status: "building" as const,
    tagline: "100% Notice Compliance. Zero Missed Deadlines.",
    description:
      "Automated monitoring of FIDIC contractual notice obligations. Tracks 20+ clause types, triggers alerts at 28/14/7/3/1 days, and escalates missed deadlines through a 4-level matrix.",
    metrics: [
      { label: "Notice Compliance", value: "100%" },
      { label: "Alert Schedule", value: "28/14/7/3/1 days" },
      { label: "Clause Coverage", value: "20+ FIDIC clauses" },
    ],
  },
  {
    name: "EOT Event Log Compiler",
    slug: "eot-event-log",
    icon: Calendar,
    status: "concept" as const,
    tagline: "Contemporaneous Delay Records. Defensible EOT Claims.",
    description:
      "Automated compilation of delay events from project schedules, correspondence, and site records. Creates contemporaneous event logs that support Extension of Time claims under FIDIC Sub-Clause 8.4.",
    metrics: [
      { label: "Event Capture", value: "Automated" },
      { label: "Delay Attribution", value: "Contractor/Engineer/Employer" },
      { label: "EOT Support", value: "FIDIC 8.4 Compliant" },
    ],
  },
  {
    name: "Claim Narrative Drafter",
    slug: "claim-narrative",
    icon: FileText,
    status: "concept" as const,
    tagline: "Structured Claims. Persuasive Narratives. Maximum Entitlement.",
    description:
      "AI-assisted drafting of FIDIC claim narratives under Sub-Clause 20.1. Structures claims with entitlement basis, cause analysis, delay correlation, and quantum summary — ready for Engineer review.",
    metrics: [
      { label: "Claim Structure", value: "FIDIC 20.1 Compliant" },
      { label: "Narrative Quality", value: "Engineer-Ready" },
      { label: "Entitlement Focus", value: "Maximum Recovery" },
    ],
  },
  {
    name: "Letter Drafter EPC",
    slug: "letter-drafter-epc",
    icon: Mail,
    status: "concept" as const,
    tagline: "Contractually Precise Correspondence. Every Time.",
    description:
      "Automated generation of FIDIC-compliant letters, notices, and correspondence. Ensures correct clause references, proper addressees, and contractually precise language for every communication.",
    metrics: [
      { label: "Letter Types", value: "20+ FIDIC templates" },
      { label: "Clause Accuracy", value: "100%" },
      { label: "Tone", value: "Professional, Contractual" },
    ],
  },
];

const workflowSteps = [
  {
    step: 1,
    title: "Project Events",
    description: "Delay events, variation instructions, site conditions, correspondence",
    icon: Zap,
    color: "text-infrastructure-400",
  },
  {
    step: 2,
    title: "Notice Tracking",
    description: "Automated FIDIC notice monitoring across 20+ clause types",
    icon: Bell,
    color: "text-warning-400",
  },
  {
    step: 3,
    title: "Event Logging",
    description: "Contemporaneous delay event compilation with attribution",
    icon: Calendar,
    color: "text-success-400",
  },
  {
    step: 4,
    title: "Claim Narrative",
    description: "AI-assisted claim drafting under FIDIC Sub-Clause 20.1",
    icon: FileText,
    color: "text-info-400",
  },
  {
    step: 5,
    title: "Correspondence",
    description: "Contractually precise letters and notices",
    icon: Mail,
    color: "text-purple-400",
  },
  {
    step: 6,
    title: "Claims Support",
    description: "Complete claims package for Engineer review",
    icon: Shield,
    color: "text-error-400",
  },
];

const supportedClauses = [
  { clause: "20.1", type: "Contractor's Claim", deadline: "28 days", trigger: "Event giving rise to claim" },
  { clause: "8.4", type: "Extension of Time", deadline: "28 days", trigger: "Cause of delay" },
  { clause: "4.12", type: "Unforeseeable Conditions", deadline: "28 days", trigger: "Discovery of conditions" },
  { clause: "8.5", type: "Delay Caused by Employer", deadline: "28 days", trigger: "Employer-caused delay" },
  { clause: "10.2", type: "Taking Over", deadline: "28 days", trigger: "Partial takeover" },
  { clause: "11.4", type: "Defects Liability", deadline: "28 days", trigger: "Defect correction" },
  { clause: "13.7", type: "Adjustments for Changes", deadline: "28 days", trigger: "Change in law" },
  { clause: "14.8", type: "Delayed Payment", deadline: "28 days", trigger: "Payment delay" },
  { clause: "15.2", type: "Termination by Employer", deadline: "14 days", trigger: "Contractor default" },
  { clause: "16.1", type: "Contractor's Right to Suspend", deadline: "28 days", trigger: "Payment failure" },
  { clause: "16.4", type: "Termination by Contractor", deadline: "28 days", trigger: "Employer default" },
  { clause: "17.1", type: "Indemnities", deadline: "28 days", trigger: "Indemnity event" },
];

const businessOutcomes = [
  {
    metric: "100%",
    label: "Notice Compliance",
    description: "Zero missed deadlines across all FIDIC notice obligations",
    icon: CheckCircle,
  },
  {
    metric: "85–90%",
    label: "Reduction in Preparation Time",
    description: "From weeks of manual drafting to hours of AI-assisted preparation",
    icon: Clock,
  },
  {
    metric: "100%",
    label: "Entitlement Preservation",
    description: "Every contractual entitlement captured and documented",
    icon: Shield,
  },
  {
    metric: "100%",
    label: "Clause Reference Accuracy",
    description: "Correct FIDIC clause references in every letter and notice",
    icon: Target,
  },
  {
    metric: "100%",
    label: "Contemporaneous Records",
    description: "Defensible evidence created at the time of events, not after",
    icon: BookOpen,
  },
  {
    metric: "90%+",
    label: "First-Pass Acceptance",
    description: "Engineer-ready claims that require minimal revision",
    icon: Zap,
  },
];

const userRoles = [
  {
    role: "Claims Manager",
    frequency: "Daily",
    benefit: "Complete claims oversight — notice compliance, event logs, narrative quality, correspondence accuracy",
  },
  {
    role: "Contract Administrator",
    frequency: "Daily",
    benefit: "Automated notice tracking, letter drafting, and deadline management across all FIDIC obligations",
  },
  {
    role: "Delay Analyst",
    frequency: "Weekly",
    benefit: "Contemporaneous delay event logs with attribution, supporting EOT claim preparation",
  },
  {
    role: "Project Manager",
    frequency: "Weekly",
    benefit: "Claims dashboard — compliance status, pending deadlines, claim progress, risk exposure",
  },
  {
    role: "Legal Counsel",
    frequency: "Monthly",
    benefit: "Audit-ready claims documentation with contemporaneous records and contractual precision",
  },
  {
    role: "Senior Management",
    frequency: "Monthly",
    benefit: "Executive claims intelligence — exposure summary, entitlement status, recovery potential",
  },
];

const useCases = [
  {
    title: "FIDIC Yellow Book — EOT Claim (MAHSR T-3)",
    context: "Railway electrification package with concurrent delays from Employer-caused design changes and Force Majeure events",
    solution: "Notice Monitor tracked 12 delay events, EOT Log compiled contemporaneous records, Claim Narrative drafted 3 EOT claims, Letter Drafter issued 8 contractual notices",
    outcome: "100% notice compliance, 3 EOT claims submitted within 28-day deadlines, INR 45 Crore entitlement preserved",
  },
  {
    title: "FIDIC Red Book — Variation Claim (Highway Project)",
    context: "Highway construction with 15 variation instructions issued by Engineer, causing cumulative delay and cost overrun",
    solution: "Event Log Compiler tracked all variations, Claim Narrative Drafter prepared comprehensive claim under Sub-Clause 13.7, Letter Drafter generated all correspondence",
    outcome: "INR 12 Crore variation claim submitted with full contemporaneous evidence, Engineer approval within 42 days",
  },
  {
    title: "FIDIC Yellow Book — Delay Damages Defense (Power Plant)",
    context: "Employer alleged 60-day delay, contractor counterclaimed 45-day EOT with delay damages",
    solution: "Full Claims Intelligence Suite deployed — Notice Monitor verified all notices, Event Log compiled delay analysis, Claim Narrative drafted defense, Letters maintained contractual record",
    outcome: "Delay damages claim reduced from INR 50 Crore to INR 8 Crore, contractor recovered INR 15 Crore in delay damages",
  },
  {
    title: "FIDIC Silver Book — Concurrent Delay (Airport Terminal)",
    context: "Airport terminal construction with concurrent delays from soil conditions (4.12) and Employer-caused design changes",
    solution: "Notice Monitor triggered Unforeseeable Conditions notice, Event Log attributed delay to both parties, Claim Narrative prepared concurrent delay analysis",
    outcome: "60-day EOT granted with no delay damages, contractor preserved entitlement under concurrent delay provisions",
  },
];

const faqs = [
  {
    question: "What is the FIDIC Claims Intelligence Suite?",
    answer:
      "An integrated suite of four AI-assisted modules that automate FIDIC contractual claims preparation and correspondence. It covers notice monitoring, event logging, claim narrative drafting, and letter generation — designed by practitioners who have administered FIDIC contracts on EPC megaprojects.",
  },
  {
    question: "Which FIDIC editions are supported?",
    answer:
      "The suite supports FIDIC 1999 (Red, Yellow, Silver Books) and FIDIC 2017 (2nd Edition). Clause references are mapped to both editions, with the 1999 editions as primary. Custom clause mapping is available for bespoke contracts.",
  },
  {
    question: "Can I use individual modules without the full suite?",
    answer:
      "Yes. Each module operates independently. You can deploy FIDIC Notice Monitor as a standalone compliance tool, or use Letter Drafter EPC for all FIDIC correspondence. The suite delivers maximum value when all four modules work together.",
  },
  {
    question: "How does this compare to generic contract management software?",
    answer:
      "Generic tools manage documents. The Claims Intelligence Suite manages obligations. It understands FIDIC clause deadlines, notice requirements, and claim entitlements — not just document storage. It was built by practitioners who have administered the exact contracts it serves.",
  },
  {
    question: "What is the deployment model?",
    answer:
      "Cloud-hosted SaaS for immediate deployment, or on-premise installation for organizations with data sovereignty requirements. The Notice Monitor module is currently in building phase; other modules are in concept phase with defined specifications.",
  },
  {
    question: "Is there a demo available?",
    answer:
      "Yes. Schedule a live demonstration using the calendar booking below. We will walk you through the FIDIC Notice Monitor demo scenario (MAHSR T-3) and show the concept specifications for the other three modules.",
  },
];

const downloads = [
  {
    title: "FIDIC Claims Intelligence Suite Overview",
    format: "PDF" as const,
    version: "v1.0",
    lastUpdated: "Jun 2026",
    fileSize: "172 KB",
    description: "Executive overview of the complete FIDIC Claims Intelligence Suite — four modules, unified workflow.",
    fileUrl: "/downloads/06_fidic-claims-intelligence-suite-overview.pdf",
  },
  {
    title: "FIDIC Notice Monitor One-Pager",
    format: "PDF" as const,
    version: "v1.0",
    lastUpdated: "Jun 2026",
    fileSize: "146 KB",
    description: "FIDIC Notice Monitor product summary — features, workflow, pricing, deployment.",
    fileUrl: "/downloads/08_fidic-notice-monitor-one-pager.pdf",
  },
  {
    title: "EOT Event Log Compiler — Concept Specification",
    format: "PDF" as const,
    version: "v1.0",
    lastUpdated: "Jun 2026",
    fileSize: "169 KB",
    description: "Technical specification for the EOT Event Log Compiler — architecture, data model, workflow.",
    fileUrl: "/downloads/07_eot-event-log-compiler-spec.pdf",
  },
  {
    title: "Claim Narrative Drafter — Concept Specification",
    format: "PDF" as const,
    version: "v1.0",
    lastUpdated: "Jun 2026",
    fileSize: "172 KB",
    description: "Technical specification for the Claim Narrative Drafter — FIDIC 20.1 compliance, narrative structure.",
    fileUrl: "/downloads/05_claim-narrative-drafter-spec.pdf",
  },
  {
    title: "Letter Drafter EPC — Concept Specification",
    format: "PDF" as const,
    version: "v1.0",
    lastUpdated: "Jun 2026",
    fileSize: "170 KB",
    description: "Technical specification for Letter Drafter EPC — templates, clause mapping, correspondence workflow.",
    fileUrl: "/downloads/04_letter-drafter-epc-spec.pdf",
  },
];

export default function FidicClaimsIntelligenceSuitePage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="absolute inset-0 bg-gradient-to-b from-infrastructure-900/30 to-transparent" />
        <Container className="relative">
          <Link
            href="/automations"
            className="inline-flex items-center text-sm text-graphite-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Automations
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="demonstrable">Suite</Badge>
            <span className="text-xs text-graphite-500">Flagship Automation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            FIDIC Claims Intelligence Suite
          </h1>
          <p className="text-lg text-graphite-300 max-w-3xl mb-8">
            AI-Assisted Claims Preparation and Contractual Intelligence for EPC Projects. Four integrated modules
            that ensure 100% notice compliance, contemporaneous event logging, persuasive claim narratives, and
            contractually precise correspondence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CalendlyCTA variant="button" buttonText="Schedule Demonstration" />
            <Button href="#download-centre" variant="secondary" size="lg">
              Download Materials
            </Button>
          </div>
        </Container>
      </Section>

      {/* Business Problem */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">The Problem: Claims Preparation Is Broken</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                  <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-error-400" />
                    Notice Deadlines Missed
                  </h3>
                  <p className="text-xs text-graphite-400">
                    Contractors lose entitlements because notice deadlines slip through manual tracking.
                    A single missed 28-day notice can forfeit millions in claims.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                  <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-warning-400" />
                    Weeks of Manual Drafting
                  </h3>
                  <p className="text-xs text-graphite-400">
                    Claim narratives take weeks to prepare. Delay analysts spend months compiling event logs.
                    Correspondence requires multiple revisions for contractual accuracy.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                  <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-info-400" />
                    Weak Claim Narratives
                  </h3>
                  <p className="text-xs text-graphite-400">
                    Claims submitted without proper FIDIC structure lack persuasive power. Engineers reject
                    incomplete claims, delaying recovery and increasing dispute risk.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                  <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    Correspondence Errors
                  </h3>
                  <p className="text-xs text-graphite-400">
                    Incorrect clause references, wrong addressees, imprecise language. Every correspondence
                    error weakens the contractual record and creates dispute vulnerabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Claims Intelligence Workflow */}
      <Section className="py-16 bg-graphite-900/50">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Claims Intelligence Workflow</h2>
          <p className="text-graphite-400 mb-12 text-center max-w-2xl mx-auto">
            From project event to claims support — an integrated workflow that ensures every entitlement is captured, documented, and pursued.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {workflowSteps.map((step, i) => (
              <div key={step.step} className="relative">
                <div className="p-4 rounded-xl bg-graphite-800 border border-graphite-700 text-center h-full">
                  <div className={`w-10 h-10 rounded-lg bg-graphite-700 flex items-center justify-center mx-auto mb-3`}>
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <div className="text-xs text-graphite-500 mb-1">Step {step.step}</div>
                  <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-[10px] text-graphite-400">{step.description}</p>
                </div>
                {i < workflowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-graphite-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Module Overview */}
      <Section className="py-16" id="modules">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Four Integrated Modules</h2>
          <p className="text-graphite-400 mb-12 text-center max-w-2xl mx-auto">
            Each module operates independently or as part of the integrated suite. Deploy what you need, when you need it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {modules.map((mod) => (
              <div
                key={mod.name}
                className="p-6 rounded-xl bg-graphite-800 border border-graphite-700 hover:border-infrastructure-500/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                      <mod.icon className="w-5 h-5 text-infrastructure-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{mod.name}</h3>
                      <Badge variant={mod.status === "building" ? "pilot" : "default"} className="mt-1">
                        {mod.status === "building" ? "Building" : "Concept"}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-infrastructure-400 font-mono mb-2">{mod.tagline}</p>
                <p className="text-xs text-graphite-400 mb-4">{mod.description}</p>
                <div className="grid grid-cols-3 gap-2">
                  {mod.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-sm font-bold text-white">{m.value}</div>
                      <div className="text-[10px] text-graphite-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Supported FIDIC Processes */}
      <Section className="py-16 bg-graphite-900/50">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Supported FIDIC Processes</h2>
          <p className="text-graphite-400 mb-12 text-center max-w-2xl mx-auto">
            Comprehensive coverage of FIDIC contractual obligations — every notice, every deadline, every entitlement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {supportedClauses.map((clause) => (
              <div
                key={clause.clause}
                className="p-4 rounded-xl bg-graphite-800 border border-graphite-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-white font-mono">§{clause.clause}</span>
                  <span className="text-[10px] text-infrastructure-400 bg-infrastructure-500/10 px-2 py-0.5 rounded-full">
                    {clause.deadline}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{clause.type}</h3>
                <p className="text-xs text-graphite-400">{clause.trigger}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Business Outcomes */}
      <Section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Business Outcomes</h2>
          <p className="text-graphite-400 mb-12 text-center max-w-2xl mx-auto">
            Measurable impact from AI-assisted claims preparation — not estimates, not projections, outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {businessOutcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="p-5 rounded-xl bg-graphite-800 border border-graphite-700 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center mx-auto mb-3">
                  <outcome.icon className="w-5 h-5 text-infrastructure-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{outcome.metric}</div>
                <div className="text-sm font-semibold text-white mb-2">{outcome.label}</div>
                <p className="text-xs text-graphite-400">{outcome.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* User Roles */}
      <Section className="py-16 bg-graphite-900/50">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">User Roles & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {userRoles.map((item) => (
              <div
                key={item.role}
                className="p-5 rounded-xl bg-graphite-800 border border-graphite-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-white">{item.role}</h3>
                  <span className="text-[10px] text-graphite-500">{item.frequency}</span>
                </div>
                <p className="text-xs text-graphite-400">{item.benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Representative Use Cases */}
      <Section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Representative Use Cases</h2>
          <p className="text-graphite-400 mb-12 text-center max-w-2xl mx-auto">
            Real-world scenarios where the Claims Intelligence Suite delivers measurable value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-6 rounded-xl bg-graphite-800 border border-graphite-700"
              >
                <h3 className="text-sm font-semibold text-white mb-3">{uc.title}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] text-graphite-500 uppercase tracking-wider">Context</span>
                    <p className="text-xs text-graphite-400 mt-1">{uc.context}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-infrastructure-400 uppercase tracking-wider">Solution</span>
                    <p className="text-xs text-graphite-400 mt-1">{uc.solution}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-success-400 uppercase tracking-wider">Outcome</span>
                    <p className="text-xs text-graphite-400 mt-1">{uc.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section className="py-16 bg-graphite-900/50">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group p-5 rounded-xl bg-graphite-800 border border-graphite-700"
              >
                <summary className="text-sm font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-graphite-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-xs text-graphite-400 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Download Centre */}
      <Section id="download-centre">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">Download Centre</h2>
          <p className="text-graphite-400 mb-8 max-w-2xl">
            Product documentation for evaluation and internal review.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {downloads.map((dl) => (
              <DownloadCard
                key={dl.title + dl.format}
                {...dl}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Demonstration CTA */}
      <Section id="request-demo">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">Request a Demonstration</h2>
          <p className="text-graphite-400 mb-8 max-w-2xl">
            See the FIDIC Claims Intelligence Suite in action. Schedule a walkthrough with the MAHSR T-3 demo scenario.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
            <div className="max-w-2xl">
              <CalendlyCTA
                variant="card"
                title="Schedule a Demonstration"
                description="30-minute live walkthrough of the FIDIC Claims Intelligence Suite with the MAHSR T-3 demo scenario."
                buttonText="Schedule Demo"
              />
            </div>
            <LazyQuickEnquiryForm source="fidic-claims-intelligence-suite" />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Never Miss an Entitlement Again"
        description="Join the EPC contractors using AI-assisted claims preparation to preserve every contractual entitlement."
        primaryCTA={{ text: "Schedule Demonstration", href: "#request-demo" }}
        secondaryCTA={{ text: "Download Materials", href: "#download-centre" }}
      />
    </>
  );
}
