import skills from "../../../public/data/skills.json";

export default function ServicesSection() {
    return (
        <div className="px-[14px] pt-[140px]">
            <div className="uppercase text-[#888888] text-[14px]">
                / Services
            </div>
            <div className="border-b-[1px] border-[#888888] my-[14px]" />
                <div className="flex flex-col space-y-[1.5em] mb-[28px]">
                    <h1 className="text-[#090909] text-[27.0133px] font-bold leading-none">My skills and <br /> interests</h1>
                </div>
                <div className="text-[#090909] text-[16px] mb-[48px]">
                    My love for interactive websites and motion design eventually led me into UI/UX design. I started out designing interfaces and coding them before fully embracing a design-first approach. Over the years, I’ve explored various design disciplines, starting with logo creation and branding projects to creating marketing collaterals while volunteering in student organizations like AIESEC, where I grew to lead marketing teams. A standout moment was running a campaign that converted 65% of registered delegates into paid attendees in less than a month—a testament to teamwork, strategy, and creative execution.
                </div>
            <div className="mt-[30.027px] ml-[56px] flex flex-col space-y-[16px] my-[48px]">
                {skills.map((skill, index) => {
                    return (
                        <div className="text-[20px] text-[#090909]  font-bold flex items-center" key={ index }>
                            <div className="w-[8px] h-[8px] bg-[#dfb44b] mr-[1em]" />
                            { skill }
                        </div>
                    )
                })}
            </div>
        </div>
    );
}