import Link from "next/link";
import { Badge } from "@/components/primitives/Badge";
import { ArrowRight, LucideIcon } from "lucide-react";

interface AutomationCardProps {
  slug: string;
  name: string;
  category: string;
  status: "deployed" | "pilot" | "building";
  icon: LucideIcon;
  tagline: string;
  metrics: { label: string; value: string }[];
  linkTo?: string;
}

export function AutomationCard({
  slug,
  name,
  category,
  status,
  icon: Icon,
  tagline,
  metrics,
  linkTo,
}: AutomationCardProps) {
  const href = linkTo || `/automations/${slug}`;

  const statusVariant = status === "deployed" ? "production" : status === "pilot" ? "pilot" : "demonstrable";

  return (
    <Link href={href} className="group block h-full">
      <article className="h-full p-6 rounded-[var(--radius-lg)] bg-[var(--color-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 hover:shadow-[var(--shadow-glow)] transition-all duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 flex items-center justify-center border border-[var(--color-primary)]/20 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant={statusVariant as "production" | "pilot" | "demonstrable"}>
                  {status === "deployed" ? "Deployed" : status === "pilot" ? "Pilot" : "Building"}
                </Badge>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold">{category}</span>
            </div>
          </div>

          <h3 className="text-[var(--font-h3)] font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
            {name}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6 line-clamp-2 leading-relaxed">{tagline}</p>

          {metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-[var(--radius-md)] bg-white/5 border border-white/5">
              {metrics.slice(0, 2).map((m) => (
                <div key={m.label}>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1">{m.label}</div>
                  <div className="text-sm font-bold text-[var(--color-primary)] font-mono">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center text-sm font-bold text-[var(--color-primary)] group-hover:text-white transition-colors">
            Explore Automation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </article>
    </Link>
  );
}
