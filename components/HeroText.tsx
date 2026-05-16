type HeroTextProps = {
  label: string;
  headline: string;
  subtext: string;
  headlineClassName?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  interactive?: boolean;
};

export default function HeroText({
  label,
  headline,
  subtext,
  headlineClassName,
  ctaPrimary,
  ctaSecondary,
  interactive = false,
}: HeroTextProps) {
  return (
    <div className="max-w-[560px] text-left text-[#0A1628]">
      <p className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-[#0A1628]/80">
        {label}
      </p>
      <h2
        className={`font-headline mt-3 text-[clamp(2rem,4vw,3.5rem)] leading-[1.04] ${headlineClassName ?? ""}`}
      >
        {headline}
      </h2>
      <p className="mt-4 text-[clamp(1rem,1.5vw,1.2rem)] text-[#0A1628]/85">
        {subtext}
      </p>
      {(ctaPrimary || ctaSecondary) && (
        <div className="mt-7 flex flex-wrap gap-3">
          {ctaPrimary && (
            <a
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#0072FF] to-[#4EA8DE] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(0,114,255,0.30)]"
              style={{ pointerEvents: interactive ? "auto" : "none" }}
            >
              {ctaPrimary}
            </a>
          )}
          {ctaSecondary && (
            <a
              href="/contact"
              className="rounded-full border border-white/60 bg-white/40 px-5 py-3 text-sm font-semibold text-[#0A1628]"
              style={{ pointerEvents: interactive ? "auto" : "none" }}
            >
              {ctaSecondary}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
