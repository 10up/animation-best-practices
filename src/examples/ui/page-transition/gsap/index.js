import gsap from 'gsap'
import Swup from 'swup'
import SwupA11yPlugin from '@swup/a11y-plugin'
import SwupBodyClassPlugin from '@swup/body-class-plugin'
import SwupJsPlugin from '@swup/js-plugin'

const options = [
  {
    // `from` and `to` allows different animations depending on the page coming from and page going to.
    from: '(.*)',
    to: '(.*)',
    // Page unload
    out: (next) => {
      // `next` tells the script to proceed with loading the next page after.
      const tl = gsap.timeline({ onComplete: next })

      tl.to('.transition-navigation', {
        yPercent: -200,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      }, 'start')
      tl.to('.transition-content', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      }, 'start')
      tl.fromTo('.transition-overlay', {
        xPercent: -100
      }, {
        xPercent: 0,
        duration: 0.5,
        ease: 'linear'
      })
    },
    // Page load
    in: (next) => {
      // `next` lets the script know our animation has completed.
      const tl = gsap.timeline({ onComplete: next })

      tl.fromTo('.transition-overlay', {
        xPercent: 0
      }, {
        xPercent: 100,
        duration: 0.5,
        ease: 'linear',
        delay: 1
      }, 'start')
      tl.fromTo('.transition-navigation', {
        yPercent: -200,
        opacity: 0
      }, {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      }, 'end')
      tl.fromTo('.transition-content', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      }, 'end')
    }
  }
]

// eslint-disable-next-line no-unused-vars
const swup = new Swup({
  containers: ['#container'],
  plugins: [
    new SwupA11yPlugin(),
    new SwupBodyClassPlugin(),
    new SwupJsPlugin(options)
  ]
})

// Reset overlay on page load
// Keeps these styles solely with GSAP
gsap.set('.transition-overlay', { xPercent: -100 })
