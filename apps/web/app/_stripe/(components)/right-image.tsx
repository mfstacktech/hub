import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { GridBackground } from "@repo/ui/components/grid-background";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@repo/shadcn/components/button";
import { FloatingPaths } from "@repo/shadcn/components/kokonutui/background-paths";

export default function RightImage() {
  return (
    <div
      className="relative flex w-full flex-col items-center px-5 overflow-x-hidden"
      // style={{
      //   marginBottom: "calc(calc(calc(100vw - 0px)* 0.106)*-1)",
      // }}
    >
      {/* <div className="absolute inset-0 w-full h-full overflow-visible">
        <div
          className="relative h-full w-full top-0 left-0 overflow-hidden"
          style={{
            transformOrigin: "0 0",
            transform: "skewY(-6deg)",
            background: "#f6f9fc",
          }}
        ></div>
      </div> */}

      <GridBackground maxWidthClass="container" />

      <FloatingPaths position={-1} color="text-blue-300 dark:text-blue-500" />
      <FloatingPaths position={-2} color="text-cyan-300 dark:text-cyan-500" />

      <div className="relative isolate mx-auto container px-4 sm:px-6 lg:px-8 relative grid-cols-1 pb-24 pt-32 md:grid-cols-[max(50%,400px)_1fr] grid mx-auto">
        <div className="space-y-8 sm:px-4">
          <div className="flex h-6 w-fit items-center gap-2 whitespace-nowrap rounded-full bg-black/30 py-0.5 pl-3 pr-3 text-xs font-semibold text-white backdrop-blur">
            Preview
          </div>

          <span
            className={cn(
              "text-[min(88px,7vmax)] font-bold leading-[1.1] tracking-tighter text-gray-800 dark:text-gray-200",
              "isolate block mix-blend-color-burn"
            )}
          >
            Take your Mutual Funds Distribution digital in minutes
          </span>

          <p className="text-base md:text-lg">
            The best UI infrastructure to build and launch Mutual
            Funds Mobile & Web Apps in days. Built for IFAs, Independent Distributors, Fintechs, Wealth
            Management Companies to AMCs - MFStack helps you build MF Journeys
            efficiently.
          </p>

          <Link
            href="https://cal.com/varsha.pius"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full">
              Connect Now <ArrowRightIcon />
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-60 left-56 col-start-2 h-[580px] w-[920px] overflow-hidden rounded-4xl shadow-2xl">
          <div className="ml-0 mt-0 size-full rounded-tl-2xl">
            <Image
              src={"/mfstack/dit-dashboard-light.png"}
              alt="phone"
              width={920}
              height={536}
              className="relative object-contain rounded-2xl hidden [html.light_&]:block"
              style={{
                filter: "drop-shadow(0 6px 24px rgba(0,0,0,0.4))",
              }}
            />

            <Image
              src={"/mfstack/dit-dashboard-dark.png"}
              alt="phone"
              width={920}
              height={536}
              className="relative object-contain rounded-2xl hidden [html.dark_&]:block"
              style={{
                filter: "drop-shadow(0 6px 24px rgba(0,0,0,0.4))",
              }}
            />
          </div>
        </div>
        <div className="relative hidden h-full items-center justify-center md:flex">
          <figure
            className="rounded-2xl relative w-[270px] h-[536px] bg-white dark:bg-black m-0"
            aria-hidden="true"
            style={{
              boxShadow:
                "0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0 -2px 6px 0 rgba(10, 37, 64, 0.35)",
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
            }}
          >
            {/* <div className="h-36 bg-indigo-500 rounded-t-2xl"></div> */}
            <Image
              src={"/mfstack/image.png"}
              alt="phone"
              width={270}
              height={536}
              className="relative object-contain rounded-2xl"
              style={{
                filter: "drop-shadow(0 6px 24px rgba(0,0,0,0.4))",
              }}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
