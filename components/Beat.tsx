"use client";

import { ReactNode } from "react";
import { motion, useTransform, MotionValue, cubicBezier } from "framer-motion";
import { useChapter } from "./Chapter";

const EASE = cubicBezier(0.16, 1, 0.3, 1);

type BeatProps = {
  range: [number, number];
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: [number, number];
  fade?: boolean;
};

export default function Beat({
  range,
  children,
  className = "",
  y = 16,
  scale,
  fade = true,
}: BeatProps) {
  const { progress, reducedMotion } = useChapter();

  if (reducedMotion || !progress) {
    return <div className={className}>{children}</div>;
  }

  const [start, end] = range;
  const span = end - start;
  const fadeIn = start <= 0 ? 0 : span * 0.25;
  const fadeOut = end >= 1 ? 0 : span * 0.25;
  const startOpacity = start <= 0 ? 1 : 0;
  const endOpacity = end >= 1 ? 1 : 0;

  return (
    <BeatInner
      progress={progress}
      start={start}
      end={end}
      fadeIn={fadeIn}
      fadeOut={fadeOut}
      startOpacity={startOpacity}
      endOpacity={endOpacity}
      y={y}
      scale={scale}
      fade={fade}
      className={className}
    >
      {children}
    </BeatInner>
  );
}

function BeatInner({
  progress,
  start,
  end,
  fadeIn,
  fadeOut,
  startOpacity,
  endOpacity,
  y,
  scale,
  fade,
  className,
  children,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  fadeIn: number;
  fadeOut: number;
  startOpacity: number;
  endOpacity: number;
  y: number;
  scale?: [number, number];
  fade: boolean;
  className: string;
  children: ReactNode;
}) {
  const opacity = useTransform(
    progress,
    [start, start + fadeIn, end - fadeOut, end],
    fade ? [startOpacity, 1, 1, endOpacity] : [1, 1, 1, 1],
    { ease: EASE }
  );

  const yIn = startOpacity === 1 ? 0 : y;
  const yOut = endOpacity === 1 ? 0 : -y;

  const translateY = useTransform(
    progress,
    [start, start + fadeIn, end - fadeOut, end],
    [yIn, 0, 0, yOut],
    { ease: EASE }
  );

  const sIn = scale ? scale[0] : 1;
  const sStable = scale ? scale[1] : 1;

  const s = useTransform(
    progress,
    [start, start + fadeIn, end - fadeOut, end],
    [sIn, sStable, sStable, sStable],
    { ease: EASE }
  );

  return (
    <motion.div
      className={`absolute inset-0 flex items-center justify-center ${className}`}
      style={{ opacity, y: translateY, scale: s }}
    >
      {children}
    </motion.div>
  );
}
