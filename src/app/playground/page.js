import ModalButton from "@/components/common/ModalButton";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import { FaArrowDown, FaHandSparkles } from "react-icons/fa";

export default function Playground() {
    return (
        <div className="relative min-h-screen bg-white">
            <div className="relative z-10 bg-white pb-[42px]">
                <Header />
                <div className="lg:flex gap-[4em] lg:mt-[13.507px] md:px-[42px]">
                    <div className="hidden lg:flex w-[150.53px] items-end text-[12px] text-[#ffffff] uppercase">
                        {/*  */}
                    </div>
                    <div className="flex flex-col lg:flex-1 mt-[10.120px] lg:mt-0 px-[14px] lg:px-0 ">
                        <div className="text-start w-full text-[46.2px] md:text-[75.6px] text-black font-bold leading-[1em] tracking-[-0.2vh]">An open lab of</div>
                        <div className="text-start w-full text-[46.2px] md:text-[75.6px] text-black font-bold leading-[1em] tracking-[-0.2vh]">design</div>
                        <div className="text-start w-full text-[46.2px] md:text-[75.6px] text-[#888888] font-bold leading-[1em] tracking-[-0.2vh]">--raw ideas,</div>
                        <div className="text-start w-full text-[46.2px] md:text-[75.6px] text-[#888888] font-bold leading-[1em] tracking-[-0.2vh]">work-in-progress,</div>
                        <div className="text-start w-full text-[46.2px] md:text-[75.6px] text-[#888888] font-bold leading-[1em] tracking-[-0.2vh]">and refined</div>
                        <div className="text-start w-full text-[46.2px] md:text-[75.6px] text-[#888888] font-bold leading-[1em] tracking-[-0.2vh]">outcomes.</div>
                    </div>
                </div>
                <div className="md:flex justify-between items-end mt-[20.240px] px-[14px] md:px-[42px]">
                    <FaArrowDown className="text-[44px] md:text-[55px] text-[#888888]" />
                    <FaHandSparkles className="hidden md:block text-[44px] md:text-[110px] text-yellow-500" />
                </div>
                <div className="h-[1px] bg-[#dcdcdc] w-full mt-[35px]" />
                <div className="px-[14px] pt-[14px] pb-[42px]">
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
                <div className="sticky lg:hidden z-10 w-full flex justify-center bottom-0 pb-[32px] md:py-[48px]">
                    <ModalButton />
                </div>
            </div>
            <Footer />
        </div>
    );
}