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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const source = "Website Contact Enquiry";
    const recipients = getRecipients();
    const emailBody = buildEnquiryBody(body, source);

    console.log(`[Contact] Submission — ${name} <${email}>`, JSON.stringify(body));

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "InfraMind AI <noreply@inframindepc.com>",
        to: recipients,
        subject: `InfraMind EPC | ${source}`,
        text: emailBody,
      });

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

      console.log(`[Contact] Notification sent to ${recipients}, auto-reply sent to ${email}`);
    } else {
      console.log("[Contact] RESEND_API_KEY not configured. Email NOT sent.");
      console.log("[Contact] Preview body:", emailBody);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
