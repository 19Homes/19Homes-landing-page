"use server";
import { RegisterFormSchema, LoginFormSchema } from "@/lib/rules";
import bcrypt from "bcryptjs";
import { createSupabaseClient } from "@/lib/supabase";
import { redirect } from "next/navigation";
import { createSession } from "./session";
import { cookies } from "next/headers";
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
  const supabase = createSupabaseClient();
  if (!supabase)
    return {
      errors: { email: "Failed to connect." },
    };

  const { data: existingUser, error } = await supabase
    .from("19homes users")
    .select("email")
    .eq("email", validatedFields.data.email);
  if (error) return { errors: { email: "Server Error. Please, try again" } };
  console.log("existing user", existingUser);
  if (existingUser.length)
    return {
      errors: { email: "Email has already been registered. Please sign in." },
    };
  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);
  const { data: insertedData, error: insertError } = await supabase
    .from("19homes users")
    .insert([
      {
        email: validatedFields.data.email,
        name: validatedFields.data.name,
        password: hashedPassword,
      },
    ])
    .select();
  if (insertError) {
    console.log(insertError.message);
    return {
      errors: {
        email:
          "Sorry, we are unable to register you at this time. Please, try again later. Thank you.",
      },
    };
  }
  console.log("INSERTED DATA IS:", insertedData);
  await createSession(validatedFields.data.email);
  redirect("/");
  /*const usersCollection = await getCollection("users");
  if (!usersCollection)
    return { errors: { email: "Server Error. Please, try again" } };
  const existingUser = await usersCollection.findOne({ email });
  if (existingUser)
    return {
      errors: { email: "Email has already been registered. Please sign in." },
    };*/
  //  `` const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);
  /*const result = await usersCollection.insertOne({
    email,
    password: hashedPassword,
  });
  await createSession(result.insertedId.toString());*/
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
  /*const usersCollection = await getCollection("users");
  if (!usersCollection)
    return { errors: { email: "Server Error. Please, try again" } };
  const existingUser = await usersCollection.findOne({
    email: validatedLoginFields.data.email,
  });
  if (!existingUser)
    return {
      errors: { email: "This email has not been registered. Please, sign up." },
    };*/
  const supabase = createSupabaseClient();
  if (!supabase)
    return {
      errors: { email: "Failed to connect." },
    };

  const { data: existingUser, error } = await supabase
    .from("19homes users")
    .select("*")
    .eq("email", validatedLoginFields.data.email);
  if (error) return { errors: { email: "Server Error. Please, try again" } };
  console.log("existing user", existingUser);
  if (!existingUser.length)
    return {
      errors: {
        email: "This email has not been registered. Please, sign up.",
      },
    };
  const correctPassword = await bcrypt.compare(
    validatedLoginFields.data.password,
    existingUser[0].password,
  );
  console.log(correctPassword);
  if (!correctPassword)
    return { errors: { password: "You have entered an incorrect password." } };
  await createSession(existingUser[0].email);
  redirect("/");
}

export async function logout() {
  const cookiestore = await cookies();
  cookiestore.delete("session");
}
