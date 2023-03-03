import gsap from 'gsap'

const tl = gsap.timeline({ yoyo: true, repeat: Infinity })

tl.fromTo(
  '.logo, .ports, .outline',
  { strokeDashoffset: 1 },
  { strokeDashoffset: 0, duration: 5, autoRound: false }
)
