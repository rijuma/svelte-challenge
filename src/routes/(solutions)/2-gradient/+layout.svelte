<script lang="ts">
  let { children } = $props()
</script>

<svelte:head>
  <title>Website tests - 2. Gradient background logo (Svelte)</title>
</svelte:head>

<main
  class="min-h-[100dvh] grid place-items-center [background:linear-gradient(12deg,transparent_65%,rgb(155,186,255)_90%),linear-gradient(to_left_top,rgb(234,242,251),rgba(255,255,255,0),rgb(138,232,255)),linear-gradient(to_right_top,rgb(234,242,251)_30%,rgb(218,198,224)_65%,rgb(229,142,255))_rgb(255,255,255)]"
>
  {@render children()}
</main>

<style lang="scss">
  //
  main {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open_Sans', 'Helvetica_Neue', sans-serif;
  }
</style>
