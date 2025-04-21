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

<div class={`[view-transition-name:todo-app-${key}]`}>
  <header>
    <h1 class="month">{monthName}</h1>
    <h4 class="date">{fullDate}</h4>
  </header>
  <div class="body">
    <ul class="list" aria-live="polite">
      {#each data.value.done as { id, label }}
        <li style={`view-transition-name: todo-${id}`}>
          <button
            type="button"
            onclick={() => handleDoneClick(id)}
            aria-label={`${label}. Completed. Action will remove the item.`}
          >
            <span>{label}</span>
            <span><i class="fa-regular fa-face-smile"></i></span>
          </button>
        </li>
      {/each}
      {#each data.value.pending as { id, label }}
        <li style={`view-transition-name: todo-${id}`}>
          <button
            type="button"
            onclick={() => handlePendingClick(id)}
            aria-label={`${label}. Pending. Action will mark the item as Done.`}
          >
            <span>{label}</span>
            <span><i class="fa-regular fa-face-meh"></i></span>
          </button>
        </li>
      {/each}
    </ul>
    <form class="add-todo" onsubmit={handleSubmit}>
      <!-- svelte-ignore a11y_autofocus -->
      <input type="text" bind:value={form.task} placeholder="Add Task" autofocus />
      <div class="action">
        <button type="submit" class="submit">Add</button>
      </div>
    </form>
  </div>
</div>
