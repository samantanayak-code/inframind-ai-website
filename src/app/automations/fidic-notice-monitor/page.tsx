import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { MetricCard } from "@/components/composites/MetricCard";
import { CapabilityMetricCard } from "@/components/composites/CapabilityMetricCard";
import { DownloadCard } from "@/components/composites/DownloadCard";
import { LeadCaptureForm } from "@/components/composites/LeadCaptureForm";
import { QuickEnquiryForm } from "@/components/composites/QuickEnquiryForm";
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
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FIDIC Notice Monitor — Automated Notice Compliance",
  description:
    "AI-powered FIDIC contractual notice monitoring that ensures 100% compliance and preserves every entitlement. 100% notice compliance. 100% entitlement preservation. Deployed on MAHSR T-3 — INR 3,142 Crore FIDIC Yellow Book.",
  openGraph: {
    title: "FIDIC Notice Monitor — InfraMind AI",
    description:
      "AI-powered FIDIC notice compliance automation. Never miss a notice deadline again. Deployed on MAHSR T-3 — INR 3,142 Crore.",
  },
};

const supportedClauses = [
  {
    clause: "20.1",
    type: "Contractor's Claim",
    deadline: "28 days",
    trigger: "Event giving rise to claim",
    priority: "Critical" as const,
  },
  {
    clause: "8.4",
    type: "Extension of Time",
    deadline: "28 days",
    trigger: "Cause of delay",
    priority: "Critical" as const,
  },
  {
    clause: "4.12",
    type: "Unforeseeable Conditions",
    deadline: "28 days",
    trigger: "Discovery of conditions",
    priority: "Critical" as const,
  },
  {
    clause: "13.1",
    type: "Variation",
    deadline: "As directed",
    trigger: "Variation instruction",
    priority: "High" as const,
  },
  {
    clause: "8.3",
    type: "Programme",
    deadline: "28 days",
    trigger: "Programme update required",
    priority: "High" as const,
  },
  {
    clause: "3.5",
    type: "Engineer Determination",
    deadline: "42 days",
    trigger: "Engineer's determination",
    priority: "High" as const,
  },
];

const businessOutcomes = [
  {
    icon: CheckCircle,
    value: "100%",
    label: "Notice Compliance",
    description: "Automated monitoring ensures no deadline is missed",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Entitlement Preservation",
    description: "All claim rights maintained automatically",
  },
  {
    icon: Target,
    value: "60–90%",
    label: "Risk Reduction",
    description: "Early warning prevents forfeiture",
  },
  {
    icon: Zap,
    value: "30–50%",
    label: "Cost Savings",
    description: "Reduced manual effort, fewer errors",
  },
];

const manualSteps = [
  "Manually track notice deadlines in spreadsheets",
  "Calculate deadlines from event dates",
  "Draft notices from templates or memory",
  "Track submission and response status",
  "Escalate approaching deadlines manually",
  "Compile evidence packages for disputes",
];

const automatedSteps = [
  "Automated event detection and classification",
  "Deadline calculated from FIDIC clause rules",
  "FIDIC-compliant notice generated from templates",
  "Real-time tracking with 7/3/1 day alerts",
  "Automated escalation based on urgency",
  "Forensic-grade evidence archive compiled",
];

const workflowSteps = [
  { icon: Bell, name: "Detection", description: "Event identified and classified" },
  { icon: FileText, name: "Notice", description: "FIDIC-compliant notice generated" },
  { icon: Clock, name: "Deadline", description: "Real-time tracking with alerts" },
  { icon: Users, name: "Escalation", description: "Automated urgency-based escalation" },
  { icon: Shield, name: "Archive", description: "Forensic-grade evidence compilation" },
];

