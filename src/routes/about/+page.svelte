<script lang="ts">
    import About from "../../components/About.svelte";
    import PersonalBests from "../../components/PersonalBests.svelte";
	import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<About />
<PersonalBests data={data} />