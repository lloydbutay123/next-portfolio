"use client";

import ModalButton from "@/components/common/ModalButton";
import Header from "@/components/layout/Header";
import { FaArrowDown } from "react-icons/fa";
import { SiFiles } from "react-icons/si";
import projects from "../../../public/data/projects.json";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { motion } from "motion/react";

export default function Projects() {
  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <div className="relative min-h-full bg-white pt-[70px] lg:pt-[80px]">
      <div className="relative z-10 bg-white pb-[42px]">
        <div className="flex lg:flex-none flex-col md:flex-row justify-between lg:justify-end md:items-end space-y-[1em] md:space-y-0 px-3.5 md:px-[42px] md:gap-[4em]">
          <div className="hidden lg:flex w-[150.53px] items-end text-[12px] text-[#ffffff] uppercase">
            {/* Mostly 2020-2023 */}
          </div>
          <div className="md:order-2 md:flex justify-end flex-1">
            <SiFiles className="text-yellow-500" size={70} />
          </div>
          <div className="md:block md:order-1 md:w-[483.07px] lg:flex-1">
            <h1 className="text-[#090909] font-bold text-[17vw] md:text-[10vw] lg:text-[7vw] leading-[12.8vw] md:leading-[8vw] lg:leading-[5.6vw] tracking-[-0.7vw] md:tracking-[-0.4vw] lg:tracking-[-0.35vw]">
              Selected
            </h1>
            <h1 className="text-[#090909] font-bold text-[17vw] md:text-[10vw] lg:text-[7vw] leading-[12.8vw] md:leading-[8vw] lg:leading-[5.6vw] tracking-[-0.7vw] md:tracking-[-0.4vw] lg:tracking-[-0.35vw]">
              works
            </h1>
          </div>
        </div>

        <div className="flex justify-between items-end mt-[52.027px] md:mt-[30.360px] lg:mt-[101.300px] px-3.5 md:px-[42px]">
          <FaArrowDown className="text-[#888888]" size={44} />
          <div className="text-[#090909] text-end w-[266.21px] md:w-[330px] text-[14px] lg:text-[16px] leading-[24px]">
            Projects spanning full-stack development and product design, along
            with a Playground section that showcases my explorations into other
            areas of technology and creative coding.
          </div>
        </div>
        <div className="block mt-[35px]" />

        {projects.map((project, index) => {
          return (
            <motion.div
              initial="initial"
              whileHover="hover"
              className="w-full h-full border-b-[1px] md:border-y-[1px] border-[#dcdcdc] pb-[28px] md:pt-[21px] md:pb-[42px] cursor-pointer"
              key={index}
            >
              <div className="md:px-[21px]">
                <div className="overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={0}
                      sizes="100%"
                      className="w-full h-[320px] md:h-auto lg:h-[44vw] object-cover"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="flex justify-between items-start p-[28px] md:mx-[42px] md:px-0">
                <div className="font-ibmplexmono text-[#090909] hidden md:block w-[102.59px] lg:w-[188px] text-[14px] uppercase">
                  {project.year}
                </div>
                <div className="flex-1">
                  <div className="font-ibmplexmono uppercase text-[#090909] text-[14px]">
                    <strong>{project.title} </strong> / {project.company}
                  </div>
                  <div className="mt-[5px] text-[#090909] text-[12px] md:text-[14px]">
                    {project.type.join(" || ")} , {project.category}
                  </div>
                </div>
                <div className="md:h-[4em] lg:w-[188px]">
                  <div className="text-[26.6px] md:text-[4em] md:leading-[100%] text-[#090909] text-end">
                    {index}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        <div className="sticky lg:hidden z-10 w-full flex justify-center bottom-0 pb-[32px] md:py-[48px]">
          <ModalButton />
        </div>
      </div>
      <Footer />
    </div>
  );
}
