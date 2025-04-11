import type { ReactNode } from "react";
import type { TableOfContents } from "fumadocs-core/server";
import { cn } from "@repo/shadcn/lib/utils";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { GridBackground } from "@repo/ui/components/grid-background";
import { DocsPage } from "fumadocs-ui/page";

interface MdxLayoutProps {
  children: ReactNode;
  title: string;
  toc?: TableOfContents;
  slug: string;
}

export default function VanillaMdx({
  children,
  title,
  toc,
  slug,
}: MdxLayoutProps): ReactNode {
  return (
    <>
      <DocsLayout
        nav={{ enabled: false }}
        tree={{
          name: "JustMDX",
          children: [],
        }}
        sidebar={{ enabled: false, prefetch: false, tabs: false }}
        containerProps={{
          className: cn("relative container md:[--fd-nav-height:57px]"),
        }}
      >
        <GridBackground maxWidthClass="container" />
        <DocsPage
          toc={toc}
          article={{
            className: "!m-[unset] max-w-none",
          }}
          tableOfContent={{
            style: "clerk",
            single: false,
          }}
        >
          <div className="prose min-w-0 flex-1 px-4">{children}</div>
        </DocsPage>
      </DocsLayout>
    </>
  );
}
