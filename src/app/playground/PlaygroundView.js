"use client";

import AnimatedText from "@/components/animation/AnimatedText";
import ModalButton from "@/components/common/ModalButton";
import Footer from "@/components/layout/Footer";
import { FaArrowDown, FaHandSparkles } from "react-icons/fa";

export default function PlaygroundView() {
  return (
    <div className="relative min-h-dvh bg-white pt-[70px] lg:pt-[80px]">
      <div className="relative z-10 bg-white pb-[42px]">
        <div className="lg:flex gap-[4em] md:px-[42px]">
          <div className="hidden lg:flex w-[150.53px] items-end text-[12px] text-[#ffffff] uppercase">
            {/*  */}
          </div>
          <AnimatedText className="flex flex-col lg:flex-1 mt-4 px-3.5 lg:px-0 ">
            <div className="text-start md:w-[570px] lg:w-[904px] text-[46.2px] md:text-[75.6px] text-black font-bold leading-[1em] tracking-[-0.2vh]">
              An open lab of design
            </div>
            <div className="text-start md:w-[570px] lg:w-[904px] text-[46.2px] md:text-[75.6px] text-[#888888] font-bold leading-[1em] tracking-[-0.2vh]">
              --raw ideas, work-in-progress, and refined outcomes.
            </div>
          </AnimatedText>
        </div>
        <div className="md:flex justify-between items-end mt-[20.240px] px-3.5 md:px-[42px]">
          <FaArrowDown className="text-[44px] md:text-[55px] text-[#888888]" />
          <FaHandSparkles className="hidden md:block text-[44px] md:text-[110px] text-yellow-500" />
        </div>
        <div className="h-[1px] bg-[#dcdcdc] w-full mt-[35px]" />
        <div className="px-3.5 pt-[14px] pb-[42px]">
          <div className="flex flex-col gap-[6em]">
            {/* Lists of items here */}
            {/* <div className="flex flex-col gap-[1em]">
                            <Image 
                                src="/images/cozycasa-preview.png" 
                                alt=""
                                width={800}
                                height={0}
                                className="w-full h-full object-cover" 
                            />
                            <div className="flex justify-between">
                                <div className="text-[14px] text-[#090909]">Black friday campaign</div>
                                <div className="text-[14px] text-[#888888]">2022</div>
                            </div>
                        </div>  */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
