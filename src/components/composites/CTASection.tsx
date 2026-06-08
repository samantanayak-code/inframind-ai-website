import { Button } from "@/components/primitives/Button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  headline: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export function CTASection({
  headline,
  description,
  primaryCTA = { text: "Request a Consultation", href: "/contact" },
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="py-24 px-4 bg-[var(--color-surface-subtle)] border-t border-[var(--color-border)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/5 to-transparent" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-[var(--font-h2)] md:text-[var(--font-h1)] font-bold text-white mb-6 leading-tight">{headline}</h2>
        {description && <p className="text-[var(--font-body)] text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">{description}</p>}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryCTA.href} size="lg">
            {primaryCTA.text}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          {secondaryCTA && (
            <Button href={secondaryCTA.href} variant="secondary" size="lg">
              {secondaryCTA.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
