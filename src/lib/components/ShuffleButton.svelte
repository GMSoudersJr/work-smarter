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
			class="button column-header-button"
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
	}

	.button:active {
		transform: rotateX(180deg);
	}

</style>
