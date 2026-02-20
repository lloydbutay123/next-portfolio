import Header from "@/components/layout/Header";
import { FaPlay, FaRegCopyright, FaSpotify } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import "swiper/css";
import ModalButton from "@/components/common/ModalButton";
import HomeSwiper from "@/components/common/HomeSwiper";

export const metadata = {
  title: "Home",
  description: "Welcome to Lloyd's portfolio",
};

export default function Home() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Top Text Section */}
      <div className="w-full md:flex md:px-[42px] md:mt-[30.92px] lg:gap-[4em] justify-between">
        <div className="flex gap-[4em]">
          <div className="hidden lg:flex lg:w-[150.54px] items-end text-[12px] text-[#ffffff] uppercase">
            Mostly 2020-2023
          </div>
          <div className="mt-7 md:mt-0 px-4 md:px-0 md:w-[478px] lg:shrink-0">
            <h1 className="font-bold text-[42px] md:text-[5.5vh] text-white leading-[1em] tracking-[-0.1vh]">
              Developer
            </h1>
            <h1 className="font-bold text-[42px] md:text-[5.5vh] text-white leading-[1em] tracking-[-0.1vh]">
              Skill Collector
            </h1>
            <h1 className="font-bold text-[42px] md:text-[5.5vh] text-white leading-[1em] tracking-[-0.1vh]">
              Harmony Hunter
            </h1>

            <div className="flex items-center mt-5 md:mt-[35px] space-x-2">
              <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#888888] text-black">
                <FaPlay className="w-[6px] h-[6px]" />
              </button>
              <p className="font-ibmplexmono uppercase text-[12px] md:text-[14px] text-[#888888]">
                Play Project Reels
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-end items-end text-[12px] text-white text-end uppercase w-[150px] lg:w-[20%]">
          available for <br /> contacts & collabs
        </div>
      </div>

      {/* Swiper Section (flex-1 to take remaining height) */}
      <div className="relative pt-4">
        <div className="relative w-full h-[404.81px] lg:gap-[2vw] lg:h-[50vh]">
          <div
            className="absolute inset-0
                      bg-[url('/images/grid.png')] bg-repeat 
                      bg-cover 
                      md:bg-contain 
                      bg-center"
          ></div>
          <HomeSwiper />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex-1 flex md:hidden lg:flex justify-between items-center px-[14px] lg:px-[42px] w-full">
        <div className="flex gap-2">
          <a
            href="https://www.instagram.com/lloydpuji/"
            target="_blank"
            className="social-pill"
          >
            <div className="social-pill-text font-ibmplexmono">
              <span className="lg:hidden">IG</span>
              <span className="hidden lg:block">Vimeo</span>
            </div>
            <GoArrowUpRight className="social-pill-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/john-lloyd-butay-a7675917b/"
            target="_blank"
            className="social-pill"
          >
            <div className="social-pill-text font-ibmplexmono">
              <span className="lg:hidden">IG</span>
              <span className="hidden lg:block">Vimeo</span>
            </div>
            <GoArrowUpRight className="social-pill-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/john-lloyd-butay-a7675917b/"
            target="_blank"
            className="social-pill"
          >
            <div className="social-pill-text font-ibmplexmono">
              <span className="hidden lg:block">Linkedin</span>
            </div>
            <GoArrowUpRight className="social-pill-icon hidden lg:block" />
          </a>
        </div>
        <a className="social-pill" href="" target="_blank">
          <FaSpotify className="social-pill-icon" />
          <div className="social-pill-text font-ibmplexmono">
            <span className="">Listen</span>
          </div>
        </a>
      </div>

      {/* Floating button for mobile */}
      <div className="fixed z-10 w-full flex justify-center bottom-[4%] lg:hidden">
        <ModalButton />
      </div>
    </div>
  );
}
