import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const Buttonregister = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full py-5 mt-4">
      {pending ? "Registering..." : "Register"}
    </Button>
  );
};

export default Buttonregister;
