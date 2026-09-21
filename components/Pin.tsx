"use client";

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { useScroll, useTransform, MotionValue, useReducedMotion } from "framer-motion";

type PinCtx = {
  progress: MotionValue<number> | null;
  reduced: boolean;
};

const Ctx = createContext<PinCtx>({ progress: null, reduced: false });
export const usePin = () => useContext(Ctx);

export default function Pin({
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
  const reduced = useReducedMotion() ?? false;
  const { scrollY } = useScroll();
  const [bounds, setBounds] = useState<[number, number]>([0, 1]);

  useEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      const start = top;
      const end = top + el.offsetHeight - window.innerHeight;
      setBounds([start, Math.max(start + 1, end)]);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [reduced]);

  const progress = useTransform(scrollY, bounds, [0, 1], { clamp: true });

  if (reduced) {
    return (
      <section
        id={id}
        ref={ref}
        className={`relative px-6 sm:px-10 lg:px-16 py-24 border-t border-neutral-900 ${className}`}
      >
        <Ctx.Provider value={{ progress: null, reduced: true }}>{children}</Ctx.Provider>
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
      <Ctx.Provider value={{ progress, reduced: false }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {children}
        </div>
      </Ctx.Provider>
    </section>
  );
}
