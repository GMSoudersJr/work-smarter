<script lang="ts">
	import type {TWord} from '$lib/types';
	import { CaseLowerIcon, CaseSensitiveIcon, type Icon as IconType } from 'lucide-svelte';
	import {scale} from 'svelte/transition';

	type TToggleIconButton = {
		title: string;
		icon: typeof IconType;
		iconSize: string;
		iconStrokeWidth: number;
		iconColor: string;
	};

	interface Props  {
		entries: TWord[];
	}

	const capitalizeToggleButton: TToggleIconButton = {
		title: 'Capitalize all words',
		icon: CaseSensitiveIcon,
		iconSize: '1em',
		iconColor: 'var(--purple)',
		iconStrokeWidth: 1,
	};

	const lowercaseToggleButton: TToggleIconButton = {
		title: 'Lower case all words',
		icon: CaseLowerIcon,
		iconSize: '1em',
		iconColor: 'var(--purple)',
		iconStrokeWidth: 1,
	};

	let capitalize = $state(false);

	let { entries }: Props = $props();

	function handleClick() {
		capitalize = !capitalize;
		if (capitalize) {
			entries.forEach(entry => entry.capitalized())
		} else {
			entries.forEach(entry => entry.word = entry.word?.toLowerCase());
		}
	}
</script>

{#snippet iconizedButton(iconButton: TToggleIconButton)}
	{@const { icon: Icon, iconSize: size, iconStrokeWidth: strokeWidth, title } = iconButton}
		<button
			type="button"
			class="button"
			{title}
			onclick={handleClick}
			in:scale
		>
			<Icon {size} {strokeWidth} />
		</button>
{/snippet}

{#if capitalize}
	{@render iconizedButton(lowercaseToggleButton)}
{:else}
	{@render iconizedButton(capitalizeToggleButton)}
{/if}

<style>
	.button {
		height: 2.5rem;
		width: 2.5rem;
		font-size: 1rem;
		background-color: var(--page-background);
		color: var(--purple);
		border: none;
		border-radius: var(--border-radius);
		display: flex;
		align-items: center;
		justify-content: center;
	}

</style>
