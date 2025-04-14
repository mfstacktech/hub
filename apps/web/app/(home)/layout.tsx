"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/app/layout.config";
import { getLinks } from "fumadocs-ui/layouts/shared";
import { Header } from "@/components/header";
import { Icons } from "@/components/icons";
import BigFooter from "@/components/big-footer";
import StripeCanvas from "../stripe/(components)/canvas";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = false; // pathname === "/";
  const footerNavigation = {
    solutions: [
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "About", href: "/about" },
      { name: "Roadmap", href: "/roadmap" },
    ],
    support: [
      { name: "Blog", href: "/blog" },
      { name: "Guides", href: "/guides" },
      { name: "API Status", href: "/api-status" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
    social: [
      {
        name: "Twitter",
        href: "https://x.com/mfstacktech",
        icon: Icons.x,
      },
      {
        name: "GitHub",
        href: "https://github.com/mfstacktech",
        icon: Icons.github,
      },
    ],
  };

  return (
    <HomeLayout
      {...baseOptions}
      nav={{
        component: (
          <Header
            finalLinks={getLinks(linkItems, baseOptions.githubUrl)}
            {...baseOptions}
            isHomePage={isHomePage}
          />
        ),
      }}
      className="pt-0 rjvim"
    >
      {isHomePage ? (
        children
      ) : (
        <div className="flex flex-1 flex-col divide-y divide-dashed divide-border/70 border-border/70 border-dashed sm:border-b dark:divide-border dark:border-border">
          {children}
        </div>
      )}

      <BigFooter
        solutions={footerNavigation.solutions}
        support={footerNavigation.support}
        company={footerNavigation.company}
        legal={footerNavigation.legal}
        social={footerNavigation.social}
        companyName="mfstack"
        companyDescription="MFStack is an Ecosystem to scale Mutual Funds Distribution"
      />
    </HomeLayout>
  );
}
