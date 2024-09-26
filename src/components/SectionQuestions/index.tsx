import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { Question } from "./Question";

export function SectionQuestions() {
  return (
    <section className="pt-16 xl:py-24">
      <GridContainer>
        <div className="text-center mb-12 xl:mb-16 space-y-5">
          <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 -tracking-tight-[0.72px]">
            Frequently asked questions
          </h2>
          <p className="text-lg/relaxed xl:text-xl/6 text-gray-600">
            Everything you need to know about the product and billing.
          </p>
          <div className="w-full max-w-3xl mx-auto  divide-y divide-gray-200">
            <Question
              title="Is there a free trial available?"
              response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            />
            <Question
              title="Can I change my plan later?"
              response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            />
            <Question
              title="What is your cancellation policy?"
              response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            />
            <Question
              title="Can other info be added to an invoice?"
              response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            />
            <Question
              title="How does billing work?"
              response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            />
            <Question
              title="How do I change my account email?"
              response="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            />
          </div>
        </div>
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <Image
            src="/users.svg"
            width={120}
            height={56}
            alt="Users"
            className="mx-auto"
          />
          <h4 className="mt-8 mb-2 text-xl font-medium text-gray-900">
            Still have questions?
          </h4>
          <p className="text-gray-600 text-lg mb-8">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button className="py-3 px-5 bg-brand-600 rounded-lg text-white font-semibold leading-6 hover:bg-brand-700 transition-colors">
            Get in touch
          </button>
        </div>
        <hr className="mt-16 xl:mt-24 bg-gray-200" />
      </GridContainer>
    </section>
  );
}
