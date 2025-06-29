"use server";
import { cookies } from "next/headers";
import { decrypt } from "@/actions/session";

export async function getAuthUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (session) {
    const user = await decrypt(session);
    return user;
  }
  return null;
}
