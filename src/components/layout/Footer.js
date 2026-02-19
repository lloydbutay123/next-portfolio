import Link from "next/link";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
  return (
    <div className="sticky h-[40rem] z-0 bg-black">
      <div className="flex lg:absolute w-full flex-col bottom-0">
        <div className="flex flex-col mb-[4em] md:mb-[70px] lg:mb-[140px] px-[14px] md:px-[42px]">
          <div className="flex flex-col lg:flex-row lg:w-[70vw] lg:justify-between gap-[3em] md:gap-[2em]">
            <div className="flex flex-col mt-[84px] md:mt-0 gap-[.75em]">
              <div className="text-[14px] text-[#888888] uppercase">
                /Reach me
              </div>
              <div className="flex flex-col gap-[.75em] lg:gap-[0.5em]">
                <Link
                  href="mailto:johnlloydbutay123@gmail.com"
                  className="text-white text-[18.2px] md:text-[21px] font-medium lg:leading-[25px] lg:tracking-[-0.2px]"
                  target="_blank"
                >
                  johnlloydbutay123@gmail.com
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-[.75em]">
              <div className="text-[14px] text-[#888888] uppercase">
                /Navigate to
              </div>
              <div className="flex flex-col gap-[.75em] lg:gap-[0.5em]">
                <Link
                  href="/"
                  className="text-white text-[18.2px] md:text-[21px] font-medium lg:leading-[25px] lg:tracking-[-0.2px]"
                  target="_blank"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-white text-[18.2px] md:text-[21px] font-medium lg:leading-[25px] lg:tracking-[-0.2px]"
                  target="_blank"
                >
                  Selected Works
                </Link>
                <Link
                  href="/about"
                  className="text-white text-[18.2px] md:text-[21px] font-medium lg:leading-[25px] lg:tracking-[-0.2px]"
                  target="_blank"
                >
                  Info
                </Link>
                <Link
                  href="/"
                  className="text-white text-[18.2px] md:text-[21px] font-medium lg:leading-[25px] lg:tracking-[-0.2px]"
                  target="_blank"
                >
                  Playground
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-[.75em]">
              <div className="text-[14px] text-[#888888] uppercase">
                /Stalk me :)
              </div>
              <div className="flex flex-col gap-[.75em] lg:gap-[0.5em]">
                <Link
                  href="https://www.linkedin.com/in/john-lloyd-butay-a7675917b/"
                  className="text-white text-[18.2px] md:text-[21px] font-medium lg:leading-[25px] lg:tracking-[-0.2px]"
                  target="_blank"
                >
                  Linkedin
                </Link>
                <Link
                  href="https://drive.google.com/drive/folders/16AhL2iwMCPaE-uFV_E3lstWNgAVkT6O5?usp=drive_link"
                  className="text-white text-[18.2px] md:text-[21px] font-medium lg:leading-[25px] lg:tracking-[-0.2px]"
                  target="_blank"
                >
                  My resume
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden flex-col gap-[1em] text-white mb-[14px] px-[14px] md:px-[42px]">
          <div className="text-white text-[49px] font-bold leading-[1em] tracking-[-0.2vw]">
            Ready to bring your ideas to life?
          </div>
          <a
            href="http://calendly.com/johnlloydbutay123/30min"
            className="flex justify-between items-center py-[14px] pr-[14px] pl-[28px] bg-[#dfb44b] rounded-full"
          >
            <div className="flex-1 ml-0 text-[16.8px] text-black uppercase font-bold">
              Let&apos;s create
            </div>
            <FaArrowRight size={30} color="black" />
          </a>
        </div>
        <div className="hidden md:flex w-full items-center px-[42px] mb-[14px] lg:mb-[28px]">
          <div className="lg:hidden mr-[32px] lg:mr-[48px] pb-[18px] lg:pb-[13.312px] text-[84px] lg:text-[6.6svw] text-white lg:text-[#888888] font-medium tracking-[-0.4vw] leading-[0.7em]">
            Let&apos;s create
          </div>
          <div className="hidden lg:block mr-[32px] lg:mr-[48px] pb-[18px] lg:pb-[13.312px] text-[84px] lg:text-[6.6svw] text-white lg:text-[#888888] font-medium tracking-[-0.4vw] leading-[0.7em]">
            Let&apos;s create together
          </div>
          <div className="border-b-[1px] border-[#888888] flex-1" />
          <div className="py-[14px] lg:py-[10.240px] pr-[14px] lg:pr-[10.240px] pl-[4em] lg:pl-[40.960px] ml-[32px] lg:ml-[42px] bg-white rounded-full">
            <FaArrowRight size={32} color="black" />
          </div>
        </div>
        <div className="flex flex-col md:h-[84px] md:flex-row md:justify-between md:items-center gap-[1em] py-[21px] pr-[14px] pl-[23.8px] md:px-[42px]">
          <div className="flex justify-center gap-[0.8em]">
            <a
              href=""
              target="_blank"
              className="flex items-center gap-[0.5em] py-[11.2px] px-[7px] lg:px-[18.2px] lg:py-0 md:p-[11.2px]"
            >
              <div className="text-[12px] md:text-[14px] text-[#888888] uppercase">
                <span className="lg:hidden">Tw</span>
                <span className="hidden lg:block">Twitter</span>
              </div>
              <GoArrowUpRight className="w-[14px] h-[14px] text-[#888888]" />
            </a>
            <a
              href=""
              target="_blank"
              className="flex items-center gap-[0.5em] py-[11.2px] px-[7px] md:p-[11.2px]"
            >
              <div className="text-[12px] md:text-[14px] text-[#888888] uppercase">
                <span className="lg:hidden">Be</span>
                <span className="hidden lg:block">Behance</span>
              </div>
              <GoArrowUpRight className="w-[14px] h-[14px] text-[#888888]" />
            </a>
            <a
              href=""
              target="_blank"
              className="flex items-center gap-[0.5em] py-[11.2px] px-[7px] md:p-[11.2px]"
            >
              <div className="text-[12px] md:text-[14px] text-[#888888] uppercase">
                <span className="lg:hidden">Li</span>
                <span className="hidden lg:block">Linkedin</span>
              </div>
              <GoArrowUpRight className="w-[14px] h-[14px] text-[#888888]" />
            </a>
          </div>
          <div className="flex justify-center items-center text-[14px] text-[#888888] uppercase">
            Designed & Built with
            <FaHeart color="yellow" className="mx-2" />
            by me
          </div>
        </div>
      </div>
    </div>
  );
}
