"use client";

import { createContext, useContext, useRef, useEffect, useState, ReactNode } from "react";
import { motion, useScroll, MotionValue, useReducedMotion } from "framer-motion";

type ChapterCtx = {
  progress: MotionValue<number> | null;
  reducedMotion: boolean;
};

const Ctx = createContext<ChapterCtx>({ progress: null, reducedMotion: false });

export function useChapter() {
  return useContext(Ctx);
}

export default function Chapter({
  height = "300vh",
  children,
  className = "",
  id,
}: {
  height?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  if (reducedMotion) {
    return (
      <section
        id={id}
        ref={ref}
        className={`relative px-6 sm:px-10 lg:px-16 py-24 border-t border-neutral-900 ${className}`}
      >
        <Ctx.Provider value={{ progress: null, reducedMotion: true }}>
          {children}
        </Ctx.Provider>
      </section>
    );
  }

  return (
    <section
      id={id}
      ref={ref}
      className={`relative ${className}`}
      style={{ height }}
    >
      <Ctx.Provider value={{ progress: scrollYProgress, reducedMotion: false }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-6 sm:px-10 lg:px-16">
          {children}
        </div>
      </Ctx.Provider>
    </section>
  );
}
