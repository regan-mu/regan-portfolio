import React from "react";
import DownloadResume from "../buttons/downloadResume";
import Experience from "../cards/experience";

const Resume = () => {
    return (
        <div className="flex flex-col gap-10">
            <DownloadResume />
            <Experience />
        </div>
    )
}

export default Resume;