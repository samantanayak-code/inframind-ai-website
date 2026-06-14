"use client";

import {
  Briefcase,
  Train,
  FileText,
  Scale,
  Building2,
  Cpu,
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/feedback/ScrollReveal";

interface TrustMetric {
  icon: typeof Briefcase;
  value: string;
  caption: string;
}

const metrics: TrustMetric[] = [
  { icon: Briefcase, value: "19+", caption: "Years EPC Contracts Experience" },
  { icon: Train, value: "115.877 km", caption: "High-Speed Rail Programme" },
  { icon: FileText, value: "10+", caption: "EOT Claims Documentation & Support" },
  { icon: Scale, value: "FIDIC", caption: "Yellow Book Specialist" },
  { icon: Building2, value: "PSU", caption: "Owner-Centric Contract Drafting Expertise" },
  { icon: Cpu, value: "AI", caption: "Infrastructure Intelligence Automation" },
];

export function TrustMetricsStrip() {
  return (
    <section className="relative py-8 md:py-12 bg-[#07090C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <StaggerItem
                key={metric.caption}
                className="p-4 md:p-5 rounded-[var(--radius-lg)] bg-[var(--color-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-all duration-200 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-glow)] group"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 flex items-center justify-center mb-3 border border-[var(--color-primary)]/20 group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-[18px] h-[18px] md:w-5 md:h-5 text-[var(--color-primary)]" />
                </div>
                <div className="text-xl md:text-2xl font-extrabold text-white font-mono mb-1 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                  {metric.value}
                </div>
                <div className="text-[11px] md:text-xs text-[var(--color-text-secondary)] font-medium leading-snug">
                  {metric.caption}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
