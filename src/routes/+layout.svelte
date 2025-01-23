<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<h1 class="all-caps-800 header">SVELTE 5 PLAYGROUND</h1>

<main>
  {@render children()}
</main>

<style>
  .header {
    text-align: center;
  }
</style>

