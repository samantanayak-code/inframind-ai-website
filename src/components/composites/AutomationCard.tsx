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
      <article className="h-full p-6 rounded-xl bg-graphite-800 border border-graphite-700 hover:border-infrastructure-600/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-infrastructure-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Badge variant={statusVariant as "production" | "pilot" | "demonstrable"}>
                {status === "deployed" ? "Deployed" : status === "pilot" ? "Pilot" : "Building"}
              </Badge>
              <span className="text-xs text-graphite-500">{category}</span>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-infrastructure-400 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-graphite-400 mb-4 line-clamp-2">{tagline}</p>

        {metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <div className="text-xs text-graphite-500">{m.label}</div>
                <div className="text-sm font-medium text-white font-mono">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center text-sm text-infrastructure-400 group-hover:text-infrastructure-300 transition-colors">
          View Details
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </article>
    </Link>
  );
}
