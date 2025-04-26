<script lang="ts">
    let { skills, selected } = $props()
</script>

<div class="grid grid-cols-2">
        <div id="menu" class="flex flex-col p-2">
            <h1 class="font-bold mb-2">~ Skills ~</h1>
            <ul>
                {#each skills as skill, i}
                    {#if i === selected && i % 2 === 0}
                        <li class="bg-info font-semibold text-info-content w-fit pl-1 pr-1">
                            {skill.name}
                        </li>
                    {:else if i === selected}
                        <li class="bg-accent font-semibold text-accent-content w-fit pl-1 pr-1">
                            {skill.name}
                        </li>
                    {:else}
                        <li>
                            {skill.name}
                        </li>
                    {/if}
                {/each}
            </ul>
        </div>

        {#key selected}
            <div class="flex flex-col items-start p-2">
                <h1 class="font-bold mb-2">~ Badges ~</h1>
                <div class="flex flex-wrap gap-2">
                    {#each skills[selected].badges as badge}
                        <div class={`badge badge-${badge.color} font-semibold`}>
                            {badge.name}
                        </div>
                    {/each}
                </div>
            </div>
        {/key}
    </div>