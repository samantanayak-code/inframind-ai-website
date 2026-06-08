"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { CapabilityMetricCard } from "@/components/composites/CapabilityMetricCard";
import { DownloadCard } from "@/components/composites/DownloadCard";
import { LeadCaptureForm } from "@/components/composites/LeadCaptureForm";
import { QuickEnquiryForm } from "@/components/composites/QuickEnquiryForm";
import { CalendlyCTA } from "@/components/composites/CalendlyCTA";
import { CTASection } from "@/components/composites/CTASection";
import {
  ArrowRight,
  Calendar,
  FileText,
  Download,
  Building2,
  Shield,
  Clock,
  Briefcase,
  Zap,
  Database,
  FileSearch,
  BarChart3,
} from "lucide-react";

const keyMetrics = [
  { icon: Briefcase, value: "20+", label: "Years EPC Experience", description: "Infrastructure contract administration" },
  { icon: Building2, value: "INR 3,142 Cr", label: "MAHSR T-3", description: "FIDIC Yellow Book megaproject" },
  { icon: FileText, value: "3", label: "Advisory Offerings", description: "Planning, Delay Analysis, Contracts" },
  { icon: Database, value: "2", label: "Platform Products", description: "Digital Twin & NCR Tracker" },
  { icon: Zap, value: "7", label: "Automation Capabilities", description: "Operational Automation Suite" },
];

const advisorySuites = [
  {
    name: "Planning & Scheduling Advisory",
    description: "End-to-end programme controls for EPC megaprojects — from baseline schedule development through recovery planning.",
    deliverables: ["Primavera P6 Baseline Schedule", "Recovery Schedule", "Progress Measurement", "Schedule Governance"],
    link: "/services/planning-scheduling",
  },
  {
    name: "Delay Analysis & EOT Advisory",
    description: "Forensic delay analysis and Extension of Time assessment under FIDIC contract regimes.",
    deliverables: ["Time Impact Analysis", "Window Analysis", "EOT Assessment", "Concurrent Delay Resolution"],
    link: "/services/delay-analysis-eot",
  },
  {
    name: "Contracts & Claims Advisory",
    description: "FIDIC contract administration, notice compliance, claim preparation, and dispute resolution.",
    deliverables: ["Claim Preparation", "Notice Compliance", "Dispute Resolution", "Arbitration Support"],
    link: "/services/contract-intelligence",
  },
];

const automationCapabilities = [
  {
    name: "Unifier Sync",
    status: "deployed" as const,
    description: "Automated Oracle Unifier correspondence extraction and organization.",
    metrics: "80–95% Reduction",
  },
  {
    name: "FIDIC Notice Monitor",
    status: "pilot" as const,
    description: "Automated FIDIC clause tracking and deadline escalation.",
    metrics: "Zero Missed Notices",
  },
  {
    name: "OCR Intelligence Pipeline",
    status: "building" as const,
    description: "Document digitization for AI analysis — 98% OCR accuracy.",
    metrics: "98%+ Accuracy",
  },
  {
    name: "Claims Evidence Compiler",
    status: "building" as const,
    description: "Automated claims evidence assembly and audit trail generation.",
    metrics: "60% Faster Assembly",
  },
];

const representativeExperience = [
  {
    project: "MAHSR T-3 Track Package",
    value: "INR 3,142 Crore",
    contract: "FIDIC Yellow Book 1999",
    role: "Manager — Contracts & Claims",
    scope: "115.877 km track construction — Vadodara to Sabarmati",
    governance: "JICA → NHSRCL → JICC → L&T Limited",
  },
  {
    project: "Railway Electrification",
    value: "INR 500+ Crore",
    contract: "FIDIC Yellow Book",
    role: "Contracts & Claims Management",
    scope: "Railway electrification infrastructure",
    governance: "Indian Railways → Contractor",
  },
];

