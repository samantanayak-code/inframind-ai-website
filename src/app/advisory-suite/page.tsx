import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { CapabilityMetricCard } from "@/components/composites/CapabilityMetricCard";
import { DownloadCard } from "@/components/composites/DownloadCard";
import { LazyQuickEnquiryForm } from "@/components/composites/LazyQuickEnquiryForm";
import { CalendlyCTA } from "@/components/composites/CalendlyCTA";
import { CTASection } from "@/components/composites/CTASection";
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  FileText,
  AlertTriangle,
  Clock,
  Users,
  CheckCircle,
  Scale,
  BookOpen,
  Calendar,
  Layers,
  Zap,
  Target,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advisory Suite — EPC Intelligence Consulting",
  description:
    "Three integrated advisory offerings. One practitioner-built platform. Full lifecycle coverage from planning to arbitration. 20+ years EPC experience.",
  openGraph: {
    title: "Advisory Suite — InfraMind EPC",
    description:
      "Three integrated advisory offerings. Planning. Claims. Contractual Certainty. Practitioner-built, deployed on MAHSR T-3.",
  },
};

const lifecycleStages = [
  { name: "Planning", icon: Target, description: "Schedule development, baseline management" },
  { name: "Execution", icon: BarChart3, description: "Progress monitoring, delay identification" },
  { name: "Delay Analysis", icon: Clock, description: "EOT claims, concurrent delay resolution" },
  { name: "Claims Management", icon: FileText, description: "Contract administration, claims preparation" },
  { name: "Dispute Avoidance", icon: Shield, description: "Arbitration support, dispute resolution" },
];

const advisoryOfferings = [
  {
    name: "Planning & Scheduling Advisory",
    slug: "planning-scheduling",
    summary: "Project controls and scheduling for FIDIC-governed EPC projects.",
    outcomes: [
      "100% programme submission compliance",
      "Early warning systems reduce delay impact by 30–50%",
      "Forensic-grade schedule analysis for claims",
    ],
    deliverables: [
      "CPM programme development",
      "Baseline establishment and change control",
      "Earned value and S-curve analysis",
      "Critical path analysis",
    ],
    icon: Target,
    color: "infrastructure",
  },
  {
    name: "Delay Analysis & EOT Advisory",
    slug: "delay-analysis-eot",
    summary: "Specialized delay analysis and Extension of Time claims for FIDIC-governed EPC projects.",
    outcomes: [
      "80%+ EOT claim success rate",
      "60–90% of claimed time recovered",
      "50–80% reduction in LD exposure",
    ],
    deliverables: [
      "Time Impact Analysis (TIA)",
      "Window Analysis",
      "Concurrent delay apportionment",
      "EOT claim preparation",
    ],
    icon: Clock,
    color: "cyan",
  },
  {
    name: "Contracts & Claims Advisory",
    slug: "contracts-claims",
    summary: "End-to-end contract administration and claims management for FIDIC-governed EPC projects.",
    outcomes: [
      "100% Sub-Clause 20.1 notice compliance",
      "80%+ claim success rate with contemporaneous records",
      "Defensible records for ICC arbitration",
    ],
    deliverables: [
      "Contract administration",
      "Notice management and compliance",
      "Claims preparation with delay analysis",
      "Dispute avoidance and arbitration support",
    ],
    icon: Scale,
    color: "warning",
  },
];

const comparisonMatrix = [
  { category: "Typical Client", planning: "New project setup", delay: "Active delays", contracts: "Full lifecycle" },
  { category: "Project Phase", planning: "Setup & execution", delay: "During execution", contracts: "Full lifecycle" },
  { category: "Key Deliverables", planning: "Schedule, baseline, monitoring", delay: "Delay analysis, EOT claims", contracts: "Admin, notices, claims" },
  { category: "Engagement Type", planning: "Project-based", delay: "Claims-focused", contracts: "Retainer or project" },
  { category: "Business Outcome", planning: "Schedule compliance", delay: "Time and cost recovery", contracts: "Risk mitigation" },
];

