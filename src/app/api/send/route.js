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
      subject: `✨ New Portfolio Message: ${subject}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          <h1 style="color: #6366F1; border-bottom: 2px solid #6366F1; padding-bottom: 10px;">🚀 New Portfolio Contact!</h1>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #6366F1; margin: 15px 0;">
        <p style="margin: 5px 0;"><strong style="color: #4F46E5;">From:</strong> ${email}</p>
        <p style="margin: 5px 0;"><strong style="color: #4F46E5;">Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 15px;">
        <h3 style="color: #4F46E5; margin-top: 0;">Message:</h3>
        <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #6b7280; margin-top: 20px; text-align: center;">Received from your portfolio contact form</p>
        </div>
      `,
    });

    // Send confirmation to the person who submitted the form
    const userConfirmation = await resend.emails.send({
      from: "Tomiwa Aluko <email@tomiwaaluko.com>",
      to: email,
      subject: "✨ Message Received - Thanks for Reaching Out!",
      html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border-radius: 12px; background: linear-gradient(to right, #f9f9f9, #f0f4ff); box-shadow: 0 5px 15px rgba(0,0,0,0.08);">
        <h1 style="color: #4F46E5; margin-bottom: 20px; border-bottom: 3px solid #6366F1; padding-bottom: 10px; font-size: 28px;">🚀 Message Successfully Received!</h1>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">Hey there! Thanks for taking the time to reach out about <span style="font-weight: bold; color: #4F46E5;">"${subject}"</span>.</p>
        
        <div style="background-color: #EEF2FF; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="color: #4B5563; margin: 0;">Your message is now in my inbox, and I'll be reviewing it shortly. Expect to hear back from me soon!</p>
        </div>
        
        <p style="color: #6B7280; font-style: italic;">In the meantime, feel free to check out my portfolio for more of my work.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px dashed #9CA3AF;">
        <p style="margin: 5px 0; color: #374151;">Creative regards,</p>
        <p style="margin: 5px 0; font-weight: bold; color: #4F46E5; font-size: 18px;">Tomiwa Aluko</p>
        <a href="https://tomiwaaluko.com" style="display: inline-block; margin-top: 10px; color: white; background-color: #6366F1; padding: 8px 15px; text-decoration: none; border-radius: 5px; font-weight: 500; transition: all 0.3s ease;">Visit My Portfolio</a>
        </div>
      </div>
      `,
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
