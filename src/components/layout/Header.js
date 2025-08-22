import Link from "next/link";
import { GoArrowUpRight, GoDotFill } from "react-icons/go";

export default function Header() {
    return (
        <div className="flex items-center justify-between px-[14px] md:px-[42px] h-[70px] md:h-[84px]">
            <div className="flex items-center space-x-[.5em]">
                <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-[#dfb44b] rounded-full" />
                <p className="text-[#888888] text-[12px] md:text-[14px] uppercase">John Lloyd Butay</p>
            </div>

            <Link 
                href="http://calendly.com/johnlloydbutay123/30min" 
                target="_blank" 
                className="flex items-center justify-center text-white uppercase text-[12px] md:text-[14px] bg-[#2b2b2b] py-[14px] pr-[16.8px] pl-[18.2px] rounded-full"
            >
                Work with me
                <GoArrowUpRight className="w-[12px] h-[12px] ml-[5px]" />
            </Link>
        </div>
    );
}