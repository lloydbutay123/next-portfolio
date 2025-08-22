import ModalButton from "@/components/common/ModalButton";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";
import Image from "next/image";

export default function About() {
    return (
        <div className="relative min-h-full bg-white">
            <div className="relative z-10 bg-white pb-[42px]">
                <Header />
                <div className="mt-[13.501px] px-[14px]">
                    <Image 
                        src="/images/temp.png" 
                        alt="Temp Profile" 
                        width={90}
                        height={0}
                        className="w-[90px] h-auto object-cover" 
                    />
                </div>

                <AboutSection />
                <ServicesSection />
                <WorkExperienceSection />
       
                <div className="sticky z-10 w-full flex justify-center bottom-[4%] mb-[32px]">
                    <ModalButton />
                </div>
            </div>      
            <Footer />
        </div>
    );
}