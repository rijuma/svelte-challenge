/**
 * Creates a Vew Transition based on the previous and after DOM states.
 * @param update Function that updates the DOM.
 */
export async function transition(update: () => {}) {
  if (document?.startViewTransition) {
    const transition = document.startViewTransition(() => update())
    await transition.finished
  } else {
    update()
  }
}
