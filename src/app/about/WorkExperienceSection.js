import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWorkExperiences } from "@/store/workExperiencesSlice";

export default function WorkExperienceSection() {
  const dispatch = useDispatch();
  const { items: workExperiences } = useSelector(
    (state) => state.workExperiences,
  );

  useEffect(() => {
    dispatch(fetchWorkExperiences());
  }, [dispatch]);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const sortedWork = [...workExperiences].sort(
    (a, b) => new Date(b.start_date) - new Date(a.start_date),
  );

  return (
    <div className="px-3.5 md:px-[42px] pt-[140px]">
      <div className="font-ibmplexmono uppercase text-[#888888] text-[14px]">
        / Work History
      </div>
      <div className="border-b-[1px] border-[#dcdcdc] my-[14px]" />
      <div className="pb-[168px]">
        <div className="lg:flex gap-[4em]">
          <div className="flex flex-col gap-[1.5em] mb-[28px] lg:flex-1">
            <h1 className="text-[27.24px] md:text-[30.36px] lg:text-[40.52px] text-[#090909] font-bold leading-none">
              My work <br /> experience
            </h1>
            <Link
              href=""
              className="font-ibmplexmono flex items-center self-start text-center px-[18.200px] py-[8.400px] bg-[#eeeeee] rounded-full uppercase text-[12px] md:text-[14px] text-[#090909] font-bold"
            >
              View linkedin
              <GoArrowUpRight className="w-[12px] h-[12px] ml-[.5em]" />
            </Link>
          </div>
          <div className="lg:flex lg:flex-col lg:w-[60%]">
            {sortedWork.map((work) => {
              return (
                <div
                  className="flex justify-between items-center py-[35px] border-b-[1px] border-[#dcdcdc]"
                  key={work.id}
                >
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src={work.company_logo}
                      alt=""
                      width={44}
                      height={44}
                      className="w-[44px] h-[44px] flex-shrink-0 object-cover"
                    />
                    <div className="text-[16px] md:text-[18px] text-[#090909] font-bold flex flex-wrap">
                      {work.position} -
                      <span className="text-[#888888] text-[16px] md:text-[18px]">
                        {work.company}
                      </span>
                    </div>
                  </div>
                  <div className="text-[14px] md:text-[16px] text-[#090909]">
                    {formatDate(work.start_date)} -{" "}
                    {work.end_date ? formatDate(work.end_date) : "Present"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
