export async function sendEmail() {
  try {
    const body = { name: "Tomeks", email: "tmeka008@gmail.com" };
    const response = await fetch("api/email", {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (!response.ok) return "failed to send";
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    if (error instanceof Error) return error.message;
    return "Error occured while sending email";
  }
}
