"use client";

import SectionHeader from "./mfstack/SectionHeader";
import FeaturesSectionIcons from "@/components/landing/mfstack/FeaturesSectionIcons";

const featuresCards = [
  {
    title: "Seamless Digital Onboarding in Minutes",
    icon: FeaturesSectionIcons.seamlessOnboarding,
    description:
      "Transform your customer onboarding with our digital-first KYC solution built on Fintech Primitive APIs",
    points: [
      "Built for Resident Individuals, NRIs, & Non-Individuals investors",
      "Digital KYC for Resident Individuals",
      "PAN-based verification",
      "Digital processing for NRI investors",
      "Digilocker Integration to fetch Documents for the Investor",
      "SEBI Compliant",
      "Bank-Grade Security",
    ],
    srcLight: "/mfstack/onboarding.png",
    srcDark: "/mfstack/onboarding-dark.png",
  },
  {
    title: "Plug in to the powerful Mutual Fund Transaction Engine",
    icon: FeaturesSectionIcons.transactionEngine,
    description:
      "Process mutual fund transactions at scale with Fintech Primitives robust transaction engine. Built on modern APIs, designed for reliability, and engineered for performance.",
    points: [
      "Real-time order processing",
      "Multi-AMC transactions",
      "Instant status tracking",
      "Supports Lumpsum & SIP orders",
      "Support Switch & STP transactions",
      "Supports Redemption & SWP transactions",
      "Supports Step-up, Step-down, Pause, Resume, and Stop recurring transactions",
      "Multi-payment gateway support",
      "Instant order validation",
    ],
    srcLight: "/mfstack/transaction-engine.png",
    srcDark: "/mfstack/transaction-engine-dark.png",
  },
  {
    title: "Comprehensive Mutual Fund Reports & Analytics",
    icon: FeaturesSectionIcons.reportsAndAnalytics,
    description:
      "Unlock investment insights with our comprehensive reporting suite. Powered by reliable Fintech Primitives, delivering accurate, real-time mutual fund analytics and reports.",
    points: [
      "Real-time portfolio valuation",
      "Customizable dashboards",
      "Customizable templates",
      "Scheduled generation",
      "Supports Investor Reports such as (Holdings, Capital Gains, Investment Account wise Returns, Scheme Wise Returns)",
      "Supports Distributor Reports such as (AUM Summary, Transactions Report, Purchase and Redemption Reports)",
      "Supports custom comprehensive reports",
    ],
    srcLight: "/mfstack/reports-analytics.png",
    srcDark: "/mfstack/reports-analytics-dark.png",
  },
];

export default function Features() {
  return (
    <div className="relative">
      <div className="mx-auto lg:px-8 flex flex-col gap-y-12">
        <SectionHeader
          sectionTag={"Features"}
          sectionTitle={"Core Mutual Fund Solutions"}
          sectionDescription={
            "Power your Distribution platform with proven APIs for Onboarding, Transactions, and Reporting from Fintech Primitives."
          }
        />
        <div className="mx-auto flex flex-col gap-y-12 relative">
          {featuresCards.map((section, index) => (
            <div
              key={index}
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            >
              <div
                className={`lg:pr-8 ${index % 2 !== 0 ? "lg:order-last" : ""}`}
              >
                <div className="lg:max-w-lg space-y-6">
                  <section.icon aria-hidden="true" />

                  <h2 className="text-2xl mt-2 font-semibold text-gray-900 dark:text-indigo-400">
                    {section.title}
                  </h2>

                  <p className="text-md text-gray-600 dark:text-gray-300">
                    {section.description}
                  </p>

                  <dl className="mt-8 max-w-xl text-base/7 text-gray-600 dark:text-gray-300 lg:max-w-none space-y-2">
                    {section.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg
                          className="flex-shrink-0 w-6 h-6 mt-0.5"
                          width="26"
                          height="25"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.41716 14.2687L12.9172 17.7687L19.9172 10.7687M26.3338 14.2687C26.3338 20.712 21.1105 25.9354 14.6672 25.9354C8.22383 25.9354 3.00049 20.712 3.00049 14.2687C3.00049 7.8254 8.22383 2.60205 14.6672 2.60205C21.1105 2.60205 26.3338 7.8254 26.3338 14.2687Z"
                            stroke="#4E45DD"
                            strokeWidth="2.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <p className="text-base">{point}</p>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="my-auto">
                <img
                  alt={`${section.title} - Light`}
                  src={section.srcLight}
                  className={`shadow-2xl rounded-2xl dark:hidden ${
                    index === 0 && "ring-2 ring-neutral-200"
                  }`}
                />
                <img
                  alt={`${section.title} - Dark`}
                  src={section.srcDark}
                  className={`shadow-2xl rounded-2xl hidden dark:block`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <GetQuoteCTA buttonText={"Get Quote"} buttonLink={"#"} /> */}
    </div>
  );
}
