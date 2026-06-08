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
import { products } from "@/lib/products";
import { caseStudies } from "@/lib/case-studies";
import { automations } from "@/lib/automations";
import { ArrowRight, Shield, Zap, FileText, AlertTriangle, Layers, Download, CheckCircle, Building2, Scale, Clock } from "lucide-react";

const metrics = [
  { value: "16 → Under 4", label: "Person-Hours", description: "Weekly MIS compilation effort reduced by 75%" },
  { value: "Weeks → Hours", label: "Document Review", description: "Contract Forensics compresses review time" },
  { value: "40%+", label: "Faster NCR Closure", description: "Automated escalation reduces cycle time" },
  { value: "Zero", label: "Preventable Failures", description: "Automated deadline monitoring" },
];

const whyReasons = [
  { icon: Shield, title: "Practitioner-Built, Not Developer-Created", description: "Every system designed by a practicing Contracts Manager with 20+ years EPC experience" },
  { icon: Zap, title: "Deployed on Live Megaprojects", description: "Every product operational on active EPC projects, not prototype stage" },
  { icon: FileText, title: "Contractually Aware Intelligence", description: "Every system understands FIDIC obligations, notice periods, and claim entitlements" },
  { icon: AlertTriangle, title: "Defensible Contemporaneous Records", description: "Every system produces timestamp-governed, dispute-resolution-ready records" },
  { icon: Layers, title: "Integrated Product Ecosystem", description: "Products feed into each other creating compound intelligence" },
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
    description: "Programme controls and schedule governance for INR 3,142 Crore megaproject — 115.877 km track construction under FIDIC Yellow Book.",
    metric: "115.877 km",
    metricLabel: "Track Package",
  },
  {
    icon: FileText,
    title: "Contract Administration Support",
    description: "Complete FIDIC contract administration from award to compliance — notice management, correspondence, and obligation tracking.",
    metric: "100%",
    metricLabel: "Notice Compliance",
  },
  {
    icon: Scale,
    title: "Claims Documentation Support",
    description: "Forensic delay analysis and EOT claim preparation with contemporaneous records suitable for ICC arbitration.",
    metric: "15+",
    metricLabel: "EOT Claims",
  },
  {
    icon: Zap,
    title: "Operational Automation Initiatives",
    description: "Practitioner-built automation reducing manual effort — from correspondence extraction to notice compliance monitoring.",
    metric: "85–90%",
    metricLabel: "Time Reduction",
  },
];

export default function HomePage() {
  const featuredCaseStudies = caseStudies.filter((cs) => ["mahsr-digital-twin", "ncr-tracker", "contract-forensics"].includes(cs.slug));

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="absolute inset-0 bg-gradient-to-b from-infrastructure-900/30 to-transparent" />
        <Container className="relative">
          <div className="max-w-3xl">
            <Badge variant="production" className="mb-4">Deployed on MAHSR T-3</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Operational Intelligence for Infrastructure
            </h1>
            <p className="text-lg md:text-xl text-graphite-300 mb-8 max-w-2xl">
              Practitioner-built AI systems for EPC megaprojects — deployed on India&apos;s major infrastructure contracts, engineered by 20+ years of lived FIDIC contract administration experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/capability-statement" size="lg">
                <Download className="w-4 h-4" />
                Download Capability Statement
              </Button>
              <CalendlyCTA variant="button" buttonText="Schedule Consultation" />
            </div>
            <p className="mt-6 text-sm text-graphite-500">
              Deployed on MAHSR T-3 Track Package — INR 3,142 Crore FIDIC Yellow Book contract. JICA (Funder) → NHSRCL (Employer) → JICC (Engineer) → L&T Limited (Contractor)
            </p>
          </div>
        </Container>
      </Section>

      {/* Positioning */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-graphite-300">
              For EPC project leaders who manage megaprojects under FIDIC contract regimes — where information lag transforms manageable risks into costly disputes, and where defensible contemporaneous records determine claim outcomes.
            </p>
          </div>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Measurable Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Representative Experience — Trust Signal */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Representative Experience</h2>
          <p className="text-graphite-400 mb-8 text-center max-w-2xl mx-auto">
            Verified project experience across EPC megaprojects under FIDIC contract regimes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {representativeExperience.map((exp) => (
              <div key={exp.project} className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="production">Verified</Badge>
                  <span className="text-xs text-graphite-500">{exp.contract}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{exp.project}</h3>
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div>
                    <div className="text-xs text-graphite-500">Contract Value</div>
                    <div className="font-medium text-white">{exp.value}</div>
                  </div>
                  <div>
                    <div className="text-xs text-graphite-500">Role</div>
                    <div className="font-medium text-white">{exp.role}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-xs text-graphite-500">Scope</div>
                    <div className="font-medium text-white">{exp.scope}</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-graphite-700 mb-3">
                  <div className="text-xs text-graphite-500 mb-2">Governance</div>
                  <div className="text-sm text-graphite-300">{exp.governance}</div>
                </div>
                <div className="pt-4 border-t border-graphite-700">
                  <div className="text-xs text-graphite-500 mb-2">Key Achievements</div>
                  <div className="space-y-1.5">
                    {exp.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-graphite-400">
                        <CheckCircle className="w-3 h-3 text-success-light flex-shrink-0" />
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
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Project Impact</h2>
          <p className="text-graphite-400 mb-8 text-center max-w-2xl mx-auto">
            Verified outcomes from live EPC project deployments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectImpacts.map((impact) => (
              <div key={impact.title} className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center mb-3">
                  <impact.icon className="w-5 h-5 text-infrastructure-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{impact.title}</h3>
                <p className="text-xs text-graphite-400 mb-3">{impact.description}</p>
                <div className="pt-3 border-t border-graphite-700">
                  <div className="text-lg font-bold text-infrastructure-400 font-mono">{impact.metric}</div>
                  <div className="text-xs text-graphite-500">{impact.metricLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Products */}
      <Section>
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Products</h2>
            <Button href="/products" variant="ghost" size="sm">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                {...product}
                linkTo={product.status === "production" ? `/products/${product.slug}` : `/case-studies/contract-forensics`}
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

      {/* Operational Automation Suite */}
      <Section>
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-infrastructure-400" />
                </div>
                <span className="text-sm font-medium text-infrastructure-400">Operational Automation Suite</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Practitioner-Built Automation</h2>
            </div>
            <Button href="/automations" variant="ghost" size="sm">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="mt-8 p-6 rounded-xl bg-graphite-800 border border-graphite-700">
            <p className="text-sm text-graphite-400 text-center">
              <span className="text-white font-medium">Automation born from operational pain.</span>{" "}
              Every capability in the Suite was built to solve a problem the founder personally experienced on a live INR 3,142 Crore megaproject.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why InfraMind AI */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why InfraMind AI</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {whyReasons.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <reason.icon className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{reason.title}</h3>
                  <p className="text-sm text-graphite-400">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Study Highlights */}
      <Section>
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Case Studies</h2>
            <Button href="/case-studies" variant="ghost" size="sm">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} {...cs} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Consultation CTA with Calendly */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Schedule a Consultation</h2>
          <p className="text-graphite-400 mb-8 text-center max-w-2xl mx-auto">
            Choose a time that works for you. Our consultations are free and confidential.
          </p>
          <div className="max-w-2xl mx-auto">
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
