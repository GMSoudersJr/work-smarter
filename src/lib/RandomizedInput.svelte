<script lang="ts">
  let {randomizedWord, index} = $props();
</script>

<input
  type="text"
  class="regular-font randomized-input"
  required
  id={`word_${index + 1}`}
  bind:value={randomizedWord}
/>

<style>
  .randomized-input {
    padding: 0.25rem 0.5rem;
  }
</style>

