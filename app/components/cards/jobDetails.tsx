import React from "react";
import { IJob } from "../types";

const JobDetails = ({title, period, employer, roles}: IJob) => {
    return (
        <div className="flex items-start relative">
            <div className="flex-shrink-0 w-4 h-4 bg-brand rounded-full border-2 border-gray-500 mt-1"></div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold font-poppins">{title}</h3>
                <p className="text-brand">{employer}</p>
                <p className="text-gray-400 font-light italic text-sm">{period}</p>
                <ul className="mt-2">
                    {roles.map(role => <li className="relative pl-3 ml-3 text-sm font-medium before:absolute before:left-0 before:w-1 before:h-1 before:bg-brand before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2" key={role.id}>{role.value}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default JobDetails;