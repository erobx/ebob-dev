<script lang="ts">
    let { data } = $props();
    const time15 = data?.["data"]?.["15"]?.[0] || null;
    const time30 = data?.["data"]?.["30"]?.[0] || null;
    const time60 = data?.["data"]?.["60"]?.[0] || null;
</script>

<div
    class="lg:flex justify-center text-center content-center px-2 lg:max-w-[60vw]"
>
    <div class="card bg-dark-blue p-8 mt-4 rounded-lg w-full shadow-lg">
        <div class="lg:flex justify-evenly items-center gap-2 overflow-hidden">
            <a href="https://monkeytype.com" class="unstyled hover:underline" target="_blank"
                ><h3 class="header text-[#9E9F90]">
                    Monkeytype Personal Bests:
                </h3></a
            >
            <div>
                <h3 class="font-bold">15 sec</h3>
                {#if time15}
                    <h5>{time15.wpm} wpm</h5>
                    <h5>{time15.acc}% acc</h5>
                {:else}
                    <h5>Data couldn't be found.</h5>
                {/if}
            </div>    
            <div>
                <h3 class="font-bold">30 sec</h3>
                {#if time30}
                    <h5>{time30.wpm} wpm</h5>
                    <h5>{time30.acc}% acc</h5>
                {:else}
                    <h5>Data couldn't be found.</h5>
                {/if}
            </div>
            <div>
                <h3 class="font-bold">60 sec</h3>
                {#if time60}
                    <h5>{time60.wpm} wpm</h5>
                    <h5>{time60.acc}% acc</h5>
                {:else}
                    <h5>Data couldn't be found.</h5>
                {/if}
            </div>
        </div>
    </div>
</div>

