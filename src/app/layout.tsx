import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const headlineSerif = Merriweather({
  variable: "--font-headline-serif",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "Advanced AI Calling Agents for Businesses - Voicing AI",
  description:
    "The hybrid voice intelligence stack for Fortune 2000 enterprises. Agentic accuracy meets voice transformation to deliver incredible customer experiences — entirely on your infrastructure.",
  openGraph: {
    title: "Advanced AI Calling Agents for Businesses - Voicing AI",
    description:
      "The hybrid voice intelligence stack for Fortune 2000 enterprises. Agentic accuracy meets voice transformation to deliver incredible customer experiences — entirely on your infrastructure.",
    images: [{ url: "https://www.voicing.ai/assets/hero_page-DmXkCVwX.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced AI Calling Agents for Businesses - Voicing AI",
    description:
      "The hybrid voice intelligence stack for Fortune 2000 enterprises. Agentic accuracy meets voice transformation to deliver incredible customer experiences — entirely on your infrastructure.",
    images: ["https://www.voicing.ai/assets/hero_page-DmXkCVwX.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headlineSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
