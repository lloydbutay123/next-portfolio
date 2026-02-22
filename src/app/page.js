import Header from "@/components/layout/Header";
import { FaPlay, FaRegCopyright, FaSpotify } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import "swiper/css";
import ModalButton from "@/components/common/ModalButton";
import HomeSwiper from "@/components/common/HomeSwiper";
import AnimatedText from "@/components/animation/AnimatedText";

export const metadata = {
  title: "Lloyd Butay – Full stack Developer",
  description: "Welcome to Lloyd's portfolio",
};

const socialLinks = [
  {
    name: "Instagram",
    shortName: "IG",
    link: "https://www.instagram.com/lloydpuji/",
  },
  {
    name: "Facebook",
    shortName: "fb",
    link: "https://web.facebook.com/johnlloyd.butay.fullaccount/",
  },
  {
    name: "Linkedin",
    shortName: "",
    link: "https://www.linkedin.com/in/john-lloyd-butay-a7675917b/",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col h-dvh pt-[70px] md:pt-[80px]  ">
      {/* Top Text Section */}
      <div className="w-full md:flex md:px-[42px] lg:gap-[4em] justify-between">
        <div className="flex gap-[4em]">
          <div className="hidden lg:flex lg:w-[150.54px] items-end text-[12px] text-[#ffffff] uppercase">
            <AnimatedText>Mostly 2020-2023</AnimatedText>
          </div>
          <div className="mt-7 md:mt-0 px-4 md:px-0 md:w-[478px] lg:shrink-0">
            <AnimatedText>
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
            </AnimatedText>
          </div>
        </div>
        <div className="hidden md:flex justify-end items-end text-[12px] text-white text-end uppercase w-[150px] lg:w-[20%]">
          <AnimatedText>
            <div>
              available for <br /> contacts & collabs
            </div>
          </AnimatedText>
        </div>
      </div>

      {/* Swiper Section (flex-1 to take remaining height) */}
      <div className="relative pt-4">
        <AnimatedText>
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
        </AnimatedText>
      </div>
      {/* Bottom Section */}
      <div className="flex-1 flex md:hidden lg:flex justify-between items-center px-3.5 lg:px-[42px] w-full">
        <AnimatedText>
          <div className="flex gap-2">
            {socialLinks.map((social, i) => {
              return (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  className={`social-pill ${social.name.toLowerCase() === "linkedin" ? "hidden lg:flex" : ""}`}
                >
                  <div className="social-pill-text font-ibmplexmono">
                    <span className="lg:hidden uppercase">
                      {social.shortName}
                    </span>
                    <span className="hidden lg:block">{social.name}</span>
                  </div>
                  <GoArrowUpRight
                    className={`social-pill-icon ${
                      social.name.toLowerCase() === "linkedin"
                        ? "hidden lg:block"
                        : ""
                    }`}
                  />
                </a>
              );
            })}
          </div>
        </AnimatedText>
        <AnimatedText>
          <a className="social-pill" href="" target="_blank">
            <FaSpotify className="social-pill-icon" />
            <div className="social-pill-text font-ibmplexmono">
              <span className="">Listen</span>
            </div>
          </a>
        </AnimatedText>
      </div>

      {/* Floating button for mobile */}
      <div className="fixed z-10 w-full flex justify-center bottom-[4%] lg:hidden">
        <ModalButton />
      </div>
    </div>
  );
}
