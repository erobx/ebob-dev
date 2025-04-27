export interface Skill {
    name: string;
    badges: Badge[];
}

export interface Badge {
    name: string;
    color: string;
    iconName?: string;
}

export interface Project {
    name: string;
    description: string;
    img?: string;
    link?: string;
    repo?: string;
    badges: Badge[];
}

export function createSkills(): Skill[] {
    return [
        {
            name: "Programming Languages",
            badges: [
                {name: "Golang", color: "primary", iconName: "logos:gopher"}, 
                {name: "TypeScript", color: "primary", iconName: ""},
                {name: "Python", color: "primary", iconName: ""}, 
                {name: "Java", color: "primary", iconName: ""},
                {name: "C++", color: "primary", iconName: ""},
                {name: "HTML/CSS", color: "primary", iconName: ""}
            ]
        },
        {
            name: "Databases",
            badges: [
                {name: "PostgreSQL", color: "info", iconName: ""},
                {name: "MySQL", color: "info", iconName: ""},
                {name: "MonogDB", color: "info", iconName: ""}
            ]
        },
        {
            name: "Development",
            badges: [
                {name: "Git", color: "primary", iconName: ""},
                {name: "Docker", color: "primary", iconName: ""},
                {name: "Linux", color: "primary", iconName: ""},
                {name: "Windows", color: "primary", iconName: ""},
                {name: "Vite", color: "primary"}
            ]
        },
        {
            name: "Frameworks",
            badges: [
                {name: "React", color: "info"},
                {name: "Svelte", color: "info"},
            ]
        },
        {
            name: "Libraries",
            badges: [
                {name: "TailwindCSS", color: "primary", iconName: ""},
                {name: "tRPC", color: "primary", iconName: ""},
                {name: "Numpy", color: "primary", iconName: ""}, 
                {name: "Scikit", color: "primary", iconName: ""},
                {name: "Pandas", color: "primary", iconName: ""}
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
                {name: "Golang", color: "primary", iconName: ""},
                {name: "React", color: "info", iconName: ""},
                {name: "PostgreSQL", color: "primary", iconName: ""}
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
                {name: "PostgreSQL", color: "primary"},
                {name: "Teamwork", color: "info"},
                {name: "Backend", color: "info"}
            ]
        },
        {
            name: "Portfolio",
            description: `
            The website you're currently on! A digital representation
            of my skills, experience, and projects. It is built with
            SvelteKit, TypeScript, Tailwindcss and DaisyUI.
            `,
            img: "",
            link: "https://www.ebob.dev",
            repo: "https://www.github.com/erobx/ebob-dev",
            badges: [
                {name: "Svelte", color: "secondary"},
                {name: "TypeScript", color: "primary"},
                {name: "Tailwindcss", color: "info"}
            ]
        },
        {
            name: "Anki Duo",
            description: `
            A cli tool that allows a user to retrieve their studied vocab
            words from Duolingo and import them into the flashcard program Anki.
            It utilizes an unofficial Duolingo api I rewrote in Go.
            `,
            img: "images/anki-duo.png",
            repo: "https://www.github.com/erobx/anki_duo",
            badges: [
                {name: "Golang", color: "primary"},
                {name: "Make", color: "success"}
            ]
        },
        {
            name: "Programming Language",
            description: `
            Developed a lexer, parser, interpreter, analyzer and generator to
            create my own programming language that compiles to Java bytecode.
            `,
            img: "images/prog-lang.png",
            repo: "https://www.github.com/erobx/PLC_Project",
            badges: [
                {name: "Java", color: "error"},
                {name: "Teamwork", color: "accent"},
            ]
        },
        {
            name: "Stonks",
            description: `
            My final project for Data Structures and Algorithms.
            Analyzed 1000+ stocks from various exchanges in a graph with
            edges connecting related tickers based on various attributes, i.e.
            p/e, number of employees, etc.
            `,
            img: "images/stonks.png",
            repo: "https://www.github.com/erobx/stonks",
            badges: [
                {name: "Python", color: "warning"},
                {name: "Flask", color: "secondary"},
                {name: "Teamwork", color: "accent"}
            ]
        },
    ]
}
