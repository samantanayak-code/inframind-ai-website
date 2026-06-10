import Link from "next/link";
import { InfraMindLogo } from "@/components/branding/InfraMindLogo";

const footerLinks = {
  products: [
    { href: "/products/mahsr-digital-twin", label: "MAHSR Digital Twin" },
    { href: "/products/ncr-tracker", label: "NCR Tracker" },
  ],
  automations: [
    { href: "/automations/unifier-sync", label: "Unifier Sync" },
    { href: "/automations", label: "View All Automations" },
  ],
  services: [
    { href: "/services/ai-strategy", label: "AI Strategy Consulting" },
    { href: "/services/digital-twin-architecture", label: "Digital Twin Architecture" },
    { href: "/services/contract-intelligence", label: "Contract Intelligence Design" },
    { href: "/services/expert-advisory", label: "Expert Advisory" },
    { href: "/services/planning-scheduling", label: "Planning, Scheduling & Programme Controls" },
    { href: "/services/delay-analysis-eot", label: "Delay Analysis, EOT & Claims Support" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-graphite-800 bg-graphite-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <InfraMindLogo variant="horizontal" />
            </Link>
            <p className="text-sm text-graphite-500">
              Operational Intelligence for Infrastructure EPC Megaprojects
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-graphite-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Automation</h3>
            <ul className="space-y-2">
              {footerLinks.automations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-graphite-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-graphite-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-graphite-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-graphite-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-graphite-500">
            &copy; {new Date().getFullYear()} InfraMind EPC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:samanta@inframindepc.com" className="text-xs text-graphite-500 hover:text-white transition-colors">
              samanta@inframindepc.com
            </a>
            <a href="tel:+917682858603" className="text-xs text-graphite-500 hover:text-white transition-colors">
              +91 7682858603
            </a>
            <Link href="https://linkedin.com" className="text-xs text-graphite-500 hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="/contact" className="text-xs text-graphite-500 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
