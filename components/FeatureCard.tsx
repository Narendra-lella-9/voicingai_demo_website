"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  tags?: string[];
};

export default function FeatureCard({
  icon,
  title,
  description,
  tags = [],
}: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="rounded-2xl bg-white p-7 shadow-[0_12px_40px_rgba(10,22,40,0.08)]"
    >
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#2D7EFF]/10 text-[#2D7EFF]">
        {icon}
      </div>
      <h3 className="font-headline text-[clamp(1.5rem,2.5vw,2.25rem)] leading-tight text-[#0A1628]">
        {title}
      </h3>
      <p className="mt-3 text-[#0A1628]/80">{description}</p>
      {tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#2D7EFF]/20 bg-[#2D7EFF]/5 px-3 py-1 font-label text-xs uppercase tracking-[0.12em] text-[#0A1628]/80"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
