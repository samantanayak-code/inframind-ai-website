# Run this script to deploy the MAHSR T-3 case study PDF to the public downloads folder.
# Usage: Right-click → Run with PowerShell   OR   powershell -File deploy_case_study.ps1

$src = "$PSScriptRoot\mahsr-t3-case-study.pdf"
$dst = "$PSScriptRoot\public\downloads\mahsr-t3-case-study.pdf"

if (!(Test-Path $src)) {
    Write-Host "ERROR: Source file not found at $src" -ForegroundColor Red
    Write-Host "Copy mahsr-t3-case-study.pdf from your downloads into this folder first."
    exit 1
}

Copy-Item -Path $src -Destination $dst -Force
Write-Host "Deployed: $dst" -ForegroundColor Green
Write-Host "Redeploy to Vercel with: vercel --prod" -ForegroundColor Cyan
