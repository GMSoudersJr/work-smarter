<script lang="ts">
	import type {TWord} from "$lib/types";

	type CapitalizeProps = {
		entries: TWord[];
	}

	let { entries }: CapitalizeProps = $props();

	function handleChange() {
		const capitalizeInputElement = document.getElementsByTagName('input').namedItem('capitalize');
		if (capitalizeInputElement) {
			const { checked } = capitalizeInputElement;

			if (checked) {
				entries.forEach(entry => entry.capitalized())
			} else {
				entries.forEach(entry => entry.word = entry.word.toLowerCase());
			}
		}
	}

</script>

<label for="capitalize" class="regular-font label">
	Capitalize
	<input
		type="checkbox"
		id="capitalize"
		onchange={handleChange}
	>
</label>

<style>
	.label {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		font-size: 0.75rem;
	}
</style>

