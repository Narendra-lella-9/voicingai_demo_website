"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Sub-300ms latency, near-zero hallucinations, millions of interactions without a compliance flag. Voicing AI doesn't just perform — it holds up at carrier scale. Nothing else comes close.",
    author: "Chief Experience Officer, Fortune 100 US Telecom",
  },
  {
    quote:
      "Scoping to go-live in six weeks. The team understood our regulatory constraints before we explained them. Results showed up in month one. Genuinely the best vendor experience I've had.",
    author: "Chief Operating Officer, Top 5 European Bank",
  },
  {
    quote:
      "First-call resolution jumped within 45 days — no tuning, no long sprints. The AI understood clinical intent out of the box. Our patients couldn't tell the difference. We're scaling across all service lines.",
    author: "SVP Patient Services, Global US Healthcare Group",
  },
  {
    quote:
      "RTT handles code-switching, regional dialects, mixed-language queries — seamlessly. Forty agents now cover what used to need two hundred. The multilingual capability alone delivered the ROI we projected for the full platform.",
    author: "Chief Digital Officer, Leading Indian Financial Institution",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F4F7FB] py-32" id="case-studies">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-[#0A1628]/70"
        >
          Case Studies
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline mt-3 text-[clamp(2rem,4vw,3.5rem)] text-[#0A1628]"
        >
          Proven results at enterprise scale
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-[#0A1628]/80"
        >
          From India&apos;s largest asset managers to Fortune 2000 banks,
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#0A1628]/80"
        >
          Voicing AI delivers measurable impact in weeks — not quarters.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <motion.article
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-7 shadow-[0_12px_40px_rgba(10,22,40,0.08)]"
            >
              <p className="text-[#0A1628]">{item.quote}</p>
              <p className="mt-5 font-label text-xs uppercase tracking-[0.14em] text-[#0A1628]/70">
                {item.author}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
