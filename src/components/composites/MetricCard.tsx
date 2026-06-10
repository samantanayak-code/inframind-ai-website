import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function MetricCard({ value, label, description, className }: MetricCardProps) {
  return (
    <div className={cn("p-8 rounded-[var(--radius-lg)] bg-[var(--color-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-[var(--shadow-glow)] transition-all duration-300 group", className)}>
      <div className="text-[var(--font-h2)] font-bold text-[var(--color-primary)] font-mono mb-2 group-hover:scale-105 transition-transform duration-300">{value}</div>
      <div className="text-[var(--font-body)] font-bold text-white mb-2">{label}</div>
      {description && <div className="text-[var(--font-caption)] text-[var(--color-text-secondary)] leading-relaxed">{description}</div>}
    </div>
  );
}
