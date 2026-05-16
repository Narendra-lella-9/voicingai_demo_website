"use client";

import { ReactNode } from "react";

type ScrollySectionProps = {
  progress: number;
  showStart: number;
  showEnd: number;
  position: "center" | "left" | "right" | "bottom" | "topLeft" | "topCenter";
  children: ReactNode;
  interactive?: boolean;
};

export default function ScrollySection({
  progress,
  showStart,
  showEnd,
  position,
  children,
  interactive = false,
}: ScrollySectionProps) {
  const buffer = 0.03;

  let opacity = 0;
  if (progress >= showStart - buffer && progress <= showEnd + buffer) {
    if (progress < showStart) {
      opacity = (progress - (showStart - buffer)) / buffer;
    } else if (progress > showEnd) {
      opacity = (showEnd + buffer - progress) / buffer;
    } else {
      opacity = 1;
    }
  }

  opacity = Math.max(0, Math.min(1, opacity));
  const visible = opacity > 0.02;

  const basePosition = {
    center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    left: "left-[8%] top-1/2 -translate-y-1/2",
    right: "right-[8%] top-1/2 -translate-y-1/2",
    bottom: "left-1/2 bottom-[10%] -translate-x-1/2",
    topLeft: "left-[8%] top-[18%]",
    topCenter: "left-1/2 top-[28%] -translate-x-1/2",
  }[position];

  const fromTransform = {
    center: "scale(0.96)",
    left: "translateX(-28px)",
    right: "translateX(28px)",
    bottom: "translateY(20px)",
    topLeft: "translateX(-28px)",
    topCenter: "translateY(-18px)",
  }[position];

  return (
    <div
      className={`fixed z-[90] w-full px-6 md:px-10 ${basePosition}`}
      style={{
        opacity,
        transform: visible ? undefined : fromTransform,
        transition: "opacity 0.12s linear, transform 0.22s ease",
        pointerEvents: interactive && opacity > 0.85 ? "auto" : "none",
        visibility: visible ? "visible" : "hidden",
      }}
    >
      {children}
    </div>
  );
}
