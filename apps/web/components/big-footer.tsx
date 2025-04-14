"use client";

import { baseOptions } from "@/app/layout.config";
import { GridBackground } from "@repo/ui/components/grid-background";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

export type FooterNavigationItem = {
  name: string;
  href: string;
};

export type FooterSocialItem = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type FooterNavigationProps = {
  solutions?: FooterNavigationItem[];
  support?: FooterNavigationItem[];
  company?: FooterNavigationItem[];
  legal?: FooterNavigationItem[];
  social?: FooterSocialItem[];
  companyName?: string;
  companyDescription?: string;
};

function Grid({
  cellSize = 12,
  strokeWidth = 1,
  patternOffset = [0, 0],
  className,
}: {
  cellSize?: number;
  strokeWidth?: number;
  patternOffset?: [number, number];
  className?: string;
}) {
  const id = React.useId();

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 text-black/10",
        className
      )}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={`grid-${id}`}
          x={patternOffset[0] - 1}
          y={patternOffset[1] - 1}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect fill={`url(#grid-${id})`} width="100%" height="100%" />
    </svg>
  );
}

export function Banner() {
  return (
    <div className="relative isolate flex flex-col justify-between gap-3 overflow-hidden rounded-lg border border-green-600/15 bg-gradient-to-r from-lime-100/80 to-emerald-100/80 py-3 px-12 sm:flex-row sm:items-center sm:py-2">
      <Grid
        cellSize={13}
        patternOffset={[0, -1]}
        className="text-black/30 mix-blend-overlay [mask-image:linear-gradient(to_right,black,transparent)] md:[mask-image:linear-gradient(to_right,black_60%,transparent)]"
      />

      <div className="flex items-center gap-3">
        <p className="text-sm text-gray-900">
          Built and actively maintained by{" "}
          <Link
            href="https://betalectic.com"
            className="font-semibold underline"
          >
            Betalectic
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function BigFooter({
  solutions,
  support,
  company,
  legal,
  social,
  companyName,
  companyDescription,
}: FooterNavigationProps) {
  const navigation = {
    solutions,
    support,
    company,
    legal,
    social,
  };

  return (
    <footer>
      <div className="relative isolate mx-auto container px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pt-24 lg:pt-32">
        <GridBackground maxWidthClass="container" />
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {baseOptions.nav?.title}
            <p className="text-sm/6 text-balance text-gray-600">
              {companyDescription}
            </p>
            <div className="flex gap-x-6">
              {navigation.social?.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions?.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support?.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company?.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal?.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row gap-2 items-center justify-between">
          <p className="text-sm/6 text-gray-600">
            &copy; 2025 MFStack. All rights reserved.
          </p>
          <Banner />
        </div>
      </div>
    </footer>
  );
}
