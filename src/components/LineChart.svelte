<script lang="ts">
    import type { Chart } from "$lib/data";

    let { chart }: { chart: Chart } = $props()
    let hovered: number | null = $state(null)

    // svg coordinate space; text stays undistorted because the viewBox scales uniformly
    const W = 600
    const H = 240
    const pad = { top: 28, right: 24, bottom: 32, left: 52 }
    const plotW = W - pad.left - pad.right
    const plotH = H - pad.top - pad.bottom

    const fmt = (v: number) => `${v.toFixed(2)}%`

    const values = $derived(chart.points.map((p) => p.value))
    const yMin = $derived(Math.floor(Math.min(...values) * 10) / 10 - 0.1)
    const yMax = $derived(Math.ceil(Math.max(...values) * 10) / 10 + 0.1)

    const x = (i: number) => pad.left + (i / (chart.points.length - 1)) * plotW
    const y = (v: number) => pad.top + (1 - (v - yMin) / (yMax - yMin)) * plotH

    const line = $derived(chart.points.map((p, i) => `${i ? "L" : "M"}${x(i)},${y(p.value)}`).join(" "))
    const area = $derived(`${line} L${x(chart.points.length - 1)},${pad.top + plotH} L${x(0)},${pad.top + plotH} Z`)
    const peak = $derived(values.indexOf(Math.max(...values)))
    const band = $derived(plotW / (chart.points.length - 1))
</script>

<figure class="chart w-full h-full flex flex-col gap-1 p-5 lg:p-6 text-start">
    <figcaption>
        <span class="block text-sm font-semibold tracking-widest text-base-content/70">{chart.title}</span>
        <span class="block text-sm text-base-content/60">{chart.caption}</span>
    </figcaption>

    <svg viewBox={`0 0 ${W} ${H}`} class="w-full flex-1 min-h-0" role="img" aria-label={`${chart.title}. ${chart.caption}`}>
        <!-- recessive gridlines and y labels -->
        {#each chart.gridlines as g}
            <line x1={pad.left} x2={W - pad.right} y1={y(g)} y2={y(g)} class="grid" />
            <text x={pad.left - 10} y={y(g)} dy="0.35em" text-anchor="end" class="axis">{g.toFixed(1)}%</text>
        {/each}

        <path d={area} class="area" />
        <path d={line} class="line" />

        {#if hovered !== null}
            <line x1={x(hovered)} x2={x(hovered)} y1={pad.top} y2={pad.top + plotH} class="crosshair" />
        {/if}

        {#each chart.points as p, i}
            <circle cx={x(i)} cy={y(p.value)} r={hovered === i ? 6 : 4.5} class="dot" />
            <text x={x(i)} y={H - 8} text-anchor="middle" class="axis">{p.label}</text>
        {/each}

        <!-- direct label on the peak only; hover reveals the rest -->
        {#if hovered === null}
            <text x={x(peak)} y={y(values[peak]) - 12} text-anchor="middle" class="value">{fmt(values[peak])}</text>
        {/if}

        {#if hovered !== null}
            {@const p = chart.points[hovered]}
            {@const tx = Math.min(Math.max(x(hovered), pad.left + 48), W - pad.right - 48)}
            <g class="tooltip" transform={`translate(${tx}, ${Math.max(y(p.value) - 46, 4)})`}>
                <rect x="-48" y="0" width="96" height="34" rx="6" />
                <text y="14" text-anchor="middle" class="tip-label">{p.label}</text>
                <text y="28" text-anchor="middle" class="tip-value">{fmt(p.value)}</text>
            </g>
        {/if}

        <!-- hit targets wider than the marks -->
        {#each chart.points as p, i}
            <rect
                x={x(i) - band / 2}
                y={pad.top}
                width={band}
                height={plotH}
                fill="transparent"
                role="button"
                tabindex="0"
                aria-label={`${p.label}: ${fmt(p.value)}`}
                onmouseenter={() => (hovered = i)}
                onmouseleave={() => (hovered = null)}
                onfocus={() => (hovered = i)}
                onblur={() => (hovered = null)}
            />
        {/each}
    </svg>

    <div class="sr-only">
        <table>
            <caption>{chart.title}</caption>
            <thead><tr><th>Quarter</th><th>Return rate</th></tr></thead>
            <tbody>
                {#each chart.points as p}
                    <tr><td>{p.label}</td><td>{fmt(p.value)}</td></tr>
                {/each}
            </tbody>
        </table>
    </div>
</figure>

<style>
    .chart {
        background: var(--color-base-200);
    }

    .grid {
        stroke: color-mix(in oklch, var(--color-base-content) 12%, transparent);
        stroke-width: 1;
    }

    .axis {
        fill: color-mix(in oklch, var(--color-base-content) 60%, transparent);
        font-size: 12px;
        font-family: ui-monospace, monospace;
    }

    .area {
        fill: color-mix(in oklch, var(--color-primary) 16%, transparent);
    }

    .line {
        fill: none;
        stroke: var(--color-primary);
        stroke-width: 2.5;
        stroke-linejoin: round;
        stroke-linecap: round;
    }

    .dot {
        fill: var(--color-primary);
        stroke: var(--color-base-200);
        stroke-width: 2;
        transition: r 150ms ease;
    }

    .crosshair {
        stroke: color-mix(in oklch, var(--color-base-content) 35%, transparent);
        stroke-dasharray: 3 3;
    }

    .value {
        fill: var(--color-base-content);
        font-size: 13px;
        font-weight: 600;
        font-family: ui-monospace, monospace;
    }

    .tooltip rect {
        fill: var(--color-base-300);
        stroke: color-mix(in oklch, var(--color-base-content) 20%, transparent);
    }

    .tip-label {
        fill: color-mix(in oklch, var(--color-base-content) 70%, transparent);
        font-size: 11px;
    }

    .tip-value {
        fill: var(--color-base-content);
        font-size: 13px;
        font-weight: 600;
        font-family: ui-monospace, monospace;
    }

    rect[role="button"]:focus {
        outline: none;
    }
</style>
