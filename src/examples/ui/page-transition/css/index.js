import Swup from 'swup'
import SwupA11yPlugin from '@swup/a11y-plugin'
import SwupBodyClassPlugin from '@swup/body-class-plugin'

// eslint-disable-next-line no-unused-vars
const swup = new Swup({
  containers: ['#container'],
  plugins: [new SwupA11yPlugin(), new SwupBodyClassPlugin()]
})
