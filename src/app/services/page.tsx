import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/composites/CTASection";
import { services } from "@/lib/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — EPC Intelligence Consulting",
  description:
    "AI strategy, digital twin architecture, contract intelligence, planning & scheduling, delay analysis, and expert advisory for EPC megaprojects.",
};

const packages = [
  { name: "EPC Intelligence Starter", services: "AI Strategy + Digital Twin Architecture", target: "Mid-size EPC contractors" },
  { name: "Megaproject Intelligence Suite", services: "All consulting services", target: "Large EPC contractors, JVs" },
  { name: "Dispute Resolution Support", services: "Expert Advisory + Contract Intelligence + Delay Analysis", target: "Legal counsel, expert witnesses" },
  { name: "Programme Controls Package", services: "Planning & Scheduling + Delay Analysis & EOT", target: "Project controls teams, contract managers" },
  { name: "Custom Engagement", services: "Mix of services per client needs", target: "Any" },
];

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Services</h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            EPC intelligence consulting — from strategy through deployment.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
                <article className="h-full p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-3">{service.description}</p>
                  <div className="text-xs text-gray-500 mb-4">For: {service.targetClient}</div>
                  <div className="flex items-center text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packages.map((pkg) => (
              <div key={pkg.name} className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-400 mb-1">{pkg.services}</p>
                <p className="text-xs text-gray-500">For: {pkg.target}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        headline="Ready to discuss your project?"
        description="Schedule a consultation to discuss how EPC intelligence consulting can reduce contractual exposure on your project."
      />
    </>
  );
}
