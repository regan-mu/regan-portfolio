import React from "react";
import { articles } from "@/app/data/articleData";
import ArticleCard from "../cards/article";
const Articles = () => {
    return (
        <div className="flex flex-wrap gap-5 mt-5 lg:gap-10">
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
        </div>
    )
}

export default Articles;