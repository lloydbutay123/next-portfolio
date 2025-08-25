"use client";

import Header from "@/components/layout/Header";
import Image from "next/image";
import { FaPlay, FaRegCopyright } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ModalButton from "@/components/common/ModalButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col h-screen">
      {/* Header */}
      <div className="flex-none">
        <Header />
      </div>

      {/* Top Text Section */}
      <div className="flex-none w-full md:flex md:px-[42px] md:mt-[30.92px] lg:gap-[4em] justify-between">
        <div className="flex gap-[4em]">
          <div className="hidden lg:flex lg:w-[150.54px] items-end text-[12px] text-[#ffffff] uppercase">
            Mostly 2020-2023
          </div>
          <div className="mt-7 md:mt-0 px-4 md:px-0 md:w-[478px] lg:shrink-0">
            <h1 className="font-bold text-[42px] md:text-[27.83px] lg:text-[5.5vh] text-white leading-[1em] tracking-[.1vh]">
              Developer
            </h1>
            <h1 className="font-bold text-[42px] md:text-[27.83px] lg:text-[5.5vh] text-white leading-[1em] tracking-[.1vh]">
              Skill Collector
            </h1>
            <h1 className="font-bold text-[42px] md:text-[27.83px] lg:text-[5.5vh] text-white leading-[1em] tracking-[.1vh]">
              Harmony Hunter
            </h1>

            <div className="flex items-center mt-5 md:mt-[35px] space-x-2">
              <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#888888] text-black">
                <FaPlay className="w-[6px] h-[6px]" />
              </button>
              <p className="uppercase text-[12px] md:text-[14px] text-[#888888]">
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
      <div className="flex flex-col flex-1">
        <div className="flex-1 relative w-full lg:gap-[2vw]">
          <Image
            src="/images/grid.png"
            alt=""
            fill
            className="absolute object-cover"
          />
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full h-full"
          >
            <SwiperSlide className="flex items-center justify-center h-full">
              <Image
                src="/images/asianlink.png"
                alt="Slide 1"
                width={800}
                height={0}
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center h-full">
              <Image
                src="/images/playful.png"
                alt="Slide 2"
                width={800}
                height={0}
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center h-full">
              <Image
                src="/images/asianlink.png"
                alt="Slide 3"
                width={800}
                height={0}
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Bottom Section */}
        <div className="flex justify-between items-center px-[14px] lg:px-[42px] w-full h-[51.92px] lg:h-[84px] flex-none">
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/lloydpuji/"
              target="_blank"
              className="flex items-center space-x-2 px-[11.2px] lg:px-[18.2px] uppercase"
            >
              <p className="text-[12px] text-[#888888] lg:hidden">IG</p>
              <p className="text-[12px] text-[#888888] hidden lg:block">Vimeo</p>
              <GoArrowUpRight className="w-[12px] h-[12px] text-[#888888]" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-lloyd-butay-a7675917b/"
              target="_blank"
              className="flex items-center space-x-2 px-[11.2px] lg:px-[18.2px] uppercase"
            >
              <p className="text-[12px] text-[#888888] lg:hidden">IG</p>
              <p className="text-[12px] text-[#888888] hidden lg:block">Vimeo</p>
              <GoArrowUpRight className="w-[12px] h-[12px] text-[#888888]" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-lloyd-butay-a7675917b/"
              target="_blank"
              className="hidden lg:flex items-center space-x-2 px-[11.2px] lg:px-[18.2px] uppercase"
            >
              <p className="text-[12px] text-[#888888]">Linkedin</p>
              <GoArrowUpRight className="w-[12px] h-[12px] text-[#888888]" />
            </a>
          </div>
          <div className="flex items-center space-x-2 px-[11.2px] py-[7px]">
            <FaRegCopyright className="w-[12px] h-[12px] text-[#888888]" />
            <p className="text-[12px] text-[#888888]">2025</p>
          </div>
        </div>
      </div>

      {/* Floating button for mobile */}
      <div className="fixed z-10 w-full flex justify-center bottom-[4%] lg:hidden">
        <ModalButton />
      </div>
    </div>
  );
}
