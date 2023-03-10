
const menu = document.getElementById('menu')
const buttons = Array.from(document.querySelectorAll('button'))

const handleButtonOnClick = () => {
  const isOpen = menu.getAttribute('data-open') === 'true'

  menu.setAttribute('data-open', !isOpen)
  menu.setAttribute('aria-hidden', isOpen)
  buttons.forEach((button) => {
    button.setAttribute('aria-expanded', !isOpen)
  })
}

const setup = () => {
  menu.setAttribute('data-open', false)
  menu.setAttribute('aria-hidden', true)

  buttons.forEach((button) => {
    button.setAttribute('aria-controls', menu.id)
    button.setAttribute('aria-expanded', false)
  })
}

const bind = () => {
  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonOnClick)
  })
}

const init = () => {
  setup()
  bind()
}

init()
