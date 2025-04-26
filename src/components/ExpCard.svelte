<script lang="ts">
    import { fade } from "svelte/transition";

    let {
        title,
        position,
        startDate,
        endDate,
        info,
    } = $props()

    let isExpanded = $state(false)

    function toggleCard() {
        isExpanded = !isExpanded
    }
</script>

<div class="card w-3xl bg-base-100 p-8 rounded-lg shadow-md space-y-2" >
    <div
        class="flex items-center w-full cursor-pointer"
        role="button"
        tabindex={0}
        onclick={toggleCard}
        onkeydown={(e) => e.key === 'Enter' && toggleCard()}
    >
        <h3 class="text-2xl text-primary flex-grow font-semibold text-center">{position}</h3>
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
    <h1 class="text-xl text-info font-semibold text-center">{title} | {startDate} - {endDate}</h1>
    {#if isExpanded}
        <div transition:fade={{ delay: 0, duration: 1 }}>
            <ul>
                {#each info as i}
                    <li>
                        <span class="font-semibold text-accent">*</span> {i}
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>