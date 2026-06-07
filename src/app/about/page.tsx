import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { MetricCard } from "@/components/composites/MetricCard";
import { CTASection } from "@/components/composites/CTASection";
import { ArrowRight, Award, Briefcase, GraduationCap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Samanta Nayak, Infrastructure AI Architect",
  description:
    "20+ years EPC infrastructure experience. ICC Arbitration Fact Witness. Infrastructure AI Architect behind InfraMind AI — deployed on MAHSR T-3 (INR 3,142 Crore FIDIC Yellow Book).",
  openGraph: {
    title: "About — Samanta Nayak, Infrastructure AI Architect",
    description:
      "20+ years EPC infrastructure experience. ICC Arbitration Fact Witness. Infrastructure AI Architect behind InfraMind AI.",
  },
};

const credentials = [
  { icon: Briefcase, title: "20+ Years EPC Infrastructure Experience", description: "Manager — Contracts & Claims, Larsen & Toubro Limited" },
  { icon: Award, title: "ICC Arbitration Fact Witness", description: "Dispute resolution and expert testimony" },
  { icon: GraduationCap, title: "AI Generalist Certification", description: "Outskill — Applied AI for business" },
  { icon: Globe, title: "AIG Community Champion 2025", description: "AI community leadership" },
];

const timeline = [
  { year: "2006", event: "Started career in EPC infrastructure" },
  { year: "2010", event: "Joined SEPCO1 (Shandong Electric Power Construction Corporation, currently known as PowerChina)" },
  { year: "2015", event: "Joined Larsen & Toubro Limited — Contracts & Claims" },
  { year: "2021", event: "ICC Arbitration Fact Witness" },
  { year: "2022", event: "MAHSR T-3 Track Package — INR 3,142 Crore FIDIC Yellow Book" },
  { year: "2025", event: "Founded InfraMind AI — Operational Intelligence" },
  { year: "2025", event: "Operational deployment of AI product portfolio on live EPC megaprojects" },
  { year: "2026", event: "Advancing the EPC AI Product Portfolio" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <Badge variant="production" className="mb-4">Contracts & Claims Management · Infrastructure AI Architect</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Practitioner Behind the Platform
          </h1>
          <p className="text-lg text-graphite-300 max-w-2xl">
            20+ years of EPC infrastructure experience, encoded into AI-augmented operational intelligence systems.
          </p>
        </Container>
      </Section>

      {/* Professional Identity */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl">
            <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
              <h2 className="text-xl font-bold text-white mb-2">Samanta Nayak</h2>
              <p className="text-graphite-400 mb-4">Manager — Contracts & Claims, Larsen & Toubro Limited</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-graphite-500">Experience</div>
                  <div className="text-sm font-medium text-white">20+ Years EPC Infrastructure</div>
                </div>
                <div>
                  <div className="text-xs text-graphite-500">Roles</div>
                  <div className="text-sm font-medium text-white">Contracts & Claims Management</div>
                  <div className="text-sm font-medium text-white">Infrastructure AI Architect</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MAHSR Experience */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">MAHSR Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <MetricCard value="INR 3,142 Crore" label="Contract Value" />
            <MetricCard value="FIDIC Yellow Book" label="Contract Form" />
            <MetricCard value="115.877 km" label="Scope — Vadodara to Sabarmati" />
          </div>
          <div className="max-w-3xl space-y-4 text-graphite-300 text-sm">
            <p>
              The Mumbai-Ahmedabad High-Speed Rail (MAHSR) T-3 Track Package represents one of India&apos;s most significant infrastructure megaprojects. Under JICA/JICC oversight, this FIDIC Yellow Book contract encompasses 115.877 km of track construction from Vadodara to Sabarmati.
            </p>
            <p>
              <strong className="text-white">Governance Structure:</strong> JICA (Funding Agency) → NHSRCL (Employer) → JICC (Engineer / PMC) → L&T Limited (Contractor)
            </p>
            <p>
              As Manager — Contracts & Claims for Larsen & Toubro Limited, Samanta Nayak oversees FIDIC contract administration, notice compliance, claim preparation, and dispute resolution for this landmark project. The operational intelligence systems deployed here — the Digital Twin, NCR Tracker, Contract Forensics — were born from the real challenges faced on this project.
            </p>
          </div>
        </Container>
      </Section>

      {/* The AI Journey */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">The AI Journey</h2>
          <div className="max-w-3xl space-y-4 text-graphite-300 text-sm">
            <p>
              From EPC practitioner to Infrastructure AI Architect — the journey began with a simple observation: the information lag between site execution and management visibility was the root cause of preventable disputes.
            </p>
            <p>
              <strong className="text-white">The Insight:</strong> Every EPC project generates vast amounts of data. But without operational intelligence, that data remains scattered across spreadsheets, emails, and paper records — useless for real-time decision-making.
            </p>
            <p>
              <strong className="text-white">The Response:</strong> Build AI systems that understand FIDIC obligations, compress information lag, and produce defensible contemporaneous records. Not developer tools — practitioner-built systems.
            </p>
            <p>
              <strong className="text-white">The Rarest Combination:</strong> 20+ years of hands-on EPC contract administration, combined with AI engineering capability. This is the foundation of InfraMind AI.
            </p>
          </div>
        </Container>
      </Section>

      {/* Credentials */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credentials.map((cred) => (
              <div key={cred.title} className="flex gap-4 p-4 rounded-xl bg-graphite-800 border border-graphite-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <cred.icon className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{cred.title}</h3>
                  <p className="text-xs text-graphite-400 mt-0.5">{cred.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Career Timeline</h2>
          <div className="max-w-2xl space-y-4">
            {timeline.map((item, index) => (
              <div key={`${item.year}-${index}`} className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-sm font-mono text-infrastructure-400">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-graphite-700" />
                <div>
                  <p className="text-sm text-graphite-300">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Vision */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Vision</h2>
          <div className="max-w-3xl space-y-4 text-graphite-300 text-sm">
            <p className="text-lg text-graphite-200 italic">
              &ldquo;To make operational intelligence the default state of EPC megaproject administration — eliminating the information lag that transforms manageable risks into costly disputes.&rdquo;
            </p>
            <p>
              <strong className="text-white">Mission:</strong> InfraMind AI converts practitioner-earned EPC operational judgment into deployed AI-augmented systems that reduce information lag, create defensible contemporaneous records, and eliminate preventable contractual exposure on infrastructure megaprojects.
            </p>
          </div>
          <div className="mt-8 flex gap-3">
            <Button href="/contact" size="lg">
              Work With Me <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              View Case Studies
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection
        headline="Ready to Work With a Practitioner?"
        description="20+ years of EPC infrastructure experience, encoded into AI-augmented operational intelligence systems."
      />
    </>
  );
}
