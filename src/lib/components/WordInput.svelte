<script lang="ts">
	import { AsteriskIcon, type Icon as IconType } from 'lucide-svelte';
	import { WordCount} from '$lib/components';
	import { capitalize } from '$lib/utils';

	class Word {
		id: (string | undefined) = $state();
		word: (string | undefined) = $state();
		isCopied = $state(false);

		constructor(word: string) {
			this.word = word;
		}

		capitalized = () => {
			if (this.word) {
				this.word = capitalize(this.word);
			}
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
	let wordCount = $derived(entries.length);

	const validInput = /^\s*[\p{L}\p{N}'-~]+(?:\s+[\p{L}\p{N}'-~]+)*\s*$/u;

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Enter') return;
		const inputElement = document.getElementsByTagName('input').namedItem('word-input');
		if (inputElement) {

			if (!inputElement.value.match(validInput)) return;

			const capitalizeInputElement = document.getElementsByTagName('input').namedItem('capitalize');

			const newEntry = new Word(inputElement.value.toString().trim());
			if( capitalizeInputElement ) {
				if (capitalizeInputElement.checked) {
					newEntry.capitalized();
				}
			}

			newEntry.id = `${inputElement.value}${uid++}`;

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
			<label class="input-label regular-font" for="word-input">
				<Icon {size} {color} />
				{inputLabel.label}
			</label>
		{/if}
	{/key}
	<input id="word-input" class="input regular-font" type="text" onkeydown={handleKeydown} />
	<WordCount {wordCount} />
</div>

<style>
	.input-wrapper {
		grid-column: 1/3;
		display: flex;
		flex-direction: column;
	}

	.input-label {
		font-size: 0.75rem;
		font-weight: 300;
		display: flex;
		display: grid;
		grid-template-columns: min-content max-content;
		column-gap: 0.125rem;
		align-items: center;
	}

	.input {
		border: 1px solid #d1d1d1;
		border-radius: var(--border-radius);
		font-size: 1.5rem;
		padding: 0.5em;
	}

</style>
