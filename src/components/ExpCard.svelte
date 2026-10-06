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

<div class="card w-full bg-base-100 border-l-4 border-primary rounded-lg shadow-md px-6 py-4">
    <div
        class="flex flex-col cursor-pointer gap-1"
        role="button"
        tabindex={0}
        onclick={toggleCard}
        onkeydown={(e) => e.key === 'Enter' && toggleCard()}
    >
        <div class="flex items-center justify-between">
            <h3 class="text-primary text-2xl font-semibold">{position}</h3>
            <svg
                class="w-6 h-6 transform transition-transform shrink-0"
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
        <div class="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <h4 class="text-success text-lg font-semibold">{title}</h4>
            <span class="text-sm font-medium text-info bg-info/15 px-2 py-0.5 rounded-full whitespace-nowrap">{startDate} – {endDate}</span>
        </div>
    </div>
    {#if !isExpanded}
        <p class="text-sm text-base-content/70 italic truncate mt-1">{info[0]}...</p>
    {/if}
    {#if isExpanded}
        <hr class="my-3 border-base-300" transition:fade={{ duration: 100 }} />
        <div transition:fade={{ delay: 0, duration: 150 }}>
            <ul class="space-y-1">
                {#each info as i}
                    <li class="text-lg">
                        <span class="font-semibold text-accent">*</span> {i}
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>
