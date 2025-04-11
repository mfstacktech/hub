import SectionHeader from "./mfstack/SectionHeader";
import WhyChooseUsSectionIcons from "./mfstack/WhyChooseUsSectionIcons";

const whyChooseUsCards = [
  {
    icon: WhyChooseUsSectionIcons.solutionsForYou,
    title: "Solutions for YOU",
    description:
      "Whether you are an Independent Distributor, Large Distribution House, or the Next Fintech looking to disrupt the MF space, we have right offering for you.",
  },
  {
    icon: WhyChooseUsSectionIcons.beyondImplementation,
    title: "Beyond Implementation",
    description:
      "Whether you are an Independent Distributor, Large Distribution House, or the Next Fintech looking to disrupt the MF space, we have right offering for you.",
  },
  {
    icon: WhyChooseUsSectionIcons.fintechApis,
    title: "Build on Fintech Primitives APIs",
    description:
      "With over 8 years of experience providing solutions in the Banking, Financial Services, and Insurance sector, we deliver expertise tailored to meet industry-specific needs.",
  },
  {
    icon: WhyChooseUsSectionIcons.bfsiExpertise,
    title: "BFSI expertise",
    description:
      "Whether you are an Independent Distributor, Large Distribution House, or the Next Fintech looking to disrupt the MF space, we have right offering for you.",
  },
];

export default function WhyUs() {
  return (
    <div className="mx-auto">
      <SectionHeader
        sectionTag={"Why choose us?"}
        sectionTitle={"Why work with us?"}
        sectionDescription={
          " With over 8 years of experience in IT products and services across continents, we understand that every need is unique, and quality is paramount. We place the end user at the heart of every solution."
        }
      />
      <div className="mt-16 lg:max-w-none">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUsCards.map((component, index) => (
            <div
              key={index}
              className="flex flex-col px-6 py-4 space-y-4 bg-gray-100 rounded-xl dark:bg-gray-800"
            >
              <div className="flex-shrink-0 flex">
                <component.icon aria-hidden="true" />
              </div>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white min-h-[48px]">
                {component.title}
              </h1>

              <p className="text-gray-500 dark:text-gray-300 min-h-[64px]">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <GetQuoteCTA buttonText={"Get Quote"} buttonLink={"#"} /> */}
    </div>
  );
}
