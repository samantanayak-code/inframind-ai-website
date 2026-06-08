import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { AutomationCard } from "@/components/composites/AutomationCard";
import { CalendlyCTA } from "@/components/composites/CalendlyCTA";
import { CTASection } from "@/components/composites/CTASection";
import { automations } from "@/lib/automations";
import { ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Operational Automation Suite — Practitioner-Built EPC Automation",
  description:
    "Practitioner-built automation capabilities for EPC megaprojects. Unifier correspondence extraction, FIDIC deadline monitoring, NCR escalation, and claims evidence compilation. Deployed on MAHSR T-3.",
  openGraph: {
    title: "Operational Automation Suite — Practitioner-Built EPC Automation",
    description:
      "Practitioner-built automation for EPC megaprojects. Deployed on MAHSR T-3.",
  },
};

const suiteCapabilities = [
  { name: "Data Ingestion", description: "Extract correspondence and documents from enterprise platforms" },
  { name: "Document Processing", description: "Digitize, classify, and structure contractual documents" },
  { name: "Deadline Automation", description: "Monitor FIDIC notice periods and contractual deadlines" },
  { name: "Workflow Automation", description: "Automate escalation, notification, and approval workflows" },
  { name: "Claims Support", description: "Compile evidence packages for EOT, prolongation, and disputes" },
  { name: "Client Engagement", description: "AI-powered consultation and project intelligence interfaces" },
];

export default function AutomationsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-infrastructure-400" />
              </div>
              <span className="text-sm font-medium text-infrastructure-400">Operational Automation Suite</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Practitioner-Built Automation for EPC Megaprojects
            </h1>
            <p className="text-lg text-graphite-300 max-w-2xl mb-8">
              Every automation in this suite was born from operational pain on live megaprojects — not designed in a conference room. Each capability solves a discrete EPC problem and composes into end-to-end intelligence pipelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CalendlyCTA variant="button" buttonText="Schedule Consultation" className="flex items-center gap-2" />
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Suite Philosophy */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-graphite-300">
              &ldquo;Automation born from operational pain, not theoretical frameworks.&rdquo; Every capability was forged on the MAHSR T-3 Track Package — an INR 3,142 Crore FIDIC Yellow Book contract where missing a correspondence deadline or losing a document has direct financial consequences.
            </p>
          </div>
        </Container>
      </Section>

      {/* Automation Grid */}
      <Section>
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Automation Capabilities</h2>
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
            {/* Placeholder cards for upcoming automations */}
            {[
              { name: "NCR Escalation Engine", category: "Workflow Automation", status: "building" as const },
              { name: "Claims Evidence Compiler", category: "Claims Support", status: "building" as const },
              { name: "OCR Intelligence Pipeline", category: "Document Processing", status: "building" as const },
              { name: "MIS Auto-Compiler", category: "Report Generation", status: "building" as const },
              { name: "AI Consultation Bot", category: "Client Engagement", status: "building" as const },
            ].map((item) => (
              <div key={item.name} className="p-6 rounded-xl bg-graphite-800/50 border border-graphite-700/50 border-dashed">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-graphite-500">{item.category}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-graphite-700 text-graphite-400">Coming Soon</span>
                </div>
                <h3 className="text-lg font-semibold text-graphite-400 mb-2">{item.name}</h3>
                <p className="text-sm text-graphite-500">Part of the Operational Automation Suite roadmap.</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Suite Categories */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8">Suite Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suiteCapabilities.map((cap) => (
              <div key={cap.name} className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                <h3 className="text-sm font-semibold text-white mb-2">{cap.name}</h3>
                <p className="text-sm text-graphite-400">{cap.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Connects */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Intelligence Pipeline</h2>
          <div className="max-w-4xl p-6 rounded-xl bg-graphite-800 border border-graphite-700">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
              <div className="p-4 rounded-lg bg-graphite-700">
                <div className="text-xs text-graphite-500 mb-1">Step 1</div>
                <div className="text-sm font-medium text-white">Extract</div>
                <div className="text-xs text-infrastructure-400 mt-1">Unifier Sync</div>
              </div>
              <div className="flex items-center justify-center text-graphite-500 hidden md:flex">→</div>
              <div className="p-4 rounded-lg bg-graphite-700">
                <div className="text-xs text-graphite-500 mb-1">Step 2</div>
                <div className="text-sm font-medium text-white">Digitize</div>
                <div className="text-xs text-infrastructure-400 mt-1">OCR Pipeline</div>
              </div>
              <div className="flex items-center justify-center text-graphite-500 hidden md:flex">→</div>
              <div className="p-4 rounded-lg bg-graphite-700">
                <div className="text-xs text-graphite-500 mb-1">Step 3</div>
                <div className="text-sm font-medium text-white">Analyze</div>
                <div className="text-xs text-infrastructure-400 mt-1">Contract Forensics</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
              <div className="p-4 rounded-lg bg-graphite-700">
                <div className="text-xs text-graphite-500 mb-1">Step 4</div>
                <div className="text-sm font-medium text-white">Generate</div>
                <div className="text-xs text-infrastructure-400 mt-1">Letter Drafter</div>
              </div>
              <div className="flex items-center justify-center text-graphite-500 hidden md:flex">→</div>
              <div className="p-4 rounded-lg bg-graphite-700">
                <div className="text-xs text-graphite-500 mb-1">Step 5</div>
                <div className="text-sm font-medium text-white">Decide</div>
                <div className="text-xs text-infrastructure-400 mt-1">Digital Twin</div>
              </div>
              <div className="flex items-center justify-center text-graphite-500 hidden md:flex">→</div>
              <div className="p-4 rounded-lg bg-graphite-700">
                <div className="text-xs text-graphite-500 mb-1">Step 6</div>
                <div className="text-sm font-medium text-white">Defend</div>
                <div className="text-xs text-infrastructure-400 mt-1">Claims Compiler</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Practitioner-Built */}
      <Section>
        <Container>
          <div className="max-w-3xl p-8 rounded-xl bg-graphite-800 border border-graphite-700">
            <h2 className="text-2xl font-bold text-white mb-4">Practitioner-Built, Not Developer-Created</h2>
            <p className="text-graphite-300 mb-4">
              Every automation in the Operational Automation Suite was built by a practicing Contracts Manager with 20+ years of EPC infrastructure experience. Not theoretical. Not demo-ware. Forged on India&apos;s largest high-speed rail megaproject.
            </p>
            <p className="text-graphite-300 mb-6">
              Unifier Sync was born from the daily reality of downloading 50+ correspondence items from Oracle Unifier on the MAHSR T-3 Track Package. FIDIC Notice Monitor exists because missing a Sub-Clause 20.1 deadline has direct financial consequences. NCR Escalation Engine was built because manual follow-up was failing.
            </p>
            <div className="flex gap-3">
              <Button href="/about" size="sm">
                About the Founder
                <ArrowRight className="w-4 h-4" />
              </Button>
              <CalendlyCTA variant="button" buttonText="Schedule Demo" />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        headline="Automate Your EPC Operations"
        description="Schedule a consultation to discuss how practitioner-built automation can reduce contractual exposure on your project."
        primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
        secondaryCTA={{ text: "View Products", href: "/products" }}
      />
    </>
  );
}
