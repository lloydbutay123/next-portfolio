import Link from "next/link";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
    return (
        <div className="sticky bottom-0 z-0 bg-black">
            <div className="mb-[56px] px-[14px]">
                <div className="flex flex-col space-y-[3em] pt-[84px]">
                    <div className="flex flex-col text-[#888888] space-y-[.75em] uppercase text-[14px]">
                        /Reach me
                        <Link 
                            href="mailto:johnlloydbutay123@gmail.com"
                            className="text-white lowercase text-[18.2px]"
                            target="_blank"
                         >
                            johnlloydbutay123@gmail.com
                        </Link>
                    </div>
                    <div className="flex flex-col text-[#888888] space-y-[.75em] uppercase text-[14px]">
                        /Stalk me :)
                        <Link
                            href=""
                            className="text-white lowercase text-[18.2px]"
                            target="_blank"
                        >
                            linkedIn
                        </Link>
                        <Link 
                            href="https://drive.google.com/drive/folders/16AhL2iwMCPaE-uFV_E3lstWNgAVkT6O5?usp=drive_link"
                            className="text-white lowercase text-[18.2px]"
                            target="_blank"
                        >
                            My resume
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-[178.4px] justify-between text-white mb-[14px] px-[14px]">
                <div className="text-white text-[49px] font-bold leading-[1em] -tracking-[.2vw]">Ready to bring your ideas to life?</div>
                <Link 
                    href="http://calendly.com/johnlloydbutay123/30min" 
                    className="flex justify-between items-center py-[14px] pr-[14px] pl-[28px] bg-white rounded-full"
                >
                    <div className="flex-1 ml-0 text-[16.8px] text-black uppercase font-bold">
                        Let&apos;s create
                    </div>
                    <FaArrowRight size={30} color="black" />
                </Link>
            </div>
            <div className="flex flex-col py-[21px] pr-[14px] pl-[23.8px] space-y-[1em]">
                <div className="flex justify-center">
                    <Link href="" target="_blank" className="flex items-center space-x-2 py-[11.2px] px-[7px]">
                        <div className="text-[12px] text-[#888888]">TW</div>
                        <GoArrowUpRight className="w-[12px] h-[12px] text-[#888888]" />
                    </Link>
                    <Link href="" target="_blank" className="flex items-center space-x-2 py-[11.2px] px-[7px]">
                        <div className="text-[12px] text-[#888888]">BE</div>
                        <GoArrowUpRight className="w-[12px] h-[12px] text-[#888888]" />
                    </Link>
                    <Link href="" target="_blank" className="flex items-center space-x-2 py-[11.2px] px-[7px]">
                        <div className="text-[12px] text-[#888888]">LI</div>
                        <GoArrowUpRight className="w-[12px] h-[12px] text-[#888888]" />
                    </Link>
                </div>
                <div className="flex justify-center items-center text-[14px] text-[#888888] uppercase">
                    Designed & Built with
                    <FaHeart color="yellow" className="mx-2" />
                    by me
                </div>
            </div>
        </div>
    );
}