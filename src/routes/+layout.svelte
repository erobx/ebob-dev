<script lang="ts">
    import "../app.css";
    import "../app.postcss";
    import NavBar from "../components/NavBar.svelte";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<NavBar></NavBar>
{@render children?.()}
