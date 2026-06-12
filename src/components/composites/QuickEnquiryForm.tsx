"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/primitives/Button";
import { Send, CheckCircle } from "lucide-react";

const quickEnquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type QuickEnquiryFormData = z.infer<typeof quickEnquirySchema>;

export interface QuickEnquiryFormProps {
  source?: string;
  onSubmitSuccess?: () => void;
}

export function QuickEnquiryForm({ source = "quick-enquiry", onSubmitSuccess }: QuickEnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuickEnquiryFormData>({
    resolver: zodResolver(quickEnquirySchema),
  });

  const onSubmit = async (data: QuickEnquiryFormData) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source, interestArea: "General Enquiry" }),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
        onSubmitSuccess?.();
      }
    } catch {
      console.error("Form submission failed");
    }
  };

  const inputClass =
    "w-full px-3 py-2 bg-graphite-800 border border-graphite-700 rounded-lg text-white text-sm placeholder-graphite-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
  const labelClass = "block text-sm font-medium text-graphite-300 mb-1";
  const errorClass = "text-xs text-error-light mt-1";

  if (submitted) {
    return (
      <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700 text-center">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
          <CheckCircle className="w-6 h-6 text-success-light" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Enquiry Sent</h3>
        <p className="text-sm text-graphite-400 mb-4">
          Thank you. We will respond within 2 business days.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="secondary" size="sm">
          Send Another
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
      <h3 className="text-lg font-semibold text-white mb-2">Quick Enquiry</h3>
      <p className="text-xs text-graphite-400 mb-4">
        Have a question? Send us a message and we will get back to you.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <label className={labelClass}>Name *</label>
          <input {...register("name")} className={inputClass} placeholder="Your name" />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input {...register("email")} type="email" className={inputClass} placeholder="you@company.com" />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Message *</label>
          <textarea {...register("message")} rows={3} className={inputClass} placeholder="How can we help?" />
          {errors.message && <p className={errorClass}>{errors.message.message}</p>}
        </div>
        <Button type="submit" size="sm" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Enquiry"}
          <Send className="w-3.5 h-3.5" />
        </Button>
        <p className="text-[10px] text-graphite-500 text-center">
          We will respond within 2 business days.
        </p>
      </form>
    </div>
  );
}
