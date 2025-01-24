<script lang="ts">
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import type { PageProps } from "./$types";
  import { enhance, applyAction } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";

  let { data, form }: PageProps = $props();
  console.log(data);

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
      <fieldset>
        <legend class="all-caps-400">VOCAB</legend>
        <ol>
        {#each Array.from(Array(20).keys()) as entry}
          <li class="regular-font">
            <input
              class="regular-font"
              required
              type="text"
              name={`word_${entry + 1}`}
            />
          </li>
        {/each}
        </ol>
        <input type="submit" value="RANDOMIZE" class="all-caps-400"/>
      </fieldset>
    </form>
  </section>

  {#if form?.success}
    <section
      id="randomized-list"
      class="section"
      in:fade={{ duration: 1000, easing: cubicInOut }}
      out:fade={{ duration: 500, easing: cubicInOut }}
    >
      <h2 class="all-caps-600">RANDOMIZED</h2>

    {#if form?.data}
      <ol class="regular-font">
      {#each form.data as randomizedWord}
        <li class="regular-font">
          {randomizedWord}
        </li>
      {/each}
      </ol>
    {/if}
    </section>
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
  .form {
    fieldset{
      background-color: #d1d1d1;
    }
    legend {
      color: #663399
    }
    li {
      padding-bottom: 0.5rem;
    }

    input {
      padding: 0.25rem 0.5rem;
    }

    input[type="submit"] {
      width: 100%;
    }
  }
  .section#randomized-list {
    h2 {
      margin-top: 0;
      color: #663399
    }

    li {
      padding-bottom: 0.5rem;
    }
  }
</style>
