"use server"
import { hashSync } from "bcrypt-ts";
import { LoginFormSchema, SigninFormSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const signUpCredentials = async (values: LoginFormSchema) => {
  const { name, email, password, term } = values
  const hashedPassword = hashSync(password, 10);
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        term
      }
    })
  } catch (error) {
    return { message: `${error}, Failed to create user` }
  }
  redirect("/login")
}

export const signInCredentials = async (values: SigninFormSchema) => {
  const { email, password } = values
  try {
    await signIn("credentials", {
      email, password, redirectTo: "/dashboard"
    })
    return { status: 200, isLogin: true }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Email or password is incorrect" }
        default:
          return { message: "Something went wrong" }
      }
    }
    throw error
  }
}

// type Data = {
//   name: string,
//   price: number,
// }
// export const addDataProduct = async (data: Data) => {
//   const userIdNew = await userAuth()
//   const { name, price } = data

//   try {
//     await prisma.product.create({
//       data: {
//         name,
//         price,
//         userId: userIdNew  // Hanya tambahkan userId jika ada
//       }
//     })
//     return { status: 200, isCreated: true }
//   } catch (error) {
//     return { status: 400, isCreated: false, detail: error }
//   }
// }

export const isEmailRegistered = async (email: string): Promise<boolean> => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user !== null; // Jika user ditemukan, email sudah terdaftar
};

export const isUsernameRegistered = async (name: string): Promise<boolean> => {
  const user = await prisma.user.findFirst({
    where: {
      name,
    },
  });
  return user !== null; // Jika user ditemukan, email sudah terdaftar
};