const bundles = [
  {
    name: "Project Controls Bundle",
    offerings: ["Planning & Scheduling", "Delay Analysis & EOT"],
    discount: "10%",
    useCase: "New project setup with integrated schedule and delay management",
    description: "Integrated schedule development, baseline management, and delay analysis for projects from inception.",
  },
  {
    name: "Claims Management Bundle",
    offerings: ["Delay Analysis & EOT", "Contracts & Claims"],
    discount: "10%",
    useCase: "Active claims requiring comprehensive support",
    description: "End-to-end claims lifecycle coverage from delay analysis through contract administration to dispute resolution.",
  },
  {
    name: "Full Lifecycle Bundle",
    offerings: ["Planning & Scheduling", "Delay Analysis & EOT", "Contracts & Claims"],
    discount: "15%",
    useCase: "End-to-end support from planning to arbitration",
    description: "Complete project support covering all three advisory offerings with compound intelligence.",
  },
];

const representativeExperience = [
  {
    project: "MAHSR T-3 Track Package",
    value: "INR 3,142 Crore",
    contract: "FIDIC Yellow Book 1999",
    role: "Contracts & Claims Manager",
    governance: "JICA → NHSRCL → JICC → L&T Limited",
    achievements: [
      "100% Sub-Clause 20.1 compliance",
      "15+ EOT claims submitted",
      "Defensible audit trail for ICC arbitration",
    ],
  },
  {
    project: "Railway Electrification",
    value: "INR 500+ Crore",
    contract: "FIDIC Yellow Book",
    role: "Contract Administrator",
    governance: "Indian Railways → Contractor",
    achievements: [
      "Notice compliance maintained throughout",
      "Variation claims managed and documented",
      "Contemporary records established",
    ],
  },
];

const whyReasons = [
  { icon: Briefcase, title: "20+ Years EPC Experience", description: "Practitioner-built advisory by someone who has administered the exact contracts it serves" },
  { icon: BookOpen, title: "FIDIC Contract-Aware", description: "Clause-level intelligence across FIDIC Yellow Book 1999 and 2017" },
  { icon: Building2, title: "MAHSR T-3 Deployment", description: "Live on India's major high-speed rail megaproject — INR 3,142 Crore FIDIC Yellow Book" },
  { icon: Scale, title: "Claims & Arbitration Support", description: "ICC arbitration experience with fact witness testimony" },
  { icon: Zap, title: "Operational Automation", description: "Integrated with 7 automation capabilities for compound intelligence" },
];

const downloads = [
  {
    title: "Advisory Suite Overview",
    format: "PDF" as const,
    version: "v1.0",
    lastUpdated: "June 2026",
    fileSize: "168 KB",
    description: "Executive overview of all three advisory offerings, bundle options, and representative experience.",
    fileUrl: "/downloads/13_advisory-suite-overview.pdf",
  },
  {
    title: "Planning & Scheduling Brochure",
    format: "PDF" as const,
    version: "v2.0",
    lastUpdated: "June 2026",
    fileSize: "179 KB",
    description: "Complete Planning & Scheduling Advisory overview — services, FIDIC expertise, ROI metrics.",
    fileUrl: "/downloads/11_planning-scheduling-brochure.pdf",
  },
  {
    title: "Delay Analysis & EOT Brochure",
    format: "PDF" as const,
    version: "v2.0",
    lastUpdated: "June 2026",
    fileSize: "236 KB",
    description: "Complete Delay Analysis & EOT Advisory overview — methodologies, FIDIC expertise, ROI metrics.",
    fileUrl: "/downloads/02_delay-analysis-eot-brochure.pdf",
  },
  {
    title: "Contracts & Claims Brochure",
    format: "PDF" as const,
    version: "v2.0",
    lastUpdated: "June 2026",
    fileSize: "235 KB",
    description: "Complete Contracts & Claims Advisory overview — services, FIDIC expertise, ROI metrics.",
    fileUrl: "/downloads/03_contracts-claims-brochure.pdf",
  },
];

