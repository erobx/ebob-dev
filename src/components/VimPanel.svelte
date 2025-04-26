<script lang="ts">
    import { createSkills, type Skill } from "$lib/data";
    import Projects from "./Projects.svelte";
    import Skills from "./Skills.svelte";

    let selected: number = $state(0)
    let pane: string = $state("skills")
    const skills: Skill[] = createSkills()

    function handleKeyDown(event: KeyboardEvent) {
        event.preventDefault()

        let key: string = event.key
        switch (key) {
            case 'h':
            case 'j':
                if (selected < skills.length - 1) selected++
                break
            case 'ArrowDown':
                if (selected < skills.length - 1) selected++
                break
            case 'k':
                if (selected > 0) selected--;
                break
            case 'ArrowUp':
                if (selected > 0) selected--;
                break
            case 'l':
            case 's':
                pane = "skills"
                break
            case 'p':
                pane = "projects"
                break
            case 't':
                pane = "typing"
                break
        }
    }
</script>

<div class="flex flex-col w-2/5 justify-start bg-neutral text-start border-2 size-96 p-4 rounded-lg shadow-md overflow-auto outline-none" 
    role="textbox"
    tabindex="0"
    onkeydown={handleKeyDown}
>
    <div class="flex justify-center m-2">
        <h1 class="border p-2 font-bold basis-1/4">evan robinson</h1>
        <h1 class="border p-2 basis-1/4"><span class="font-bold">s</span> skills</h1>
        <h1 class="border p-2 basis-1/4"><span class="font-bold">p</span> projects</h1>
        <h1 class="border p-2 basis-1/4"><span class="font-bold">t</span> typing</h1>
    </div>
    {#if pane === "skills"}
        <Skills skills={skills} selected={selected} />
    {:else if pane === "projects"}
        <Projects />
    {:else if pane === "typing"}
        <div></div>
    {/if}
</div>