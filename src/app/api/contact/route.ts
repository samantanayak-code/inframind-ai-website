import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, organization, email, phone, projectName, contractType, contractValue, primaryChallenge, projectDescription, consultationType, preferredDate, preferredTime, howDidYouHear, additionalNotes } = body;

    if (!name || !organization || !email || !projectName || !contractType || !contractValue || !primaryChallenge || !projectDescription || !consultationType || !preferredDate || !preferredTime || !howDidYouHear) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailContent = `
New Consultation Request

Name: ${name}
Organization: ${organization}
Email: ${email}
Phone: ${phone || "Not provided"}

Project: ${projectName}
Contract Type: ${contractType}
Contract Value: ${contractValue}
Primary Challenge: ${primaryChallenge}
Project Description: ${projectDescription}

Consultation Type: ${consultationType}
Preferred Date: ${preferredDate}
Preferred Time: ${preferredTime}

How Did You Hear: ${howDidYouHear}
Additional Notes: ${additionalNotes || "None"}
    `.trim();

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "InfraMind AI <noreply@inframind.ai>",
        to: process.env.CONTACT_EMAIL || "samanta.nayak@gmail.com",
        subject: `Consultation Request — ${projectName} (${consultationType})`,
        text: emailContent,
      });

      await resend.emails.send({
        from: "InfraMind AI <noreply@inframind.ai>",
        to: email,
        subject: "Thank you for your consultation request — InfraMind AI",
        text: `Dear ${name},\n\nThank you for your consultation request regarding ${projectName}.\n\nWe have received your submission and will respond within 2 business days.\n\nIn the meantime, you may find these resources helpful:\n- Case Studies: https://inframind.ai/case-studies\n- Products: https://inframind.ai/products\n- Capability Statement: https://inframind.ai/about\n\nBest regards,\nSamanta Nayak\nInfraMind AI`,
      });
    } else {
      console.log("Contact form submission (email not sent - RESEND_API_KEY not configured):", emailContent);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
