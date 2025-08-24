import ModalButton from "@/components/common/ModalButton";
import Header from "@/components/layout/Header";
import { FaArrowDown } from "react-icons/fa";
import { SiFiles } from "react-icons/si";
import projects from "../../../public/data/projects.json";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="relative min-h-full bg-white">
            <div className="relative z-10 bg-white pb-[42px]">
                <Header />
                <div className="flex flex-col md:flex-row justify-between md:items-end space-y-[1em] md:space-y-0 px-[14px] md:px-[42px] mt-[13.5067px] md:mt-[9.08px]">
                    <SiFiles className="text-yellow-500 md:order-2" size={70} />
                    <div className="md:block md:order-1 md:w-[483.07px]">
                        <h1 className="text-[#090909] font-bold text-[76.8px] leading-[12.8vw] md:leading-[8vw]">Selected</h1>
                        <h1 className="text-[#090909] font-bold text-[76.8px] leading-[12.8vw] md:leading-[8vw]">works</h1>
                    </div>
                </div>

                <div className="flex justify-between items-end mt-[52.027px] md:mt-[30.360px] px-[14px] md:px-[42px]">
                    <FaArrowDown className="text-[#898989]" size={44} />
                    <div className="text-[#090909] text-end w-[266.21px] md:w-[290px] text-[14px] leading-[24px]">
                        Projects spanning full-stack development and product design,
                        along with a Playground section that showcases my explorations
                        into other areas of technology and creative coding.
                    </div>
                </div>
                <div className="block mt-[35px]" />

                {projects.map((project, index) => {
                    return (
                        <div className="w-full border-b-[1px] md:border-b-0 md:border-t-[1px] border-[#dcdcdc] pb-[28px] md:pt-[14px] md:pb-[35px]" key={index}>
                            <div className="relative w-full">
                                <Image 
                                    src={ project.image }
                                    alt={ project.title }
                                    width={800}
                                    height={0}
                                    sizes="100%"
                                    className="w-full md:w-[740px] h-[320px] md:h-auto md:mx-auto object-cover"
                                />
                            </div>
                            <div className="flex justify-between items-start p-[28px] md:mx-[42px] md:px-0">
                                <div className="hidden md:block w-[102.59px] text-[14px] uppercase">
                                    { project.year }
                                </div>
                                <div className="flex-1">
                                    <div className="uppercase text-[#090909] text-[14px]"><strong>{ project.title } </strong> / { project.company }</div>
                                    <div className="mt-[5px] text-[#090909] text-[12px] md:text-[14px]">{ project.type.join(" || ") } , { project.category }</div>
                                </div>
                                <div className="md:h-[56px]">
                                    <div className="text-[26.6px] md:text-[56px] md:leading-[100%] text-[#090909] text-end">
                                        { index }
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                
                <div className="sticky z-10 w-full flex justify-center bottom-0 pb-[32px] md:py-[48px]">
                    <ModalButton />
                </div>
            </div>
            <Footer />
        </div>
    );
}
