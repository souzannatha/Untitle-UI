import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemFeature } from "../SectionFeatures/itemFeature";
import { FiBarChart2, FiMail, FiZap } from "react-icons/fi";

export function SectionAnalytics() {
  return (
    <section className="pt-16 xl:pt-24">
      <GridContainer>
        <div className="text-center mb-12  xl:mb-16">
          <span className="inline-block py-1 px-3 bg-brand-50 rounded-2xl text-sm/snug font-medium text-brand-700">
            Features
          </span>
          <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 mt-4 mb-6">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-lg/relaxed xl:text-xl/normal text-gray-600 max-w-3xl mx-auto">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="relative w-full max-w-full xl:max-w-[888px] h-auto xl:h-[561px] mx-auto mb-12 xl:mb-24">
          <Image
            src="mockup-macbook.svg"
            alt="Macbook"
            width={768}
            height={512}
            className="hidden xl:block absolute -top-[-15px] -right-[18px]"
          />
          <Image
            src="mockup-iphone.svg"
            alt="Macbook"
            width={244}
            height={497}
            className="relative xl:absolute bottom-0 left-0 mx-auto"
          />
        </div>
        <div className="flex flex-col xl:flex-row items-start justify-between gap-10 xl:gap-0">
          <ItemFeature
            isBtn
            icon={<FiMail size={24} className="text-brand-600" />}
            title="Share team inboxes"
            text="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          />
          <ItemFeature
            isBtn
            icon={<FiZap size={24} className="text-brand-600" />}
            title="Deliver instant answers"
            text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          />
          <ItemFeature
            isBtn
            icon={<FiBarChart2 size={24} className="text-brand-600" />}
            title="Manage your team with reports"
            text="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
          />
        </div>
        <hr className="border-gray-200 mt-16 xl:mt-24" />
      </GridContainer>
    </section>
  );
}
