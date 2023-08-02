const imageContainer = document.querySelector('.image-container');

imageContainer.animate([
    { maskPosition: '0% 0%' },
    { maskPosition: '100% 0%' }
], {
    duration: 2000,
    easing: 'steps(29)',
    iterations: Infinity,
    direction: 'alternate'
})
