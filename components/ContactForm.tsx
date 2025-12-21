import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type ContactFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactForm({ open, onOpenChange }: ContactFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    onOpenChange(false);
    // You could use a toast here if available, but alert is fine for now
    alert("Thank you! We will get back to you shortly.");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-zinc-950 text-white border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-['Clash_Display_Variable:Medium',sans-serif]">Get a Quote</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Fill out the details below and we’ll get back to you in less than 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-zinc-200">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              className="bg-zinc-900 border-zinc-800 focus:ring-white text-white placeholder:text-zinc-500"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-zinc-200">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="bg-zinc-900 border-zinc-800 focus:ring-white text-white placeholder:text-zinc-500"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
           <div className="grid gap-2">
            <Label htmlFor="phone" className="text-zinc-200">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 000-0000"
              className="bg-zinc-900 border-zinc-800 focus:ring-white text-white placeholder:text-zinc-500"
              {...register("phone")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-zinc-200">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your car and what services you need..."
              className="bg-zinc-900 border-zinc-800 focus:ring-white text-white placeholder:text-zinc-500 min-h-[100px]"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>
          <div className="flex justify-end mt-4">
            <Button type="submit" disabled={isSubmitting} className="bg-white text-black hover:bg-zinc-200 w-full md:w-auto">
              {isSubmitting ? "Sending..." : "Send Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
