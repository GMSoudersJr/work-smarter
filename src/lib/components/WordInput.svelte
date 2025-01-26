<script lang="ts">
  import type { TWord } from '$lib/types';
	import { randomizeEntries } from '$lib/utils';

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

  let { entries = $bindable(), randomizedEntries = $bindable() } = $props();
  let uid = entries.length + 1;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key !== 'Enter') return;
    const inputElement = document.getElementsByTagName("input").namedItem('word-input');
    if (inputElement) {
      if (inputElement.value === '') return;
      const currentWord: TWord = {
        id: `${inputElement.value}${uid++}`,
        word: inputElement.value,
        originalIndex: entries.length,
        randomizedIndex: 0,
        isCopied: false,
      };

      const newEntry = new Word(inputElement.value);
      newEntry.id = `${inputElement.value}${uid++}`;
      newEntry.originalIndex = entries.length;
      newEntry.randomizedIndex = 0;

      entries.push(newEntry);
      randomizedEntries = randomizeEntries(entries.slice());

      inputElement.value = '';
    }
  }

</script>

<input
  id="word-input"
  class="input"
  type="text"
  placeholder="type word, press enter"
  onkeydown={handleKeydown}
/>


<style>
  .input {
    grid-column: 1/3;
    border: 1px solid green;
    font-size: 1.4em;
    padding: 0.5em;
    margin: 0 0 1rem 0;
  }
</style>

