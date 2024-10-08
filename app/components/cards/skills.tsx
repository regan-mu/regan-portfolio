import SkillsGrouping from "./skillsGrouping";
import skillsData from "../../data/skillsData";

const Skills = () => {
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {skillsData.map(skill => <SkillsGrouping key={skill.id} grouping={skill.grouping} tools={skill.tools} id={skill.id} />)}
        </div>
    )
}

export default Skills;