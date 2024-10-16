import { prisma } from './prisma';
import { z } from "zod";

export const loginFormSchema = z
  .object({
    username: z
      .string()
      .min(3, "Minimal 3 karakter")
      .max(16, "Maksimal 16 karakter"),
    email: z.string().email("Bukan termasuk email") .refine(async (email) => {
      // Check if email exists in database
      const user = await prisma.user.findUnique({ where: { email } });
      return !user; // Return false if user exists, meaning the email is already taken
    }, "Email is already taken"),
    password: z
      .string()
      .min(6, "Minimal 6 karakter")
      .max(20, "Maksimal 20 karakter"),
    confirmPassword: z
      .string()
      .min(6, "Minimal 6 karakter")
      .max(20, "Maksimal 20 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sesuai",
    path: ["confirmPassword"],
  });

export type LoginFormSchema = z.infer<typeof loginFormSchema>;


export const signinFormSchema = z
  .object({
    email: z.string().email("Bukan termasuk email"),
    password: z
      .string()
      .min(6, "Minimal 6 karakter")
      .max(20, "Maksimal 20 karakter")
  })
  
  export type SigninFormSchema = z.infer<typeof signinFormSchema>;