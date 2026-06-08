"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Clock, Mail, MapPin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  company: z.string().optional(),
  role: z.string().optional(),
  interestArea: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const interestAreas = [
  "Planning & Scheduling",
  "Delay Analysis & EOT",
  "Contracts & Claims",
  "Operational Automation",
  "Digital Twin",
  "General Enquiry",
];

const inquiryWorkflow = [
  { step: 1, title: "Initial Contact", description: "Complete form, email, or LinkedIn" },
  { step: 2, title: "Qualification", description: "Within 2 business days" },
  { step: 3, title: "Consultation", description: "Discuss project-specific challenges" },
  { step: 4, title: "Proposal", description: "Within 5 business days of consultation" },
  { step: 5, title: "Engagement", description: "Execute NDA and begin discovery" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      console.error("Form submission failed");
    }
  };

  const inputClass = "w-full px-3 py-2 bg-graphite-800 border border-graphite-700 rounded-lg text-white text-sm placeholder-graphite-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
  const labelClass = "block text-sm font-medium text-graphite-300 mb-1";
  const errorClass = "text-xs text-error-light mt-1";

  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact
          </h1>
          <p className="text-lg text-graphite-300 max-w-2xl">
            Schedule a consultation to discuss how practitioner-built operational intelligence can reduce contractual exposure on your EPC project.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="p-8 rounded-xl bg-graphite-800 border border-graphite-700 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-success-light" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">Thank You</h2>
                  <p className="text-graphite-400 mb-6">Your enquiry has been submitted. We will respond within 2 business days.</p>
                  <Button onClick={() => setSubmitted(false)} variant="secondary">Submit Another Enquiry</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input {...register("name")} className={inputClass} placeholder="John Doe" />
                      {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input {...register("email")} type="email" className={inputClass} placeholder="john@company.com" />
                      {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea {...register("message")} rows={4} className={inputClass} placeholder="Tell us about your project challenges or how we can help..." />
                    {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                  </div>

                  <div className="border-t border-graphite-700 pt-4">
                    <p className="text-xs text-graphite-500 mb-4">Optional — helps us prepare for your enquiry</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className={labelClass}>Company</label>
                        <input {...register("company")} className={inputClass} placeholder="Larsen & Toubro" />
                      </div>
                      <div>
                        <label className={labelClass}>Role</label>
                        <input {...register("role")} className={inputClass} placeholder="Contracts Manager" />
                      </div>
                      <div>
                        <label className={labelClass}>Interest Area</label>
                        <select {...register("interestArea")} className={inputClass}>
                          <option value="">Select...</option>
                          {interestAreas.map((area) => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Send Enquiry"}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
                <h3 className="text-lg font-semibold text-white mb-4">Inquiry Workflow</h3>
                <div className="space-y-3">
                  {inquiryWorkflow.map((step) => (
                    <div key={step.step} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-400 font-medium">
                        {step.step}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{step.title}</div>
                        <div className="text-xs text-graphite-500">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700">
                <h3 className="text-lg font-semibold text-white mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-graphite-400">
                    <Mail className="w-4 h-4" />
                    samanta.nayak@gmail.com
                  </div>
                  <div className="flex items-center gap-2 text-sm text-graphite-400">
                    <MapPin className="w-4 h-4" />
                    India (global delivery available)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-graphite-400">
                    <Clock className="w-4 h-4" />
                    Response within 2 business days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
