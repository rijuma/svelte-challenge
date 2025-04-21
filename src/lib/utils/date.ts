export function getMonthName() {
  const date = new Date()

  return date.toLocaleString('default', { month: 'long' })
}

export function getLongDate() {
  const date = new Date()

  return date.toLocaleString('default', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
}
