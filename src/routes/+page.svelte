<script lang="ts">
    import Profile from "../components/Profile.svelte";
    import Experience from "../components/Experience.svelte";
    import Skills from "../components/Skills.svelte";

</script>


<div class="container mx-auto p-2 sapce-y-8">
    <div class="lg:flex xs:flex-col gap-8 justify-around">
        <div class="flex-col gap-8">
            <Profile />
            <Skills />
        </div>
        <div class="flex-col">
            <Experience />
        </div>
    </div>
</div>

<style>
    
</style>