<script lang="ts">
	import type {TWord} from '$lib/types';
	import { ClipboardCopyIcon, CopyIcon, type Icon as IconType } from 'lucide-svelte';
	import { scale } from 'svelte/transition';

	type TIconButton = {
		title: string;
		icon: typeof IconType;
		iconSize: string;
		iconColor?: string;
	};

	type CopyButtonProps = {
		entry: TWord;
	}

	async function handleClick() {
		try {
			await navigator.clipboard.writeText(entry.word);
			entry.isCopied = true;
		} catch (error) {
			console.error(error);
		} finally {
			if (entry.isCopied) {
				console.log(`copied ${entry.word} to clipboard`)
			}
		}
	}

	let { entry }: CopyButtonProps = $props();

	const size = '1em';
	const color = '#663399';

	const copyIconButton: TIconButton = {
		title: `Copy "${entry.word}" to clipboard`,
		icon: CopyIcon,
		iconSize: size,
	};

	const clipboardCopyIconButton: TIconButton = {
		title: `Copied "${entry.word}" to clipboard`,
		icon: ClipboardCopyIcon,
		iconSize: size,
		iconColor: color,
	};

</script>

{#snippet iconizedButton(entry: TWord, iconButton: TIconButton)}
	{@const {icon: Icon, iconSize: size, iconColor: color} = iconButton}
	<button
		class="button"
		title={iconButton.title}
		type="button"
		onclick={handleClick}
		in:scale
	>
		{#key entry.isCopied}
			<Icon {size} {color} />
		{/key}
	</button>
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

	.button:hover {
		color: var(--purple);
	}
</style>
