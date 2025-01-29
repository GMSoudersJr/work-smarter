<script lang="ts">
	import { send, receive } from '$lib/transition';
	import { flip } from 'svelte/animate';
	import type { TWord } from '$lib/types';
	import { CopyButton, RemoveButton } from '$lib/components';

	type wordListProps = {
		entries?:TWord[];
		randomizedEntries?: TWord[];
	}

	let { entries = $bindable(), randomizedEntries }: wordListProps = $props();
</script>

{#snippet listitems(listOfWords: TWord[])}
	{#each listOfWords as entry, index (entry.id)}
		<li
			in:receive={{ key: entry.id }}
			out:send={{ key: entry.id }}
			animate:flip={{ duration: 300 }}
		>
			<div class="word-grid">
				<p id="word-index" class="regular-font">{index + 1}.</p>
				<p id="word-text" class="regular-font">{entry.word}</p>
				{#if entries}
					<RemoveButton {entries} {entry} />
				{:else if randomizedEntries}
					<CopyButton {entry} />
				{/if}
			</div>
		</li>
	{/each}
{/snippet}

<ul class="word-list">
	{#if entries}
		{@render listitems(entries)}
	{:else if randomizedEntries}
		{@render listitems(randomizedEntries)}
	{/if}
</ul>

<style>
	.word-list {
		list-style: none;
		margin: 0;
		padding: 0;

		li {
			border: 1px solid #d1d1d1;
			border-radius: var(--border-radius);
			margin: 0.5rem 0;
			box-shadow: 5px 5px 5px #e0e0e0;
		}
	}

	.word-grid {
		height: 2rem;
		display: grid;
		column-gap: 0.25rem;
		grid-template-columns: 0.4045fr 1.618fr 0.4045fr;
		align-items: center;

		#word-index {
			justify-self: end;
		}
	}
</style>
