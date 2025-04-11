"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookIcon, MoveRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
import { DocumentPlusIcon } from "@heroicons/react/16/solid";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Read our launch article <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-semibold">
              Standardizing Low Code Development
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Locospec Schemas standardize complex solutions into developer & AI
              friendly specifications. Open Source.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Github <Icons.github className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Read Docs <BookIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
