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
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useState } from "react";

const Formlogin = () => {
  const [visible, setVisible] = useState(false);

  const form = useForm<SigninFormSchema>({
    resolver: zodResolver(signinFormSchema),
  });
  const { handleSubmit, control, setError } = form;

  const onSubmit = handleSubmit(async (values) => {
    const result = await signInCredentials(values);
    if (result?.message) {
      setError("email", {
        type: "manual",
        message: result.message,
      });
    }
  });

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
                  <div className="relative">
                    <Input
                      className="relative pr-10 peer"
                      type={visible ? "text" : "password"}
                      {...field}
                    />
                    <div
                      onClick={() => setVisible((prev) => !prev)}
                      className="absolute z-10 p-2 right-2 bottom-1 peer-hover:right-1 peer-hover:bottom-0 peer-focus:right-1 peer-focus:bottom-0 "
                    >
                      {visible ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Buttonlogin />
        <p className="text-sm text-gray-600 mt-2">
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
