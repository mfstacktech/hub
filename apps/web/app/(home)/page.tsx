import { GridBackground } from "@repo/ui/components/grid-background";
import WhomHow from "@/components/landing/whom-how";
import HowWeSolve from "@/components/landing/how-we-solve";
import Features from "@/components/landing/features";
import WhyUs from "@/components/landing/why-us";
import Faqs from "@/components/landing/faqs";
import ConvertKitForm from "@/components/landing/mfstack/ConvertKitForm";
import RightImage from "../stripe/(components)/right-image";
import { Faqs2, FaqSection } from "@/components/landing/faqs2";

export default function HomePage() {
  return (
    <>
      <RightImage />

      <div className="relative flex flex-col items-center justify-center w-full mx-auto container space-y-8">
        <GridBackground maxWidthClass="container" />

        <div className="flex flex-1 flex-col divide-y divide-dashed divide-border/70 border-border/70 border-dashed sm:border-b dark:divide-border dark:border-border relative">
          <div className="max-w-6xl bg-gradient-to-tr from-indigo-50 to-indigo-100 dark:from-indigo-800 dark:to-indigo-700 my-12 p-4 lg:p-12 flex flex-row justify-center shadow-sm rounded-lg mx-auto">
            <ConvertKitForm />
          </div>

          <div className="py-12">
            <WhomHow />
          </div>
          <div className="py-12">
            <HowWeSolve />
          </div>
          <div className="py-12">
            <Features />
          </div>
          <div className="py-12">
            <WhyUs />
          </div>
          <div className="py-12">
            {/* <Faqs /> */}
            <Faqs2 />
          </div>
        </div>
      </div>
    </>
  );
}
