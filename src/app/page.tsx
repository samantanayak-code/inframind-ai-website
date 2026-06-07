import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { MetricCard } from "@/components/composites/MetricCard";
import { ProductCard } from "@/components/composites/ProductCard";
import { CaseStudyCard } from "@/components/composites/CaseStudyCard";
import { CTASection } from "@/components/composites/CTASection";
import { products } from "@/lib/products";
import { caseStudies } from "@/lib/case-studies";
import { ArrowRight, Shield, Zap, FileText, AlertTriangle, Layers } from "lucide-react";

const metrics = [
  { value: "16 → Under 4", label: "Person-Hours", description: "Weekly MIS compilation effort reduced by 75%" },
  { value: "Weeks → Hours", label: "Document Review", description: "Contract Forensics compresses review time" },
  { value: "40%+", label: "Faster NCR Closure", description: "Automated escalation reduces cycle time" },
  { value: "Zero", label: "Preventable Failures", description: "Automated deadline monitoring" },
];

const whyReasons = [
  { icon: Shield, title: "Practitioner-Built, Not Developer-Created", description: "Every system designed by a practicing Contracts Manager with 19 years EPC experience" },
  { icon: Zap, title: "Deployed on Live Megaprojects", description: "Every product operational on active EPC projects, not prototype stage" },
  { icon: FileText, title: "Contractually Aware Intelligence", description: "Every system understands FIDIC obligations, notice periods, and claim entitlements" },
  { icon: AlertTriangle, title: "Defensible Contemporaneous Records", description: "Every system produces timestamp-governed, dispute-resolution-ready records" },
  { icon: Layers, title: "Integrated Product Ecosystem", description: "Products feed into each other creating compound intelligence" },
];

export default function HomePage() {
  const featuredCaseStudies = caseStudies.filter((cs) => ["mahsr-digital-twin", "ncr-tracker", "contract-forensics"].includes(cs.slug));

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent" />
        <Container className="relative">
          <div className="max-w-3xl">
            <Badge variant="production" className="mb-4">Deployed on MAHSR T-3</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Operational Intelligence for Infrastructure
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
              Practitioner-built AI systems for EPC megaprojects — deployed on India&apos;s major infrastructure contracts, engineered by 19 years of lived FIDIC contract administration experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/products" size="lg">
                Explore Our Products
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Request a Consultation
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Deployed on MAHSR T-3 Track Package — INR 3,142 Crore FIDIC Yellow Book contract. JICA (Funder) → NHSRCL (Employer) → JICC (Engineer) → L&T Limited (Contractor)
            </p>
          </div>
        </Container>
      </Section>

      {/* Positioning */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300">
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

      {/* Why InfraMind AI */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why InfraMind AI</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {whyReasons.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <reason.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{reason.title}</h3>
                  <p className="text-sm text-gray-400">{reason.description}</p>
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

      {/* CTA */}
      <CTASection
        headline="Ready to Reduce Your Contractual Exposure?"
        description="Schedule a consultation to discuss how practitioner-built operational intelligence can reduce contractual exposure on your EPC project."
      />
    </>
  );
}
