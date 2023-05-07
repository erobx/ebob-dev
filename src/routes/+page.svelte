<script lang="ts">
    import Profile from "../components/Profile.svelte";
    import Experience from "../components/Experience.svelte";
    import Skills from "../components/Skills.svelte";

</script>


<div class="md:flex justify-evenly gap-2 overflow-hidden">
    <div class="shrink min-w-0">
        <Profile />
        <Skills />
    </div>
    <div class="shrink">
        <Experience />
    </div>
</div>

<style>
    
</style>