"use server";

export async function register(_: unknown, formData: FormData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const password = formData.get("password");
  console.log(email, name, password);
}
