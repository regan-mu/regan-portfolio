import React from "react";
import { articles } from "@/app/data/articleData";
import ArticleCard from "../cards/article";
const Articles = () => {
    return (
        <section className="flex flex-col flex-nowrap pb-10 w-full overflow-x-auto gap-7 mt-5 lg:gap-10 md:pb-10 md:flex-row">
            {
                articles.map(article => <ArticleCard 
                    key={article.id} 
                    id={article.id}
                    date={article.date} 
                    title={article.title}
                    intro={article.intro}
                    image={article.image}
                    link={article.link}
                    /> 
                )
            }
        </section>
    )
}

export default Articles;