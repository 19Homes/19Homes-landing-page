import { NextResponse, NextRequest } from "next/server";
import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);
export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    console.log(requestBody);
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["tmeka008@gmail.com"],
      subject: "Hello Notes",
      react: EmailTemplate({ firstname: "John" }),
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
