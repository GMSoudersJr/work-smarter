<script lang="ts">
  import CopyButton from '$lib/CopyButton.svelte';
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import type { PageProps } from "./$types";
  import { enhance, applyAction } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";

  let { form }: PageProps = $props();

  const useEnhance: SubmitFunction = ({
    formData,
    formElement,
    action,
    cancel,
    submitter
  }) => {
    return async ({ result }) => {
      await applyAction(result);
    }
  }
</script>

<header class="header">
  <h1 class="all-caps-800">VOCAB RANDOMIZER</h1>
</header>

<main class="main">

  <section id="vocab-list" class="section">
    <form
      method="POST"
      action="?/randomize"
      class="form"
      use:enhance={useEnhance}
    >
      <fieldset class="fieldset">
        <legend class="all-caps-400">VOCAB</legend>
        <ol>
        {#each Array.from(Array(20).keys()) as entry}
          <li class="regular-font">
            <input
              class="regular-font"
              spellcheck="true"
              required
              type="text"
              name={`word_${entry + 1}`}
            />
          </li>
        {/each}
        </ol>
        <div class="buttons">
          <input type="submit" value="RANDOMIZE" class="all-caps-400"/>
          <input type="reset" value="RESET" class="all-caps-400"/>
        </div>
      </fieldset>
    </form>
  </section>

  {#if form?.success}
    <fieldset
      class="fieldset"
      in:fade={{ duration: 500, easing: cubicInOut }}
      out:fade={{ duration: 1500, easing: cubicInOut }}
    >
      {#if form.data}
      <legend class="all-caps-400">RANDOMIZED</legend>
      <ol>
      {#each form.data as randomizedWord, index}
        <li class="regular-font">
          <input
            class="regular-font"
            required
            type="text"
            id={`word_${index + 1}`}
            value={randomizedWord}
          />
          <CopyButton id={`word_${index + 1}`} {randomizedWord} />
        </li>
      {/each}
      </ol>
      {/if}
    </fieldset>
  {/if}

</main>

<style>
  .header {
    text-align: center;
      color: #663399
  }

  .main {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .form {

    input[type="submit"],
    input[type="reset"]
    {
      width: 100%;
    }
  }

  .fieldset {
    legend {
      color: #663399
    }
    li {
      padding-bottom: 0.5rem;
    }
    input {
      padding: 0.25rem 0.5rem;
    }
  }
</style>
