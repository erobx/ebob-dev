<script lang="ts">
    export let data;
    const time15 = data['data']['15'];
    const time30 = data['data']['30'];
    const time60 = data['data']['60'];
</script>

<div class="card-container">
    <div class="card">
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
    </div>
</div>

<style>
    .card-container {
        display: flex;
        justify-content: center;
    }
    .card {
        margin-top: 2em;
        background: #151a21;
        border-radius: 0.5rem;
        width: 30%;
        padding: 1em;
    }
    .header {
        text-align: center;
        padding-bottom: .2em;
    }
    .pbsTime {
        display: flex;
        align-content: center;
        justify-content: space-evenly;
        
    }
    .group {
        text-align: center;
        flex-grow: .1;
    }
    .test {
        font-weight: bold;
        font-size: 1.5rem;
    }
    .test, .wpm {
        margin-bottom: .2em;
    }

</style>