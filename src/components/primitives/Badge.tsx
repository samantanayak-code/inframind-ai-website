import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "production" | "pilot" | "demonstrable" | "default";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className }: BadgeProps) {
  const variants = {
    production: "bg-success/10 text-success-light border-success/20",
    pilot: "bg-warning/10 text-warning-light border-warning/20",
    demonstrable: "bg-info/10 text-info-light border-info/20",
    default: "bg-graphite-500/10 text-graphite-400 border-graphite-500/20",
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
