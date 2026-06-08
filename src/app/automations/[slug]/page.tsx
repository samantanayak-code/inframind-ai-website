import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { CalendlyCTA } from "@/components/composites/CalendlyCTA";
import { Badge } from "@/components/primitives/Badge";
import { MetricCard } from "@/components/composites/MetricCard";
import { FeatureItem } from "@/components/composites/FeatureItem";
import { CTASection } from "@/components/composites/CTASection";
import { getAutomation, automations } from "@/lib/automations";
import { ArrowRight, CheckCircle } from "lucide-react";

export async function generateStaticParams() {
  return automations.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const automation = getAutomation(slug);
  if (!automation) return {};
  return {
    title: `${automation.name} — ${automation.category}`,
    description: automation.description,
    openGraph: { title: `${automation.name} — ${automation.category}`, description: automation.description },
  };
}

export default async function AutomationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const automation = getAutomation(slug);
  if (!automation) notFound();

  const Icon = automation.icon;

  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-infrastructure-400" />
              </div>
              <Badge variant={automation.status === "deployed" ? "production" : "demonstrable"}>
                {automation.status === "deployed" ? "Deployed" : automation.status === "pilot" ? "Pilot" : "Building"}
              </Badge>
              <span className="text-xs text-graphite-500">{automation.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{automation.name}</h1>
            <p className="text-lg text-graphite-300 mb-8">{automation.description}</p>
            <div className="flex gap-3">
              <CalendlyCTA variant="button" buttonText="Schedule Consultation" className="flex items-center gap-2" />
              <Button href="/automations" variant="secondary" size="lg">
                View All Automations
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Key Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {automation.metrics.map((m) => (
              <MetricCard key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Long Description */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
            <p className="text-graphite-300 leading-relaxed">{automation.longDescription}</p>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {automation.capabilities.map((cap) => (
              <FeatureItem key={cap} title={cap} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Business Outcomes */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Business Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {automation.outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-3 p-4 rounded-lg bg-graphite-800 border border-graphite-700">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-graphite-300">{outcome}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Integrations */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Integrations</h2>
          <div className="max-w-2xl">
            <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
              <div className="space-y-3">
                {automation.integrations.map((intg) => (
                  <div key={intg.name} className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      intg.direction === "feeds"
                        ? "bg-infrastructure-500/10 text-infrastructure-400"
                        : intg.direction === "fed-by"
                        ? "bg-success/10 text-success-light"
                        : "bg-cyan-500/10 text-cyan-400"
                    }`}>
                      {intg.direction === "feeds" ? "→ Feeds" : intg.direction === "fed-by" ? "← Fed By" : "↔ Parallel"}
                    </span>
                    <span className="text-sm text-graphite-300">{intg.name}</span>
                  </div>
                ))}
              </div>
            </div>
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
                {automation.techStack.map((t) => (
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

      {/* Engagement Model */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Engagement Model</h2>
          <div className="max-w-3xl p-6 rounded-xl bg-graphite-800 border border-graphite-700">
            <p className="text-graphite-300 mb-4">{automation.engagementModel}</p>
            <div className="flex items-center gap-4">
              <div>
                <div className="text-xs text-graphite-500">Timeline</div>
                <div className="text-sm font-medium text-white">{automation.timeline}</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Practitioner-Built Case Study Section */}
      <Section>
        <Container>
          <div className="max-w-3xl p-8 rounded-xl bg-graphite-800 border border-graphite-700">
            <h2 className="text-2xl font-bold text-white mb-4">Built From Operational Pain</h2>
            <div className="space-y-4 text-graphite-300">
              <p>
                On the MAHSR T-3 Track Package — an INR 3,142 Crore FIDIC Yellow Book contract managed by L&T Limited for NHSRCL — correspondence accumulates in Oracle Primavera Unifier at a rate that makes manual downloading unsustainable.
              </p>
              <p>
                Every Sub-Clause 20.1 notice, every variation instruction, every Engineer&apos;s determination arrives as a PDF attachment buried inside a Unifier business process record. Downloading 50 items manually takes 3-4 hours per cycle. Missing even one document can weaken a claim position.
              </p>
              <p>
                <strong className="text-white">Unifier Sync</strong> was built to eliminate this pain. One command. Batch download. Automatic organization by COR number, date, and reference. 15 minutes instead of 3 hours. Every document indexed and ready for claims preparation.
              </p>
              <p className="text-sm text-graphite-500 italic">
                This is what practitioner-built automation looks like. Not theoretical. Not demo-ware. Forged on a live megaproject.
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <Button href="/about" size="sm">
                About the Founder
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/case-studies" variant="secondary" size="sm">
                View Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        headline={`Ready to Automate ${automation.name}?`}
        description="Schedule a consultation to discuss how this automation can reduce contractual exposure on your EPC project."
        primaryCTA={{ text: "Request a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "View All Automations", href: "/automations" }}
      />
    </>
  );
}
