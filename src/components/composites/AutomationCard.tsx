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
    <Link href={href} className="group block">
      <article className="h-full p-[var(--space-3)] rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 hover:shadow-[var(--shadow-md)]">
        <div className="flex items-center gap-[var(--space-2)] mb-[var(--space-2)]">
          <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-[var(--color-accent)]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Badge variant={statusVariant as "production" | "pilot" | "demonstrable"}>
                {status === "deployed" ? "Deployed" : status === "pilot" ? "Pilot" : "Building"}
              </Badge>
              <span className="text-[var(--font-caption)] text-[var(--color-text-secondary)]">{category}</span>
            </div>
          </div>
        </div>

        <h3 className="text-[var(--font-body)] font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {name}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2 leading-relaxed">{tagline}</p>

        {metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-[var(--space-1)] mb-4">
            {metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <div className="text-[var(--font-caption)] text-[var(--color-text-secondary)]">{m.label}</div>
                <div className="text-sm font-medium text-white font-mono">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center text-sm font-medium text-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors">
          View Details
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </article>
    </Link>
  );
}
