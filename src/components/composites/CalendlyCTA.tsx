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

const defaultCalendlyUrl = "https://calendly.com/inframind-ai/discovery";

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
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-infrastructure-600 text-white text-sm font-medium hover:bg-infrastructure-500 transition-colors ${className}`}
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

  if (variant === "modal") {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-infrastructure-600 text-white text-sm font-medium hover:bg-infrastructure-500 transition-colors ${className}`}
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
      <div className={`p-5 rounded-xl bg-graphite-800 border border-graphite-700 ${className}`}>
        <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
        <p className="text-xs text-graphite-400 mb-3">{description}</p>
        <button
          onClick={() => setShowModal(true)}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-infrastructure-600 text-white text-sm font-medium hover:bg-infrastructure-500 transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
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
    <div className={`p-6 rounded-xl bg-graphite-800 border border-graphite-700 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-infrastructure-500/10 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-infrastructure-400" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="text-xs text-graphite-400">{description}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setShowModal(true)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-infrastructure-600 text-white text-sm font-medium hover:bg-infrastructure-500 transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          {buttonText}
        </button>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-graphite-700 text-graphite-400 text-sm hover:text-white hover:border-graphite-600 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Open
        </a>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 bg-graphite-900 rounded-xl border border-graphite-700 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-graphite-700">
          <div>
            <h3 className="text-lg font-semibold text-white">Schedule a Consultation</h3>
            <p className="text-sm text-graphite-400">Choose a time that works for you</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-graphite-400 hover:text-white hover:bg-graphite-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="aspect-[4/3] w-full">
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
