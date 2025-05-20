"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@repo/shadcn/components/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ContactInfo = {
  title: string;
  description: string;
  buttonText: string;
  calendarUrl: string;
};

type ContactSectionProps = {
  contactInfo: ContactInfo;
  className?: string;
};

export function ContactSection({ contactInfo, className }: ContactSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={cn(
        "max-w-md mx-auto p-6 rounded-lg text-center bg-muted/30",
        className
      )}
    >
      <div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4">
        <Calendar className="h-4 w-4" />
      </div>
      <p className="text-sm font-medium text-foreground mb-1">
        {contactInfo.title}
      </p>
      <p className="text-xs text-muted-foreground mb-4">
        {contactInfo.description}
      </p>
      <Button asChild size="sm">
        <Link
          href={contactInfo.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contactInfo.buttonText}
        </Link>
      </Button>
    </motion.div>
  );
}
