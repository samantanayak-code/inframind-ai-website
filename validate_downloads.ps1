## Validation script for downloadable assets
# This PowerShell script checks the existence and basic file header of each PDF and PPTX asset.
# It reports PASS if the file exists and has the expected header signature,
# otherwise it reports FAIL with a reason.

$files = @(
    "public/downloads/capability-statement.pdf",
    "public/downloads/capability-statement.pptx",
    "public/downloads/Advisory Suite Overview.pdf",
    "public/downloads/Planning & Scheduling.pdf",
    "public/downloads/Delay Analysis & EOT.pdf",
    "public/downloads/Contracts & Claims.pdf",
    "public/downloads/Unifier Sync One-Pager.pdf",
    "public/downloads/FIDIC Notice Monitor One-Pager.pdf"
)

$results = @()
foreach ($f in $files) {
    if (-not (Test-Path $f)) {
        $results += [pscustomobject]@{File=$f;Status="FAIL";Reason="File not found"}
        continue
    }
    $bytes = Get-Content -Path $f -Encoding Byte -TotalCount 4
    if ($f -like "*.pdf") {
        if ($bytes[0] -eq 0x25 -and $bytes[1] -eq 0x50 -and $bytes[2] -eq 0x44 -and $bytes[3] -eq 0x46) {
            $status = "PASS"
        } else {
            $status = "FAIL"
            $reason = "Invalid PDF header"
        }
    } elseif ($f -like "*.pptx") {
        if ($bytes[0] -eq 0x50 -and $bytes[1] -eq 0x4b -and $bytes[2] -eq 0x03 -and $bytes[3] -eq 0x04) {
            $status = "PASS"
        } else {
            $status = "FAIL"
            $reason = "Invalid PPTX header"
        }
    } else {
        $status = "UNKNOWN"
    }
    if ($status -eq "PASS") {
        $results += [pscustomobject]@{File=$f;Status=$status}
    } else {
        $results += [pscustomobject]@{File=$f;Status=$status;Reason=$reason}
    }
}

$results | ConvertTo-Json -Depth 3
