import { GridBackground } from "@repo/ui/components/grid-background";
import Hero from "@/components/hero";
import Link from "next/link";
import { RecentPosts } from "./blog/[[...slug]]/(components)/blog-list";
import WhomHow from "@/components/landing/whom-how";
import HowWeSolve from "@/components/landing/how-we-solve";
import Features from "@/components/landing/features";
import WhyUs from "@/components/landing/why-us";
import Faqs from "@/components/landing/faqs";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col justify-center text-center">
      <div className="relative flex w-full flex-col items-center overflow-x-hidden">
        <GridBackground maxWidthClass="max-w-7xl" />

        <div className="relative flex flex-col items-center justify-center w-full mx-auto container">
          <div className="space-y-8">
            <Hero />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-full mx-auto container space-y-8">
          <WhomHow />
          <HowWeSolve />
          <Features />
          <WhyUs />
          <Faqs />
        </div>

        <RecentPosts />
      </div>
    </div>
  );
}
