const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const PptxGenJS = require('pptxgenjs');

const PUBLIC_DOWNLOADS_DIR = path.join(__dirname, '..', 'public', 'downloads');
const LOGO_MARK_PATH = path.join(__dirname, '..', 'public', 'logo-mark.svg');
const LOGO_PRIMARY_PATH = path.join(__dirname, '..', 'public', 'logo-primary.svg');

// Create downloads directory if not exists
if (!fs.existsSync(PUBLIC_DOWNLOADS_DIR)) {
  fs.mkdirSync(PUBLIC_DOWNLOADS_DIR, { recursive: true });
}

// Brand Colors
const COLORS = {
  background: '#111827', // dark charcoal-gray
  surface: '#1F2937',    // slightly lighter card bg
  border: '#374151',     // thin divider line
  primary: '#2A6094',    // infrastructure blue
  accent: '#06B6D4',     // cyan
  success: '#10B981',    // green
  textPrimary: '#D1D5DB',// light gray text
  textSecondary: '#9CA3AF'
};

const logoSvg = fs.readFileSync(LOGO_PRIMARY_PATH, 'utf8')
  .replace(/width="\d+"/, 'width="150"')
  .replace(/height="\d+"/, 'height="40"');

const logoMarkSvg = fs.readFileSync(LOGO_MARK_PATH, 'utf8')
  .replace(/width="\d+"/, 'width="80"')
  .replace(/height="\d+"/, 'height="80"');

// Ingestion List
const filesToGenerate = [
  {
    source: path.join(__dirname, 'CAPABILITY_STATEMENT_FINAL.md'),
    target: 'capability-statement.pdf',
    title: 'InfraMind EPC — Capability Statement'
  },
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\ADVISORY_SUITE_MASTER_BROCHURE.md',
    target: 'advisory-suite-overview.pdf',
    title: 'InfraMind EPC — Advisory Suite Overview'
  },
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\PLANNING_SCHEDULING_FINAL_RELEASE.md',
    target: 'planning-scheduling-brochure.pdf',
    title: 'InfraMind EPC — Planning & Scheduling Brochure'
  },
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\DELAY_ANALYSIS_EOT_FINAL_RELEASE.md',
    target: 'delay-analysis-eot-brochure.pdf',
    title: 'InfraMind EPC — Delay Analysis & EOT Brochure'
  },
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\CONTRACTS_CLAIMS_FINAL_RELEASE.md',
    target: 'contracts-claims-brochure.pdf',
    title: 'InfraMind EPC — Contracts & Claims Brochure'
  },
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\CONTRACTS_CLAIMS_ONE_PAGE_FLYER.md',
    target: 'contracts-claims-flyer.pdf',
    title: 'InfraMind EPC — Contracts & Claims Flyer'
  },
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\UNIFIER_SYNC_ONE_PAGER.md',
    target: 'unifier-sync-one-pager.pdf',
    title: 'InfraMind EPC — Unifier Sync One-Pager'
  },
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\UNIFIER_SYNC_CASE_STUDY.md',
    target: 'unifier-sync-case-study.pdf',
    title: 'InfraMind EPC — Unifier Sync Case Study'
  },
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\FIDIC_NOTICE_MONITOR_ONE_PAGER.md',
    target: 'fidic-notice-monitor-one-pager.pdf',
    title: 'InfraMind EPC — FIDIC Notice Monitor One-Pager'
  },
  // REMOVED: fidic-notice-monitor-demo-script.pdf — internal sales tool, not a portfolio asset
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\FIDIC_CLAIMS_INTELLIGENCE_SUITE_OVERVIEW.md',
    target: 'fidic-claims-intelligence-suite-overview.pdf',
    title: 'InfraMind EPC — FIDIC Claims Suite Executive Overview'
  },
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\EOT_EVENT_LOG_COMPILER_SPEC.md',
    target: 'eot-event-log-compiler-spec.pdf',
    title: 'InfraMind EPC — EOT Event Log Compiler Spec'
  },
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\CLAIM_NARRATIVE_DRAFTER_SPEC.md',
    target: 'claim-narrative-drafter-spec.pdf',
    title: 'InfraMind EPC — Claim Narrative Drafter Spec'
  },
  {
    source: 'd:\\AI-APP\\PORTFOLIO\\deployment\\LETTER_DRAFTER_EPC_SPEC.md',
    target: 'letter-drafter-epc-spec.pdf',
    title: 'InfraMind EPC — Letter Drafter EPC Spec'
  }
];

