"use server";
import { RegisterFormSchema } from "@/lib/rules";
export async function register(_: unknown, formData: FormData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const password = formData.get("password");
  const validatedFields = RegisterFormSchema.safeParse({
    email: email,
    name: name,
    password: password,
    confirmPassword: formData.get("confirm_password"),
  });
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
}
