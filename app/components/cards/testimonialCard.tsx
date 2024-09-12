import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ITestimonial } from "../types";

const TestimonialCard: React.FC<ITestimonial> = ({id, client, message, website, role, company}) => {
    return (
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center rounded-xl relative py-5 px-0 md:px-20">
            <Image className="border-[5px] border-[#444444] rounded-full" src="/anonymous.png" alt="anonymous" width={80} height={80} />
            <blockquote className="relative italic text-sm text-center font-extralight before:absolute before:content-['\201c'] before:text-gray-600 before:-z-10 before:text-8xl before:-top-7 before:-left-5 before:font-extrabold md:text-base">
                {message}
            </blockquote>
            <span className="text-center text-xs items-center mb-5">
                <h4 className="font-semibold text-brand">{client}</h4>
                <p className="text-gray-400">{role} ~ <Link className="underline" href={website}> {company}</Link></p>
            </span>
        </div>
    )
}

export default TestimonialCard