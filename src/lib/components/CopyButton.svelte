<script lang="ts">
	import { CheckIcon, CopyIcon, type Icon as IconType } from 'lucide-svelte';
	import { scale } from 'svelte/transition';

	type CopyButton = {
		name: string;
		copyIcon: typeof IconType;
		copiedIcon: typeof IconType;
	};

	const copyButton: CopyButton = {
		name: 'copyButton',
		copyIcon: CopyIcon,
		copiedIcon: CheckIcon
	};

	async function handleClick() {
		const inputElement = document.getElementById(id);
		inputElement?.focus();
		try {
			await navigator.clipboard.writeText(randomizedWord);
			copied = true;
		} catch (error) {
			console.error(error);
		}
	}

	let { id, randomizedWord } = $props();
	let copied = $state(false);

	const size = '1em';
	const color = '#663399';
	const strokeWidth = 4;
</script>

{#key copyButton}
	<button class="button" title={`Copy "${randomizedWord}" to clipboard`} onclick={handleClick}>
		{#key copied}
			<div in:scale>
				{#if copied}
					{@const CopiedIcon = copyButton.copiedIcon}
					<CopiedIcon {size} {color} {strokeWidth} />
				{:else}
					{@const CopyIcon = copyButton.copyIcon}
					<CopyIcon {size} />
				{/if}
			</div>
		{/key}
	</button>
{/key}

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
