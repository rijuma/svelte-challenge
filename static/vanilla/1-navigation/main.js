// This calls the browser's transition API before and after the DOM update within the update function parameter.
async function transition(update) {
  if (document?.startViewTransition) {
    const transition = document.startViewTransition(() => update())
    await transition.finished
  } else {
    update()
  }
}

async function handleMenuClick(event) {
  event.preventDefault()
  const wrapperLi = event.target?.parentNode

  // Skip action if the active element is the active one.
  if (!wrapperLi || wrapperLi.classList.contains('active')) return

  await transition(() => {
    // Remove the active
    const activeLi = document.querySelector('.main-nav li.active')
    activeLi?.classList.remove('active')

    wrapperLi.classList.add('active')
  })
}

// --

const controller = new AbortController()
const signal = controller.signal

function init() {
  const links = document.querySelectorAll('.main-nav li a')

  links.forEach((link) => {
    link.addEventListener('click', handleMenuClick, { signal })
  })

  // Let's add a class if viewTransitions is not supported by the browser.
  if (!document?.startViewTransition) document.documentElement.classList.add('no-vt')
}

function cleanup() {
  controller.abort() // Event binding cleanup.
}

window.addEventListener('load', init)
window.addEventListener('beforeunload', cleanup)
