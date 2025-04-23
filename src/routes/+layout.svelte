<script lang="ts">
    import "../style.css"
    import "../components/NavBar.svelte"
    import NavBar from "../components/NavBar.svelte";
    let { children } = $props();
</script>

<NavBar />
{@render children()}