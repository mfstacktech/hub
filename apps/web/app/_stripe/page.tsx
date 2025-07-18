// import AnimatedHero from "@workspace/ui/heros/animated-hero";
import AccordionFeatures from "@/app/_stripe/(components)/accordion-features";
import RightImage from "@/app/_stripe/(components)/right-image";
import { GridBackground } from "@repo/ui/components/grid-background";
import StickyScroll from "@/app/_stripe/(components)/sticky-scroll";
import StripePattern from "./(components)/stripe-pattern";
import ResponsiveStripePattern from "./(components)/responsive-stripe-pattern";

export default function HomePage() {
  const demoData = {
    features: [
      {
        id: 1,
        title: "Ready-to-Use UI Blocks",
        image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
        description:
          "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui. Each block is carefully crafted to be responsive, accessible, and easily customizable. Simply copy and paste the code into your project.",
      },
      {
        id: 2,
        title: "Tailwind CSS & TypeScript",
        image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
        description:
          "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code that integrates seamlessly with your Next.js projects.",
      },
      {
        id: 3,
        title: "Dark Mode & Customization",
        image: "https://shadcnblocks.com/images/block/placeholder-3.svg",
        description:
          "Every block supports dark mode out of the box and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration. The shadcn/ui theming system makes it easy to maintain consistency across your site.",
      },
      {
        id: 4,
        title: "Accessibility First",
        image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
        description:
          "All blocks are built with accessibility in mind, following WCAG guidelines. They include proper ARIA labels, keyboard navigation support, and semantic HTML structure. Ensure your website is usable by everyone without extra effort.",
      },
      {
        id: 5,
        title: "Modern Development Stack",
        image: "https://shadcnblocks.com/images/block/placeholder-5.svg",
        description:
          "Built for modern web development with React 18, Next.js 14, and the latest shadcn/ui components. Take advantage of React Server Components, TypeScript strict mode, and other cutting-edge features while maintaining excellent performance.",
      },
    ],
  };

  return (
    <>
      <RightImage />
      {/* <div className="for-pattern relative -z-1">
        <StripePattern />

        <div className="pt-[12rem]">
          <AccordionFeatures features={demoData.features} />
        </div>
      </div> */}

      <div className="bg-slate-50">
        <div className="relative isolate mx-auto container px-4 sm:px-6 lg:px-8">
          <GridBackground maxWidthClass="container" />
          <StickyScroll />
        </div>
      </div>
      {/* <AnimatedHero /> */}
    </>
  );
}
