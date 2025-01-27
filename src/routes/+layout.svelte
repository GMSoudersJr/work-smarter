<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";

  let { children } = $props();
</script>

<svelte:head>
  <title>{page.data.title}</title>
</svelte:head>


<nav class="navbar">
  <a href="/randomizer" class="regular-font">Randomizer</a>
  <a href="/randomtimize" class="regular-font">Randomtimize</a>
</nav>

<h1 class="all-caps-800 header">WORK SMARTER</h1>

<main>
  {@render children()}
</main>

<style>
  .header {
    text-align: center;
    color: var(--purple);
  }
</style>

