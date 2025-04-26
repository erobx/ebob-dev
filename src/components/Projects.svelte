<script lang="ts">
    import Project from "./Project.svelte";

    let { projects, selected, elementSelected } = $props()
</script>

<div class="grid grid-cols-2">
    <div class="flex flex-col p-2">
        <h1 class="font-bold mb-2">~ Projects ~</h1>
        <ul>
            {#each projects as proj, i}
                {#if i === selected && i % 2 === 0}
                <li class="bg-info font-semibold text-info-content w-fit pl-1 pr-1">
                    {proj.name}
                </li>
                {:else if i === selected}
                    <li class="bg-accent font-semibold text-accent-content w-fit pl-1 pr-1">
                        {proj.name}
                    </li>
                {:else}
                    <li>
                        {proj.name}
                    </li>
                {/if}
            {/each}
        </ul>
    </div>

    {#key selected}
        <div class="flex flex-col items-start p-2">
            <h1 class="font-bold mb-2">~ Details ~</h1>
            <Project project={projects[selected]} elementSelected={elementSelected} />
        </div>
    {/key}
</div>