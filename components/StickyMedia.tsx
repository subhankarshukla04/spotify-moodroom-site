"use client";

import { ReactNode, Children } from "react";
import { motion, useTransform, MotionValue, cubicBezier } from "framer-motion";
import { usePin } from "./Pin";

const EASE = cubicBezier(0.16, 1, 0.3, 1);

export default function StickyMedia({
  media,
  children,
  className = "",
}: {
  media: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const { progress, reduced } = usePin();
  const panels = Children.toArray(children);

  if (reduced || !progress) {
    return (
      <div className={`grid lg:grid-cols-2 gap-12 px-6 sm:px-10 lg:px-16 py-24 ${className}`}>
        <div>{media}</div>
        <div className="space-y-12">{panels}</div>
      </div>
    );
  }

  return (
    <div className={`relative h-full w-full grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-16 items-center px-6 sm:px-10 lg:px-16 ${className}`}>
      <div className="relative">{media}</div>
      <div className="relative h-[70vh] lg:h-[75vh]">
        {panels.map((p, i) => (
          <Slot key={i} progress={progress} index={i} count={panels.length}>
            {p}
          </Slot>
        ))}
      </div>
    </div>
  );
}

function Slot({
  children,
  progress,
  index,
  count,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  index: number;
  count: number;
}) {
  // Hold a tiny intro/outro at chapter edges so the first/last panel breathes.
  const HOLD = 0.06;
  const span = (1 - HOLD * 2) / count;
  const start = HOLD + index * span;
  const end = start + span;
  const fade = span * 0.18;

  const opacity = useTransform(
    progress,
    [start - fade, start + fade, end - fade, end + fade],
    [0, 1, 1, 0],
    { ease: EASE }
  );
  const y = useTransform(
    progress,
    [start - fade, start + fade, end - fade, end + fade],
    [24, 0, 0, -24],
    { ease: EASE }
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      style={{ opacity, y }}
    >
      <div className="w-full max-h-full overflow-hidden">{children}</div>
    </motion.div>
  );
}
