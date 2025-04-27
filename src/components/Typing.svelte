<script lang="ts">
    let { data, selected } = $props()
    const time15 = data?.["data"]?.["15"]?.[0] || null
    const time30 = data?.["data"]?.["30"]?.[0] || null
    const time60 = data?.["data"]?.["60"]?.[0] || null



    let words: string[] = ["do", "hello", "okay", "well"]
</script>

<div class="flex flex-col items-center">
    <h1 class="font-bold text-lg">Test your speed</h1>
    <div class="flex mt-35 gap-2">
        <h1>🚧Under contstruction🚧</h1>
    </div>
</div>