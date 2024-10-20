import { z } from "zod";
import { isEmailRegistered, isUsernameRegistered } from "@/lib/actions";

export const registrationFormSchema = z
  .object({
    username: z
      .string()
      .min(3, "Minimal 3 karakter")
      .max(16, "Maksimal 16 karakter")
      .regex(/^[a-zA-Z0-9_]+$/, "Hanya boleh menggunakan huruf, angka, dan underscore")
      .refine(async (username) => {
        const userExists = await isUsernameRegistered(username);
        return !userExists; 
      }, {
        message: "Username sudah terdaftar",
      }),
    
    email: z
      .string()
      .email("Bukan termasuk email yang valid")
      .refine(async (email) => {
        const emailExists = await isEmailRegistered(email);
        return !emailExists;
      }, {
        message: "Email sudah terdaftar",
      }),
    
    password: z
      .string()
      .min(8, "Minimal 8 karakter")
      .max(20, "Maksimal 20 karakter")
      .regex(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_])/, "Password harus mengandung huruf besar, huruf kecil, angka, dan simbol"),

    confirmPassword: z
      .string()
      .min(8, "Minimal 8 karakter")
      .max(20, "Maksimal 20 karakter"),

    term: z
      .boolean()
      .refine((val) => val === true, {
        message: "Anda harus menyetujui syarat dan ketentuan",
      }),
  })
    .refine(async (data) => !(await isEmailRegistered(data.email)), {
    message: "Email sudah terdaftar",
    path: ["email"],
  })
    .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sesuai",
    path: ["confirmPassword"],
  })



export type LoginFormSchema = z.infer<typeof registrationFormSchema>;





export const signinFormSchema = z
  .object({
    email: z.string().email("Bukan termasuk email"),
    // .refine(async (email) => {
    //   const emailExists = await isEmailRegistered(email);
    //   return emailExists; 
    // }, {
    //   message: "Email belum terdaftar",
    // }),
    password: z
      .string()
      .min(6, "Minimal 6 karakter")
      .max(20, "Maksimal 20 karakter")
  })
  // .refine(async (data) => {
  //   const match = await isMatch(data.email, data.password);
  //   return match;
  // },{
  //   message: "Email atau password salah",
  //   path: ["password"]
  // })

export type SigninFormSchema = z.infer<typeof signinFormSchema>;



export const addProductSchema = z.object({
  name: z.string().min(3, "Minimal 3 karakter").max(50, "Maksimal 50 karakter"),
  price: z.preprocess((val) => Number(val), z.number().positive()),
});

export type AddProductSchema = z.infer<typeof addProductSchema>;