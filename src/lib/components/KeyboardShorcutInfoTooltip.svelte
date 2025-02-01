<script lang="ts">
	import { Icon as IconType, InfoIcon, KeyboardIcon } from 'lucide-svelte';

	type TooltipInfo = {
		title: string;
		icon: typeof IconType;
		kbdBackspaceText: string;
		kbdShiftText: string;
		iconSize: string;
		iconColor: string;
	};

	const tooltipInfo: TooltipInfo = {
		title: 'Keyboard shortcut info',
		icon: InfoIcon,
		kbdBackspaceText: 'Backspace',
		kbdShiftText: 'Shift',
		iconSize: '1em',
		iconColor: 'var(--purple)',
	}

</script>

{#snippet tooltip()}
	{@const { kbdShiftText: shift, kbdBackspaceText: backspace } = tooltipInfo}
	{@const { title, iconColor: color, icon: Icon, iconSize: size} = tooltipInfo}
	<div
		role="tooltip"
		class="tooltip"
		{title}
	>
		<Icon {size} {color} />
		<div class="tooltip-text" inert>
			<p class="regular-font">
				Press
				<kbd>
					<kbd>{shift}</kbd> + <kbd>{backspace}</kbd>
				</kbd>
				to remove last entry.
			</p>
		</div>
	</div>
{/snippet}

{@render tooltip()}

<style>
	.tooltip {
		width: fit-content;
		height: fit-content;
		border-radius: 50%;
		position: relative;
		display: flex;
		font-size: 0.75rem;

		.tooltip-text {
			visibility: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 2.5rem;
			width: 18rem;
			color: #000;
			text-align: center;
			padding: 0 0.5rem;
			border-radius: var(--border-radius);
			background-color: var(--pastel-purple);
			opacity: 0.9;

			position: absolute;
			top: -122%;
			right: 1.7rem;
			z-index: 1;

			&::after {
				content: "";
				border-width: 10px;
				border-style: solid;
				border-color: transparent;
				border-left: 15px solid var(--pastel-purple);

				position: absolute;
				transform: translate(9.7rem, 0px);
			}
		}

		kbd > kbd {
			border-radius: 3px;
			background-color: #eee;
			padding: 2px 4px;
			border: 1px solid #b4b4b4;
			box-shadow:
				0 1px 1px rgba(0, 0, 0, 0.2),
				0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
			color: #333;
			display: inline-block;
			font-size: 0.85em;
			line-height: 1;
			white-space: nowrap;
		}
	}

	.tooltip:hover {

		.tooltip-text {
			visibility: visible;
		}
	}

</style>

