/**
 * Debounce functions for better performance
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn The function to debounce
 */
function debounce (fn) {
  // Setup a timer
  let timeout

  // Return a function to run debounced
  return function () {
    // Setup the arguments
    const context = this
    const args = arguments

    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout)
    }

    // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function () {
      fn.apply(context, args)
    })
  }
}

const illustration = document.getElementById('illustration')

let isIllustrationVisible = false

const handleWindowOnScroll = debounce(() => {
  // Bail early.
  // Only will run if the object is on screen.
  if (!isIllustrationVisible) {
    return
  }

  const rect = illustration.getBoundingClientRect()
  const { top, height } = rect
  const percent = Math.abs(top / height) * 100

  // Update the style custom properties
  illustration.style.setProperty('--offset', percent)
})

const setup = () => {
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const { intersectionRatio } = entry

      // Is it in the viewport?
      isIllustrationVisible = (intersectionRatio > 0)
    })
  }
  const options = {
    rootMargin: '0px 0px',
    threshold: 0
  }

  const observer = new IntersectionObserver(callback, options)

  observer.observe(illustration)
}

const bind = () => {
  window.addEventListener('scroll', handleWindowOnScroll)
}

const init = () => {
  setup()
  bind()
}

init()
