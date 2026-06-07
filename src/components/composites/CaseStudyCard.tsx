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
        className={`h-full p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 ${
          featured ? "md:col-span-2" : ""
        }`}
      >
        {screenshot ? (
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-gray-800">
            <Image
              src={screenshot}
              alt={title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] rounded-lg mb-4 bg-gray-800 flex items-center justify-center">
            <span className="text-gray-600 text-sm">TCB Simulation — Pilot</span>
          </div>
        )}

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-indigo-400">{product}</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mb-3">{subtitle}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-mono text-emerald-400">{heroMetric}</span>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
        </div>
      </article>
    </Link>
  );
}
