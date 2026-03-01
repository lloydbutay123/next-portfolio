"use client";

import AnimatedText from "@/components/animation/AnimatedText";
import ModalButton from "@/components/common/ModalButton";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { FaArrowDown, FaHandSparkles } from "react-icons/fa";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPlayground } from "@/store/playgroundSlice";

export default function PlaygroundView() {
  const dispatch = useDispatch();
  const { items: playground } = useSelector((state) => state.playground);

  useEffect(() => {
    dispatch(fetchPlayground());
  }, [dispatch]);

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };
  return (
    <section className="relative min-h-dvh bg-white pt-[70px] lg:pt-20">
      <div className="relative z-10 bg-white pb-[42px]">
        <div className="lg:flex gap-[4em] md:px-[42px]">
          <div className="hidden lg:flex w-[150.53px] items-end text-[12px] text-[#ffffff] uppercase">
            {/*  */}
          </div>
          <AnimatedText className="flex flex-col lg:flex-1 mt-4 px-3.5 lg:px-0 ">
            <div className="text-start md:w-[570px] lg:w-[904px] text-[46.2px] md:text-[75.6px] text-black font-bold leading-[1em] tracking-[-0.2vh]">
              An open lab of design
            </div>
            <div className="text-start md:w-[570px] lg:w-[904px] text-[46.2px] md:text-[75.6px] text-[#888888] font-bold leading-[1em] tracking-[-0.2vh]">
              --raw ideas, work-in-progress, and refined outcomes.
            </div>
          </AnimatedText>
        </div>
        <div className="md:flex justify-between items-end mt-[20.240px] px-3.5 md:px-[42px]">
          <FaArrowDown className="text-[44px] md:text-[55px] text-[#888888]" />
          <FaHandSparkles className="hidden md:block text-[44px] md:text-[110px] text-yellow-500" />
        </div>
        <div className="h-px bg-[#dcdcdc] w-full mt-[35px]" />
        <div className="px-3.5 pt-3.5 pb-[42px]">
          <div className="gap-3.5 columns-3">
            {playground.map((item, i) => (
              <div
                key={i}
                className="mb-20 flex flex-col gap-3.5 break-inside-avoid"
              >
                {item.type === "image" ? (
                  <motion.div
                    className="overflow-hidden"
                    initial="initial"
                    whileHover="hover"
                  >
                    <motion.div
                      variants={imageVariants}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <Image
                        width={800}
                        height={800}
                        sizes="100%"
                        src={item.link}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  </motion.div>
                ) : (
                  <video
                    className="w-full h-auto object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={item.link} type="video/mp4" />
                  </video>
                )}

                <div className="flex justify-between mt-2">
                  <p className="font-ibmplexmono text-sm text-[#090909]">
                    {item.title}
                  </p>
                  <p className="font-ibmplexmono text-sm text-[#888888]">
                    {new Date(item.created_at).getFullYear()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
