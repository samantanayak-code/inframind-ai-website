// validate_assets.js
// This script validates PDFs and PPTX files in the public/downloads directory.
// It checks that each PDF can be loaded, has more than one page, and is not empty.
// For PPTX, it checks that the file is a valid zip archive containing slide XML.

const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');
const AdmZip = require('adm-zip');

const downloadsDir = path.join(__dirname, 'public', 'downloads');

async function validatePDF(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(data);
    const pageCount = pdfDoc.getPageCount();
    const size = data.length;
    if (size === 0) return { status: 'FAIL', reason: 'Empty file' };
    if (pageCount < 2) return { status: 'FAIL', reason: `Only ${pageCount} page(s)` };
    // Basic branding check placeholder – in real validation we'd inspect content.
    return { status: 'PASS' };
  } catch (e) {
    return { status: 'FAIL', reason: e.message };
  }
}

function validatePPTX(filePath) {
  try {
    const zip = new AdmZip(filePath);
    const entries = zip.getEntries().map(e => e.entryName);
    const hasSlides = entries.some(name => name.match(/^ppt\/slides\/slide\d+\.xml$/));
    if (!hasSlides) return { status: 'FAIL', reason: 'No slide XML found' };
    return { status: 'PASS' };
  } catch (e) {
    return { status: 'FAIL', reason: e.message };
  }
}

async function main() {
  const reportLines = [];
  const files = fs.readdirSync(downloadsDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const fullPath = path.join(downloadsDir, file);
    if (ext === '.pdf') {
      const result = await validatePDF(fullPath);
      reportLines.push(`${file}: ${result.status}${result.reason ? ' - ' + result.reason : ''}`);
    } else if (ext === '.pptx') {
      const result = validatePPTX(fullPath);
      reportLines.push(`${file}: ${result.status}${result.reason ? ' - ' + result.reason : ''}`);
    }
  }
  const report = reportLines.join('\n');
  fs.writeFileSync(path.join(__dirname, 'VALIDATION_REPORT.md'), report);
  console.log('Validation complete. Report written to VALIDATION_REPORT.md');
}

main();
