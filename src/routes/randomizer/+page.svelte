<script lang="ts">
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
    cancel();
    const entries = formData.entries();
    entries.forEach(e => console.log(e));
    return async ({ result, update }) => {
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

  <section id="randomized-list" class="section">
  {#if form?.success}
    <h2 class="all-caps-600">RANDOMIZED</h2>
  {/if}

  {#if form?.data}
    <ol class="regular-font">
    {#each form.data as randomizedWord}
      <li class="regular-font">{randomizedWord}</li>
    {/each}
    </ol>
  {/if}
  </section>

</main>

<style>
  .header {
    text-align: center;
  }
  .main {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .form {
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
    }

    li {
      padding-bottom: 0.5rem;
    }
  }
</style>
