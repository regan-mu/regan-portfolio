import React from "react";
import { IArticle } from "../types";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCalendar } from "react-icons/ai";

const ArticleCard = ({image, title, intro, date, link}: IArticle) => {
    return (
        <Link className="flex shadow-md dark:shadow-gray-700 flex-col min-w-full rounded-md h-80 overflow-hidden hover:scale-[1.03] duration-100 delay-75 group sm:w-80 md:min-w-96" rel="noopener noreferrer" target="_blank" href={link}  >
            <Image className="w-full h-1/2" src={image} alt={title} width={400} height={300} priority />
            <div className="p-3 h-full flex flex-col gap-2 font-poppins bg-gray-300 dark:bg-[#444444]">
                <h2 className="font-semibold dark:text-brand font-poppins line-clamp-1 group-hover:underline underline-offset-2">{title}</h2>
                <p className="line-clamp-3 leading-tight text-sm text-gray-600 dark:text-gray-300">{intro}</p>
                <div className="flex h-max items-center gap-3 dark:text-white">
                    <AiOutlineCalendar size={24} className="dark:text-brand" />
                    <p className="text-sm">{date}</p>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard;