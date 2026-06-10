"use client";

import { motion } from "framer-motion";
import { FileText, Search, Brain, FileCheck } from "lucide-react";

export function AIPipeline() {
  const steps = [
    { icon: FileText, label: "Unstructured Data", description: "Correspondence, Drawings, Reports" },
    { icon: Search, label: "OCR & Extraction", description: "98%+ Accuracy Digitization" },
    { icon: Brain, label: "AI Analysis", description: "FIDIC-Aware Intelligence" },
    { icon: FileCheck, label: "Actionable Insight", description: "Claims, Compliance, MIS" },
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-[var(--color-primary)]/5 to-transparent blur-3xl opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.label} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-linear-to-r from-[var(--color-primary)]/40 to-transparent z-0 overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]"
                  />
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center p-8 rounded-2xl bg-[var(--color-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 border border-[var(--color-primary)]/20 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h4 className="font-bold text-white mb-2">{step.label}</h4>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{step.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
