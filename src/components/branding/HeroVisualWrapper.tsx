"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";

const HeroVisualDynamic = dynamic(
  () => import("@/components/branding/HeroVisual").then((mod) => ({ default: mod.HeroVisual })),
  { ssr: false }
);

function HeroVisualSkeleton() {
  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto rounded-[var(--radius-xl)] overflow-hidden border border-white/10 bg-[#0A0D10] shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/[0.03] to-transparent animate-pulse" />
    </div>
  );
}

export function HeroVisualWrapper() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? <HeroVisualDynamic /> : <HeroVisualSkeleton />}
    </div>
  );
}
