import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { CalendlyCTA } from "@/components/composites/CalendlyCTA";
import { MetricCard } from "@/components/composites/MetricCard";
import { ScreenshotGallery } from "@/components/composites/ScreenshotGallery";
import { CTASection } from "@/components/composites/CTASection";
import { getCaseStudy, caseStudies } from "@/lib/case-studies";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `Case Study: ${cs.title}`,
    description: cs.problem,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <Link href="/case-studies" className="inline-flex items-center text-sm text-graphite-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Case Studies
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium text-infrastructure-400">{cs.product}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{cs.title}</h1>
          <p className="text-lg text-graphite-300 mb-2">{cs.subtitle}</p>
          <p className="text-sm font-mono text-success-light">{cs.heroMetric}</p>
        </Container>
      </Section>

      {/* Metrics */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cs.metrics.map((m) => (
              <MetricCard key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Problem */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-4">Problem</h2>
          <p className="text-graphite-300 max-w-3xl leading-relaxed">{cs.problem}</p>
        </Container>
      </Section>

      {/* Solution */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-4">Solution</h2>
          <p className="text-graphite-300 max-w-3xl leading-relaxed">{cs.solution}</p>
        </Container>
      </Section>

      {/* Impact */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-4">Impact</h2>
          <p className="text-graphite-300 max-w-3xl leading-relaxed">{cs.impact}</p>
        </Container>
      </Section>

      {/* Screenshots */}
      {cs.screenshots.length > 0 && (
        <Section>
          <Container>
            <h2 className="text-2xl font-bold text-white mb-6">Evidence</h2>
            <ScreenshotGallery screenshots={cs.screenshots} />
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row gap-3">
            <CalendlyCTA variant="button" buttonText="Schedule Consultation" className="flex items-center gap-2" />
            <Button href={`/products/${cs.slug === "mahsr-digital-twin" || cs.slug === "ncr-tracker" ? cs.slug : "/products"}`} variant="secondary" size="lg">
              View Product
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection
        headline="Ready to See These Results on Your Project?"
        description="Schedule a consultation to discuss how operational intelligence can reduce contractual exposure on your EPC project."
      />
    </>
  );
}
