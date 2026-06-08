import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function MetricCard({ value, label, description, className }: MetricCardProps) {
  return (
    <div className={cn("p-6 rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)]", className)}>
      <div className="text-[var(--font-h2)] font-bold text-white font-mono mb-1">{value}</div>
      <div className="text-[var(--font-body)] font-medium text-[var(--color-text-secondary)] mb-2">{label}</div>
      {description && <div className="text-[var(--font-caption)] text-[var(--color-text-secondary)] opacity-60 leading-relaxed">{description}</div>}
    </div>
  );
}
