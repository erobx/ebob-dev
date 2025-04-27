<script lang="ts">
    import Project from "./Project.svelte";
    let { projects, selected = $bindable(), elementSelected } = $props()
    
    function selectProject(index: number) {
        selected = index
    }
</script>

<div class="grid grid-cols-2">
    <div class="flex flex-col p-2 items-center">
        <h1 class="font-bold mb-2">~ Projects ~</h1>
        <ul class="text-lg w-full pl-2 pr-2">
            {#each projects as proj, i}
                {#if i === selected && i % 2 === 0}
                <li class="bg-primary font-semibold text-info-content">
                    {proj.name}
                </li>
                {:else if i === selected}
                    <li class="bg-secondary font-semibold text-accent-content">
                        {proj.name}
                    </li>
                {:else}
                    <li onclick={() => selectProject(i)} role="none">
                        {proj.name}
                    </li>
                {/if}
            {/each}
        </ul>
    </div>

    {#key selected}
        <div class="flex flex-col items-center p-2">
            <h1 class="font-bold mb-2">~ Details ~</h1>
            <Project project={projects[selected]} elementSelected={elementSelected} />
        </div>
    {/key}
</div>