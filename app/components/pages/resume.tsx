import React from "react";
import DownloadResume from "../buttons/downloadResume";
import Experience from "../cards/experience";

const Resume = () => {
    return (
        <section className="flex flex-col gap-10">
            <DownloadResume />
            <Experience />
        </section>
    )
}

export default Resume;