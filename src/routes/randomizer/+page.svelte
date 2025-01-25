<script lang="ts">
  import VocabForm from '$lib/VocabForm.svelte';
  import RandomizedFieldset from '$lib/RandomizedFieldset.svelte';
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let randomizedWords = $state([]);
</script>


<header class="header">
  <h2 class="all-caps-800">{data.header}</h2>
</header>

<main class="main">

  <section id="vocab-list" class="section">
    <VocabForm bind:randomizedWords />
  </section>

  {#if randomizedWords.length > 0}
    {#key randomizedWords}
      <RandomizedFieldset {randomizedWords} />
    {/key}
  {/if}

</main>

<style>
  .header {
    text-align: center;
      color: #663399
  }

  .main {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
</style>
