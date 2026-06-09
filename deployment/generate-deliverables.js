const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const PptxGenJS = require('pptxgenjs');

const DEPLOYMENT_DIR = path.join(__dirname);
const FINAL_DIR = path.join(DEPLOYMENT_DIR, 'final-deliverables');
const ASSETS_DIR = path.join(DEPLOYMENT_DIR, 'assets');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Brand colors
const COLORS = {
  primary: '#2A6094',
  background: '#111827',
  surface: '#1F2937',
  textPrimary: '#D1D5DB',
  textSecondary: '#9CA3AF',
  cyan: '#06B6D4',
  green: '#10B981',
  purple: '#8B5CF6',
  pink: '#EC4899',
  yellow: '#F59E0B',
};

function readMarkdown() {
  const md = fs.readFileSync(path.join(DEPLOYMENT_DIR, 'CAPABILITY_STATEMENT_FINAL.md'), 'utf8');
  return md;
}

function markdownToHtml(md) {
  // Simple markdown to HTML conversion
  let html = md;
  
  // Headers
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  
  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  
  // Images
  html = html.replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="file://' + path.join(DEPLOYMENT_DIR, '$2').replace(/\\/g, '/') + '" alt="$1" class="diagram" />');
  
  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr />');
  
  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  
  // Tables
  html = html.replace(/\|(.+)\|/g, (match) => {
    const cells = match.split('|').filter(c => c.trim());
    if (cells.every(c => c.trim().match(/^-+$/))) {
      return ''; // Skip separator rows
    }
    const isHeader = cells.some(c => c.trim().match(/^-+$/));
    const tag = 'td';
    const row = '<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>';
    return row;
  });
  
  // Wrap tables
  html = html.replace(/((?:<tr>.+<\/tr>\n?)+)/g, (match) => {
    return '<table>' + match + '</table>';
  });
  
  // Lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.+<\/li>\n?)+)/g, '<ul>$1</ul>');
  
  // Paragraphs (lines that aren't already wrapped)
  html = html.split('\n').map(line => {
    if (line.trim() === '') return '';
    if (line.startsWith('<')) return line;
    return `<p>${line}</p>`;
  }).join('\n');
  
  return html;
}

function generateFullHtml(bodyContent) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: ${COLORS.background};
      color: ${COLORS.textPrimary};
      font-size: 11pt;
      line-height: 1.6;
    }
    
    @page {
      size: A4;
      margin: 20mm;
    }
    
    .page {
      page-break-after: always;
      min-height: 257mm;
      padding: 20mm;
      background: ${COLORS.background};
    }
    
    .page:last-child {
      page-break-after: avoid;
    }
    
    /* Cover page */
    .cover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 257mm;
    }
    
    .cover img {
      width: 120px;
      height: 120px;
      margin-bottom: 40px;
    }
    
    .cover h1 {
      font-size: 48pt;
      font-weight: 700;
      color: ${COLORS.textPrimary};
      margin-bottom: 16px;
    }
    
    .cover .subtitle {
      font-size: 18pt;
      color: ${COLORS.textSecondary};
      margin-bottom: 24px;
    }
    
    .cover .tagline {
      font-size: 14pt;
      color: ${COLORS.primary};
      margin-bottom: 40px;
    }
    
    .cover .date {
      font-size: 12pt;
      color: ${COLORS.textSecondary};
    }
    
    .cover .confidential {
      position: absolute;
      bottom: 20mm;
      font-size: 8pt;
      color: ${COLORS.textSecondary};
    }
    
    /* Content pages */
    h1 {
      font-size: 24pt;
      font-weight: 700;
      color: ${COLORS.textPrimary};
      margin-bottom: 24px;
      padding-bottom: 8px;
      border-bottom: 2px solid ${COLORS.primary};
    }
    
    h2 {
      font-size: 18pt;
      font-weight: 700;
      color: ${COLORS.textPrimary};
      margin-top: 24px;
      margin-bottom: 16px;
    }
    
    h3 {
      font-size: 14pt;
      font-weight: 600;
      color: ${COLORS.textPrimary};
      margin-top: 16px;
      margin-bottom: 12px;
    }
    
    p {
      margin-bottom: 12px;
      color: ${COLORS.textPrimary};
    }
    
    strong {
      color: ${COLORS.textPrimary};
      font-weight: 600;
    }
    
    a {
      color: ${COLORS.primary};
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 10pt;
    }
    
    th {
      background: ${COLORS.surface};
      color: ${COLORS.textPrimary};
      font-weight: 600;
      text-align: left;
      padding: 10px 12px;
      border: 1px solid #374151;
    }
    
    td {
      padding: 8px 12px;
      border: 1px solid #374151;
      color: ${COLORS.textPrimary};
    }
    
    tr:nth-child(even) {
      background: rgba(31, 41, 55, 0.5);
    }
    
    hr {
      border: none;
      border-top: 1px solid #374151;
      margin: 24px 0;
    }
    
    blockquote {
      border-left: 4px solid ${COLORS.primary};
      padding: 16px 20px;
      margin: 16px 0;
      background: rgba(42, 96, 148, 0.1);
      font-style: italic;
      color: ${COLORS.textPrimary};
    }
    
    ul {
      margin: 12px 0;
      padding-left: 24px;
    }
    
    li {
      margin-bottom: 8px;
      color: ${COLORS.textPrimary};
    }
    
    .diagram {
      width: 100%;
      max-width: 100%;
      height: auto;
      margin: 16px 0;
      border-radius: 8px;
    }
    
    .cta-box {
      background: ${COLORS.primary};
      color: white;
      padding: 16px 20px;
      border-radius: 8px;
      text-align: center;
      margin: 24px 0;
    }
    
    .cta-box a {
      color: white;
      font-weight: 600;
    }
    
    .footer {
      position: fixed;
      bottom: 10mm;
      left: 20mm;
      right: 20mm;
      font-size: 8pt;
      color: ${COLORS.textSecondary};
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #374151;
      padding-top: 8px;
    }
    
    .header {
      position: fixed;
      top: 10mm;
      left: 20mm;
      right: 20mm;
      font-size: 8pt;
      color: ${COLORS.textSecondary};
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #374151;
      padding-bottom: 8px;
    }
  </style>
