<script lang="ts">
    import About from "../../components/About.svelte";
    import PersonalBests from "../../components/PersonalBests.svelte";
    import TypingTitle from "../../components/TypingTitle.svelte";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<div class="lg:flex justify-around overflow-hidden">
    <div class="flex-col">
        <About />
        <TypingTitle />
        <PersonalBests {data} />
    </div>
</div>
