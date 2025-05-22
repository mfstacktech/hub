"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        originX: 0,
        backgroundColor: "rgb(97 90 226)",
        zIndex: 1000,
      }}
    />
  );
}
