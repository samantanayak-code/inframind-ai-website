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
  primaryCTA = { text: "Request Strategy Session", href: "/contact" },
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="py-32 px-4 bg-[#07090C] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square bg-[var(--color-primary)] opacity-[0.03] blur-[150px] rounded-full" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-[var(--font-h1)] md:text-[64px] font-extrabold text-white mb-8 leading-[1.1] text-balance">
          {headline}
        </h2>
        {description && (
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button href={primaryCTA.href} size="lg" className="px-10 h-16 text-lg">
            {primaryCTA.text}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          {secondaryCTA && (
            <Button href={secondaryCTA.href} variant="secondary" size="lg" className="px-10 h-16 text-lg">
              {secondaryCTA.text}
            </Button>
          )}
        </div>
        <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
          Deployment Verified • Practitioner Built • Enterprise Grade
        </p>
      </div>
    </section>
  );
}
