<script lang="ts">
  import { CheckIcon, CopyIcon, type Icon as IconType } from "lucide-svelte";

  type CopyButton = {
    name: string;
    copyIcon: typeof IconType;
    copiedIcon: typeof IconType
  };

  const copyButtons: CopyButton[] = [
    {
        name: 'copyButton',
        copyIcon: CopyIcon,
        copiedIcon: CheckIcon
      }
  ];

  let { id, randomizedWord } = $props();
  let copied = $state(false);

  async function handleClick() {
    const inputElement = document.getElementById(id);
    inputElement?.focus();
    try {
      await navigator.clipboard.writeText(randomizedWord);
      copied = true;
    } catch (error) {
      console.error(error)
    }
  }
  const size = '1em';
  const color = '#663399';
  const strokeWidth = 4;
</script>

{#each copyButtons as copyButton}
  {@const CopyIcon = copyButton.copyIcon}
  {@const CopiedIcon = copyButton.copiedIcon}
  <button
    class="button"
    title={`Copy ${randomizedWord} to clipboard`}
    onclick={handleClick}
  >
  {#if copied}
    <CopiedIcon {size} {color} {strokeWidth}/>
  {:else}
    <CopyIcon {size} />
  {/if}
  </button>
{/each}

<style>
  .button {
    border: none;
    background-color: #f5f5f5;
  }
</style>

