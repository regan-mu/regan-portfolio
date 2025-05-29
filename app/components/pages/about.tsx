import React from "react";
import Testimonials from "../cards/testimonials";

const AboutMe = () => {
    return (
        <section className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 col-span-2 tracking-wide leading-tight md:text-lg md:font-medium">
                <p>
                    Hi 👋 I&apos;m Regan, a <span className="dark:text-brand  font-extrabold">full-stack software engineer</span> with 4+ years of experience building innovative, scalable web applications. 
                    I specialize in creating high-performance solutions that prioritize functionality, efficiency, and long-term maintainability.
                    I&apos;m passionate about knowledge sharing through technical writing—creating tutorials, insights, and deep-dives that help developers solve complex problems and level up their skills.
                </p>
                <p>
                    Ready to bring your ideas to life or tackle challenging technical problems? Let&apos;s collaborate and turn your vision into reality.
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