"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@repo/shadcn/components/sonner";
import { TooltipProvider } from "@repo/shadcn/components/tooltip";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";

export function Provider({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RootProvider
        search={{
          options: {
            type: "static",
            defaultTag: "docs",
            tags: [
              {
                name: "Docs",
                value: "docs",
              },
              {
                name: "Blog",
                value: "blog",
              },
            ],
          },
        }}
        theme={{
          enabled: false,
        }}
      >
        <TooltipProvider>
          <ViewTransition>{children}</ViewTransition>
        </TooltipProvider>
        <Toaster />
      </RootProvider>
    </ThemeProvider>
  );
}
