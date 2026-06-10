import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { MetricCard } from "@/components/composites/MetricCard";
import { ProductCard } from "@/components/composites/ProductCard";
import { CaseStudyCard } from "@/components/composites/CaseStudyCard";
import { AutomationCard } from "@/components/composites/AutomationCard";
import { CalendlyCTA } from "@/components/composites/CalendlyCTA";
import { CTASection } from "@/components/composites/CTASection";
import { InfrastructureIllustration } from "@/components/branding/InfrastructureIllustration";
import { HeroVisual } from "@/components/branding/HeroVisual";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { caseStudies } from "@/lib/case-studies";
import { automations } from "@/lib/automations";
import {
  ArrowRight,
  Shield,
  Zap,
  FileText,
  AlertTriangle,
  Layers,
  Download,
  CheckCircle,
  Building2,
  Scale,
  Clock,
  HardHat,
  Train,
  Globe,
  Gavel,
  Cpu,
} from "lucide-react";

const metrics = [
  { value: "16 → Under 4", label: "Person-Hours", description: "Weekly MIS compilation effort reduced by 75%" },
  { value: "Weeks → Hours", label: "Document Review", description: "Contract Forensics compresses review time" },
  { value: "40%+", label: "Faster NCR Closure", description: "Automated escalation reduces cycle time" },
  { value: "Zero", label: "Preventable Failures", description: "Automated deadline monitoring" },
];

const experienceHighlights = [
  {
    icon: Clock,
    title: "20+ Years Experience",
    description: "Lived EPC operational judgment from award to close-out.",
  },
  {
    icon: Train,
    title: "High-Speed Rail",
    description: "Deep domain expertise in linear infrastructure megaprojects.",
  },
  {
    icon: Building2,
    title: "EPC Megaprojects",
    description: "Navigating the complexities of INR 3,000+ Crore contracts.",
  },
  {
    icon: FileText,
    title: "FIDIC Yellow Book",
    description: "Specialized in design-build contract administration and compliance.",
  },
  {
    icon: Gavel,
    title: "Claims & Arbitration",
    description: "Defensible records engineered for dispute resolution scrutiny.",
  },
  {
    icon: Cpu,
    title: "Digital Twin Intelligence",
    description: "Converts operational data into actionable project outcomes.",
  },
];

const representativeExperience = [
  {
    project: "MAHSR T-3 Track Package",
    value: "INR 3,142 Crore",
    contract: "FIDIC Yellow Book 1999",
    role: "Manager — Contracts & Claims",
    scope: "115.877 km ballastless slab track — Vadodara to Sabarmati",
    governance: "JICA → NHSRCL → JICC → L&T Limited",
    highlights: [
      "100% Sub-Clause 20.1 notice compliance",
      "15+ EOT claims submitted and tracked",
      "Defensible audit trail for ICC arbitration",
    ],
  },
  {
    project: "Railway Electrification",
    value: "INR 500+ Crore",
    contract: "FIDIC Yellow Book",
    role: "Contracts & Claims Management",
    scope: "Railway electrification infrastructure",
    governance: "Indian Railways → Contractor",
    highlights: [
      "Notice compliance maintained throughout",
      "Variation claims managed and documented",
      "Contemporary records established",
    ],
  },
];

const projectImpacts = [
  {
    icon: Building2,
    title: "Large-Scale EPC Programme Support",
    description:
      "Programme controls and schedule governance for INR 3,142 Crore megaproject — 115.877 km track construction under FIDIC Yellow Book.",
    metric: "115.877 km",
    metricLabel: "Track Package",
  },
  {
    icon: FileText,
    title: "Contract Administration Support",
    description:
      "Complete FIDIC contract administration from award to compliance — notice management, correspondence, and obligation tracking.",
    metric: "100%",
    metricLabel: "Notice Compliance",
  },
  {
    icon: Scale,
    title: "Claims Documentation Support",
    description:
      "Forensic delay analysis and EOT claim preparation with contemporaneous records suitable for ICC arbitration.",
    metric: "15+",
    metricLabel: "EOT Claims",
  },
  {
    icon: Zap,
    title: "Operational Automation Initiatives",
    description:
      "Practitioner-built automation reducing manual effort — from correspondence extraction to notice compliance monitoring.",
    metric: "85–90%",
    metricLabel: "Time Reduction",
  },
];

