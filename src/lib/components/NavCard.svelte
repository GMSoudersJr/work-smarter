<script lang="ts">
  import { type Icon as IconType } from "lucide-svelte";

  type NavCard = {
    linkText: string;
    href: string;
    description: string;
    icon1: typeof IconType;
    icon2?: typeof IconType;
    iconSize: string;
    iconColor: string;
  }

  let { icon1, icon2, iconSize, description, iconColor, href, linkText }: NavCard = $props();
</script>

<div class="nav-card">
  {#if href}
    {@const Icon1 = icon1}
    {@const Icon2 = icon2}
    {@const size = iconSize}
    {@const color = iconColor}
    <a href={href} class="link">
      <h2 class="all-caps-600">
        {linkText.toUpperCase()}
      </h2>
    </a>
    <p class="regular-font description">{description}</p>
    <Icon1 {size} {color}/>
    <Icon2 {size} {color}/>
  {/if}
</div>

<style>
  .nav-card {
    width: 150px;
    height: calc(150px * 1.618);
    border-radius: var(--border-radius);
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    padding: 0.25rem;
    background-color: #e0e0e0;
  }

  .link {
    color: var(--purple);
  }

  .link, .description {
    grid-column: 1/3;
    text-align: center;
  }

</style>

