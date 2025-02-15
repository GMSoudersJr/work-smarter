<script lang="ts">
	import type { TWord, TIconButton } from '$lib/types';
	import { ClipboardCopyIcon, CopyIcon } from 'lucide-svelte';
	import { scale } from 'svelte/transition';

	interface Props {
		entry: TWord;
	}

	async function handleClick() {
		if (entry.isCopied) {
			entry.isCopied = !entry.isCopied;
		} else {
			try {
				if (entry.word !== undefined) {
					await navigator.clipboard.writeText(entry.word);
					entry.isCopied = true;
				}
			} catch (error) {
				console.error(error);
			}
		}
	}

	let { entry }: Props = $props();

	const size = '1em';
	const color = '#663399';

	const copyIconButton: TIconButton = {
		title: (word) => `Copy "${word}" to clipboard`,
		icon: CopyIcon,
		iconSize: size,
	};

	const clipboardCopyIconButton: TIconButton = {
		title: (word) => `Copied "${word}" to clipboard`,
		icon: ClipboardCopyIcon,
		iconSize: size,
		iconColor: color,
	};

</script>

{#snippet iconizedButton(entry: TWord, iconButton: TIconButton)}
	{@const {icon: Icon, iconSize: size, iconColor: color, title} = iconButton}
	{#if entry.word !== undefined}
		<button
			class="button"
			title={title(entry.word)}
			type="button"
			onclick={handleClick}
			in:scale
		>
			{#key entry.isCopied}
				<Icon {size} {color} />
			{/key}
		</button>
	{/if}
{/snippet}


{#if entry.isCopied}
	{@render iconizedButton(entry, clipboardCopyIconButton)}
	{:else}
	{@render iconizedButton(entry, copyIconButton)}
{/if}

<style>
	.button {
		height: 100%;
		display: flex;
		border: none;
		border-top-right-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
		justify-content: center;
		align-items: center;
		font-size: 1rem;
	}

	.button:hover,
	.button:focus {
		color: var(--purple);
	}
</style>
