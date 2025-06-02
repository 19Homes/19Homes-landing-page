import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    email: z.string().email("Please, enter a valid email").trim(),
    name: z.string().min(3, "Name must be at least 3 characters long").trim(),
    password: z
      .string()
      .min(1, "Password cannot be empty")
      .min(6, "Password must be at least 6 characters long")
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof RegisterFormSchema>;
