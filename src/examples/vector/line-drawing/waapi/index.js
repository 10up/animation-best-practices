const elements = document.querySelectorAll('.logo, .ports, .outline')

elements.forEach(element => {
  element.animate([
    {
      strokeDashoffset: 1
    },
    {
      strokeDashoffset: 0
    }
  ],
  {
    duration: 5000,
    easing: 'ease',
    iterations: Infinity,
    direction: 'alternate'
  })
})
