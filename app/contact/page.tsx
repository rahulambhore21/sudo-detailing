'use client';
import React from 'react';
import { ContactForm } from '../../components/ContactForm';

function page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 flex flex-col gap-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Contact</p>
          <h1 className="text-4xl md:text-5xl font-semibold">Let’s talk about your car</h1>
          <p className="text-zinc-400 max-w-2xl">
            Tell us what you need and we’ll reach out within 24 hours with a tailored quote.
          </p>
        </div>
        <div className="grid gap-4 rounded-lg border border-zinc-800 bg-zinc-950/60 p-6 md:p-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Visit us</p>
            <p className="text-sm md:text-base text-zinc-200">Shaheed Rupen Katyal Marg, HSIDC, Sector 18, Gurugram, 122015, Haryana, India.</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Call us</p>
            <a href="tel:+917988116056" className="text-sm md:text-base text-white hover:text-zinc-300">+91 79881 16056</a>
            <br/>
            <a href="mailto:sudodetailing@gmail.com" className="text-sm md:text-base text-white hover:text-zinc-300">sudodetailing@gmail.com</a>
          </div>
        </div>
        <ContactForm mode="inline" />
      </section>
    </main>
  );
}

export default page;