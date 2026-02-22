"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegCopyright } from "react-icons/fa";

export default function PageLoader({ setIsLoading }) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const date = new Date();
  const currentYear = date.getFullYear();

  const images = [
    "/images/code.png",
    "/images/design.png",
    "/images/visual.png",
    "/images/experience.png",
  ];

  const [duration, setDuration] = useState(12);

  useEffect(() => {
    const updateDuration = () => {
      if (window.innerWidth < 768) {
        setDuration(8);
      } else {
        setDuration(12);
      }
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  useEffect(() => {
    // Check if already loaded in this session
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      setLoading(true);
      setProgress(0);
      setIsLoading?.(true);

      let value = 0;

      const interval = setInterval(() => {
        value += Math.random() * 1;
        if (value >= 100) {
          value = 100;
          clearInterval(interval);

          setTimeout(() => {
            setLoading(false);
            setIsLoading?.(false);
            sessionStorage.setItem("hasLoaded", "true"); // Mark as loaded
          }, 400);
        }

        setProgress(Math.floor(value));
      }, 40);

      return () => clearInterval(interval);
    } else {
      setIsLoading?.(false); // Skip loader if already loaded
    }
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex fixed inset-0 z-50 h-screen my-2.5 bg-black flex-col items-center justify-between"
        >
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-1"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: duration,
                ease: "linear",
              }}
            >
              {[...images, ...images].map((src, i) => (
                <div key={i} className="h-20 md:h-32 flex-shrink-0">
                  <Image
                    src={src}
                    alt={`Image ${i}`}
                    width={500}
                    height={500}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
            <div className="w-full flex justify-center">
              <div className="uppercase font-ibmplexmono font-bold text-[14px] px-3.5 md:px-14 w-[210px] md:w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
                <div className="text-white md:text-[#888888]">
                  John Lloyd Butay
                </div>
                <div className="text-center md:w-[180px] md:text-end text-[#888888]">
                  Developer building digital experiences
                </div>
              </div>
            </div>
          </div>
          <div className="w-44 h-44 flex justify-center items-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              className="w-full h-full"
            >
              {/* Path 1 */}
              <motion.path
                d="M42.703 14.544c.719-1.313 1.078-2.328 1.078-3.047 0-1.258-.511-1.89-1.531-1.89-.836 0-1.883.48-3.14 1.437-4.805 3.718-9.454 9.601-13.954 17.64-3.605 6.48-6.246 12.028-7.922 16.641 4.133-2.813 8.766-7.398 13.891-13.766 5.133-6.363 8.992-12.035 11.578-17.015Z"
                fill={loading ? "#dfb44b" : "#888888"}
                initial={{ fill: "#888888" }}
                animate={{ fill: loading ? "#dfb44b" : "#8888888" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Path 2 */}
              <motion.path
                d="M15.891 48.934c-.72 2.043-1.11 3.407-1.172 4.094-.063.688-.094 1.621-.094 2.797 0 1.168.3 2.23.906 3.187 1.02 1.614 2.727 1.735 5.125.36 1.801-.957 4.082-2.711 6.844-5.266 2.758-2.55 4.89-4.875 6.39-6.969.114-.187.29-.28.532-.28.539 0 .691.39.453 1.171-.898 1.625-2.563 3.7-5 6.219-2.43 2.512-4.633 4.508-6.61 5.984-1.98 1.469-3.96 2.203-5.937 2.203-4.562 0-6.844-2.222-6.844-6.672v-.53c.239-4.196 2.368-10.54 6.391-19.032 4.02-8.488 7.648-14.895 10.89-19.219l2.797-3.515c.657-.782 1.614-1.739 2.875-2.875 2.395-2.282 4.868-3.422 7.422-3.422 2.551 0 4.274.781 5.172 2.343.301.543.453 1.325.453 2.344 0 1.024-.449 2.461-1.343 4.313-6.188 10.742-15.938 21.664-29.25 32.765Z"
                fill={loading ? "#dfb44b" : "#888888"}
                initial={{ fill: "#888888" }}
                animate={{ fill: loading ? "#dfb44b" : "#8888888" }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              />

              {/* Path 3 */}
              <motion.path
                d="M57.822 36.153c1.082 0 2.375.559 3.875 1.672 1.5 1.105 2.336 2.2 2.515 3.281.063.418.094.805.094 1.156 0 2.711-1.324 5.61-3.969 8.704-2.636 3.086-5.605 5.703-8.906 7.859-5.094 3.477-10.164 5.219-15.203 5.219-2.043 0-3.664-.266-4.86-.797-.96-.492.239-.735 3.594-.735 3.665 0 8.407-2.156 14.22-6.468 5.644-3.957 9.066-8.696 10.265-14.219a5.798 5.798 0 0 0-.047-2.563c-.211-.875-.734-1.312-1.578-1.312-2.7 0-6.235 1.89-10.61 5.672-1.867 1.562-3.773 3.668-5.718 6.312-1.95 2.637-2.922 4.793-2.922 6.47 0 .241.039.495.125.765.094.273-.012.703-.313 1.297-.78 1.562-1.89 1.476-3.328-.266a7.297 7.297 0 0 1-.547-2.797c0-2.758.422-5.664 1.266-8.719-.242.243-.766.977-1.578 2.203a31.49 31.49 0 0 1-2.828 3.641c-.543.606-.965.606-1.266 0-.062-.113-.094-.273-.094-.484 0-.219.118-.477.36-.782 4.687-5.812 7.422-9.585 8.203-11.328 1.07-3 2.719-6.914 4.937-11.75 2.22-4.832 4.258-8.687 6.125-11.562 3.844-6.063 7.801-9.094 11.875-9.094.72 0 1.47.09 2.25.266l1.813.64c1.738 1.024 2.61 2.328 2.61 3.922 0 1.586-.485 3.305-1.454 5.156-1.555 3.188-4.914 7.2-10.078 12.032-5.156 4.824-10.168 8.918-15.031 12.281-1.2 2.156-2.125 4.977-2.782 8.453 2.22-3.3 5.11-6.476 8.672-9.531 3.57-3.063 7.008-4.594 10.313-4.594Z"
                fill={loading ? "#dfb44b" : "#888888"}
                initial={{ fill: "#888888" }}
                animate={{ fill: loading ? "#dfb44b" : "#8888888" }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
          <div className="w-full px-5 md:px-14 m-14 overflow-hidden">
            <div className="flex justify-between items-center">
              <div className="font-ibmplexmono text-white text-[12px] md:text-[20px] flex gap-1.5 font-bold tracking-tight">
                <FaRegCopyright /> {currentYear}
              </div>
              <div className="font-ibmplexmono text-white text-[12px] md:text-[14px] flex gap-1.5 font-bold tracking-tight">
                loading...
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-ibmplexmono text-white text-[20px] md:text-[40px] font-bold tracking-tight"
              >
                {progress} %
              </motion.div>
            </div>
            <motion.div
              className="w-full h-[3px] bg-white"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
