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
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{headline}</h2>
        {description && <p className="text-lg text-graphite-300 mb-8 max-w-2xl mx-auto">{description}</p>}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryCTA.href} size="lg">
            {primaryCTA.text}
            <ArrowRight className="w-4 h-4" />
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
