"use client";

import Header from "@/components/layout/Header";
import Image from "next/image";
import { FaPlay, FaRegCopyright } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import ModalButton from "@/components/common/ModalButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-between min-h-full md:h-full">
      <Header />
      <div className="flex flex-col h-full">
        {/* Top Text Section */}
        <div className="w-full md:flex md:px-[42px] md:mt-[30.920px] justify-between">
          <div className="mt-7 md:mt-0 px-4 md:px-0 md:w-[478px]">
            <h1 className="font-bold text-[42px] md:text-[28.3433px] text-white leading-[1em] tracking-[.1vh]">Developer</h1>
            <h1 className="font-bold text-[42px] md:text-[28.3433px] text-white leading-[1em] tracking-[.1vh]">Skill Collector</h1>
            <h1 className="font-bold text-[42px] md:text-[28.3433px] text-white leading-[1em] tracking-[.1vh]">Harmony Hunter</h1>

            <div className="flex items-center mt-5 md:mt-[35px] space-x-2">
              <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#888888] text-black">
                <FaPlay className="w-[6px] h-[6px] text-black" fill="currentColor" />
              </button>
              <p className="uppercase text-[12px] md:text-[] text-[#888888]">Play Project Reels</p>
            </div>
          </div>
          <div className="hidden md:flex justify-end items-end text-[12px] text-white text-end uppercase w-[150px]">
            available for <br /> contact and collabs
          </div>
        </div>

        {/* Swiper Section */}
        <div className="relative w-full flex mt-[14px] h-full ">
          <Image
            src="/images/grid.png"
            alt=""
            width={800}
            height={0}
            className="absolute w-full h-full object-cover"
          />
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[ Autoplay ]}
            className="w-full"
          >
            <SwiperSlide className="w-full flex justify-center">
              <div className="flex w-full justify-center">
                <Image
                  src="/images/asianlink.png"
                  alt="Slide 1"
                  width={800}
                  height={0}
                  className="w-full md:w-[374px] h-auto object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full flex justify-center">
              <div className="flex w-full justify-center">
                <Image
                  src="/images/playful.png"
                  alt="Slide 1"
                  width={800}
                  height={0}
                  className="w-full md:w-[374px] h-auto object-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="fixed z-10 w-full flex justify-center bottom-[4%]">
          <ModalButton />
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between px-4 w-full h-[48.92px]">
          <div className="flex space-x-2">
            <Link 
              href="https://www.instagram.com/lloydpuji/" 
              target="_blank" 
              className="flex items-center w-full space-x-2 px-[11.2px] py-[7px]"
            >
              <p className="text-[12px] text-[#888888]">IG</p>
              <GoArrowUpRight className="w-[12px] h-[12px] text-[#888888]" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/john-lloyd-butay-a7675917b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              className="flex items-center w-full space-x-2 px-[11.2px] py-[7px]"
            >
              <p className="text-[12px] text-[#888888]">LI</p>
              <GoArrowUpRight className="w-[12px] h-[12px] text-[#888888]" />
            </Link>
          </div>
          <div className="flex items-center space-x-2 px-[11.2px] py-[7px]">
            <FaRegCopyright className="w-[12px] h-[12px] text-[#888888" />
            <p className="text-[12px] text-[#888888]">2025</p>
          </div>
        </div>
      </div>
    </div>  
  );
}
