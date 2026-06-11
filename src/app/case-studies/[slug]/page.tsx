import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { MetricCard } from "@/components/composites/MetricCard";
import { ScreenshotGallery } from "@/components/composites/ScreenshotGallery";
import { CTASection } from "@/components/composites/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/feedback/ScrollReveal";
import { getCaseStudy, caseStudies } from "@/lib/case-studies";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
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
    <div className="bg-[#0A0D10]">
      {/* Narrative Hero */}
      <Section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {cs.screenshot && (
            <Image
              src={cs.screenshot}
              alt=""
              fill
              className="object-cover opacity-10 blur-sm"
              priority
            />
          )}
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0D10] via-[#0A0D10]/80 to-[#0A0D10]" />
        </div>

        <Container className="relative z-10">
          <ScrollReveal>
            <Link href="/case-studies" className="inline-flex items-center text-sm font-bold text-[var(--color-primary)] hover:text-white mb-12 transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
              Back to Portfolio
            </Link>
            <div className="flex items-center gap-3 mb-8">
              <Badge variant="production" className="px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20">
                Case Study
              </Badge>
              <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-[0.2em]">{cs.product}</span>
            </div>
            <h1 className="text-[var(--font-h1)] md:text-[72px] font-extrabold text-white mb-8 leading-[1.1] text-balance">
              {cs.title}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-12 max-w-3xl leading-relaxed font-medium">
              {cs.subtitle}
            </p>
            
            <div className="p-8 rounded-[var(--radius-xl)] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 inline-block">
              <div className="text-[10px] uppercase tracking-widest text-[var(--color-primary)] font-bold mb-2">Primary Outcome</div>
              <div className="text-3xl md:text-4xl font-extrabold text-white font-mono">{cs.heroMetric}</div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Impact Grid */}
      <Section className="bg-[var(--color-surface-subtle)] border-y border-[var(--color-border)]">
        <Container>
          <ScrollReveal className="mb-16">
            <h2 className="text-[var(--font-h2)] font-bold text-white mb-4">Measurable Results</h2>
            <div className="h-1 w-20 bg-[var(--color-primary)] rounded-full" />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cs.metrics.map((m) => (
              <StaggerItem key={m.label}>
                <MetricCard value={m.value} label={m.label} className="bg-[var(--color-elevated)]" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* The Challenge & Solution */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-[var(--color-error)]" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest">The Challenge</h2>
              </div>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 font-medium italic border-l-4 border-[var(--color-error)]/30 pl-8">
                &ldquo;{cs.problem}&rdquo;
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-success)]" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest">The Solution</h2>
              </div>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 font-medium">
                {cs.solution}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Long-form Impact Narrative */}
      <Section className="bg-[var(--color-surface-subtle)]/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-16">
              <TrendingUp className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-6" />
              <h2 className="text-[var(--font-h2)] font-bold text-white mb-8">Operational Transformation</h2>
              <div className="h-1 w-20 bg-[var(--color-primary)] mx-auto rounded-full" />
            </ScrollReveal>
            <ScrollReveal>
              <div className="p-12 rounded-[var(--radius-xl)] bg-[var(--color-elevated)] border border-[var(--color-border)] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)] opacity-5 blur-[100px] -mr-32 -mt-32" />
                <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                  {cs.impact}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Evidence Showcase */}
      {cs.screenshots.length > 0 && (
        <Section>
          <Container>
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-[var(--font-h2)] font-bold text-white mb-4">Visual Evidence</h2>
              <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
                Direct evidence from live project environments.
              </p>
            </ScrollReveal>
            <ScreenshotGallery screenshots={cs.screenshots} />
          </Container>
        </Section>
      )}

      {/* Final CTA */}
      <Section className="bg-[#0A0D10]">
        <Container>
          <ScrollReveal className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button href="#schedule-consultation" size="lg" className="px-12 h-16 text-xl">
                Schedule Assessment
              </Button>
              <Button 
                href={`/products/${cs.slug === "mahsr-digital-twin" || cs.slug === "ncr-tracker" ? cs.slug : ""}`} 
                variant="secondary" 
                size="lg" 
                className="px-12 h-16 text-xl"
              >
                Explore {cs.product}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      <CTASection
        headline="Ready to See These Results on Your Project?"
        description="Schedule a consultation to discuss how practitioner-built operational intelligence can reduce contractual exposure on your EPC project."
      />
    </div>
  );
}
