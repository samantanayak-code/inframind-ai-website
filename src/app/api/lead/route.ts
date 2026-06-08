import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, company, email, role, interestArea } = body;

    if (!name || !company || !email || !role || !interestArea) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailContent = `
New Capability Statement Download Request

Name: ${name}
Company: ${company}
Email: ${email}
Role: ${role}
Interest Area: ${interestArea}

Source: Capability Statement Hub
Timestamp: ${new Date().toISOString()}
    `.trim();

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "InfraMind AI <noreply@inframind.ai>",
        to: process.env.CONTACT_EMAIL || "samanta.nayak@gmail.com",
        subject: `Capability Statement Download — ${name} (${interestArea})`,
        text: emailContent,
      });

      await resend.emails.send({
        from: "InfraMind AI <noreply@inframind.ai>",
        to: email,
        subject: "Your Capability Statement — InfraMind AI",
        text: `Dear ${name},

Thank you for your interest in InfraMind AI.

Please find attached the Capability Statement for your review.

In the meantime, you may find these resources helpful:
- Case Studies: https://inframind.ai/case-studies
- Products: https://inframind.ai/products
- Automation: https://inframind.ai/automations

We will follow up within 2 business days to discuss how our capabilities can support your project.

Best regards,
Samanta Nayak
InfraMind AI`,
      });
    } else {
      console.log("Lead capture submission (email not sent - RESEND_API_KEY not configured):", emailContent);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
