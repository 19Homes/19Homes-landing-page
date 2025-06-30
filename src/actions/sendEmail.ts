"use server";
import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";

interface SendEmailResponse {
  success: boolean;
  error?: string;
  data?: unknown;
}
const resend = new Resend(process.env.RESEND_KEY);
export async function sendEmail(
  name: string,
  email: string,
): Promise<SendEmailResponse> {
  if (!name || !email)
    return { success: false, error: "Name and Email are required" };
  try {
    const { data, error } = await resend.emails.send({
      from: "19Homes <19Homes@resend.dev>",
      to: [email],
      subject: "Welcome to 19HOMES",
      react: EmailTemplate({ firstname: name }),
    });

    if (error) {
      console.error("RESEND API error", error);
      return { success: false, error: error.message };
    }
    return { success: true, data };
  } catch (error) {
    console.error("Email sending failed", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "an error occured while sending your email",
    };
  }
}
