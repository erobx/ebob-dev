<script lang="ts">
    import ExpCard from "./ExpCard.svelte";
</script>

<div class="flex flex-col items-center text-center gap-4">
    <ExpCard
        title={"Solution Cables Inc."}
        position={"Software Engineering Intern"}
        startDate={"2024"}
        endDate={"Present"}
        info={[
            `Built order return tracking to surface product issues and customer behavior insights,
            boosting decision-making around restocking and quality by 25% in one quarter.`,
            `Integrated return shipping costs, detailed order itemization and a purchase order system into
            existing full-stack order management system for improved accuracy using TypeScript,
            tRPC, and PostgreSQL.`,
            `Strengthened vendor relationship management to facilitate smooth reordering
            and maintain supplier connections.`
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
            peer teamwork and relationship-building with supervisor.`
        ]}
    />
</div>