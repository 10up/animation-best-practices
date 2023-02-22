import Accordion from '@10up/component-accordion'
import gsap from 'gsap'

const handleDocumentClick = ({ target }) => {
  const header = target.closest('.accordion-header')

  if (!header) {
    return
  }

  const isActive = target.classList.contains('is-active')
  const content = document.querySelector(`.accordion-content[aria-labelledby="${header.id}"]`)

  if (isActive) {
    gsap.to(content, { height: 'auto', duration: 1 })
  } else {
    gsap.to(content, { height: 0, duration: 1 })
  }
}

// eslint-disable-next-line no-new
new Accordion('.accordion')

document.addEventListener('click', handleDocumentClick)
