import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { MetricCard } from "@/components/composites/MetricCard";
import { FeatureItem } from "@/components/composites/FeatureItem";
import { ScreenshotGallery } from "@/components/composites/ScreenshotGallery";
import { CTASection } from "@/components/composites/CTASection";
import { getProduct, products } from "@/lib/products";
import { ArrowRight } from "lucide-react";

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
    <>
      {/* Hero */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant={product.status === "production" ? "production" : "demonstrable"}>
                  {product.status === "production" ? "L3 — Production" : "Demonstrable Prototype"}
                </Badge>
                <span className="text-xs text-graphite-500">{product.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{product.name}</h1>
              <p className="text-lg text-graphite-300 mb-8">{product.description}</p>
              <div className="flex gap-3">
                <Button href="/contact" size="lg">
                  Request Consultation <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href={`/case-studies/${product.slug}`} variant="secondary" size="lg">
                  View Case Study
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-graphite-700">
              <Image
                src={product.screenshot}
                alt={product.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.metrics.map((m) => (
              <MetricCard key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Modules */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.modules.map((mod) => {
              const [title, desc] = mod.split(" — ");
              return <FeatureItem key={title} title={title} description={desc} />;
            })}
          </div>
        </Container>
      </Section>

      {/* AI Capabilities */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {product.aiCapabilities.map((cap) => (
              <FeatureItem key={cap} title={cap} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Technical Stack */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Technical Stack</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm max-w-2xl">
              <thead>
                <tr className="border-b border-graphite-700">
                  <th className="text-left py-3 px-4 text-graphite-400 font-medium">Layer</th>
                  <th className="text-left py-3 px-4 text-graphite-400 font-medium">Technology</th>
                </tr>
              </thead>
              <tbody>
                {product.techStack.map((t) => (
                  <tr key={t.layer} className="border-b border-graphite-700/50">
                    <td className="py-3 px-4 text-white font-medium">{t.layer}</td>
                    <td className="py-3 px-4 text-graphite-400">{t.technology}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Screenshots */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
          <ScreenshotGallery screenshots={product.screenshots} />
        </Container>
      </Section>

      <CTASection
        headline={`Interested in ${product.name}?`}
        description="Schedule a consultation to discuss how this product can reduce contractual exposure on your EPC project."
        secondaryCTA={{ text: "View Case Study", href: `/case-studies/${product.slug}` }}
      />
    </>
  );
}
