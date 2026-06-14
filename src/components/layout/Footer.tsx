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
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
  about: [
    { href: "/about", label: "About InfraMind EPC" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#07090C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-6">
              <InfraMindLogo variant="horizontal" />
            </Link>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] leading-relaxed">
              Operational Intelligence for Infrastructure EPC Megaprojects
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-6">Products</h3>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-6">Automation</h3>
            <ul className="space-y-4">
              {footerLinks.automations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/resources" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-6">About</h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} InfraMind EPC. Practitioner-Built Intelligence.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <a href="mailto:samanta@inframindepc.com" className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] hover:text-white transition-colors">
              samanta@inframindepc.com
            </a>
            <a href="tel:+917682858603" className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] hover:text-white transition-colors">
              +91 7682858603
            </a>
            <Link href="https://linkedin.com" className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] hover:text-white transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
