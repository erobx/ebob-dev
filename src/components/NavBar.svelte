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
        <a class="btn btn-ghost text-success text-xl" href="/">Evan Robinson</a>
    </div>
    <div class="navbar-end">
        <!-- Smaller screens: Dropdown menu -->
        <div class="dropdown dropdown-end md:hidden">
            <div tabindex="0" role="button" class="btn btn-ghost m-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </div>
            <ul tabindex="0" role="menu" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#about" onclick={handleAnchorClick}>About</a></li>
                <li><a href="#projects" onclick={handleAnchorClick}>Projects</a></li>
                <li><a href="#experience" onclick={handleAnchorClick}>Experience</a></li>
                <li><a href="#contact" onclick={handleAnchorClick}>Contact</a></li>
            </ul>
        </div>
        <!-- Larger screens: Horizontal menu -->
        <div class="hidden md:flex">
            <div class="flex justify-evenly">
                <button class="btn btn-ghost"><a href="#about" onclick={handleAnchorClick}>About</a></button>
                <button class="btn btn-ghost"><a href="#projects" onclick={handleAnchorClick}>Projects</a></button>
                <button class="btn btn-ghost"><a href="#experience" onclick={handleAnchorClick}>Experience</a></button>
                <button class="btn btn-ghost"><a href="#contact" onclick={handleAnchorClick}>Contact</a></button>
            </div>
        </div>

        <div class="hidden lg:block">
            <ThemeController />
        </div>
    </div>
</div>
