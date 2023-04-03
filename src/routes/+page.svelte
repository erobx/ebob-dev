<script lang="ts">
    import type { PageServerData } from "./$types";
    import PersonalBests from "../components/PersonalBests.svelte";
    import Profile from "../components/Profile.svelte";

    export let data: PageServerData;
</script>

<Profile />
<PersonalBests data={data}/>

<style>
    
</style>