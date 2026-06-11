import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { FeatureItem } from "@/components/composites/FeatureItem";
import { CapabilityMetricCard } from "@/components/composites/CapabilityMetricCard";
import { DownloadCard } from "@/components/composites/DownloadCard";
import { QuickEnquiryForm } from "@/components/composites/QuickEnquiryForm";
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
  Bell,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contracts & Claims Advisory — EPC Intelligence Consulting",
  description:
    "End-to-end contract administration and claims management for FIDIC-governed EPC projects. 100% Sub-Clause 20.1 compliance. 80%+ claim success rate. Defensible records for ICC arbitration.",
  openGraph: {
    title: "Contracts & Claims Advisory — InfraMind EPC",
    description:
      "End-to-end contract administration and claims management for FIDIC-governed EPC projects. Practitioner-built, deployed on MAHSR T-3.",
  },
};

const failureReasons = [
  {
    icon: Clock,
    title: "Late Notices",
    description: "Missed 28-day notice windows under Sub-Clause 20.1, resulting in time-barred entitlements and forfeiture of claims.",
  },
  {
    icon: FileText,
    title: "Weak Records",
    description: "Insufficient contemporaneous records to substantiate claims, leaving positions vulnerable in dispute resolution.",
  },
  {
    icon: AlertTriangle,
    title: "Poor Variation Control",
    description: "Unmanaged variation instructions leading to uncompensated work and disputed additional costs.",
  },
  {
    icon: Scale,
    title: "Missing Claim Substantiation",
    description: "Claims submitted without adequate delay analysis or supporting evidence, resulting in rejection.",
  },
  {
    icon: Users,
    title: "Engineer Determination Disputes",
    description: "Disagreements with Engineer determinations unresolved through proper contractual procedures.",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Contract Administration",
    description: "Complete contract administration from award to compliance, including obligation tracking, correspondence management, and compliance monitoring.",
  },
  {
    icon: Bell,
    title: "Notices & Correspondence",
    description: "Notice preparation, tracking, and compliance. 100% Sub-Clause 20.1 compliance with deadline management and contemporaneous records.",
  },
  {
    icon: FileText,
    title: "Variations",
    description: "Variation management, pricing, and claims. From instruction through valuation to agreement and registration.",
  },
  {
    icon: AlertTriangle,
    title: "Claims Preparation",
    description: "Full claims preparation with delay analysis, evidence compilation, and submission. 80%+ claim success rate with contemporaneous records.",
  },
  {
    icon: CheckCircle,
    title: "Contemporary Records",
    description: "Record-keeping system and management. Timestamp-governed, dispute-resolution-ready audit trails suitable for ICC arbitration.",
  },
  {
    icon: Clock,
    title: "EOT Integration",
    description: "Extension of Time claims with delay analysis. 60–90% of claimed time recovered through forensic delay analysis.",
  },
  {
    icon: Shield,
    title: "Dispute Avoidance",
    description: "Preventive measures to avoid disputes. Early warning systems, risk assessment, and negotiation support.",
  },
  {
    icon: Scale,
    title: "Arbitration Support",
    description: "Expert support for arbitration and dispute resolution. ICC arbitration experience with fact witness testimony.",
  },
];

const fidicClauses = [
  {
    clause: "20.1",
    title: "Contractor's Claims",
    description: "Notice within 28 days. Detailed claim submission within 42 days. Monthly updates required.",
  },
  {
    clause: "20.2",
    title: "Employer's Claims",
    description: "Notice within 28 days. Employer's entitlement to claim damages or extension of time.",
  },
  {
    clause: "8.4",
    title: "Extension of Time",
    description: "EOT entitlement for qualifying delay events. Entitlement assessment and quantification.",
  },
  {
    clause: "13.1",
    title: "Variations",
    description: "Variation instruction, valuation, and agreement. Cost and time impact assessment.",
  },
  {
    clause: "3.5",
    title: "Engineer's Determination",
    description: "Fair determination of claims. Both parties consulted. Within 42 days of submission.",
  },
];

const representativeExperience = [
  {
    project: "MAHSR T-3 Track Package",
    value: "INR 3,142 Crore",
    contract: "FIDIC Yellow Book 1999",
    role: "Contracts & Claims Manager",
    scope: "115.877 km ballastless slab track · 230 track-km",
    governance: "JICA → NHSRCL → JICC → L&T Limited",
    achievements: [
      "100% Sub-Clause 20.1 compliance",
      "15+ EOT claims submitted",
      "100% claim substantiation",
      "Defensible audit trail for ICC arbitration",
    ],
  },
  {
    project: "Railway Electrification",
    value: "INR 500+ Crore",
    contract: "FIDIC Yellow Book",
    role: "Contract Administrator",
    scope: "Railway electrification infrastructure",
    governance: "Indian Railways → Contractor",
    achievements: [
      "Notice compliance maintained throughout",
      "Variation claims managed and documented",
      "Correspondence system implemented",
      "Contemporary records established",
    ],
  },
];

const outcomes = [
  { value: "100%", label: "Notice Compliance", description: "Sub-Clause 20.1 compliance on verified deployments" },
  { value: "80%+", label: "Claim Success Rate", description: "With contemporaneous records" },
  { value: "60–90%", label: "EOT Recovery", description: "Of claimed time recovered" },
  { value: "50–80%", label: "LD Reduction", description: "Reduction in liquidated damages exposure" },
];

