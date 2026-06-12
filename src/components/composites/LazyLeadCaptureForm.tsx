"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";
import type { LeadCaptureFormProps } from "./LeadCaptureForm";

const LeadCaptureFormDynamic = dynamic(
  () => import("./LeadCaptureForm").then((m) => ({ default: m.LeadCaptureForm })),
  { ssr: false }
);

function LeadCaptureFormSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="h-3 w-24 bg-white/5 rounded" />
          <div className="h-11 w-full bg-white/5 rounded-[var(--radius-md)]" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-20 bg-white/5 rounded" />
          <div className="h-11 w-full bg-white/5 rounded-[var(--radius-md)]" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-28 bg-white/5 rounded" />
          <div className="h-11 w-full bg-white/5 rounded-[var(--radius-md)]" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-32 bg-white/5 rounded" />
          <div className="h-11 w-full bg-white/5 rounded-[var(--radius-md)]" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-24 bg-white/5 rounded" />
        <div className="h-11 w-full bg-white/5 rounded-[var(--radius-md)]" />
      </div>
      <div className="h-14 w-full bg-white/5 rounded-[var(--radius-md)]" />
      <div className="h-3 w-3/4 mx-auto bg-white/5 rounded" />
    </div>
  );
}

export function LazyLeadCaptureForm(props: LeadCaptureFormProps) {
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
      {isVisible ? (
        <LeadCaptureFormDynamic {...props} />
      ) : (
        <LeadCaptureFormSkeleton />
      )}
    </div>
  );
}
