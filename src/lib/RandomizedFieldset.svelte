<script lang="ts">
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import RandomizedListitem from './RandomizedListitem.svelte';

  let { randomizedWords } = $props();
</script>

<fieldset
  class="fieldset"
  form="vocab-form"
>
  {#if randomizedWords}
  <legend class="all-caps-400 randomized-legend">RANDOMIZED</legend>
  <ol>
  {#each randomizedWords as randomizedWord, index (randomizedWord)}
    <RandomizedListitem {randomizedWord} {index} />
  {/each}
  </ol>
  {/if}
</fieldset>


<style>
  .randomized-legend {
    color: #663399;
  }
</style>

