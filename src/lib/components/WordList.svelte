<script lang="ts">
	import { send, receive } from '$lib/transition';
	import { flip } from 'svelte/animate';
	import type { TWord } from '$lib/types';
	import { CopyButton, RemoveButton } from '$lib/components';

	type wordListProps = {
		entries?:TWord[];
		randomizedEntries?: TWord[];
	}

	type TListLocation = "original" | "randomized";

	let { entries = $bindable(), randomizedEntries }: wordListProps = $props();
</script>

{#snippet listitems(listOfWords: TWord[], listLocation: TListLocation)}
	{#each listOfWords as entry, index (entry.id)}
		<li
			in:receive={{ key: entry.id }}
			out:send={{ key: entry.id }}
			animate:flip={{ duration: 300 }}
			class={listLocation}
		>
			<div
				class="word-grid regular-font"
			>
				<p id="word-index">{index + 1}.</p>
				<p id="word-text" class={{ copied: entry.isCopied }}>{entry.word}</p>
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
		{@render listitems(entries, "original")}
	{:else if randomizedEntries}
		{@render listitems(randomizedEntries, "randomized")}
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

		.randomized {
			.copied {
				text-decoration: line-through;
				text-decoration-color: var(--yellow);
				text-decoration-thickness: 0.0625rem;
				text-decoration-style: solid;
			}
		}

		.original {
			.copied::after {
				content: " [O]";
				color: var(--purple);
			}
		}

		.original:has(.copied) {
			color: var(--yellow);
			box-shadow: none;
		}
	}

	.word-grid {
		height: 2.5rem;
		display: grid;
		column-gap: 0.25rem;
		grid-template-columns: 2.5rem 1fr 2.5rem;
		align-items: center;

		#word-index {
			justify-self: end;
		}

		.randomized {
			background-color: aliceblue;
			border: 1px solid green;
		}
	}
</style>
