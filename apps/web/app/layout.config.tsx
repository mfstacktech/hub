import { Icons } from "@/components/icons";
import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";

export const title = "MF Stack:Scale your Mutual Fund Distribution Online";
export const description =
  "Distribute Mutual Funds Online in Minutes. Distributor Web Apps, Investor Web & Mobile Apps. Your Investors, Your AUM, Your Data.";
export const owner = "MFStack";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img src="/logo.svg" alt="logo" className="w-12 h-12" />
        MFStack
      </>
    ),
  },
  links: [
    {
      text: "Docs",
      url: "/docs",
    },
  ],
};

export const linkItems: LinkItemType[] = [
  // {
  //   icon: <Icons.info />,
  //   text: "Pricing",
  //   url: "/pricing",
  //   active: "url",
  // },
  // {
  //   icon: <Icons.info />,
  //   text: "Blog",
  //   url: "/blog",
  //   active: "url",
  // },
  // {
  //   icon: <Icons.info />,
  //   text: "About",
  //   url: "/about",
  //   active: "url",
  // },
  // {
  //   icon: <Icons.info />,
  //   text: "Roadmap",
  //   url: "/roadmap",
  //   active: "url",
  // },
  // {
  //   icon: <Icons.posts />,
  //   text: "Me",
  //   url: "/me",
  //   active: "url",
  // },
  // {
  //   icon: <Icons.tags />,
  //   text: "Tags",
  //   url: "/tags",
  //   active: "url",
  // },
];

export const postsPerPage = 5;
