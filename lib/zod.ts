import { prisma } from './prisma';
import { z } from "zod";

export const loginFormSchema = z
  .object({
    username: z
      .string()
      .min(3, "Minimal 3 karakter")
      .max(16, "Maksimal 16 karakter"),
    email: z.string().email("Bukan termasuk email"),
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



export const addProductSchema = z.object({
  name: z.string().min(3, "Minimal 3 karakter").max(50, "Maksimal 50 karakter"),
  price: z.preprocess((val) => Number(val), z.number().positive()),
});

export type AddProductSchema = z.infer<typeof addProductSchema>;