<script lang="ts">
    import ExpCard from "./ExpCard.svelte";
</script>

<div class="flex flex-col items-center text-center md:items-start md:text-left gap-4 w-full">
    <ExpCard
        title={"RockED"}
        position={"Implementation Specialist"}
        startDate={"November 2025"}
        endDate={"Present"}
        info={[
            `Built 9 production tools and automations that eliminated manual data work:
             SFTP DMS data pulls, a daily scheduled CSV export pipeline, and a browser
             extension for vendor feed setup.`,
            `Operationalized and lead the design of an AI tool that automates Performance Manager
             call prep which cut hours of manual CRM research and reporting per call.`,
            `Owned end-to-end implementation for 200+ dealership Booster activations,
             overseeing the entire process from DMS feed setup and OpCode configuration
             through advisor onboarding and launch.`,
        ]}
    />

    <ExpCard
        title={"Solution Cables Inc."}
        position={"Software Engineering Intern"}
        startDate={"September 2024"}
        endDate={"December 2024"}
        info={[
            `Built an order return tracking system to identify trends in returned products, 
            helping analyze the reasons behind returns and inform restocking decisions.`,
            `Integrated return shipping costs, detailed order itemization, and a purchase
            order system into an in-house warehouse management software, enhancing its
            functionality and accuracy using TypeScript, tRPC, and PostgreSQL.`,
            `Streamlined vendor relationship management by creating relational database 
            connections linking customer orders to corresponding suppliers, simplifying 
            reordering processes and maintaining strong supplier relationships.`
        ]}
    />
    <ExpCard
        title={"Fortinet Inc."}
        position={"Systems Engineering Intern"}
        startDate={"May 2022"}
        endDate={"August 2022"}
        info={[
            `Configured network topology using FortiGates in collaboration with 10 team members
            to support secure infrastructure design.`,
            `Gained foundational knowledge of the OSI model and explored cybersecurity vulnerabilities
            and mitigation strategies at each layer.`,
            `Developed strong communication and collaboration skills through mentorship,
            peer teamwork and relationship-building with my supervisor.`
        ]}
    />
</div>
