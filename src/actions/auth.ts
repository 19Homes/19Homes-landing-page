"use server";
import { RegisterFormSchema } from "@/lib/rules";
import bcrypt from "bcryptjs";
import { getCollection } from "@/lib/db";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
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
      email: email,
    };
  }
  const usersCollection = await getCollection("users");
  if (!usersCollection)
    return { errors: { email: "Server Error. Please, try again" } };
  const existingUser = await usersCollection.findOne({ email });
  if (existingUser)
    return {
      errors: { email: "Email has already been registered. Please sign in." },
    };
  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);
  const result = await usersCollection.insertOne({
    email,
    password: hashedPassword,
  });
  createSession(result.insertedId.toString());
  redirect("/");
}
