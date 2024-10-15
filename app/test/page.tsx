"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z
  .object({
    username: z
      .string()
      .min(3, "Minimal username 3 karakter")
      .max(16, "Maksimal username 16 karakter"),
    password: z
      .string()
      .min(5, "Minimal password 5 karakter")
      .max(20, "Maksimal password 20 karakter"),
    confirmPassword: z
      .string()
      .min(5, "Minimal password 5 karakter")
      .max(20, "Maksimal password 20 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

type LoginFormSchema = z.infer<typeof loginFormSchema>;

const Home = () => {
  const { register, handleSubmit, formState } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = handleSubmit((values) =>
    alert(`username: ${values.username} password : ${values.password}`)
  );

  return (
    <div className="max-w-screen-xl mx-auto py-6 p-4">
      <h1 className="text-2xl">Home Page</h1>
      <div className="m-4">
        <form onSubmit={onSubmit} className="max-w-md ">
          <label htmlFor="username">Username</label>
          <Input id="username" type="text" {...register("username")} />
          <p>
            {formState.errors?.username && formState.errors.username.message}
          </p>
          <label htmlFor="password">Password</label>
          <Input id="password" type="password" {...register("password")} />
          <p>
            {formState.errors?.password && formState.errors.password.message}
          </p>
          <label htmlFor="confirmPassword">confirmPassword</label>
          <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
          <p>
            {formState.errors?.confirmPassword && formState.errors.confirmPassword.message}
          </p>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
