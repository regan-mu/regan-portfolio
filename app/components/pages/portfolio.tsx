import PortfolioProject from "../cards/portfolioProject";
import { projects } from "@/app/data/projectsData";
const Portfolio = () => {
    return (
        <div className="w-full h-full flex flex-wrap mt-5 gap-5 lg:gap-10">
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
            
        </div>
    )
}

export default Portfolio;