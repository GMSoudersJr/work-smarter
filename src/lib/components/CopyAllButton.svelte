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
		class="button column-header-button"
		title={title(numberOfWords.toString())}
		type="button"
		onclick={handleClick}
		in:scale
	>
		<Icon {size} {color} {strokeWidth}/>
	</button>
{/snippet}


{#if randomizedEntries.length > 1 && !copiedAll}
		{@render iconizedButton(randomizedEntries.length, copyAllIconButton)}
{/if}

{#if randomizedEntries.length > 1 && copiedAll}
		{@render iconizedButton(randomizedEntries.length, clipboardCopyIconButton)}
{/if}

<style>
	.button {
		grid-area: third-button;
		margin-right: 1px;
	}

</style>
