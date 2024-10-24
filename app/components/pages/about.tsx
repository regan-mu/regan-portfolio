import React from "react";
import Testimonials from "../cards/testimonials";

const AboutMe = () => {
    return (
        <section className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 col-span-2 tracking-wide leading-tight md:text-lg md:font-medium">
                <p>
                    Hi, I&apos;m Regan, a <span className="dark:text-brand dark:font-normal font-extrabold font-jost">full-stack software engineer</span> with over 3 years of proven experience building innovative software solutions. 
                    I specialize in creating high-quality web applications that are not only functional but scalable and efficient. 
                    Alongside development, I also write about technology, sharing insights and tutorials to help others learn and grow.
                </p>
                <p>
                    Whether you&apos;re looking for someone to bring your ideas to life, or need expertise to tackle complex technical challenges, I&apos;m here to help. 
                    Let&apos;s collaborate to turn your vision into a reality!
                </p>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex w-full justify-between items-center">
                    <h2 className="text-2xl h-max relative font-semibold after:bg-brand after:w-14 after:h-1 after:absolute after:rounded-md after:-bottom-2 after:left-0 md:text-3xl">Testimonials</h2>
                </div>
            
                <div className="flex flex-col gap-10 bg-gray-300 dark:bg-bg py-10 rounded-2xl md:flex-row">
                    <Testimonials />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;