"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Buttonlogin from "./button-login";
import { SigninFormSchema, signinFormSchema } from "@/lib/zod";
import { signInCredentials } from "@/lib/actions";

const Formlogin = () => {
  const form = useForm<SigninFormSchema>({
    resolver: zodResolver(signinFormSchema),
  });
  const { handleSubmit, control } = form;

  const onSubmit = handleSubmit((values) => signInCredentials(values));

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="max-w-md flex flex-col gap-2">
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
        <Buttonlogin />
        <p className=" text-center text-sm text-gray-600">
          Dont have an account yet?
          <Link
            href="/register"
            className="font-semibold text-base text-gray-800 hover:underline"
          >
            {" "}
            Sign Up
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default Formlogin;
