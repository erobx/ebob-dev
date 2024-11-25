<script lang="ts">
    import About from "../../components/About.svelte";
    import PersonalBests from "../../components/PersonalBests.svelte";
    import TypingTitle from "../../components/TypingTitle.svelte";
    import type { PageServerData } from "./$types";

    interface Props {
        data: PageServerData;
    }

    let { data }: Props = $props();
</script>

<div class="lg:flex justify-around overflow-hidden">
    <div class="flex-col">
        <About />
    </div>
    <div class="flex-col">
        <TypingTitle />
        <PersonalBests {data} />
    </div>
</div>
