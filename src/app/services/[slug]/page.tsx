import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { FeatureItem } from "@/components/composites/FeatureItem";
import { CTASection } from "@/components/composites/CTASection";
import { getService, services } from "@/lib/services";
import { ArrowRight, ArrowLeft, Clock, Users } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} — EPC Intelligence Consulting`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <Link href="/services" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.name}</h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">{service.description}</p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {service.timeline}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" /> {service.targetClient}
            </div>
          </div>
        </Container>
      </Section>

      {/* Deliverables */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.deliverables.map((d) => (
              <FeatureItem key={d} title={d} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Process</h2>
          <div className="space-y-4 max-w-2xl">
            {service.process.map((step, i) => {
              const [title, desc] = step.split(" — ");
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-sm text-indigo-400 font-medium">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="text-sm text-gray-400">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Button href="/contact" size="lg">
            Request Consultation <ArrowRight className="w-4 h-4" />
          </Button>
        </Container>
      </Section>

      <CTASection
        headline="Ready to discuss your project?"
        description="Schedule a consultation to discuss how this service can reduce contractual exposure on your EPC project."
      />
    </>
  );
}
