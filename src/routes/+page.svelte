<script lang="ts">
    import type { PageServerData } from "./$types";
    import PersonalBests from "../components/PersonalBests.svelte";
    import Profile from "../components/Profile.svelte";
    import Experience from "../components/Experience.svelte";
    import { AppBar } from "@skeletonlabs/skeleton";
    import Icon from "@iconify/svelte";

    export let data: PageServerData;
</script>

<AppBar background="bg-dark-blue">
    <svelte:fragment slot="lead"><a href="/"><Icon icon="material-symbols:home" color="#23a9d5" width={36}/></a></svelte:fragment>
    <svelte:fragment slot="default"><h3 class="text-center">Evan Robinson</h3></svelte:fragment>
    <svelte:fragment slot="trail"><Icon icon="material-symbols:menu" color="#23a9d5" width={36}/></svelte:fragment>
</AppBar>

<div class="flex justify-evenly gap-2">
    <div class="shrink min-w-0">
        <Profile/>
        <PersonalBests data={data}/>
    </div>
    <div class="shrink">
        <Experience />
    </div>
</div>

<style>
    
</style>