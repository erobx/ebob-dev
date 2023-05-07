<script lang="ts">
    import About from "../../components/About.svelte";
    import PersonalBests from "../../components/PersonalBests.svelte";
	import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<div class="md:flex justify-evenly overflow-hidden">
    <div class="shrink flex-col">
        <About />
        <PersonalBests data={data} />
    </div>
</div>