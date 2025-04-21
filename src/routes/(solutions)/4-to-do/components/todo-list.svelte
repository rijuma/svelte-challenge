<script lang="ts">
  import { persistedState, randId, transition } from '$lib/utils'
  import { getLongDate, getMonthName } from '$lib/utils/date'

  type Props = {
    key: string
  }
  let { key }: Props = $props()

  type TodoItem = {
    id: number
    label: string
  }

  type TodoListData = {
    done: TodoItem[]
    pending: TodoItem[]
  }

  const initialData: TodoListData = {
    done: [
      {
        id: randId(),
        label: 'Buy now sweatshirt',
      },
      {
        id: randId(),
        label: 'Read an article',
      },
    ],
    pending: [
      {
        id: randId(),
        label: 'Write blog post',
      },
      {
        id: randId(),
        label: 'Watch "Mr Robot"',
      },
      {
        id: randId(),
        label: 'Run',
      },
    ],
  }

  let data = persistedState<TodoListData>(`todo-app-${key}`, initialData)
  let form = $state({ task: '' })

  const monthName = getMonthName()
  const fullDate = getLongDate()

  const handleDoneClick = async (id: number) => {
    await transition(() => {
      data.value.done = data.value.done.filter((i) => i.id !== id)
    })
  }
  const handlePendingClick = async (id: number) => {
    // Fetch item.
    const item = data.value.pending.find((i) => i.id === id)

    if (!item) {
      console.warn(`Couldn't find item with id="${id}".`)
      return
    }

    await transition(() => {
      // Remove from pending.
      data.value.pending = data.value.pending.filter((i) => i.id !== item.id)

      // Append to Done.
      data.value.done.push(item)
    })
  }
  const handleSubmit = async () => {
    await transition(() => {
      const item = {
        id: randId(),
        label: form.task,
      }

      // Append to Pending.
      data.value.pending.push(item)

      // Clear form
      form.task = ''
    })
  }
</script>

<div class={`min-w-80 max-sm:w-full shadow-md bg-white [view-transition-name:todo-app-${key}]`}>
  <header class="flex flex-col gap-4 p-8 border-b-4 border-slate-100 text-center">
    <h1 class="text-4xl font-bold text-zinc-600 m-0">
      {monthName}
    </h1>
    <h4 class="text-sm text-indigo-300 font-bold m-0">{fullDate}</h4>
  </header>
  <div class="flex flex-col min-h-72 justify-between gap-8 px-4 pt-4 pb-8">
    <ul class="flex flex-col text-sm" aria-live="polite">
      {#each data.value.done as { id, label }}
        <li style={`view-transition-name: todo-${id}`} class="-mx-4">
          <button
            type="button"
            onclick={() => handleDoneClick(id)}
            aria-label={`${label}. Completed. Action will remove the item.`}
            class="flex justify-between w-full items-center py-1 px-4 cursor-pointer transition-colors"
          >
            <span class="opacity-25 line-through">{label}</span>
            <span class="text-emerald-400 text-xl"><i class="fa-regular fa-face-smile"></i></span>
          </button>
        </li>
      {/each}
      {#each data.value.pending as { id, label }}
        <li style={`view-transition-name: todo-${id}`} class="-mx-4">
          <button
            type="button"
            onclick={() => handlePendingClick(id)}
            aria-label={`${label}. Pending. Action will mark the item as Done.`}
            class="flex justify-between w-full items-center py-1 px-4 cursor-pointer transition-colors"
          >
            <span>{label}</span>
            <span class="opacity-25 text-xl"><i class="fa-regular fa-face-meh"></i></span>
          </button>
        </li>
      {/each}
    </ul>
    <form class="flex sm:flex-col justify-between items-center gap-2" onsubmit={handleSubmit}>
      <!-- svelte-ignore a11y_autofocus -->
      <input
        autofocus
        type="text"
        bind:value={form.task}
        placeholder="Add Task"
        class="border-black/15 w-full placeholder:text-indigo-300"
      />
      <div class="sm:relative">
        <button
          type="submit"
          class="bg-emerald-400 rounded-full py-2 px-4.5 font-bold text-white sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-3 sm:px-10"
          >Add</button
        >
      </div>
    </form>
  </div>
</div>
