import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  subtitle: string;
  product: string;
  heroMetric: string;
  screenshot: string;
  featured?: boolean;
}

export function CaseStudyCard({
  slug,
  title,
  subtitle,
  product,
  heroMetric,
  screenshot,
  featured,
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="group block">
      <article
        className={`h-full p-[var(--space-3)] rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 hover:shadow-[var(--shadow-md)] ${
          featured ? "md:col-span-2" : ""
        }`}
      >
        {screenshot ? (
          <div className="relative aspect-[16/9] rounded-[var(--radius-md)] overflow-hidden mb-6 bg-[var(--color-surface-subtle)]">
            <Image
              src={screenshot}
              alt={title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] rounded-[var(--radius-md)] mb-6 bg-[var(--color-surface-subtle)] flex items-center justify-center">
            <span className="text-[var(--color-text-secondary)] text-sm opacity-60">TCB Simulation — Pilot</span>
          </div>
        )}

        <div className="flex items-center gap-2 mb-3">
          <span className="text-[var(--font-caption)] font-bold uppercase tracking-wider text-[var(--color-accent)]">{product}</span>
        </div>

        <h3 className="text-[var(--font-body)] font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6 line-clamp-2 leading-relaxed">{subtitle}</p>

        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <span className="text-sm font-mono font-bold text-[var(--color-success)]">{heroMetric}</span>
          <div className="flex items-center text-sm font-medium text-[var(--color-accent)] group-hover:translate-x-1 transition-all">
            Read Case Study
            <ArrowRight className="ml-1 w-4 h-4" />
          </div>
        </div>
      </article>
    </Link>
  );
}
