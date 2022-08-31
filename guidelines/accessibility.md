---
sidebar_label: Accessibility
---

# Accessibility

Not every animation brings pleasure to the end user. In some cases motion can trigger harmful reactions from users with vestibular disorders, epilepsy or even migraines.

## prefers-reduced-motion

The `prefers-reduced-motion` CSS media query [has wide support](https://caniuse.com/prefers-reduced-motion), so we recommend using it on all projects. Remember, `prefers-reduced-motion` does not have mean to use [_no motion_ at all](https://css-tricks.com/nuking-motion-with-prefers-reduced-motion/), although it certainly _can_ mean no motion. Ideally, you should be crafting your media queries to modify the motion so that it is friendlier for people with vestibular disorders, but that still modify the UI in a meaningful way to help users retain context or other benefits that help reduce cognitive load.

Here is an example using CSS:

```css
.animation {
    animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
    .animation {
        animation-duration: 1s;
    }
}
```

Remember, media queries are also available in JavaScript:

```js
const duration = (window.matchMedia('(prefers-reduced-motion: reduce)').matches) ? 1000 : 300;

element.animate([{ opacity: 0 }, { opacity: 1 }], { duration });
```

Read more about [creating accessible animations](https://alistapart.com/blog/post/more-resources-for-accessible-animations).

## WCAG requirements

Additionally, all motion enhancements are expected to meet [WCAG AA accessibility requirements](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa) including, but not limited to, [color contrast](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa#contrast-minimum), [visible focus](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa#focus-visible), [tabbed navigation](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa#navigable), [three flashes](https://www.w3.org/WAI/WCAG21/quickref/#three-flashes-or-below-threshold), and [logical dom order](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa#focus-order). Always test with real users, if possible. Some people are also more susceptible to certain types of animation when used with controls like scrolling.

Additionally, [WCAG 2.1, Guideline 2.3.2 Motion from Animation](https://www.w3.org/WAI/WCAG21/quickref/#animation-from-interactions) dictates that, "Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed."

## Some other helpful tips

Do not:

-   Use 'hover' as the only method to reveal content.
-   Require animation to view / interact with the page, page components.

Do:

-   Make sure that `prefers-reduced-motion` is used to modify animations for people with discorders or motion sickness.
-   Make sure all content is accessible and navigable by assistive technologies, or strategically provide an assistive alternative experience.