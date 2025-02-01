<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="error-page">
	<h2 class="all-caps-800">{page.status}: {page.error?.message.toUpperCase()}</h2>
	<p class="regular-font">The page you are looking for does not exist</p>
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
