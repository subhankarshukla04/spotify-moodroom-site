"use client";

import { ReactNode, Children } from "react";
import { motion, useTransform, MotionValue, cubicBezier } from "framer-motion";
import { usePin } from "./Pin";

const EASE = cubicBezier(0.16, 1, 0.3, 1);

export default function HSlide({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { progress, reduced } = usePin();
  const panels = Children.toArray(children);
  const n = panels.length;

  if (reduced || !progress || n <= 1) {
    return (
      <div className={`relative h-full w-full ${className}`}>
        <div className="h-full flex flex-col gap-16 px-6 sm:px-10 lg:px-16 py-24">
          {panels}
        </div>
      </div>
    );
  }

  return <Inner progress={progress} panels={panels} className={className} />;
}

function Inner({
  progress,
  panels,
  className,
}: {
  progress: MotionValue<number>;
  panels: ReactNode[];
  className: string;
}) {
  const n = panels.length;

  // Each panel "dwells" (sits still) and each pair has a "transition" (slow horizontal slide).
  // Ratio dwell:transition = 1:2.4 — the slide is the cinematic moment, give it the most scroll.
  //   dwell weight = 1, transition weight = 2.4
  //   total weight = n*1 + (n-1)*2.4
  const dwellW = 1;
  const transW = 2.4;
  const totalW = n * dwellW + (n - 1) * transW;
  const dwell = dwellW / totalW;
  const trans = transW / totalW;

  // Build keyframes: [0, dwell, dwell+trans, 2*dwell+trans, 2*dwell+2*trans, ...]
  // Output: [0%, 0%, -100%, -100%, -200%, -200%, ...]
  const times: number[] = [0];
  const values: string[] = ["0%"];
  let t = 0;
  for (let i = 0; i < n; i++) {
    const x = `-${i * 100}%`;
    if (i > 0) {
      // transition into this panel just landed at time t
      values.push(x);
      times.push(t);
    } else {
      // ensure starting point present (already pushed 0)
    }
    t += dwell;
    times.push(t);
    values.push(x);
    if (i < n - 1) {
      t += trans;
    }
  }

  const x = useTransform(progress, times, values, { ease: EASE });

  // Soft fade only at chapter edges so the row blends with neighboring chapters.
  const opacity = useTransform(
    progress,
    [0, 0.04, 0.96, 1],
    [0, 1, 1, 0],
    { ease: EASE }
  );

  return (
    <motion.div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <motion.div
        className="flex h-full"
        style={{ x, width: `${n * 100}%` }}
      >
        {panels.map((p, i) => (
          <div
            key={i}
            className="w-full shrink-0 h-full flex items-center justify-center px-6 sm:px-10 lg:px-16"
          >
            {p}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
