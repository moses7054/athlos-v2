import Hero from "@/components/NavComponents/Hero";
import WhyChooseAthlos from "../components/WhyChooseAthlos";
import TheAthlosCollective from "../components/TheAthlosCollective";
import VisionStatement from "../components/VisionStatement";
import Instructore from "../components/Instructore";
import ComingSoon from "../components/ComingSoon";
import Section2 from "@/components/NavComponents/Section2";
import Section3 from "@/components/NavComponents/Section3";
import Section3Mobile from "@/components/NavComponents/Section3Mobile";
import Section4 from "@/components/NavComponents/Section4";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full bg-white">
        <Hero />
        <Section2 />
        <Section3 />
        <Section3Mobile />
        <Section4 />
      </div>
      <WhyChooseAthlos />
      <TheAthlosCollective />
      <VisionStatement />
      <Instructore />
      <ComingSoon />
    </>
  );
}
