<script lang="ts">
	import type { TWord, TIconButton} from '$lib/types';
	import { ShuffleIcon } from 'lucide-svelte';
	import type {MouseEventHandler} from 'svelte/elements';
	import {scale} from 'svelte/transition';

	interface Props  {
		randomizedEntries: TWord[];
		onShuffleClick: MouseEventHandler<HTMLButtonElement>;
	}

	const shuffleButton: TIconButton = {
		title: (word) => word,
		icon: ShuffleIcon,
		iconSize: '1em',
		iconColor: 'var(--purple)',
		iconStrokeWidth: 1,
	};


	let { randomizedEntries, onShuffleClick }: Props = $props();

</script>

{#snippet iconizedButton(iconButton: TIconButton)}
	{@const { icon: Icon, iconSize: size, iconStrokeWidth: strokeWidth, title } = iconButton}
		<button
			type="button"
			class="button"
			title={title('Shuffle')}
			onclick={onShuffleClick}
			in:scale
		>
			<Icon {size} {strokeWidth} />
		</button>
{/snippet}

{#if randomizedEntries.length > 2}
	{@render iconizedButton(shuffleButton)}
{/if}

<style>
	.button {
		grid-area: second-button;
		height: 2.5rem;
		width: 2.5rem;
		font-size: 1rem;
		background-color: var(--page-background);
		color: var(--purple);
		border: none;
		border-radius: var(--border-radius);
		display: grid;
		align-items: center;
		justify-items: center;
	}

	.button:active {
		transform: rotateX(180deg);
	}

	.button:hover {
		background-color: #d1d1d1;
	}

</style>
