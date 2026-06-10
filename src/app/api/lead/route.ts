import { NextRequest, NextResponse } from "next/server";

function getRecipients(): string {
  return process.env.CONTACT_RECIPIENTS || process.env.CONTACT_EMAIL || "samanta.nayak@gmail.com";
}

function formatTimestamp(): string {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function buildEnquiryBody(fields: Record<string, unknown>, source: string): string {
  const lines = [
    `Submitted: ${formatTimestamp()} IST`,
    `Source: ${source}`,
    "",
  ];

  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined && value !== null && value !== "") {
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (s) => s.toUpperCase())
        .trim();
      lines.push(`${label}: ${value}`);
    }
  }

  return lines.join("\n");
}

function resolveSource(body: Record<string, unknown>): string {
  if (body.source === "quick-enquiry") {
    return "Quick Enquiry";
  }
  return "Capability Statement Download";
}

function resolveSubject(source: string): string {
  return `InfraMind EPC | ${source}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const source = resolveSource(body);
    const recipients = getRecipients();
    const emailBody = buildEnquiryBody(body, source);

    console.log(`[Lead] Submission — ${name} <${email}> (${source})`, JSON.stringify(body));

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "InfraMind AI <noreply@inframindepc.com>",
        to: recipients,
        subject: resolveSubject(source),
        text: emailBody,
      });

      if (source === "Quick Enquiry") {
        await resend.emails.send({
          from: "InfraMind AI <noreply@inframindepc.com>",
          to: email,
          subject: "Thank you for your enquiry — InfraMind EPC",
          text: `Dear ${name},

Thank you for reaching out to InfraMind EPC.

We have received your enquiry and will respond within 2 business days.

In the meantime, you may find these resources helpful:
- Case Studies: https://inframind.ai/case-studies
- Products: https://inframind.ai/products
- Capability Statement: https://inframind.ai/about

Best regards,
Samanta Nayak
InfraMind EPC`,
        });
      } else {
        await resend.emails.send({
          from: "InfraMind AI <noreply@inframindepc.com>",
          to: email,
          subject: "Your Capability Statement — InfraMind EPC",
          text: `Dear ${name},

Thank you for your interest in InfraMind EPC.

Please find attached the Capability Statement for your review.

In the meantime, you may find these resources helpful:
- Case Studies: https://inframind.ai/case-studies
- Products: https://inframind.ai/products
- Automation: https://inframind.ai/automations

We will follow up within 2 business days to discuss how our capabilities can support your project.

Best regards,
Samanta Nayak
InfraMind EPC`,
        });
      }

      console.log(`[Lead] Notification sent to ${recipients}, auto-reply sent to ${email}`);
    } else {
      console.log("[Lead] RESEND_API_KEY not configured. Email NOT sent.");
      console.log("[Lead] Preview body:", emailBody);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Lead] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
