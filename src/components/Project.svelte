<script lang="ts">
    import type { Project } from "$lib/data";
    let { project, elementSelected }: { project: Project, elementSelected: string } = $props()
</script>

<div class="flex flex-col text-center gap-2">
    {#if project.img}
        <img
            src={project.img}
            alt={project.name}
        />
    {/if}
    <p>{project.description}</p>

    <div class="flex justify-center gap-4">
        {#if project.link && elementSelected === "link"}
            <button id="link" class="btn btn-active btn-accent"><a href={project.link} target="_blank">Live Link</a></button>
        {:else if project.link}
            <button id="link" class="btn btn-outline btn-accent"><a href={project.link} target="_blank">Live Link</a></button>
        {/if}

        {#if project.repo && elementSelected === "repo"}
            <button id="repo" class="btn btn-active btn-primary"><a href={project.repo} target="_blank">Repo</a></button>
        {:else if project.repo}
            <button id="repo" class="btn btn-outline btn-primary"><a href={project.repo} target="_blank">Repo</a></button>
        {/if}
    </div>

    <div class="flex flex-wrap justify-center gap-2 mt-2">
    {#each project.badges as badge}
        {#if badge.color === "primary"}
            <div class="badge badge-primary font-semibold">
                {badge.name}
            </div>
        {:else if badge.color === "info"}
            <div class="badge badge-info font-semibold">
                {badge.name}
            </div>
        {:else if badge.color === "accent"}
            <div class="badge badge-accent font-semibold">
                {badge.name}
            </div>
        {:else if badge.color === "secondary"}
            <div class="badge badge-secondary font-semibold">
                {badge.name}
            </div>
        {:else if badge.color === "success"}
            <div class="badge badge-success font-semibold">
                {badge.name}
            </div>
        {:else if badge.color === "warning"}
            <div class="badge badge-warning font-semibold">
                {badge.name}
            </div>
        {:else if badge.color === "error"}
            <div class="badge badge-error font-semibold">
                {badge.name}
            </div>
        {/if}
    {/each}
    </div>
</div>