<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<div class="flex justify-center text-center content-center px-2">
    <div
        class="card p-16 bg-dark-blue mt-4 rounded-lg w-full space-y-4 shadow-lg"
    >
        <img
            class="rounded-full object-cover w-3/4 mx-auto aspect-square"
            src="images/profile-pic.jpg"
            alt="Creator smiling, looking at camera."
        />
        <h2 class="card-header wrap-break select-text text-3xl">Evan Robinson</h2>
        <h3 class="text-[#9E9F90] text-xl">Software Engineer</h3>
        <div class="flex justify-center gap-2">
            <a href="https://github.com/erobx"
                ><Icon
                    icon="mdi:github"
                    width={40}
                    class="mx-auto"
                    color="#23a9d5"
                /></a
            >
            <a href="https://www.linkedin.com/in/erob-inson/"
                ><Icon
                    icon="mdi:linkedin"
                    class="mx-auto"
                    width={40}
                    color="#23a9d5"
                /></a
            >
        </div>
    </div>
</div>
