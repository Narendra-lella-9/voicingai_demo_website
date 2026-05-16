"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-white py-32" id="get-started">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#0A1628] px-8 py-12 text-white md:px-12"
        >
          <p className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-white/70">
            Get Started
          </p>
          <h2 className="font-headline mt-3 text-[clamp(2rem,4vw,3.5rem)]">
            Ready to transform your customer conversations?
          </h2>
          <p className="mt-4 max-w-3xl text-white/85">
            Join the Fortune 2000 companies already using Voicing.ai to deliver
            faster, smarter, more secure voice experiences at scale.
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openContact"))}
            className="mt-8 inline-block rounded-full bg-[#2D7EFF] px-6 py-3 text-sm font-semibold text-white"
          >
            Schedule Demo →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
