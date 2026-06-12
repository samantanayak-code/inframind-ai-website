export const DOWNLOAD_ALLOWLIST: readonly string[] = [
  '/downloads/InfraMind-EPC-Capability-Statement.pdf',
  '/downloads/InfraMind-EPC-High-Speed-Rail-Operational-Intelligence-Case-Study.pdf',
];

export function isDownloadAllowed(fileUrl: string | undefined): boolean {
  if (!fileUrl) return false;
  return DOWNLOAD_ALLOWLIST.includes(fileUrl);
}
