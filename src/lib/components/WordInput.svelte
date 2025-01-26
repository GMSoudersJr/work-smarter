<script lang="ts">
  import {getRandomInteger} from '../helperFunctions';
  import type { TWord } from '$lib/types';

  let { entries = $bindable() } = $props();
  let uid = entries.length + 1;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key !== 'Enter') return;
    const randomNumber = getRandomInteger(entries.length);
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

      entries.push(currentWord);

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

