import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Header() {
    return (
        <div className="flex items-center justify-between px-[14px] md:px-[42px] h-[70px] md:h-[84px] gap-[4em]">
            <div className="flex items-center gap-[4em]">
                <Link href="/" className="flex items-center gap-2 lg:w-[150.53px]">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#dfb44b] rounded-full" />
                    <span className="text-[#888888] text-xs md:text-sm uppercase">John Lloyd Butay</span>
                </Link>
                <div className="hidden lg:flex shrink-0 items-center gap-8">
                    <Link href="/projects" className="text-sm text-[#888888] uppercase">Selected works</Link>
                    <Link href="/about" className="text-sm text-[#888888] uppercase">About me</Link>
                    <Link href="#" className="text-sm text-[#888888] uppercase">Playgrounds</Link>
                </div>
            </div>

            <div className="flex items-center justify-end">
                <a href="..." className="hidden lg:flex items-center gap-2 px-4 text-sm text-[#888888] uppercase">
                My resume <GoArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a href="..." target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center h-10 text-white uppercase text-xs md:text-sm bg-[#2b2b2b] px-4 rounded-full">
                Work with me <GoArrowUpRight className="w-3 h-3 ml-1" />
                </a>
            </div>
        </div>
    );
}