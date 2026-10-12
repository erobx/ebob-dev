<script lang="ts">
    import type { Project } from "$lib/data";
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";

    let { projects }: { projects: Project[] } = $props()
    let active: number = $state(0)
    let track: HTMLElement | null = $state(null)

    // scroll distance (in svh) each project stays on screen
    const STEP = 60

    // unique id so the desktop and mobile backdrops don't share one svg pattern
    const uid = $props.id()

    // floating shapes behind the case studies; depth sets how far each one
    // moves when the active project changes
    const shapes = [
        { kind: "ring", color: "primary", top: "12%", left: "6%", size: "72px", depth: 1.2, dur: "14s" },
        { kind: "square", color: "accent", top: "70%", left: "10%", size: "44px", depth: -0.8, dur: "18s" },
        { kind: "plus", color: "success", top: "22%", left: "46%", size: "36px", depth: 0.6, dur: "16s" },
        { kind: "triangle", color: "warning", top: "80%", left: "52%", size: "56px", depth: -1.4, dur: "20s" },
        { kind: "dot", color: "primary", top: "8%", left: "82%", size: "28px", depth: 1, dur: "12s" },
        { kind: "ring", color: "accent", top: "58%", left: "88%", size: "96px", depth: -1, dur: "22s" },
        { kind: "plus", color: "primary", top: "88%", left: "30%", size: "28px", depth: 1.6, dur: "15s" },
        { kind: "square", color: "success", top: "38%", left: "94%", size: "30px", depth: 0.9, dur: "17s" },
    ]

    function scrollRange() {
        if (!track) return 0
        return track.offsetHeight - window.innerHeight
    }

    function update() {
        if (!track) return
        const range = scrollRange()
        const progress = range > 0 ? -track.getBoundingClientRect().top / range : 0
        const i = Math.floor(progress * projects.length)
        active = Math.min(projects.length - 1, Math.max(0, i))
    }

    function jumpTo(i: number) {
        if (!track) return
        const top = track.getBoundingClientRect().top + window.scrollY
        const range = scrollRange()
        window.scrollTo({
            top: top + ((i + 0.5) / projects.length) * range,
            behavior: "smooth",
        })
    }

    onMount(() => {
        update()
        window.addEventListener("scroll", update, { passive: true })
        window.addEventListener("resize", update)
        return () => {
            window.removeEventListener("scroll", update)
            window.removeEventListener("resize", update)
        }
    })
</script>

