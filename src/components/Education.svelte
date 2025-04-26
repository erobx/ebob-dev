<script lang="ts">
    import ExpCard from "./ExpCard.svelte";
</script>

<div class="flex flex-col items-center text-center gap-4">
    <ExpCard
        title={"University of Florida"}
        position={"Computer Science Major"}
        startDate={"June 2021"}
        endDate={"December 2024"}
        info={[
            `Graduated from the University of Florida in 3.5 years with my
            Bachelor's of Science in Computer Science.`
        ]}
    />
    <ExpCard
        title={"Universidad Carlos III de Madrid"}
        position={"International Student"}
        startDate={"January 2024"}
        endDate={"May 2024"}
        info={[
            `Studied abroad in Madrid, Spain; focused on core computer science requirements.`,
            `Experienced Spanish culture and had the opportunity to meet
            and connect with students from around the world.`,
        ]}
    />
</div>