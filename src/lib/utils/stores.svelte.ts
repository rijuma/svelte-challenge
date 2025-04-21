export type PersistedStoreType = 'local' | 'session'

export function persistedState<T>(key: string, initial: T) {
  if (typeof window == 'undefined') {
    throw Error('Cannot use server side')
  }

  const savedStr = localStorage.getItem(key)

  let initValue: T
  if (savedStr) {
    try {
      const savedValue = JSON.parse(savedStr) as T
      initValue = savedValue
    } catch (e) {
      initValue = initial
    }
  } else {
    initValue = initial
  }

  let state: T = $state(initValue)

  $effect.root(() => {
    $effect(() => {
      localStorage.setItem(key, JSON.stringify(state))
    })
  })

  return {
    get value() {
      return state
    },

    set value(new_state) {
      state = new_state
    },

    clearlocalStorage() {
      localStorage.removeItem(key)
    },

    reset() {
      state = initial
      localStorage.removeItem(key)
    },
  }
}
