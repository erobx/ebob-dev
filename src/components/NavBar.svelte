<script>
    import { AppBar } from "@skeletonlabs/skeleton";
    import { onMount } from "svelte";

    let dropdownOpen = false;

    function toggleDropdown() {
        const dropdown = document.getElementById("dropdown");
        dropdownOpen = !dropdownOpen;
        dropdown.classList.toggle("hidden", !dropdownOpen);
    }

    function closeDropdown() {
        dropdownOpen = false;
        const dropdown = document.getElementById("dropdown");
        dropdown.classList.add("hidden");
    }

    onMount(() => {
        const button = document.querySelector("button[aria-controls='dropdown']");
        button.addEventListener("click", toggleDropdown);
    });
</script>

<AppBar background="bg-dark-blue">
    {#snippet lead()}
    
        <a class="flex flex-row gap-3 items-center hover:scale-105 transition-all" href="/">
            <img class="w-9 h-9" src="images/ebob-logo.png">
            <h2 class="text-[#23a9d5] text-lg">Evan Robinson</h2>
        </a>

    {/snippet}

{#snippet trail()}
    
        <!-- Mobile dropdown menu -->
        <div class="md:hidden relative">
            <button
                class="btn btn-md flex items-center hover:scale-105 text-[#9E9F90]"
                aria-expanded="false"
                aria-controls="dropdown"
            >
                <svg class="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
            </button>

            <!-- Dropdown items -->
            <div id="dropdown" class="absolute right-0 mt-2 w-48 bg-dark-blue text-white rounded-lg shadow-lg hidden">
                <a href="/" class="block px-4 py-2 text-sm text-[#9E9F90]" onclick={closeDropdown}>Home</a>
                <a href="/about" class="block px-4 py-2 text-sm text-[#9E9F90]" onclick={closeDropdown}>About</a>
                <a href="/projects" class="block px-4 py-2 text-sm text-[#9E9F90]" onclick={closeDropdown}>Projects</a>
            </div>
        </div>

        <!-- Standard nav for larger screens -->
        <nav class="hidden md:flex flex-row gap-4">
            <a href="/about" class="btn btn-md hover:scale-105 text-[#9E9F90]">About</a>
            <a href="/projects" class="btn btn-md hover:scale-105 text-[#9E9F90]">Projects</a>
        </nav>

    {/snippet}</AppBar>
