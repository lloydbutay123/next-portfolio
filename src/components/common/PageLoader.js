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
    const updateDuration = () => setDuration(window.innerWidth < 768 ? 8 : 12);
    updateDuration();
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("hasLoaded")) {
      setIsLoading?.(false);
      return;
    }

    setLoading(true);
    setProgress(0);
    setIsLoading?.(true);

    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 1.5; // slightly faster fill
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          setIsLoading?.(false);
          sessionStorage.setItem("hasLoaded", "true");
        }, 400);
      }
      setProgress(Math.floor(value));
    }, 40);

    return () => clearInterval(interval);
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
          className="flex fixed inset-0 z-50 h-dvh my-2.5 bg-black flex-col items-center justify-between"
        >
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-2"
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
                    width={0}
                    height={128}
                    className="h-full w-auto object-contain"
                    unoptimized
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
              <motion.g transform="translate(1 6">
                <motion.path
                  d="M4.299 52.891c-1.625-.261-2.176-1.187-1.657-2.781.325-.906.844-1.734 1.563-2.484a23.068 23.068 0 0 1 3.016-2.891 87.35 87.35 0 0 1 3.578-2.625c.554-.457.875-.992.968-1.61.457-2.894.688-5.695.688-8.406 0-.707.031-1.75.094-3.125 0-.476.21-.718.64-.718.551-.07.875.12.97.578.194.918.312 1.601.343 2.047v2.547c.062 1.593.015 2.93-.14 4-.044.125-.063.53-.063 1.218 0 .094.062.18.187.25.133.063.238.078.313.047l.672-.437c1.207-.946 2.394-2.235 3.562-3.86l1.906-2.593c.196-.29.508-.336.938-.141.289.094.367.273.234.531a2.07 2.07 0 0 1-.344.735c-1.687 2.699-3.527 4.796-5.515 6.296-1.2.875-1.946 1.528-2.235 1.954-.199.23-.351.5-.453.812a7.511 7.511 0 0 0-.234 1.063c-.063.406-.133.71-.203.906-.45 1.625-1.063 3.101-1.844 4.437-.812 1.5-2 2.672-3.562 3.516-1.114.687-2.254.93-3.422.734Z"
                  fill={loading ? "#dfb44b" : "#888888"}
                  initial={{ fill: "#888888" }}
                  animate={{ fill: loading ? "#dfb44b" : "#8888888" }}
                  transition={{ duration: 5, ease: "easeInOut" }}
                />

                {/* Path 2 */}
                <motion.path
                  d="M24.508 48.204c-.398-.031-.804-.293-1.218-.781-.399-.418-.774-1.086-1.125-2a32.831 32.831 0 0 1-1.469-6.141c-.418-2.8-.578-5.031-.484-6.688 0-4.164.406-7.879 1.218-11.14.426-1.594 1.047-3.219 1.86-4.875.457-.813.96-1.492 1.515-2.047.907-.883 2.008-1.156 3.313-.813 1.3.344 2.148 1.153 2.547 2.422.218.719.265 1.485.14 2.297-.324 2.117-1.007 4.328-2.047 6.64a42.234 42.234 0 0 1-4.546 7.798c-.094.168-.243.39-.438.672-.2.273-.328.476-.39.609a8.173 8.173 0 0 0-.25.562 3.104 3.104 0 0 0-.188.75c-.031.262-.047.57-.047.922.125 2.375.594 4.996 1.406 7.86.364 1.07.692 1.773.985 2.109.062.094.18.14.36.14.187 0 .312-.046.374-.14.188-.262.445-.687.781-1.281a41.587 41.587 0 0 0 2.297-5.406c.906-2.864 1.602-5 2.094-6.407.094-.32.27-.773.531-1.36.07-.132.211-.233.422-.296a.865.865 0 0 1 .563 0c.257.137.39.297.39.484 0 .137-.039.336-.11.594-1.718 5.563-3.23 9.73-4.53 12.5-.23.52-.575 1.133-1.032 1.844-.617.976-1.59 1.367-2.922 1.172Z"
                  fill={loading ? "#dfb44b" : "#888888"}
                  initial={{ fill: "#888888" }}
                  animate={{ fill: loading ? "#dfb44b" : "#8888888" }}
                  transition={{ duration: 5, delay: 0.3, ease: "easeInOut" }}
                />

                {/* Path 3 */}
                <motion.path
                  d="M33.926 46.407a1.325 1.325 0 0 1-1.03.14.995.995 0 0 1-.72-.64 7.527 7.527 0 0 1-.593-2.234c-.356-3.446-.485-5.743-.391-6.891-.063-2.758.082-5.082.437-6.969.102-.687.25-1.375.438-2.062.102-.489.414-.735.937-.735.645.074.97.387.97.938v2.094l-.298 3.375v3.796c0 .168.067.25.203.25.165-.062.282-.144.344-.25.094-.187.207-.507.344-.968a22.676 22.676 0 0 1 2.187-4.782 6.99 6.99 0 0 1 1.47-1.812c.644-.488 1.359-.719 2.14-.688 1.113.106 1.785.649 2.015 1.625.258.938.391 2.043.391 3.313 0 .387.004.953.016 1.703.02.75.031 1.309.031 1.672.062.742.191 1.293.39 1.656.157.418.43.496.829.235.582-.383 1.148-1 1.703-1.844.55-.813 1.348-2.067 2.39-3.766l.985-1.36c.219-.331.523-.413.922-.25.289.063.406.212.343.438 0 .2-.03.328-.093.39-1.305 2.513-2.446 4.368-3.422 5.563-.688.844-1.293 1.434-1.813 1.766a4.515 4.515 0 0 1-1.609.578c-1.23.106-2.043-.414-2.438-1.562-.324-.97-.5-1.926-.53-2.875v-3.422c0-.383-.04-.938-.11-1.656l-.14-.579c-.032-.132-.137-.218-.313-.25-.18-.03-.32-.015-.422.047-.356.2-.73.606-1.125 1.219Z"
                  fill={loading ? "#dfb44b" : "#888888"}
                  initial={{ fill: "#888888" }}
                  animate={{ fill: loading ? "#dfb44b" : "#8888888" }}
                  transition={{ duration: 5, delay: 0.6, ease: "easeInOut" }}
                />

                {/* Path 4 */}
                <motion.path
                  d="M65.268 31.704c.093-.031.203-.004.328.078.133.086.187.156.156.219 0 .199-.031.312-.094.343-.105.094-.203.184-.297.266a6.381 6.381 0 0 1-.359.297c-.148.117-.258.203-.328.266l-2.438 2c-.875.718-1.312 1.632-1.312 2.734-.031 1.336-.477 3.027-1.328 5.078a8.099 8.099 0 0 1-1.172 1.953c-.742.906-1.746 1.328-3.016 1.266-.886-.094-1.422-.586-1.609-1.469-.106-.676-.027-1.289.234-1.844.457-.812.785-1.347.985-1.61 1.394-1.694 2.351-2.804 2.875-3.327.781-.813 1.086-1.785.922-2.922a54.533 54.533 0 0 0-.391-1.61c-.063-.195-.219-.328-.469-.39-.242-.07-.437-.04-.594.094-.949.78-1.484 1.234-1.609 1.359-1.18 1.242-2.105 2.711-2.781 4.406-.563 1.367-1.024 3.059-1.375 5.078-.031.25-.047.961-.047 2.141.062.719.094 1.27.094 1.656 0 .688-.39 1.11-1.172 1.266-.418.07-.695-.09-.828-.484-.2-.75-.297-1.157-.297-1.22-.23-1.593-.422-3.202-.578-4.827-.262-3.739-.375-5.922-.344-6.547v-.39c.258-5.27.39-7.938.39-8 .227-2.802.649-5.227 1.266-7.282.395-1.363.883-2.453 1.469-3.266 1.625-2.312 3.898-2.945 6.828-1.906 1.07.43 1.61 1.277 1.61 2.547-.032.906-.325 2.058-.876 3.453-.812 2.156-1.984 4.309-3.515 6.453-1.492 1.98-2.625 3.313-3.406 4-.782.719-1.157 1.586-1.125 2.594l.093 3.406c0 .168.082.25.25.25.094.063.203.031.328-.094l.688-1.078c.457-.843 1.078-1.691 1.86-2.547l1.218-1.171c.945-.813 2.05-1.133 3.313-.97.625.032 1.097.294 1.421.782.063.125.18.34.36.64.187.294.328.5.422.626.031.03.086.07.172.109.082.031.14.027.171-.016a30.578 30.578 0 0 0 1.22-.78l1.905-1.36c.157-.094.415-.176.782-.25Z"
                  fill={loading ? "#dfb44b" : "#888888"}
                  initial={{ fill: "#888888" }}
                  animate={{ fill: loading ? "#dfb44b" : "#8888888" }}
                  transition={{ duration: 5, delay: 0.9, ease: "easeInOut" }}
                />
              </motion.g>
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
