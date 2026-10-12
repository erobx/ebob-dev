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
    kind: "Work" | "Side Project";
    org?: string;
    role?: string;
    outcomes?: string[];
    // headline number shown when there's no screenshot
    stat?: { value: string; label: string };
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
            description: `My background is Software Engineering. I am proficient
            with data, integrations, and full-stack development, which ensures
            ideas become realistic.`
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
            name: "Returns Analytics",
            kind: "Work",
            org: "Solution Cables",
            description: `Built an order-return tracking system that surfaced trends
            in returned products, helping the team understand why items came back
            and make better restocking decisions.`,
            outcomes: [
                "Added return costs and itemized orders to the warehouse system",
                "Linked customer orders to suppliers to simplify reordering",
                "Full-stack features still in use today",
            ],
            stat: { value: "338+ Returns", label: "turned into restocking insight" },
            badges: [
                {name: "Analytics", color: "primary"},
                {name: "Operations", color: "primary"},
                {name: "Production", color: "primary"},
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
