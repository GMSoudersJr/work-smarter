<script lang="ts">
  import { Trash2Icon, type Icon as IconType } from "lucide-svelte";

  type ResetButton = {
    title: string;
    icon: typeof IconType;
  }

  const resetButton: ResetButton = {
    title: 'Reset list',
    icon: Trash2Icon
  }

  let { entries = $bindable() } = $props();

  const size = '1em';
  const strokeWidth = 1;

  function handleClick() {
    entries = [];
  }
</script>

{#key resetButton}
  {#if entries.length > 1}
    {@const Icon = resetButton.icon}
    <button
      class="button"
      title={resetButton.title}
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
    border-radius: 50%;
  }
  .button:active {
    transform: rotateZ(-15deg);
    }
</style>

