import React from "react";
import Link from "next/link";
import { ITestimonial } from "../types";

const TestimonialCard: React.FC<ITestimonial> = ({id, client, message, website, role, company}) => {
    return (
        <article className="w-full h-auto flex flex-col gap-10 justify-center items-center rounded-xl relative p-5 md:px-20">
            <div className="relative w-full before:absolute before:content-['\201c'] before:text-gray-500 before:-z-10 before:text-9xl before:-top-7 before:-left-5 before:font-extrabold"></div>
            <blockquote className="relative font-poppins text-xs text-center text-gray-300 font-extralight md:text-sm">
                {message}
            </blockquote>
            <span className="text-center text-xs items-center mb-5">
                <h4 className="font-semibold text-brand">{client}</h4>
                <p className="text-gray-400">{role} ~ <Link className="underline" href={website}> {company}</Link></p>
            </span>
        </article>
    )
}

export default TestimonialCard