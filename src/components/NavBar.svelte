<script>
    import { AppBar } from "@skeletonlabs/skeleton";
</script>

<AppBar background="bg-dark-blue">
    <svelte:fragment slot="lead"><a href="/"><h4 class="text-[#23a9d5]">Ebob.dev</h4></svelte:fragment>
    <svelte:fragment slot="trail"><a href="/about" class="hover:underline text-[#9E9F90]">About</svelte:fragment>
</AppBar>