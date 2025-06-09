"use server";
import { RegisterFormSchema, LoginFormSchema } from "@/lib/rules";
import bcrypt from "bcryptjs";
import { getCollection } from "@/lib/db";
import { redirect } from "next/navigation";
import { createSession } from "./session";
import { use } from "react";
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
  await createSession(result.insertedId.toString());
  redirect("/");
}

export async function login(_: unknown, formData: FormData) {
  const inputedEmail = formData.get("email");
  const inputedPassword = formData.get("password");
  const validatedLoginFields = LoginFormSchema.safeParse({
    email: inputedEmail,
    password: inputedPassword,
  });
  if (!validatedLoginFields.success) {
    return {
      errors: validatedLoginFields.error.flatten().fieldErrors,
    };
  }
  const usersCollection = await getCollection("users");
  if (!usersCollection)
    return { errors: { email: "Server Error. Please, try again" } };
  const existingUser = await usersCollection.findOne({
    email: validatedLoginFields.data.email,
  });
  if (!existingUser)
    return {
      errors: { email: "This email has not been registered. Please, sign up." },
    };
  const correctPassword = await bcrypt.compare(
    validatedLoginFields.data.password,
    existingUser.password,
  );
  console.log(correctPassword);
  if (!correctPassword)
    return { errors: { password: "You have entered an incorrect password." } };
  await createSession(existingUser._id.toString());
  redirect("/");
}