</head>
<body>
  ${bodyContent}
</body>
</html>`;
}

async function generatePdf() {
  console.log('Generating PDF...');
  
  const md = readMarkdown();
  const bodyHtml = markdownToHtml(md);
  const fullHtml = generateFullHtml(bodyHtml);
  
  // Save HTML for debugging
  fs.writeFileSync(path.join(FINAL_DIR, 'capability-statement.html'), fullHtml);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
  
  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');
  
  const pdfPath = path.join(FINAL_DIR, 'InfraMind_AI_Capability_Statement_v2.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      right: '20mm',
      bottom: '20mm',
      left: '20mm'
    }
  });
  
  await browser.close();
  
  const stats = fs.statSync(pdfPath);
  console.log(`PDF generated: ${pdfPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
  
  return { path: pdfPath, size: stats.size };
}

async function generatePptx() {
  console.log('Generating PPTX...');
  
  const pptx = new PptxGenJS();
  
  // Set presentation properties
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'InfraMind EPC';
  pptx.company = 'InfraMind EPC';
  pptx.subject = 'Executive Capability Statement';
  pptx.title = 'InfraMind EPC - Executive Capability Statement';
  
  // Common slide background
  const slideBg = { color: '111827' };
  
  // Common text styles
  const titleStyle = { 
    fontSize: 36, 
    fontFace: 'Arial', 
    color: 'D1D5DB',
    bold: true 
  };
  
  const headingStyle = { 
    fontSize: 24, 
    fontFace: 'Arial', 
    color: 'D1D5DB',
    bold: true 
  };
  
  const bodyStyle = { 
    fontSize: 14, 
    fontFace: 'Arial', 
    color: 'D1D5DB' 
  };
  
  const accentStyle = { 
    fontSize: 14, 
    fontFace: 'Arial', 
    color: '2A6094',
    bold: true 
  };
  
  const tableHeaderStyle = {
    fontSize: 11,
    fontFace: 'Arial',
    color: 'FFFFFF',
    bold: true,
    fill: { color: '2A6094' },
    align: 'left',
    valign: 'middle'
  };
  
  const tableCellStyle = {
    fontSize: 10,
    fontFace: 'Arial',
    color: 'D1D5DB',
    fill: { color: '1F2937' },
    align: 'left',
    valign: 'middle'
  };
  
  // Slide 1: Cover
  let slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('InfraMind AI', { 
    x: 0, y: 2.5, w: '100%', h: 1, 
    fontSize: 48, fontFace: 'Arial', color: 'D1D5DB', bold: true, align: 'center' 
  });
  slide.addText('Executive Capability Statement', { 
    x: 0, y: 3.5, w: '100%', h: 0.5, 
    fontSize: 18, fontFace: 'Arial', color: '9CA3AF', align: 'center' 
  });
  slide.addText('AI-Enabled EPC Operational Intelligence', { 
    x: 0, y: 4.2, w: '100%', h: 0.5, 
    fontSize: 14, fontFace: 'Arial', color: '2A6094', align: 'center' 
  });
  slide.addText('June 2026', { 
    x: 0, y: 5.0, w: '100%', h: 0.4, 
    fontSize: 12, fontFace: 'Arial', color: '9CA3AF', align: 'center' 
  });
  slide.addText('Confidential — For Intended Recipient Only', { 
    x: 0, y: 6.8, w: '100%', h: 0.3, 
    fontSize: 8, fontFace: 'Arial', color: '9CA3AF', align: 'center' 
  });
  
  // Slide 2: Executive Summary
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('Executive Summary', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  slide.addText([
    { text: 'InfraMind EPC ', options: { bold: true, color: '2A6094' } },
    { text: 'delivers practitioner-built AI operational intelligence systems for EPC megaprojects. Founded by ', options: { color: 'D1D5DB' } },
    { text: 'Samanta Nayak', options: { bold: true, color: 'D1D5DB' } },
    { text: ' — a 20+ year EPC infrastructure veteran and ICC Arbitration Fact Witness — InfraMind EPC encodes real-world contract administration expertise into deployed AI-augmented systems.', options: { color: 'D1D5DB' } }
  ], { x: 0.5, y: 1.0, w: 9, h: 1.2, fontSize: 12, fontFace: 'Arial', valign: 'top' });
  
  slide.addText('Mission: Eliminate the information lag that transforms manageable risks into costly disputes on infrastructure megaprojects.', { 
    x: 0.5, y: 2.3, w: 9, h: 0.6, fontSize: 12, fontFace: 'Arial', color: '9CA3AF', italic: true 
  });
  
  slide.addText('The Rarest Combination', { x: 0.5, y: 3.0, w: 9, h: 0.5, ...accentStyle });
  
  const credRows = [
    [{ text: 'Dimension', options: tableHeaderStyle }, { text: 'Capability', options: tableHeaderStyle }],
    [{ text: 'Experience', options: tableCellStyle }, { text: '20+ years EPC infrastructure', options: tableCellStyle }],
    [{ text: 'Domain', options: tableCellStyle }, { text: 'FIDIC contract administration, claims & dispute resolution', options: tableCellStyle }],
    [{ text: 'Technical', options: tableCellStyle }, { text: 'AI engineering, full-stack development', options: tableCellStyle }],
    [{ text: 'Credibility', options: tableCellStyle }, { text: 'ICC Arbitration Fact Witness', options: tableCellStyle }],
    [{ text: 'Deployment', options: tableCellStyle }, { text: 'Live on MAHSR T-3 (INR 3,142 Crore FIDIC Yellow Book)', options: tableCellStyle }]
  ];
  slide.addTable(credRows, { x: 0.5, y: 3.5, w: 9, colW: [2.5, 6.5] });
  
  slide.addText('Ready to explore how operational intelligence can reduce contractual exposure on your project?', { 
    x: 0.5, y: 5.8, w: 9, h: 0.5, fontSize: 12, fontFace: 'Arial', color: 'D1D5DB', bold: true, align: 'center' 
  });
  slide.addText('Schedule a consultation: https://inframind-ai-website.vercel.app/contact', { 
    x: 0.5, y: 6.3, w: 9, h: 0.4, fontSize: 11, fontFace: 'Arial', color: '2A6094', align: 'center' 
  });
  
  // Slide 3: Product Portfolio
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('Operational Intelligence Products', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  const productRows = [
    [{ text: 'Product', options: tableHeaderStyle }, { text: 'Category', options: tableHeaderStyle }, { text: 'Status', options: tableHeaderStyle }, { text: 'Key Metric', options: tableHeaderStyle }],
    [{ text: 'MAHSR T-3 Digital Twin', options: tableCellStyle }, { text: 'Operational Intelligence', options: tableCellStyle }, { text: 'Production', options: tableCellStyle }, { text: '75% MIS effort reduction', options: tableCellStyle }],
    [{ text: 'NCR Tracker', options: tableCellStyle }, { text: 'Quality Intelligence', options: tableCellStyle }, { text: 'Production', options: tableCellStyle }, { text: '40%+ faster closure', options: tableCellStyle }],
    [{ text: 'Contract Forensics', options: tableCellStyle }, { text: 'Contract Intelligence', options: tableCellStyle }, { text: 'Demonstrable', options: tableCellStyle }, { text: 'Weeks → Hours review', options: tableCellStyle }],
    [{ text: 'OCR Intelligence', options: tableCellStyle }, { text: 'Document Intelligence', options: tableCellStyle }, { text: 'Demonstrable', options: tableCellStyle }, { text: '98%+ accuracy', options: tableCellStyle }]
  ];
  slide.addTable(productRows, { x: 0.5, y: 1.0, w: 9, colW: [2.5, 2.5, 1.5, 2.5] });
  
  // Slide 4: Four-Layer Architecture
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('Four-Layer Architecture', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  // Try to add the diagram image
  const archDiagramPath = path.join(ASSETS_DIR, 'four-layer-architecture.svg');
  if (fs.existsSync(archDiagramPath)) {
    // Convert SVG to PNG for PPTX (PptxGenJS doesn't support SVG directly)
    // For now, add a placeholder text
    slide.addText('Four-Layer Architecture Diagram\n\nLayer 4: Evidence — Structured documentation aligned with contractual and evidentiary requirements\nLayer 3: Decision — AI-powered contract analysis\nLayer 2: Intelligence — Operational intelligence & analytics\nLayer 1: Data Capture — Document digitization & OCR', { 
      x: 0.5, y: 1.0, w: 9, h: 5, fontSize: 12, fontFace: 'Arial', color: 'D1D5DB', valign: 'top' 
    });
  }
  
  // Slide 5: MAHSR T-3 Deployment
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('MAHSR T-3 Deployment', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  slide.addText('Mumbai-Ahmedabad High-Speed Rail — T-3 Track Package', { x: 0.5, y: 0.9, w: 9, h: 0.4, ...accentStyle });
  
  const mahsrRows = [
    [{ text: 'Metric', options: tableHeaderStyle }, { text: 'Value', options: tableHeaderStyle }],
    [{ text: 'Contract Value', options: tableCellStyle }, { text: 'INR 3,142 Crore', options: tableCellStyle }],
    [{ text: 'Contract Form', options: tableCellStyle }, { text: 'FIDIC Yellow Book', options: tableCellStyle }],
    [{ text: 'Scope', options: tableCellStyle }, { text: '115.877 km (Vadodara to Sabarmati)', options: tableCellStyle }],
    [{ text: 'Oversight', options: tableCellStyle }, { text: 'JICA / JICC', options: tableCellStyle }],
    [{ text: 'Employer', options: tableCellStyle }, { text: 'NHSRCL', options: tableCellStyle }],
    [{ text: 'Contractor', options: tableCellStyle }, { text: 'Larsen & Toubro Limited', options: tableCellStyle }]
  ];
  slide.addTable(mahsrRows, { x: 0.5, y: 1.4, w: 9, colW: [3, 6] });
  
  slide.addText('Governance: JICA (Funding Agency) → NHSRCL (Employer) → JICC (Engineer / PMC) → L&T Limited (Contractor)', { 
    x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 11, fontFace: 'Arial', color: '9CA3AF' 
  });
  
  // Slide 6: Representative Project Experience
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('Representative Project Experience', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  const repRows = [
    [{ text: 'Project', options: tableHeaderStyle }, { text: 'Role', options: tableHeaderStyle }, { text: 'Scope', options: tableHeaderStyle }],
    [{ text: 'MAHSR T-3 Track Package', options: tableCellStyle }, { text: 'Manager — Contracts & Claims, L&T', options: tableCellStyle }, { text: 'FIDIC Yellow Book contract administration for 115.877 km of high-speed rail', options: tableCellStyle }],
    [{ text: 'ICC Arbitration', options: tableCellStyle }, { text: 'Fact Witness', options: tableCellStyle }, { text: 'Dispute resolution and expert testimony in international arbitration', options: tableCellStyle }],
    [{ text: 'AI Product Deployment', options: tableCellStyle }, { text: 'Founder, InfraMind AI', options: tableCellStyle }, { text: 'Operational deployment of Digital Twin and NCR Tracker on live EPC megaprojects', options: tableCellStyle }]
  ];
  slide.addTable(repRows, { x: 0.5, y: 1.0, w: 9, colW: [2.5, 2.5, 4] });
  
  // Slide 7: Services
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('EPC Intelligence Consulting', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  const svcRows = [
    [{ text: 'Service', options: tableHeaderStyle }, { text: 'Target Client', options: tableHeaderStyle }, { text: 'Duration', options: tableHeaderStyle }],
    [{ text: 'AI Strategy Consulting', options: tableCellStyle }, { text: 'EPC contractors seeking AI adoption', options: tableCellStyle }, { text: '60-90 min', options: tableCellStyle }],
    [{ text: 'Digital Twin Architecture', options: tableCellStyle }, { text: 'EPC contractors on linear infrastructure', options: tableCellStyle }, { text: '90 min', options: tableCellStyle }],
    [{ text: 'Contract Intelligence Design', options: tableCellStyle }, { text: 'Legal counsel and contracts managers', options: tableCellStyle }, { text: '60 min (NDA)', options: tableCellStyle }],
    [{ text: 'Expert Advisory', options: tableCellStyle }, { text: 'Legal counsel and expert witnesses', options: tableCellStyle }, { text: '30-60 min (NDA)', options: tableCellStyle }],
    [{ text: 'Planning, Scheduling & Programme Controls', options: tableCellStyle }, { text: 'EPC contractors and project controls teams', options: tableCellStyle }, { text: '60 min', options: tableCellStyle }],
    [{ text: 'Delay Analysis, EOT & Claims Support', options: tableCellStyle }, { text: 'Contract managers, legal counsel, project directors', options: tableCellStyle }, { text: '60 min (NDA)', options: tableCellStyle }]
  ];
  slide.addTable(svcRows, { x: 0.5, y: 1.0, w: 9, colW: [3.5, 3.5, 2] });
  
  // Slide 8: Credentials
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('Credentials', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  slide.addText([
    { text: '• 20+ Years EPC Infrastructure Experience\n', options: { color: 'D1D5DB' } },
    { text: '  Manager — Contracts & Claims, Larsen & Toubro Limited\n\n', options: { color: '9CA3AF', fontSize: 11 } },
    { text: '• ICC Arbitration Fact Witness\n', options: { color: 'D1D5DB' } },
    { text: '  Dispute resolution and expert testimony\n\n', options: { color: '9CA3AF', fontSize: 11 } },
    { text: '• AI Generalist Certification\n', options: { color: 'D1D5DB' } },
    { text: '  Outskill — Applied AI for business\n\n', options: { color: '9CA3AF', fontSize: 11 } },
    { text: '• AIG Community Champion 2025\n', options: { color: 'D1D5DB' } },
    { text: '  AI community leadership', options: { color: '9CA3AF', fontSize: 11 } }
  ], { x: 0.5, y: 1.0, w: 9, h: 4, fontSize: 13, fontFace: 'Arial', valign: 'top' });
  
  // Slide 9: Target Stakeholders
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('Target Stakeholders', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  const stakeRows = [
    [{ text: 'Stakeholder', options: tableHeaderStyle }, { text: 'Value Proposition', options: tableHeaderStyle }],
    [{ text: 'EPC Contractors', options: tableCellStyle }, { text: 'Operational intelligence, reduced contractual exposure', options: tableCellStyle }],
    [{ text: 'PMCs', options: tableCellStyle }, { text: 'Real-time project visibility, automated quality tracking', options: tableCellStyle }],
    [{ text: 'Infrastructure Owners', options: tableCellStyle }, { text: 'Structured records, dispute prevention', options: tableCellStyle }],
    [{ text: 'Government Authorities', options: tableCellStyle }, { text: 'Compliance dashboards, audit-ready documentation', options: tableCellStyle }],
    [{ text: 'Rail Projects', options: tableCellStyle }, { text: 'Chainage-referenced corridor intelligence', options: tableCellStyle }],
    [{ text: 'Arbitration Support', options: tableCellStyle }, { text: 'Prepared in a manner suitable for supporting dispute avoidance and resolution', options: tableCellStyle }]
  ];
  slide.addTable(stakeRows, { x: 0.5, y: 1.0, w: 9, colW: [3, 6] });
  
  // Slide 10: AI Capability Matrix
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('AI Capability Matrix', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  const aiRows = [
    [{ text: 'Technology', options: tableHeaderStyle }, { text: 'Application', options: tableHeaderStyle }, { text: 'Status', options: tableHeaderStyle }],
    [{ text: 'Large Language Models (LLM)', options: tableCellStyle }, { text: 'Contract clause extraction, report generation', options: tableCellStyle }, { text: 'Production', options: tableCellStyle }],
    [{ text: 'OCR with AI Enhancement', options: tableCellStyle }, { text: 'Document digitization, handwritten recognition', options: tableCellStyle }, { text: 'Production', options: tableCellStyle }],
    [{ text: 'Rule-Based Automation', options: tableCellStyle }, { text: 'FIDIC notice monitoring, NCR escalation', options: tableCellStyle }, { text: 'Production', options: tableCellStyle }],
    [{ text: 'Pattern Detection Analytics', options: tableCellStyle }, { text: 'Systemic quality analysis, claim patterns', options: tableCellStyle }, { text: 'Pilot', options: tableCellStyle }],
    [{ text: 'Prompt Engineering', options: tableCellStyle }, { text: 'Domain-calibrated FIDIC/EPC workflows', options: tableCellStyle }, { text: 'Production', options: tableCellStyle }]
  ];
  slide.addTable(aiRows, { x: 0.5, y: 1.0, w: 9, colW: [3, 4.5, 1.5] });
  
  // Slide 11: Vision
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('Vision', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  slide.addText('"To make operational intelligence the default state of EPC megaproject administration — eliminating the information lag that transforms manageable risks into costly disputes."', { 
    x: 1, y: 1.5, w: 8, h: 2, fontSize: 16, fontFace: 'Arial', color: 'D1D5DB', italic: true, align: 'center', valign: 'middle' 
  });
  
  // Slide 12: Contact (Back Cover)
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('InfraMind AI', { 
    x: 0, y: 2.0, w: '100%', h: 1, 
    fontSize: 36, fontFace: 'Arial', color: 'D1D5DB', bold: true, align: 'center' 
  });
  slide.addText('AI-Enabled EPC Operational Intelligence', { 
    x: 0, y: 3.0, w: '100%', h: 0.5, 
    fontSize: 14, fontFace: 'Arial', color: '2A6094', align: 'center' 
  });
  
  slide.addText([
    { text: 'Samanta Nayak\n', options: { bold: true, color: 'D1D5DB', fontSize: 14 } },
    { text: 'Manager — Contracts & Claims | Infrastructure AI Architect\n\n', options: { color: '9CA3AF', fontSize: 11 } },
    { text: 'Website: https://inframind-ai-website.vercel.app\n', options: { color: 'D1D5DB', fontSize: 12 } },
    { text: 'Contact: https://inframind-ai-website.vercel.app/contact\n', options: { color: 'D1D5DB', fontSize: 12 } },
    { text: 'LinkedIn: https://linkedin.com', options: { color: 'D1D5DB', fontSize: 12 } }
  ], { x: 1, y: 4.0, w: 8, h: 2, fontFace: 'Arial', align: 'center', valign: 'top' });
  
  slide.addText('Digitise. Analyse. Decide.', { 
    x: 0, y: 6.0, w: '100%', h: 0.4, 
    fontSize: 14, fontFace: 'Arial', color: '9CA3AF', align: 'center' 
  });
  
  slide.addText('Ready to discuss how operational intelligence can reduce contractual exposure on your project?', { 
    x: 0.5, y: 6.5, w: 9, h: 0.4, 
    fontSize: 12, fontFace: 'Arial', color: 'D1D5DB', bold: true, align: 'center' 
  });
  slide.addText('Schedule a consultation: https://inframind-ai-website.vercel.app/contact', { 
    x: 0.5, y: 6.9, w: 9, h: 0.3, 
    fontSize: 11, fontFace: 'Arial', color: '2A6094', align: 'center' 
  });
  
  slide.addText('Confidential — For Intended Recipient Only', { 
    x: 0, y: 7.1, w: '100%', h: 0.3, 
    fontSize: 8, fontFace: 'Arial', color: '9CA3AF', align: 'center' 
  });
  
  // Save PPTX
  const pptxPath = path.join(FINAL_DIR, 'InfraMind_AI_Capability_Statement_v2.pptx');
  await pptx.writeFile({ fileName: pptxPath });
  
  const stats = fs.statSync(pptxPath);
  console.log(`PPTX generated: ${pptxPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
  
  return { path: pptxPath, size: stats.size };
}

async function main() {
  try {
    console.log('=== InfraMind AI Capability Statement Generator ===\n');
    
    // Generate PDF
    const pdfResult = await generatePdf();
    console.log('');
    
    // Generate PPTX
    const pptxResult = await generatePptx();
    console.log('');
    
    console.log('=== Generation Complete ===');
    console.log(`PDF: ${pdfResult.path}`);
    console.log(`PPTX: ${pptxResult.path}`);
    
  } catch (error) {
    console.error('Generation failed:', error);
    process.exit(1);
  }
}

main();
