import { signIn } from "@/auth";
import React from "react";
import { Button } from "./ui/button";
import { IoLogoGoogle } from "react-icons/io5";

const ButtonGoogle = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <Button className="w-full py-7 gap-1" type="submit">
        <IoLogoGoogle size={15} />
        Google
      </Button>
    </form>
  );
};

export default ButtonGoogle;
