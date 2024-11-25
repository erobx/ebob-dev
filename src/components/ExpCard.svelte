<script lang="ts">
    interface Props {
        title: string;
        position: string;
        location: string;
        startDate: string;
        endDate: string;
        info: string;
        skills: string[];
    }

    let {
        title,
        position,
        location,
        startDate,
        endDate,
        info,
        skills
    }: Props = $props();
</script>

<div class="flex justify-center mt-4 w-full lg:max-w-[40vw]">
    <div class="card p-8 bg-dark-blue rounded-lg w-full shadow-lg space-y-2">
        <h3 class="text-2xl">{title}</h3>
        <h4 class="text-[#9E9F90] text-xl">{position}</h4>
        <div class="flex flex-col md:flex-row gap-2 md:gap-8 justify-center text-[#9E9F90]">
            <h5>{location}</h5>
            <h5>{startDate} - {endDate}</h5>
        </div>
        <p class="text-left">{info}</p>
        <div class="text-[#23a9d5]">Skills: {skills}</div>
    </div>
</div>
