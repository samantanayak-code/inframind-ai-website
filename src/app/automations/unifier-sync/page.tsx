import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Badge } from "@/components/primitives/Badge";
import { MetricCard } from "@/components/composites/MetricCard";
import { FeatureItem } from "@/components/composites/FeatureItem";
import { CapabilityMetricCard } from "@/components/composites/CapabilityMetricCard";
import { DownloadCard } from "@/components/composites/DownloadCard";
import { LeadCaptureForm } from "@/components/composites/LeadCaptureForm";
import { QuickEnquiryForm } from "@/components/composites/QuickEnquiryForm";
import { CalendlyCTA } from "@/components/composites/CalendlyCTA";
import { CTASection } from "@/components/composites/CTASection";
import {
  ArrowRight,
  ArrowLeft,
  Download,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Shield,
  Database,
  Search,
  FolderOpen,
  Zap,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unifier Sync — Automated Correspondence Extraction",
  description:
    "Automated Oracle Primavera Unifier correspondence extraction and organization. 85–90% time reduction. 50 records per batch. Forensic-grade archive for claims preparation.",
  openGraph: {
    title: "Unifier Sync — InfraMind AI",
    description:
      "Automated correspondence extraction for Oracle Primavera Unifier. Deployed on MAHSR T-3 — INR 3,142 Crore FIDIC Yellow Book.",
  },
};

const manualSteps = [
  "Login to Oracle Unifier",
  "Navigate to Package Correspondence",
  "Open each record individually (50+ records)",
  "Download PDF attachment from each record",
  "Rename file with COR number",
  "Move to correct folder",
  "Verify completeness",
];

const automatedSteps = [
  "Execute CLI command",
  "Manual login (one-time)",
  "Batch process 50 records automatically",
  "Download all PDFs with polling",
  "Auto-extract COR number from properties",
  "Auto-organize into date/COR/reference folders",
  "Log completion with audit trail",
];

const businessOutcomes = [
  { icon: Clock, value: "85–90%", label: "Time Reduction", description: "3–4 hours → 15 minutes per batch" },
  { icon: FolderOpen, value: "100%", label: "Consistent Organization", description: "Automated date/COR/reference indexing" },
  { icon: CheckCircle, value: "100%", label: "Completeness", description: "Systematic batch coverage, no missed documents" },
  { icon: Shield, value: "Forensic-Grade", label: "Arbitration Ready", description: "Structured archive for dispute resolution" },
];

const useCases = [
  {
    icon: FileText,
    title: "Claims Preparation",
    description: "Download correspondence supporting Sub-Clause 20.1 notices, EOT claims, and variation documentation.",
  },
  {
    icon: Scale,
    title: "Arbitration Support",
    description: "Produce organized correspondence archive for ICC arbitration, fact witness preparation, and expert determination.",
  },
  {
    icon: Database,
    title: "Project Close-Out",
    description: "Compile complete correspondence archive for project close-out documentation and handover.",
  },
  {
    icon: Search,
    title: "Correspondence Audits",
    description: "Generate complete download records for internal audits, compliance reviews, and management oversight.",
  },
  {
    icon: Zap,
    title: "Knowledge Retention",
    description: "Preserve institutional knowledge through structured, searchable correspondence archives.",
  },
];

const workflowSteps = [
  { icon: Download, name: "Unifier", description: "Oracle Primavera Unifier correspondence" },
  { icon: Zap, name: "Extraction", description: "Automated batch download" },
  { icon: FileText, name: "Classification", description: "COR number and date extraction" },
  { icon: FolderOpen, name: "Repository", description: "Date/COR/reference indexed folders" },
  { icon: CheckCircle, name: "Review", description: "Audit trail and completeness log" },
];

