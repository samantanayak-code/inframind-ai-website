"use client";

import React from "react";

export function InfrastructureIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Infrastructure Assets */}
      <rect x="40" y="120" width="60" height="80" rx="4" fill="#2A6094" fillOpacity="0.2" stroke="#2A6094" strokeWidth="2" />
      <path d="M40 160H100" stroke="#2A6094" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M70 120V200" stroke="#2A6094" strokeWidth="2" strokeDasharray="4 4" />
      <text x="70" y="220" fill="#F9FAFB" fontSize="12" textAnchor="middle" fontWeight="500">Assets</text>

      {/* Connection Flow 1 */}
      <path d="M110 160H160" stroke="#4F8CC9" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M155 155L165 160L155 165V155Z" fill="#4F8CC9" />

      {/* Operational Data */}
      <circle cx="200" cy="160" r="40" fill="#2A6094" fillOpacity="0.2" stroke="#2A6094" strokeWidth="2" />
      <path d="M185 150H215M185 160H215M185 170H215" stroke="#2A6094" strokeWidth="2" />
      <text x="200" y="220" fill="#F9FAFB" fontSize="12" textAnchor="middle" fontWeight="500">Data</text>

      {/* Connection Flow 2 */}
      <path d="M250 160H300" stroke="#4F8CC9" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M295 155L305 160L295 165V155Z" fill="#4F8CC9" />

      {/* Decision Intelligence */}
      <rect x="310" y="130" width="60" height="60" rx="30" fill="#4F8CC9" fillOpacity="0.2" stroke="#4F8CC9" strokeWidth="2" />
      <path d="M340 145V175M325 160H355" stroke="#4F8CC9" strokeWidth="2" />
      <circle cx="340" cy="160" r="5" fill="#4F8CC9" />
      <text x="340" y="220" fill="#F9FAFB" fontSize="12" textAnchor="middle" fontWeight="500">Intelligence</text>

      {/* Background Grid Lines for Technical Aesthetic */}
      <path d="M0 50H400M0 100H400M0 250H400" stroke="#374151" strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M100 0V300M200 0V300M300 0V300" stroke="#374151" strokeWidth="0.5" strokeOpacity="0.3" />
    </svg>
  );
}
