<script lang="ts">
	import { onMount } from 'svelte';
	import ViewTransition from './navigation.svelte';
	import '../app.css';
	import { page } from '$app/state';
	import {Footer} from '$lib/components';

	let { children } = $props();

	let newServiceWorker: ServiceWorker | null;

	async function detectServiceWorkerUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			newServiceWorker = registration.installing;

			newServiceWorker?.addEventListener('statechange', () => {
				if (newServiceWorker?.state === 'installed') {
					updateServiceWorker(newServiceWorker);
				}
			});
		});
	}

	function updateServiceWorker(newServiceWorker: ServiceWorker) {
		newServiceWorker?.postMessage({ type: 'SKIP_WAITING' });
		window.location.reload();
	}

	onMount(async () => {
		detectServiceWorkerUpdate();
	})


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

<ViewTransition />

<div class="layout-grid">

	<header class="header">
		<h1 class="all-caps-800">
			<a href="/">WORK SMARTER</a>
		</h1>
	</header>

	<main class="main">
		{@render children()}
	</main>

	<Footer />

</div>

<style>
	.layout-grid {
		display: grid;
		height: 100vh;
		grid-template-rows: min-content auto min-content;
		row-gap: 2rem;

		.main {
			height: 100%;
		}
		
	}

	.header {
		text-align: center;
		margin-top: 2rem;

		a {
			text-decoration: none;
			color: var(--purple);
		}
	}

</style>
