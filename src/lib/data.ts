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
                {name: "CSS", color: "primary", iconName: ""}
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
                {name: "Fiber", color: "info"},
                {name: "React", color: "info"},
                {name: "NodeJS", color: "info"},
                {name: "Flask", color: "info"},
                {name: "Svelte", color: "info"},
            ]
        },
        {
            name: "Cloud Computing",
            badges: [
                {name: "AWS", color: "primary"},
                {name: "Cloudflare", color: "primary"}
            ]
        },
        {
            name: "Libraries",
            badges: [
                {name: "TailwindCSS", color: "info", iconName: ""},
                {name: "tRPC", color: "info", iconName: ""},
                {name: "Numpy", color: "info", iconName: ""}, 
                {name: "Scikit", color: "info", iconName: ""},
                {name: "Pandas", color: "info", iconName: ""}
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
            Counter-Strike 2 economic system. Users compete against one another
            to obtain better quality skins. It is built using Golang, React,
            TypeScript, Tailwindcss, and R2 for image storage and hosted on AWS.
            `,
            img: "images/csupgrade.png",
            link: "https://csupgrade.ebob.dev/",
            repo: "https://github.com/erobx/csupgrade",
            badges: [
                {name: "Golang", color: "primary", iconName: ""},
                {name: "React", color: "secondary", iconName: ""},
                {name: "PostgreSQL", color: "primary", iconName: ""},
                {name: "R2", color: "warning", iconName: ""},
                {name: "Unit Testing", color: "info"}
            ]
        },
        {
            name: "SwampReview",
            description: `Website for student reviews about on-campus living options 
            for the University of Florida. Serverless infrastructure powered by Netlify and Supabase.`,
            img: "images/swamp-review.png",
            link: "https://swampreview.netlify.app/",
            repo: "https://github.com/Code-Goblins2024/swamp-review",
            badges: [
                {name: "JavaScript", color: "secondary"},
                {name: "React", color: "primary"},
                {name: "Agile", color: "accent"},
                {name: "PostgreSQL", color: "primary"},
                {name: "Teamwork", color: "accent"},
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
            img: "images/ebob-dev.png",
            link: "https://www.ebob.dev",
            repo: "https://www.github.com/erobx/ebob-dev",
            badges: [
                {name: "Svelte", color: "secondary"},
                {name: "TypeScript", color: "primary"},
                {name: "Tailwindcss", color: "secondary"},
                {name: "Cloudflare Pages", color: "info"}
            ]
        },
        {
            name: "Anki Duo",
            description: `
            A cli tool that allows a user to retrieve their studied vocab
            words from Duolingo and import them into the flashcard program Anki.
            It utilizes an unofficial Duolingo API I rewrote in Go.
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
            A functioning program language built using Java that compiles to
            Java bytecode. Users can create any program they want, such as
            FizzBuzz!
            `,
            img: "images/prog-lang.png",
            repo: "https://www.github.com/erobx/PLC_Project",
            badges: [
                {name: "Java", color: "error"},
                {name: "Unit Testing", color: "info"},
                {name: "Harness Testing", color: "primary"},
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