const userRoles = [
  {
    role: "Contracts Manager",
    benefit: "Never miss a notice deadline. 100% compliance. Automated alerts.",
    frequency: "Daily",
  },
  {
    role: "Claims Engineer",
    benefit: "All entitlements captured. Evidence compiled. Claims defensible.",
    frequency: "Daily",
  },
  {
    role: "Planning Engineer",
    benefit: "Programme-aware tracking. Delay notices linked to schedule.",
    frequency: "Weekly",
  },
  {
    role: "Project Director",
    benefit: "Real-time visibility. Risk dashboard. No surprises.",
    frequency: "Weekly",
  },
  {
    role: "Document Controller",
    benefit: "Centralized notice archive. Automated filing. Searchable records.",
    frequency: "Daily",
  },
];

const roiMetrics = [
  {
    metric: "Notice submission time",
    before: "7–14 days",
    after: "< 24 hours",
    improvement: "85% faster",
  },
  {
    metric: "Compliance rate",
    before: "70–85%",
    after: "100%",
    improvement: "15–30% improvement",
  },
  {
    metric: "Missed deadlines",
    before: "2–5/year",
    after: "0",
    improvement: "100% reduction",
  },
  {
    metric: "Manual effort",
    before: "20 hrs/week",
    after: "5 hrs/week",
    improvement: "75% reduction",
  },
  {
    metric: "Dispute preparation",
    before: "30 days",
    after: "3 days",
    improvement: "90% faster",
  },
];

const faqs = [
  {
    question: "What is FIDIC Notice Monitor?",
    answer:
      "The FIDIC Notice Monitor is an AI-powered automation capability that monitors, tracks, and alerts on all FIDIC contractual notice obligations in real-time. It ensures no deadline is missed, no entitlement is forfeited, and no claim is time-barred.",
  },
  {
    question: "Which FIDIC clauses are supported?",
    answer:
      "The system monitors Sub-Clause 20.1 (Contractor's Claim), 8.4 (Extension of Time), 4.12 (Unforeseeable Conditions), 13.1 (Variation), 8.3 (Programme), and 3.5 (Engineer Determination). Additional clauses can be configured based on contract requirements.",
  },
  {
    question: "How does the alert system work?",
    answer:
      "The system operates on a 7/3/1 day alert schedule: alerts are triggered at 7 days, 3 days, and 1 day before each notice deadline. Escalation logic automatically increases urgency based on proximity to deadline.",
  },
  {
    question: "What is the escalation matrix?",
    answer:
      "The system uses a 4-level escalation matrix: Level 1 (7 days) — Contracts Manager alert; Level 2 (3 days) — Claims Engineer notification; Level 3 (1 day) — Project Director escalation; Level 4 (Overdue) — Executive alert with compliance report.",
  },
  {
    question: "Is it secure?",
    answer:
      "The FIDIC Notice Monitor processes notice data locally with no external transmission. All notice records are stored in a forensic-grade archive suitable for dispute resolution. The system requires authorized access with role-based permissions.",
  },
  {
    question: "What is the time savings?",
    answer:
      "Manual notice tracking requires 20 hours per week of contracts manager time. The FIDIC Notice Monitor reduces this to approximately 5 hours per week — a 75% reduction. More importantly, it ensures 100% compliance, eliminating the risk of time-barred claims.",
  },
  {
    question: "How is it deployed?",
    answer:
      "The FIDIC Notice Monitor is deployed on the MAHSR T-3 Track Package — INR 3,142 Crore FIDIC Yellow Book contract. It is currently in the productization phase with a demo environment under development.",
  },
];

const downloads = [
  {
    title: "FIDIC Notice Monitor One-Pager",
    format: "PDF" as const,
    version: "v1.0",
    lastUpdated: "June 2026",
    fileSize: "0.3 MB",
    description: "Executive summary — problem, solution, outcomes, and contact information.",
    fileUrl: "/downloads/fidic-notice-monitor-one-pager.pdf",
  },
  {
    title: "FIDIC Notice Monitor Demo Script",
    format: "PDF" as const,
    version: "v1.0",
    lastUpdated: "June 2026",
    fileSize: "0.4 MB",
    description: "5-minute demo walkthrough — MAHSR T-3 scenario with screenshots.",
    fileUrl: "/downloads/fidic-notice-monitor-demo-script.pdf",
  },
];

