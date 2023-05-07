<script lang="ts">
    import type { PageServerData } from "./$types";
    import PersonalBests from "../components/PersonalBests.svelte";
    import Profile from "../components/Profile.svelte";
    import Experience from "../components/Experience.svelte";

    export let data: PageServerData;
</script>


<div class="md:flex justify-evenly gap-2 overflow-hidden">
    <div class="shrink min-w-0">
        <Profile />
    </div>
    <div class="shrink">
        <Experience />
    </div>
</div>

<style>
    
</style>