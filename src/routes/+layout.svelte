<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import '../app.css';
	import { page } from '$app/state';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<title>{page.data.title}</title>
	<meta name="description" content={page.data.description} />
	<meta property="og:title" content={page.data.title} />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={page.data.description} />
	<meta property="og:image" content={page.data.ogImageUrl} />
	<meta property="og:image:alt" content="work smarter" />
	<meta property="og:url" content={page.url.href} />
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:title" content="work smarter" />
	<meta property="twitter:description" content="work smarter apps" />
	<meta property="twitter:image" content={page.data.ogImageUrl} />
</svelte:head>

<h1 class="all-caps-800 header">
	<a href="/"> WORK SMARTER </a>
</h1>

<main>
	{@render children()}
</main>

<style>
	.header {
		text-align: center;
		margin-bottom: 2rem;

		a {
			text-decoration: none;
			color: var(--purple);
		}
	}
</style>
