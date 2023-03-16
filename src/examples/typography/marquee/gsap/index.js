import gsap from "gsap"

const marqueeContents = document.querySelectorAll('.marquee__content')

gsap.to(marqueeContents, {
    xPercent: -100,
    duration: 60,
    ease: 'linear',
    repeat: -1
})