"use client";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Buttonregister from "@/components/button-register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpCredentials } from "@/lib/actions";
import { LoginFormSchema, loginFormSchema } from "@/lib/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Formregister = () => {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });
  const { handleSubmit, control } = form;

  const onSubmit = handleSubmit((values) =>
    signUpCredentials(values)
  );

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="max-w-md flex flex-col gap-2">
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
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
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
        <Buttonregister />
        <p className=" text-center text-sm text-gray-600">Already have an account?
            <Link href="/login" className="font-semibold text-base text-gray-800 hover:underline"> Sign In</Link>
        </p>
      </form>
    </Form>
  );
};

export default Formregister;
