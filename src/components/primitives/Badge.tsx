import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "production" | "pilot" | "demonstrable" | "default";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className }: BadgeProps) {
  const variants = {
    production: "bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/20",
    pilot: "bg-[var(--color-warning)]/10 text-[var(--color-warning)] border-[var(--color-warning)]/20",
    demonstrable: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20",
    default: "bg-white/5 text-[var(--color-text-secondary)] border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
