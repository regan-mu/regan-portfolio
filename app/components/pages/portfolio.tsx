import PortfolioProject from "../cards/portfolioProject";
import { projects } from "@/app/data/projectsData";
const Portfolio = () => {
    return (
        <section className="w-full h-auto flex flex-col flex-nowrap overflow-x-auto mt-5 gap-5 lg:gap-10 md:pb-10 md:flex-row">
            {
                projects.map(project => <PortfolioProject 
                    key={project.id} 
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    demo={project.demo}
                    github={project.github}
                    tools={project.tools}
                />
            )}
            
        </section>
    )
}

export default Portfolio;