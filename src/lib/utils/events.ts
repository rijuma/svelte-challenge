export function prevent<E extends MouseEvent>(fn: (event?: E) => {}) {
  return function (event: E) {
    event.preventDefault()
    fn(event)
  }
}
