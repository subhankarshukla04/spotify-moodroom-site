"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Aurora() {
  const { scrollYProgress } = useScroll();
  const yA = useTransform(scrollYProgress, [0, 1], ["0vh", "8vh"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["0vh", "-6vh"]);
  const yC = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.45, 0.35, 0.25]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="blob blob-a"
        style={{ y: yA, opacity }}
      />
      <motion.div
        className="blob blob-b"
        style={{ y: yB, opacity }}
      />
      <motion.div
        className="blob blob-c"
        style={{ y: yC, opacity }}
      />
    </div>
  );
}
