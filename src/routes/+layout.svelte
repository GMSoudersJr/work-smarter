<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";

  let { children } = $props();
</script>

<svelte:head>
  <title>{page.data.title}</title>
</svelte:head>

<h1 class="all-caps-800 header">SVELTE 5 PLAYGROUND</h1>

<main>
  {@render children()}
</main>

<style>
  .header {
    text-align: center;
  }
</style>

