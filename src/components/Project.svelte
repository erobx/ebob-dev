<script lang="ts">
    import type { Project } from "$lib/data";
    let { project, elementSelected }: { project: Project, elementSelected: string } = $props()
</script>

<div class="flex flex-col gap-2">
    {#if project.img}
        <img
            src={project.img}
            alt=""
        />
    {/if}
    <p>{project.description}</p>

    <div class="flex justify-center gap-4">
        {#if project.link && elementSelected === "link"}
            <button id="link" class="btn btn-active btn-info"><a href={project.link} target="_blank">Live Link</a></button>
        {:else if project.link}
            <button id="link" class="btn btn-outline btn-info"><a href={project.link} target="_blank">Live Link</a></button>
        {/if}

        {#if project.repo && elementSelected === "repo"}
            <button id="repo" class="btn btn-active btn-primary"><a href={project.repo} target="_blank">Repo</a></button>
        {:else if project.repo}
            <button id="repo" class="btn btn-outline btn-primary"><a href={project.repo} target="_blank">Repo</a></button>
        {/if}
    </div>

    <div class="flex flex-wrap justify-center gap-2 mt-2">
    {#each project.badges as badge}
        <div class={`badge badge-${badge.color} font-semibold`}>
            {badge.name}
        </div>
    {/each}
    </div>
</div>