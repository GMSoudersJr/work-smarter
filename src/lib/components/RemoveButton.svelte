<script lang="ts">
	import {removeWordFromList} from "$lib/utils";
  import { Trash2Icon, type Icon as IconType } from "lucide-svelte";

  type RemoveButton = {
    title: string;
    icon: typeof IconType;
  }

  const removeButton: RemoveButton = {
    title: 'Remove this word',
    icon: Trash2Icon,
  }

  let { entry, entries } = $props();

  async function handleClick() {
    removeWordFromList(entry, entries);
  }
  const size = '1em';
</script>

<button
  onclick={handleClick}
  class="button"
>
  {#if removeButton}
    {@const Icon = removeButton.icon}
    <Icon {size} />
  {/if}
</button>

<style>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

