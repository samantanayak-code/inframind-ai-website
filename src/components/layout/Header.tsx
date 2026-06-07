"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/primitives/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-graphite-800 bg-graphite-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg">
            <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-white bg-graphite-800"
                    : "text-graphite-400 hover:text-white hover:bg-graphite-800/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button href="/contact" size="sm">
              Request Consultation
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
        <div className="md:hidden border-t border-graphite-800 bg-graphite-900">
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-white bg-graphite-800"
                    : "text-graphite-400 hover:text-white hover:bg-graphite-800/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button href="/contact" className="w-full" onClick={() => setMobileOpen(false)}>
                Request Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
