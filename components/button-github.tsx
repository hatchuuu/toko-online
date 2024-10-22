import { signIn } from "@/auth";
import React from "react";
import { Button } from "./ui/button";
import { IoLogoGithub } from "react-icons/io5";

const ButtonGithub = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <Button className="w-full py-7 gap-1" type="submit">
        <IoLogoGithub size={15} />
        Github
      </Button>
    </form>
  );
};

export default ButtonGithub;
