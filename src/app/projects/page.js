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
                <div className="flex flex-col md:flex-row justify-between items-end space-y-[1em] md:space-y-0 px-[14px] md:px-[42px] mt-[13.5067px] md:mt-[10.307px]">
                    <SiFiles className="text-yellow-500 order-2" size={70} />
                    <div className="order-1">
                        <h1 className="text-[#090909] font-bold text-[63.8067px] leading-none">Selected</h1>
                        <h1 className="text-[#090909] font-bold text-[63.8067px] leading-9">works</h1>
                    </div>
                </div>

                <div className="flex justify-between items-end mt-[52.027px] md:mt-[30.920px] px-[14px] md:px-[42px] mb-[28px]">
                    <FaArrowDown className="text-[#898989]" size={44} />
                    <p className="text-[#090909] text-end w-[232.71px] md:w-[290px] text-[14px]">
                        Projects cutting across product and visual design and an additional section, playground,, 
                        that contains shots from my exploration into my other design passions.
                    </p>
                </div>

                {projects.map((project, index) => {
                    return (
                        <div className="w-full mb-[28px]" key={index}>
                            <div className="relative w-full">
                                <Image 
                                    src={ project.image }
                                    alt={ project.title }
                                    width={800}
                                    height={0}
                                    sizes="100%"
                                    className="w-full h-[320px] md:h-auto object-cover"
                                />
                            </div>
                            <div className="flex justify-between items-start p-[28px]">
                                <div>
                                    <div className="uppercase text-[#090909] text-[14px]"><strong>{ project.title } </strong> / { project.company }</div>
                                    <div className="mt-[5px] text-[#090909] text-[12px]">{ project.type.join(" || ") } , { project.category }</div>
                                </div>
                                <p className="text-[26.6px] text-[#090909]">{ index }</p>
                            </div>
                        </div>
                    )
                })}
                
                <div className="sticky z-10 w-full flex justify-center bottom-[4%] mb-[32px]">
                    <ModalButton />
                </div>
            </div>
            <Footer />
        </div>
    );
}
