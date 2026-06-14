"use client";

import { useState } from "react";
import { Button } from "@/components/primitives/Button";
import { Download, FileText, FilePieChart, ShieldCheck } from "lucide-react";
import { DocumentUnavailableModal } from "@/components/feedback/DocumentUnavailableModal";
import { isDownloadAllowed } from "@/lib/config";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  type: "Technical Specification" | "Capability Statement" | "Brochure" | "Case Study";
  fileSize?: string;
}

export function ResourceCard({ title, description, href, type, fileSize }: ResourceCardProps) {
  const [showModal, setShowModal] = useState(false);
  const Icon = type === "Case Study" ? FilePieChart : type === "Capability Statement" ? ShieldCheck : FileText;

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="p-8 rounded-[var(--radius-xl)] bg-[var(--color-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-[var(--shadow-glow)]">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 flex items-center justify-center border border-[var(--color-primary)]/20 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] bg-white/5 px-3 py-1 rounded-full border border-white/5">
            {type}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--color-border)]">
          {fileSize && (
            <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
              PDF • {fileSize}
            </span>
          )}
          {isDownloadAllowed(href) ? (
            <Button href={href} variant="primary" size="sm" className="h-11 px-5 group">
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-[-1px] transition-transform duration-200" />
              Download
            </Button>
          ) : (
            <Button variant="primary" size="sm" className="h-11 px-5 group" onClick={handleClick}>
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-[-1px] transition-transform duration-200" />
              Download
            </Button>
          )}
        </div>
      </div>
      <DocumentUnavailableModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
