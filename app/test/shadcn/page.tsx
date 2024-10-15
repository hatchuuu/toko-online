"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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
  const form = useForm<LoginFormSchema>({
      resolver: zodResolver(loginFormSchema),
    });
    const { handleSubmit, control } = form
    

  const onSubmit = handleSubmit((values) =>
    alert(`username: ${values.username} password : ${values.password}`)
  );

  return (
    <div className="max-w-screen-xl mx-auto py-6 p-4">
      <h1 className="text-2xl">Home Page</h1>
      <div className="m-4">
        <Form {...form}>
          <form onSubmit={onSubmit} className="max-w-md ">
            <FormField
              control={control}
              name="username"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Home;
