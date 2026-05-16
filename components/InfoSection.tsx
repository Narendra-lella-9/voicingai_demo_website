"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const industries: {
  image: string | null;
  label: string;
  description: string;
  tags: string[];
}[] = [
  {
    image: "/bankinig.png",
    label: "Banking & Finance",
    description:
      "Fraud detection, KYC verification, account inquiries, and loan processing. PCI-DSS and RBI-compliant voice interactions with core banking CRM integration.",
    tags: ["Fraud Alerts", "KYC", "Loan Processing"],
  },
  {
    image: "/airlines_travel.png",
    label: "Airlines & Travel",
    description:
      "Flight changes, IRROPS handling, rebooking automation, and travel concierge support. Multilingual support across every route and timezone.",
    tags: ["IRROPS", "Rebooking", "Concierge"],
  },
  {
    image: "/healthcare.png",
    label: "Healthcare",
    description:
      "Appointment scheduling, prescription refills, triage support, and patient follow-ups. HIPAA-compliant voice agents with EHR integration.",
    tags: ["Patient Scheduling", "HIPAA", "Prior Auth"],
  },
  {
    image: "/telecom.png",
    label: "Telecom",
    description:
      "SIM activation, number porting, plan changes, and technical support. Automated workflows that integrate directly with OSS/BSS systems.",
    tags: ["SIM Activation", "Porting", "Tech Support"],
  },
];

