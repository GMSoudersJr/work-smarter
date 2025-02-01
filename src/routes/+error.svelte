<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="error-page">
	<h1 class="all-caps-800">{page.status}: {page.error?.message.toUpperCase()}</h1>
	<p class="regular-font">The page you are looking for does not exist</p>
</div>

<style>
	.error-page {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		place-self: center;
	}
</style>
