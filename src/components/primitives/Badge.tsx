import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "production" | "pilot" | "demonstrable" | "default";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className }: BadgeProps) {
  const variants = {
    production: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    pilot: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    demonstrable: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    default: "bg-gray-500/10 text-gray-400 border-gray-500/20",
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