const consultationOptions = [
  {
    name: "Discovery Call",
    duration: "30 minutes",
    description: "Initial scoping conversation to understand your project challenges and identify relevant advisory offerings.",
    cta: "Schedule Discovery Call",
  },
  {
    name: "Programme Review",
    duration: "60 minutes",
    description: "Assessment of current schedule maturity, baseline status, and programme health.",
    cta: "Schedule Programme Review",
  },
  {
    name: "Claims Review",
    duration: "60 minutes",
    description: "Review of specific claims, notice compliance, or delay analysis challenges on your project.",
    cta: "Schedule Claims Review",
  },
  {
    name: "Contract Health Check",
    duration: "90 minutes",
    description: "Comprehensive assessment of contract administration practices, notice compliance, and claims readiness.",
    cta: "Schedule Health Check",
  },
];

// Placeholder icons for missing imports
function Briefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function Building2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

export default function AdvisorySuitePage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="absolute inset-0 bg-gradient-to-b from-infrastructure-900/30 to-transparent" />
        <Container className="relative">
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-graphite-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Services
          </Link>
          <Badge variant="production" className="mb-4">
            Advisory Suite
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            InfraMind Advisory Suite
          </h1>
          <p className="text-lg md:text-xl text-graphite-300 mb-4 max-w-2xl">
            Planning. Claims. Contractual Certainty.
          </p>
          <p className="text-sm text-graphite-400 mb-8 max-w-2xl">
            Three integrated advisory offerings. One practitioner-built platform. Full lifecycle coverage from planning
            to arbitration. 20+ years of EPC infrastructure experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="#consultation" size="lg">
              <Calendar className="w-4 h-4" />
              Schedule Consultation
            </Button>
            <Button href="#download-centre" variant="secondary" size="lg">
              Download Advisory Suite Overview
            </Button>
          </div>
        </Container>
      </Section>

      {/* Advisory Framework */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Advisory Framework</h2>
          <p className="text-graphite-400 mb-8 text-center max-w-2xl mx-auto">
            Full lifecycle coverage across five integrated project phases.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 max-w-4xl mx-auto">
            {lifecycleStages.map((stage, index) => (
              <div key={stage.name} className="flex items-center">
                <div className="p-4 rounded-xl bg-graphite-800 border border-graphite-700 text-center w-40">
                  <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center mx-auto mb-2">
                    <stage.icon className="w-5 h-5 text-infrastructure-400" />
                  </div>
                  <div className="text-sm font-semibold text-white">{stage.name}</div>
                  <div className="text-xs text-graphite-500 mt-1">{stage.description}</div>
                </div>
                {index < lifecycleStages.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-infrastructure-500 mx-2 hidden md:block flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Service Overview Cards */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Three Integrated Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisoryOfferings.map((offering) => (
              <div
                key={offering.name}
                className="p-6 rounded-xl bg-graphite-800 border border-graphite-700 hover:border-infrastructure-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                    <offering.icon className="w-5 h-5 text-infrastructure-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{offering.name}</h3>
                </div>
                <p className="text-xs text-graphite-400 mb-4">{offering.summary}</p>
                <div className="mb-4">
                  <div className="text-xs text-graphite-500 mb-2">Key Outcomes</div>
                  <div className="space-y-1.5">
                    {offering.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2 text-xs text-graphite-400">
                        <CheckCircle className="w-3 h-3 text-success-light flex-shrink-0" />
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button href={`/services/${offering.slug}`} variant="ghost" size="sm">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Button>
                  <Button href="#download-centre" variant="ghost" size="sm">
                    Download Brochure
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Service Comparison Matrix */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Service Comparison Matrix</h2>
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-graphite-700">
                  <th className="text-left py-3 px-4 text-graphite-400 font-medium">Category</th>
                  <th className="text-left py-3 px-4 text-infrastructure-400 font-medium">Planning & Scheduling</th>
                  <th className="text-left py-3 px-4 text-cyan-400 font-medium">Delay Analysis & EOT</th>
                  <th className="text-left py-3 px-4 text-warning-light font-medium">Contracts & Claims</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((row) => (
                  <tr key={row.category} className="border-b border-graphite-800">
                    <td className="py-3 px-4 text-white font-medium">{row.category}</td>
                    <td className="py-3 px-4 text-graphite-400">{row.planning}</td>
                    <td className="py-3 px-4 text-graphite-400">{row.delay}</td>
                    <td className="py-3 px-4 text-graphite-400">{row.contracts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Bundle Offerings */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Bundle Offerings</h2>
          <p className="text-graphite-400 mb-8 text-center max-w-2xl mx-auto">
            Save 10–15% when you combine advisory offerings into integrated bundles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {bundles.map((bundle) => (
              <div
                key={bundle.name}
                className="p-6 rounded-xl bg-graphite-800 border border-graphite-700 hover:border-infrastructure-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white">{bundle.name}</h3>
                  <div className="px-2 py-1 rounded bg-infrastructure-500/10 text-infrastructure-400 text-xs font-mono">
                    {bundle.discount} OFF
                  </div>
                </div>
                <p className="text-xs text-graphite-400 mb-4">{bundle.description}</p>
                <div className="mb-4">
                  <div className="text-xs text-graphite-500 mb-2">Included Offerings</div>
                  <div className="space-y-1.5">
                    {bundle.offerings.map((offering) => (
                      <div key={offering} className="flex items-center gap-2 text-xs text-graphite-400">
                        <CheckCircle className="w-3 h-3 text-success-light flex-shrink-0" />
                        {offering}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-graphite-700">
                  <div className="text-xs text-graphite-500">Best For</div>
                  <div className="text-xs text-graphite-300 mt-1">{bundle.useCase}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Representative Experience */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Representative Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {representativeExperience.map((exp) => (
              <div key={exp.project} className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
                <h3 className="text-lg font-semibold text-white mb-4">{exp.project}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
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
                    <div className="text-xs text-graphite-500">Governance</div>
                    <div className="font-medium text-white">{exp.governance}</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-graphite-700">
                  <div className="text-xs text-graphite-500 mb-2">Key Achievements</div>
                  <div className="space-y-1.5">
                    {exp.achievements.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-xs text-graphite-400">
                        <CheckCircle className="w-3 h-3 text-success-light flex-shrink-0" />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why InfraMind EPC */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why InfraMind EPC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {whyReasons.map((reason) => (
              <div key={reason.title} className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                    <reason.icon className="w-4 h-4 text-infrastructure-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{reason.title}</h3>
                </div>
                <p className="text-xs text-graphite-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Download Centre */}
      <Section id="download-centre">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">Download Centre</h2>
          <p className="text-graphite-400 mb-8">
            Download the Advisory Suite materials in your preferred format.
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

      {/* Consultation CTA */}
      <Section id="consultation">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Schedule a Consultation</h2>
          <p className="text-graphite-400 mb-8 text-center max-w-2xl mx-auto">
            Choose the consultation type that best fits your project needs.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {consultationOptions.map((opt) => (
                <div key={opt.name} className="p-5 rounded-xl bg-graphite-800 border border-graphite-700 text-center">
                  <h3 className="text-sm font-semibold text-white mb-2">{opt.name}</h3>
                  <div className="text-xs text-infrastructure-400 font-mono mb-3">{opt.duration}</div>
                  <p className="text-xs text-graphite-400 mb-4">{opt.description}</p>
                  <CalendlyCTA variant="button" buttonText={opt.cta} className="w-full" />
                </div>
              ))}
            </div>
            <LazyQuickEnquiryForm source="advisory-suite" />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to Strengthen Your Project Position?"
        description="Schedule a consultation to discuss how practitioner-built advisory services can reduce contractual exposure on your EPC project."
        primaryCTA={{ text: "Schedule Consultation", href: "#consultation" }}
        secondaryCTA={{ text: "Download Overview", href: "#download-centre" }}
      />
    </>
  );
}
