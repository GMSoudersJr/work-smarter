<script lang="ts">
  import { WordList, WordInput, RandomizedWordList, ResetButton } from "$lib/components";
  import type { PageProps } from "./$types";
  import type { TWord } from "$lib/types";
	import {randomizeEntries} from "$lib/utils";

  let { data }: PageProps = $props();
  let entries: TWord[] = $state([]);
  let randomizedEntries: TWord[] = $derived(randomizeEntries(entries.slice()));
</script>

<header class="header">
  <h2 class="all-caps-800">{data.header}</h2>
</header>

<section class="grid">
  <WordInput bind:entries />

  <div id="original-list">
    {#if entries.length > 0}
      <div class="column-header">
        <h3 class="all-caps-200 ">ORIGINAL</h3>
        <ResetButton bind:entries/>
      </div>
    {/if}
    <WordList bind:entries/>
  </div>

  <div id="randomized-list">
    {#if randomizedEntries.length > 0}
      <div class="column-header">
        <h3 class="all-caps-200">RANDOMIZED</h3>
      </div>
    {/if}
    <RandomizedWordList {randomizedEntries} />
  </div>

</section>

<style>
  .header {
    text-align: center;
    color: var(--purple);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
    max-width: 36rem;
    margin: 0 auto;
  }

  .column-header {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

</style>