{#snippet details(proj: Project)}
    <span class="text-sm font-semibold uppercase tracking-widest text-primary">
        {proj.kind}{proj.org ? ` · ${proj.org}` : ""}
    </span>
    <h2 class="text-3xl lg:text-4xl font-bold tracking-tight">{proj.name}</h2>
    <p class="text-lg leading-relaxed text-base-content/80">{proj.description}</p>
    {#if proj.outcomes}
        <ul class="flex flex-col gap-2">
            {#each proj.outcomes as outcome}
                <li class="flex items-start gap-2">
                    <Icon icon="mdi:check-circle" class="text-success shrink-0 mt-1" width={18} />
                    <span>{outcome}</span>
                </li>
            {/each}
        </ul>
    {/if}
    <div class="flex flex-wrap gap-2">
        {#each proj.badges as badge}
            <span class="badge badge-outline">{badge.name}</span>
        {/each}
    </div>
    {#if proj.link || proj.repo}
        <div class="flex gap-3 mt-2">
            {#if proj.link}
                <a class="btn btn-outline btn-accent btn-sm" href={proj.link} target="_blank">Live Link</a>
            {/if}
            {#if proj.repo}
                <a class="btn btn-outline btn-primary btn-sm" href={proj.repo} target="_blank">Repo</a>
            {/if}
        </div>
    {/if}
{/snippet}

{#snippet visual(proj: Project)}
    {#if proj.img}
        <img class="w-full h-full object-cover object-top" src={proj.img} alt={proj.name} loading="lazy" />
    {:else}
        <div class="stat-card w-full h-full flex flex-col justify-center items-center text-center gap-3 p-8">
            {#if proj.stat}
                <span class="text-6xl lg:text-8xl font-bold tracking-tight text-primary">{proj.stat.value}</span>
                <span class="text-lg lg:text-xl text-base-content/80">{proj.stat.label}</span>
            {/if}
            {#if proj.org}
                <span class="mt-4 text-sm font-semibold uppercase tracking-widest text-base-content/60">
                    {proj.org}{proj.role ? ` · ${proj.role}` : ""}
                </span>
            {/if}
        </div>
    {/if}
{/snippet}

{#snippet backdrop()}
    <div class="backdrop" aria-hidden="true" style:--shift={active}>
        <svg class="grid-lines" width="100%" height="100%">
            <defs>
                <pattern id="grid-{uid}" width="56" height="56" patternUnits="userSpaceOnUse">
                    <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" stroke-width="1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-{uid})" />
        </svg>
        {#each shapes as shape}
            <div
                class="shape"
                style:top={shape.top}
                style:left={shape.left}
                style:--size={shape.size}
                style:--depth={shape.depth}
                style:--dur={shape.dur}
                style:color={`var(--color-${shape.color})`}
            >
                <svg viewBox="0 0 40 40" width="100%" height="100%">
                    {#if shape.kind === "ring"}
                        <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" stroke-width="4" />
                    {:else if shape.kind === "square"}
                        <rect x="8" y="8" width="24" height="24" rx="3" fill="currentColor" />
                    {:else if shape.kind === "plus"}
                        <path d="M20 6v28M6 20h28" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
                    {:else if shape.kind === "triangle"}
                        <path d="M20 6 L35 32 L5 32 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" />
                    {:else}
                        <circle cx="20" cy="20" r="10" fill="currentColor" />
                    {/if}
                </svg>
            </div>
        {/each}
    </div>
{/snippet}

<!-- desktop: pinned stage, scroll swaps the project -->
<div
    bind:this={track}
    class="hidden lg:block w-full"
    style:height={`calc(100svh + ${projects.length * STEP}svh)`}
>
    <div class="sticky top-0 h-svh overflow-hidden">
    {@render backdrop()}
    <div class="relative h-full flex flex-col justify-center gap-10 px-8 max-w-7xl mx-auto">
        <div class="flex items-end justify-between">
            <h1 class="text-3xl font-bold tracking-wider">Case Studies</h1>
            <span class="font-mono text-secondary">
                {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
        </div>

        <div class="stage text-start">
            {#each projects as proj, i}
                <article
                    class="layer grid grid-cols-5 gap-12 items-center"
                    class:is-active={i === active}
                    inert={i !== active}
                >
                    <div class="col-span-2 flex flex-col gap-5">
                        {@render details(proj)}
                    </div>
                    <div class="col-span-3 aspect-video overflow-hidden rounded-box border-2 border-secondary shadow-xl bg-base-200">
                        {@render visual(proj)}
                    </div>
                </article>
            {/each}
        </div>

        <div class="flex justify-center gap-2">
            {#each projects as proj, i}
                <button
                    class="h-2 rounded-full transition-all duration-300 cursor-pointer"
                    class:w-8={i === active}
                    class:bg-secondary={i === active}
                    class:w-2={i !== active}
                    class:bg-base-content={i !== active}
                    class:opacity-30={i !== active}
                    aria-label={`Show ${proj.name}`}
                    onclick={() => jumpTo(i)}
                ></button>
            {/each}
        </div>
    </div>
    </div>
</div>

<!-- mobile: simple stacked list -->
<div class="lg:hidden relative overflow-hidden w-full">
{@render backdrop()}
<div class="relative flex flex-col gap-14 w-full px-4 py-12 text-start">
    <h1 class="text-3xl font-bold tracking-wider text-center">Case Studies</h1>
    {#each projects as proj}
        <article class="flex flex-col gap-4">
            <div class="w-full aspect-video overflow-hidden rounded-box border border-base-content/10 bg-base-200">
                {@render visual(proj)}
            </div>
            {@render details(proj)}
        </article>
    {/each}
</div>
</div>

<style>
    /* stack every project in one grid cell so the stage keeps the tallest height */
    .stage {
        display: grid;
    }

    .layer {
        grid-area: 1 / 1;
        opacity: 0;
        transform: translateY(16px);
        transition: opacity 400ms ease, transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .layer.is-active {
        opacity: 1;
        transform: none;
    }

    .stat-card {
        background: color-mix(in oklch, var(--color-primary) 10%, var(--color-base-200));
    }

    .backdrop {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
        background: color-mix(in oklch, var(--color-primary) 6%, var(--color-base-100));
    }

    .grid-lines {
        position: absolute;
        inset: 0;
        color: color-mix(in oklch, var(--color-base-content) 7%, transparent);
    }

    .shape {
        position: absolute;
        width: var(--size);
        height: var(--size);
        opacity: 0.35;
        translate: calc(var(--shift) * var(--depth) * 3vw) calc(var(--shift) * var(--depth) * 2vh);
        transition: translate 1000ms cubic-bezier(0.22, 1, 0.36, 1);
        animation: float var(--dur) ease-in-out infinite alternate;
    }

    @keyframes float {
        from {
            transform: translateY(0) rotate(0deg);
        }
        to {
            transform: translateY(-24px) rotate(90deg);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .layer,
        .shape {
            transition: none;
            animation: none;
        }
    }
</style>
