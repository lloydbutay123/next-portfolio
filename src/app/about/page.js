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
                <div className="mt-[9.08px] px-[14px] md:px-[42px]">
                    <div className="w-[198.67px] h-[106.52px]">
                        <FaUserAlt size={106.52} /> 
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