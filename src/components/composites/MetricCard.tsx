import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function MetricCard({ value, label, description, className }: MetricCardProps) {
  return (
    <div className={cn("p-6 rounded-xl bg-gray-900 border border-gray-800", className)}>
      <div className="text-3xl font-bold text-white font-mono mb-1">{value}</div>
      <div className="text-sm font-medium text-gray-300 mb-1">{label}</div>
      {description && <div className="text-xs text-gray-500">{description}</div>}
    </div>
  );
}
