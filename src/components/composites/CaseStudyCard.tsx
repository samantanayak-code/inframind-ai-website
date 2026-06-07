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
        className={`h-full p-6 rounded-xl bg-graphite-800 border border-graphite-700 hover:border-graphite-600 transition-all duration-300 ${
          featured ? "md:col-span-2" : ""
        }`}
      >
        {screenshot ? (
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-graphite-700">
            <Image
              src={screenshot}
              alt={title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] rounded-lg mb-4 bg-graphite-700 flex items-center justify-center">
            <span className="text-graphite-500 text-sm">TCB Simulation — Pilot</span>
          </div>
        )}

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-infrastructure-400">{product}</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-infrastructure-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-graphite-400 mb-3">{subtitle}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-mono text-success-light">{heroMetric}</span>
          <ArrowRight className="w-4 h-4 text-graphite-500 group-hover:text-infrastructure-400 group-hover:translate-x-1 transition-all" />
        </div>
      </article>
    </Link>
  );
}
