<script lang="ts">
	import { WholeWordIcon, type Icon as IconType } from "lucide-svelte";
	import {bounceIn, bounceInOut, bounceOut, quadInOut} from "svelte/easing";
	import {blur, fade, fly, scale, slide} from "svelte/transition";

	type WordCountProps = {
		wordCount: number;
	};

	type TWordCountComponent = {
		icon: typeof IconType;
		text: string;
		iconSize: string;
		iconColor: string;
		strokeWidth: string;
	}

	let { wordCount }: WordCountProps = $props();

	const data: TWordCountComponent = {
		icon: WholeWordIcon,
		text: 'Count:',
		iconColor: 'var(--purple)',
		iconSize: '1em',
		strokeWidth: '1.5'
	};

</script>

{#snippet wordCountSnippet(data: TWordCountComponent)}
	{@const Icon = data.icon}
	{@const { strokeWidth, iconSize: size, iconColor: color } = data}
		<Icon {size} {color} {strokeWidth}/>
		{#key wordCount}
			<p
				class="regular-font"
				id="word-count"
				in:scale={{ easing: bounceOut, duration: 750, start: 0}}
			>
				{wordCount}
			</p>
		{/key}
{/snippet}

<div class="word-count-wrapper">
	{@render wordCountSnippet(data)}
</div>

<style>
	.word-count-wrapper {
		width: min-content;
		display: grid;
		height: 1rem;
		grid-template-columns: min-content min-content;
		column-gap: 0.125rem;
		align-items: center;
		font-size: 0.75rem;

		p {
			font-size: 0.75rem;
			font-weight: 300;
		}

	}

</style>

