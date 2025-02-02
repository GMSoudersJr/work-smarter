<script lang="ts">
	import { send, receive } from '$lib/transition';
	import { flip } from 'svelte/animate';
	import type { TWord, TListLocation } from '$lib/types';
	import { CopyButton, RemoveButton } from '$lib/components';
	import IndexDifferenceWidget from './IndexDifferenceWidget.svelte';

	interface Props {
		entries?:TWord[];
		randomizedEntries?: TWord[];
		listLocation: TListLocation;
	}

	let { entries = $bindable(), randomizedEntries, listLocation }: Props = $props();
</script>

{#snippet listitems(listOfWords: TWord[])}
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
				<div id="word-index">
				<p>{index + 1}</p>
				</div>
				<div class="word-text">
					<p id="word-text" class={{ copied: entry.isCopied }}>
						{entry.word}
					</p>
					{#if listLocation === "randomized"}
						{@const indexDifference = entry.indexDifference(index)}
						<IndexDifferenceWidget {indexDifference} />
					{/if}
				</div>
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
			margin: 0.75rem 0;
			box-shadow: var(--box-shadow);
		}

		.randomized {
			.shuffle-span {
				display: inline-flex;
				gap: 0.125rem;
				align-items: center;
				font-size: 0.5rem;
			}

			.copied {
				text-decoration: line-through;
				text-decoration-color: var(--copied-color);
				text-decoration-thickness: 0.1rem;
				text-decoration-style: solid;
			}
		}

		.original:has(.copied),
		.randomized:has(.copied) {
			box-shadow: none;
		}

		.original:has(.copied) {
			color: var(--copied-color);
		}

		.randomized:has(.copied) {
			opacity: 0.6;
		}

	}

	.word-grid {
		height: 2.5rem;
		display: grid;
		column-gap: 0.25rem;
		grid-template-columns: 2.5rem 1fr 2.5rem;
		align-items: center;
		justify-content: center;

		#word-index {
			height: 100%;
			border-top-left-radius: var(--border-radius);
			border-bottom-left-radius: var(--border-radius);
			background-color: #d1d1d1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.word-text {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 0.5rem;
	}
</style>
