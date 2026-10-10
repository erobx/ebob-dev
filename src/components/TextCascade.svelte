<script lang="ts">
  type Props = {
    text: string;
    by?: 'char' | 'word';
    stagger?: number;  // ms between pieces
    duration?: number; // ms per piece
    delay?: number;    // ms before the first piece
    distance?: string; // starting vertical offset
    tag?: string;
    class?: string;
  };

  let {
    text,
    by = 'char',
    stagger = 35,
    duration = 500,
    delay = 0,
    distance = '0.6em',
    tag = 'span',
    class: className = ''
  }: Props = $props();

  type Item =
    | { space: true; text: string }
    | { space: false; text: string; chars: string[]; start: number; index: number };

  const items = $derived.by(() => {
    let charCount = 0;
    let wordCount = 0;
    return text.split(/(\s+)/).filter(Boolean).map((t): Item => {
      if (/^\s+$/.test(t)) return { space: true, text: t };
      const chars = Array.from(t);
      const item = { space: false as const, text: t, chars, start: charCount, index: wordCount };
      charCount += chars.length;
      wordCount += 1;
      return item;
    });
  });
</script>

<svelte:element
  this={tag}
  class={className}
  aria-label={text}
  style:--duration="{duration}ms"
  style:--distance={distance}
>
  {#each items as item}
    {#if item.space}{item.text}{:else}<span class="word" aria-hidden="true"
      >{#if by === 'word'}<span class="piece" style:--delay="{delay + item.index * stagger}ms">{item.text}</span
      >{:else}{#each item.chars as ch, j}<span class="piece" style:--delay="{delay + (item.start + j) * stagger}ms">{ch}</span
      >{/each}{/if}</span
    >{/if}
  {/each}
</svelte:element>

<style>
  .word {
    display: inline-block;
    white-space: nowrap;
  }

  .piece {
    display: inline-block;
    opacity: 0;
    transform: translateY(var(--distance));
    animation: cascade-in var(--duration) cubic-bezier(0.22, 1, 0.36, 1)
      var(--delay) forwards;
  }

  @keyframes cascade-in {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .piece {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }
</style>
