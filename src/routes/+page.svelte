<script lang="ts">
    import Profile from "../components/Profile.svelte";
    import Experience from "../components/Experience.svelte";
    import Skills from "../components/Skills.svelte";

</script>


<div class="lg:flex justify-around gap-16 overflow-hidden">
    <div class="shrink flex-col gap-4">
        <Profile />
        <Skills />
    </div>
    <div class="flex-col">
        <Experience />
    </div>
</div>

<style>
    
</style>