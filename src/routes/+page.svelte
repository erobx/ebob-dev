<script lang="ts">
    import PersonalBests from "../components/PersonalBests.svelte";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<h1>Welcome to my site!</h1>

<PersonalBests data={data}/>

<style>
    h1 {
        text-align: center;
    }
</style>