"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";
import type { QuickEnquiryFormProps } from "./QuickEnquiryForm";

const QuickEnquiryFormDynamic = dynamic(
  () => import("./QuickEnquiryForm").then((m) => ({ default: m.QuickEnquiryForm })),
  { ssr: false }
);

function QuickEnquiryFormSkeleton() {
  return (
    <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700 animate-pulse">
      <div className="h-5 w-32 bg-white/5 rounded mb-2" />
      <div className="h-3 w-56 bg-white/5 rounded mb-4" />
      <div className="space-y-3">
        <div className="space-y-1">
          <div className="h-3 w-12 bg-white/5 rounded" />
          <div className="h-9 w-full bg-white/5 rounded-lg" />
        </div>
        <div className="space-y-1">
          <div className="h-3 w-14 bg-white/5 rounded" />
          <div className="h-9 w-full bg-white/5 rounded-lg" />
        </div>
        <div className="space-y-1">
          <div className="h-3 w-16 bg-white/5 rounded" />
          <div className="h-20 w-full bg-white/5 rounded-lg" />
        </div>
        <div className="h-9 w-full bg-white/5 rounded-lg" />
        <div className="h-3 w-1/2 mx-auto bg-white/5 rounded" />
      </div>
    </div>
  );
}

export function LazyQuickEnquiryForm(props: QuickEnquiryFormProps) {
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
        <QuickEnquiryFormDynamic {...props} />
      ) : (
        <QuickEnquiryFormSkeleton />
      )}
    </div>
  );
}
