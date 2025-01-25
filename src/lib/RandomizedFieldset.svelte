<script lang="ts">
	import {fade} from 'svelte/transition';
  import RandomizedListitem from './RandomizedListitem.svelte';

  let { randomizedWords } = $props();

  function handleClick() {
    randomizedWords = [];
    const vocabForm = document.getElementsByTagName('form').item(0);
    vocabForm?.reset();
    const randomizedFieldSet = document.getElementById("randomized-fieldset");
    randomizedFieldSet?.remove();
  }
</script>

<fieldset
  id="randomized-fieldset"
  class="fieldset"
  form="vocab-form"
  in:fade={{ duration: 500 }}
>
  {#if randomizedWords}
  <legend class="all-caps-400 randomized-legend">RANDOMIZED</legend>
  <ol>
  {#each randomizedWords as randomizedWord, index (randomizedWord)}
    <RandomizedListitem {randomizedWord} {index} />
  {/each}
  </ol>
  {/if}
  <button type="button" class="all-caps-400 reset-button" onclick={handleClick}>
    RESET
  </button>
</fieldset>


<style>
  .fieldset {
    legend {
      color: #663399;
    }
    .reset-button {
      width: 100%;
      padding: 0.25rem 0.5rem;
    }
  }
</style>

