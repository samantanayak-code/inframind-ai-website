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
      <article className="h-full p-6 rounded-xl bg-graphite-800 border border-graphite-700 hover:border-graphite-600 transition-all duration-300">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant={status}>
            {status === "production" ? "Production" : status === "pilot" ? "Pilot" : "Demonstrable Prototype"}
          </Badge>
          <span className="text-xs text-graphite-500">{category}</span>
        </div>

        {screenshot ? (
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-graphite-700">
            <Image
              src={screenshot}
              alt={name}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="aspect-[4/3] rounded-lg mb-4 bg-graphite-700 flex items-center justify-center">
            <span className="text-graphite-500 text-sm">Screenshot pending</span>
          </div>
        )}

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-infrastructure-400 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-graphite-400 mb-4 line-clamp-2">{description}</p>

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
          {status === "production" || status === "demonstrable" ? "View Case Study" : "Learn More"}
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </article>
    </Link>
  );
}
