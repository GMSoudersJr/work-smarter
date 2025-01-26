<script lang="ts">
  import { WordList, WordInput } from "$lib/components";
  import type { PageProps } from "./$types";
  import type { TWord } from "$lib/types";

  let { data }: PageProps = $props();
  let entries: TWord[] = $state([]);
  const randomize = true;
</script>

<header class="header">
  <h2 class="all-caps-800">{data.header}</h2>
</header>

<main class="main-grid">
  <WordInput bind:entries />
  <div id="original">
    <h3 class="all-caps-200">ORIGINAL</h3>
    <WordList {entries}/>
  </div>

  <div id="randomized">
    <h3 class="all-caps-200">RANDOMIZED</h3>
    <WordList {entries} {randomize} />
  </div>
</main>

<style>
  .header {
    text-align: center;
    color: var(--purple);
  }
  .main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
    max-width: 36em;
    margin: 0 auto;
  }

</style>