function markdownToHtml(md) {
  let html = md;

  // Clean metadata blocks at the start of files
  html = html.replace(/^---[\s\S]+?---/, '');

  // Headers (must be multiline matching)
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  
  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  
  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr />');
  
  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  
  // Tables
  html = html.replace(/\|(.+)\|/g, (match) => {
    const cells = match.split('|').filter(c => c.trim() !== '');
    if (cells.every(c => c.trim().match(/^-+$/))) {
      return ''; // Skip separator rows
    }
    const row = '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
    return row;
  });
  
  // Wrap tables
  html = html.replace(/((?:<tr>.+<\/tr>\n?)+)/g, (match) => {
    return '<table>' + match + '</table>';
  });
  
  // Unordered Lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.+<\/li>\n?)+)/g, '<ul>$1</ul>');

  // Convert double newlines to paragraphs
  const paragraphs = html.split('\n\n');
  html = paragraphs.map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<table') || p.startsWith('<ul') || p.startsWith('<block') || p.startsWith('<hr')) {
      return p;
    }
    return `<p>${p}</p>`;
  }).join('\n');
  
  return html;
}

function generateFullHtml(bodyContent, title) {
  // Extract cover page details if first element is h1
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body {
      font-family: 'Inter', sans-serif;
      background: ${COLORS.background};
      color: ${COLORS.textPrimary};
      font-size: 10.5pt;
      line-height: 1.6;
    }
    
    @page {
      size: A4;
      margin: 20mm;
      @bottom-right {
        content: counter(page);
        font-family: 'Inter', sans-serif;
        font-size: 8pt;
        color: ${COLORS.textSecondary};
      }
    }
    
    .document-container {
      padding: 5mm;
    }

    /* Cover Page styling */
    .cover-page {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 250mm;
      page-break-after: always;
      position: relative;
    }

    .cover-logo {
      margin-bottom: 30px;
    }

    .cover-title {
      font-size: 32pt;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 15px;
      line-height: 1.2;
    }

    .cover-subtitle {
      font-size: 16pt;
      color: ${COLORS.textSecondary};
      margin-bottom: 40px;
      max-width: 80%;
    }

    .cover-meta {
      margin-top: auto;
      font-size: 10pt;
      color: ${COLORS.textSecondary};
      border-top: 1px solid ${COLORS.border};
      padding-top: 20px;
      width: 80%;
      display: flex;
      justify-content: space-between;
    }

    /* Document content styling */
    .content-body {
      page-break-before: always;
    }
    
    h1 {
      font-size: 22pt;
      font-weight: 700;
      color: #FFFFFF;
      margin-top: 30px;
      margin-bottom: 20px;
      padding-bottom: 8px;
      border-bottom: 2px solid ${COLORS.primary};
      page-break-after: avoid;
    }
    
    h2 {
      font-size: 16pt;
      font-weight: 600;
      color: #FFFFFF;
      margin-top: 25px;
      margin-bottom: 12px;
      page-break-after: avoid;
    }
    
    h3 {
      font-size: 12pt;
      font-weight: 600;
      color: ${COLORS.textPrimary};
      margin-top: 18px;
      margin-bottom: 8px;
      page-break-after: avoid;
    }
    
    p {
      margin-bottom: 12px;
      color: ${COLORS.textPrimary};
    }
    
    strong {
      color: #FFFFFF;
      font-weight: 600;
    }
    
    a {
      color: ${COLORS.accent};
      text-decoration: none;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 9.5pt;
      page-break-inside: avoid;
    }
    
    th {
      background: ${COLORS.surface};
      color: #FFFFFF;
      font-weight: 600;
      text-align: left;
      padding: 10px 12px;
      border: 1px solid ${COLORS.border};
    }
    
    td {
      padding: 8px 12px;
      border: 1px solid ${COLORS.border};
      color: ${COLORS.textPrimary};
    }
    
    tr:nth-child(even) {
      background: rgba(31, 41, 55, 0.4);
    }
    
    hr {
      border: none;
      border-top: 1px solid ${COLORS.border};
      margin: 24px 0;
    }
    
    blockquote {
      border-left: 4px solid ${COLORS.primary};
      padding: 12px 18px;
      margin: 16px 0;
      background: rgba(42, 96, 148, 0.1);
      font-style: italic;
      color: ${COLORS.textPrimary};
      page-break-inside: avoid;
    }
    
    ul {
      margin: 12px 0;
      padding-left: 20px;
    }
    
    li {
      margin-bottom: 6px;
    }

    code {
      font-family: 'JetBrains Mono', monospace;
      background: ${COLORS.surface};
      padding: 2px 4px;
      border-radius: 4px;
      font-size: 9pt;
      color: ${COLORS.accent};
    }

    pre {
      background: ${COLORS.surface};
      border: 1px solid ${COLORS.border};
      padding: 16px;
      border-radius: 6px;
      margin: 16px 0;
      overflow-x: auto;
      page-break-inside: avoid;
    }

    pre code {
      background: transparent;
      padding: 0;
      color: ${COLORS.textPrimary};
    }

    .header-layout {
      position: fixed;
      top: -15mm;
      left: 0;
      right: 0;
      height: 10mm;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${COLORS.border};
      padding-bottom: 5px;
      font-size: 8pt;
      color: ${COLORS.textSecondary};
    }

    .footer-layout {
      position: fixed;
      bottom: -15mm;
      left: 0;
      right: 0;
      height: 10mm;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid ${COLORS.border};
      padding-top: 5px;
      font-size: 8pt;
      color: ${COLORS.textSecondary};
    }
  </style>
</head>
<body>
  <div class="document-container">
    <!-- Cover Page -->
    <div class="cover-page">
      <div class="cover-logo">${logoMarkSvg}</div>
      <div class="cover-title">${title.replace('InfraMind EPC — ', '')}</div>
      <div class="cover-subtitle">InfraMind EPC Operational Deliverable Portfolio</div>
      <div class="cover-meta">
        <div>Author: Samanta Nayak</div>
        <div>Date: June 2026</div>
        <div>inframindepc.com</div>
      </div>
    </div>

    <!-- Running Header and Footer -->
    <div class="header-layout">
      <div>${logoSvg}</div>
      <div>${title}</div>
    </div>
    <div class="footer-layout">
      <div>InfraMind EPC</div>
      <div>inframindepc.com</div>
    </div>

    <!-- Main Content -->
    <div class="content-body">
      ${bodyContent}
    </div>
  </div>
</body>
</html>`;
}

async function generatePptx() {
  console.log('Generating PowerPoint: capability-statement.pptx...');
  
  const pptx = new PptxGenJS();
  
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'InfraMind EPC';
  pptx.company = 'InfraMind EPC';
  pptx.subject = 'Executive Capability Statement';
  pptx.title = 'InfraMind EPC - Executive Capability Statement';
  
  const slideBg = { color: '111827' };
  
  const headingStyle = { 
    fontSize: 24, 
    fontFace: 'Arial', 
    color: 'D1D5DB',
    bold: true 
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
  
  // Slide 2: Executive Summary
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('Executive Summary', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  slide.addText([
    { text: 'InfraMind AI ', options: { bold: true, color: '2A6094' } },
    { text: 'delivers practitioner-built AI operational intelligence systems for EPC megaprojects. Founded by ', options: { color: 'D1D5DB' } },
    { text: 'Samanta Nayak', options: { bold: true, color: 'D1D5DB' } },
    { text: ' — a 20+ year EPC infrastructure veteran and ICC Arbitration Fact Witness — InfraMind AI encodes real-world contract administration expertise into deployed AI-augmented systems.', options: { color: 'D1D5DB' } }
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
  
  // Slide 4: MAHSR T-3 Deployment
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
  
  // Slide 5: Services
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('EPC Intelligence Consulting', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  const svcRows = [
    [{ text: 'Service', options: tableHeaderStyle }, { text: 'Target Client', options: tableHeaderStyle }, { text: 'Duration', options: tableHeaderStyle }],
    [{ text: 'AI Strategy Consulting', options: tableCellStyle }, { text: 'EPC contractors seeking AI adoption', options: tableCellStyle }, { text: '60-90 min', options: tableCellStyle }],
    [{ text: 'Digital Twin Architecture', options: tableCellStyle }, { text: 'EPC contractors on linear infrastructure', options: tableCellStyle }, { text: '90 min', options: tableCellStyle }],
    [{ text: 'Contract Intelligence Design', options: tableCellStyle }, { text: 'Legal counsel and contracts managers', options: tableCellStyle }, { text: '60 min (NDA)', options: tableCellStyle }],
    [{ text: 'Expert Advisory', options: tableCellStyle }, { text: 'Legal counsel and expert witnesses', options: tableCellStyle }, { text: '30-60 min (NDA)', options: tableCellStyle }],
    [{ text: 'Planning & Scheduling Advisory', options: tableCellStyle }, { text: 'EPC contractors and project controls teams', options: tableCellStyle }, { text: '60 min', options: tableCellStyle }],
    [{ text: 'Delay Analysis & EOT Support', options: tableCellStyle }, { text: 'Contract managers, legal counsel, project directors', options: tableCellStyle }, { text: '60 min (NDA)', options: tableCellStyle }]
  ];
  slide.addTable(svcRows, { x: 0.5, y: 1.0, w: 9, colW: [3.5, 3.5, 2] });
  
  // Slide 6: Contact
  slide = pptx.addSlide();
  slide.background = slideBg;
  slide.addText('Contact Details', { x: 0.5, y: 0.3, w: 9, h: 0.6, ...headingStyle });
  
  slide.addText([
    { text: 'Samanta Nayak\n', options: { bold: true, color: 'D1D5DB', fontSize: 18 } },
    { text: 'Manager — Contracts & Claims | Infrastructure AI Architect\n\n', options: { color: '9CA3AF', fontSize: 13 } },
    { text: 'Website: https://inframindepc.com\n', options: { color: 'D1D5DB', fontSize: 14 } },
    { text: 'Contact: https://inframindepc.com/contact\n', options: { color: 'D1D5DB', fontSize: 14 } }
  ], { x: 0.5, y: 1.5, w: 9, h: 2, fontFace: 'Arial', valign: 'top' });
  
  const pptxPath = path.join(PUBLIC_DOWNLOADS_DIR, 'capability-statement.pptx');
  await pptx.writeFile({ fileName: pptxPath });
  
  const stats = fs.statSync(pptxPath);
  console.log(`PPTX generated and copied: ${pptxPath} (${(stats.size / 1024).toFixed(2)} KB)`);
  return stats.size;
}

async function main() {
  try {
    console.log('=== InfraMind AI Unified PDF/PPTX Generator ===\n');
    
    // Initialize Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();

    for (const file of filesToGenerate) {
      console.log(`Processing: ${path.basename(file.source)} -> ${file.target}...`);
      
      if (!fs.existsSync(file.source)) {
        console.warn(`[WARNING] Source file not found: ${file.source}. Skipping.`);
        continue;
      }
      
      const mdContent = fs.readFileSync(file.source, 'utf8');
      const bodyHtml = markdownToHtml(mdContent);
      const fullHtml = generateFullHtml(bodyHtml, file.title);
      
      // Set page content
      await page.setContent(fullHtml, { waitUntil: 'domcontentloaded' });
      
      // Wait for fonts
      await page.evaluateHandle('document.fonts.ready');
    await new Promise(resolve => setTimeout(resolve, 500));
      
      const outputPath = path.join(PUBLIC_DOWNLOADS_DIR, file.target);
      
      await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '25mm',
          right: '20mm',
          bottom: '25mm',
          left: '20mm'
        }
      });
      
      const stats = fs.statSync(outputPath);
      console.log(`Success: Generated ${file.target} (${(stats.size / 1024).toFixed(2)} KB)`);
    }
    
    await browser.close();
    console.log('\nAll PDFs generated successfully.');
    
    // Generate PPTX
    await generatePptx();
    
    console.log('\n=== Generation Pipeline Complete ===');
    
  } catch (error) {
    console.error('\nGeneration pipeline failed:', error);
    process.exit(1);
  }
}

main();
