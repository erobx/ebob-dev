export interface Skill {
    name: string;
    badges: Badge[];
}

export interface Badge {
    name: string;
    color: string;
}

export interface Project {
    name: string;
    description: string;
    img?: string;
    link?: string;
    repo: string;
    badges: Badge[];
}

export function createSkills(): Skill[] {
    return [
        {
            name: "Programming Languages",
            badges: [
                {name: "Golang", color: "info"}, 
                {name: "TypeScript", color: "info"},
                {name: "Python", color: "info"}, 
                {name: "Java", color: "info"},
                {name: "C++", color: "info"},
                {name: "HTML/CSS", color: "info"}
            ]
        },
        {
            name: "Databases",
            badges: [
                {name: "PostgreSQL", color: "accent"},
                {name: "MySQL", color: "accent"},
                {name: "MonogDB", color: "accent"}
            ]
        },
        {
            name: "Development",
            badges: [
                {name: "Git", color: "info"},
                {name: "Docker", color: "info"},
                {name: "VS Code", color: "info"},
                {name: "Linux", color: "info"},
                {name: "Windows", color: "info"},
                {name: "Jupyter Notebook", color: "info"}
            ]
        },
        {
            name: "Libraries",
            badges: [
                {name: "TailwindCSS", color: "accent"}, 
                {name: "tRPC", color: "accent"},
                {name: "Numpy", color: "accent"}, 
                {name: "Scikit", color: "accent"},
                {name: "Pandas", color: "accent"}
            ]
        }
    ]
}

export function createProjects(): Project[] {
    return [
        {
            name: "CSUpgrade",
            description: `
            A web application centered around group-based skin upgrading within the 
            Counter-Strike 2 economic system.
            `,
            img: "",
            link: "",
            repo: "https://github.com/erobx/csupgrade",
            badges: [
                {name: "Golang", color: "info"},
                {name: "React", color: "info"},
                {name: "PostgreSQL", color: "info"}
            ]
        },
        {
            name: "SwampReview",
            description: "Website for student reviews about on-campus living options for the University of Florida.",
            img: "images/swamp-review.png",
            link: "https://swampreview.netlify.app/",
            repo: "https://github.com/Code-Goblins2024/swamp-review",
            badges: [
                {name: "JavaScript", color: "secondary"},
                {name: "React", color: "info"},
                {name: "Agile", color: "accent"},
                {name: "PostgreSQL", color: "info"},
                {name: "Backend", color: "info"}
            ]
        },
    ]
}