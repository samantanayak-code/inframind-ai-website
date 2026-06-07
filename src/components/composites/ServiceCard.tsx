import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  slug: string;
  name: string;
  description: string;
  targetClient: string;
}

export function ServiceCard({ slug, name, description, targetClient }: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="group block">
      <article className="h-full p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-3">{description}</p>
        <div className="text-xs text-gray-500 mb-4">For: {targetClient}</div>
        <div className="flex items-center text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">
          Learn More
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </article>
    </Link>
  );
}
