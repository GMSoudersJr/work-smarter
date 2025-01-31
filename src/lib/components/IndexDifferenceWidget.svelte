<script lang="ts">
	import {
		MoveUpIcon,
		MoveDownIcon,
		MoveHorizontalIcon,
		Icon as IconType
	} from "lucide-svelte";

	interface Props {
		indexDifference?: number;
	}
	
	type TDifferenceIcon = {
		icon: typeof IconType;
		size: string;
		color: string;
	}

	let { indexDifference }: Props = $props();

	const iconSize: string = '1em';

	const positiveDifference: TDifferenceIcon = {
		icon: MoveUpIcon,
		size: iconSize,
		color: 'var(--green)'
	}

	const negativeDifference: TDifferenceIcon = {
		icon: MoveDownIcon,
		size: iconSize,
		color: 'var(--purple)'
	}

	const noDifference: TDifferenceIcon = {
		icon: MoveHorizontalIcon,
		size: iconSize,
		color: 'var(--red)'
	}

</script>

{#snippet differenceWidget(differenceIcon: TDifferenceIcon)}
	{@const {icon: Icon, size, color} = differenceIcon}
	{#if indexDifference && indexDifference > 0}
		+{indexDifference}
		{:else}
			{indexDifference}
	{/if}
	<Icon {size} {color} strokeWidth={3}/>
{/snippet}

{#key indexDifference}
	<div class="index-difference-widget">
		{#if indexDifference || indexDifference === 0}
			{#if indexDifference > 0}
				{@render differenceWidget(positiveDifference)}
			{:else if indexDifference < 0}
				{@render differenceWidget(negativeDifference )}
			{:else}
				{@render differenceWidget(noDifference)}
			{/if}
		{/if}
	</div>
{/key}

<style>
	.index-difference-widget {
		font-size: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
</style>

