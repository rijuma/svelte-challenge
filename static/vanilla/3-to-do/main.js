function randId() {
  return +`${Math.random()}`.split('.')[1]
}

const LS_KEY = 'todo-app'

class TodoApp {
  #controller = null
  #ref = null
  #list = null

  #loadData = () => {
    // Loads the data fron the local storage or initializes it with the default values.

    const json = localStorage.getItem(LS_KEY)

    if (json) {
      const parse = ({ id, label }) => ({ id: +id || randId(), label })

      try {
        const { done, pending } = JSON.parse(json)

        console.log({ done, pending })

        this.#list = {
          done: done.map((item) => parse(item)),
          pending: pending.map((item) => parse(item)),
        }
      } catch (e) {
        // Oh well..
        console.warn('Unable to load app saved state. Discarding...')
      }
    }

    // If there's no saved state, then we set the example data.
    if (!this.#list)
      this.#list = {
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
  }

  #saveData = () => {
    const json = JSON.stringify(this.#list)
    console.log({ json })
    localStorage.setItem(LS_KEY, json)
  }

  #renderHeader = () => {
    const date = new Date()

    const monthNode = this.#ref.querySelector('header .month')
    monthNode.innerHTML = date.toLocaleString('default', { month: 'long' })

    const dateNode = this.#ref.querySelector('header .date')
    dateNode.innerHTML = date.toLocaleString('default', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })
  }

  get #form() {
    return this.#ref.querySelector('.app form.add-todo')
  }

  get #formInput() {
    return this.#ref.querySelector('.app form.add-todo input')
  }

  get #listElem() {
    return this.#ref.querySelector('.app .list')
  }

  #bindEvents = async () => {
    // Bind form submit.
    this.#form.addEventListener(
      'submit',
      async (e) => {
        e.preventDefault()

        const form = e.target
        const data = new FormData(form)
        const task = data.get('task')

        if (!task) return

        this.#list.pending.push({
          id: randId(),
          label: task,
        })

        form.reset()

        this.#formInput.focus()

        await this.#render()
      },
      { signal: this.#controller.signal },
    )

    // Bind li element behavior.
    this.#listElem.addEventListener(
      'click',
      (e) => {
        let li = e.target.closest('li')

        if (!li) return

        const id = +li.dataset.id

        if (li.classList.contains('done')) {
          // If it's done, we remove it.
          this.#list.done = this.#list.done.filter((i) => i.id !== id)
          return this.#render()
        }

        // Otherwise we move it to the done list.
        const item = this.#list.pending.find((i) => i.id === id)

        if (!item) {
          console.warn(`Couldn't find item with id="${id}".`)
          return
        }

        this.#list.pending = this.#list.pending.filter((i) => i.id !== item.id)
        this.#list.done.push(item)

        return this.#render()
      },
      { signal: this.#controller.signal },
    )
  }

  #renderEmpty = () => {
    this.#listElem.innerHTML = '<li class="empty">(To do task list is empty)</li>'
  }

  #updateDOM = () => {
    this.#listElem.innerHTML = ''

    this.#saveData() // This probably shouldn't be here, but it's just a prototype..

    const { done, pending } = this.#list

    if (!done.length && !pending.length) return this.#renderEmpty()

    const drawItem = ({ id, label }, done) => {
      const li = document.createElement('li')
      li.dataset.id = id
      li.style.viewTransitionName = `todo${id}`
      if (done) li.classList.add('done')
      const icon = done
        ? '<i class="fa-regular fa-face-smile"></i>'
        : '<i class="fa-regular fa-face-meh"></i>'

      const ariaLabel = done ? `${label}. Completed. Action will remove the item.` : `${label}. Pending. Action will mark the item as Done.`
      li.innerHTML = `
          <button type="button" aria-label="${ariaLabel}">
            <span class="label">${label}</span>
            <span class="status">
              ${icon}
            </span>
          </button>
        `
      this.#listElem.appendChild(li)
    }

    done.forEach((item) => {
      drawItem(item, true)
    })
    pending.forEach((item) => {
      drawItem(item, false)
    })
  }

  #render = async (animate = true) => {
    if (animate) return transition(() => this.#updateDOM())

    return this.#updateDOM()
  }

  #init = () => {
    // Binds event listeners.
    this.#bindEvents()

    // Write the date on the header.
    this.#renderHeader()

    // Load / Initialize ToDo data.
    this.#loadData()

    // Call the draw function to update the to do list.
    this.#render(false)
  }

  constructor(ref) {
    if (!ref) throw 'Could not initialize app.'

    this.#ref = ref
    this.#controller = new AbortController()

    this.#init()
  }

  cleanup = () => {
    // Unbinds all remaining event listeners.
    this.#controller.abort()
  }
}

// --

// This calls the browser's transition API before and after the DOM update within the update function parameter.
async function transition(update) {
  if (document?.startViewTransition) {
    const transition = document.startViewTransition(() => update())
    await transition.finished
  } else {
    update()
  }
}

let appInstance

function init() {
  const app = document.querySelector('.app')

  appInstance = new TodoApp(app)
}

function cleanup() {
  appInstance.cleanup() // Cleanup app
}

window.addEventListener('load', init)
window.addEventListener('beforeunload', cleanup)
