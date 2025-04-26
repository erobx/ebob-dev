<script lang="ts">
    function handleAnchorClick(event: any) {
        event.preventDefault()
        const link = event.currentTarget
        const anchorId = new URL(link.href).hash.replace('#', '')
        const anchor = document.getElementById(anchorId)
        window.scrollTo({
            top: anchor?.offsetTop,
            behavior: 'smooth',
        })
    }
</script>

<div class="navbar bg-base-300 shadow-sm">
    <div class="navbar-start">
        <a class="btn btn-ghost text-xl" href="/">Evan Robinson</a>
    </div>
    <div class="navbar-end mr-2">
        <div class="flex gap-10 justify-evenly">
            <button class="btn btn-square btn-ghost"><a href="#about" on:click={handleAnchorClick}>About</a></button>
            <button class="btn btn-square btn-ghost"><a href="#experience" on:click={handleAnchorClick}>Experience</a></button>
            <button class="btn btn-square btn-ghost"><a href="#projects" on:click={handleAnchorClick}>Projects</a></button>
            <button class="btn btn-square btn-ghost"><a href="#contact" on:click={handleAnchorClick}>Contact</a></button>
        </div>
    </div>
</div>