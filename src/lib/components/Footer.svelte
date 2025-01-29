<script lang="ts">
	import { Socials } from '$lib/components';
	import { CopyrightIcon, type Icon as IconType } from 'lucide-svelte';

	type IconProps = {
		icon: typeof IconType;
		iconSize: string;
		iconColor: string;
	}

	const thisYear = () => {
		const date = new Date(Date.now());
		return date.getFullYear();
	};

	const copyrightIcon: IconProps = {
		icon: CopyrightIcon,
		iconSize: '1em',
		iconColor: 'var(--purple)'
	}

	const copyrightText = `${thisYear()} by Gerald M. Souders Jr.`;
</script>

{#snippet icon(iconProps: IconProps)}
	{@const { icon: Icon, iconSize: size } = iconProps}
	<Icon {size} />
{/snippet}

<footer class="footer">
	<Socials />
	<span>
		{@render icon(copyrightIcon)}
		<p class="regular-font">
			{copyrightText}
		</p>
	</span>
</footer>

<style>
	.footer {
		width: 100%;
		text-align: center;
		color: var(--colorCharcoal);
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5rem;

		span {
			display: flex;
			align-items: center;
		}

		p {
			line-height: 1.5rem;
		}
	}

</style>
