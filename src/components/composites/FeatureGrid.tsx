import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/feedback/ScrollReveal";
import { CheckCircle, Zap, Cpu, Settings } from "lucide-react";

interface FeatureGridProps {
  title: string;
  items: string[];
  iconType?: "check" | "zap" | "cpu" | "settings";
}

export function FeatureGrid({ title, items, iconType = "check" }: FeatureGridProps) {
  const Icon = {
    check: CheckCircle,
    zap: Zap,
    cpu: Cpu,
    settings: Settings,
  }[iconType];

  return (
    <div className="mb-20">
      <ScrollReveal className="mb-8">
        <h2 className="text-[var(--font-h2)] font-bold text-white mb-2">{title}</h2>
        <div className="h-1 w-20 bg-[var(--color-primary)] rounded-full" />
      </ScrollReveal>
      
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const [itemTitle, itemDesc] = item.includes(" — ") ? item.split(" — ") : [item, ""];
          return (
            <StaggerItem
              key={itemTitle}
              className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 group"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 flex items-center justify-center border border-[var(--color-primary)]/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">{itemTitle}</h3>
                  {itemDesc && <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{itemDesc}</p>}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
