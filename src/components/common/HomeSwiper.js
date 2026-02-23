"use client";

import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import projects from "../../../public/data/projects.json";

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
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={800}
      centeredSlides={false}
      modules={[Autoplay]}
      className="w-full h-full"
    >
      {projects.map((project, i) => {
        return (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center h-full relative"
          >
            <div className="relative h-full w-full">
              <Image
                src={project.logoImage}
                alt={project.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
