<script lang="ts">
  let { children } = $props()
</script>

<svelte:head>
  <title>04. To do application (Svelte)</title>
  <!-- FontAwesome regular icons -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/fontawesome.min.css"
    integrity="sha512-v8QQ0YQ3H4K6Ic3PJkym91KoeNT5S3PnDKvqnwqFD1oiqIl653crGZplPdU5KKtHjO0QKcQ2aUlQZYjHczkmGw=="
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
