"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-dvh lg:h-dvh bg-white pt-[70px] lg:pt-[80px]">
      <div className="px-4 py-12 md:p-[42px] lg:py-24 h-full">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-20 h-full">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between h-full">
            {/* Top */}
            <div className="flex flex-col gap-2">
              <p className="text-4xl md:text-[78.4px] font-bold text-[#090909]">
                Let&apos;s collaborate
              </p>
              <p className="text-[#888888] text-xs font-ibmplexmono cursor-pointer">
                johnlloydbutay123@gmail.com
              </p>
            </div>

            {/* Bottom */}
            <div className="flex justify-between mt-16 lg:mt-0">
              <div className="flex flex-col gap-2">
                <p className="font-extrabold text-[#090909] text-xs">Find us</p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-[#888888] font-ibmplexmono text-sm"
                  >
                    FB
                  </Link>
                  <Link
                    href="#"
                    className="text-[#888888] font-ibmplexmono text-sm"
                  >
                    IG
                  </Link>
                  <Link
                    href="#"
                    className="text-[#888888] font-ibmplexmono text-sm"
                  >
                    TW
                  </Link>
                  <Link
                    href="#"
                    className="text-[#888888] font-ibmplexmono text-sm"
                  >
                    LN
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-extrabold text-[#090909] text-xs">
                  Manila, Philippines
                </p>
                <p className="font-ibmplexmono text-[#888888] text-sm">
                  09956397484
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="flex flex-col justify-between gap-10">
            <p className="text-[#090909] text-2xl font-bold">Say hello</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="uppercase font-ibmplexmono font-extrabold text-[#090909] text-xs">
                  Name
                </label>
                <input
                  placeholder="Your name"
                  className="text-[#090909] text-sm placeholder:text-[#888888] border-b border-[#ddd] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="uppercase font-ibmplexmono font-extrabold text-[#090909] text-xs">
                  Subject
                </label>
                <input
                  placeholder="Choose subject"
                  className="text-[#090909] text-sm placeholder:text-[#888888] border-b border-[#ddd] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="uppercase font-ibmplexmono font-extrabold text-[#090909] text-xs">
                  Company
                </label>
                <input
                  placeholder="Your company"
                  className="text-[#090909] text-sm placeholder:text-[#888888] border-b border-[#ddd] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="uppercase font-ibmplexmono font-extrabold text-[#090909] text-xs">
                  Email
                </label>
                <input
                  placeholder="Email address"
                  className="text-[#090909] text-sm placeholder:text-[#888888] border-b border-[#ddd] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="uppercase font-ibmplexmono font-extrabold text-[#090909] text-xs">
                  Message
                </label>
                <textarea
                  placeholder="Start typing here"
                  rows={4}
                  className="text-[#090909] text-sm placeholder:text-[#888888] border-b border-[#ddd] focus:outline-none resize-none"
                />
              </div>
            </div>

            <button
              onClick={() => {}}
              className="text-lg text-[#090909] underline flex items-center gap-2 cursor-pointer"
            >
              Submit <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
