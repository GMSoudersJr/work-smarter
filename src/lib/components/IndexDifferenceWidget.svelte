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
		strokeWidth: number;
	}

	let { indexDifference }: Props = $props();

	const iconSize: string = '1em';
	const strokeWidth: number = 3;

	const positiveDifference: TDifferenceIcon = {
		icon: MoveUpIcon,
		size: iconSize,
		color: 'var(--green)',
		strokeWidth: strokeWidth,
	}

	const negativeDifference: TDifferenceIcon = {
		icon: MoveDownIcon,
		size: iconSize,
		color: 'var(--purple)',
		strokeWidth: strokeWidth,
	}

	const noDifference: TDifferenceIcon = {
		icon: MoveHorizontalIcon,
		size: iconSize,
		color: 'var(--red)',
		strokeWidth: strokeWidth,
	}

</script>

{#snippet differenceWidget(differenceIcon: TDifferenceIcon)}
	{@const {icon: Icon, size, color, strokeWidth} = differenceIcon}
	{#if indexDifference && indexDifference > 0}
		+{indexDifference}
		{:else}
			{indexDifference}
	{/if}
	<Icon {size} {color} {strokeWidth} />
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
		gap: 0.06125rem;
	}
</style>

