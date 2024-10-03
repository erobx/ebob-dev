<script lang="ts">
    import ExpCard from "./ExpCard.svelte";
</script>

<div
    class="shrink flex-col justify-center text-center px-2 mt-4 w-full lg:max-w-[40vw] md:flex"
>
    <div class="card p-4 bg-dark-blue rounded-lg shadow-lg w-full">
        <h3>Professional Experience</h3>
    </div>
    <ExpCard
        title={"Solution Cables Inc."}
        position={"Independent Contractor"}
        location={"Gainesville, FL"}
        startDate={"September 2024"}
        endDate={"Present"}
        info={`
            Contributed to the development and maintenance of existing company software, including programming, writing, and debugging code.
        `}
        skills={["Typescript, NextJS, Microservices"]}
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
</div>
