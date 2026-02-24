"use client";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";

const navLinks = [
  {
    name: "Selected works",
    link: "/projects",
  },
  {
    name: "About me",
    link: "/about",
  },
  {
    name: "Playground",
    link: "/playground",
  },
];

export const handleDownload = async () => {
  const { data } = supabase.storage.from("assets").getPublicUrl("resume.pdf");
  window.open(data.publicUrl, "_blank");
};

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const pathname = usePathname();

  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      animate={{ y: hidden ? -140 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed w-full z-30 flex items-center justify-between px-3.5 md:px-[42px] h-[70px] md:h-[84px] gap-[4em]"
    >
      <div className="flex items-center gap-[4em]">
        <Link href="/" className="flex items-center gap-2 lg:w-[150.53px]">
          <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-[#dfb44b] rounded-full" />
          <span
            className={`font-ibmplexmono text-xs md:text-sm uppercase font-semibold ${isHome ? "text-[#888888]" : "text-[#090909]"}`}
          >
            John Lloyd Butay
          </span>
        </Link>
        <div className="hidden lg:flex shrink-0 items-center gap-7">
          {navLinks.map((nav, i) => {
            const isActive = pathname === nav.link;

            return (
              <Link
                key={i}
                href={nav.link}
                className={`font-ibmplexmono text-xs md:text-sm uppercase font-semibold ${isActive ? "text-[#ad7b00]" : isHome ? "text-[#888888]" : "text-[#090909]"}`}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-end gap-[7px]">
        <button
          onClick={handleDownload}
          className={`font-ibmplexmono hidden lg:flex items-center gap-2 font-semibold text-sm uppercase transition-colors duration-300 delay-75 py-[8.4px] px-[18.2px] rounded-full ${isHome ? "text-[#888888] hover:bg-[#2b2b2b] hover:text-white" : "text-black hover:bg-[#eee] hover:text-black"}`}
        >
          My resume <GoArrowUpRight className="w-3.5 h-3.5" />
        </button>
        <Link
          href="/contact"
          rel="noopener noreferrer"
          className={`font-ibmplexmono flex items-center justify-center font-extrabold uppercase text-xs md:text-sm hover:bg-[#dfb44b] transition-colors duration-300 delay-75 py-[8.4px] px-[18.2px] rounded-full ${isHome ? "text-white bg-[#2b2b2b] hover:text-[#090909]" : "text-[#090909] bg-[#eee]"}`}
        >
          Work with me <GoArrowUpRight className="w-3 h-3 ml-1" />
        </Link>
      </div>
    </motion.header>
  );
}
