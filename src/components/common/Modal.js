import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaSpotify } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function Modal({ isOpen }) {

    if(!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-0 h-full">
            <div className="bg-[#2b2b2b] h-auto mx-[18.969px] rounded-[16px] w-full">
                <div className="flex justify-between px-[24px] pt-[28px]">
                    <div className="space-x-[1.5em]">
                        <Link href= "http://behance.com" target="_blank" className="text-xs text-[#888888]">BE</Link>
                        <Link href="https://www.linkedin.com/in/john-lloyd-butay-a7675917b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-xs text-[#888888]">LI</Link>
                    </div>
                    <Link href="https://open.spotify.com/user/317wkjulcwkryfe4zoc5qldjnrem?si=6df19cdb00904fe0" target="_blank">
                        <FaSpotify className="w-[20px] h-[20px] text-white" />
                    </Link>
                </div>

                <Link href="/" className="flex flex-col items-center my-[28px]">
                    <Image 
                        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" 
                        alt="Profile Picture" 
                        width={72}
                        height={72}
                        unoptimized
                        className="w-[72px] h-[72px] object-cover rounded-full"
                    />
                    <h3 className="mt-[16px] text-[18px] font-bold text-white">John Lloyd Butay</h3>
                    <div className="text-[13px] text-[#888888]">Fullstack Developer</div>
                </Link>
                
                <div className="border-y-[1px] border-gray-400">
                    <Link href="/projects" className="flex justify-between items-center mx-[20px] h-[72px] border-b-[1px] border-gray-400">
                        <div className="flex space-x-[4px]">
                            <h3 className="text-white">Selected Works</h3>
                            <div className="text-[13px] px-[2px] text-[#888888]">001</div>
                        </div>
                        <FaArrowRight className="text-white" />
                    </Link>
                    <Link href={`/about`} className="flex justify-between items-center mx-[20px] h-[72px]">
                        <div className="flex space-x-[4px]">
                            <h3 className="text-white">Info</h3>
                            <div className="text-[13px] px-[2px] text-[#888888]">002</div>
                        </div>
                        <FaArrowRight className="text-white" />
                    </Link>
                </div>

                <div className="flex items-center justify-center h-[67.53px]">
                    <Link href="http://calendly.com/johnlloydbutay123/30min" target="_blank" className="flex items-center justify-center space-x-[.5em] bg-black text-white px-[18.2px] py-[8.4px] rounded-full w-[160px]">
                        <p className="text-[12px] uppercase">Work with me</p>
                        <GoArrowUpRight className="w-[12px] h-[12px]" />
                    </Link>
                </div>           
            </div>
        </div>
    )
}