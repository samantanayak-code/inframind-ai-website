import Link from "next/link";

const footerLinks = {
  products: [
    { href: "/products/mahsr-digital-twin", label: "MAHSR Digital Twin" },
    { href: "/products/ncr-tracker", label: "NCR Tracker" },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <svg viewBox="0 0 48 48" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="8" x2="8" y2="40" stroke="#C45A27" strokeWidth="3" strokeLinecap="round"/>
                <line x1="40" y1="8" x2="24" y2="40" stroke="#C45A27" strokeWidth="3" strokeLinecap="round"/>
                <line x1="24" y1="40" x2="40" y2="40" stroke="#C45A27" strokeWidth="3" strokeLinecap="round"/>
                <line x1="8" y1="24" x2="40" y2="24" stroke="#C45A27" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="8" cy="8" r="4" fill="#C45A27"/>
                <circle cx="8" cy="40" r="4" fill="#C45A27"/>
                <circle cx="40" cy="8" r="4" fill="#C45A27"/>
                <circle cx="24" cy="40" r="4" fill="#C45A27"/>
                <circle cx="8" cy="24" r="3" fill="#C45A27"/>
                <circle cx="40" cy="24" r="3" fill="#C45A27"/>
              </svg>
              <span>InfraMind AI</span>
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
            &copy; {new Date().getFullYear()} InfraMind AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
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
