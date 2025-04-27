<script lang="ts">
    let { isSearching = $bindable() } = $props()
    let letters: string = $state(" ")
    let matching: string[] = $state([])

    $effect(() => {
        let fa = document.getElementById("search")
        if (fa) {
            fa.focus()
        }
    })

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            isSearching = false
            document.getElementById("focus-area")?.focus()
            return
        }
        if (event.key === "Backspace") {
            letters = letters.slice(0, letters.length-1)
            if (letters.length === 0) {
                isSearching = false
                document.getElementById("focus-area")?.focus()
            }
            return
        }
        if (event.key === " ") {
            letters += " "
            return
        }
        if (event.key === "Enter") {
            letters = " "
            isSearching = false
            document.getElementById("focus-area")?.focus()
            return
        }
        if (event.key.length === 1) {
            const charToAdd = event.shiftKey
                ? event.key.toUpperCase()
                : event.key.toLowerCase()
            letters += charToAdd
        }

        // pattern match
    }
</script>

<div class="mt-auto bg-base-300 rounded-lg p-1">
    <h1 class="font-semibold">Search</h1>
    <div 
        id="search" 
        class="outline-none border-2"
        role="textbox"
        tabindex="0"
        onkeydown={handleKeyDown}
    >
        <div id="output" class="flex p-1">
            {#each letters as l}
                {#if l === " "}
                    <p>&nbsp;</p>
                {:else}
                    <p>{l}</p>
                {/if}
            {/each}
            <div class="animate-pulse border-r-4"></div>
        </div>
    </div>
</div>