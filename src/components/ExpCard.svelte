<script lang="ts">
    export let title: string;
    export let position: string;
    export let location: string;
    export let startDate: string;
    export let endDate: string;
    export let info: string;
    export let skills: string[];
</script>

<div class="flex justify-center mt-4">
    <div class="card p-4 bg-dark-blue rounded-lg w-max shadow-lg space-y-1">
        <h3>{title}</h3>
        <h4 class="text-[#9E9F90]">{position}</h4>
        <div class="flex gap-8 justify-evenly text-[#9E9F90]">
            <h5>{location}</h5>
            <h5>{startDate} - {endDate}</h5>
        </div>
        <p>{info}</p>
        <div class="text-[#23a9d5]">Skills: {skills}</div>
    </div>
</div>