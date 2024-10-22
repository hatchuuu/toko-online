import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const Buttonlogin = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className=" mt-2 w-full py-5 mt-4">
      {pending ? "Loading..." : "Login"}
    </Button>
  );
};

export default Buttonlogin;
