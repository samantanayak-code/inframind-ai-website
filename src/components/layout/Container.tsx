import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("max-w-7xl mx-auto px-[var(--space-2)] sm:px-[var(--space-3)] lg:px-[var(--space-4)]", className)}>{children}</div>;
}
