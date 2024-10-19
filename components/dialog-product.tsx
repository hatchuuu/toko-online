"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Formaddproduct from "./form-add-product";
import { useState } from "react";

const Dialogproduct = ({ userId }: { userId: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Add Product 
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product dari </DialogTitle>
          <DialogDescription>
            Make your products here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Formaddproduct userId={userId} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
export default Dialogproduct;
