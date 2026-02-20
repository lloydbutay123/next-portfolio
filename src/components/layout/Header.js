import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-[14px] md:px-[42px] h-[70px] md:h-[84px] gap-[4em]">
      <div className="flex items-center gap-[4em]">
        <Link href="/" className="flex items-center gap-2 lg:w-[150.53px]">
          <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-[#dfb44b] rounded-full" />
          <span className="font-ibmplexmono text-[#888888] text-xs md:text-sm uppercase">
            John Lloyd Butay
          </span>
        </Link>
        <div className="hidden lg:flex shrink-0 items-center gap-7">
          <Link
            href="/projects"
            className="font-ibmplexmono text-sm text-[#888888] uppercase"
          >
            Selected works
          </Link>
          <Link
            href="/about"
            className="font-ibmplexmono text-sm text-[#888888] uppercase"
          >
            About me
          </Link>
          <Link
            href="/playground"
            className="font-ibmplexmono text-sm text-[#888888] uppercase"
          >
            Playground
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-end gap-[7px]">
        <a
          href="https://drive.google.com/drive/folders/16AhL2iwMCPaE-uFV_E3lstWNgAVkT6O5?usp=drive_link"
          target="_blank"
          className="font-ibmplexmono hidden lg:flex items-center gap-2 text-sm text-[#888888] uppercase hover:bg-[#2b2b2b] hover:text-white transition-colors duration-300 delay-75 py-[8.4px] px-[18.2px] rounded-full"
        >
          My resume <GoArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="http://calendly.com/johnlloydbutay123/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="font-ibmplexmono flex items-center justify-center text-white font-extrabold uppercase text-xs md:text-sm bg-[#2b2b2b] hover:bg-[#dfb44b] hover:text-[#090909] transition-colors duration-300 delay-75 py-[8.4px] px-[18.2px] rounded-full"
        >
          Work with me <GoArrowUpRight className="w-3 h-3 ml-1" />
        </a>
      </div>
    </div>
  );
}
