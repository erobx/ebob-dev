export interface MilestoneData {
    title: string;
    date: string;
    description: string;
    skills: string[];
    technicalDetails: string[];
}

export interface Skill {
    name: string;
    description: string;
}

export function createMilestones(): MilestoneData[] {
    return [
        {
            title: "Bachelor's of Computer Science",
            date: "2021-2024",
            description: "Completed a Bachelor's degree in Computer Science from the University of Florida",
            skills: ["Golang, C++, Java, Python, Data Structrues, Algorithms"],
            technicalDetails: [
                "Graduated with honors",
                "Led a team project...",

            ],
        },
        {
            title: "Systems Engineering Intern",
            date: "2022",
            description: "",
            skills: [],
            technicalDetails: [],
        },
        {
            title: "Software Engineer Intern",
            date: "2024",
            description: "",
            skills: ["TypeScript, Docker, PostgreSQL"],
            technicalDetails: [],
        }
    ]
}

export function createSkills(): Skill[] {
    return [
        {
            name: "Programming Languages",
            description: "Golang, TypeScript, Python, Java, C++, HTML/CSS"
        },
        {
            name: "Databases",
            description: "PostgreSQL, MySQL, MonogDB"
        },
        {
            name: "Tools",
            description: "Git, Docker, VS Code, Jupyter Notebook"
        },
        {
            name: "Libraries",
            description: "TailwindCSS, Numpy, Scikit, Pandas",
        }
    ]
}