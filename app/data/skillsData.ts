import {ISkillGroup} from "../components/types";

const skillsData:ISkillGroup[] = [
    {
        id: 1,
        grouping: "Programming",
        tools: ["Python", "JavaScript/TypeScript", "SQL", "Git"]
    },
    {
        id: 3,
        grouping: "Web",
        tools: ["Flask", "Django", "ExpressJs", "NodeJs", "ReactJs", "NextJs", "REST"]
    },
    {
        id: 2,
        grouping: "Data Science & ML",
        tools: [
            "Tensorflow", "Pandas", "Plotly", "Matplotlib", "Scikit Learn", "Power BI", "Machine Learning", "Deep Learning"]
    },
]

export default skillsData;