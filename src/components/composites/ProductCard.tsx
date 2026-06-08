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
    <Link href={href} className="group block">
      <article className="h-full p-[var(--space-3)] rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-md)] transition-all duration-300">
        <div className="flex items-center gap-[var(--space-1)] mb-[var(--space-2)]">
          <Badge variant={status}>
            {status === "production" ? "Production" : status === "pilot" ? "Pilot" : "Demonstrable Prototype"}  
          </Badge>
          <span className="text-[var(--font-caption)] text-[var(--color-text-secondary)]">{category}</span>
        </div>

        {screenshot ? (
          <div className="relative aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden mb-[var(--space-2)] bg-[var(--color-surface-subtle)]">
            <Image
              src={screenshot}
              alt={name}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"       
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="aspect-[4/3] rounded-[var(--radius-md)] mb-[var(--space-2)] bg-[var(--color-surface-subtle)] flex items-center justify-center">       
            <span className="text-[var(--color-text-secondary)] text-[var(--font-caption)]">Screenshot pending</span>
          </div>
        )}

        <h3 className="text-[var(--font-h3)] font-semibold text-[var(--color-text-primary)] mb-[var(--space-1)] group-hover:text-[var(--color-accent)] transition-colors">
          {name}
        </h3>
        <p className="text-[var(--font-body)] text-[var(--color-text-secondary)] mb-[var(--space-2)] line-clamp-2 leading-relaxed">{description}</p>

        {metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-[var(--space-1)] mb-[var(--space-2)]">
            {metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <div className="text-[var(--font-caption)] text-[var(--color-text-secondary)]">{m.label}</div>
                <div className="text-[var(--font-body)] font-medium text-[var(--color-text-primary)] font-mono">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center text-[var(--font-caption)] text-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors font-medium">
          {status === "production" || status === "demonstrable" ? "View Case Study" : "Learn More"}
          <ArrowRight className="ml-[var(--space-1)] w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </article>
    </Link>
  );
}
