"use client";

import ModalButton from "@/components/common/ModalButton";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/app/about/AboutSection";
import ServicesSection from "@/app/about/ServicesSection";
import WorkExperienceSection from "@/app/about/WorkExperienceSection";
import { FaUserAlt } from "react-icons/fa";
import AnimatedText from "@/components/animation/AnimatedText";

export default function AboutContent() {
  return (
    <div className="relative min-h-dvh bg-white pt-[70px] lg:pt-[80px]">
      <div className="relative z-10 bg-white pb-[42px]">
        <div className="lg:flex gap-[4em] px-3.5 md:px-[42px] mt-4">
          <div className="hidden lg:flex w-[150.53px] items-end text-[12px] text-[#ffffff] uppercase">
            {/*  */}
          </div>
          <AnimatedText className="w-[198.67px] h-[106.52px] lg:flex flex-1">
            <FaUserAlt size={106.52} />
          </AnimatedText>
          <AnimatedText className="hidden lg:block w-[300px] text-end text-[14px] text-[#000000]">
            The fear of being just another face in the crowd drives everything I
            do—it’s the force behind my determination to push boundaries, take
            risks, and make sure that what I create or achieve is truly
            unforgettable.
          </AnimatedText>
        </div>

        <AboutSection />
        <ServicesSection />
        <WorkExperienceSection />
      </div>
      <Footer />
    </div>
  );
}
