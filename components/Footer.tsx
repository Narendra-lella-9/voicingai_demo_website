import Image from "next/image";

const groups = [
  {
    label: "PLATFORM",
    links: [
      { text: "Voice Agents", href: "/voice-agents", accent: false },
      { text: "Real-Time Translation", href: "/rtt", accent: false },
      { text: "Voice Identity (VIT)", href: "/vit", accent: false },
      { text: "AI Observability", href: "/observability", accent: false },
    ],
  },
  {
    label: "INDUSTRIES",
    links: [
      { text: "Healthcare", href: "/healthcare", accent: true },
      { text: "Insurance", href: "/insurance", accent: false },
      { text: "Telecom", href: "/telecom", accent: true },
      { text: "Banking & Finance", href: "/banking", accent: true },
      { text: "Airlines & Travel", href: "/airlines", accent: true },
    ],
  },
  {
    label: "ENTERPRISE",
    links: [
      { text: "On-Prem Deploy", href: "/on-prem-deploy", accent: true },
      { text: "Compliance", href: "/compliance", accent: false },
      { text: "Governance", href: "/governance", accent: false },
      { text: "Security", href: "/security", accent: false },
    ],
  },
  {
    label: "RESOURCE",
    links: [
      { text: "White paper", href: "/white-paper", accent: false },
      { text: "Case studies", href: "/case-studies", accent: false },
      { text: "Blogs", href: "/blogs", accent: true },
      { text: "News & Media", href: "/news", accent: true },
      { text: "AI Research", href: "/ai-research", accent: true },
    ],
  },
  {
    label: "COMPANY",
    links: [
      { text: "About", href: "/about-us", accent: true },
      { text: "Careers", href: "/careers", accent: true },
      { text: "Contact", href: "/contact", accent: true },
    ],
  },
];

const social = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/voicing-ai/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.358V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.37 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/VoicingAI",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/voicing.ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--background))] text-black">
      {/* Thin top divider */}
      <div className="h-px bg-black/10" />

      <div className="mx-auto max-w-[1280px] px-6 pb-10 pt-14 md:px-10">
        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Voicing AI"
                width={130}
                height={130}
                className="object-contain"
              />
              {/* <span className="text-lg font-semibold tracking-tight text-black">
                Voicing AI
              </span>  */}
            </div>
            <p className="mt-5 max-w-[260px] text-sm leading-7 text-black">
              The hybrid voice intelligence stack for Fortune 2000. True
              on-premise AI, zero third-party dependencies, best-in-class
              enterprise benchmarks.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-black">
                  {group.label}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map(({ text, href, accent }) => (
                    <li key={text}>
                      <a
                        href={href}
                        className="text-sm text-black transition-colors hover:text-gray-600"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-black md:flex-row md:items-center md:justify-between">
          <p>© 2026 Voicing.ai. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-gray-600"
            >
              Privacy Policy
            </a>
            <span className="text-black">·</span>
            <a
              href="/terms-of-use"
              className="transition-colors hover:text-gray-600"
            >
              Terms of Service
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-black">
              OUR SOCIAL
            </span>
            {social.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/20 bg-white text-black transition-all hover:border-gray-400 hover:shadow-sm"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
