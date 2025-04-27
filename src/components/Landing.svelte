<script lang="ts">
    import { fade } from "svelte/transition";

    let { isEntering = $bindable() } = $props()

    let motions: string[] = $state([])
    let openBracket: string = "{"
    let closingBracket: string = "}"
    let openParen: string = "("
    let closingParen: string = ")"
    let initMsg: string = "Entering ebob.dev..."
    let welcome: string = "Welcome!"
    let index: number = 0

    $effect(() => {
        let fa = document.getElementById("f")
        if (!fa) return

        fa.style.backgroundColor = "var(--color-secondary)"
        fa.style.animation = "var(--animate-pulse)"

        setTimeout(() => {
            if (!fa) return
            motions = [...motions, "j"]
            fa.style.backgroundColor = ""
            fa.style.animation = ""   

            fa = document.getElementById("fmt")
            if (!fa) return

            fa.style.backgroundColor = "var(--color-secondary)"
            fa.style.animation = "var(--animate-pulse)"
        }, 500)

        setTimeout(() => {
            motions = [...motions, "c"]
        }, 700)

        setTimeout(() => {
            motions = [...motions, "i"]
        }, 900)

        setTimeout(() => {
            if (!fa) return
            fa.style.backgroundColor = ""
            fa.style.animation = ""

            motions = [...motions, "\""]
            fa = document.getElementById("quotes")
            if (!fa) return
            fa.innerText = ""

            setInterval(typeChar, 100, fa)
        }, 1000)


        setTimeout(() => {
            isEntering = false
        }, 2000)
    })

    function typeChar(fa: HTMLElement) {
        if (index < welcome.length) {
            fa.innerText += welcome[index]
            motions = [...motions, welcome[index]]
            index++
        } else {
            return
        }
    }
</script>

<div transition:fade class="flex justify-center items-center h-screen bg-base-100">
    <div class="flex flex-col font-semibold text-lg">
        <h1><span id="f" class="text-primary">f</span><span class="text-primary">unc</span> <span class="text-red-400">main</span><span class="text-yellow-300">{openParen}{closingParen} {openBracket}</span></h1>
        <h1 class="ml-4">
            <span id="fmt">f</span>mt.<span class="text-red-400">Println</span><span class="text-purple-400">{openParen}</span>"<span id="quotes" class="text-info">{initMsg}</span>"<span class="text-purple-400">{closingParen}</span>
        </h1>
        <h1><span class="text-yellow-300">{closingBracket}</span></h1>

        <div class="flex justify-start mt-2 rounded-lg bg-base-200 w-fit p-2">
            {#each motions as m, i}
                {#if i === motions.length - 1}
                    <p in:fade>{m}</p>
                {:else}
                    <p in:fade>{m},&nbsp;</p>
                {/if}
            {/each}
        </div>
    </div>
</div>