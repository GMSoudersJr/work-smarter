<script lang="ts">
	import { page } from '$app/state';

	let { status, error } = page;

	let paragraph = status >= 500 ? "Oops! Server error" : "Hmm! Not today";
</script>

<div class="error-page">
	{#if error}
		<h2 class="all-caps-800">{status}: {error.message.toUpperCase()}</h2>
		<p class="regular-font">{paragraph}</p>
	{/if}
</div>

<style>
	.error-page {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		place-self: center;

		h2 {
			color: var(--red);
		}
	}
</style>