const faqs = [
  {
    question: "What is Unifier Sync?",
    answer: "Unifier Sync is a practitioner-built automation that batch-downloads PDF attachments from Oracle Primavera Unifier's Package Correspondence business process, organizes them into date-and-reference-named folders, and produces a defensible chronological archive ready for claims preparation and dispute resolution.",
  },
  {
    question: "How does it work?",
    answer: "Unifier Sync uses Selenium WebDriver to interact with Oracle Unifier's JET UI. It navigates to the Package Correspondence business process, opens each record, extracts the COR number from the properties panel, downloads the PDF attachment, and organizes files into a structured folder hierarchy.",
  },
  {
    question: "What is the time savings?",
    answer: "Manual downloading of 50 correspondence items takes 3–4 hours. Unifier Sync reduces this to approximately 15 minutes — an 85–90% time reduction. This frees up contracts managers to focus on higher-value analysis and claims preparation.",
  },
  {
    question: "Is it secure?",
    answer: "Unifier Sync requires manual login — no passwords are stored. Each execution uses a unique Chrome profile for session isolation. The automation runs locally on the user's machine with no external data transmission.",
  },
  {
    question: "What is the output format?",
    answer: "Files are organized into folders named YYYYMMDD-COR<number>-<reference>. Each folder contains the main correspondence PDF and any attachments. The output is ready for claims preparation, arbitration document production, and project close-out.",
  },
  {
    question: "What FIDIC clauses does it support?",
    answer: "Unifier Sync supports Sub-Clause 20.1 (Contractor's Claims) by providing structured correspondence evidence. It also supports Sub-Clause 8.4 (Extension of Time) by organizing delay-related correspondence for claims preparation.",
  },
  {
    question: "How is it deployed?",
    answer: "Unifier Sync is deployed on the MAHSR T-3 Track Package — INR 3,142 Crore FIDIC Yellow Book contract. It runs as a local Python script on the contracts manager's workstation with access to Oracle Primavera Unifier.",
  },
];

const downloads = [
  {
    title: "Unifier Sync One-Pager",
    format: "PDF" as const,
    version: "v1.0",
    lastUpdated: "June 2026",
    fileSize: "0.3 MB",
    description: "Executive summary — problem, solution, outcomes, and contact information.",
    fileUrl: "/downloads/unifier-sync-one-pager.pdf",
  },
  {
    title: "Unifier Sync Case Study",
    format: "PDF" as const,
    version: "v1.0",
    lastUpdated: "June 2026",
    fileSize: "0.5 MB",
    description: "MAHSR T-3 deployment case study — challenge, approach, outcome, and lessons learned.",
    fileUrl: "/downloads/unifier-sync-case-study.pdf",
  },
];

