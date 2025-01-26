<script lang="ts">
  let { index } = $props();
</script>

<input
  id={`word-${index + 1}`}
  type="text"
  class="regular-font vocab-input"
  spellcheck="true"
  required
  name="vocab"
/>

<style>
  .vocab-input {
    padding: 0.25rem 0.5rem;
  }
</style>

