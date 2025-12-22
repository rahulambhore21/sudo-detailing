import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-emerald-600 uppercase tracking-wide">
            Thank you
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            We’ve received your message
          </h1>
          <p className="text-base text-gray-600">
            Our team will review your request and get back to you shortly. If
            your inquiry is urgent, please reach out via phone or chat.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Submit another request
          </Link>
        </div>
      </div>
    </main>
  );
}