const downloads = [
  {
    title: "Contracts & Claims Advisory Brochure",
    format: "PDF" as const,
    version: "v2.0",
    lastUpdated: "June 2026",
    fileSize: "1.8 MB",
    description: "Complete advisory overview — services, FIDIC expertise, ROI metrics, representative experience.",
    fileUrl: "/downloads/contracts-claims-brochure.pdf",
  },
];

const consultationOptions = [
  {
    name: "Discovery Call",
    duration: "30 minutes",
    description: "Initial scoping conversation to understand your contract administration challenges.",
    cta: "Schedule Discovery Call",
  },
  {
    name: "Claims Review",
    duration: "60 minutes",
    description: "Review of specific claims, notice compliance, or dispute challenges on your project.",
    cta: "Schedule Claims Review",
  },
  {
    name: "Contract Health Check",
    duration: "90 minutes",
    description: "Comprehensive assessment of contract administration practices, notice compliance, and claims readiness.",
    cta: "Schedule Health Check",
  },
];

export default function ContractsClaimsPage() {
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
            Advisory Suite — Flagship Offering
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Contracts & Claims Advisory
          </h1>
          <p className="text-lg md:text-xl text-graphite-300 mb-4 max-w-2xl">
            Contractual Clarity. Commercial Protection. Evidence-Based Claims Support.
          </p>
          <p className="text-sm text-graphite-400 mb-8 max-w-2xl">
            End-to-end contract administration and claims management for FIDIC-governed EPC projects. 20+ years of hands-on
            contract administration experience, including MAHSR T-3 Track Package — INR 3,142 Crore FIDIC Yellow Book.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="#consultation" size="lg">
              <Calendar className="w-4 h-4" />
              Schedule Consultation
            </Button>
            <Button href="#download-centre" variant="secondary" size="lg">
              Download Brochure
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Contract Administration Fails */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">Why Contract Administration Fails</h2>
          <p className="text-graphite-400 mb-8 max-w-2xl">
            Industry estimates suggest a significant percentage of claims fail due to late notice, weak records, or wrong
            methodology. The financial consequences can be measured in tens of millions of rupees.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {failureReasons.map((reason) => (
              <div key={reason.title} className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center">
                    <reason.icon className="w-4 h-4 text-error-light" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{reason.title}</h3>
                </div>
                <p className="text-xs text-graphite-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">Eight Advisory Services</h2>
          <p className="text-graphite-400 mb-8 max-w-2xl">
            Full lifecycle coverage — from contract administration through arbitration support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service.title} className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                    <service.icon className="w-4 h-4 text-infrastructure-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-xs text-graphite-400">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FIDIC Expertise */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">FIDIC Expertise</h2>
          <p className="text-graphite-400 mb-8 max-w-2xl">
            Verified clause-level intelligence across FIDIC Yellow Book 1999 and FIDIC 2017.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {fidicClauses.map((clause) => (
              <div
                key={clause.clause}
                className="p-5 rounded-xl bg-graphite-800 border border-graphite-700 text-center"
              >
                <div className="text-2xl font-bold text-infrastructure-400 font-mono mb-2">
                  Sub-Clause {clause.clause}
                </div>
                <div className="text-sm font-semibold text-white mb-1">{clause.title}</div>
                <div className="text-xs text-graphite-500">{clause.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Representative Experience */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8">Representative Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div className="text-xs text-graphite-500">Scope</div>
                    <div className="font-medium text-white">{exp.scope}</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-graphite-700 mb-4">
                  <div className="text-xs text-graphite-500 mb-2">Governance</div>
                  <div className="text-sm text-graphite-300">{exp.governance}</div>
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

      {/* Business Outcomes */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Business Outcomes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {outcomes.map((m) => (
              <CapabilityMetricCard key={m.label} icon={CheckCircle} {...m} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Download Centre */}
      <Section id="download-centre">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">Download Centre</h2>
          <p className="text-graphite-400 mb-8">
            Download the Contracts & Claims Advisory materials in your preferred format.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
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
            Choose the consultation type that best fits your contract administration needs.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {consultationOptions.map((opt) => (
                <div key={opt.name} className="p-5 rounded-xl bg-graphite-800 border border-graphite-700 text-center">
                  <h3 className="text-sm font-semibold text-white mb-2">{opt.name}</h3>
                  <div className="text-xs text-infrastructure-400 font-mono mb-3">{opt.duration}</div>
                  <p className="text-xs text-graphite-400 mb-4">{opt.description}</p>
                  <CalendlyCTA variant="button" buttonText={opt.cta} className="w-full" />
                </div>
              ))}
            </div>
            <QuickEnquiryForm source="contracts-claims" />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to Strengthen Your Contract Position?"
        description="Schedule a consultation to discuss how practitioner-built contract administration can reduce contractual exposure on your EPC project."
        primaryCTA={{ text: "Schedule Consultation", href: "#consultation" }}
        secondaryCTA={{ text: "Download Brochure", href: "#download-centre" }}
      />
    </>
  );
}
