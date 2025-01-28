<script lang="ts">
	import { WholeWordIcon, type Icon as IconType } from "lucide-svelte";

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

{#key data}
	<div class="word-count-wrapper">
	{#if wordCount}
		{@const Icon = data.icon}
		{@const { strokeWidth, iconSize: size, iconColor: color } = data}
		<Icon {size} {color} {strokeWidth}/>
		<p class="regular-font" id="word-count">{wordCount}</p>
	{/if}
	</div>
{/key}

<style>
	.word-count-wrapper {
		display: grid;
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

