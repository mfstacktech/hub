// components/ui/faq-section.tsx
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string;
  }[];
}

function FaqSection({
  className,
  title,
  description,
  items,
  ...props
}: FaqSectionProps) {
  return (
    <section
      className={cn(
        "py-16 w-full bg-gradient-to-b from-transparent via-muted/50 to-transparent",
        className
      )}
      {...props}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-2xl mx-auto space-y-2">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className={cn(
                "rounded-lg",
                "transition-all duration-200 ease-in-out",
                "border border-border/50",
                "overflow-hidden"
              )}
            >
              <Disclosure>
                {({ open }) => (
                  <div
                    className={cn(
                      open
                        ? "bg-gradient-to-br from-background via-muted/50 to-background"
                        : "hover:bg-muted/50"
                    )}
                  >
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left px-6 py-4">
                        <span
                          className={cn(
                            "text-base font-medium break-words pr-6",
                            "transition-colors duration-200",
                            "text-foreground/70",
                            open && "text-foreground"
                          )}
                        >
                          {item.question}
                        </span>
                        <motion.span
                          className={cn(
                            "ml-6 flex-shrink-0 flex h-7 items-center",
                            "p-0.5 rounded-full",
                            "transition-colors duration-200",
                            open ? "text-primary" : "text-muted-foreground"
                          )}
                          animate={{
                            rotate: open ? 180 : 0,
                            scale: open ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </DisclosureButton>
                    </dt>
                    <AnimatePresence initial={false}>
                      {open && (
                        <DisclosurePanel static>
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                              transition: { duration: 0.2, ease: "easeOut" },
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              transition: { duration: 0.2, ease: "easeIn" },
                            }}
                          >
                            <div className="px-6 pb-4 pt-2">
                              <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                className="text-sm text-muted-foreground leading-relaxed"
                              >
                                {item.answer}
                              </motion.p>
                            </div>
                          </motion.div>
                        </DisclosurePanel>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqQuestions = [
  {
    question: "What Mutual fund Transaction Providers do you Support?",
    answer: "Our Transaction production is powered by Fintech Primitive APIs.",
  },
  {
    question: "How can I go live in minutes to start MF distribution online?",
    answer:
      "Distribute Mutual Funds online in just 3 steps: Obtain your ARN and complete AMC empanelment; Get APIs from Fintech Primitives; Sign up with MF Stack to go live in minutes - start for free!",
  },
  {
    question: "What kind of transactions do you support?",
    answer:
      "We support the following kinds of transactions: One time purchase, SIP, Switch, SWP, STP and Redemption",
  },
  {
    question: "What features do you support for SIP investments?",
    answer:
      "We support Pause, Cancel and Resume of SIP. Other than this we also support Step up and Step down SIPs",
  },
  {
    question: "Do you build solutions for customized MF Product?",
    answer:
      "Yes, we can build a custom solution for your needs. You can setup a call with our team which will understand your requirements, and layout a plan for your custom application. We take care of the look and feel of your app and build you an enterprise grade application which can help you scale your business.",
  },
  // Commented FAQs preserved from original file
  // {
  //   question: "How to migrate my current investors to FP?",
  //   answer: "",
  // },
  // {
  //   question:
  //     "If I migrate to FP, do I have to create new mandates for my investors?",
  //   answer: "",
  // },
  // {
  //   question: "How to migrate the existing folios to FP?",
  //   answer: "",
  // },
];

function Faqs2() {
  return (
    <FaqSection
      title="Frequently asked questions"
      description="Everything you need to know about the product and billing."
      items={faqQuestions}
    />
  );
}

export { FaqSection, Faqs2 };
