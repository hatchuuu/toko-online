"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddProductSchema, addProductSchema } from "@/lib/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { addDataProduct } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

const Formregister = ({ setOpen }: {setOpen : Dispatch<SetStateAction<boolean>>}) => {
  const router = useRouter();
  const form = useForm<AddProductSchema>({
    resolver: zodResolver(addProductSchema),
  });
  const { handleSubmit, control } = form;

  const onSubmit = handleSubmit(async (values) => {

    const result = await addDataProduct(values);
    if (result.isCreated) {
      setOpen(false)
      router.refresh();
    }
    else {
      console.error("Gagal menambahkan product");
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <FormField
          control={control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
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
          name="price"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" variant="default" className="self-end w-max mt-4">
          Save
        </Button>
      </form>
    </Form>
  );
};

export default Formregister;
