<script>
    import { AppBar } from "@skeletonlabs/skeleton";
    import Icon from "@iconify/svelte";
</script>

<AppBar background="bg-dark-blue">
    <svelte:fragment slot="lead"><a href="/"><Icon icon="material-symbols:home" color="#23a9d5" width={36}/></svelte:fragment>
    <svelte:fragment slot="default"><a href="/about" class="hover:underline"><h3 class="text-center">Evan Robinson</h3></svelte:fragment>
    <svelte:fragment slot="trail"><Icon icon="material-symbols:menu" color="#23a9d5" width={36}/></svelte:fragment>
</AppBar>