"use client";

import { useState } from "react";
import { FileText, Presentation, Download, FileDown } from "lucide-react";
import { DocumentUnavailableModal } from "@/components/feedback/DocumentUnavailableModal";
import { config } from "@/lib/config";

interface DownloadCardProps {
  title: string;
  format: "PDF" | "PPT" | "DOCX";
  version: string;
  lastUpdated: string;
  fileSize?: string;
  description?: string;
  fileUrl?: string;
}

const formatIcons = {
  PDF: FileText,
  PPT: Presentation,
  DOCX: FileDown,
};

const formatColors = {
  PDF: "text-error-light bg-error/10",
  PPT: "text-warning-light bg-warning/10",
  DOCX: "text-info-light bg-info/10",
};

export function DownloadCard({
  title,
  format,
  version,
  lastUpdated,
  fileSize,
  description,
  fileUrl,
}: DownloadCardProps) {
  const [showModal, setShowModal] = useState(false);
  const Icon = formatIcons[format];
  const colorClass = formatColors[format];

  const handleClick = () => {
    if (config.DOCUMENT_DOWNLOADS_ENABLED) {
      if (fileUrl) {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      return;
    }
    setShowModal(true);
  };

  return (
    <>
      <div className="p-6 rounded-xl bg-graphite-800 border border-graphite-700 hover:border-infrastructure-500/50 transition-colors">
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${colorClass}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
            {description && <p className="text-xs text-graphite-400 mb-2">{description}</p>}
            <div className="flex items-center gap-3 text-xs text-graphite-500">
              <span className="font-mono">{format}</span>
              <span>{version}</span>
              {fileSize && <span>{fileSize}</span>}
              <span>Updated {lastUpdated}</span>
            </div>
          </div>
          <button
            onClick={handleClick}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-infrastructure-600 text-white text-sm font-medium hover:bg-infrastructure-500 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </button>
        </div>
      </div>
      <DocumentUnavailableModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
