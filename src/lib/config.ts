export const DOWNLOAD_ALLOWLIST: readonly string[] = [
  '/downloads/01_capability-statement.pdf',
  '/downloads/02_delay-analysis-eot-brochure.pdf',
  '/downloads/03_contracts-claims-brochure.pdf',
  '/downloads/04_letter-drafter-epc-spec.pdf',
  '/downloads/05_claim-narrative-drafter-spec.pdf',
  '/downloads/06_fidic-claims-intelligence-suite-overview.pdf',
  '/downloads/07_eot-event-log-compiler-spec.pdf',
  '/downloads/08_fidic-notice-monitor-one-pager.pdf',
  '/downloads/10_unifier-sync-one-pager.pdf',
  '/downloads/11_planning-scheduling-brochure.pdf',
  '/downloads/13_advisory-suite-overview.pdf',
  '/downloads/InfraMind-EPC-High-Speed-Rail-Operational-Intelligence-Case-Study.pdf',
  '/downloads/InfraMind_EPC_Capability_Statement.pptx',
];

export function isDownloadAllowed(fileUrl: string | undefined): boolean {
  if (!fileUrl) return false;
  return DOWNLOAD_ALLOWLIST.includes(fileUrl);
}
