<script lang="ts">
    import Profile from "../components/Profile.svelte";
    import Experience from "../components/Experience.svelte";
    import Skills from "../components/Skills.svelte";
</script>

<div class="container sm:p-6 mx-auto p-2 sapce-y-8">
    <div class="lg:flex xs:flex-col gap-8 justify-around items-start">
        <div class="flex-col w-full lg:w-1/2 gap-8">
            <Profile />
            <Skills />
        </div>
        <div class="flex-col w-full lg:w-1/2 mt-4 lg:mt-8">
            <Experience />
        </div>
    </div>
</div>
