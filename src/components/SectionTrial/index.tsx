import { GridContainer } from "../GridContainer";

export function SectionTrial() {
  return (
    <section className="py-16 xl:py-24 bg-gray-50">
      <GridContainer className="text-center">
        <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 mb-5">
          Start your free trial
        </h2>
        <p className="text-lg/relaxed xl:text-xl/6 text-gray-600 mb-10">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex flex-col xl:flex-row gap-3 w-full xl:w-auto justify-center">
          <button className="py-3 px-5 bg-white border border-gray-300 rounded-lg text-gray-700 font-semibold leading-6 hover:bg-gray-100 transition-colors">
            Learn more
          </button>
          <button className="py-3 px-5 bg-brand-600 rounded-lg text-white font-semibold leading-6 hover:bg-brand-700 transition-colors">
            Get started
          </button>
        </div>
      </GridContainer>
    </section>
  );
}
