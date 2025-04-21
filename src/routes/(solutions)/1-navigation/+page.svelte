<script lang="ts">
  import { transition } from '$lib/utils'

  type LinkData = {
    label: string
    url: string
  }

  type Link = 'animation' | 'branding' | 'illustration'

  const links: Record<Link, LinkData> = {
    animation: {
      label: 'Animation',
      url: '#animation',
    },
    branding: {
      label: 'Branding',
      url: '#branding',
    },
    illustration: {
      label: 'Illustration',
      url: '#illustration',
    },
  }

  let current = $state<Link>('branding')
</script>

<nav class="main-nav">
  <ul class="text-4xl lg:text-5xl flex flex-col lg:flex-row gap-5 lg:gap-24">
    {#each Object.entries(links) as [link, { label, url }]}
      {@const active = link === current}
      <li
        class={`
          block relative text-white no-underline font-semibold transition-opacity duration-300 pt-0 lg:pb-11 pl-6 lg:pl-0 opacity-50 hover:opacity-80
          ${active ? 'opacity-100 after:absolute after:left-0 after:top-1/2 after:h-3/4 after:w-2 after:-translate-y-1/2 lg:after:top-auto lg:after:bottom-0 lg:after:left-1/2 lg:after:-translate-x-1/2 after:bg-white after:rounded-full lg:after:h-2 lg:after:w-1/2 after:[view-transition-name:main-nav-dash]' : ''}
        `}
      >
        <a href={url} onclick={() => transition(() => (current = link as Link))}>{label}</a>
      </li>
    {/each}
  </ul>
</nav>
