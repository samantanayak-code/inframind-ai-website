import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CapabilityMetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function CapabilityMetricCard({
  icon: Icon,
  value,
  label,
  description,
  className,
}: CapabilityMetricCardProps) {
  return (
    <div
      className={cn(
        "p-5 rounded-xl bg-graphite-800 border border-graphite-700 hover:border-infrastructure-500/30 transition-colors",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-infrastructure-400" />
        </div>
        <div className="text-2xl font-bold text-white font-mono">{value}</div>
      </div>
      <div className="text-sm font-medium text-white mb-1">{label}</div>
      {description && <div className="text-xs text-graphite-500">{description}</div>}
    </div>
  );
}
