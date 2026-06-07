import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CaseStudyCard } from "@/components/composites/CaseStudyCard";
import { CTASection } from "@/components/composites/CTASection";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Operational Intelligence Evidence",
  description:
    "Real-world evidence of operational intelligence deployed on EPC megaprojects. MAHSR Digital Twin, NCR Tracker, Contract Forensics, OCR Intelligence.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-lg text-graphite-300 max-w-2xl">
            Real-world evidence of operational intelligence deployed on EPC megaprojects.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.slug} {...cs} featured={i === 0} />
            ))}
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
