<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<div class="flex justify-center text-center content-center px-2">
    <div
        class="card p-4 bg-dark-blue mt-4 rounded-lg space-y-1 shadow-md"
    >
        <img
            class="rounded-full object-cover w-1/2 mx-auto mt-1 aspect-square"
            src="images/profile-pic.jpg"
            alt="Creator smiling, looking at camera."
        />
        <h2 class="card-header wrap-break select-text text-xl">Evan Robinson</h2>
        <h3 class="text-[#9E9F90] text-lg">Software Engineer</h3>
        <div class="flex justify-center gap-1">
            <a href="https://github.com/erobx" target="_blank"
                ><Icon
                    icon="mdi:github"
                    width={40}
                    class="mx-auto"
                    color="#23a9d5"
                /></a
            >
            <a href="https://www.linkedin.com/in/erob-inson/" target="_blank"
                ><Icon
                    icon="mdi:linkedin"
                    class="mx-auto"
                    width={40}
                    color="#23a9d5"
                /></a
            >
            <a href="https://www.ebob.dev/resume.pdf" target="_blank"
                ><Icon
                    icon="mdi:file-account"
                    class="mx-auto"
                    width={40}
                    color="#23a9d5"
                /></a
            >
        </div>
    </div>
</div>
