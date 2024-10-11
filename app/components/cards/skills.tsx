import SkillsGrouping from "./skillsGrouping";
import skillsData from "../../data/skillsData";

const Skills = () => {
    return (
        <article className="flex flex-col gap-10 w-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scroll-smooth snap-x snap-mandatory md:pb-10 md:flex-row">
            {skillsData.map(skill => <SkillsGrouping key={skill.id} grouping={skill.grouping} tools={skill.tools} id={skill.id} />)}
        </article>
    )
}

export default Skills;