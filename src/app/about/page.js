import ModalButton from "@/components/common/ModalButton";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";
import { FaUserAlt } from "react-icons/fa";

export default function About() {
    return (
        <div className="relative min-h-full bg-white">
            <div className="relative z-10 bg-white pb-[42px]">
                <Header />
                <div className="lg:flex gap-[4em] mt-[9.08px] px-[14px] md:px-[42px] lg:mt-[2vh]">
                    <div className="hidden lg:flex w-[150.53px] items-end text-[12px] text-[#ffffff] uppercase">
                        {/*  */}
                    </div>
                    <div className="w-[198.67px] h-[106.52px] lg:flex flex-1">
                        <FaUserAlt size={106.52} /> 
                    </div>       
                    <div className="hidden lg:flex lg:flex-1 items-end justify-between text-end text-[14px] text-[#000000]">
                        Projects spanning full-stack development and product design,
                        along with a Playground section that showcases my explorations
                        into other areas of technology and creative coding.
                    </div>  
                </div>

                <AboutSection />
                <ServicesSection />
                <WorkExperienceSection />
       
                <div className="sticky z-10 w-full flex justify-center bottom-[4%] pb-[32px] md:py-[48px]">
                    <ModalButton />
                </div>
            </div>      
            <Footer />
        </div>
    );
}