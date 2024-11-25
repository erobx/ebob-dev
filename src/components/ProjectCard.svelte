<script lang="ts">
    interface Props {
        title: string;
        link: string;
        info: string;
        bw: string[];
    }

    let {
        title,
        link,
        info,
        bw
    }: Props = $props();
    let refLink = "https://" + link;
</script>

<div class="flex justify-center mt-4 w-full lg:max-w-[40vw]">
    <div class="card p-4 bg-dark-blue rounded-lg w-full shadow-lg space-y-1">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h3 class="text-lg font-semibold">{title}</h3>
            <h2 class="mt-2 sm:mt-0">
                <a class="hover:underline text-[#9E9F90]" href={refLink}>
                    {link}
                </a>
            </h2>
        </div>
        <p>{info}</p>
        <div class="text-[#23a9d5]">Built with: {bw}</div>
    </div>
</div>

