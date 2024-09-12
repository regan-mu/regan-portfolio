import React from "react";
import {articles} from "../../data/articleData";
import ArticleCard from "../cards/article";
import Testimonials from "../cards/testimonials";

const AboutMe = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 col-span-2 md:text-lg">
                <p>
                    I&apos;m a Software Engineer skilled in Python, Typescript, and SQL, 
                    with a focus on writing clean, efficient code and building practical 
                    solutions. I enjoy tackling complex problems and creating software 
                    that&apos;s designed to be reliable and easy to maintain.
                </p>
                <p>
                    My experience in data science is an added benefit, 
                    allowing me to approach software development with a 
                    solid understanding of data analysis, statistical methods, 
                    and visualization. This combination of skills helps me contribute 
                    to teams by integrating data-driven approaches into software projects.
                </p>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex w-full justify-between items-center">
                    <h2 className="text-2xl h-max relative font-semibold after:bg-brand after:w-14 after:h-1 after:absolute after:rounded-md after:-bottom-2 after:left-0 md:text-3xl">Testimonials</h2>
                </div>
            
                <div className="flex flex-col gap-10 md:flex-row">
                    <Testimonials />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;