import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { MetricCard } from "@/components/composites/MetricCard";
import { FeatureGrid } from "@/components/composites/FeatureGrid";
import { ScreenshotGallery } from "@/components/composites/ScreenshotGallery";
import { CTASection } from "@/components/composites/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/feedback/ScrollReveal";
import { getProduct, products } from "@/lib/products";
import { Layers, ShieldCheck, Zap } from "lucide-react";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.category}`,
    description: product.description,
    openGraph: { title: `${product.name} — ${product.category}`, description: product.description },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="bg-[#0A0D10]">
      {/* Hero Showcase */}
      <Section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary)]/5 blur-[120px] rounded-full -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 blur-[120px] rounded-full -ml-64 -mb-64" />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <Badge variant={product.status === "production" ? "production" : "demonstrable"} className="px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold">
                    {product.status === "production" ? "L3 — Production Grade" : "Demonstrable Prototype"}
                  </Badge>
                  <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-[0.2em]">{product.category}</span>
                </div>
                <h1 className="text-[var(--font-h1)] md:text-[64px] font-extrabold text-white mb-8 leading-[1.1]">
                  {product.name}
                </h1>
                <p className="text-[var(--font-body)] md:text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl leading-relaxed font-medium">
                  {product.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button href="#schedule-consultation" size="lg" className="px-10 h-14 text-lg">
                    Schedule Discovery
                  </Button>
                  <Button href={`/case-studies/${product.slug}`} variant="secondary" size="lg" className="px-10 h-14 text-lg">
                    View Case Study
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-6 relative">
              <ScrollReveal direction="left" delay={0.2} className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-[var(--radius-xl)] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative aspect-video rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-elevated)] border border-white/10 shadow-2xl">
                  <Image
                    src={product.screenshot}
                    alt={product.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0D10]/40 to-transparent" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl animate-bounce-slow">
                    <div className="text-[10px] uppercase tracking-widest text-[var(--color-primary)] font-bold mb-1">Impact</div>
                    <div className="text-xl font-bold text-white">{product.heroMetric}</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Metrics Section */}
      <Section className="bg-[var(--color-surface-subtle)] border-y border-[var(--color-border)]">
        <Container>
          <ScrollReveal className="mb-12">
            <h2 className="text-[var(--font-h2)] font-bold text-white mb-2">Performance Metrics</h2>
            <div className="h-1 w-20 bg-[var(--color-primary)] rounded-full" />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.metrics.map((m) => (
              <StaggerItem key={m.label}>
                <MetricCard value={m.value} label={m.label} className="bg-[var(--color-elevated)]" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Product Deep-Dive */}
      <Section>
        <Container>
          <FeatureGrid title="Operational Modules" items={product.modules} iconType="settings" />
          <FeatureGrid title="AI & Intelligence" items={product.aiCapabilities} iconType="cpu" />
        </Container>
      </Section>

      {/* Technical Infrastructure */}
      <Section className="bg-[var(--color-surface-subtle)]/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <ScrollReveal className="mb-12">
                <h2 className="text-[var(--font-h2)] font-bold text-white mb-4 text-balance">
                  Built for Enterprise Infrastructure
                </h2>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                  Our stack is engineered for the specific security, scalability, and audit-trail requirements of megaproject construction.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <ShieldCheck className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Defense-Grade Auditing</h4>
                      <p className="text-sm text-[var(--color-text-secondary)]">Every data point is timestamp-governed for dispute resolution scrutiny.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <Layers className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Multi-Stakeholder RBAC</h4>
                      <p className="text-sm text-[var(--color-text-secondary)]">Granular access control for Employer, Engineer, and Contractor teams.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div>
              <ScrollReveal direction="left">
                <div className="rounded-[var(--radius-xl)] overflow-hidden border border-[var(--color-border)] bg-[var(--color-elevated)] shadow-2xl">
                  <div className="p-6 border-b border-[var(--color-border)] bg-white/5">
                    <h3 className="text-lg font-bold text-white uppercase tracking-widest flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[var(--color-primary)]" />
                      Technical Specification
                    </h3>
                  </div>
                  <div className="divide-y divide-[var(--color-border)]">
                    {product.techStack.map((t) => (
                      <div key={t.layer} className="p-6 flex justify-between items-center group hover:bg-white/[0.02] transition-colors">
                        <span className="text-[var(--color-text-muted)] font-bold uppercase tracking-widest text-xs">{t.layer}</span>
                        <span className="text-white font-medium text-lg">{t.technology}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Visual Evidence Showcase */}
      <Section>
        <Container>
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[var(--font-h2)] font-bold text-white mb-4">Interface Intelligence</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
              Explore the system architecture and operational interfaces.
            </p>
          </ScrollReveal>
          <ScreenshotGallery screenshots={product.screenshots} />
        </Container>
      </Section>

      <CTASection
        headline={`Interested in ${product.name}?`}
        description="Schedule a consultation to discuss how this product can reduce contractual exposure on your EPC project."
        secondaryCTA={{ text: "View Case Study", href: `/case-studies/${product.slug}` }}
      />
    </div>
  );
}
