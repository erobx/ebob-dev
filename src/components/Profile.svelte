<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<div class="flex justify-center text-center content-center px-2">
    <div
        class="card p-16 bg-dark-blue mt-4 rounded-lg w-full space-y-2 shadow-lg"
    >
        <img
            class="rounded-full object-cover h-52 mx-auto aspect-square"
            src="images/retiro.jpg"
            alt="Creator sitting down looking to his left."
        />
        <h2 class="card-header wrap-break select-text">Evan Robinson</h2>
        <h3 class="text-[#9E9F90]">Software & Cybersecurity Engineer</h3>
        <div class="flex justify-center gap-1">
            <a href="https://github.com/erobx"
                ><Icon
                    icon="mdi:github"
                    width={36}
                    class="mx-auto"
                    color="#23a9d5"
                /></a
            >
            <a href="https://www.linkedin.com/in/erob-inson/"
                ><Icon
                    icon="mdi:linkedin"
                    class="mx-auto"
                    width={36}
                    color="#23a9d5"
                /></a
            >
        </div>
    </div>
</div>
