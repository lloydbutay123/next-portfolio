"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSkills } from "@/store/skillsSlice";

export default function ServicesSection() {
  const dispatch = useDispatch();
  const { items: skills } = useSelector((state) => state.skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  return (
    <div className="px-3.5 md:px-[42px] pt-[140px]">
      <div className="font-ibmplexmono uppercase text-[#888888] text-[14px]">
        / Services
      </div>
      <div className="border-b-[1px] border-[#dcdcdc] my-[14px]" />
      <div className="lg:flex gap-[4em]">
        <div className="flex flex-col space-y-[1.5em] mb-[28px] lg:flex-1">
          <h1 className="text-[#090909] text-[27.24px] md:text-[30.36px] lg:text-[40.52px] font-bold leading-none">
            My skills and <br /> interests
          </h1>
        </div>
        <div className="lg:flex flex-col lg:w-[60%]">
          <div className=" text-[#090909] text-[16px] md:text-[18px] mb-[48px] leading-[30px]">
            I’m driven by the challenge of adapting my skills, processes, and
            thinking to meet the evolving needs of technology and users. I
            thrive in collaborative, ambitious teams that value inclusivity and
            innovation. My skills and interests span across the following areas:
          </div>
          <div className="mt-[30.027px] ml-[4em] md:ml-[112px] flex flex-col space-y-[16px]">
            {skills.map((skill, index) => {
              return (
                <div
                  className="text-[20px] text-[#090909]  font-bold flex items-center"
                  key={index}
                >
                  <div className="w-[8px] h-[8px] bg-[#dfb44b] mr-[1em]" />
                  {skill.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
