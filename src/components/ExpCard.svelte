<script lang="ts">
    import { fade } from 'svelte/transition';

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

    let isExpanded = $state(false);
    
    function toggleCard() {
        isExpanded = !isExpanded;
    }
</script>

<div class="flex justify-center mt-4 w-full lg:max-w-[40vw]">
    <div class="card p-8 bg-dark-blue rounded-lg w-full shadow-lg space-y-2" >
        <div
            class="flex items-center w-full cursor-pointer"
            role="button"
            tabindex={0}
            onclick={toggleCard}
            onkeydown={(e) => e.key === 'Enter' && toggleCard()}
        >
            <h3 class="text-2xl flex-grow text-center">{title}</h3>
            <svg
                class="w-6 h-6 transform transition-transform"
                class:rotate-180={isExpanded}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </div>
        <h4 class="text-[#9E9F90] text-xl">{position}</h4>
        {#if isExpanded}
            <div transition:fade>
                <div class="flex flex-col md:flex-row gap-2 md:gap-8 justify-center text-[#9E9F90]">
                    <h5>{location}</h5>
                    <h5>{startDate} - {endDate}</h5>
                </div>
                <p class="text-left">{info}</p>
                <div class="text-[#23a9d5]">Skills: {skills}</div>
            </div>
        {/if}
    </div>
</div>
