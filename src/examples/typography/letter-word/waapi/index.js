import Splitting from "splitting";

Splitting();
const duration = 5000;

const words = document.querySelectorAll('[data-splitting="words"] .word');
words.forEach((element, index) => {
    element.animate([
        { opacity: 0 },
        { opacity: 1 },
    ], {
        duration, 
        delay: index *  duration / words.length,
        fill: 'both',
        iterations: Infinity,
        direction: 'alternate'
    })
})

const chars = document.querySelectorAll('[data-splitting="chars"] .char');
chars.forEach((element, index) => {
    element.animate([
        { opacity: 0 },
        { opacity: 1 },
    ], {
        duration, 
        delay: index *  duration / chars.length,
        fill: 'both',
        iterations: Infinity,
        direction: 'alternate'
    })
})

const lines = document.querySelectorAll('[data-splitting="lines"] .word');
lines.forEach((element) => {
    const index = parseInt(element.style.getPropertyValue('--line-index'));

    element.animate([
        { opacity: 0 },
        { opacity: 1 },
    ], {
        duration, 
        delay: index *  duration / lines.length,
        fill: 'both',
        iterations: Infinity,
        direction: 'alternate'
    })
})