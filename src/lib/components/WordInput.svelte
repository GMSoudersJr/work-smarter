<script lang="ts">

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

<input
  id="word-input"
  class="input regular-font"
  type="text"
  placeholder="type word, press enter"
  onkeydown={handleKeydown}
/>


<style>
  .input {
    grid-column: 1/3;
    border: 1px solid #d1d1d1;
    font-size: 1.4em;
    padding: 0.5em;
    margin: 0.5rem 0 1rem 0;
  }
</style>

