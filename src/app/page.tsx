import { SectionAnalytics } from "@/components/SectionAnalytics";
import { SectionCompanies } from "@/components/SectionCompanies";
import { SectionFeatures } from "@/components/SectionFeatures";
import SectionHero from "@/components/SectionHero";
import { SectionLaunch } from "@/components/SectionLaunch";
import { SectionQuestions } from "@/components/SectionQuestions";
import { SectionTestimonials } from "@/components/SectionTestimonials";
import { SectionTrial } from "@/components/SectionTrial";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionAnalytics />
      <SectionQuestions />
      <SectionLaunch />
      <SectionTrial />
    </>
  );
}
//parei em 40 minutos
//
