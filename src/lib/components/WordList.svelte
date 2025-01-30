<script lang="ts">
	import { send, receive } from '$lib/transition';
	import { flip } from 'svelte/animate';
	import type { TWord, TListLocation } from '$lib/types';
	import { CopyButton, RemoveButton } from '$lib/components';
	import {ShuffleIcon} from 'lucide-svelte';

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
				<p id="word-index">{index + 1}.</p>
				<p id="word-text" class={{ copied: entry.isCopied }}>
					{entry.word}
					{#if listLocation === "randomized"}
						<span class="shuffle-span">
							{entry.indexDifference(index)}
							<ShuffleIcon size={'1em'} />
						</span>
					{/if}
				</p>
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

		.randomized {
			.shuffle-span {
				display: inline-flex;
				gap: 0.125rem;
				align-items: center;
				font-size: 0.5rem;
			}

			.copied {
				text-decoration: line-through;
				text-decoration-color: var(--yellow);
				text-decoration-thickness: 0.0625rem;
				text-decoration-style: solid;
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
		justify-content: center;

		#word-index {
			justify-self: end;
		}

		#word-text {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.randomized {
			background-color: aliceblue;
			border: 1px solid green;
		}
	}
</style>
