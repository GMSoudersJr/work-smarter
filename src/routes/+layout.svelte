<script lang="ts">
  import { onNavigate } from '$app/navigation'
  import "../app.css";
  import { page } from "$app/state";

  let { children } = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });

  });
</script>

<svelte:head>
  <title>{page.data.title}</title>
  <meta name="description" content={page.data.description}/>
</svelte:head>

<h1 class="all-caps-800 header">
  <a href="/">
    WORK SMARTER
  </a>
</h1>

<main>
  {@render children()}
</main>

<style>
  .header {
    text-align: center;

    a {
      text-decoration: none;
      color: var(--purple);
    }
  }
</style>

