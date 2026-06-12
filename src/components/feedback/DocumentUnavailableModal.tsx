"use client";

import { useEffect, useCallback } from "react";
import { X, FileWarning } from "lucide-react";
import Link from "next/link";

interface DocumentUnavailableModalProps {
  open: boolean;
  onClose: () => void;
}

export function DocumentUnavailableModal({ open, onClose }: DocumentUnavailableModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-[var(--color-elevated)] rounded-[var(--radius-xl)] border border-[var(--color-border)] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 flex items-center justify-center border border-[var(--color-primary)]/20">
              <FileWarning className="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Documentation Update in Progress</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[var(--color-text-muted)] hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Thank you for your interest in InfraMind EPC.
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            We are currently updating and enhancing our documentation to reflect our latest capabilities, products and service offerings.
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            The revised documents will be available within the next few days.
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            We appreciate your patience and look forward to sharing the updated documentation soon.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 p-6 pt-0">
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-[var(--radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 text-sm px-[var(--space-3)] py-[var(--space-2)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-white/5 h-10"
          >
            Close
          </button>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-[var(--radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 text-sm px-[var(--space-4)] py-[var(--space-2)] bg-linear-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white hover:shadow-[var(--shadow-glow-strong)] shadow-[var(--shadow-glow)] border border-white/10 h-10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
