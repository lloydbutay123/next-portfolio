import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaSpotify } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { AnimatePresence, motion } from "motion/react";

const socials = [
  {
    name: "BE",
    link: "http://behance.com",
  },
  {
    name: "LI",
    link: "https://www.linkedin.com/in/john-lloyd-butay-a7675917b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const navLinks = [
  {
    name: "Selected Works",
    link: "/projects",
    code: "001",
  },
  {
    name: "Info",
    link: "/about",
    code: "002",
  },
];

export default function Modal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 28,
              mass: 0.5,
            }}
            className="bg-[#2b2b2b] h-auto mx-[18.969px] md:mx-[115.198px] rounded-[16px] w-full"
          >
            <div className="flex justify-between px-[24px] pt-[28px]">
              <div className="space-x-[1.5em]">
                {socials.map((social, i) => {
                  return (
                    <Link
                      key={i}
                      href={social.link}
                      target="_blank"
                      onClick={onClose}
                      className="text-xs text-[#888888]"
                    >
                      {social.name}
                    </Link>
                  );
                })}
              </div>
              <Link
                href="https://open.spotify.com/user/317wkjulcwkryfe4zoc5qldjnrem?si=6df19cdb00904fe0"
                target="_blank"
              >
                <FaSpotify className="w-[20px] h-[20px] text-white" />
              </Link>
            </div>

            <Link
              onClick={onClose}
              href="/"
              className="flex flex-col items-center my-[28px]"
            >
              <Image
                src="/images/profile.png"
                alt="Profile Picture"
                width={72}
                height={72}
                className="w-[72px] h-[72px] object-cover rounded-full"
              />
              <h3 className="mt-[16px] text-[18px] font-bold text-white">
                John Lloyd Butay
              </h3>
              <div className="text-[13px] text-[#888888]">
                Fullstack Developer
              </div>
            </Link>

            <div className="border-y-[1px] border-gray-400">
              {navLinks.map((navLink, i) => {
                return (
                  <Link
                    key={i}
                    href={navLink.link}
                    onClick={onClose}
                    className="flex justify-between items-center mx-[20px] h-[72px] border-b-[1px] border-gray-400"
                  >
                    <div className="flex space-x-[4px]">
                      <h3 className="text-white">{navLink.name}</h3>
                      <div className="text-[13px] px-[2px] text-[#888888]">
                        {navLink.code}
                      </div>
                    </div>
                    <FaArrowRight className="text-white" />
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center justify-center h-[67.53px]">
              <Link
                href="http://calendly.com/johnlloydbutay123/30min"
                onClick={onClose}
                className="flex items-center justify-center space-x-[.5em] bg-black text-white px-[18.2px] py-[8.4px] rounded-full w-[160px]"
              >
                <p className="text-[12px] uppercase">Work with me</p>
                <GoArrowUpRight className="w-[12px] h-[12px]" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
