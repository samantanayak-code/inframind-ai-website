"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/primitives/Button";
import { InfraMindLogo } from "@/components/branding/InfraMindLogo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/automations", label: "Automation" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/capability-statement", label: "Capability" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0D10]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg hover:opacity-80 transition-opacity">
            <span className="hidden md:inline-flex">
              <InfraMindLogo variant="horizontal" />
            </span>
            <span className="md:hidden">
              <InfraMindLogo variant="icon" />
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  pathname === item.href
                    ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20"
                    : "text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/resources" className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-white transition-colors mr-4">
              Resources
            </Link>
            <Button href="/contact" size="sm" className="px-6">
              Contact
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-graphite-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0A0D10]">
          <nav className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-colors ${
                  pathname === item.href
                    ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10"
                    : "text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-white/5">
              <Button href="/contact" className="w-full h-12" onClick={() => setMobileOpen(false)}>
                Request Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
