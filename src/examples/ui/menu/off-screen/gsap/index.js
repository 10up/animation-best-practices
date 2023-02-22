import gsap from 'gsap'

const menu = document.getElementById('menu')
const buttons = Array.from(document.querySelectorAll('button'))

const handleButtonOnClick = () => {
  const isOpen = menu.getAttribute('data-open') === 'true'

  if (isOpen) {
    // Close
    const tl = gsap.timeline()

    tl.to(menu, { autoAlpha: 0, duration: 0.2, xPercent: -100, ease: 'power1.in' }, 'start')
    tl.to('.navigation--primary li', { opacity: 0, x: '-2em', duration: 0.2, ease: 'power1.inOut' }, 'start')
    tl.to('.navigation--secondary li', { opacity: 0, x: '-1em', duration: 0.2, ease: 'power1.inOut' }, 'start')
  } else {
    // Open
    const tl = gsap.timeline()

    tl.fromTo(menu, { autoAlpha: 0 }, { autoAlpha: 1, xPercent: 0, duration: 0.3, ease: 'power1.out' }, 'start')
    tl.to('.navigation--primary li', { opacity: 1, x: '0em', duration: 0.3, ease: 'power1.inOut', stagger: 0.1 }, 'start')
    tl.to('.navigation--secondary li', { opacity: 1, x: '0em', duration: 0.3, ease: 'power1.inOut' })
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
