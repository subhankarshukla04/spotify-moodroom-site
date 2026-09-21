"use client";

import { ReactNode } from "react";
import { motion, useTransform, MotionValue, cubicBezier } from "framer-motion";
import { usePin } from "./Pin";

const EASE = cubicBezier(0.16, 1, 0.3, 1);

/** A single scene within a Pin, shown over [start, end] of chapter progress with soft fades. */
export default function Stage({
  range,
  children,
  className = "",
  y = 24,
  scale,
  enterFromRight = false,
  exitLeft = false,
}: {
  range: [number, number];
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: [number, number];
  enterFromRight?: boolean;
  exitLeft?: boolean;
}) {
  const { progress, reduced } = usePin();
  if (reduced || !progress) return <div className={className}>{children}</div>;
  return (
    <Inner
      progress={progress}
      range={range}
      className={className}
      y={y}
      scale={scale}
      enterFromRight={enterFromRight}
      exitLeft={exitLeft}
    >
      {children}
    </Inner>
  );
}

function Inner({
  progress,
  range,
  className,
  y,
  scale,
  enterFromRight,
  exitLeft,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  className: string;
  y: number;
  scale?: [number, number];
  enterFromRight: boolean;
  exitLeft: boolean;
  children: ReactNode;
}) {
  const [start, end] = range;
  const span = end - start;
  const fade = Math.min(0.12, span * 0.3);

  const startVisible = start <= 0;
  const endVisible = end >= 1;

  const opacity = useTransform(
    progress,
    [start, start + fade, end - fade, end],
    [startVisible ? 1 : 0, 1, 1, endVisible ? 1 : 0],
    { ease: EASE }
  );

  const yIn = startVisible ? 0 : y;
  const yOut = endVisible ? 0 : -y;
  const ty = useTransform(
    progress,
    [start, start + fade, end - fade, end],
    [yIn, 0, 0, yOut],
    { ease: EASE }
  );

  const xIn = enterFromRight ? 80 : 0;
  const xOut = exitLeft ? -80 : 0;
  const tx = useTransform(
    progress,
    [start, start + fade, end - fade, end],
    [xIn, 0, 0, xOut],
    { ease: EASE }
  );

  const sIn = scale ? scale[0] : 1;
  const sStable = scale ? scale[1] : 1;
  const s = useTransform(
    progress,
    [start, start + fade, end - fade, end],
    [sIn, sStable, sStable, sStable],
    { ease: EASE }
  );

  return (
    <motion.div
      className={`absolute inset-0 flex items-center justify-center px-6 sm:px-10 lg:px-16 ${className}`}
      style={{ opacity, y: ty, x: tx, scale: s }}
    >
      {children}
    </motion.div>
  );
}
