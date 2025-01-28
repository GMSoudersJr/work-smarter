<script lang="ts">
	import { removeWordFromList } from '$lib/utils';
	import { XIcon, type Icon as IconType } from 'lucide-svelte';

	type RemoveButton = {
		title: string;
		icon: typeof IconType;
	};

	const removeButton: RemoveButton = {
		title: 'Remove this word',
		icon: XIcon
	};

	let { entry, entries } = $props();

	async function handleClick() {
		removeWordFromList(entry, entries);
	}

	const size = '1em';
</script>

<button class="button" type="button" title={`Remove "${entry.word}"`} onclick={handleClick}>
	{#if removeButton}
		{@const Icon = removeButton.icon}
		<Icon {size} />
	{/if}
</button>

<style>
	.button {
		height: 100%;
		display: flex;
		border: none;
		border-top-right-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
		justify-content: center;
		align-items: center;
		font-size: 1rem;
	}
	.button:hover {
		color: var(--purple);
	}
</style>
