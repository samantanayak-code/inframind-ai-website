import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-[var(--space-8)] md:py-[var(--space-8)] px-[var(--space-2)]", className)}>
      {children}
    </section>
  );
}
