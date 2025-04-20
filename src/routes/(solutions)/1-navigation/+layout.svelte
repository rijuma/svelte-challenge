<script lang="ts">
  let { children } = $props()
</script>

<main
  class="grid place-items-center min-h-[100dvh] [background:radial-gradient(_circle_at_center_300%,var(--background-gradient-b),var(--background-gradient-b)_65%,var(--background-gradient-a)_80%,var(--background-gradient-a)_85%_)] m-0 p-0"
>
  {@render children()}
</main>

<style lang="scss">
  //
  main {
    --background-gradient-a: #000015;
    --background-gradient-b: #030c3f;

    --link-marker-thickness: 0.5rem;

    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open_Sans', 'Helvetica_Neue', sans-serif;
  }
</style>
