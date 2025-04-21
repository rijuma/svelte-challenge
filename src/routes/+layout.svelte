<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { LayoutData } from './$types'
  import '../app.css'

  let { data, children }: { data: LayoutData; children: Snippet } = $props()
</script>

<svelte:head>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

{@render children()}
