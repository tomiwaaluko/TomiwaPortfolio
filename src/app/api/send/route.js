// File: app/api/contact/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from env
const resend = new Resend(process.env.RESEND_API_KEY);

// Optional: lock this route to the Edge Runtime for speed
export const runtime = "edge";

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
      from: "Portfolio Contact <contact@tomiwaaluko.com>",
      to: process.env.FROM_EMAIL, // Use the environment variable here
      subject: `Portfolio Contact: ${subject}`,
      reply_to: email, // Makes it easy to reply directly to the sender
      text: `New message from ${email}:\n\n${message}`,
      react: (
        <>
          <h1>New Portfolio Contact</h1>
          <p>
            <strong>From:</strong> {email}
          </p>
          <p>
            <strong>Subject:</strong> {subject}
          </p>
          <p>{message}</p>
        </>
      ),
    });

    // Send confirmation to the person who submitted the form
    const userConfirmation = await resend.emails.send({
      from: "Tomiwa Aluko <onboarding@resend.dev>", // Using your domain with a friendly sender name
      to: email,
      subject: "Thank you for your message",
      text: `Hi there,\n\nThank you for contacting me. I've received your message and will get back to you soon.\n\nBest regards,\nTomiwa`,
      react: (
        <>
          <h1>Thank You</h1>
          <p>
            I&apos;ve received your message about &quot;{subject}&quot; and will
            review it shortly.
          </p>
          <p>I&apos;ll get back to you as soon as possible.</p>
          <hr />
          <p>Best regards,</p>
          <p>Tomiwa Aluko</p>
          <p>
            <a href="https://tomiwaaluko.com">tomiwaaluko.com</a>
          </p>
        </>
      ),
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