const downloads = [
  {
    title: "Capability Statement — InfraMind AI",
    format: "PDF" as const,
    version: "v1.0",
    lastUpdated: "June 2026",
    fileSize: "2.4 MB",
    description: "Complete portfolio overview — advisory suite, products, automation capabilities, and representative experience.",
    fileUrl: "/downloads/capability-statement.pdf",
  },
  {
    title: "Capability Statement — InfraMind AI",
    format: "PPT" as const,
    version: "v1.0",
    lastUpdated: "June 2026",
    fileSize: "5.1 MB",
    description: "Presentation format — suitable for project introduction and stakeholder briefings.",
    fileUrl: "/downloads/capability-statement.pptx",
  },
];

const consultationOptions = [
  {
    name: "Discovery Call",
    duration: "30 minutes",
    description: "Initial scoping conversation to understand your project challenges and identify relevant capabilities.",
    cta: "Schedule Discovery Call",
  },
  {
    name: "Advisory Consultation",
    duration: "60 minutes",
    description: "Deep-dive into planning, delay analysis, or contract management challenges on your specific project.",
    cta: "Schedule Advisory Consultation",
  },
  {
    name: "Automation Assessment",
    duration: "45 minutes",
    description: "Evaluate which automation capabilities can reduce manual effort on your project workflows.",
    cta: "Schedule Automation Assessment",
  },
];

