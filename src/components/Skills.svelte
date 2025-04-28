<script lang="ts">
    let { skills, selected = $bindable() } = $props()

    function selectProject(index: number) {
        selected = index
    }
</script>

<div class="grid grid-cols-1 md:grid-cols-2">
        <div id="menu" class="flex flex-col items-center p-2">
            <h1 class="font-bold mb-2">~ Skills ~</h1>
            <ul class="text-lg w-full pl-2 pr-2">
                {#each skills as skill, i}
                    {#if i === selected && i % 2 === 0}
                        <li class="bg-primary font-semibold text-info-content">
                            {skill.name}
                        </li>
                    {:else if i === selected}
                        <li class="bg-secondary font-semibold text-accent-content">
                            {skill.name}
                        </li>
                    {:else}
                        <li onclick={() => selectProject(i)} role="none">
                            {skill.name}
                        </li>
                    {/if}
                {/each}
            </ul>
        </div>

        {#key selected}
            <div class="flex flex-col items-center p-2">
                <h1 class="font-bold mb-2">~ Badges ~</h1>
                <div class="flex flex-wrap gap-2">
                    {#each skills[selected].badges as badge}
                    {#if badge.color === "primary"}
                        <li class="badge badge-lg badge-primary font-semibold">
                            {badge.name}
                        </li>
                    {:else if badge.color === "info"}
                        <li class="badge badge-lg badge-secondary font-semibold">
                            {badge.name}
                        </li>
                    {/if}
                    {/each}
                </div>
            </div>
        {/key}
    </div>