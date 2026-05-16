"use client";

import { useCallback, useEffect, useRef } from "react";

type ScrollyCanvasProps = {
  totalFrames: number;
  onProgressChange: (progress: number) => void;
};

const SECTION_MULTIPLIER = 6;
const BATCH_SIZE = 20;

export default function ScrollyCanvas({
  totalFrames,
  onProgressChange,
}: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const resizeTimeoutRef = useRef<number | null>(null);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const frame = framesRef.current[index];

    if (!canvas || !frame) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
  }, []);

  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFrame(frameIndexRef.current);
  }, [drawFrame]);

  const onScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const sectionHeight = window.innerHeight * SECTION_MULTIPLIER;
      const progress = Math.max(0, Math.min(1, window.scrollY / sectionHeight));
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(progress * totalFrames),
      );

      frameIndexRef.current = frameIndex;
      onProgressChange(progress);
      drawFrame(frameIndex);
    });
  }, [drawFrame, onProgressChange, totalFrames]);

  useEffect(() => {
    let mounted = true;

    const loadFrame = (index: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = `/frames/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;
        img.onload = () => {
          framesRef.current[index - 1] = img;
          resolve();
        };
        img.onerror = () => {
          framesRef.current[index - 1] = null;
          resolve();
        };
      });

    const preload = async () => {
      framesRef.current = new Array(totalFrames).fill(null);

      for (let start = 1; start <= totalFrames; start += BATCH_SIZE) {
        const end = Math.min(totalFrames, start + BATCH_SIZE - 1);
        const batch: Promise<void>[] = [];

        for (let i = start; i <= end; i += 1) {
          batch.push(loadFrame(i));
        }

        await Promise.all(batch);
      }

      if (mounted) {
        drawFrame(frameIndexRef.current);
      }
    };

    preload();

    return () => {
      mounted = false;
    };
  }, [drawFrame, totalFrames]);

  useEffect(() => {
    updateCanvasSize();
    onScroll();

    const onResize = () => {
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = window.setTimeout(() => {
        updateCanvasSize();
      }, 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [onScroll, updateCanvasSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-screen w-screen pointer-events-none"
      style={{ willChange: "transform" }}
    />
  );
}
