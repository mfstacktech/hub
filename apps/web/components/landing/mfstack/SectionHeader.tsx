"use client";

import { useRef } from "react";
import { motion, useAnimate, useInView } from "framer-motion";

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
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false, margin: "-100px" });

  return (
    <div ref={scope} className={`text-center mx-auto ${className || ""}`}>
      {/* {sectionTag && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
          transition={{ duration: 0.5 }}
          className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400"
        >
          {sectionTag}
        </motion.p>
      )} */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
        className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 lg:text-balance"
      >
        {sectionTitle}
      </motion.h2>
      {/* {sectionDescription && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mt-6 mb-0 w-2/3 mx-auto text-xl text-gray-600 dark:text-gray-300"
        >
          {sectionDescription}
        </motion.p>
      )} */}
    </div>
  );
};

export default SectionHeader;
