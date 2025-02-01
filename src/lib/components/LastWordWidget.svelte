<script lang="ts">
	import { WholeWordIcon, type Icon as IconType } from "lucide-svelte";
	import { bounceOut } from "svelte/easing";
	import { scale } from "svelte/transition";

	interface Props  {
		lastWord?: string;
		wordCount: number;
	};

	type TWordCountComponent = {
		icon: typeof IconType;
		iconSize: string;
		iconColor: string;
		strokeWidth: string;
	}

	let { lastWord = '', wordCount }: Props = $props();

	const iconProps: TWordCountComponent = {
		icon: WholeWordIcon,
		iconColor: 'var(--purple)',
		iconSize: '1em',
		strokeWidth: '1.5'
	};

</script>

{#snippet wordIcon()}
	{@const {icon: Icon, iconColor: color, iconSize: size, strokeWidth} = iconProps}
	<Icon {size} {color} {strokeWidth} />
{/snippet}

{#snippet wordCountSnippet(word: string)}
	{#key `${word}${wordCount}`}
		<p
			class="regular-font"
			id="word-count"
			in:scale={{ easing: bounceOut, duration: 750, start: 0}}
		>
			{wordCount}
		</p>
	{/key}
{/snippet}

{#snippet wordSnippet(word: string)}
	{#key `${word}${wordCount}`}
		<p
			class="regular-font"
			id="word-count"
			in:scale={{ easing: bounceOut, duration: 750, start: 0}}
		>
			{word}
		</p>
	{/key}
{/snippet}

<div class="word-count-wrapper regular-font">
	{@render wordIcon()}
	{@render wordCountSnippet(lastWord)}
	{@render wordSnippet(lastWord)}
</div>

<style>
	.word-count-wrapper {
		width: min-content;
		display: grid;
		height: 1rem;
		grid-template-columns: repeat(2, min-content) max-content;
		column-gap: 0.125rem;
		align-items: center;
		font-size: 0.75rem;

		p {
			font-size: 0.75rem;
			font-weight: 300;
		}

	}

</style>

