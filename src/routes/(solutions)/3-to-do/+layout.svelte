<script lang="ts">
  let { children } = $props()
</script>

<svelte:head>
  <title>04. To do application (Svelte)</title>
  <!-- FontAwesome regular icons -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>

<main class="min-h-[100dvh] grid place-items-center p-4 bg-stone-100">
  {@render children()}
</main>

<style lang="scss">
  //
  main {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open_Sans', 'Helvetica_Neue', sans-serif;
  }
</style>
