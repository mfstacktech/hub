"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue } from "framer-motion";

interface SectionHeaderProps {
  sectionTag?: string;
  sectionTitle: string;
  sectionDescription?: string;
  className?: string;
}

const SectionHeader = ({
  sectionTag,
  sectionTitle,
  sectionDescription,
  className,
}: SectionHeaderProps) => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  // Track the highest scroll progress we've reached
  const maxProgress = useRef(0);
  
  // Scale from 0.7 to 1.0 based on scroll progress
  const titleScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.7, 1.0],
    { clamp: true }
  );
  
  // Create a motion value that only increases
  const finalScale = useMotionValue(0.7);
  
  // Update the final scale based on scroll progress
  useEffect(() => {
    return titleScale.onChange((value) => {
      if (value > maxProgress.current) {
        maxProgress.current = value;
        finalScale.set(0.7 + (value * 0.3));
      }
      // Reset when scrolled to top
      if (value < 0.1) {
        maxProgress.current = 0;
      }
    });
  }, [titleScale, finalScale]);

  return (
    <div ref={headerRef} className={`text-center mx-auto ${className || ""}`}>
      {sectionTag && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
          transition={{ duration: 0.5 }}
          className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400"
        >
          {sectionTag}
        </motion.p>
      )}
      <motion.h2
        style={{ scale: isInView ? finalScale : 0.5, willChange: 'transform' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.4 }}
        className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 lg:text-balance"
      >
        {sectionTitle}
      </motion.h2>
      {sectionDescription && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 mb-0 w-2/3 mx-auto text-xl text-gray-600 dark:text-gray-300"
        >
          {sectionDescription}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
