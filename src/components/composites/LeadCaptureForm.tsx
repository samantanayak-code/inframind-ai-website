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
    "w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-white text-sm placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all";
  const labelClass = "block text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-2";
  const errorClass = "text-xs text-[var(--color-error)] mt-2 font-medium";

  if (submitted) {
    return (
      <div className="p-12 rounded-[var(--radius-xl)] bg-[var(--color-elevated)] border border-[var(--color-border)] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-success)] opacity-5 blur-3xl -mr-16 -mt-16" />
        <div className="w-20 h-20 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-6 border border-[var(--color-success)]/20">
          <CheckCircle className="w-10 h-10 text-[var(--color-success)]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Submission Successful</h3>
        <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto leading-relaxed">
          Your request has been logged. Our practitioner team will reach out within 24 hours to schedule your strategy session.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="secondary" size="lg">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Full Name</label>
          <input {...register("name")} className={inputClass} placeholder="Enter your name" />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Company</label>
          <input {...register("company")} className={inputClass} placeholder="Enter company name" />
          {errors.company && <p className={errorClass}>{errors.company.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email Address</label>
          <input {...register("email")} type="email" className={inputClass} placeholder="name@company.com" />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Professional Role</label>
          <input {...register("role")} className={inputClass} placeholder="e.g. Contracts Manager" />
          {errors.role && <p className={errorClass}>{errors.role.message}</p>}
        </div>
      </div>
      <div>
        <label className={labelClass}>Interest Area</label>
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
      <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Submit Discovery Request"}
        <Send className="w-5 h-5 ml-2" />
      </Button>
      <p className="text-[10px] text-[var(--color-text-muted)] text-center uppercase tracking-widest font-bold">
        Secure Encryption • Practitioner Confidentiality Guaranteed
      </p>
    </form>
  );
}
