"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const links = [
  { label: "Voice Agents", href: "#voice-agents" },
  { label: "RTT", href: "#rtt" },
  { label: "VIT", href: "#vit" },
  { label: "Observability", href: "#observability" },
  { label: "Industries", href: "#industries" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#voice-agents");

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    const syncHash = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const handleSectionScroll = useCallback((href: string) => {
    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    setActiveHref(href);

    const navOffset = 96;
    const top =
      section.getBoundingClientRect().top + window.scrollY - navOffset;

    window.history.replaceState(null, "", href);
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-[100] px-3 transition-all duration-300 md:px-6">
      <nav
        className={`relative mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between overflow-hidden rounded-[24px] px-4 md:px-6 ${
          scrolled
            ? "border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(238,246,255,0.82))] shadow-[0_18px_50px_rgba(10,22,40,0.14)] backdrop-blur-2xl"
            : "border border-white/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(244,249,255,0.74))] shadow-[0_10px_30px_rgba(10,22,40,0.08)] backdrop-blur-xl"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(78,168,222,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,114,255,0.12),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

        <a
          href="#top"
          aria-label="Voicing AI home"
          className="relative z-10 flex items-center gap-3"
          onClick={(event) => {
            event.preventDefault();
            setActiveHref("#voice-agents");
            window.history.replaceState(null, "", "#top");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="flex h-12 items-center rounded-full border border-white/70 bg-white/75 pl-2 pr-4 shadow-[0_10px_24px_rgba(10,22,40,0.08)] backdrop-blur-md">
            <Image src="/logo.png" alt="Voicing AI" width={140} height={140} />
          </div>
          {/* <div className="hidden xl:flex flex-col leading-none">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0072FF]">
              Enterprise Voice AI
            </span>
            <span className="mt-1 font-headline text-sm text-[#0A1628]">
              On-premise intelligence stack
            </span>
          </div> */}
        </a>

        <ul className="relative z-10 hidden items-center gap-1 rounded-full border border-white/70 bg-white/60 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                className={`block rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeHref === link.href
                    ? "bg-gradient-to-r from-[#0072FF] to-[#4EA8DE] text-white shadow-[0_10px_22px_rgba(0,114,255,0.22)]"
                    : "text-[#0A1628]/80 hover:bg-white/80 hover:text-[#0A1628]"
                }`}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleSectionScroll(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => window.dispatchEvent(new CustomEvent("openContact"))}
          className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#8FC5FF]/60 bg-gradient-to-r from-[#0072FF] via-[#2387FF] to-[#4EA8DE] px-3 py-2 pr-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(0,114,255,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          <span className="pl-2">Request Demo</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/18 ring-1 ring-white/20">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.4}
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </span>
        </button>
      </nav>
    </header>
  );
}
