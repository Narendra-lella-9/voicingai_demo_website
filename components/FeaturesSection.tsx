"use client";

import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const icon = (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M4 12h16" />
    <path d="M12 4v16" />
  </svg>
);

export default function FeaturesSection() {
  return (
    <section className="bg-white py-32" id="platform">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-[#0A1628]/70"
        >
          Platform
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline mt-3 text-[clamp(2rem,4vw,3.5rem)] text-[#0A1628]"
        >
          The hybrid voice intelligence stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 max-w-4xl text-[#0A1628]/80"
        >
          Four integrated pillars that work together: Voice Agents for agentic
          accuracy, Real-Time Translation for global reach, Voice Identity
          Transformation for brand consistency, and AI Observability for
          complete control.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={icon}
            title="Agentic voice AI, 24/7"
            description="Human-quality voice agents handling inbound and outbound calls around the clock. 20+ turn context window, custom emotion mapping, and seamless mid-sentence handoffs to human agents."
            tags={["Explore voice agents →"]}
          />
          <FeatureCard
            icon={icon}
            title="25+ languages, sub-600ms"
            description="4-way simultaneous translation — original and translated speech delivered to both agent and customer. Accent normalization with 27% WER improvement. Native domain-tuned accuracy at 97.8%."
            tags={["Explore RTT →"]}
          />
          <FeatureCard
            icon={icon}
            title="Golden brand voice"
            description="Transform any agent's voice into your brand standard in real-time. Identity masking, accent neutralization, and disfluency suppression — all processed in under 150ms with compliance-ready output."
            tags={["Explore VIT →"]}
          />
        </div>
      </div>
    </section>
  );
}
