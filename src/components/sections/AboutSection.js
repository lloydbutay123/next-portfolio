import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import aboutHighlights from "../../../public/data/about-highlights.json";

export default function AboutSection() {
    return (
        <>
            <div className="mt-[31.780px] px-[14px] md:px-[42px]">
                <div className="lg:flex gap-[56px]">
                    <div className="hidden lg:flex w-[150.53px] items-end text-[12px] text-[#ffffff] uppercase">
                        <FaArrowDown className="text-[#898989]" size={44} />
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div className="text-[#888888] text-[14px] mb-[21px] uppercase">/ Ekaabo</div>
                        <div className="flex flex-wrap leading-none lg:w-[80%]">
                            <span className="text-[49px] md:text-[56px] lg:text-[78.4px] md:leading-[1em] md:tracking-[-0.3vh] mr-[10px] text-[#888888] font-bold">
                                Hello, I am Lloyd.
                            </span>
                            <p className="text-[49px] md:text-[56px] lg:text-[78.4px] md:leading-[1em] md:tracking-[-0.3vh] font-bold mr-[10px] text-black">A</p>
                            <span className="text-black text-[49px] md:text-[56px] lg:text-[78.4px] md:leading-[1em] md:tracking-[-0.3vh] mr-[10px] border-b-2 border-[#888888] border-dashed font-bold">
                                web
                            </span>
                            <p className="text-black text-[49px] md:text-[56px] lg:text-[78.4px] md:leading-[1em] md:tracking-[-0.3vh] font-bold mr-[10px]">&</p>
                            <span className="text-black text-[49px] md:text-[56px] lg:text-[78.4px] md:leading-[1em] md:tracking-[-0.3vh] mr-[10px] border-b-2 border-[#888888] border-dashed font-bold">
                                mobile
                            </span>
                            <p className="text-black text-[49px] md:text-[56px] lg:text-[78.4px] md:leading-[1em] md:tracking-[-0.3vh] font-bold mr-[10px]">developer with an</p>
                            <span className="text-black text-[49px] md:text-[56px] lg:text-[78.4px] md:leading-[1em] md:tracking-[-0.3vh] mr-[10px] border-b-2 border-[#888888] border-dashed font-bold">
                                architecture
                            </span>
                            <p className="text-black text-[49px] md:text-[56px] lg:text-[78.4px] md:leading-[1em] md:tracking-[-0.3vh] font-bold mr-[10px]">background.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[31.780px] md:mt-[35px]" />
            <div className="lg:flex lg:gap-[56px] px-[14px] md:px-[42px] pt-[98px] border-t-[1px] border-[#888888]">
                <div className="relative lg:flex-1">
                    <Image 
                        src="/images/poster.png"
                        alt="Pofile" 
                        width={800}
                        height={0}
                        sizes="100%"
                        className="lg:sticky lg:top-[3em] w-full mb-[78.027px] lg:mb-0 lg:pb-[48px] object-cover"
                    />
                </div>
                <div className="w-full lg:w-[60%] lg:mt-[3em]">
                    <div className="uppercase text-[14px] mb-[21px] text-[#888888]">
                        / About me
                    </div>
                            
                    {aboutHighlights.map((about, index) => {
                        return (
                            <div key={ index }>
                            <div className="mb-[48px] text-[16px] md:text-[18px] leading-[30px] text-[#090909]">
                                { about.text }
                            </div>
                            <div className="flex-flex-col mt-[30.027px] ml-[56px] md:ml-[112px] flex flex-col space-y-[16px] mb-[48px]">
                                <div className="uppercase text-[12px] md:text-[13px] text-[#888888]">
                                    td;dr
                                </div>
                                { about.highlights?.map((highlight, index) => {
                                    return (
                                        <div className="text-[#333333] text-[18px] italic font-bold pl-[5px] border-l-4 border-[#dfb44b]" key={ index }>
                                        { highlight }
                                    </div>
                                    )
                                }) }
                            </div>
                        </div>  
                        )
                    })}
                </div>
            </div>
        </>
    )
}