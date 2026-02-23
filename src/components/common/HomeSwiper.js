"use client";

import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "@/store/projectsSlice";

export default function HomeSwiper() {
  const dispatch = useDispatch();
  const { items: projects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

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
                src={project.logo_image}
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