export default function UnifierSyncPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="absolute inset-0 bg-gradient-to-b from-infrastructure-900/30 to-transparent" />
        <Container className="relative">
          <Link
            href="/automations"
            className="inline-flex items-center text-sm text-graphite-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Automations
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
              <Download className="w-5 h-5 text-infrastructure-400" />
            </div>
            <Badge variant="production">Deployed</Badge>
            <span className="text-xs text-graphite-500">Foundation Layer</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Unifier Sync
          </h1>
          <p className="text-lg md:text-xl text-graphite-300 mb-4 max-w-2xl">
            Automated correspondence extraction and organization for EPC projects.
          </p>
          <p className="text-sm text-graphite-400 mb-8 max-w-2xl">
            From Manual Correspondence Retrieval to Structured Contract Intelligence. Deployed on
            MAHSR T-3 — INR 3,142 Crore FIDIC Yellow Book.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="#demonstration" size="lg">
              <Calendar className="w-4 h-4" />
              Request Demonstration
            </Button>
            <Button href="#download-centre" variant="secondary" size="lg">
              Download One-Pager
            </Button>
          </div>
        </Container>
      </Section>

      {/* Key Metrics */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Key Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard value="85–90%" label="Time Reduction" description="3–4 hours → 15 minutes per batch" />
            <MetricCard value="50" label="Records per Batch" description="Automated batch processing" />
            <MetricCard value="100%" label="Consistent Organization" description="Automated date/COR/reference indexing" />
            <MetricCard value="Forensic-Grade" label="Arbitration Ready" description="Structured archive for dispute resolution" />
          </div>
        </Container>
      </Section>

      {/* The Problem */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">The Problem</h2>
          <p className="text-graphite-400 mb-8 max-w-2xl">
            Every contracts manager on an Oracle Unifier project knows this pain: extracting contractual correspondence
            requires manual clicking, downloading, filing, and organizing — consuming hours per batch cycle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-error-light" />
                </div>
                <h3 className="text-sm font-semibold text-white">Manual Correspondence Download</h3>
              </div>
              <p className="text-xs text-graphite-400 mb-4">
                50+ records × multiple clicks each = 3–4 hours per batch. Repetitive, error-prone, and unsustainable.
              </p>
              <div className="space-y-2">
                {manualSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-graphite-400">
                    <div className="w-5 h-5 rounded-full bg-graphite-700 flex items-center justify-center text-[10px] text-graphite-500 flex-shrink-0">
                      {i + 1}
                    </div>
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-error-light" />
                </div>
                <h3 className="text-sm font-semibold text-white">Document Controller Effort</h3>
              </div>
              <div className="space-y-3 text-xs text-graphite-400">
                <p>
                  <strong className="text-white">Arbitration Preparation:</strong> Compiling organized correspondence for ICC arbitration
                  requires days of manual sorting and filing.
                </p>
                <p>
                  <strong className="text-white">Close-Out Documentation:</strong> Project close-out requires complete correspondence
                  archives — manual compilation is slow and error-prone.
                </p>
                <p>
                  <strong className="text-white">Claims Evidence:</strong> Missing even one document can weaken a claim position.
                  Manual verification is unreliable.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Existing Process vs Automated Process */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Existing Process vs Automated Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-graphite-800 border border-error/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-error-light" />
                </div>
                <h3 className="text-sm font-semibold text-white">Manual Process</h3>
                <div className="ml-auto px-2 py-1 rounded bg-error/10 text-error-light text-xs font-mono">
                  3–4 hours
                </div>
              </div>
              <div className="space-y-2">
                {manualSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-graphite-400">
                    <CheckCircle className="w-3 h-3 text-error-light flex-shrink-0" />
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-graphite-800 border border-success/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-success-light" />
                </div>
                <h3 className="text-sm font-semibold text-white">Unifier Sync</h3>
                <div className="ml-auto px-2 py-1 rounded bg-success/10 text-success-light text-xs font-mono">
                  15 minutes
                </div>
              </div>
              <div className="space-y-2">
                {automatedSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-graphite-400">
                    <CheckCircle className="w-3 h-3 text-success-light flex-shrink-0" />
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Business Outcomes */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Business Outcomes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessOutcomes.map((m) => (
              <CapabilityMetricCard key={m.label} icon={m.icon} value={m.value} label={m.label} description={m.description} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Typical Use Cases */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Typical Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
                    <uc.icon className="w-4 h-4 text-infrastructure-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{uc.title}</h3>
                </div>
                <p className="text-xs text-graphite-400">{uc.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Workflow */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Workflow</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 max-w-4xl mx-auto">
            {workflowSteps.map((step, index) => (
              <div key={step.name} className="flex items-center">
                <div className="p-4 rounded-xl bg-graphite-800 border border-graphite-700 text-center w-36">
                  <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center mx-auto mb-2">
                    <step.icon className="w-5 h-5 text-infrastructure-400" />
                  </div>
                  <div className="text-sm font-semibold text-white">{step.name}</div>
                  <div className="text-xs text-graphite-500 mt-1">{step.description}</div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-infrastructure-500 mx-2 hidden md:block flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Study */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8">Case Study: MAHSR T-3</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
                <h3 className="text-sm font-semibold text-white mb-3">Challenge</h3>
                <div className="space-y-2 text-xs text-graphite-400">
                  <p>
                    The contracts team on the MAHSR T-3 Track Package faced a daily operational bottleneck: extracting
                    contractual correspondence from Oracle Primavera Unifier required manual clicking, downloading, filing,
                    and organizing.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <div className="text-xs text-graphite-500">Records per batch</div>
                      <div className="text-sm font-medium text-white">50</div>
                    </div>
                    <div>
                      <div className="text-xs text-graphite-500">Time per batch</div>
                      <div className="text-sm font-medium text-white">3–4 hours</div>
                    </div>
                    <div>
                      <div className="text-xs text-graphite-500">Frequency</div>
                      <div className="text-sm font-medium text-white">Daily</div>
                    </div>
                    <div>
                      <div className="text-xs text-graphite-500">Annual hours</div>
                      <div className="text-sm font-medium text-white">200+ hours</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
                <h3 className="text-sm font-semibold text-white mb-3">Approach</h3>
                <div className="space-y-2 text-xs text-graphite-400">
                  <p>
                    Built a Python/Selenium automation that batch-processes Oracle Unifier correspondence, extracts COR
                    numbers from the properties panel, and organizes files into date-and-reference-indexed folders.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <div className="text-xs text-graphite-500">Technology</div>
                      <div className="text-sm font-medium text-white">Python + Selenium</div>
                    </div>
                    <div>
                      <div className="text-xs text-graphite-500">Development</div>
                      <div className="text-sm font-medium text-white">3 days</div>
                    </div>
                    <div>
                      <div className="text-xs text-graphite-500">Versions</div>
                      <div className="text-sm font-medium text-white">4 (V1 → V2.1)</div>
                    </div>
                    <div>
                      <div className="text-xs text-graphite-500">Platform</div>
                      <div className="text-sm font-medium text-white">Oracle Unifier JET UI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
                <h3 className="text-sm font-semibold text-white mb-3">Outcome</h3>
                <div className="space-y-2 text-xs text-graphite-400">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-graphite-500">Time reduction</div>
                      <div className="text-sm font-medium text-success-light">85–90%</div>
                    </div>
                    <div>
                      <div className="text-xs text-graphite-500">Organization</div>
                      <div className="text-sm font-medium text-success-light">100% consistent</div>
                    </div>
                    <div>
                      <div className="text-xs text-graphite-500">Completeness</div>
                      <div className="text-sm font-medium text-success-light">100%</div>
                    </div>
                    <div>
                      <div className="text-xs text-graphite-500">Claims readiness</div>
                      <div className="text-sm font-medium text-success-light">95% faster</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
                <h3 className="text-sm font-semibold text-white mb-3">Lessons Learned</h3>
                <div className="space-y-2 text-xs text-graphite-400">
                  <p>
                    <strong className="text-white">Practitioner-built beats developer-created:</strong> Understanding the exact
                    Unifier workflow and pain points was essential for building effective automation.
                  </p>
                  <p>
                    <strong className="text-white">Batch processing is transformative:</strong> Converting 50 individual
                    operations into a single batch command delivered 85–90% time reduction.
                  </p>
                  <p>
                    <strong className="text-white">Structured output enables downstream intelligence:</strong> Organized
                    correspondence feeds into OCR Pipeline, Contract Forensics, and Claims Compiler.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                <h3 className="text-sm font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-xs text-graphite-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Download Centre */}
      <Section id="download-centre">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-2">Download Centre</h2>
          <p className="text-graphite-400 mb-8">
            Download the Unifier Sync materials in your preferred format.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {downloads.map((dl) => (
              <DownloadCard
                key={dl.title + dl.format}
                {...dl}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Demonstration CTA */}
      <Section id="demonstration">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Request a Demonstration</h2>
              <p className="text-graphite-400 mb-8">
                See Unifier Sync in action. Schedule a live demonstration or automation assessment.
              </p>
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                  <h3 className="text-sm font-semibold text-white mb-2">Live Demonstration</h3>
                  <p className="text-xs text-graphite-400 mb-3">
                    30-minute live walkthrough of Unifier Sync capabilities, workflow, and output format.
                  </p>
                  <CalendlyCTA variant="button" buttonText="Request Demo" className="w-full" />
                </div>
                <div className="p-5 rounded-xl bg-graphite-800 border border-graphite-700">
                  <h3 className="text-sm font-semibold text-white mb-2">Automation Assessment</h3>
                  <p className="text-xs text-graphite-400 mb-3">
                    45-minute assessment of your Unifier workflows and automation opportunities.
                  </p>
                  <CalendlyCTA variant="button" buttonText="Schedule Assessment" className="w-full" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Lead Capture</h2>
              <p className="text-graphite-400 mb-8">
                Complete the form to receive the Unifier Sync one-pager and schedule a consultation.
              </p>
              <LeadCaptureForm />
            </div>
            <QuickEnquiryForm source="unifier-sync" />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to Automate Correspondence Extraction?"
        description="Schedule a demonstration to see how Unifier Sync can reduce correspondence retrieval time by 85–90% on your EPC project."
        primaryCTA={{ text: "Request Demonstration", href: "#demonstration" }}
        secondaryCTA={{ text: "View All Automations", href: "/automations" }}
      />
    </>
  );
}

function Scale(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}
