"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.NEXT_GOOGLE_EMAIL,
    pass: process.env.NEXT_GOOGLE_APP_PASSWORD,
  },
});

export async function sendEmail(name: string, email: string) {
  if (!name || !email)
    return { success: false, message: "Name and Email are required" };
  try {
    const mailOptions = {
      from: 'welcome@19Homes.com',
      to: email,
      subject: "Welcome To 19Homes",
      text: `Dear ${name}, thank you for signing up to 19Homes. We are happy to have you on board`,
      html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to 19Homes</title>
</head>
<body>
    <table align="center" width="100%" style="max-width: 500px; background-color: #f0f0f0; padding: 1.5rem 20px; border-radius: 25px;">
        <tr>
            <td>
                <h2 style="font-size: 1.2rem; font-family: Helvetica, sans-serif; font-weight: 600; line-height: 1.2; letter-spacing: 1.5px; color: black;">
                    Dear ${name}
                </h2>
                <h1 style="font-size: 1.6rem; font-family: 'Times New Roman', serif; font-weight: 700; line-height: 1.2; letter-spacing: 2px; color: rgba(218, 145, 0, 1); text-transform: uppercase;">
                    Welcome to 19Homes
                </h1>
                <img src="https://res.cloudinary.com/ddep9f2pk/image/upload/v1750231891/display-image_xgyiux.png" alt="a multi duplex building design" style="width: 100%; aspect-ratio: 3/2; max-width: 500px; border-radius: 20px; box-shadow: 0px 5px 12px #000000a9; object-fit: cover;">
                <p style="font-size: 0.9rem; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1.6; letter-spacing: 1.3px; color: black; margin-bottom: 15px;">
                    Thank you for registering with <strong style="color: rgba(218, 145, 0, 1);">19Homes</strong>. We are happy to have you on board.
                </p>
                <p style="font-size: 0.9rem; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1.6; letter-spacing: 1.3px; color: black; margin-bottom: 15px;">
                    With <strong style="color: rgba(218, 145, 0, 1);">19Homes</strong>, you have an amazing range of architectural designs to choose from for you next home. You can also acquire landed property and houses at amazing rates. You've got an amazing solution for most of your housing needs with <strong style="color: rgba(218, 145, 0, 1);">19Homes</strong>.
                </p>
                <p style="font-size: 0.9rem; font-family: Helvetica, sans-serif; font-weight: 400; line-height: 1.6; letter-spacing: 1.3px; color: black; margin-bottom: 15px;">
                    Welcome to the family
                </p>
                <table align="center">
                    <tr>
                        <td>
                            <a href="https://19homes.vercel.app/" style="color: black; text-decoration: none; background-color: rgba(218, 145, 0, 0.75); padding: 12px 12px; font-size: 0.8rem; font-family: Helvetica, sans-serif; font-weight: 600; border-radius: 30px; display: block; text-align: center;">
                                Visit 19Homes
                            </a>
                            <a href="#" style="color: black; text-decoration: none; background-color: rgba(218, 145, 0, 0.75); padding: 12px 12px; font-size: 0.8rem; font-family: Helvetica, sans-serif; font-weight: 600; border-radius: 30px; text-align: center; display: block; margin-top: 10px;">
                                Join Our WhatsApp
                            </a>
                        </td>
                    </tr>
                </table>

                <table align="center">
                    <tr>
                        <td align="center">
                            <img src="https://res.cloudinary.com/ddep9f2pk/image/upload/v1750231890/19Homes-icon_vjni83.png" alt="19Homes Logo" style="width: 60px; object-fit: contain; margin-top: 20px;">
                        </td>
                    </tr>
                </table>

                <table align="center" style="margin-top: 20px;">
                    <tr>
                        <td align="center">
                            <p style="font-size: 0.6rem; font-family: Helvetica, sans-serif; color: #777777;">
                                &copy; <script>document.write(new Date().getFullYear())</script> 19Homes. All Rights Reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`,
    };
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.log("Error sending email", error);
    return { success: false, message: "Error sending email" };
  }
}
/*import { EmailTemplate } from "@/components/emailTemplate";
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
} */
