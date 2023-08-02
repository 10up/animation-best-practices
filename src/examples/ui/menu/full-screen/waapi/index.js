
const menu = document.getElementById('menu')
const buttons = Array.from(document.querySelectorAll('button'))
const primaryNavigationListItems = Array.from(menu.querySelectorAll('.navigation--primary li'))
const secondaryNavigationListItems = Array.from(menu.querySelectorAll('.navigation--secondary li'))

const handleButtonOnClick = () => {
  const isOpen = menu.getAttribute('data-open') === 'true'

  if (isOpen) {
    // Close
    menu.animate([
      { opacity: 0, visibility: 'hidden' }
    ], {
      duration: 200,
      easing: 'ease-in',
      fill: 'forwards'
    })
    primaryNavigationListItems.forEach((item, index) => {
      item.animate([
        { opacity: 0, transform: 'translateY(2em)' }
      ], {
        duration: 200,
        easing: 'ease-in-out',
        fill: 'forwards'
      })
    })
    secondaryNavigationListItems.forEach((item, index) => {
      item.animate([
        { opacity: 0, transform: 'translateY(1em)' }
      ], {
        duration: 200,
        easing: 'ease-in-out',
        fill: 'forwards'
      })
    })
  } else {
    // Open
    menu.animate([
      { opacity: 1, visibility: 'visible' }
    ], {
      duration: 300,
      easing: 'ease-out',
      fill: 'forwards'
    })
    primaryNavigationListItems.forEach((item, index) => {
      item.animate([
        { opacity: 1, transform: 'translateY(0)' }
      ], {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards',
        delay: index * 100
      })
    })
    secondaryNavigationListItems.forEach((item, index) => {
      item.animate([
        { opacity: 1, transform: 'translateY(0)' }
      ], {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards',
        delay: 500
      })
    })
  }

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
