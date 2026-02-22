import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import aboutHighlights from "../../../public/data/about-highlights.json";

export default function AboutSection() {
  return (
    <>
      <section className="mt-8 px-4 md:px-10">
        <div className="lg:flex gap-16">
          <div className="hidden lg:flex w-[150px] items-end">
            <FaArrowDown className="text-[#888888]" size={44} />
          </div>
          <div className="flex-1">
            <div className="font-ibmplexmono text-[#888888] text-sm mb-5 uppercase">
              / Ekaabo
            </div>

            <h1 className="flex flex-wrap gap-x-[10px] text-[49px] sm:text-[40px] md:text-[4em] lg:text-[78.4px] font-bold leading-tight md:leading-[1em] md:tracking-[-0.02em] text-black lg:w-[80%]">
              <span className="text-[#888888] w-full">Hello, I’m Lloyd —</span>

              <span>A</span>

              <span className="border-b-2 border-[#888888] border-dashed">
                full-stack
              </span>

              <span className="mr-[10px]">developer building modern</span>

              <span className="mr-[10px] border-b-2 border-[#888888] border-dashed">
                web
              </span>

              <span>and</span>

              <span className="border-b-2 border-[#888888] border-dashed">
                mobile
              </span>

              <span>applications.</span>
            </h1>
          </div>
        </div>
      </section>
      <div className="mt-10 lg:flex lg:gap-[4em] px-3.5 md:px-[42px] pt-[98px] border-t-[1px] border-[#888888]">
        <div className="relative lg:flex-1">
          <Image
            src="/images/poster.png"
            alt="Profile"
            width={800}
            height={0}
            sizes="100%"
            className="lg:sticky lg:top-12 w-full mb-[78.027px] lg:mb-0 lg:pb-[48px] object-cover"
          />
        </div>
        <section className="lg:w-[60%] lg:mt-12">
          <div className="font-ibmplexmono uppercase text-sm mb-6 text-[#888888]">
            / About me
          </div>

          {aboutHighlights.map((about, i) => {
            return (
              <div key={i}>
                <div className="mb-[48px] text-[16px] md:text-[18px] leading-[30px] text-[#090909]">
                  {about.text}
                </div>
                <div className="flex-flex-col mt-[30.027px] ml-[4em] md:ml-[112px] flex flex-col space-y-[16px] mb-[48px]">
                  <div className="font-ibmplexmono uppercase text-[12px] md:text-[13px] text-[#888888]">
                    td;dr
                  </div>
                  {about.highlights?.map((highlight, j) => {
                    return (
                      <div
                        className="text-[#333333] text-[18px] italic font-extrabold pl-[5px] border-l-4 border-[#dfb44b]"
                        key={j}
                      >
                        {highlight}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
