<script lang="ts">
  import { WordList, WordInput } from "$lib/components";
  import type { PageProps } from "./$types";
  import type { TWord } from "$lib/types";

  let { data }: PageProps = $props();
  let entries: TWord[] = $state([]);
</script>

<header class="header">
  <h2 class="all-caps-800">{data.header}</h2>
</header>

<main class="main-grid">
  <WordInput bind:entries />
  <div id="original">
    <h2>original</h2>
    <WordList {entries}/>
  </div>

  <div id="randomized">
    <h2>randomized</h2>
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
    column-gap: 1em;
    max-width: 36em;
    margin: 0 auto;
  }

</style>
