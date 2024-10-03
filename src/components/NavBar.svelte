<script>
    import { AppBar } from "@skeletonlabs/skeleton";
</script>

<AppBar background="bg-dark-blue">
    <svelte:fragment slot="lead"
        ><a href="/"><h2 class="text-[#23a9d5]">Ebob.dev</h2></a
        ></svelte:fragment
    >
    <svelte:fragment slot="trail">
        <a href="/projects" class="hover:underline text-[#9E9F90]">Projects</a>
        <a href="/about" class="hover:underline text-[#9E9F90]">About</a>
    </svelte:fragment>
</AppBar>
