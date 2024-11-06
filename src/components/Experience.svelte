<script lang="ts">
    import ExpCard from "./ExpCard.svelte";
</script>

<div
    class="shrink flex-col justify-center text-center px-2 mt-2 w-full lg:max-w-[40vw] md:flex"
>
    <h3 class="text-2xl">Professional Experience</h3>
    <ExpCard
        title={"Solution Cables Inc."}
        position={"Software Engineer Intern"}
        location={"Gainesville, FL"}
        startDate={"September 2024"}
        endDate={"Present"}
        info={`
            Contributed to the development and maintenance of existing company software, including programming, writing, and debugging code.
            Created internal tooling to ensure timely delivery of orders.
        `}
        skills={["TypeScript, NextJS, PostgreSQL, Prisma, Docker"]}
    />
    <ExpCard
        title={"Fortinet Inc."}
        position={"Systems Engineer Intern"}
        location={"Sunrise, FL"}
        startDate={"May 2022"}
        endDate={"August 2022"}
        info={`
            Collaborated with team members to develop and configure a network topology using FortiGates.
            Interacted with the Inside Sales team about technical matters, i.e., networking and product support.
            Obtained Fortinet Network Security Expert Levels 1, 2 & 3 Certifications.
        `}
        skills={["Network Topology, Sales"]}
    />
    <ExpCard
        title={"University of Florida"}
        position={"Computer Science Major & Math Minor"}
        location={"Gainesville, FL"}
        startDate={"June 2021"}
        endDate={"December 2024"}
        info={`
            Completed courses: Data Structures and Algorithm, Networking, Operating Systems, Programming Language Concepts.
        `}
        skills={["Software Engineering, Problem Solving, Data Structures"]}
    />
    <ExpCard
        title={"Universidad Carlos III de Madrid"}
        position={"International Student"}
        location={"Madrid, Spain"}
        startDate={"Januaray 2024"}
        endDate={"May 2024"}
        info={`
            Study abroad program focused on computer science core requirements.
            Experienced Spanish culture and had the chance to meet and connect with students from various European countries.
            Completed courses: Artificial Intelligence, Numerical Methods and Spanish B1.
        `}
        skills={["AI Fundamentals, MATLAB"]}
    />
</div>
