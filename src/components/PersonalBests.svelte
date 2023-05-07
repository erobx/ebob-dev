<script lang="ts">
    export let data;
    const time15 = data['data']['15'];
    const time30 = data['data']['30'];
    const time60 = data['data']['60'];
</script>

<div class="flex justify-center text-center content-center mt-6">
    <div class="card bg-dark-blue p-4 rounded-lg">
        <a href="https://monkeytype.com" class="unstyled hover:underline"><h3 class="header text-[#9E9F90]">Monkeytype Personal Bests</h3></a>
        <div class="flex justify-evenly items-center gap-2">
            <div>
                <h3 class="font-bold">15 sec</h3>
                <h5>{time15[0].wpm} wpm</h5>
                <h5>{time15[0].acc}% acc</h5>
            </div>
            <div>
                <h3 class="font-bold">30 sec</h3>
                <h5>{time30[0].wpm} wpm</h5>
                <h5>{time30[0].acc}% acc</h5>

            </div>
            <div>
                <h3 class="font-bold">60 sec</h3>
                <h5>{time60[0].wpm} wpm</h5>
                <h5>{time60[0].acc}% acc</h5>
            </div>
        </div>
    </div>
</div>