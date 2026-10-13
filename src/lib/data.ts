export interface Skill {
    name: string;
    badges: Badge[];
}

export interface Badge {
    name: string;
    color: string;
    iconName?: string;
}

export interface Chart {
    title: string;
    caption: string;
    gridlines: number[];
    points: { label: string; value: number }[];
}

export interface Project {
    name: string;
    description: string;
    kind: "Work" | "Side Project";
    org?: string;
    role?: string;
    outcomes?: string[];
    // headline number shown when there's no screenshot
    stat?: { value: string; label: string };
    // drawn in place of the stat card when present
    chart?: Chart;
    img?: string;
    link?: string;
    repo?: string;
    badges: Badge[];
}

export interface Service {
    title: string;
    icon: string;
    description: string;
}

export function createServices(): Service[] {
    return [
        {
            title: "Customer-First Problem Solving",
            icon: "mdi:account-heart-outline",
            description: `I begin by looking at the users of the product. I
            identify the friction points and convert customer feedback into
            requirements.`
        },
        {
            title: "Thoughtful Experimentation",
            icon: "mdi:flask-outline",
            description: `I take calculated approaches and rapidly improve on
            results that work.`,
        },
        {
            title: "Technical Fluency",
            icon: "mdi:code-braces",
            description: `My background is Computer Science. I am proficient
            with data, integrations, and full-stack development, which ensure
            ideas become reality.`
        },
        {
            title: "Cross-Functional Collaboration",
            icon: "mdi:account-group-outline",
            description: `I work with everyone from frontline teams to the executive
            level, and I speak comfortably with technical and non-technical teammates alike.`
        },
    ]
}

export function createSkills(): Skill[] {
    return [
        {
            name: "Product",
            badges: [
                {name: "Discovery & User Research", color: "primary"},
                {name: "Requirements & PRDs", color: "primary"},
                {name: "Roadmapping & Prioritization", color: "primary"},
                {name: "Agile / Scrum", color: "primary"},
            ]
        },
        {
            name: "Analysis",
            badges: [
                {name: "SQL", color: "accent"},
                {name: "Python", color: "accent"},
                {name: "Pandas", color: "accent"},
                {name: "Excel", color: "accent"},
            ]
        },
        {
            name: "Systems & Automation",
            badges: [
                {name: "Jira", color: "success"},
                {name: "HubSpot CRM", color: "success"},
                {name: "AI / LLM Workflows", color: "success"},
            ]
        },
        {
            name: "Technical Foundation",
            badges: [
                {name: "TypeScript", color: "info"},
                {name: "Go", color: "info"},
                {name: "APIs", color: "info"},
                {name: "AWS", color: "info"},
                {name: "Git", color: "info"},
            ]
        },
    ]
}

export function createProjects(): Project[] {
    return [
        {
            name: "Hendrick Automotive Integration",
            kind: "Work",
            org: "RockED × Hendrick Automotive",
            description: `Worked with Hendrick Automotive to scope, troubleshoot,
            and prove out a data connection between their DMS and RockED's systems,
            giving engineering a validated path to build on.`,
            outcomes: [
                "Scoped data requirements with the customer's team",
                "Troubleshot the connection and delivered a working proof of concept",
                "Cut engineering lead time by 67%, from 3 weeks to 1",
            ],
            stat: { value: "67%", label: "less engineering lead time" },
            badges: [
                {name: "Scoping", color: "primary"},
                {name: "Data Integration", color: "primary"},
                {name: "Proof of Concept", color: "primary"},
                {name: "Customer Collaboration", color: "primary"},
            ]
        },
        {
            name: "AI Call-Prep Assistant",
            kind: "Work",
            org: "RockED",
            description: `Led the design of an AI tool that prepares
            Performance Managers for customer calls. It combines CRM history and
            engagement data into a briefing they can use on the call.`,
            outcomes: [
                "Cut hours of manual CRM research and reporting per call",
                "Designed around the team's existing call workflow",
            ],
            stat: { value: "~2 Hours", label: "of manual prep saved per call" },
            badges: [
                {name: "AI Product", color: "primary"},
                {name: "Workflow Design", color: "primary"},
                {name: "CRM", color: "primary"},
                {name: "Discovery", color: "primary"},
            ]
        },
        {
            name: "Returns Tracker",
            kind: "Work",
            org: "Solution Cables",
            description: `Built a one-click returns flow on the order page. It records
            the return, puts stock back on the right shelf, corrects the order's status,
            and fixes stored profit overnight. It has been used every month since
            launching in October 2024.`,
            outcomes: [
                "309 returns processed, with 577 units ($4,603) restocked",
                "Refunded orders drop out of revenue and profit reporting automatically",
                "Showed that one part drives 19% of all returns, at nearly 4× the baseline rate",
                "In use 25 of 25 months since launch",
            ],
            stat: { value: "309", label: "returns processed since launch" },
            chart: {
                title: "Return rate by quarter",
                caption: "Steady between 0.98% and 1.53% for two years.",
                gridlines: [1.0, 1.5],
                // TODO: replace estimated quarters with exact values from the dashboard
                points: [
                    { label: "Q4 '24", value: 1.18 },
                    { label: "Q1 '25", value: 1.34 },
                    { label: "Q2", value: 1.53 },
                    { label: "Q3", value: 1.07 },
                    { label: "Q4", value: 0.98 },
                    { label: "Q1 '26", value: 1.40 },
                    { label: "Q2", value: 1.47 },
                    { label: "Q3", value: 1.26 },
                ],
            },
            badges: [
                {name: "Workflow Design", color: "primary"},
                {name: "Operations", color: "primary"},
                {name: "Data Analysis", color: "primary"},
                {name: "Full-Stack", color: "primary"},
            ]
        },
        {
            name: "SwampReview",
            kind: "Side Project",
            description: `Developed alongside a team of my peers, a platform
            where UF students could review on-campus housing. In our Agile
            approach, we would break up responsibilities and plan our sprints together.`,
            outcomes: [
                "Took the product from concept to a working platform as a team",
                "Shaped the review and comparison features around what students needed",
                "Kept the team in sync through shared sprint planning",
            ],
            img: "images/swamp-review.png",
            repo: "https://github.com/Code-Goblins2024/swamp-review",
            badges: [
                {name: "Team Collaboration", color: "primary"},
                {name: "Agile", color: "primary"},
                {name: "Project Management", color: "primary"},
            ]
        },
    ]
}
