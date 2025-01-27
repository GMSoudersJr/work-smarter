<script lang="ts">
	import {randomizeEntries} from "$lib/utils";
  import { ShuffleIcon, type Icon as IconType } from "lucide-svelte";

  type ShuffleButton = {
    title: string;
    icon: typeof IconType;
  }

  const shuffleButton: ShuffleButton = {
    title: 'Shuffle list',
    icon: ShuffleIcon
  }

  let { randomizedEntries } = $props();

  const size = '1em';
  const strokeWidth = 1;

  function handleClick() {
    randomizedEntries = randomizeEntries(randomizedEntries);
  }
</script>

{#key shuffleButton}
  {#if randomizedEntries.length > 1}
    {@const Icon = shuffleButton.icon}
    <button
      class="button"
      title={shuffleButton.title}
      onclick={handleClick}
    >
      <Icon {size} {strokeWidth}/>
    </button>
  {/if}
{/key}

<style>
  .button {
    font-size: 1rem;
    background-color: var(--page-background);
    color: var(--purple);
    display: inline-flex;
    border: none;
  }

  .button:active {
    transform: rotateX(180deg);
  }
</style>

