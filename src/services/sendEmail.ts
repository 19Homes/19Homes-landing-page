export async function sendEmail(name: string, email: string) {
  try {
    const body = { name, email };
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (!response.ok) return "failed to send";
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log("error", error);
    if (error instanceof Error) return error.message;
    return "Error occured while sending email";
  }
}
