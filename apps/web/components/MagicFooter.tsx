import React, { useMemo, useRef, useState, useEffect, RefObject } from "react";
import { motion } from "framer-motion";

// use-debounced-dimensions
interface Dimensions {
  width: number;
  height: number;
}

function useDimensions(ref: RefObject<HTMLElement | SVGElement>): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>; // Fix: Use ReturnType<typeof setTimeout> for NodeJS.Timeout

    const updateDimensions = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    const debouncedUpdateDimensions = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 250); // Wait 250ms after resize ends
    };

    // Initial measurement
    updateDimensions();

    window.addEventListener('resize', debouncedUpdateDimensions);

    return () => {
      window.removeEventListener('resize', debouncedUpdateDimensions);
      clearTimeout(timeoutId);
    };

  }, [ref]);

  return dimensions;
}

// cn utility (simplified for this single file context)
type ClassValue = string | undefined | null | Record<string, any>;

function cn(...inputs: ClassValue[]) {
  return inputs
    .flat()
    .filter(Boolean)
    .map((input) => {
      if (typeof input === 'string') {
        return input;
      }
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ');
}


interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
}

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  );

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
      ? "blur-3xl"
      : "blur-[100px]";

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {colors.map((color, index) => (
          <motion.svg
            key={index}
            className="absolute animate-background-gradient"
            style={
              {
                top: `${Math.random() * 50}%`,
                left: `${Math.random() * 50}%`,
                "--background-gradient-speed": `${1 / speed}s`,
                "--tx-1": Math.random() - 0.5,
                "--ty-1": Math.random() - 0.5,
                "--tx-2": Math.random() - 0.5,
                "--ty-2": Math.random() - 0.5,
                "--tx-3": Math.random() - 0.5,
                "--ty-3": Math.random() - 0.5,
                "--tx-4": Math.random() - 0.5,
                "--ty-4": Math.random() - 0.5,
              } as React.CSSProperties
            }
            width={circleSize * randomInt(0.5, 1.5)}
            height={circleSize * randomInt(0.5, 1.5)}
            viewBox="0 0 100 100"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }} // Appear, stay, disappear
            transition={{
              duration: 4, // Total duration for one cycle
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1, // Delay before repeating the animation
              delay: index * 0.5, // Stagger the start of each circle's animation
            }}
          >
            <circle
              cx="50"
              cy="50"
              r="50"
              fill={color}
              className="opacity-30 dark:opacity-[0.15]"
            />
          </motion.svg>
        ))}
      </div>
    </div>
  );
};


interface BentoCardProps {
  title: string
  value: React.ReactNode
  subtitle?: string
  colors: string[]
  delay: number
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  value,
  subtitle,
  colors,
  delay,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    animate: {
      opacity: [0, 1, 1, 0], // Appear, stay, disappear
      y: [20, 0, 0, 20],
      transition: {
        duration: 4, // Total duration for one cycle, matching background
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1, // Delay before repeating the animation, matching background
      },
    },
  }

  return (
    <motion.div
      className="relative group w-full h-[100px] p-4 rounded-2xl overflow-hidden bg-background dark:bg-background/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center p-4 text-foreground backdrop-blur-sm"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3 
          className="text-xs sm:text-sm md:text-base text-foreground" 
          variants={item}
          animate="animate" // Apply the looping animation
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-xl sm:text-2xl font-medium mb-1 text-foreground"
          variants={item}
          animate="animate" // Apply the looping animation
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p 
            className="text-xs text-foreground/80" 
            variants={item}
            animate="animate" // Apply the looping animation
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}

const AnimatedGradientDemo: React.FC = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes background-gradient {
          0%, 100% {
            transform: translate(0, 0);
            animation-delay: var(--background-gradient-delay, 0s);
          }
          20% {
            transform: translate(calc(100% * var(--tx-1, 1)), calc(100% * var(--ty-1, 1)));
          }
          40% {
            transform: translate(calc(100% * var(--tx-2, -1)), calc(100% * var(--ty-2, 1)));
          }
          60% {
            transform: translate(calc(100% * var(--tx-3, 1)), calc(100% * var(--ty-3, -1)));
          }
          80% {
            transform: translate(calc(100% * var(--tx-4, -1)), calc(100% * var(--ty-4, -1)));
          }
        }
        .animate-background-gradient {
          animation: background-gradient var(--background-gradient-speed, 15s) cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
        }
        .blur-\[100px\] {
          filter: blur(100px);
        }
        .dark\:bg-background\/50 {
          background-color: rgba(var(--background-rgb), 0.5);
        }
        .dark\:opacity-\[0\.15\] {
          opacity: 0.15;
        }
        .dark\:text-foreground {
          color: var(--foreground);
        }
        .dark\:text-foreground\/80 {
          color: rgba(var(--foreground-rgb), 0.8);
        }
        /* Basic Tailwind-like variables for demonstration if not provided by a full Tailwind setup */
        :root {
          --background-rgb: 255, 255, 255; /* white */
          --foreground-rgb: 0, 0, 0; /* black */
        }
        .dark {
          --background-rgb: 0, 0, 0; /* black */
          --foreground-rgb: 255, 255, 255; /* white */
        }
        .bg-background {
          background-color: rgb(var(--background-rgb));
        }
        .text-foreground {
          color: rgb(var(--foreground-rgb));
        }
        .text-foreground\/80 {
          color: rgba(var(--foreground-rgb), 0.8);
        }
      `}</style>
      <div className="w-full bg-background h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 grow h-full">
          <div className="md:col-span-2">
          <BentoCard
              title="Distributor Initiated Transactions & KYC"
              value="Distributor Focused"
              subtitle="Onboard your Investors & create orders for your Investors"
              colors={["#3B82F6", "#60A5FA", "#93C5FD"]}
              delay={0.2}
            />
          </div>
          <BentoCard
            title="Investor Metrics"
            value="Tractions"
            subtitle="Signups, SIPs, AUM & more"
            colors={["#60A5FA", "#34D399", "#93C5FD"]}
            delay={0.4}
          />
          <BentoCard
            title="ONDC"
            value="ONDC Powered"
            subtitle="A leap forward towards financial inclusion!"
            colors={["#F59E0B", "#A78BFA", "#FCD34D"]}
            delay={0.6}
          />
          <div className="md:col-span-2">
          <BentoCard
              title="Cheaper yet powerful"
              value={
                <span>
                  <span className="text-sm">Starts at</span> ₹2,000
                </span>
              }
              subtitle="Affordable. Scalable. Powerful. Reliable."
              colors={["#3B82F6", "#A78BFA", "#FBCFE8"]}
              delay={0.8}
            />
          </div>
          <div className="md:col-span-3">
            <BentoCard
              title="Investor Apps"
              value="Investor Suite"
              subtitle="Investor Web & Mobile Apps tailored to your branding"
              colors={["#EC4899", "#F472B6", "#3B82F6"]}
              delay={1}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AnimatedGradientDemo;
