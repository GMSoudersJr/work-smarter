<script lang="ts">
  import { send, receive } from '$lib/transition';
  let { entries } = $props();
</script>

<ul class="word-list">
  {#each entries as entry (entry.originalIndex)}
    <li
      in:receive={{ key: entry.id }}
      out:send={{ key: entry.id }}
    >
      {entry.id}. {entry.word}
    </li>
  {/each}
</ul>

<style>
  .word-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

