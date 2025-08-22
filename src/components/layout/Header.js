import { GoArrowUpRight, GoDotFill } from "react-icons/go";

export default function Header() {
    return (
        <div className="flex items-center justify-between px-[14px] h-[70px]">
            <div className="flex items-center space-x-[.5em]">
                <GoDotFill className="w-[6px] h-[6px] text-[#dfb44b]" />
                <p className="text-[#888888] text-[12px] uppercase">John Lloyd Butay</p>
            </div>

            <a href="http://calendly.com/johnlloydbutay123/30min" target="_blank" className="flex items-center justify-center bg-[#2b2b2b] py-[14px] px-[18px] rounded-full text-white uppercase text-[12px]">
                Work with me
                <GoArrowUpRight className="w-[12px] h-[12px] ml-[5px]" />
            </a>
        </div>
    );
}