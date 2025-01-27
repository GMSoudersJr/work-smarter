<script lang="ts">
  import { AsteriskIcon, type Icon as IconType } from "lucide-svelte";
  class Word {
    id = $state();
    word = $state();
    originalIndex = $state();
    randomizedIndex = $state();
    isCopied = $state(false);

    constructor(word: string) {
      this.word = word;
    }
  }

  type InputLabel = {
    label: string;
    icon: typeof IconType;
    iconSize: string;
    iconColor: string;
  };

  const inputLabel: InputLabel = {
    label: `Type a word, press Enter`,
    icon: AsteriskIcon,
    iconSize: '1em',
    iconColor: 'var(--yellow)'
  };

  let { entries = $bindable() } = $props();
  let uid = entries.length + 1;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key !== 'Enter') return;
    const inputElement = document.getElementsByTagName("input").namedItem('word-input');
    if (inputElement) {
      if (inputElement.value === '') return;

      const newEntry = new Word(inputElement.value);
      newEntry.id = `${inputElement.value}${uid++}`;
      newEntry.originalIndex = entries.length;
      newEntry.randomizedIndex = 0;

      entries.push(newEntry);

      inputElement.value = '';
    }
  }


</script>

<div class="input-wrapper">
  {#key inputLabel}
    {#if inputLabel}
      {@const Icon = inputLabel.icon}
      {@const size = inputLabel.iconSize}
      {@const color = inputLabel.iconColor}
    <label class="input-label regular-font" for="word-input" >
      <Icon {size} {color} />
      {inputLabel.label}
    </label>
    {/if}
  {/key}
    <input
      id="word-input"
      class="input regular-font"
      type="text"
      onkeydown={handleKeydown}
    />
</div>


<style>
  .input-wrapper {
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
  }
  .input-label {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
  }
  .input {
    border: 1px solid #d1d1d1;
    border-radius: var(--border-radius);
    font-size: 1.4em;
    padding: 0.5em;
  }
</style>

