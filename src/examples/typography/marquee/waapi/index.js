const marqueeContents = document.querySelectorAll('.marquee__content')

marqueeContents.forEach(marqueeContent => {
    marqueeContent.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(calc(-100% - var(--gap)))' }
    ], {
        duration: 1000 * 60, // 60 seconds
        easing: 'linear',
        iterations: Infinity,
    })
})