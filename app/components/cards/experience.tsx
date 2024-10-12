import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";
import JobDetails from "./jobDetails";
import { Jobs } from "@/app/data/jobs";
import Skills from "./skills";

const Experience = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <div className="h-max flex gap-5 items-center">
                    <span className="w-12 h-12 rounded-md bg-gradient-to-bl from-lightBg to-bg flex items-center justify-center">
                        <BsBriefcase color={"#0aff9d"} size={22} />
                    </span>
                    <h2 className="text-2xl font-poppins font-bold">Experience</h2>
                </div>
                <div className="pt-8 pb-4 w-full flex flex-col gap-10 relative ml-4">
                    {
                        Jobs.map(job => <JobDetails key={job.id} id={job.id} title={job.title} period={job.period} employer={job.employer} roles={job.roles} />)
                    }
                    <div className="absolute top-0 left-2 w-[1px] h-full bg-darkBg dark:bg-brand z-0"></div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="h-max flex gap-5 items-center">
                    <span className="w-12 h-12 rounded-md bg-gradient-to-bl from-lightBg to-bg flex items-center justify-center">
                        <AiOutlineCode color={"#0aff9d"} size={22} />
                    </span>
                    <h2 className="text-2xl font-poppins font-bold">My Skills</h2>
                </div>
                <Skills />
            </div>
        </div>
    )
}

export default Experience;