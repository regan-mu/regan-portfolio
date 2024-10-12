import Link from "next/link";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { IProject } from "../types";
import React from "react";

const PortfolioProject: React.FC<IProject> = ({id, title, description, demo, github, tools}) => {
    return (
        <article className="min-w-full relative h-80 flex flex-col overflow-hidden gap-5 rounded-xl bg-gray-300 dark:bg-[#444444] shadow-lg dark:shadow-gray-800 sm:w-80 md:min-w-96">
            <div className="flex flex-col items-center gap-5 pt-8 px-5">
                <h2 className="font-bold text-2xl dark:text-brand">{title}</h2>
                <div className="font-light text-sm text-center text-gray-600 dark:text-gray-300">
                    <p className="line-clamp-2">{description}</p>
                </div>
            </div>
            <div className="w-full flex justify-center gap-4">
                <Link className="flex text-sm font-semibold justify-center items-center py-2 px-4 gap-2 bg-brand text-black rounded-full delay-100 duration-100 hover:scale-95" href={demo}><AiOutlineLink size={22} color={"#000"} /> View Demo</Link>
                <Link className="flex text-sm font-semibold justify-center items-center py-2 px-4 gap-2 bg-brand rounded-full text-black delay-100 duration-100 hover:scale-95" href={github}><AiFillGithub size={22} color={"#000"} /> Github</Link>
            </div>
            <div className="flex absolute left-0 w-full bottom-0 justify-center gap-2 flex-wrap text-xs dark:text-white bg-gray-600 dark:bg-darkBg py-4 px-5">
                {tools.map((tool, index) => <p key={index} className="dark:bg-lightBg bg-light italic py-2 px-4 flex items-center justify-center rounded-full delay-100 duration-100 cursor-pointer hover:scale-105">{tool}</p>)}
            </div>
        </article>
    )
}

export default PortfolioProject;