"use client";

import { useState } from "react";
import HeroText from "../../components/HeroText";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ScrollyCanvas from "../../components/ScrollyCanvas";
import ScrollySection from "../../components/ScrollySection";
import InfoSection from "../../components/InfoSection";
import ContactModal from "../../components/ContactModal";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <>
      <NavBar />
      <div
        className="fixed left-0 top-0 z-[200] h-[2px] bg-[#2D7EFF]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <main className="relative h-[600vh]">
        <ScrollyCanvas totalFrames={240} onProgressChange={setScrollProgress} />

        <ScrollySection
          progress={scrollProgress}
          showStart={0}
          showEnd={0.28}
          position="topLeft"
        >
          <HeroText
            label="Introducing Voicing AI"
            headline="AI where it scales. Humans where it matters"
            headlineClassName="text-[#1B4F86]"
            subtext="The hybrid voice intelligence stack for Fortune 2000 enterprises. Agentic accuracy meets voice transformation to deliver incredible customer experiences — entirely on your infrastructure."
            ctaPrimary="Schedule Demo ?"
          />
        </ScrollySection>

        <ScrollySection
          progress={scrollProgress}
          showStart={0.33}
          showEnd={0.62}
          position="topCenter"
        >
          <div className="mx-auto w-full max-w-[1120px] px-8 py-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
              <div className="md:border-r md:border-[#0A1628]/15 md:pr-8">
                <p className="font-headline text-3xl text-[#0072FF] md:text-4xl">
                  &lt;400ms
                </p>
                <p className="mt-2 text-base text-[#0A1628]/80 md:text-lg">
                  End-to-end voice latency
                </p>
              </div>
              <div className="text-center md:border-r md:border-[#0A1628]/15 md:pr-8">
                <p className="font-headline text-3xl text-[#0072FF] md:text-4xl">
                  Accurate
                </p>
                <p className="mt-2 text-base text-[#0A1628]/80 md:text-lg">
                  Agentic Actions
                </p>
              </div>
              <div className="md:border-r md:border-[#0A1628]/15 md:pr-8">
                <p className="font-headline text-3xl text-[#0072FF] md:text-4xl">
                  Zero
                </p>
                <p className="mt-2 text-base text-[#0A1628]/80 md:text-lg">
                  Hallucination
                </p>
              </div>
              <div>
                <p className="font-headline text-3xl text-[#0072FF] md:text-4xl">
                  &lt;4
                </p>
                <p className="mt-2 text-base text-[#0A1628]/80 md:text-lg">
                  Weeks to see Results
                </p>
              </div>
            </div>
          </div>
        </ScrollySection>

        <ScrollySection
          progress={scrollProgress}
          showStart={0.66}
          showEnd={0.96}
          position="center"
        >
          <div className="mx-auto w-full max-w-[980px] p-8 md:p-12">
            <p className="text-xl font-semibold text-[#0A1628]/45 md:text-2xl">
              The Problem
            </p>
            <h2 className="mt-3 font-headline text-[clamp(1.8rem,3.8vw,3.2rem)] leading-[1.1] text-[#1B4F86]">
              $680B in contact center costs. Unchanged in 20 years.
            </h2>
            <p className="mt-5 max-w-5xl text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-[#0A1628]/85">
              The global contact center market hasn&apos;t evolved. Cost
              structures are stuck. Voicing AI builds the infrastructure to
              transform how Fortune 2000 companies communicate — making
              conversations faster, smarter, and entirely under your control
            </p>
          </div>
        </ScrollySection>
      </main>

      <div className="relative z-10">
        <InfoSection />
        <Footer />
      </div>
      <ContactModal />
    </>
  );
}
