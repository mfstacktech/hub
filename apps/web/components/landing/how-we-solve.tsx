"use client";

import HowWeSolveIcons from "./mfstack/HowWeSolveIcons";
import SectionHeader from "./mfstack/SectionHeader";

const howWeSolveCards = [
  {
    name: "Embeddable Solutions - Domain Kit",
    description:
      "White-label investment solutions for your domain. Custom branding and seamless integration for your platform.",
    icon: HowWeSolveIcons.domainKit,
  },
  {
    name: "Embeddable Solutions - Hosted Workflows",
    description:
      "Ready-to-deploy investment workflows. Fast, secure, and compliant solutions for your fintech needs.",
    icon: HowWeSolveIcons.hostedWorkflows,
  },
  {
    name: "Embeddable Solutions - SDKs",
    description:
      "Robust investment APIs at your fingertips. Tested components and comprehensive documentation for quick integration.",
    icon: HowWeSolveIcons.sdks,
  },
  {
    name: "Investor Web App",
    description:
      "A modern platform for complete portfolio management - track investments, execute transactions, and monitor performance through a secure interface.",
    icon: HowWeSolveIcons.webApp,
  },
  {
    name: "Investor Mobile App",
    description:
      "Your investments on the go. Manage portfolios, execute transactions, and track updates instantly with bank-grade security, with our Mobile Apps solutions.",
    icon: HowWeSolveIcons.mobileApp,
  },
  {
    name: "Distributor Web App",
    description:
      "Power your distribution business with our comprehensive platform. Manage clients, track performance, and grow efficiently.",
    icon: HowWeSolveIcons.webApp,
  },
  {
    name: "Distributor Mobile App",
    description:
      "Run your distribution business from anywhere. Monitor performance, execute transactions, and stay connected with clients on the move.",
    icon: HowWeSolveIcons.mobileApp,
  },
  {
    name: "Distributor assisted journeys for investors",
    description:
      "Empower your investors with a personalized assisted platform. Guide them through onboarding, investments, and reporting with ease.",
    icon: HowWeSolveIcons.distributors,
  },
  {
    name: "WhatsApp Integration for Investor Journeys",
    description:
      "Connect with investments via WhatsApp. Access updates, transactions, and support instantly through India's favorite messaging app.",
    icon: HowWeSolveIcons.whatsApp,
  },

  {
    name: "Tailored solutions for your needs",
    description:
      "Custom fintech solutions built for you. From development to deployment, we create technology that matches your business needs.",
    icon: HowWeSolveIcons.tailoredSolutions,
  },
];

export default function HowWeSolve() {
  return (
    <div className="mx-auto lg:px-8">
      <SectionHeader
        sectionTag={"How we solve?"}
        sectionTitle={"Products"}
        sectionDescription={
          "From SDKs to full-stack solutions, choose the right building blocks for your platform."
        }
      />
      <div className="mt-8">
        <dl className="grid max-w-2xl grid-cols-1 md:grid-cols-2 mx-auto gap-x-6 gap-y-8 lg:max-w-none lg:grid-cols-3">
          {howWeSolveCards.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col bg-white dark:bg-gray-900 shadow-md hover:shadow-lg p-8 rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-700"
            >
              <feature.icon aria-hidden="true" />
              <h2 className="mt-4 font-bold text-gray-900 text-xl dark:text-gray-50">
                {feature.name}
              </h2>
              <dd className="flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-300">
                <p className="">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* <GetQuoteCTA buttonText={"Get Quote"} buttonLink={"#"} /> */}
    </div>
  );
}
