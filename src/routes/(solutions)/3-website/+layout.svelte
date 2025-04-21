<script lang="ts">
  let { children } = $props()
</script>

<svelte:head>
  <title>03. Website header (Svelte)</title>
  <!-- FontAwesome solid icons -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>

<main class="bg-rose-50">
  <nav
    class="flex justify-between items-center absolute left-0 right-0 top-0 px-(--frame-spacing) pt-(--heading-spacing) text-xl font-arial z-20 text-white"
  >
    <button
      type="button"
      class="flex justify-between items-center gap-8 relative -left-2 cursor-pointer hover:underline group"
    >
      <i
        class="inline-block w-4 h-4 relative opacity-50 group-hover:opacity-100 transition-opacity"
        aria-hidden="true"
      >
        <span class="bg-white absolute inset-x-0 h-0.5 rounded-full top-0.5"></span>
        <span class="bg-white absolute inset-x-0 h-0.5 rounded-full top-1/2 -translate-y-1/2"
        ></span>
        <span class="bg-white absolute inset-x-0 h-0.5 rounded-full bottom-0.5"></span>
      </i>

      Menu
    </button>

    <ul class="flex gap-14 text-sm xl:text-black">
      <li><a href="#eng" class="font-black">ENG</a></li>
      <li><a href="#fr" class="hover:underline">FR</a></li>
    </ul>
  </nav>

  {@render children()}
</main>

<style lang="scss">
  @import url('/fonts/karlotte.css');

  :global(.font-karlotte) {
    font-family: Karlotte;
  }

  :global(.font-arial) {
    font-family: Arial, sans-serif;
  }

  :root {
    --heading-spacing: 3.5rem;
    --frame-spacing: min(8vw, 5.4rem);
  }

  main {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open_Sans', 'Helvetica_Neue', sans-serif;
    position: relative;
    min-height: 100dvh;
  }
</style>
