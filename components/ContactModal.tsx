"use client";

import { useEffect, useState } from "react";

const countries = [
  "United States",
  "United Kingdom",
  "India",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Singapore",
  "UAE",
  "Japan",
  "Other",
];

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@company.com",
    country: "United States",
    enquiry:
      "I'd like to schedule a demo of your voice AI platform for our enterprise team.",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openContact", handler);
    return () => window.removeEventListener("openContact", handler);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    setSubmitted(false);
    setForm({
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@company.com",
      country: "United States",
      enquiry:
        "I'd like to schedule a demo of your voice AI platform for our enterprise team.",
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-[900px] overflow-hidden rounded-2xl bg-[hsl(var(--background))] shadow-[0_32px_80px_rgba(0,114,255,0.15)]">
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#0A1628]/8 text-[#0A1628] transition-colors hover:bg-[#0072FF]/10 hover:text-[#0072FF]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid md:grid-cols-2">
          {/* ── Left panel ── */}
          <div className="flex flex-col justify-between p-8 md:p-10">
            <div>
              {/* Label */}
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#0072FF]">
                Get in touch
              </p>

              {/* Heading — matches site h2 style */}
              <h2 className="font-headline mt-3 text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.1] text-[#0A1628]">
                Contact us
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#0A1628]/65">
                Ready to transform your enterprise communications? Reach out to
                our team to discuss custom deployments, partnership
                opportunities, or to schedule a comprehensive walkthrough of our
                hybrid voice intelligence stack.
              </p>

              {/* Email */}
              <a
                href="mailto:ram@voicing.ai"
                className="mt-6 flex items-center gap-2.5 text-sm font-medium text-[#0A1628] transition-colors hover:text-[#0072FF]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0072FF]/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    className="h-4 w-4 text-[#0072FF]"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2 7l10 7 10-7"
                    />
                  </svg>
                </span>
                ram@voicing.ai
              </a>
            </div>

            {/* CTA button — matches site primary button */}
            <button
              onClick={handleSubmit}
              className="mt-10 w-max rounded-full bg-gradient-to-r from-[#0072FF] to-[#4EA8DE] px-8 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,114,255,0.30)] transition-transform hover:scale-105 active:scale-95"
            >
              Schedule Demo →
            </button>
          </div>

          {/* ── Right panel — dark card matching site's dark card theme ── */}
          <div className="bg-[#0A1628] p-8 md:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4EA8DE]/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4EA8DE"
                    strokeWidth={2.5}
                    className="h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-lg font-semibold text-white">Thank you!</p>
                <p className="text-sm text-[#E3E8F0]/70">
                  We'll be in touch soon.
                </p>
                <button
                  onClick={close}
                  className="mt-2 rounded-full bg-gradient-to-r from-[#0072FF] to-[#4EA8DE] px-7 py-2.5 text-sm font-semibold text-white hover:scale-105 active:scale-95 transition-transform"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {/* First / Last name */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    placeholder="First name*"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    className="rounded-xl bg-white/6 px-4 py-3 text-sm text-[#9CA3AF] placeholder-[#E3E8F0]/40 outline-none ring-1 ring-white/10 transition focus:text-white focus:ring-[#4EA8DE]/50"
                  />
                  <input
                    required
                    placeholder="Last name*"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    className="rounded-xl bg-white/6 px-4 py-3 text-sm text-[#9CA3AF] placeholder-[#E3E8F0]/40 outline-none ring-1 ring-white/10 transition focus:text-white focus:ring-[#4EA8DE]/50"
                  />
                </div>

                {/* Email */}
                <input
                  required
                  type="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl bg-white/6 px-4 py-3 text-sm text-[#9CA3AF] placeholder-[#E3E8F0]/40 outline-none ring-1 ring-white/10 transition focus:text-white focus:ring-[#4EA8DE]/50"
                />

                {/* Country */}
                <div className="relative">
                  <select
                    required
                    value={form.country}
                    onChange={(e) =>
                      setForm({ ...form, country: e.target.value })
                    }
                    className="w-full appearance-none rounded-xl bg-white/6 px-4 py-3 text-sm text-[#9CA3AF] outline-none ring-1 ring-white/10 transition focus:text-white focus:ring-[#4EA8DE]/50"
                  >
                    <option value="" disabled className="bg-[#0A1628]">
                      Country*
                    </option>
                    {countries.map((c) => (
                      <option key={c} value={c} className="bg-[#0A1628]">
                        {c}
                      </option>
                    ))}
                  </select>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E3E8F0]/40"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Enquiry */}
                <textarea
                  rows={4}
                  placeholder="Enquiry"
                  value={form.enquiry}
                  onChange={(e) =>
                    setForm({ ...form, enquiry: e.target.value })
                  }
                  className="resize-none rounded-xl bg-white/6 px-4 py-3 text-sm text-[#9CA3AF] placeholder-[#E3E8F0]/40 outline-none ring-1 ring-white/10 transition focus:text-white focus:ring-[#4EA8DE]/50"
                />

                {/* Submit row */}
                <div className="mt-1 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-[#0072FF] to-[#4EA8DE] px-7 py-2.5 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(0,114,255,0.35)] transition-transform hover:scale-105 active:scale-95"
                  >
                    Send →
                  </button>
                  <p className="text-xs text-[#E3E8F0]/50">
                    By submitting this form, you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      className="underline transition-colors hover:text-white"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
