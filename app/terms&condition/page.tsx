export default function TermsConditionsPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="space-y-2">
          <p className="text-sm text-zinc-400 uppercase tracking-[0.2em]">Sudo Car Detailing</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Terms &amp; Conditions</h1>
          <p className="text-zinc-300">By accessing our website or using our services, you agree to the following terms.</p>
        </header>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Services Offered</h2>
          <p className="text-zinc-300">
            Ceramic Coating, Deep Cleaning &amp; Dry Cleaning, Paint Protection Film (PPF), Rubbing &amp; Polishing, Vehicle Wrapping.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Service Disclaimer</h2>
          <p className="text-zinc-300">
            Results depend on vehicle condition. Protective services do not prevent all damage. No guarantee of complete defect removal.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Pricing &amp; Payments</h2>
          <p className="text-zinc-300">
            Final pricing is confirmed after inspection. No refunds once service has started or completed.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Appointments &amp; Cancellations</h2>
          <p className="text-zinc-300">
            24-hour notice required for cancellations. No-shows may be charged.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Vehicle Liability</h2>
          <p className="text-zinc-300">
            We are not responsible for pre-existing damage or previous repairs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Photos &amp; Marketing</h2>
          <p className="text-zinc-300">
            Vehicle images may be used for marketing unless opted out in writing.
          </p>
        </section>
      </div>
    </main>
  );
}