const whyReasons = [
  {
    icon: Shield,
    title: "Practitioner-Built, Not Developer-Created",
    description: "Every system designed by a practicing Contracts Manager with 20+ years EPC experience",
  },
  {
    icon: Zap,
    title: "Deployed on Live Megaprojects",
    description: "Every product operational on active EPC projects, not prototype stage",
  },
  {
    icon: FileText,
    title: "Contractually Aware Intelligence",
    description: "Every system understands FIDIC obligations, notice periods, and claim entitlements",
  },
  {
    icon: AlertTriangle,
    title: "Defensible Contemporaneous Records",
    description: "Every system produces timestamp-governed, dispute-resolution-ready records",
  },
  {
    icon: Layers,
    title: "Integrated Product Ecosystem",
    description: "Products feed into each other creating compound intelligence",
  },
];

import { HeroVisual } from "@/components/branding/HeroVisual";
import { motion } from "framer-motion";

export default function HomePage() {
  const featuredCaseStudies = caseStudies.filter((cs) =>
    ["mahsr-digital-twin", "ncr-tracker", "contract-forensics"].includes(cs.slug)
  );

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-32 pb-32 md:pt-48 md:pb-48 bg-[#07090C]">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-primary)]/5 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-accent)]/5 blur-[120px] rounded-full translate-y-1/2" />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="production" className="mb-8 px-4 py-1.5 text-xs tracking-widest uppercase">
                  Deployed on MAHSR T-3 • INR 3,142 Cr
                </Badge>
                <h1 className="text-[var(--font-h1)] md:text-[var(--font-display)] font-extrabold text-white mb-8 leading-[1.1] text-balance">
                  Infrastructure AI <br />
                  <span className="text-[var(--color-primary)] bg-linear-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
                    Architect
                  </span>
                </h1>
                <p className="text-[var(--font-body)] md:text-[22px] text-[var(--color-text-secondary)] mb-12 max-w-2xl leading-relaxed font-medium">
                  Operational intelligence for EPC megaprojects. Engineered by 20+ years of lived FIDIC administration on India&apos;s most complex infrastructure contracts.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 mb-12">
                  <Button href="/capability-statement" size="lg" className="px-10 h-14 text-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Capability Statement
                  </Button>
                  <Button href="#schedule-consultation" variant="secondary" size="lg" className="px-10 h-14 text-lg">
                    Book Discovery Call
                  </Button>
                </div>
                
                {/* Credentials Row */}
                <div className="flex flex-wrap items-center gap-x-10 gap-y-6 opacity-60">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">FIDIC Specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[var(--color-primary)]" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">EPC Transformation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[var(--color-primary)]" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Operational AI</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <HeroVisual />
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience Highlights — Task 3 */}
      <Section className="bg-[var(--color-surface-subtle)] border-y border-[var(--color-border)]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-[var(--font-h2)] font-bold text-white mb-4">Executive Highlights</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Practitioner-led intelligence calibrated for the specific pressures of EPC megaproject administration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceHighlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
              >
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-[var(--font-body)] font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section>
        <Container>
          <h2 className="text-[var(--font-h3)] font-bold text-white mb-10 text-center">Measurable Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} className="hover:border-[var(--color-accent)] transition-colors" />
            ))}
          </div>
        </Container>
      </Section>

      {/* Representative Experience — Trust Signal (Preserved but visually grouped) */}
      <Section className="bg-[var(--color-surface-subtle)]/50">
        <Container>
          <h2 className="text-[var(--font-h3)] font-bold text-white mb-2 text-center">Representative Experience</h2>
          <p className="text-[var(--color-text-secondary)] mb-12 text-center max-w-2xl mx-auto">
            Verified project experience across EPC megaprojects under FIDIC contract regimes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {representativeExperience.map((exp) => (
              <div
                key={exp.project}
                className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="production">Verified</Badge>
                  <span className="text-xs text-[var(--color-text-secondary)]">{exp.contract}</span>
                </div>
                <h3 className="text-[var(--font-body)] font-bold text-white mb-6">{exp.project}</h3>
                <div className="grid grid-cols-2 gap-6 text-sm mb-6">
                  <div>
                    <div className="text-xs text-[var(--color-text-secondary)] mb-1">Contract Value</div>
                    <div className="font-medium text-white">{exp.value}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-secondary)] mb-1">Role</div>
                    <div className="font-medium text-white">{exp.role}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-xs text-[var(--color-text-secondary)] mb-1">Scope</div>
                    <div className="font-medium text-white">{exp.scope}</div>
                  </div>
                </div>
                <div className="pt-6 border-t border-[var(--color-border)] mb-4">
                  <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-semibold opacity-60">
                    Governance
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{exp.governance}</div>
                </div>
                <div className="pt-6 border-t border-[var(--color-border)]">
                  <div className="text-xs text-[var(--color-text-secondary)] mb-3 uppercase tracking-wider font-semibold opacity-60">
                    Key Achievements
                  </div>
                  <div className="space-y-2">
                    {exp.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Project Impact */}
      <Section>
        <Container>
          <h2 className="text-[var(--font-h3)] font-bold text-white mb-2 text-center">Project Impact</h2>
          <p className="text-[var(--color-text-secondary)] mb-10 text-center max-w-2xl mx-auto">
            Verified outcomes from live EPC project deployments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectImpacts.map((impact) => (
              <div
                key={impact.title}
                className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <impact.icon className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{impact.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] mb-4 leading-relaxed">{impact.description}</p>
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <div className="text-xl font-bold text-[var(--color-accent)] font-mono">{impact.metric}</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{impact.metricLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Products — Task 4 (Advisory Suite card logic preserved but visuals refined) */}
      <Section className="bg-[var(--color-surface-subtle)]/30">
        <Container>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[var(--font-h2)] font-bold text-white">Products</h2>
            <Button href="/products" variant="ghost" size="sm">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                {...product}
                linkTo={
                  product.status === "production" ? `/products/${product.slug}` : `/case-studies/contract-forensics`
                }
              />
            ))}
            {/* Contract Forensics Card */}
            <ProductCard
              slug="contract-forensics"
              name="Contract Forensics"
              category="Contract Intelligence"
              status="demonstrable"
              description="AI-Powered Contractual Intelligence — compresses document review from weeks to hours."
              screenshot="/screenshots/contract-forensics/02_Analyse Document.png"
              metrics={[{ label: "Review Time", value: "Weeks → Hours" }]}
              linkTo="/case-studies/contract-forensics"
            />
            {/* OCR Intelligence Card */}
            <ProductCard
              slug="ocr-intelligence"
              name="OCR Intelligence"
              category="Document Intelligence"
              status="demonstrable"
              description="Document Digitization for AI Analysis — 98% OCR accuracy on construction documents."
              screenshot="/screenshots/pdf-ocr-web-app/00_HOME.png"
              metrics={[{ label: "Accuracy", value: "98%+" }]}
              linkTo="/case-studies/ocr-intelligence"
            />
          </div>
        </Container>
      </Section>

      {/* Operational Automation Suite — Task 5 */}
      <Section>
        <Container>
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--color-primary)]/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">
                  Automation Suite
                </span>
              </div>
              <h2 className="text-[var(--font-h2)] font-bold text-white">Practitioner-Built Automation</h2>
            </div>
            <Button href="/automations" variant="ghost" size="sm">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automations.map((automation) => (
              <AutomationCard
                key={automation.slug}
                slug={automation.slug}
                name={automation.name}
                category={automation.category}
                status={automation.status}
                icon={automation.icon}
                tagline={automation.tagline}
                metrics={automation.metrics}
              />
            ))}
          </div>
          <div className="mt-12 p-8 rounded-[var(--radius-lg)] bg-[var(--color-surface-subtle)] border border-[var(--color-border)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)] opacity-5 blur-3xl -mr-16 -mt-16" />
            <p className="text-[var(--font-body)] text-[var(--color-text-secondary)] text-center relative z-10">
              <span className="text-white font-bold">Automation born from operational pain.</span> Every capability in the
              Suite was built to solve a problem the founder personally experienced on a live INR 3,142 Crore
              megaproject.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why InfraMind EPC */}
      <Section className="bg-[var(--color-surface-subtle)]/50">
        <Container>
          <h2 className="text-[var(--font-h2)] font-bold text-white mb-12 text-center">Why InfraMind EPC</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {whyReasons.map((reason) => (
              <div key={reason.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-accent)]/10 flex items-center justify-center border border-[var(--color-accent)]/20">
                  <reason.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-[var(--font-body)] font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Study Highlights */}
      <Section>
        <Container>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[var(--font-h2)] font-bold text-white">Case Studies</h2>
            <Button href="/case-studies" variant="ghost" size="sm">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} {...cs} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Consultation CTA with Calendly */}
      <Section id="schedule-consultation">
        <Container>
          <h2 className="text-[var(--font-h2)] font-bold text-white mb-4 text-center">Schedule a Consultation</h2>
          <p className="text-[var(--color-text-secondary)] mb-12 text-center max-w-2xl mx-auto">
            Choose a time that works for you. Our consultations are free and confidential.
          </p>
          <div className="max-w-3xl mx-auto">
            <CalendlyCTA
              variant="inline"
              title="Book a Consultation"
              description="Select a 30-minute discovery call to discuss your project challenges."
              buttonText="Schedule Discovery Call"
            />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to Reduce Your Contractual Exposure?"
        description="Schedule a consultation to discuss how practitioner-built operational intelligence can reduce contractual exposure on your EPC project."
        primaryCTA={{ text: "Schedule Consultation", href: "#schedule-consultation" }}
        secondaryCTA={{ text: "Download Capability Statement", href: "/capability-statement" }}
      />
    </>
  );
}
