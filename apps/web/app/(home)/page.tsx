import { GridBackground } from "@repo/ui/components/grid-background";
import Hero from "@/components/hero";
import Link from "next/link";
import { RecentPosts } from "./blog/[[...slug]]/(components)/blog-list";
import WhomHow from "@/components/landing/whom-how";
import HowWeSolve from "@/components/landing/how-we-solve";
import Features from "@/components/landing/features";
import WhyUs from "@/components/landing/why-us";
import Faqs from "@/components/landing/faqs";
import ConvertKitForm from "@/components/landing/mfstack/ConvertKitForm";

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
          <div className="w-full bg-gradient-to-tr from-indigo-50 to-indigo-100 dark:from-indigo-800 dark:to-indigo-700 my-12 p-4 lg:p-12 flex flex-row justify-center shadow-sm rounded-lg">
            <ConvertKitForm />
          </div>
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
