import { IJob } from "../components/types";


export const Jobs:IJob[] = [
    { 
        id: 1,
        title: "Tech Lead",
        period: "Mar, 2024 - Present",
        employer: "Pamba Africa",
        roles: [
            {
                id: 1,
                value: "Designed and developed the backend system for Pamba Africa MVP"
            },
            {
                id: 2,
                value: "Led the core development team"
            },
            {
                id: 3,
                value: "Wrote code documentation and technical specifications for the backend"
            },
        ]
    },
   { 
        id: 2,
        title: "Software Developer",
        period: "Jan, 2021 - Present",
        employer: "Consultant",
        roles: [
            {
                id: 1,
                value: "Designing and developing backend systems."
            },
            {
                id: 2,
                value: "Integrating APIs and Third-Party Services."
            },
            {
                id: 3,
                value: "Version Control and Collaboration."
            },
            {
                id: 4,
                value: "Scoping and managing software projects."
            },
        ]
    },
    { 
        id: 3,
        title: "Data Science Instructor",
        period: "Aug, 2021 - Dec, 2023",
        employer: "Africa Data School",
        roles: [
            {
                id: 1,
                value: "Manage and deliver data science content for learners."
            },
            {
                id: 2,
                value: "Create and curate lecture."
            },
            {
                id: 3,
                value: "Maintain high level of interactivity with learners."
            },
        ]
    },
]