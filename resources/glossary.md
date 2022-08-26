---
sidebar_label: Glossary
---

# Glossary

**WAAPI**

Short for "Web Animations API". The [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) is a vanilla JavaScript API that browsers and developers can use to describe animations on DOM elements.

**keyframe**

Important positions in the animation defining the starting and ending points of a particular action. Think of a keyframe as a specific moment in time of the animation where something is fundamentally changed. These act as signposts for the animator (the browser in our case) to then fill in. These filled in areas are classically referred to as the "in-betweens" or "tweens".

In CSS, a keyframe is defined by using [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) with the `animate` property. With the WAAPI in JavaScript, keyframes are defined by the [`KeyframeEffect` options](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters).

**ease**

The acceleration and deceleration of a motion. It can be a motion created by a [`function curve`](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function), or a series of animated drawings. Other common terms for ease-in and ease-out are slow-in and slow-out.

In CSS, this can be defined by [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) and [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function). Typically, this would be a cubic-bezier. In JavaScript, easing can be defined in the vanilla `animate()` method by using [`KeyframeEffect` options](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters).

You can use [easings.net](https://easings.net/) to view some common eases and copy their specifications for their use, or use [cubic-bezier.com](https://cubic-bezier.com/) to even make your own. GSAP offers an [easing visualizer](https://greensock.com/ease-visualizer/) as well.


**stagger**

Animating properties sequentially over a series where the animations overlap. Typically, this applies to a group of elements with the same animation, where the start of each individual animation is offset or delayed.

You can use this [example by GSAP on Codepen](https://codepen.io/GreenSock/pen/WNbvZRX) to experiment and see staggers in action.

**FLIP**

FLIP is an acronym [created by Paul Lewis](https://aerotwist.com/blog/flip-your-animations/) to describe a performant technique of doing browser animations, which stands for: first, last, invert, play.

From the [article on FLIP on CSS-Tricks](https://css-tricks.com/animating-layouts-with-the-flip-technique/):

> - **First**: before anything happens, record the current (i.e., first) position and dimensions of the element that will transition. You can use `element.getBoundingClientRect()` for this, as will be shown below.
> - **Last**: execute the code that causes the transition to instantaneously happen, and record the final (i.e., last) position and dimensions of the element.
> - **Invert**: since the element is in the last position, we want to create the illusion that it’s in the first position, by using transform to modify its position and dimensions. This takes a little math, but it’s not too difficult.
> - **Play**: with the element inverted (and pretending to be in the first position), we can move it back to its last position by setting its transform to none.

This technique is particularly useful if animations would've normally effected your browser layout, which can cause performance issues.

If your project uses GSAP, you can look into using their free [FLIP plugin](https://greensock.com/docs/v3/Plugins/Flip/).

**rAF**

Short for the `requestAnimationFrame` method in JavaScript. You can read more about `requestAnimationFrame` in [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).


**FPS**

Short for "frames per second".

With browsers, this is usually tied to the refresh rate of the display, but there are other factors that can effect the actual or perceived performance.

It is important to know that the frames shown per second on a device may not be constant, using [variable refresh rates](https://en.wikipedia.org/wiki/Variable_refresh_rate), which are able to change the refresh rate of a display on the fly. Apple ProMotion, nVidia G-Sync, and AMD FreeSync are all examples of this.

Nor are refresh rates the same from device to device. Some may run at 60hz, some 144hz, and still others 240hz or more.

**timeline**

The entirety of an animation from start to finish, representing the animation progress over time. Typically, represented as a horizontally aligned interface with a play head in editing.

**scrub**

The process of moving the play head or position of an animation on its timeline forward or backward.

**GSAP**

Short for "GreenSock Animation Platform". It is one of the industry-leading JavaScript animation plugins for browsers, having been in existence for over a decade.

[Learn more about GSAP](https://greensock.com/).

**prefers-reduced-motion**

A CSS media query that is used to detect if a user has requested the system minimize the amount of non-essential motion they experience when visiting a website. This is particularly important for accessibility and users that may have vestibular disorders and are prone to issues like [motion sickness](https://en.wikipedia.org/wiki/Motion_sickness).

Be sure to [read the guidelines on accessibility](/guidelines/accessibility#prefers-reduced-motion) and using `prefers-reduced-motion`.