export default function CapabilityStatementPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="absolute inset-0 bg-gradient-to-b from-infrastructure-900/30 to-transparent" />
        <Container className="relative">
          <div className="max-w-3xl">
            <Badge variant="production" className="mb-4">
              Operational Intelligence for Infrastructure
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Capability Statement
            </h1>
            <p className="text-lg md:text-xl text-graphite-300 mb-8 max-w-2xl">
              20+ years of EPC infrastructure experience, encoded into AI-augmented operational intelligence systems.
              FIDIC expertise. Project Controls. Claims & Arbitration Support. Operational Automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="#download-centre" size="lg">
                <Download className="w-4 h-4" />
                Download Capability Statement
              </Button>
              <Button href="#consultation" variant="secondary" size="lg">
                <Calendar className="w-4 h-4" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Executive Overview */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8">Executive Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-infrastructure-400" />
                </div>
                <h3 className="text-sm font-semibold text-white">InfraMind AI</h3>
              </div>
              <p className="text-sm text-graphite-400">
                Practitioner-built AI systems for EPC megaprojects. Every product operational on active EPC projects,
                engineered by 20+ years of lived FIDIC contract administration experience.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-infrastructure-400" />
                </div>
                <h3 className="text-sm font-semibold text-white">Advisory Suite</h3>
              </div>
              <p className="text-sm text-graphite-400">
                Three specialised advisory offerings — Planning & Scheduling, Delay Analysis & EOT, Contracts & Claims —
                each backed by 20+ years of hands-on EPC experience.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-infrastructure-400" />
                </div>
                <h3 className="text-sm font-semibold text-white">Operational Automation</h3>
              </div>
              <p className="text-sm text-graphite-400">
                Seven automation capabilities across four layers — Foundation, Monitoring, Analysis, Intelligence —
                each built to solve problems experienced on live megaprojects.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                  <Database className="w-4 h-4 text-infrastructure-400" />
                </div>
                <h3 className="text-sm font-semibold text-white">Digital Platforms</h3>
              </div>
              <p className="text-sm text-graphite-400">
                MAHSR Digital Twin (13+ modules, 230 track-km) and NCR Tracker (40%+ faster closure) —
                deployed on India&apos;s major infrastructure megaprojects.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Metrics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {keyMetrics.map((m) => (
              <CapabilityMetricCard key={m.label} {...m} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Advisory Suite Overview */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">Advisory Suite</h2>
          <p className="text-graphite-400 mb-8 max-w-2xl">
            Three specialised advisory offerings, each backed by 20+ years of hands-on EPC contract administration
            experience on infrastructure megaprojects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisorySuites.map((suite) => (
              <div
                key={suite.name}
                className="p-6 rounded-xl bg-graphite-800 border border-graphite-700 hover:border-infrastructure-500/50 transition-colors"
              >
                <h3 className="text-sm font-semibold text-white mb-2">{suite.name}</h3>
                <p className="text-xs text-graphite-400 mb-4">{suite.description}</p>
                <div className="space-y-1.5 mb-4">
                  {suite.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-graphite-500">
                      <div className="w-1 h-1 rounded-full bg-infrastructure-500" />
                      {d}
                    </div>
                  ))}
                </div>
                <Button href={suite.link} variant="ghost" size="sm">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Operational Automation Overview */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">Operational Automation Suite</h2>
          <p className="text-graphite-400 mb-8 max-w-2xl">
            Seven automation capabilities, each built from operational pain experienced on live megaprojects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {automationCapabilities.map((cap) => (
              <div
                key={cap.name}
                className="p-5 rounded-xl bg-graphite-800 border border-graphite-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-white">{cap.name}</h3>
                  <Badge
                    variant={
                      cap.status === "deployed"
                        ? "production"
                        : cap.status === "pilot"
                        ? "pilot"
                        : "demonstrable"
                    }
                  >
                    {cap.status}
                  </Badge>
                </div>
                <p className="text-xs text-graphite-400 mb-3">{cap.description}</p>
                <div className="text-lg font-bold text-infrastructure-400 font-mono">{cap.metrics}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button href="/automations" variant="ghost" size="sm">
              View All Capabilities <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Representative Experience */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8">Representative Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {representativeExperience.map((exp) => (
              <div
                key={exp.project}
                className="p-6 rounded-xl bg-graphite-800 border border-graphite-700"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{exp.project}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-graphite-500">Contract Value</div>
                    <div className="font-medium text-white">{exp.value}</div>
                  </div>
                  <div>
                    <div className="text-xs text-graphite-500">Contract Form</div>
                    <div className="font-medium text-white">{exp.contract}</div>
                  </div>
                  <div>
                    <div className="text-xs text-graphite-500">Role</div>
                    <div className="font-medium text-white">{exp.role}</div>
                  </div>
                  <div>
                    <div className="text-xs text-graphite-500">Scope</div>
                    <div className="font-medium text-white">{exp.scope}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-graphite-700">
                  <div className="text-xs text-graphite-500">Governance</div>
                  <div className="text-sm text-graphite-300">{exp.governance}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Download Centre */}
      <Section id="download-centre">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Download Centre</h2>
              <p className="text-graphite-400 mb-8">
                Download the InfraMind AI Capability Statement in your preferred format.
              </p>
              <div className="space-y-4">
                {downloads.map((dl) => (
                    <DownloadCard
                      key={dl.title + dl.format}
                      {...dl}
                    />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Lead Capture</h2>
              <p className="text-graphite-400 mb-8">
                Complete the form to download the Capability Statement and receive follow-up communication.
              </p>
              <LeadCaptureForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* Consultation CTA */}
      <Section id="consultation">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Schedule a Consultation</h2>
          <p className="text-graphite-400 mb-8 text-center max-w-2xl mx-auto">
            Choose the consultation type that best fits your project needs.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {consultationOptions.map((opt) => (
                <div
                  key={opt.name}
                  className="p-5 rounded-xl bg-graphite-800 border border-graphite-700 text-center"
                >
                  <h3 className="text-sm font-semibold text-white mb-2">{opt.name}</h3>
                  <div className="text-xs text-infrastructure-400 font-mono mb-3">{opt.duration}</div>
                  <p className="text-xs text-graphite-400 mb-4">{opt.description}</p>
                  <CalendlyCTA variant="button" buttonText={opt.cta} className="w-full" />
                </div>
              ))}
            </div>
            <QuickEnquiryForm source="capability-statement" />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to Reduce Your Contractual Exposure?"
        description="Download the Capability Statement and schedule a consultation to discuss how practitioner-built operational intelligence can reduce contractual exposure on your EPC project."
        primaryCTA={{ text: "Download Capability Statement", href: "#download-centre" }}
        secondaryCTA={{ text: "Schedule Consultation", href: "#consultation" }}
      />
    </>
  );
}
