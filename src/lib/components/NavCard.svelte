<script lang="ts">
	import { type Icon as IconType } from 'lucide-svelte';

	type NavCardProps = {
		linkText: string;
		href: string;
		description: string;
		icon1: typeof IconType;
		icon2?: typeof IconType;
		iconSize: string;
		iconColor: string;
	};

	let {
		icon1,
		icon2,
		iconSize,
		description,
		iconColor,
		href,
		linkText
	}: NavCardProps = $props();

</script>

{#snippet navCard()}
	{@const Icon1 = icon1}
	{@const size = iconSize}
	{@const color = iconColor}
	<a {href} class="link">
		<h2 class="all-caps-600">
			{linkText.toUpperCase()}
		</h2>
	</a>
	<p class="regular-font description">{description}</p>
	<Icon1 {size} {color} />
	{#if icon2}
		{@const Icon2 = icon2}
		<Icon2 {size} {color} />
	{/if}
{/snippet}

<div class="nav-card">
	{@render navCard()}
</div>

<style>
	.nav-card {
		width: 150px;
		height: calc(150px * 1.618);
		border-radius: var(--border-radius);
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		padding: 0.25rem;
		box-shadow: 5px 5px 10px #e0e0e0;
	}

	.link {
		color: var(--purple);
	}

	.link,
	.description {
		grid-column: 1/3;
		text-align: center;
	}
</style>
