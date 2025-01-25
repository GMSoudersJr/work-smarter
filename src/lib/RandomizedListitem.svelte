<script lang="ts">
  import RandomizedInput from './RandomizedInput.svelte';
  import CopyButton from './CopyButton.svelte';

  let { randomizedWord, index } = $props();
</script>

<li class="randomized-listitem">
  <RandomizedInput {randomizedWord} {index}/>
  <CopyButton {randomizedWord} id={`word_${index + 1}`} />
</li>

<style>
  .randomized-listitem {
    padding-bottom: 0.5rem;
  }
</style>

