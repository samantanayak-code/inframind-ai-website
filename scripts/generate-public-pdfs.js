const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, '..', 'public', 'downloads');

const CAPABILITY_HTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @page { margin: 0.75in 0.9in; size: A4; }
  body { font-family: Calibri, Arial, sans-serif; color: #1A202C; font-size: 11pt; line-height: 1.5; }
  .cover { page-break-after: always; text-align: center; padding-top: 180px; }
  .cover h1 { font-size: 28pt; color: #FFFFFF; margin-bottom: 8pt; }
  .cover .subtitle { font-size: 16pt; color: #FFFFFF; margin-bottom: 40pt; }
  .cover .tagline { font-size: 12pt; color: #FFFFFF; opacity: 0.8; }
  .cover .meta { font-size: 11pt; color: #FFFFFF; margin-top: 60pt; }
  h1 { font-size: 20pt; color: #1A365D; margin-top: 24pt; margin-bottom: 12pt; page-break-before: always; }
  h1:first-of-type { page-break-before: avoid; }
  h2 { font-size: 16pt; color: #2B6CB0; margin-top: 18pt; margin-bottom: 8pt; }
  h3 { font-size: 14pt; color: #1A202C; margin-top: 12pt; margin-bottom: 6pt; }
  p { margin: 6pt 0; }
  table { width: 100%; border-collapse: collapse; margin: 12pt 0; font-size: 10pt; }
  th { background: #1A365D; color: #FFFFFF; padding: 6pt 8pt; text-align: left; font-weight: bold; }
  td { padding: 6pt 8pt; border-bottom: 0.5pt solid #A0AEC0; }
  tr:nth-child(even) td { background: #EDF2F7; }
  .callout { background: #EDF2F7; border-left: 4pt solid #38A169; padding: 10pt 14pt; margin: 12pt 0; font-size: 10pt; }
  .disclaimer { font-size: 8pt; color: #A0AEC0; font-style: italic; margin-top: 24pt; }
  .contact { text-align: center; margin-top: 36pt; font-size: 11pt; }
  .contact h2 { color: #1A365D; }
  .footer { font-size: 8pt; color: #A0AEC0; text-align: center; margin-top: 36pt; border-top: 0.5pt solid #A0AEC0; padding-top: 8pt; }
</style>
</head>
<body>

<!-- COVER -->
<div class="cover" style="background:#1A365D; position:absolute; top:0; left:0; right:0; bottom:0; padding:0 0.9in; box-sizing:border-box;">
  <h1>InfraMind EPC</h1>
  <h1 style="font-size:24pt; margin-top:80pt;">Executive Capability Statement</h1>
  <p class="subtitle">Contracts &bull; Claims &bull; Delay Analysis &bull; Operational Intelligence</p>
  <p class="tagline">Digitise. Analyse. Decide.</p>
  <p class="meta">InfraMind EPC &mdash; Capability Statement &mdash; v1.0 &mdash; June 2026</p>
</div>
<div style="height:1050px;"></div>

<!-- PAGE 2: EXECUTIVE SUMMARY -->
<h1>1. Executive Summary</h1>

<p>InfraMind EPC is a practitioner-led advisory and operational intelligence platform serving EPC contractors, infrastructure owners, and project delivery organisations. It was founded from a practical recognition: contracts, claims, planning, delay analysis, and project data are typically managed in separate silos, even though commercial risk moves across them as a single chain.</p>

<p>The firm is built around the expertise of <strong>Samanta Nayak</strong>, a contracts and claims professional with 19 years of EPC infrastructure experience. His background includes FIDIC contract administration on a major high-speed rail programme, ICC arbitration involvement on a railway project, and the development of operational intelligence tools deployed in live project environments.</p>

<p>InfraMind EPC is not a generic consulting proposition. It is an advisory capability grounded in direct delivery experience, evidence-led contractual work, and the ability to connect field realities with structured systems thinking.</p>

<div class="callout">
<strong>Key Point:</strong> InfraMind EPC sits at the intersection of contract administration, delay analysis, and operational intelligence — a combination that no single competitor currently occupies.
</div>

<!-- PAGE 3: DIFFERENTIATED POSITION -->
<h1>2. Differentiated Position</h1>

<p>Most market offerings address only one part of the problem. Planning advisors focus on the schedule. Claims specialists focus on entitlement. Technology vendors focus on workflows. Legal support often enters after the record is already weak.</p>

<p>InfraMind EPC is differentiated by combining four capabilities in a single profile:</p>

<table>
<tr><th>Dimension</th><th>InfraMind EPC Position</th></tr>
<tr><td>Project-side credibility</td><td>Live contracts and claims responsibility on major EPC assignments</td></tr>
<tr><td>Contractual depth</td><td>FIDIC administration, notices, EOT claims, variations, and dispute-facing record discipline</td></tr>
<tr><td>Analytical capability</td><td>Delay analysis, programme review, project-controls integration, and evidence structuring</td></tr>
<tr><td>Systems orientation</td><td>Applied AI and automation concepts shaped by real project workflow problems</td></tr>
</table>

<p>The practical implication is straightforward: the same practitioner who understands how entitlement is preserved is also able to design the workflows and tools that improve how that discipline is executed.</p>

<h2>2.1 Core Belief</h2>
<p>The quality of a claim is determined by the quality of its evidence, not the sophistication of the analysis placed over weak records. Every InfraMind EPC engagement is structured around this principle.</p>

<!-- PAGE 4: CORE CAPABILITIES -->
<h1>3. Core Capabilities</h1>

<h2>3.1 Contracts and Claims Management</h2>
<p>Full FIDIC contract administration from award to completion — notice management, Sub-Clause 20.1 compliance, variation identification, claims preparation, EOT strategy, counter-claim defence, and dispute board management. Every approach is grounded in live project responsibility under FIDIC-governed megaproject conditions.</p>

<h2>3.2 Delay Analysis and EOT Preparation</h2>
<p>Cause-and-effect delay analysis using recognised methodologies — Impacted As-Planned, Time Impact Analysis, Window Analysis, and As-Built vs As-Planned. Contemporaneous record compilation and EOT claim preparation built to international arbitration standards.</p>

<h2>3.3 Project Controls and Planning</h2>
<p>Primavera P6 baseline development, schedule variance analysis, critical path management, resource levelling, and progress reporting. Integrated with claims and contract administration workflows — because weak schedule discipline becomes a commercial and contractual problem.</p>

<h2>3.4 Operational Intelligence and AI Enablement</h2>
<p>Applied work in document intelligence, workflow automation, OCR-led record handling, NCR tracking, and contract-oriented AI tooling for EPC operations. These capabilities are presented with maturity discipline — distinguishing clearly between project-deployed tools, demonstrable assets, and concept-stage modules.</p>

<h2>3.5 Dispute and Arbitration Support</h2>
<p>Expert report preparation, factual witness statements, cross-examination preparation, and tribunal submission support for ICC, DIAC, SIAC, and LCIA proceedings. Includes direct experience as a Fact Witness in ICC arbitration.</p>

<!-- PAGE 5: EVIDENCE BASE -->
<h1>4. Evidence Base</h1>

<p>The evidence underlying InfraMind EPC's positioning comes from Samanta Nayak's direct project track record. This foundation is factual, specific, and defensible.</p>

<table>
<tr><th>Capability</th><th>Evidence</th></tr>
<tr><td>Experience depth</td><td>19 years of EPC infrastructure experience; 10 years in contracts and claims roles at a leading Indian EPC contractor</td></tr>
<tr><td>Megaproject scale</td><td>Contracts and claims responsibility on a multi-thousand crore high-speed rail package under FIDIC Yellow Book with international oversight</td></tr>
<tr><td>Notice discipline</td><td>Full Sub-Clause 20.1 compliance maintained throughout tenure — no time-barred claims</td></tr>
<tr><td>Claims execution</td><td>Multiple EOT claims submitted, all supported by contemporaneous records</td></tr>
<tr><td>Dispute credibility</td><td>ICC Fact Witness role on a railway project arbitration</td></tr>
<tr><td>Operational tooling</td><td>Development of project-side digital tools for EPC records, dashboards, OCR, and contract-support workflows</td></tr>
</table>

<div class="callout">
<strong>Note:</strong> The above metrics reflect Samanta Nayak's direct project experience at a leading EPC contractor — not InfraMind EPC client engagements, which are yet to commence.
</div>

<!-- PAGE 6: SELECTED EXPERIENCE -->
<h1>5. Selected Experience</h1>

<h2>5.1 High-Speed Rail Track Package</h2>
<table>
<tr><th>Attribute</th><th>Detail</th></tr>
<tr><td>Project type</td><td>High-speed rail — ballastless slab track section</td></tr>
<tr><td>Value</td><td>Multi-thousand crore</td></tr>
<tr><td>Contract</td><td>FIDIC Yellow Book with international oversight</td></tr>
<tr><td>Role</td><td>Manager &ndash; Contracts &amp; Claims</td></tr>
<tr><td>Context</td><td>Contract administration, notices, EOT preparation, delay linkage, dispute readiness, and project-record discipline across a major linear infrastructure package</td></tr>
</table>

<h2>5.2 Railway Project — ICC Arbitration</h2>
<table>
<tr><th>Attribute</th><th>Detail</th></tr>
<tr><td>Project type</td><td>Railway project</td></tr>
<tr><td>Value</td><td>Multi-hundred crore</td></tr>
<tr><td>Role</td><td>Assistant Manager &ndash; Contracts; ICC Fact Witness</td></tr>
<tr><td>Context</td><td>Arbitration-linked contracts, claims, delay analysis, evidence preparation, and dispute support through the full arbitration lifecycle</td></tr>
</table>

<h2>5.3 AI Product Deployment</h2>
<table>
<tr><th>Attribute</th><th>Detail</th></tr>
<tr><td>Engagement</td><td>Operational deployment of Digital Twin and NCR Tracker on a live EPC megaproject</td></tr>
<tr><td>Context</td><td>Real-world AI tooling for contract administration and project operations</td></tr>
</table>

<!-- PAGE 7: ENGAGEMENT MODELS -->
<h1>6. Engagement Models</h1>

<p>The following engagement structures represent how InfraMind EPC advisory services are designed to operate. No client engagements are currently active — these are proposed models available for discussion.</p>

<table>
<tr><th>Service</th><th>Target Audience</th><th>Proposed Format</th></tr>
<tr><td>Executive Review</td><td>Project directors, commercial leadership</td><td>Focused diagnostic — contract, claims, delay, or operational-risk assessment</td></tr>
<tr><td>Targeted Workstream Support</td><td>Contracts teams, project controls</td><td>Notice discipline, EOT preparation, records structuring, planning-to-claims alignment</td></tr>
<tr><td>AI Strategy for EPC Operations</td><td>EPC contractors seeking AI adoption</td><td>60&ndash;90 minute initial consultation</td></tr>
<tr><td>Digital Twin Architecture</td><td>Linear infrastructure contractors</td><td>90 minute scoping session</td></tr>
<tr><td>Contract Intelligence Design</td><td>Legal counsel, contracts managers</td><td>60 minutes (NDA-protected)</td></tr>
<tr><td>Expert Advisory</td><td>Legal counsel, expert witnesses</td><td>30&ndash;60 minutes (NDA-protected)</td></tr>
<tr><td>Planning, Scheduling &amp; Programme Controls</td><td>EPC project controls teams</td><td>Scoped per project</td></tr>
<tr><td>Delay Analysis &amp; EOT Claims Support</td><td>Contracts managers, legal counsel, project directors</td><td>Scoped per claim complexity</td></tr>
</table>

<!-- PAGE 8: CREDENTIALS & CONTACT -->
<h1>7. Credentials</h1>

<table>
<tr><th>Area</th><th>Credential</th></tr>
<tr><td>Professional tenure</td><td>19 years of EPC infrastructure experience</td></tr>
<tr><td>Contracts leadership</td><td>10 years in contracts and claims roles at a leading Indian EPC contractor</td></tr>
<tr><td>Arbitration</td><td>ICC Fact Witness on a railway project arbitration</td></tr>
<tr><td>AI capability</td><td>AI Generalist certification; AIG Community Champion 2025</td></tr>
<tr><td>Technical tools</td><td>Primavera P6, TILOS, Oracle Unifier</td></tr>
<tr><td>Domain training</td><td>SCL Delay and Disruption Protocol; FIDIC 1999 and 2017; ICC arbitration procedures</td></tr>
</table>

<div class="contact">
<h2>8. Contact</h2>
<p><strong>Samanta Nayak</strong><br>
Manager &ndash; Contracts &amp; Claims &mdash; Infrastructure AI Architect<br>
InfraMind EPC</p>
<p>Website: <a href="https://www.inframindepc.com">inframindepc.com</a><br>
Contact: <a href="https://www.inframindepc.com/contact">inframindepc.com/contact</a></p>
<p><em>Interested in discussing how operational intelligence can reduce contractual exposure on your project? Schedule a consultation via the website.</em></p>
</div>

<p class="disclaimer">This document is provided for informational purposes only and does not constitute professional advice or a binding offer of services. Engagement structures, timelines, and investment figures are indicative and subject to individual project assessment. Project references have been anonymised to protect confidentiality. InfraMind EPC accepts no liability for actions taken based on this document without prior engagement. &copy; 2026 InfraMind EPC. All rights reserved.</p>

<div class="footer">
InfraMind EPC &mdash; Digitise. Analyse. Decide. &mdash; Capability Statement v1.0 &mdash; June 2026
</div>

</body>
</html>`;

const CASE_STUDY_HTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @page { margin: 0.75in 0.9in; size: A4; }
  body { font-family: Calibri, Arial, sans-serif; color: #1A202C; font-size: 11pt; line-height: 1.5; }
  .cover { page-break-after: always; text-align: center; padding-top: 180px; }
  .cover h1 { font-size: 28pt; color: #FFFFFF; margin-bottom: 8pt; }
  .cover .subtitle { font-size: 16pt; color: #FFFFFF; margin-bottom: 40pt; }
  .cover .tagline { font-size: 12pt; color: #FFFFFF; opacity: 0.8; }
  .cover .meta { font-size: 11pt; color: #FFFFFF; margin-top: 60pt; }
  h1 { font-size: 20pt; color: #1A365D; margin-top: 24pt; margin-bottom: 12pt; }
  h2 { font-size: 16pt; color: #2B6CB0; margin-top: 18pt; margin-bottom: 8pt; }
  h3 { font-size: 14pt; color: #1A202C; margin-top: 12pt; margin-bottom: 6pt; }
  p { margin: 6pt 0; }
  table { width: 100%; border-collapse: collapse; margin: 12pt 0; font-size: 10pt; }
  th { background: #1A365D; color: #FFFFFF; padding: 6pt 8pt; text-align: left; font-weight: bold; }
  td { padding: 6pt 8pt; border-bottom: 0.5pt solid #A0AEC0; }
  tr:nth-child(even) td { background: #EDF2F7; }
  .callout { background: #EDF2F7; border-left: 4pt solid #2B6CB0; padding: 10pt 14pt; margin: 12pt 0; font-size: 10pt; }
  .disclaimer { font-size: 8pt; color: #A0AEC0; font-style: italic; margin-top: 24pt; }
  .contact { text-align: center; margin-top: 24pt; font-size: 11pt; }
  .footer { font-size: 8pt; color: #A0AEC0; text-align: center; margin-top: 24pt; border-top: 0.5pt solid #A0AEC0; padding-top: 8pt; }
  ul, ol { margin: 6pt 0; padding-left: 20pt; }
  li { margin: 3pt 0; }
</style>
</head>
<body>

<!-- COVER -->
<div class="cover" style="background:#1A365D; position:absolute; top:0; left:0; right:0; bottom:0; padding:0 0.9in; box-sizing:border-box;">
  <h1>InfraMind EPC</h1>
  <h1 style="font-size:24pt; margin-top:80pt;">High-Speed Rail Operational Intelligence</h1>
  <p class="subtitle" style="font-size:18pt;">A Practitioner-Built Case Study in Correspondence Workflow Automation</p>
  <p class="tagline">Digitise. Analyse. Decide.</p>
  <p class="meta">InfraMind EPC &mdash; Case Study &mdash; v1.0 &mdash; June 2026</p>
</div>
<div style="height:1050px;"></div>

<!-- PAGE 2 -->
<h1>Executive Summary</h1>

<p>This case study describes a targeted automation developed to address a correspondence management bottleneck on a large high-speed rail programme. The engineering, procurement, and construction (EPC) contractor's contracts team faced 3&ndash;4 hours of daily manual effort extracting, renaming, and archiving contractual correspondence from Oracle Primavera Unifier.</p>

<p>A practitioner-built automation script reduced batch processing time from 3&ndash;4 hours to approximately 15 minutes, improved archive quality from inconsistent to structured and retrieval-ready, and strengthened the project record available for claims support and audit readiness.</p>

<div class="callout">
<strong>Key Point:</strong> The case demonstrates how targeted automation at a specific process bottleneck can materially improve contract administration efficiency — without requiring enterprise-scale system transformation.
</div>

<h2>Project Context</h2>

<table>
<tr><th>Attribute</th><th>Detail</th></tr>
<tr><td>Project type</td><td>High-speed rail corridor</td></tr>
<tr><td>Contract form</td><td>FIDIC Yellow Book with international oversight</td></tr>
<tr><td>Project value</td><td>Multi-thousand crore</td></tr>
<tr><td>Contractor</td><td>Major Indian EPC contractor</td></tr>
<tr><td>Work scope</td><td>Extended ballastless slab track section</td></tr>
</table>

<p class="disclaimer">Project details have been anonymised to protect client confidentiality.</p>

<!-- PAGE 3 -->
<h1>The Operational Problem</h1>

<p>Before automation, the contracts team spent hours each day downloading correspondence from Oracle Primavera Unifier, renaming files individually, and placing them into the correct folder structure. This was not only slow; it created significant operational risk.</p>

<p><strong>The specific exposure included:</strong></p>
<ul>
<li>Missed or delayed retrieval of correspondence due to processing backlog</li>
<li>Inconsistent archive structure across team members</li>
<li>Manual filing errors that weakened the project record</li>
<li>Slower evidence compilation during claims preparation and audit requests</li>
</ul>

<p>The root cause was not a lack of effort — it was a process designed around manual repetition rather than systematic workflow. The team was skilled and diligent, but the process itself created the bottleneck.</p>

<h2>Operational Constraints</h2>
<ul>
<li><strong>System limitation:</strong> Oracle Primavera Unifier required individual record-by-record extraction; no native batch export for correspondence</li>
<li><strong>Process constraint:</strong> Each file required manual renaming following an established convention; naming errors created retrieval problems</li>
<li><strong>Resource constraint:</strong> The contracts team had limited bandwidth; hours spent on extraction reduced time available for review, analysis, and dispute preparation</li>
<li><strong>Audit requirement:</strong> The project record had to be maintained to a standard that could support ICC arbitration proceedings</li>
</ul>

<!-- PAGE 4 -->
<h1>Approach</h1>

<p>The automation was designed around a single principle: replicate the manual process with more consistency and speed, not redesign the workflow from scratch. This minimised adoption friction and allowed the solution to be deployed without changes to the existing Unifier configuration or IT approval.</p>

<p><strong>Design principles:</strong></p>
<ul>
<li>Minimal user intervention — the script navigated the Unifier interface automatically</li>
<li>No additional licensing cost — built using commonly available tools</li>
<li>Completeness-focused — every correspondence record in the queue was processed</li>
<li>Structured output — files were named and organised for immediate retrieval</li>
</ul>

<h1>Implementation</h1>

<p>The solution was developed incrementally over approximately two weeks, with testing conducted on a subset of correspondence before full deployment.</p>

<p><strong>Implementation phases:</strong></p>
<ol>
<li><strong>Analysis:</strong> Mapped the manual workflow step by step, identifying every decision point and file-handling operation</li>
<li><strong>Script development:</strong> Built the automation bridge between the Unifier interface and the file archive</li>
<li><strong>Validation:</strong> Tested against known correspondence sets; verified naming accuracy and completeness</li>
<li><strong>Deployment:</strong> Integrated into the weekly correspondence processing cycle</li>
<li><strong>Refinement:</strong> Adjusted based on team feedback and edge cases discovered during live use</li>
</ol>

<!-- PAGE 5 -->
<h1>Measured Outcomes</h1>

<p>The following results relate to direct project experience on a high-speed rail programme and should be understood as project-specific operational outcomes.</p>

<table>
<tr><th>Measure</th><th>Before</th><th>After</th><th>Improvement</th></tr>
<tr><td>Time per processing batch</td><td>3&ndash;4 hours</td><td>~15 minutes</td><td>Approx. 85&ndash;90% reduction</td></tr>
<tr><td>Archive quality</td><td>Inconsistent, manual errors</td><td>Structured, retrieval-friendly</td><td>Significant quality improvement</td></tr>
<tr><td>Team availability</td><td>Limited time for contract review</td><td>15+ hours per week recovered</td><td>Reallocated to analysis and claims preparation</td></tr>
</table>

<div class="callout">
<strong>Note:</strong> These percentages are project-specific. Results on other projects may vary based on correspondence volume, system configuration, and team structure.
</div>

<h1>Why It Matters</h1>

<p>The significance of this case extends beyond productivity improvement. It demonstrates three principles relevant to any EPC contracts team:</p>
<ul>
<li><strong>Useful automation</strong> can start from a very specific process bottleneck — it does not require enterprise transformation</li>
<li><strong>The best solutions</strong> are often shaped by the practitioner doing the work, not by external consultants</li>
<li><strong>Small operational tools</strong> can materially improve the quality of contract records that later become critical in claims and disputes</li>
</ul>

<!-- PAGE 6 -->
<h1>Lessons Learned</h1>

<table>
<tr><th>Aspect</th><th>Finding</th></tr>
<tr><td>What worked</td><td>Starting with a narrow, well-defined bottleneck allowed rapid deployment and immediate visible impact</td></tr>
<tr><td>What could differ</td><td>Earlier involvement of the IT team would have simplified integration testing; the script was initially developed independently</td></tr>
<tr><td>Surprising insight</td><td>The quality improvement to the project record was as valuable as the time saving — a cleaner archive made claims preparation measurably faster</td></tr>
<tr><td>Generalisable principle</td><td>Process bottlenecks in contract administration are often accepted as "just how it is" — but targeted automation can resolve them without large budgets or system changes</td></tr>
</table>

<h1>Replicability</h1>

<p>This approach is replicable on projects where:</p>
<ul>
<li>Oracle Primavera Unifier (or similar document management system) is used for correspondence</li>
<li>The correspondence volume creates a measurable manual processing burden</li>
<li>The team has authority to introduce workflow improvements within their scope</li>
<li>The existing archive structure can serve as the target format</li>
</ul>

<p><strong>Limitations:</strong> This approach is not a substitute for enterprise document management strategy. Organisations with high-volume, multi-project correspondence may require platform-level solutions rather than project-specific automation.</p>

<!-- PAGE 7: CONTACT -->
<div class="contact">
<h2>Contact</h2>
<p><strong>Samanta Nayak</strong><br>
Manager &ndash; Contracts &amp; Claims &mdash; Infrastructure AI Architect<br>
InfraMind EPC</p>
<p>Website: <a href="https://www.inframindepc.com">inframindepc.com</a><br>
Contact: <a href="https://www.inframindepc.com/contact">inframindepc.com/contact</a></p>
<p><em>If your project faces a similar correspondence management challenge, schedule a 30-minute exploratory discussion.</em></p>
</div>

<p class="disclaimer">This document presents project-based operational outcomes linked to a high-speed rail programme. Results are project-specific. Any future commercialisation or deployment of the described automation should be positioned separately from this project-specific outcome. Project details have been anonymised to protect confidentiality. &copy; 2026 InfraMind EPC. All rights reserved.</p>

<div class="footer">
InfraMind EPC &mdash; Digitise. Analyse. Decide. &mdash; Case Study v1.0 &mdash; June 2026
</div>

</body>
</html>`;

async function main() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  
  const documents = [
    { name: 'InfraMind-EPC-Capability-Statement.pdf', html: CAPABILITY_HTML },
    { name: 'InfraMind-EPC-High-Speed-Rail-Operational-Intelligence-Case-Study.pdf', html: CASE_STUDY_HTML },
  ];

  for (const doc of documents) {
    console.log(`Generating ${doc.name}...`);
    const page = await browser.newPage();
    await page.setContent(doc.html, { waitUntil: 'networkidle0' });
    
    const pdfPath = path.join(OUTPUT_DIR, doc.name);
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '0.75in', bottom: '0.75in', left: '0.9in', right: '0.9in' },
    });
    
    const stats = fs.statSync(pdfPath);
    console.log(`  ✓ Created: ${doc.name} (${(stats.size / 1024).toFixed(0)} KB)`);
    await page.close();
  }

  await browser.close();
  console.log('All PDFs generated successfully.');
}

main().catch(err => {
  console.error('PDF generation failed:', err);
  process.exit(1);
});
