import Link from "next/link";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { handleDownload } from "./Header";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Selected Works",
    link: "/projects",
  },
  {
    name: "Info",
    link: "/about",
  },
  {
    name: "Playground",
    link: "/playground",
  },
];

const externalLinks = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/john-lloyd-butay-a7675917b/",
  },
];

const socialLinks = [
  {
    name: "X",
    shortName: "x",
    link: "https://x.com/",
  },
  {
    name: "Behance",
    shortName: "be",
    link: "https://www.behance.net/",
  },
  {
    name: "Linkedin",
    shortName: "li",
    link: "https://www.linkedin.com/in/john-lloyd-butay-a7675917b/",
  },
];

export default function Footer() {
  return (
    <div className="sticky flex flex-col bottom-0 h-[40rem] bg-black">
      <div className="absolute bottom-0 w-full">
        <div className="flex flex-col mb-[4em] md:mb-[70px] lg:mb-[140px] px-3.5 md:px-[42px]">
          <div className="flex flex-col lg:flex-row lg:w-[70vw] lg:justify-between gap-[3em] md:gap-[2em]">
            <div className="flex flex-col mt-[84px] md:mt-0 gap-[.75em]">
              <div className="font-ibmplexmono text-[14px] text-[#888888] uppercase">
                /Reach me
              </div>
              <div className="flex flex-col gap-[.75em] lg:gap-[0.5em]">
                <Link
                  href="mailto:johnlloydbutay123@gmail.com"
                  className="footer-link"
                  target="_blank"
                >
                  johnlloydbutay123@gmail.com
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-[.75em]">
              <div className="font-ibmplexmono text-[14px] text-[#888888] uppercase">
                /Navigate to
              </div>
              <div className="flex flex-col gap-[.75em] lg:gap-[0.5em]">
                {navLinks.map((nav, i) => {
                  return (
                    <Link key={i} href={nav.link} className="footer-link">
                      {nav.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-[.75em]">
              <div className="font-ibmplexmono text-[14px] text-[#888888] uppercase">
                /Stalk me :)
              </div>
              <div className="flex flex-col gap-[.75em] lg:gap-[0.5em]">
                {externalLinks.map((external, i) => {
                  return (
                    <Link
                      key={i}
                      href={external.link}
                      className="footer-link"
                      target="_blank"
                    >
                      {external.name}
                    </Link>
                  );
                })}
                <button
                  onClick={handleDownload}
                  className="footer-link text-start"
                >
                  My resume
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden flex-col gap-[1em] text-white mb-[14px] px-3.5 md:px-[42px]">
          <div className="text-white text-[49px] font-bold leading-[1em] tracking-[-0.2vw]">
            Ready to bring your ideas to life?
          </div>
          <a
            href="http://calendly.com/johnlloydbutay123/30min"
            className="flex justify-between items-center py-[14px] pr-[14px] pl-[28px] bg-[#dfb44b] rounded-full"
          >
            <div className="flex-1 ml-0 text-[16.8px] text-black uppercase font-bold">
              Let&apos;s create
            </div>
            <FaArrowRight size={30} color="black" />
          </a>
        </div>
        <a
          href="http://calendly.com/johnlloydbutay123/30min"
          className="group hidden md:flex w-full items-center px-[42px] mb-[14px] lg:mb-[28px] hover:text-white"
        >
          <div className="lg:hidden mr-[32px] lg:mr-[48px] pb-[18px] lg:pb-[13.312px] text-[84px] lg:text-[6.6svw] text-[#888888] font-medium tracking-[-0.4vw] leading-[0.7em] group-hover:text-white">
            Let&apos;s create
          </div>
          <div className="hidden lg:block mr-[32px] lg:mr-[48px] pb-[18px] lg:pb-[13.312px] text-[84px] lg:text-[6.6svw] text-white lg:text-[#888888] font-medium tracking-[-0.4vw] leading-[0.7em] group-hover:text-white transition-colors duration-300 delay-75">
            Let&apos;s create together
          </div>
          <div className="border-b-[1px] border-[#888888] flex-1 group-hover:border-white transition-colors duration-300 delay-75" />
          <div className="flex justify-end items-center h-[58.8px] py-[14px] lg:py-[10.240px] w-[103.99px] pr-[14px] lg:pr-[10.240px] pl-[4em] lg:pl-[40.960px] ml-[32px] lg:ml-[42px] bg-white group-hover:bg-[#dfb44b] rounded-full transition-colors duration-300 delay-75">
            <FaArrowRight size={32} color="black" />
          </div>
        </a>
        <div className="flex flex-col md:h-[84px] md:flex-row md:justify-between md:items-center gap-[1em] py-[21px] pr-[14px] pl-[23.8px] md:px-[42px]">
          <div className="flex justify-center gap-[0.8em]">
            {socialLinks.map((social, i) => {
              return (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  className="social-pill"
                >
                  <div className="social-pill-text font-ibmplexmono ">
                    <span className="lg:hidden">{social.shortName}</span>
                    <span className="hidden lg:block">{social.name}</span>
                  </div>
                  <GoArrowUpRight className="social-pill-icon" />
                </a>
              );
            })}
          </div>
          <div className="font-ibmplexmono flex justify-center items-center text-[14px] text-[#888888] uppercase">
            Designed & Built with
            <FaHeart color="yellow" className="mx-2" />
            by me
          </div>
        </div>
      </div>
    </div>
  );
}
