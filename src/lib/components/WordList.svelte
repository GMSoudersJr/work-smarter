<script lang="ts">
  import { send, receive } from '$lib/transition';
	import {flip} from 'svelte/animate';
	import RemoveButton from './RemoveButton.svelte';
	import {randomizeEntries} from '$lib/utils';
	import CopyButton from '$lib/CopyButton.svelte';
  let { entries, randomize = false } = $props();
  let randomizedEntries = $state(randomizeEntries(entries));
</script>

<ul class="word-list">
  {#each entries as entry, index (entry.id)}
    <li
      in:receive={{ key: entry.id }}
      out:send={{ key: entry.id }}
      animate:flip={{ duration: 300 }}
    >
      <div class="word-grid">
        <p id="word-index" class="regular-font">{index + 1}.</p>
        <p id="word-text" class="regular-font">{entry.word}</p>
        {#if randomize}
          <p>hello</p>
          {:else}
          <RemoveButton {entries} {entry}/>
        {/if}
      </div>
    </li>
  {/each}
</ul>

<style>
  .word-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .word-grid {
    height: 2rem;
    display: grid;
    column-gap: 0.25rem;
    grid-template-columns: 0.4045fr 1.618fr 0.4045fr;
    align-items: center;

    #word-index {
      justify-self: end;
    }
  }
</style>

