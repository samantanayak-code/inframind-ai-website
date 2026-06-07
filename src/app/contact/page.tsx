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
  organization: z.string().min(2, "Organization must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  projectName: z.string().min(2, "Project name is required"),
  contractType: z.string().min(1, "Contract type is required"),
  contractValue: z.string().min(1, "Contract value is required"),
  primaryChallenge: z.string().min(1, "Primary challenge is required"),
  projectDescription: z.string().max(500, "Maximum 500 characters"),
  consultationType: z.string().min(1, "Consultation type is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  howDidYouHear: z.string().min(1, "This field is required"),
  additionalNotes: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const consultationTypes = [
  "AI Strategy Consultation",
  "Contract Intelligence Consultation",
  "Digital Twin Consultation",
  "Expert Advisory Consultation",
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

  const inputClass = "w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-300 mb-1";
  const errorClass = "text-xs text-red-400 mt-1";

  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
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
                <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">Thank You</h2>
                  <p className="text-gray-400 mb-6">Your consultation request has been submitted. We will respond within 2 business days.</p>
                  <Button onClick={() => setSubmitted(false)} variant="secondary">Submit Another Request</Button>
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
                      <label className={labelClass}>Organization *</label>
                      <input {...register("organization")} className={inputClass} placeholder="Larsen & Toubro" />
                      {errors.organization && <p className={errorClass}>{errors.organization.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input {...register("email")} type="email" className={inputClass} placeholder="john@company.com" />
                      {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input {...register("phone")} className={inputClass} placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Project Name *</label>
                      <input {...register("projectName")} className={inputClass} placeholder="MAHSR T-3 Track Package" />
                      {errors.projectName && <p className={errorClass}>{errors.projectName.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Contract Type *</label>
                      <select {...register("contractType")} className={inputClass}>
                        <option value="">Select...</option>
                        <option value="FIDIC Yellow Book">FIDIC Yellow Book</option>
                        <option value="FIDIC Red Book">FIDIC Red Book</option>
                        <option value="FIDIC Silver Book">FIDIC Silver Book</option>
                        <option value="NEC4">NEC4</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.contractType && <p className={errorClass}>{errors.contractType.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Contract Value *</label>
                      <select {...register("contractValue")} className={inputClass}>
                        <option value="">Select...</option>
                        <option value="Less than 1B INR">{"< 1B INR"}</option>
                        <option value="1-10B INR">1-10B INR</option>
                        <option value="10-50B INR">10-50B INR</option>
                        <option value="50B+ INR">50B+ INR</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                      {errors.contractValue && <p className={errorClass}>{errors.contractValue.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Primary Challenge *</label>
                      <select {...register("primaryChallenge")} className={inputClass}>
                        <option value="">Select...</option>
                        <option value="AI Strategy">AI Strategy</option>
                        <option value="Contract Intelligence">Contract Intelligence</option>
                        <option value="Digital Twin">Digital Twin</option>
                        <option value="Document Digitization">Document Digitization</option>
                        <option value="Quality Governance">Quality Governance</option>
                        <option value="Dispute Resolution">Dispute Resolution</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.primaryChallenge && <p className={errorClass}>{errors.primaryChallenge.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Project Description *</label>
                    <textarea {...register("projectDescription")} rows={3} className={inputClass} placeholder="Brief description of your project and challenges..." />
                    {errors.projectDescription && <p className={errorClass}>{errors.projectDescription.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClass}>Consultation Type *</label>
                      <select {...register("consultationType")} className={inputClass}>
                        <option value="">Select...</option>
                        {consultationTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.consultationType && <p className={errorClass}>{errors.consultationType.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Date *</label>
                      <input {...register("preferredDate")} type="date" className={inputClass} />
                      {errors.preferredDate && <p className={errorClass}>{errors.preferredDate.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Time *</label>
                      <select {...register("preferredTime")} className={inputClass}>
                        <option value="">Select...</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                      </select>
                      {errors.preferredTime && <p className={errorClass}>{errors.preferredTime.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>How Did You Hear About Us? *</label>
                      <select {...register("howDidYouHear")} className={inputClass}>
                        <option value="">Select...</option>
                        <option value="Search Engine">Search Engine</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Referral">Referral</option>
                        <option value="Conference">Conference</option>
                        <option value="Publication">Publication</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.howDidYouHear && <p className={errorClass}>{errors.howDidYouHear.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Additional Notes</label>
                      <textarea {...register("additionalNotes")} rows={1} className={inputClass} placeholder="Anything else..." />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Consultation Types</h3>
                <div className="space-y-3">
                  {consultationTypes.map((t) => (
                    <div key={t} className="text-sm text-gray-400">{t}</div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Inquiry Workflow</h3>
                <div className="space-y-3">
                  {inquiryWorkflow.map((step) => (
                    <div key={step.step} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs text-indigo-400 font-medium">
                        {step.step}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{step.title}</div>
                        <div className="text-xs text-gray-500">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Mail className="w-4 h-4" />
                    samanta.nayak@gmail.com
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    India (global delivery available)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
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
