<script lang="ts">
  // Pico.css
  import '@picocss/pico/scss/pico.scss'
  import './home.scss'

  let { children } = $props()
</script>

<svelte:head>
  <title>Revance Frontend Test by Marcos Rigoli</title>
</svelte:head>

{@render children()}
