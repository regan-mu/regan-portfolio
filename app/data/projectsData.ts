import { IProject } from "../components/types";

export const projects: IProject[] = [
    {
        id: 1,
        title: "StudyBuddy",
        description: "This app allows users connect and discuss topics they are interested in learning.",
        demo: "https://studybuddy-ai2w.onrender.com/",
        github: "https://github.com/regan-mu/StudyBuddy",
        tools: [
            "Django", "HTML", "CSS", "SQLite"
        ]
    },
    {
        id: 2,
        title: "Face Mask Detector",
        description: "Deep Learning application that can be used to detect whether a person is wearing a facemask",
        demo: "https://regan-mu-face-mask-detector-srcapp-b3ilq3.streamlit.app/",
        github: "https://github.com/regan-mu/face-mask-detector",
        tools: [
            "Tensorflow", "CNN", "Streamlit", "OpenCV"
        ]
    },
    {
        id: 3,
        title: "Petsgram",
        description: "A fun instagram-like app for pets. Call it instagram for pets if you like.",
        demo: "https://petsgram-client.vercel.app/",
        github: "https://github.com/regan-mu/petsgram-backend",
        tools: [
            "Django", "DRF", "React", "Typescript", "Cloudinary"
        ]
    },
    {
        id: 4,
        title: "Qwiz",
        description: "Qwiz is a web application designed for creating, managing, and answering quizzes online. ",
        demo: "https://qwiz-client.vercel.app",
        github: "https://github.com/regan-mu/qwiz-backend",
        tools: [
            "Express.js", "React", "PostgreSQL", "Prisma", "TypeScript"
        ]
    },
    {
        id: 5,
        title: "Motorverse",
        description: "A simple web application for car inventory and listing",
        demo: "https://motorverse.onrender.com/motorverse",
        github: "https://github.com/regan-mu/motorverse",
        tools: [
            "NodeJs", "ExpressJs", "PUG", "MongoDB"
        ]
    },
]