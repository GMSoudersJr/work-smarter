<script lang="ts">
	import { NavCard } from '$lib/components';
	import { TimerIcon, ShuffleIcon, type Icon as IconType } from 'lucide-svelte';

	type TNavCard = {
		linkText: string;
		href: string;
		description: string;
		icon1: typeof IconType;
		icon2?: typeof IconType;
		iconSize: string;
		iconColor: string;
	};

	const navCard: TNavCard = {
		linkText: 'Randomizer',
		href: '/randomizer',
		icon1: TimerIcon,
		icon2: ShuffleIcon,
		description: `Quickly randomize a list as you enter it, simply click to copy`,
		iconSize: '3em',
		iconColor: 'var(--purple)'
	};

	const navCards = [navCard];
</script>

<section class="home-page">
	<h2 class="header all-caps-600">
		Apps to <span class="underline">Optimize</span> Your Work
	</h2>

	<nav class="nav-grid">
		{#each navCards as navCard (navCard.href)}
			{@const { description, icon1, icon2, iconSize, iconColor, href, linkText } = navCard}
			<NavCard {description} {icon1} {icon2} {href} {linkText} {iconSize} {iconColor} />
		{/each}
	</nav>

</section>

<style>
	.home-page {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		row-gap: 2rem;
		margin-top: 2rem;
	}

	.header {
		grid-column: 1/13;
		place-self: center;
	}

	.underline {
		text-decoration: underline;
		text-decoration-color: var(--yellow);
	}

	.nav-grid {
		grid-column: 1/13;
		place-self: center;
	}
</style>
