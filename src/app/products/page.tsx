import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProductCard } from "@/components/composites/ProductCard";
import { CTASection } from "@/components/composites/CTASection";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products — Operational Intelligence for EPC Megaprojects",
  description:
    "Operational intelligence products for EPC megaprojects: MAHSR Digital Twin, NCR Tracker, Contract Forensics, OCR Intelligence. Deployed on MAHSR T-3 (INR 3,142 Crore FIDIC Yellow Book).",
  openGraph: {
    title: "Products — Operational Intelligence for EPC Megaprojects",
    description:
      "Operational intelligence products for EPC megaprojects. Deployed on MAHSR T-3.",
  },
};

const additionalProducts = [
  {
    slug: "contract-forensics",
    name: "Contract Forensics",
    category: "Contract Intelligence",
    status: "demonstrable" as const,
    description: "AI-Powered Contractual Intelligence — compresses document review from weeks to hours.",
    screenshot: "/screenshots/contract-forensics/02_Analyse Document.png",
    metrics: [{ label: "Review Time", value: "Weeks → Hours" }],
    linkTo: "/case-studies/contract-forensics",
  },
  {
    slug: "ocr-intelligence",
    name: "OCR Intelligence",
    category: "Document Intelligence",
    status: "demonstrable" as const,
    description: "Document Digitization for AI Analysis — 98% OCR accuracy on construction documents.",
    screenshot: "/screenshots/pdf-ocr-web-app/00_HOME.png",
    metrics: [{ label: "Accuracy", value: "98%+" }],
    linkTo: "/case-studies/ocr-intelligence",
  },
];

const aiCapabilities = [
  { technology: "Large Language Models (LLM)", application: "Contract clause extraction, report generation", status: "Production" },
  { technology: "OCR with AI Enhancement", application: "Document digitization, handwritten recognition", status: "Production" },
  { technology: "Rule-Based Automation", application: "FIDIC notice monitoring, NCR escalation", status: "Production" },
  { technology: "Pattern Detection Analytics", application: "Systemic quality analysis, claim patterns", status: "Pilot" },
  { technology: "Prompt Engineering", application: "Domain-calibrated FIDIC/EPC workflows", status: "Production" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Operational Intelligence Products
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Five interconnected products creating compound intelligence for EPC megaprojects.
          </p>
        </Container>
      </Section>

      {/* Product Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
            {additionalProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </Container>
      </Section>

      {/* AI Capability Matrix */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">AI Capability Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Technology</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Application</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {aiCapabilities.map((cap) => (
                  <tr key={cap.technology} className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white font-medium">{cap.technology}</td>
                    <td className="py-3 px-4 text-gray-400">{cap.application}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        cap.status === "Production"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-amber-500/10 text-amber-400"
                      }`}>
                        {cap.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Ecosystem */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white mb-6">Product Ecosystem</h2>
          <div className="max-w-3xl p-6 rounded-xl bg-gray-900 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-lg bg-gray-800">
                <div className="text-xs text-gray-500 mb-1">Layer 1</div>
                <div className="text-sm font-medium text-white">Data Capture</div>
                <div className="text-xs text-gray-400 mt-1">OCR Intelligence</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-800">
                <div className="text-xs text-gray-500 mb-1">Layer 2</div>
                <div className="text-sm font-medium text-white">Intelligence</div>
                <div className="text-xs text-gray-400 mt-1">Digital Twin, NCR Tracker</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-800">
                <div className="text-xs text-gray-500 mb-1">Layer 3</div>
                <div className="text-sm font-medium text-white">Decision</div>
                <div className="text-xs text-gray-400 mt-1">Contract Forensics</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-800">
                <div className="text-xs text-gray-500 mb-1">Layer 4</div>
                <div className="text-sm font-medium text-white">Evidence</div>
                <div className="text-xs text-gray-400 mt-1">All Products</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        headline="Ready to See These Products in Action?"
        description="Schedule a demo to see how operational intelligence can reduce contractual exposure on your EPC project."
        secondaryCTA={{ text: "View Case Studies", href: "/case-studies" }}
      />
    </>
  );
}