export default function FidicNoticeMonitorPage() {
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
            <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-infrastructure-400" />
            </div>
            <Badge variant="production">Monitoring Layer</Badge>
            <span className="text-xs text-graphite-500">OAS-002</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            FIDIC Notice Monitor
          </h1>
          <p className="text-lg md:text-xl text-graphite-300 mb-4 max-w-2xl">
            Never Miss a Notice Deadline Again.
          </p>
          <p className="text-sm text-graphite-400 mb-8 max-w-2xl">
            AI-powered FIDIC contractual notice monitoring that ensures 100% compliance and preserves every entitlement.
            Deployed on MAHSR T-3 — INR 3,142 Crore FIDIC Yellow Book.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="#request-demo" size="lg">
              <Calendar className="w-4 h-4" />
              Request Demonstration
            </Button>
            <Button href="#download-centre" variant="secondary" size="lg">
              Download One-Pager
            </Button>
          </div>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Key Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard value="100%" label="Notice Compliance" description="No deadline missed" />
            <MetricCard value="100%" label="Entitlement Preservation" description="All claim rights maintained" />
            <MetricCard value="60–90%" label="Risk Reduction" description="Early warning prevents forfeiture" />
            <MetricCard value="7/3/1" label="Day Alerts" description="Progressive deadline alerts" />
          </div>
        </Container>
      </Section>

      {/* The Problem */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">The Problem</h2>
          <p className="text-graphite-400 mb-8 max-w-2xl">
            FIDIC-governed infrastructure projects operate under strict notice periods. A single missed deadline — 14 days for a claim notice, 28 days for delay notification — can extinguish an entitlement worth millions.
          </p>
          <div className="p-6 rounded-xl bg-graphite-800 border border-error/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-error-light" />
              </div>
              <h3 className="text-sm font-semibold text-white">Sub-Clause 20.1 — The Critical Deadline</h3>
            </div>
            <blockquote className="border-l-2 border-error/50 pl-4 mb-4">
              <p className="text-sm text-graphite-300 italic">
                &ldquo;If the Contractor considers himself to be entitled to any extension of the Time for Completion and/or any additional payment... he shall give notice to the Engineer accordingly... <strong className="text-white">within 28 days</strong> after the event or circumstance giving rise to the claim.&rdquo;
              </p>
              <cite className="text-xs text-graphite-500 mt-2 block">— FIDIC 1999, Sub-Clause 20.1</cite>
            </blockquote>
            <p className="text-sm text-error-light font-semibold">
              Missing this deadline = time-barred claim = forfeited entitlement.
            </p>
          </div>
        </Container>
      </Section>

      {/* Supported FIDIC Clauses */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">Supported FIDIC Clauses</h2>
          <p className="text-graphite-400 mb-8 max-w-2xl">
            The Notice Monitor covers the most critical FIDIC contractual notice obligations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportedClauses.map((clause) => (
              <div
                key={clause.clause}
                className="p-5 rounded-xl bg-graphite-800 border border-graphite-700 hover:border-graphite-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-infrastructure-400" />
                    </div>
                    <span className="text-lg font-bold text-white font-mono">§{clause.clause}</span>
                  </div>
                  <Badge
                    variant={clause.priority === "Critical" ? "pilot" : "default"}
                  >
                    {clause.priority}
                  </Badge>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{clause.type}</h3>
                <p className="text-xs text-graphite-400 mb-2">{clause.trigger}</p>
                <div className="flex items-center gap-1 text-xs">
                  <Clock className="w-3 h-3 text-graphite-500" />
                  <span className="text-graphite-400">Deadline:</span>
                  <span className="text-white font-mono">{clause.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Business Outcomes */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8">Business Outcomes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessOutcomes.map((outcome) => (
              <CapabilityMetricCard
                key={outcome.label}
                icon={outcome.icon}
                value={outcome.value}
                label={outcome.label}
                description={outcome.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Manual vs Automated */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Manual Process vs FIDIC Notice Monitor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-graphite-800 border border-error/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-error-light" />
                </div>
                <h3 className="text-sm font-semibold text-white">Manual Notice Tracking</h3>
                <div className="ml-auto px-2 py-1 rounded bg-error/10 text-error-light text-xs font-mono">
                  20 hrs/week
                </div>
              </div>
              <div className="space-y-2">
                {manualSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-graphite-400">
                    <AlertTriangle className="w-3 h-3 text-error-light flex-shrink-0 mt-0.5" />
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-graphite-800 border border-success/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-success-light" />
                </div>
                <h3 className="text-sm font-semibold text-white">FIDIC Notice Monitor</h3>
                <div className="ml-auto px-2 py-1 rounded bg-success/10 text-success-light text-xs font-mono">
                  5 hrs/week
                </div>
              </div>
              <div className="space-y-2">
                {automatedSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-graphite-400">
                    <CheckCircle className="w-3 h-3 text-success-light flex-shrink-0 mt-0.5" />
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Notice Lifecycle Workflow */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Notice Lifecycle Workflow</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {workflowSteps.map((step, i) => (
              <div key={step.name} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-graphite-800 border border-graphite-700 flex items-center justify-center mx-auto mb-2">
                    <step.icon className="w-6 h-6 text-infrastructure-400" />
                  </div>
                  <p className="text-xs font-semibold text-white">{step.name}</p>
                  <p className="text-[10px] text-graphite-500 max-w-[100px]">{step.description}</p>
                </div>
                {i < workflowSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-graphite-600 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ROI Analysis */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8">ROI Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-graphite-700">
                  <th className="text-left py-3 px-4 text-graphite-400 font-medium">Metric</th>
                  <th className="text-left py-3 px-4 text-graphite-400 font-medium">Before</th>
                  <th className="text-left py-3 px-4 text-graphite-400 font-medium">After</th>
                  <th className="text-left py-3 px-4 text-graphite-400 font-medium">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {roiMetrics.map((row) => (
                  <tr key={row.metric} className="border-b border-graphite-800">
                    <td className="py-3 px-4 text-white font-medium">{row.metric}</td>
                    <td className="py-3 px-4 text-error-light">{row.before}</td>
                    <td className="py-3 px-4 text-success-light">{row.after}</td>
                    <td className="py-3 px-4 text-infrastructure-400">{row.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* User Roles */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8">User Roles & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* FAQs */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downloads.map((dl) => (
              <DownloadCard
                key={dl.title}
                title={dl.title}
                format={dl.format}
                version={dl.version}
                lastUpdated={dl.lastUpdated}
                fileSize={dl.fileSize}
                description={dl.description}
                fileUrl={dl.fileUrl}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Request Demo / Lead Capture */}
      <Section id="request-demo">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">Request a Demonstration</h2>
          <p className="text-graphite-400 mb-8 max-w-2xl">
            See the FIDIC Notice Monitor in action. Schedule a walkthrough with the MAHSR T-3 demo scenario.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
            <div className="max-w-2xl">
              <CalendlyCTA
                variant="card"
                title="Schedule a Demonstration"
                description="30-minute live walkthrough of FIDIC Notice Monitor with the MAHSR T-3 demo scenario."
                buttonText="Schedule Demo"
              />
            </div>
            <QuickEnquiryForm source="fidic-notice-monitor" />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Never Miss a Notice Deadline Again"
        description="Join the EPC contractors using AI-powered notice compliance automation to preserve every entitlement."
        primaryCTA={{ text: "Request Demonstration", href: "#request-demo" }}
        secondaryCTA={{ text: "Download One-Pager", href: "#download-centre" }}
      />
    </>
  );
}
