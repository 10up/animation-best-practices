import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const setup = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#illustration',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })

  gsap.utils.toArray('[data-speed]').forEach(layer => {
    const speed = layer.dataset.speed
    const movement = (layer.offsetHeight * speed)
    tl.to(layer, { y: movement, ease: 'none' }, 0)
  })
}

const init = () => {
  setup()
}

init()
