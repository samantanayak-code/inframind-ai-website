"use client";

import { useState } from "react";
import { Calendar, X, ExternalLink } from "lucide-react";

interface CalendlyCTAProps {
  variant?: "inline" | "modal" | "button" | "card";
  calendlyUrl?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

const defaultCalendlyUrl = "https://calendly.com/samanta-nayak/30min";

export function CalendlyCTA({
  variant = "inline",
  calendlyUrl = defaultCalendlyUrl,
  title = "Schedule a Consultation",
  description = "Choose a time that works for you. Our consultations are free and confidential.",
  buttonText = "Schedule Consultation",
  className = "",
}: CalendlyCTAProps) {
  const [showModal, setShowModal] = useState(false);

  if (variant === "button") {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-md)] bg-linear-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white text-lg font-bold hover:shadow-[var(--shadow-glow-strong)] transition-all duration-300 active:scale-[0.98] ${className}`}
        >
          <Calendar className="w-5 h-5" />
          {buttonText}
        </button>
        {showModal && (
          <CalendlyModal
            url={calendlyUrl}
            onClose={() => setShowModal(false)}
          />
        )}
      </>
    );
  }

  if (variant === "modal") {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 text-sm font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 ${className}`}
        >
          <Calendar className="w-4 h-4" />
          {buttonText}
        </button>
        {showModal && (
          <CalendlyModal
            url={calendlyUrl}
            onClose={() => setShowModal(false)}
          />
        )}
      </>
    );
  }

  // Card variant
  if (variant === "card") {
    return (
      <div className={`p-8 rounded-[var(--radius-xl)] bg-[var(--color-elevated)] border border-[var(--color-border)] shadow-xl ${className}`}>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">{description}</p>
        <button
          onClick={() => setShowModal(true)}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white text-sm font-bold hover:shadow-[var(--shadow-glow)] transition-all duration-300"
        >
          <Calendar className="w-4 h-4" />
          {buttonText}
        </button>
        {showModal && (
          <CalendlyModal
            url={calendlyUrl}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    );
  }

  // Inline variant
  return (
    <div className={`p-10 rounded-[var(--radius-xl)] bg-[var(--color-elevated)] border border-[var(--color-border)] shadow-2xl relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)] opacity-5 blur-[100px] -mr-32 -mt-32" />
      <div className="relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-16 rounded-[var(--radius-lg)] bg-[var(--color-primary)]/10 flex items-center justify-center border border-[var(--color-primary)]/20">
            <Calendar className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-[var(--color-text-secondary)] font-medium">{description}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white text-lg font-bold hover:shadow-[var(--shadow-glow)] transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            {buttonText}
          </button>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-md)] border border-[var(--color-border)] text-white text-lg font-bold hover:bg-white/5 transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            Direct Link
          </a>
        </div>
      </div>
    </div>
  );
}

function CalendlyModal({
  url,
  onClose,
}: {
  url: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="relative w-full max-w-5xl bg-[var(--color-bg)] rounded-[var(--radius-xl)] border border-white/10 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
          <div>
            <h3 className="text-xl font-bold text-white">Schedule Strategy Session</h3>
            <p className="text-sm text-[var(--color-text-muted)] font-medium">Practitioner-led technical discovery</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 rounded-full text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="aspect-video w-full">
          <iframe
            src={url}
            className="w-full h-full border-0"
            title="Schedule Consultation"
          />
        </div>
      </div>
    </div>
  );
}
