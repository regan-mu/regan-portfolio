export interface IArticle  {
    id: number
    image: string,
    title: string,
    intro: string,
    date: string,
    link: string
}

export interface IJob {
    id: number,
    title: string,
    period: string,
    employer: string,
    roles: {id: number, value: string}[]
}

export type AppContextType = {
    activePage: string;
    setPage: (page: string) => void;
    toggleInfo: boolean;
    setToggle: () => void; 
}

export interface ISkillGroup {
    id: number,
    grouping: string,
    tools: string[]
}

export interface IProject {
    id: number,
    title: string,
    description: string,
    demo: string,
    github: string,
    tools: string[]
}