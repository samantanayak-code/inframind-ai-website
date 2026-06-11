"use client";

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
import { HeroVisual } from "@/components/branding/HeroVisual";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/feedback/ScrollReveal";
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
  Train,
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

import { AIPipeline } from "@/components/branding/AIPipeline";
import { InfrastructureNetwork } from "@/components/branding/InfrastructureNetwork";

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
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[var(--font-h2)] font-bold text-white mb-4">Executive Highlights</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
              Practitioner-led intelligence calibrated for the specific pressures of EPC megaproject administration.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceHighlights.map((item) => (
              <StaggerItem
                key={item.title}
                className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-all duration-300 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-glow)] group"
              >
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 border border-[var(--color-primary)]/20 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{item.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section>
        <Container>
          <ScrollReveal className="mb-16">
            <h2 className="text-[var(--font-h2)] font-bold text-white text-center">Measurable Impact</h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <StaggerItem key={m.label}>
                <MetricCard {...m} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Representative Experience — Trust Signal */}
      <Section className="bg-[var(--color-surface-subtle)]/50">
        <Container>
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[var(--font-h2)] font-bold text-white mb-4">Representative Experience</h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
              Verified project experience across EPC megaprojects under FIDIC contract regimes.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {representativeExperience.map((exp) => (
              <StaggerItem
                key={exp.project}
                className="p-10 rounded-[var(--radius-lg)] bg-[var(--color-elevated)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] hover:border-[var(--color-primary)]/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="production">Verified</Badge>
                  <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest">{exp.contract}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-8">{exp.project}</h3>
                <div className="grid grid-cols-2 gap-8 text-sm mb-8">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Contract Value</div>
                    <div className="font-bold text-white text-base">{exp.value}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Role</div>
                    <div className="font-bold text-white text-base">{exp.role}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Scope</div>
                    <div className="font-medium text-[var(--color-text-secondary)] leading-relaxed">{exp.scope}</div>
                  </div>
                </div>
                <div className="pt-8 border-t border-[var(--color-border)] mb-6">
                  <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-4 font-bold">
                    Governance
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-medium">{exp.governance}</div>
                </div>
                <div className="pt-8 border-t border-[var(--color-border)]">
                  <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-4 font-bold">
                    Key Achievements
                  </div>
                  <div className="space-y-3">
                    {exp.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Project Impact */}
      <Section>
        <Container>
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[var(--font-h2)] font-bold text-white mb-4">Project Impact</h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
              Verified outcomes from live EPC project deployments.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7">
              <InfrastructureNetwork />
            </div>
            <div className="lg:col-span-5">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectImpacts.map((impact) => (
                  <StaggerItem
                    key={impact.title}
                    className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 border border-[var(--color-primary)]/20 group-hover:scale-110 transition-transform duration-300">
                      <impact.icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">{impact.title}</h3>
                    <div className="pt-4 border-t border-[var(--color-border)]">
                      <div className="text-2xl font-extrabold text-[var(--color-primary)] font-mono">{impact.metric}</div>
                      <div className="text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold">{impact.metricLabel}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </Container>
      </Section>

      {/* AI Pipeline Visualization */}
      <Section className="bg-[#07090C] border-y border-[var(--color-border)]">
        <Container>
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-[var(--font-h2)] font-bold text-white mb-4">Document Intelligence Pipeline</h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
              Transforming unstructured project records into defensible contractual evidence.
            </p>
          </ScrollReveal>
          <AIPipeline />
        </Container>
      </Section>

      {/* Featured Products */}
      <Section className="bg-[var(--color-surface-subtle)]/30">
        <Container>
          <ScrollReveal className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-[var(--font-h2)] font-bold text-white mb-2">Products</h2>
              <p className="text-[var(--color-text-secondary)]">Strategic solutions for infrastructure intelligence.</p>
            </div>
            <Button href="/products" variant="ghost" size="sm">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <StaggerItem key={product.slug} className="h-full">
                <ProductCard
                  {...product}
                  linkTo={
                    product.status === "production" ? `/products/${product.slug}` : `/case-studies/contract-forensics`
                  }
                />
              </StaggerItem>
            ))}
            {/* Contract Forensics Card */}
            <StaggerItem className="h-full">
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
            </StaggerItem>
            {/* OCR Intelligence Card */}
            <StaggerItem className="h-full">
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
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </Section>

      {/* Operational Automation Suite */}
      <Section>
        <Container>
          <ScrollReveal className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--color-primary)]/20 flex items-center justify-center border border-[var(--color-primary)]/30">
                  <Zap className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
                  Automation Suite
                </span>
              </div>
              <h2 className="text-[var(--font-h2)] font-bold text-white">Practitioner-Built Automation</h2>
            </div>
            <Button href="/automations" variant="ghost" size="sm">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automations.map((automation) => (
              <StaggerItem key={automation.slug} className="h-full">
                <AutomationCard
                  slug={automation.slug}
                  name={automation.name}
                  category={automation.category}
                  status={automation.status}
                  icon={automation.icon}
                  tagline={automation.tagline}
                  metrics={automation.metrics}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.2} className="mt-20 p-12 rounded-[var(--radius-xl)] bg-[var(--color-elevated)] border border-[var(--color-border)] relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)] opacity-5 blur-[100px] -mr-32 -mt-32" />
            <p className="text-2xl text-[var(--color-text-secondary)] relative z-10 font-medium leading-relaxed max-w-4xl mx-auto">
              <span className="text-white font-bold">Automation born from operational pain.</span> Every capability in the
              Suite was built to solve a problem the founder personally experienced on a live INR 3,142 Crore
              megaproject.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Why InfraMind EPC */}
      <Section className="bg-[var(--color-surface-subtle)]/50">
        <Container>
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[var(--font-h2)] font-bold text-white mb-4">Why InfraMind EPC</h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
              Our unique position at the intersection of megaproject administration and artificial intelligence.
            </p>
          </ScrollReveal>
          <StaggerContainer className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {whyReasons.map((reason) => (
              <StaggerItem key={reason.title} className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-[var(--radius-lg)] bg-[var(--color-primary)]/10 flex items-center justify-center border border-[var(--color-primary)]/20 group-hover:scale-110 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <reason.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors">{reason.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{reason.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Case Study Highlights */}
      <Section>
        <Container>
          <ScrollReveal className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-[var(--font-h2)] font-bold text-white mb-2">Case Studies</h2>
              <p className="text-[var(--color-text-secondary)]">Empirical proof of operational transformation.</p>
            </div>
            <Button href="/case-studies" variant="ghost" size="sm">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((cs) => (
              <StaggerItem key={cs.slug} className="h-full">
                <CaseStudyCard {...cs} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Consultation CTA with Calendly */}
      <Section id="schedule-consultation" className="bg-[#0A0D10]">
        <Container>
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[var(--font-h2)] font-bold text-white mb-6">Schedule a Consultation</h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
              Speak directly with a practitioner to explore how operational intelligence can be deployed on your project.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="max-w-4xl mx-auto">
            <CalendlyCTA
              variant="inline"
              title="Book a Consultation"
              description="Select a 30-minute discovery call to discuss your project challenges."
              buttonText="Schedule Discovery Call"
            />
          </ScrollReveal>
        </Container>
      </Section>

      {/* CTA */}
      <ScrollReveal>
        <CTASection
          headline="Ready to Reduce Your Contractual Exposure?"
          description="Schedule a consultation to discuss how practitioner-built operational intelligence can reduce contractual exposure on your EPC project."
          primaryCTA={{ text: "Schedule Consultation", href: "#schedule-consultation" }}
          secondaryCTA={{ text: "Download Capability Statement", href: "/capability-statement" }}
        />
      </ScrollReveal>
    </>
  );
}
