<script lang="ts">
	import { WordInput, ResetButton, WordList, CaseToggleButton, CopyAllButton, ShuffleButton } from '$lib/components';
	import type { PageProps } from './$types';
	import type { TWord } from '$lib/types';
	import { randomizeEntries } from '$lib/utils';

	let { data }: PageProps = $props();
	let entries: TWord[] = $state([]);
	let randomizedEntries: TWord[] = $derived(randomizeEntries(entries.slice()));
</script>

<div class="page">
	<section class="section-grid">

		<div class="header">
			<h2 class="all-caps-800">{data.header}</h2>
		</div>

		<WordInput bind:entries />

		<div id="original-list">
			{#if entries.length > 0}
				<div class="column-header">
					<h3 class="all-caps-200">ORIGINAL</h3>
					<ResetButton bind:entries />
				</div>
			{/if}
			<WordList bind:entries listLocation="original"/>
		</div>

		<div id="randomized-list">
			{#if randomizedEntries.length > 0}
				<div class="column-header">
					<h3 class="all-caps-200">RANDOMIZED</h3>
					<CaseToggleButton {entries}/>
					<ShuffleButton {randomizedEntries}/>
					<CopyAllButton {randomizedEntries}/>
				</div>
			{/if}
			<WordList {randomizedEntries} listLocation="randomized" />
		</div>

	</section>
</div>

<style>
	.page {
		height: 100%;
		margin: 0 0.5rem;
	}
	.section-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 2em;
		row-gap: 1.5rem;
		max-width: 36rem;
		margin: 0 auto;
	}

	.header {
		text-align: center;
		color: var(--purple);
		grid-column: 1/3;
	}

	.column-header {
		height: 2.5rem;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, min-content) 1fr;
		align-items: center;
		gap: 0.5rem;
	}
</style>
