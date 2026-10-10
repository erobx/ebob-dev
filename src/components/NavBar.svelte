<script lang="ts">
    import ThemeController from "./ThemeController.svelte";

    function handleAnchorClick(event: any) {
        event.preventDefault()
        const link = event.currentTarget
        const anchorId = new URL(link.href).hash.replace('#', '')
        const anchor = document.getElementById(anchorId)
        // Keep the section clear of the navbar while it's sticky (mobile)
        const nav = link.closest('.navbar') as HTMLElement | null
        const navOffset = nav && getComputedStyle(nav).position === 'sticky' ? nav.offsetHeight : 0
        window.scrollTo({
            top: (anchor?.offsetTop ?? 0) - navOffset,
            behavior: 'smooth',
        })
    }
</script>

<div class="navbar bg-base-300 shadow-sm sticky top-0 z-50 md:static">
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
                <li><a href="#portfolio" onclick={handleAnchorClick}>Portfolio</a></li>
                <li><a href="#contact" onclick={handleAnchorClick}>Contact</a></li>
            </ul>
        </div>
        <!-- Larger screens: Horizontal menu -->
        <div class="hidden md:flex">
            <div class="flex justify-evenly">
                <button class="btn btn-ghost"><a href="#portfolio" onclick={handleAnchorClick}>Portfolio</a></button>
                <button class="btn btn-ghost"><a href="#contact" onclick={handleAnchorClick}>Contact</a></button>
            </div>
        </div>

        <div class="hidden lg:block">
            <ThemeController />
        </div>
    </div>
</div>
