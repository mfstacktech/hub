import { GridBackground } from "@repo/ui/components/grid-background";
import WhomHow from "@/components/landing/whom-how";
import HowWeSolve from "@/components/landing/how-we-solve";
import Features from "@/components/landing/features";
import WhyUs from "@/components/landing/why-us";
import Faqs from "@/components/landing/faqs";
import ConvertKitForm from "@/components/landing/mfstack/ConvertKitForm";
import RightImage from "../stripe/(components)/right-image";
import { Faqs2 } from "@/components/landing/faqs2";
import { ContactSection } from "@/components/landing/contact-section";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: FingerPrintIcon,
  },
  {
    name: "Powerful API.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
    icon: ServerIcon,
  },
];

function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Everything you need
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
            No server? No problem.
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
            width={2432}
            height={1442}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  aria-hidden="true"
                  className="absolute top-1 left-1 size-5 text-indigo-600"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <RightImage />

      <Example />

      <div className="relative flex flex-col items-center justify-center w-full mx-auto container space-y-8 px-4 lg:px-6">
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
            <Faqs2 />
            <ContactSection
              className="mt-12"
              contactInfo={{
                title: "Still have questions?",
                description: "We're here to help you",
                buttonText: "Contact Support",
                calendarUrl: "https://cal.com/manasa-madapu"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
