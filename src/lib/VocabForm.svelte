<script lang="ts">
  import { enhance, applyAction } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";
  import VocabInput from '$lib/VocabInput.svelte';
	import {randomizeWords} from "./helperFunctions";

  const useEnhance: SubmitFunction = ({
    formData,
    cancel,
  }) => {
    cancel();
    const words = formData.getAll('vocab').map(word => word.toString());
    randomizedWords = randomizeWords(words);

    return async ({ result }) => {
      await applyAction(result);
    }
  }

  let { randomizedWords = $bindable() } = $props();

</script>

<form
  id="vocab-form"
  method="POST"
  action="?/randomize"
  use:enhance={useEnhance}
>
  <fieldset class="fieldset">
    <legend class="all-caps-400">VOCAB</legend>
    <ol>
    {#each Array.from(Array(20).keys()) as index}
      <li class="regular-font">
        <VocabInput {index} />
      </li>
    {/each}
    </ol>
    <input type="submit" value="RANDOMIZE" class="all-caps-400"/>
  </fieldset>
</form>

<style>
  .fieldset {
    legend {
      color: #663399
    }
    li {
      padding-bottom: 0.5rem;
    }
    input[type="submit"] {
      width: 100%;
      padding: 0.25rem 0.5rem;
    }
  }

</style>

