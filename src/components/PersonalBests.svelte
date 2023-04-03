<script lang="ts">
    export let data;
    const time15 = data['data']['15'];
    const time30 = data['data']['30'];
    const time60 = data['data']['60'];
</script>

<h3 class="header">Monkeytype Personal Bests</h3>
<div class="pbsTime">
    <div class="group">
        <div class="quick">
            <div class="test">15 sec</div>
            <div class="wpm">{time15[0].wpm} wpm</div>
            <div class="acc">{time15[0].acc}% acc</div>
        </div>
    </div>
    <div class="group">
        <div class="quick">
            <div class="test">30 sec</div>
            <div class="wpm">{time30[0].wpm} wpm</div>
            <div class="acc">{time30[0].acc}% acc</div>
        </div>
    </div>
    <div class="group">
        <div class="quick">
            <div class="test">60 sec</div>
            <div class="wpm">{time60[0].wpm} wpm</div>
            <div class="acc">{time60[0].acc}% acc</div>
        </div>
    </div>
</div>

<style>
    .header {
        text-align: center;
        padding-bottom: .2em;
    }
    .pbsTime {
        display: flex;
        align-content: center;
        justify-content: center;
    }
    .group {
        text-align: center;
        flex-grow: .1;
    }
    .test {
        font-weight: bold;
        font-size: 1.5rem;
    }

</style>