import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { ResourceCard } from "@/components/composites/ResourceCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/feedback/ScrollReveal";
import { Badge } from "@/components/primitives/Badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resource Hub — InfraMind AI",
  description: "Access technical specifications, capability statements, and industry brochures for infrastructure AI.",
};

const resources = [
  {
    title: "InfraMind Capability Statement",
    description: "Comprehensive overview of our operational intelligence platform, credentials, and technical architecture.",
    href: "/downloads/InfraMind-EPC-Capability-Statement.pdf",
    type: "Capability Statement" as const,
    fileSize: "322 KB",
  },
  {
    title: "FIDIC Notice Monitor Spec",
    description: "Detailed technical specification for our automated FIDIC Sub-Clause 20.1 notice compliance engine.",
    href: "/downloads/fidic-notice-monitor-one-pager.pdf",
    type: "Technical Specification" as const,
    fileSize: "295 KB",
  },
  {
    title: "Advisory Suite Overview",
    description: "Strategic guidance for EPC megaproject owners and contractors on AI implementation.",
    href: "/downloads/advisory-suite-overview.pdf",
    type: "Brochure" as const,
    fileSize: "386 KB",
  },
  {
    title: "Unifier Sync Case Study",
    description: "Empirical results from integrating Oracle Unifier data with InfraMind's analytical layer.",
    href: "/downloads/InfraMind-EPC-High-Speed-Rail-Operational-Intelligence-Case-Study.pdf",
    type: "Case Study" as const,
    fileSize: "358 KB",
  },
  {
    title: "Claim Narrative Drafter Spec",
    description: "How our LLM engine generates defensible claim narratives from contemporaneous project records.",
    href: "/downloads/claim-narrative-drafter-spec.pdf",
    type: "Technical Specification" as const,
    fileSize: "271 KB",
  },
  {
    title: "Delay Analysis & EOT Brochure",
    description: "A practitioner's guide to forensic delay analysis using operational intelligence.",
    href: "/downloads/delay-analysis-eot-brochure.pdf",
    type: "Brochure" as const,
    fileSize: "457 KB",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-[#0A0D10] min-h-screen">
      {/* Hero */}
      <Section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 blur-[120px] rounded-full -mr-64 -mt-64" />
        
        <Container className="relative z-10">
          <ScrollReveal>
            <Badge variant="production" className="mb-8 px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20">
              Technical Library
            </Badge>
            <h1 className="text-[var(--font-h1)] md:text-[72px] font-extrabold text-white mb-8 leading-[1.1]">
              Resource Hub
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-0 max-w-3xl leading-relaxed font-medium">
              Access the technical evidence, operational specifications, and practitioner insights that power InfraMind AI.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Resource Grid */}
      <Section className="bg-[var(--color-surface-subtle)] border-y border-[var(--color-border)]">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <StaggerItem key={resource.title}>
                <ResourceCard {...resource} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Trust Signal Section */}
      <Section>
        <Container>
          <ScrollReveal className="max-w-4xl mx-auto p-12 rounded-[var(--radius-xl)] bg-[var(--color-elevated)] border border-[var(--color-border)] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-primary)] opacity-5 blur-[100px] -ml-32 -mt-32" />
            <h2 className="text-2xl font-bold text-white mb-6">Confidential Technical Discovery</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-10 leading-relaxed">
              For project-specific data handling protocols or custom module specifications, please schedule a direct strategy session with our practitioner team.
            </p>
            <div className="flex justify-center">
              <Button href="/#schedule-consultation" size="lg" className="px-10 h-14">
                Schedule Strategy Session
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </div>
  );
}
