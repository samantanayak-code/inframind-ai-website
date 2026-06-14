"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/primitives/Button";
import { InfraMindLogo } from "@/components/branding/InfraMindLogo";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  items: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "AI Solutions",
    items: [
      { label: "Services", href: "/services" },
      { label: "Automation", href: "/automations" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "Overview", href: "/products" },
      { label: "MAHSR Digital Twin", href: "/products/mahsr-digital-twin" },
      { label: "NCR Tracker", href: "/products/ncr-tracker" },
    ],
  },
  {
    label: "Portfolio",
    items: [
      { label: "Capability Statement", href: "/capability-statement" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Resource Library", href: "/resources" },
      { label: "Advisory Suite", href: "/advisory-suite" },
    ],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -4, pointerEvents: "none" as const },
  visible: { opacity: 1, y: 0, pointerEvents: "auto" as const },
};

const mobileAccordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isActiveParent = useCallback(
    (item: NavItem): boolean => {
      return item.items.some((child) => {
        if (child.href === "/") return pathname === "/";
        return pathname === child.href || pathname.startsWith(child.href + "/");
      });
    },
    [pathname]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleOpen = (label: string) => {
    cancelClose();
    setOpenDropdown(label);
  };

  const handleClose = () => {
    scheduleClose();
  };

  const handleToggle = (label: string) => {
    cancelClose();
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0D10]/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-[#0A0D10]/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg hover:opacity-80 transition-opacity" aria-label="InfraMind EPC — Home">
            <span className="hidden md:inline-flex">
              <InfraMindLogo variant="horizontal" />
            </span>
            <span className="md:hidden">
              <InfraMindLogo variant="icon" />
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleOpen(item.label)}
                onMouseLeave={handleClose}
              >
                <button
                  onClick={() => handleToggle(item.label)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 ${
                    openDropdown === item.label
                      ? "text-white bg-white/10"
                      : isActiveParent(item)
                      ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20"
                      : "text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5"
                  }`}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="menu"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      key={item.label}
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl bg-[var(--color-elevated)] border border-[var(--color-border)] shadow-xl shadow-black/30 overflow-hidden"
                      role="menu"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="py-1">
                        {item.items.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                              pathname === child.href
                                ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5 border-l-2 border-[var(--color-primary)]"
                                : "text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5 border-l-2 border-transparent"
                            }`}
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 opacity-50" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button href="/contact" size="sm" className="px-6 h-10">
              Contact
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileAccordionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-white/5 bg-[#0A0D10] overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 ${
                      isActiveParent(item)
                        ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10"
                        : "text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5"
                    }`}
                    aria-expanded={mobileExpanded === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === item.label && (
                      <motion.div
                        variants={mobileAccordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-1 space-y-1 border-l border-[var(--color-border)] pl-4">
                          {item.items.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileExpanded(null);
                              }}
                              className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                pathname === child.href
                                  ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5"
                                  : "text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5"
                              }`}
                            >
                              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 opacity-50" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-6 space-y-2">
                <Button href="/contact" className="w-full h-12" onClick={() => setMobileOpen(false)}>
                  Request Consultation
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
