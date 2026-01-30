<script lang="ts">
    import "../style.css"
    import "../components/NavBar.svelte"
    import NavBar from "../components/NavBar.svelte";
    //import Landing from "../components/Landing.svelte";
    let { children } = $props();
    //let isEntering: boolean = $state(true)
</script>

<!-- 
{#if isEntering}
    <Landing bind:isEntering={isEntering} />
{:else}
-->

<NavBar />
{@render children()}
