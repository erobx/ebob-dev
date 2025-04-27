<script lang="ts">
    import ThemeController from "./ThemeController.svelte";

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
        <div class="lg:hidden ml-2">
            <ThemeController />
        </div>
        <a class="btn btn-ghost text-xl" href="/">Evan Robinson</a>
    </div>
    <div class="navbar-end">
        <!-- Smaller screens: Dropdown menu -->
        <div class="dropdown dropdown-end lg:hidden">
            <label tabindex="0" class="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#about" on:click={handleAnchorClick}>About</a></li>
                <li><a href="#projects" on:click={handleAnchorClick}>Projects</a></li>
                <li><a href="#experience" on:click={handleAnchorClick}>Experience</a></li>
                <li><a href="#contact" on:click={handleAnchorClick}>Contact</a></li>
            </ul>
        </div>
        <!-- Larger screens: Horizontal menu -->
        <div class="hidden md:flex">
            <div class="flex justify-evenly">
                <button class="btn btn-ghost"><a href="#about" on:click={handleAnchorClick}>About</a></button>
                <button class="btn btn-ghost"><a href="#projects" on:click={handleAnchorClick}>Projects</a></button>
                <button class="btn btn-ghost"><a href="#experience" on:click={handleAnchorClick}>Experience</a></button>
                <button class="btn btn-ghost"><a href="#contact" on:click={handleAnchorClick}>Contact</a></button>
            </div>
        </div>

        <div class="hidden lg:block">
            <ThemeController />
        </div>
    </div>
</div>
