// File: app/api/contact/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  // parse & validate body
  const body = await request.json().catch(() => ({}));
  const { email, subject, message } = body;

  if (!email || !subject || !message) {
    return NextResponse.json(
      {
        error:
          "Missing required fields: email, subject, and message are all required.",
      },
      { status: 400 }
    );
  }

  try {
    // Send notification to yourself
    const adminNotification = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>", // Use Resend's default domain until verification is complete
      to: process.env.FROM_EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      reply_to: email,
      html: `
        <h1>New Portfolio Contact</h1>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message}</p>
      `, // Using HTML instead of React for better compatibility
    });

    // Send confirmation to the person who submitted the form
    const userConfirmation = await resend.emails.send({
      from: "Tomiwa Aluko <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for your message",
      html: `
        <h1>Thank You</h1>
        <p>I've received your message about "${subject}" and will review it shortly.</p>
        <p>I'll get back to you as soon as possible.</p>
        <hr />
        <p>Best regards,</p>
        <p>Tomiwa Aluko</p>
        <p><a href="https://tomiwaaluko.com">tomiwaaluko.com</a></p>
      `, // Using HTML instead of React for better compatibility
    });

    return NextResponse.json(
      {
        success: true,
        adminResult: adminNotification,
        userResult: userConfirmation,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Resend error:", err);

    // More specific error message based on the error type
    const errorMessage =
      err.statusCode === 429
        ? "Too many requests. Please try again later."
        : err.message || "Failed to send email. Please try again later.";

    return NextResponse.json(
      { error: errorMessage },
      { status: err.statusCode || 500 }
    );
  }
}
