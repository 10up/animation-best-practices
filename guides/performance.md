---
sidebar_label: Performance
---

# Performance

Writing performant motion and animation is critical in crafting high quality user experiences. Below are several strategies that will help enhance performance when using motion.

For clean and reliable animation without jitters or stutters, maintain at least 60fps. To test fps with animations, use chrome devtools performance tab (green bar at its highest point is 60fps):

![Google devtools animation FPS](https://internal.10up.com/docs/wp-content/uploads/sites/8/2020/04/image13.png)
*Google devtools animation FPS*

Keep in mind that different devices may have different framerates for their displays. Variable refresh, Apple's ProMotion, and high refresh rate displays can all play a factor in what framerate the browser actually animates at.

Excessive and simultaneous animations can cause performance issues. Additionally, if the browser is working excessively on other scripts while also attempting to animate various elements, this will also cause percieved performance issues. Consider moving scripts off the main thread with service workers, optimizing, or reducing the scripts being run.

## CSS

Simple animations (primarily using `transform` and `opacity`) have the lowest impact on performance. 

For example, do not animate position using `top`, `right`, `bottom`, or `left` properties or size using `width` and `height`. Instead, use `transforms` for better performance. You can find a complete list of properties in CSS that trigger layout or paint and in which browsers at [CSS Triggers](https://csstriggers.com/). Sticking with properties that only update the composite will yeild the best performance. Additionally, specifying which properties will transition with `transition-property` can also help the browser optimize your transition.

Avoid things like:

```css
#menu li{
  left: 0;
  transition: all 1s ease-in-out;
}
#menu li:hover {
  left: 10px
}
```

### will-change

Using `will-change` alerts the browser what you plan to animate and allocates resources appropriately and can enhance fps and performance for a particular animation, but should be used with clear intent. When possible, do not use `will-change: auto` and instead use a specific value to the impending animation. Applying `will-change`, however,  to too many elements on a page will over utilize browser resources and negatively impact performance. Therefore, use sparingly and/or use scripts to toggle `will-change` on or off before and after animation change occurs. 

-   <https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/>
-   <https://developer.mozilla.org/en-US/docs/Web/CSS/will-change>

## CSS versus JavaScript

It's a common belief that CSS animations are more performant than JavaScript animations. A few articles aimed to set the record straight (linked below).

-   If you're only animating simple state changes and need good mobile support, go for CSS (most cases).
-   If you need more complex animations, use a JavaScript animation framework (such as GSAP or anime.js) or `requestAnimationFrame`.

For more reading on the topic, refer to these articles:
-   [CSS animations performance: the untold story](https://greensock.com/css-performance)
-   [Myth Busting: CSS Animations vs. JavaScript](https://css-tricks.com/myth-busting-css-animations-vs-javascript/)
-   [CSS vs. JS Animation: Which is Faster?](https://davidwalsh.name/css-js-animation)
-   [Why Moving Elements With Translate() Is Better Than Pos:abs Top/left](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/)
-   [CSS vs JavaScript Animations](https://developers.google.com/web/fundamentals/look-and-feel/animations/css-vs-javascript?hl=en)

## JavaScript

Use [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) over `setTimeout` and `setInterval` to execute animation code for best performance. This enhances the animation by utilizing the frame rate of the user's device, in addition to finding the best time to actually run the function.

### React

Use the [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect), instead of useEffect, hook for better control and of component updates that affect motion (i.e. attaching a component ref, measuring height, etc). This allows the DOM to synchronously render, before the browser has a chance to paint. Since `useLayoutEffect` runs synchronously, any expensive computation will block the browser paint process and thus drop the frame rate. So, while `useLayoutEffect` is preferable for handling animations, it needs to be used wisely. A good example of using `useLayoutEffect` is to set the initial width and height of a component before the browser paints the element and before animating with css.
