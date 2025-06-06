import { NextResponse, NextRequest } from "next/server";
import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);
export async function POST(request: NextRequest) {
  try {
    const requestBody: { name: string; email: string } = await request.json();
    console.log(requestBody);
    const recipientEmail = requestBody.email;
    const name = requestBody.name;
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: "Welcome to 19HOMES",
      react: EmailTemplate({ firstname: name }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log("error", error);
    return Response.json({ error }, { status: 500 });
  }
}
