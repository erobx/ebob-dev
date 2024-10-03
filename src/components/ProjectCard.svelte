<script lang="ts">
    export let title: string;
    export let link: string;
    export let info: string;
    export let tech: string[];
    let refLink = "https://" + link;
</script>

<div class="flex justify-center mt-4 w-full lg:max-w-[40vw]">
    <div class="card p-4 bg-dark-blue rounded-lg w-full shadow-lg space-y-1">
        <div class="flex justify-between">
            <h3>{title}</h3>
            <h2>
                <a class="hover:underline text-[#9E9F90]" href={refLink}
                    >{link}</a
                >
            </h2>
        </div>
        <p>{info}</p>
        <div class="text-[#23a9d5]">Tech: {tech}</div>
    </div>
</div>
