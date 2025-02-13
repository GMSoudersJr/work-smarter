<script lang="ts">
	import type { TWord, TIconButton } from '$lib/types';
	import { ClipboardCopyIcon, SquareStackIcon } from 'lucide-svelte';
	import { scale } from 'svelte/transition';

	interface Props {
		randomizedEntries: TWord[];
	}

	async function handleClick() {

		let wordsForClipboard: string[] = [];

		if (copiedAll) {
			randomizedEntries.forEach((entry) => {
				entry.isCopied = false;
			});

			try {
				await navigator.clipboard.writeText("");
			} catch (error) {
				console.error(error);
			}

		} else {
			randomizedEntries.forEach((entry) => {
				if (entry.word) {
					wordsForClipboard.push(entry.word);
					entry.isCopied = true;
				}
			});

			try {
				await navigator.clipboard.writeText(wordsForClipboard.join('\n'));
			} catch (error) {
				console.error(error);
			}

		}

		copiedAll = !copiedAll;

/*
		if (randomizedEntries.isCopied) {
			entry.isCopied = !entry.isCopied;
		} else {
			try {
				await navigator.clipboard.writeText(entry.word);
				entry.isCopied = true;
			} catch (error) {
				console.error(error);
			}
		}
*/
	}

	let { randomizedEntries }: Props = $props();

	const size = '1em';
	const color = 'var(--purple)';

	const copyAllIconButton: TIconButton = {
		title: (numberOfWords: string) => `Copy ${numberOfWords} words to clipboard`,
		icon: SquareStackIcon,
		iconSize: size,
		iconStrokeWidth: 1.5
	};

	const clipboardCopyIconButton: TIconButton = {
		title: (numberOfWords: string) => `Copied ${numberOfWords} words to clipboard`,
		icon: ClipboardCopyIcon,
		iconSize: size,
		iconColor: color,
		iconStrokeWidth: 1.5
	};

	let copiedAll = $state(false);
</script>

{#snippet iconizedButton(numberOfWords: number, iconButton: TIconButton)}
	{@const {icon: Icon, iconSize: size, iconColor: color, title, iconStrokeWidth: strokeWidth} = iconButton}
	<button
		class="button"
		title={title(numberOfWords.toString())}
		type="button"
		onclick={handleClick}
		in:scale
	>
		{#key numberOfWords}
			<Icon {size} {color} {strokeWidth}/>
		{/key}
	</button>
{/snippet}


{#if randomizedEntries.length > 1}
	{#if copiedAll}
		{@render iconizedButton(randomizedEntries.length, clipboardCopyIconButton)}
	{:else}
		{@render iconizedButton(randomizedEntries.length, copyAllIconButton)}
	{/if}
{/if}

<style>
	.button {
		height: 100%;
		width: 2.5rem;
		display: grid;
		align-items: center;
		justify-items: center;
		border: none;
		border-radius: var(--border-radius);
		background-color: var(--page-background);
		font-size: 1rem;
		place-self: end;
		margin-right: 1px;
		color: var(--purple);
	}

	.button:hover {
		color: var(--purple);
	}
</style>
