<script lang="ts">
    import { createProjects, createSkills, type Project, type Skill } from "$lib/data";
    import Projects from "./Projects.svelte";
    import Skills from "./Skills.svelte";
    import Typing from "./Typing.svelte";

    // monkeytype speeds
    let { data } = $props()
    let selected: number = $state(0)
    let focusElement: HTMLElement | null = $state(null)
    let elementSelected: string = $state("")
    let pane: string = $state("skills")
    const skills: Skill[] = createSkills()
    const projects: Project[] = createProjects()

    function handleKeyDown(event: KeyboardEvent) {
        event.preventDefault()
        switch (event.key) {
            case 'q':
                const fa = document.getElementById("focus-area")
                fa?.blur()
                break
            case '/':
                // search
                break
            case 'Enter':
                if (elementSelected === "link" || elementSelected === "repo") {
                    const linkButton = focusElement?.querySelector('a')
                    if (linkButton) {
                        linkButton.click()
                    }
                }
                break
            case 'j':
                if (pane === "projects") {
                    if (selected < projects.length - 1) selected++
                    elementSelected = ""
                    break
                }
                if (selected < skills.length - 1) selected++
                break
            case 'ArrowDown':
                if (pane === "projects") {
                    if (selected < projects.length - 1) selected++
                    elementSelected = ""
                    break
                }
                if (selected < skills.length - 1) selected++
                break
            case 'k':
                if (selected > 0) selected--
                elementSelected = ""
                break
            case 'ArrowUp':
                if (selected > 0) selected--
                elementSelected = ""
                break
            case 'l':
                // nothing selected
                if (elementSelected === "") {
                    focusElement = document.getElementById("link")
                    // link doesn't exist
                    if (!focusElement) {
                        focusElement = document.getElementById("repo")
                        if (focusElement) {
                            elementSelected = focusElement.id
                        }
                    } else {
                        elementSelected = focusElement.id
                    }
                } else {
                    // link already selected
                    if (elementSelected === "link") {
                        focusElement = document.getElementById("repo")
                        if (focusElement) {
                            elementSelected = "repo"
                        }
                    }
                }
                break
            case 'h':
                // something selected
                if (elementSelected === "link") {
                    elementSelected = ""
                }

                if (elementSelected === "repo") {
                    focusElement = document.getElementById("link")
                    if (focusElement) {
                        elementSelected = "link"
                    } else {
                        elementSelected = ""
                    }
                }
                console.log(elementSelected)
                break
            case 's':
                pane = "skills"
                selected = 0
                break
            case 'p':
                pane = "projects"
                selected = 0
                break
            case 't':
                pane = "typing"
                selected = 0
                break
        }
    }
</script>

<div class="flex flex-col w-2/5 md:w-1/2 min-h-132 justify-start bg-neutral text-start p-4 border-2 border-secondary rounded-lg shadow-md overflow-auto outline-none focus:shadow-secondary" 
    id="focus-area"
    role="textbox"
    tabindex="0"
    onkeydown={handleKeyDown}
>
    <div class="flex justify-center text-center m-2">
        <h1 class="border p-2 font-bold basis-1/4">Evan Robinson</h1>
        <h1 class="border p-2 basis-1/4"><span class="font-bold">s</span> skills</h1>
        <h1 class="border p-2 basis-1/4"><span class="font-bold">p</span> projects</h1>
        <h1 class="border p-2 basis-1/4"><span class="font-bold">t</span> typing</h1>
    </div>
    {#if pane === "skills"}
        <Skills skills={skills} selected={selected} />
    {:else if pane === "projects"}
        <Projects projects={projects} selected={selected} elementSelected={elementSelected} />
    {:else if pane === "typing"}
        <Typing data={data} selected={selected} />
    {/if}
    <div class="flex justify-center gap-4 mt-auto">
        <h3 class="font-semibold">↑/↓/←/→ <span class="font-medium opacity-70">navigate</span></h3>
        <h3 class="font-semibold">/ <span class="font-medium opacity-70">search</span></h3>
        <h3 class="font-semibold">enter <span class="font-medium opacity-70">select</span></h3>
        <h3 class="font-semibold">q <span class="font-medium opacity-70">unfocus</span></h3>
    </div>
</div>