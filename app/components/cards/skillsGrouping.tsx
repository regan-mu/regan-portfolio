import { ISkillGroup } from "../types";
const SkillsGrouping = ({grouping, tools}: ISkillGroup) => {
    return (
        <article className="min-w-full min-h-max flex flex-col gap-8 rounded-xl bg-[#444444] py-8 px-5 shadow-lg shadow-gray-800 md:min-w-96">
            <h2 className="text-xl font-semibold font-poppins text-brand relative h-6 after:absolute after:w-14 after:h-0.5 after:bg-text after:rounded-full after:-bottom-2 after:-left-2">{grouping}</h2>
            <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => <p key={index} className="py-2 px-5 rounded-full bg-lightBg">{tool}</p>)}
            </div>
        </article>
    )
}

export default SkillsGrouping;