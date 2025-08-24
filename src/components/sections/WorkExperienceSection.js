import { GoArrowUpRight } from "react-icons/go";
import workExperience from "../../../public/data/workExperience.json";
import Image from "next/image";
import Link from "next/link";

export default function WorkExperienceSection() {
    return (
        <div className="px-[14px] md:px-[42px] pt-[140px]">
            <div className="uppercase text-[#888888] text-[14px]">
                / Work History
            </div>
            <div className="border-b-[1px] border-[#dcdcdc] my-[14px]" />
            <div className="pb-[168px]">
                <div className="flex flex-col space-y-[1.5em] mb-[28px]">
                    <h1 className="text-[27.24px] text-[#090909] font-bold leading-none">My work <br /> experience</h1>
                    <Link 
                        href="" 
                        className="flex items-center w-[146px] text-center px-[18.200px] py-[8.400px] bg-[#eeeeee] rounded-full uppercase text-[12px] text-[#090909] font-bold"
                    >View linkedin 
                        <GoArrowUpRight 
                            className="w-[12px] h-[12px] ml-[.5em]" 
                        />
                    </Link>
                </div>
                {workExperience.map((work, index) => {
                    return (
                        <div className="flex justify-between items-center py-[35px] border-b-[1px] border-[#dcdcdc]" key={ index }>
                            <div className="flex items-center space-x-[1em]">
                                <Image 
                                    src={ work.image } 
                                    alt=""
                                    width={44}
                                    height={44}
                                    className="w-[44px] h-[44px] flex-shrink-0 object-cover" 
                                />
                                <div className="text-[16px] md:text-[18px] text-[#090909] font-bold flex flex-wrap">
                                    { work.position } -
                                    <span className="text-[#888888] text-[16px] md:text-[18px]">{ work.company }</span>
                                </div>
                            </div>
                            <div className="text-[14px] md:text-[16px] text-[#090909]">
                                { work.years }
                            </div>
                        </div>       
                    )
                })} 
            </div>
        </div>
    );
}