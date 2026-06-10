import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/primitives/Badge";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  slug: string;
  name: string;
  category: string;
  status: "production" | "pilot" | "demonstrable";
  description: string;
  screenshot: string;
  metrics: { label: string; value: string }[];
  linkTo?: string;
}

export function ProductCard({
  slug,
  name,
  category,
  status,
  description,
  screenshot,
  metrics,
  linkTo,
}: ProductCardProps) {
  const href = linkTo || `/products/${slug}`;

  return (
    <Link href={href} className="group block h-full">
      <article className="h-full p-4 rounded-[var(--radius-lg)] bg-[var(--color-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 hover:shadow-[var(--shadow-glow)] transition-all duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant={status}>
              {status === "production" ? "Production" : status === "pilot" ? "Pilot" : "Demonstrable"}  
            </Badge>
            <span className="text-[var(--font-caption)] font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">{category}</span>
          </div>

          {screenshot ? (
            <div className="relative aspect-video rounded-[var(--radius-md)] overflow-hidden mb-6 bg-[var(--color-surface-subtle)] border border-[var(--color-border)]">
              <Image
                src={screenshot}
                alt={name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"       
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : (
            <div className="aspect-video rounded-[var(--radius-md)] mb-6 bg-[var(--color-surface-subtle)] flex items-center justify-center border border-[var(--color-border)]">       
              <span className="text-[var(--color-text-secondary)] text-[var(--font-caption)]">Visualization Pending</span>
            </div>
          )}

          <h3 className="text-[var(--font-h3)] font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
            {name}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6 line-clamp-3 leading-relaxed">{description}</p>

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

          <div className="flex items-center text-sm text-[var(--color-primary)] group-hover:text-white transition-colors font-bold">
            {status === "production" || status === "demonstrable" ? "View Case Study" : "Explore Solution"}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </article>
    </Link>
  );
}
