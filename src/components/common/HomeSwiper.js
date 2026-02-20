"use client";

import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function HomeSwiper() {
  return (
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
          src="/images/asianlink-project.png"
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
          src="/images/asianlink-community.png"
          alt="Slide 3"
          width={800}
          height={0}
          className="w-full h-full object-contain"
        />
      </SwiperSlide>
    </Swiper>
  );
}
