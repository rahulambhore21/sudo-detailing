import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
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

type ContactFormProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  mode?: 'dialog' | 'inline';
};

type FormData = {
  name: string;
  phone: string;
  email?: string;
  service: string;
};

const serviceOptions = [
  "Ceramic Coating",
  "Deep Cleaning & Dry Cleaning",
  "PPF (Paint Protection Film)",
  "Rubbing & Polishing",
  "Car Wrapping"
];

export function ContactForm({ open = false, onOpenChange, mode = 'dialog' }: ContactFormProps) {
  const isInline = mode === 'inline';
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service,
    };

    try {
      const res = await fetch("https://shreepackways-smtp.vercel.app/api/send-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      alert("Sent!");
      reset();
      if (!isInline) {
        onOpenChange?.(false);
      }
      router.push("/thanks");
    } catch (err) {
      console.error(err);
      setSubmitError("Failed to send. Please try again.");
    }
  };

  const formFields = (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4 w-full">
      <div className="grid gap-2">
        <Label htmlFor="name" className="text-zinc-200">Name</Label>
        <Input
          id="name"
          placeholder="Your name"
          className="bg-zinc-900 border-zinc-800 focus:ring-white text-white placeholder:text-zinc-500"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Name must be at least 2 characters" },
            maxLength: { value: 80, message: "Name must be under 80 characters" },
          })}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone" className="text-zinc-200">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(555) 000-0000"
          className="bg-zinc-900 border-zinc-800 focus:ring-white text-white placeholder:text-zinc-500"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^\+?[0-9\s().-]{7,15}$/,
              message: "Enter a valid phone number",
            },
          })}
        />
        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-zinc-200">Email (optional)</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          className="bg-zinc-900 border-zinc-800 focus:ring-white text-white placeholder:text-zinc-500"
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="service" className="text-zinc-200">Service</Label>
        <select
          id="service"
          className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white"
          {...register("service", { required: "Please select a service" })}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
        {errors.service && <span className="text-red-500 text-sm">{errors.service.message}</span>}
      </div>
      {submitError && <span className="text-red-500 text-sm">{submitError}</span>}
      <div className="flex justify-end mt-4">
        <Button type="submit" disabled={isSubmitting} className="bg-white text-black hover:bg-zinc-200 w-full md:w-auto">
          {isSubmitting ? "Sending..." : "Send Request"}
        </Button>
      </div>
    </form>
  );

  if (isInline) {
    return (
      <section className="cta-section w-full px-6 md:px-12 max-w-[1440px] mx-auto py-20">
        <div className="cta-container relative rounded-[16px] overflow-hidden min-h-[480px] md:min-h-[500px] flex flex-col md:flex-row items-stretch md:items-center">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=500&fit=crop" alt="Background" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent md:bg-gradient-to-r" />
          </div>
          <div className="relative z-10 w-full md:w-1/2 p-6 md:p-16 flex flex-col gap-4 items-start">
            <h2 className="text-white text-3xl sm:text-4xl md:text-[48px] leading-tight font-['Clash_Display_Variable:Medium',sans-serif]">Get a Quote</h2>
            <p className="text-[#ccc] text-[16px] leading-[24px] font-['Clash_Display_Variable:Medium',sans-serif] max-w-sm">
              Share your details and preferred service, and we’ll reach out in less than 24 hours.
            </p>
            {formFields}
          </div>
        </div>
      </section>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-zinc-950 text-white border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-['Clash_Display_Variable:Medium',sans-serif]">Get a Quote</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Fill out the details below and we’ll get back to you in less than 24 hours.
          </DialogDescription>
        </DialogHeader>
        {formFields}
      </DialogContent>
    </Dialog>
  );
}
