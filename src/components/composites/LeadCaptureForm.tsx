"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/primitives/Button";
import { Send, CheckCircle } from "lucide-react";

const leadCaptureSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(2, "Role is required"),
  interestArea: z.string().min(1, "Interest area is required"),
});

type LeadCaptureFormData = z.infer<typeof leadCaptureSchema>;

const interestAreas = [
  "Planning & Scheduling",
  "Delay Analysis & EOT",
  "Contracts & Claims",
  "Operational Automation",
  "Digital Twin",
  "General Enquiry",
];

interface LeadCaptureFormProps {
  onSubmitSuccess?: () => void;
}

export function LeadCaptureForm({ onSubmitSuccess }: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadCaptureFormData>({
    resolver: zodResolver(leadCaptureSchema),
  });

  const onSubmit = async (data: LeadCaptureFormData) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
      <div className="p-8 rounded-xl bg-graphite-800 border border-graphite-700 text-center">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-success-light" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Thank you. Your download is ready.</h3>
        <p className="text-graphite-400 mb-6">
          Check your email for the Capability Statement. We will also follow up within 2 business days.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="secondary">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register("name")} className={inputClass} placeholder="John Doe" />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Company *</label>
          <input {...register("company")} className={inputClass} placeholder="Larsen & Toubro" />
          {errors.company && <p className={errorClass}>{errors.company.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input {...register("email")} type="email" className={inputClass} placeholder="john@company.com" />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Role *</label>
          <input {...register("role")} className={inputClass} placeholder="Contracts Manager" />
          {errors.role && <p className={errorClass}>{errors.role.message}</p>}
        </div>
      </div>
      <div>
        <label className={labelClass}>Interest Area *</label>
        <select {...register("interestArea")} className={inputClass}>
          <option value="">Select your area of interest...</option>
          {interestAreas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
        {errors.interestArea && <p className={errorClass}>{errors.interestArea.message}</p>}
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Download Capability Statement"}
        <Send className="w-4 h-4" />
      </Button>
      <p className="text-xs text-graphite-500 text-center">
        By downloading, you agree to receive follow-up communication from InfraMind EPC.
      </p>
    </form>
  );
}