export default function InfoSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "RTT handles code-switching, regional dialects, mixed-language queries — seamlessly. Forty agents now cover what used to need two hundred. The multilingual capability alone delivered the ROI we projected for the full platform.",
      author: "Chief Digital Officer",
      company: "Leading Indian Financial Institution",
    },
    {
      quote:
        "Deployment in weeks instead of quarters transformed our timeline. The pre-trained models worked out of the box with minimal tuning. We went live with confidence.",
      author: "VP of Operations",
      company: "Fortune 500 Telecom Provider",
    },
    {
      quote:
        "Security was our biggest concern. On-premise deployment with zero third-party APIs gave us the compliance assurance we needed for HIPAA. No compromises.",
      author: "Chief Information Security Officer",
      company: "Leading Healthcare Network",
    },
    {
      quote:
        "The function-calling accuracy is unmatched. 97.2% vs competitors at 89-91%. For our critical workflows, this difference meant operational reliability.",
      author: "Head of Customer Experience",
      company: "Global Airline Group",
    },
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <>
      <section className="relative bg-[hsl(var(--background))] px-6 py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="rounded-[24px] bg-gradient-to-r from-[#0A1628] to-[#0A1628]/95 p-8 md:p-10">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              {/* Left Content */}
              <div className="flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#0072FF]">
                  Enterprise Infrastructure
                </p>
                <h2 className="mt-2 font-headline text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] text-white">
                  True on-premise AI. Zero third-party dependencies.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[#E3E8F0]">
                  Unlike every other voice AI platform, Voicing.ai deploys
                  entirely within your infrastructure. Your data never leaves
                  your walls. No external API calls, no shared models, no
                  third-party integrations in the critical path.
                </p>

                {/* Badges */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#0072FF]/40 bg-[#0072FF]/10 px-3 py-1.5">
                    <span className="text-xs font-semibold text-[#0072FF]">
                      100%
                    </span>
                    <span className="text-xs text-[#E3E8F0]">On-Prem</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#4EA8DE]/40 bg-[#4EA8DE]/10 px-3 py-1.5">
                    <span className="text-xs font-semibold text-[#4EA8DE]">
                      Zero
                    </span>
                    <span className="text-xs text-[#E3E8F0]">
                      3rd Party APIs
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#90E0EF]/40 bg-[#90E0EF]/10 px-3 py-1.5">
                    <span className="text-xs font-semibold text-[#90E0EF]">
                      15M+
                    </span>
                    <span className="text-xs text-[#E3E8F0]">
                      Voice Interactions Trained
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-5">
                  <button className="rounded-full bg-gradient-to-r from-[#0072FF] to-[#4EA8DE] px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105">
                    Talk to enterprise sales →
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-[350px] w-[500px] overflow-hidden rounded-lg justify-self-end">
                <Image
                  src="/infrastrucher.png"
                  alt="Enterprise Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Certifications Row */}
          <div className="mt-12 flex items-center justify-center gap-8 border-t border-[#0A1628]/10 pt-8 md:gap-12 md:pt-12">
            <div className="flex items-center justify-center opacity-70 transition-opacity hover:opacity-100">
              <Image
                src="/badge1.png"
                alt="Certification 1"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="h-12 w-px bg-[#0A1628]/15" />
            <div className="flex items-center justify-center opacity-70 transition-opacity hover:opacity-100">
              <Image
                src="/badge2.png"
                alt="Certification 2"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="h-12 w-px bg-[#0A1628]/15" />
            <div className="flex items-center justify-center opacity-70 transition-opacity hover:opacity-100">
              <Image
                src="/badge3.png"
                alt="Certification 3"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="h-12 w-px bg-[#0A1628]/15" />
            <div className="flex items-center justify-center opacity-70 transition-opacity hover:opacity-100">
              <Image
                src="/badge4.png"
                alt="Certification 4"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="h-12 w-px bg-[#0A1628]/15" />
            <div className="flex items-center justify-center opacity-70 transition-opacity hover:opacity-100">
              <Image
                src="/badge5.png"
                alt="Certification 5"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section
        id="voice-agents"
        className="relative scroll-mt-28 bg-[hsl(var(--background))] px-6 py-12 md:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1120px]">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0072FF]">
              Platform
            </p>
            <h2 className="mt-3 font-headline text-[clamp(1.8rem,3.8vw,3rem)] leading-[1.1] text-[#1B4F86]">
              The hybrid voice intelligence stack
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#0A1628]/80">
              Four integrated pillars that work together: Voice Agents for
              agentic accuracy, Real-Time Translation for global reach, Voice
              Identity Transformation for brand consistency, and AI
              Observability for complete control.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-[280px] w-full overflow-hidden bg-[#F5F5F5]">
                <Image
                  src="/24_7 image.png"
                  alt="Agentic voice AI, 24/7"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="font-headline text-xl font-semibold text-[#0A1628]">
                  Agentic voice AI, 24/7
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0A1628]/75">
                  Human-quality voice agents handling inbound and outbound calls
                  around the clock. 20+ turn context window, custom emotion
                  mapping, and seamless handoffs to live agents.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-[280px] w-full overflow-hidden bg-[#F5F5F5]">
                <Image
                  src="/languages_card.png"
                  alt="25+ languages, sub-600ms"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="font-headline text-xl font-semibold text-[#0A1628]">
                  25+ languages, sub-600ms
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0A1628]/75">
                  4-way simultaneous translation — original and translated
                  speech delivered to both agent and caller. Accent
                  normalization with 27% WER improvement. Native domain-tuned
                  accuracy.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-[280px] w-full overflow-hidden bg-[#F5F5F5]">
                <Image
                  src="/godern_vioc.png"
                  alt="Golden brand voice"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="font-headline text-xl font-semibold text-[#0A1628]">
                  Golden brand voice
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0A1628]/75">
                  Transform any agent's voice into your brand standard in
                  real-time. Identity masking, accent neutralization, and
                  disfluency suppression — all processed on your infrastructure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real-Time Translation Section */}
      <section
        id="rtt"
        className="relative scroll-mt-28 bg-[hsl(var(--background))] px-6 py-12 md:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1120px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0072FF]">
                Real-Time Translation
              </p>
              <h2 className="mt-3 font-headline text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.1] text-[#1B4F86]">
                The 4-way audio moat
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#0A1628]/80">
                Say goodbye to lag—Voicing AI's 4-way audio stream keeps
                conversations flowing naturally with instant translation.
              </p>

              {/* Feature List */}
              <ul className="mt-6 space-y-3">
                {[
                  "487–850ms end-to-end latency (industry: 1.2–2s)",
                  "Native intelligent ducking at -12dB during translation",
                  "Zero cross-talk — independent audio streams per speaker lane",
                  "Supports 30+ languages with accent-aware pronunciation matching",
                  "Sub-word streaming — translation begins before the sentence ends",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0072FF]">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </span>
                    <span className="text-base text-[#0A1628]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFDBCC] to-[#FFCBB8]"
            >
              <Image
                src="/RTT.png"
                alt="Real-Time Translation - 4-way audio moat"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voice Identity Transformation Section */}
      <section
        id="vit"
        className="relative scroll-mt-28 bg-[hsl(var(--background))] px-6 py-12 md:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1120px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFDBCC] to-[#FFCBB8]"
            >
              <Image
                src="/VIT.png"
                alt="Voice Identity Transformation - Six neural components"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0072FF]">
                Voice Identity Transformation Engine
              </p>
              <h2 className="mt-3 font-headline text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.1] text-[#1B4F86]">
                Six neural components. One consistent voice.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#0A1628]/80">
                Transform any agent's voice into your brand standard in
                real-time. Six specialized neural layers work in sequence to
                deliver the exact voice profile your brand demands.
              </p>

              {/* Feature List */}
              <ul className="mt-6 space-y-3">
                {[
                  "Audio Feature Encoder — extracts spectral characteristics",
                  "Adaptive Prosody Extractor — captures rhythm and emotion",
                  "Neural Voice Conversion Graph — transforms identity",
                  "Disfluency Suppression Net — removes hesitations",
                  "Style-Tone Controller — applies brand voice profile",
                  "Low-Latency Neural Vocoder — sub-150ms output",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0072FF]">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </span>
                    <span className="text-base text-[#0A1628]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="relative bg-[hsl(var(--background))] px-6 py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0072FF]">
              Performance
            </p>
            <h2 className="mt-3 font-headline text-[clamp(1.8rem,3.8vw,3rem)] leading-[1.1] text-[#1B4F86]">
              Best-in-class Enterprise Benchmarks
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#0A1628]/80">
              Voicing.ai consistently outperforms every competitor on the
              metrics that matter to enterprise deployment.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Latency Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-[#0A1628] to-[#0A1628]/95 shadow-lg p-8 transition-transform hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0072FF]/20">
                <svg
                  className="h-6 w-6 text-[#4EA8DE]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-[#E3E8F0]/60">Latency</p>
              <h3 className="mt-2 font-headline text-2xl font-semibold text-white">
                &lt;400ms end-to-end
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#E3E8F0]/75">
                From speech input to synthesized response. On-prem deployment
                eliminates network hops. ASR alone at &lt;110ms. Interrupt
                response at &lt;200ms.
              </p>
            </motion.div>

            {/* Accuracy Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-[#0A1628] to-[#0A1628]/95 shadow-lg p-8 transition-transform hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0072FF]/20">
                <svg
                  className="h-6 w-6 text-[#4EA8DE]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.856-1.611M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m-10 1.857v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-[#E3E8F0]/60">
                Accuracy
              </p>
              <h3 className="mt-2 font-headline text-2xl font-semibold text-white">
                97.2% function-calling
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#E3E8F0]/75">
                Compared to Claude 3.5 at 91.7%, GPT-4o at 89.4%, and Gemini 1.5
                Pro at 87.8%. Trained on 15M+ real voice interactions.
              </p>
            </motion.div>

            {/* Reliability Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-[#0A1628] to-[#0A1628]/95 shadow-lg p-8 transition-transform hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0072FF]/20">
                <svg
                  className="h-6 w-6 text-[#4EA8DE]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-[#E3E8F0]/60">
                Reliability
              </p>
              <h3 className="mt-2 font-headline text-2xl font-semibold text-white">
                &lt;0.3% hallucination rate
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#E3E8F0]/75">
                Industry-leading accuracy vs Claude 3.5 at 1.8%, GPT-4o at 2.1%,
                and Gemini 1.5 at 2.4%. Built-in guardrails and live prevention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Observability Section */}
      <section
        id="observability"
        className="relative scroll-mt-28 bg-[hsl(var(--background))] px-6 py-12 md:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1120px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0072FF]">
                AI Observability
              </p>
              <h2 className="mt-3 font-headline text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.1] text-[#1B4F86]">
                Observability that acts, not just reports
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#0A1628]/80">
                Complete visibility into every voice interaction — from latency
                attribution to hallucination detection, all in real time.
              </p>

              {/* Feature List */}
              <ul className="mt-6 space-y-3">
                {[
                  "Turn-by-turn logging with per-hop latency attribution",
                  "Live hallucination detection and intent drift alerts",
                  "Automated root cause analysis with explainable outputs",
                  "Cost leakage detection — token explosion, loop alerts",
                  "Native immutable audit logs for SOC2, HIPAA, PCI",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0072FF]">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </span>
                    <span className="text-base text-[#0A1628]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFDBCC] to-[#FFCBB8]"
            >
              <Image
                src="/observatory.png"
                alt="AI Observability - LLMS monitoring"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        id="industries"
        className="relative scroll-mt-28 bg-[hsl(var(--background))] px-6 py-12 md:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1120px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0072FF]">
              Industries
            </p>
            <h2 className="mt-3 font-headline text-[clamp(1.8rem,3.8vw,3rem)] leading-[1.1] text-[#1B4F86]">
              Voice systems for Fortune 2000
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#0A1628]/80">
              Purpose-built voice AI for the most demanding regulated
              industries. Pre-trained models deploy in{" "}
              <span className="font-semibold text-[#0072FF]">2–4 weeks</span>,
              not quarters.
            </p>
          </motion.div>

          {/* Draggable Slider */}
          <div
            ref={carouselRef}
            className="mt-10 overflow-hidden cursor-grab active:cursor-grabbing select-none"
          >
            <motion.div
              drag="x"
              dragConstraints={carouselRef}
              dragElastic={0.08}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
              className="flex gap-6"
              style={{ width: "max-content" }}
            >
              {industries.map((industry, i) => (
                <motion.div
                  key={industry.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
                >
                  {/* Card Image */}
                  <div className="relative h-[200px] w-full overflow-hidden bg-[#F0F4FF]">
                    {industry.image ? (
                      <Image
                        src={industry.image}
                        alt={industry.label}
                        fill
                        className="object-cover"
                        draggable={false}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0A1628] via-[#0d2244] to-[#1B4F86]">
                        <svg
                          className="h-16 w-16 text-[#4EA8DE]/60"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-headline text-xl font-semibold text-[#0A1628]">
                      {industry.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#0A1628]/70">
                      {industry.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {industry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#0072FF]/20 bg-[#EEF5FF] px-3 py-1 text-xs font-medium text-[#0072FF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <p className="mt-4 text-center text-xs text-[#0A1628]/40">
            ← drag to explore →
          </p>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="relative bg-[hsl(var(--background))] px-6 py-5 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[24px] bg-gradient-to-r from-[#0A1628] to-[#0A1628]/95 px-10 py-10 md:px-14 md:py-12"
          >
            {/* Header */}
            <p className="text-sm font-semibold uppercase tracking-wider text-[#4EA8DE]/70">
              Business Impact
            </p>
            <h2 className="mt-3 font-headline text-[clamp(1.8rem,3.8vw,3rem)] leading-[1.1] text-white">
              $2.4M annual savings at 1M calls/month
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#E3E8F0]/70">
              Measurable impact from day one. Lower cost, higher resolution,
              better customer satisfaction.
            </p>

            {/* Metrics Row */}
            <div className="mt-10 grid grid-cols-2 gap-y-8 md:grid-cols-4">
              {[
                { value: "$2.4M", label: "Annual savings at scale" },
                { value: "+78%", label: "First call resolution improvement" },
                { value: "+8pts", label: "CSAT score increase" },
                { value: "1.6x", label: "FTE capacity recovered" },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-start px-6 first:pl-0 md:border-l md:border-[#4EA8DE]/20 md:first:border-l-0"
                >
                  <span className="font-headline text-[clamp(2rem,4vw,2.8rem)] font-bold leading-none text-[#0072FF]">
                    {metric.value}
                  </span>
                  <span className="mt-2 text-sm leading-snug text-[#E3E8F0]/70">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section className="relative bg-[hsl(var(--background))] px-6 py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-[#D6E8FF]"
            >
              <Image
                src="/security.png"
                alt="Enterprise Security"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0072FF]">
                Security & Authentication
              </p>
              <h2 className="mt-3 font-headline text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.1] text-[#1B4F86]">
                Enterprise-grade at every layer
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#0A1628]/80">
                Built for regulated industries with voice authentication,
                end-to-end encryption, and full governance on your
                infrastructure.
              </p>

              {/* Feature List */}
              <ul className="mt-6 space-y-3">
                {[
                  "Multi-Factor Voice Authentication (voiceprint + behavioral biometrics)",
                  "AES-256 encryption at rest, TLS 1.2+ in transit",
                  "FIPS 140-2 compliant cryptography",
                  "Policy-controlled API gateway with rate limiting",
                  "Role-Based Access Control for transcripts and analytics",
                  "PII auto-redaction and zero-retention mode",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0072FF]">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-[#0A1628]/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deployment Timeline Section */}
      <section className="relative bg-[hsl(var(--background))] px-6 py-0 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0072FF]">
              Implementation
            </p>
            <h2 className="mt-3 font-headline text-[clamp(1.8rem,3.8vw,3rem)] leading-[1.1] text-[#1B4F86]">
              Deploy in weeks, not quarters
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0A1628]/80">
              Pre-trained industry models, proven playbooks, and a structured
              10-week implementation plan that gets you to production fast.
            </p>
          </motion.div>

          {/* Timeline Phases */}
          <div className="mt-14">
            {/* Phase Tabs */}
            <div className="flex justify-between">
              {[
                { week: "Week 1-2", phase: "Foundation", active: false },
                { week: "Week 3-5", phase: "Build", active: false },
                { week: "Week 6-8", phase: "Integrate", active: false },
                { week: "Week 9-10", phase: "Launch", active: true },
              ].map((tab, i) => (
                <motion.div
                  key={tab.week}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  className={`rounded-lg border px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider transition-all ${
                    tab.active
                      ? "border-[#0072FF] bg-[#0072FF]/10 text-[#0072FF]"
                      : "border-[#0A1628]/20 text-[#0A1628]/60 hover:border-[#4EA8DE]/40 hover:text-[#4EA8DE]"
                  }`}
                >
                  {tab.week}
                </motion.div>
              ))}
            </div>

            {/* Progress Line */}
            <div className="relative mx-auto mt-8 h-1 max-w-4xl overflow-hidden rounded-full bg-gradient-to-r from-[#0072FF]/20 via-[#4EA8DE]/20 to-[#90E0EF]/20">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                className="h-full w-full origin-left bg-gradient-to-r from-[#0072FF] via-[#4EA8DE] via-[#4EA8DE] to-[#90E0EF]"
              />
            </div>

            {/* Phase Dots - positioned to align with week boxes */}
            <div className="relative mx-auto mt-[-8px] max-w-4xl">
              <div className="flex justify-between">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + i * 0.1,
                      ease: "easeOut",
                    }}
                    className={`h-4 w-4 rounded-full border-2 transition-all ${
                      i === 3
                        ? "border-[#0072FF] bg-[#0072FF]"
                        : "border-[#0072FF]/40 bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Phase Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                phase: "Foundation",
                icon: "🏗️",
                details: [
                  "Kickoff, requirements,",
                  "solution architecture,",
                  "security baseline",
                ],
              },
              {
                phase: "Build",
                icon: "⚙️",
                details: [
                  "Cloud setup, Voicing core",
                  "deploy, CI/CD, observability",
                  "integration",
                ],
              },
              {
                phase: "Integrate",
                icon: "🔗",
                details: [
                  "CCaaS workspace, SIP",
                  "routing, call-transfer",
                  "workflows, KPI setup",
                ],
              },
              {
                phase: "Launch",
                icon: "🚀",
                details: [
                  "UAT, load testing, resilience",
                  "validation, production go-",
                  "live",
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={card.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#0A1628]/15 bg-white p-6 shadow-sm transition-all hover:border-[#4EA8DE]/40 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-headline text-lg font-semibold text-[#1B4F86]">
                    {card.phase}
                  </h3>
                  <span className="text-2xl">{card.icon}</span>
                </div>
                <ul className="mt-4 space-y-1">
                  {card.details.map((detail, j) => (
                    <li
                      key={j}
                      className="text-xs leading-relaxed text-[#0A1628]/70"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-[hsl(var(--background))] px-6 py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0072FF]">
              Customer Stories
            </p>
            <h2 className="mt-3 font-headline text-[clamp(1.8rem,3.8vw,3rem)] leading-[1.1] text-[#1B4F86]">
              Proven results from industry leaders
            </h2>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="mt-12 flex items-center justify-between gap-6 md:gap-8">
            {/* Left Arrow */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={handlePrev}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0072FF] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={currentTestimonial}
              className="flex-1 overflow-hidden rounded-2xl bg-white p-8 md:p-10 shadow-lg"
            >
              {/* Quote */}
              <p className="text-base leading-relaxed text-[#0A1628]">
                "{testimonials[currentTestimonial].quote}"
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-[#0072FF]/20 via-[#4EA8DE]/20 to-transparent" />

              {/* Author Info */}
              <div>
                <p className="font-headline text-sm font-semibold text-[#1B4F86]">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="mt-1 text-xs text-[#0A1628]/70">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </motion.div>

            {/* Right Arrow */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={handleNext}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0072FF] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>

          {/* Carousel Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setCurrentTestimonial(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === currentTestimonial
                    ? "w-8 bg-[#0072FF]"
                    : "w-2.5 bg-[#0072FF]/30 hover:bg-[#0072FF]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-b from-[hsl(var(--background))] to-[#F8FAFC] px-6 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1120px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="font-headline text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] text-[#1B4F86]">
              Ready to transform your voice operations?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#0A1628]/80">
              Join Fortune 2000 companies deploying Voicing.ai in weeks, not
              quarters. Get started with a personalized demo and implementation
              roadmap.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("openContact"))
                }
                className="rounded-full bg-gradient-to-r from-[#0072FF] to-[#4EA8DE] px-8 py-3 text-base font-semibold text-white transition-transform hover:scale-105 active:scale-95"
              >
                Schedule a demo →
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="rounded-full border-2 border-[#0072FF] px-8 py-3 text-base font-semibold text-[#0072FF] transition-all hover:bg-[#0072FF]/5 active:scale-95"
              >
                Download white paper
              </motion.button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-col items-center justify-center gap-2 text-xs text-[#0A1628]/60"
            >
              <p>
                ✓ No credit card required • Enterprise security • 24/7 support
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
