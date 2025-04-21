<script>
  import { browser } from '$app/environment'
  import TodoList from './components/todo-list.svelte'

  // Note: The TodoList component is to be used CSR only, since it depends on the localStorage for it to work properly.
</script>

{#if browser}
  <TodoList key="main" />
{/if}
