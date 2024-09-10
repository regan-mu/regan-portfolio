import React from "react";
import {articles} from "../../data/articleData";
import ArticleCard from "../cards/article";
import MoreArticles from "../buttons/moreArticles"

const AboutMe = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 text-lg col-span-2">
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
                    <h2 className="text-3xl h-max font-poppins relative font-semibold after:bg-brand after:w-14 after:h-1 after:absolute after:rounded-md after:-bottom-2 after:left-0">Featured Articles</h2>
                    <MoreArticles />
                </div>
            
                <div className="flex gap-10">
                    {
                        articles.slice(0, 2).map(article => <ArticleCard
                            key={article.id}
                            id={article.id}
                            image={article.image}
                            title={article.title}
                            intro={article.intro}
                            date={article.date}
                            link={article.link}
                         />)
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutMe;