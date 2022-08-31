---
sidebar_label: Controlling animations
---

# Controlling Animations

There are many ways to control an animation. First we need to clarify what we mean by "control". There is the technical perspective of controlling an animation via CSS properties or JS APIs that engineers will often use. Designers might control an animation in Figma or another design tool via the built-in controls and options. The way that we're going to talk about controlling animations is from the user perspective while browsing a webpage.

Why? Because while we can come up with many examples of animations, we don't always want an animation controlled the same way in every circumstance of its use. In some cases, we want the user to explicitly invoke an animation. In others, it should be more passive, happening in the background. This could be the same animation, but how it starts and stops is different.

More importantly, this allows us to decouple the animation or motion itself from the _activation_ of the animation. Meaning, we can worry about defining an animation's internal characteristics of duration, easing, key frames, and so on without needing to know or worry about how it starts or stops (if they even do). This makes moving an animation between contexts or projects easier since only the control may change.

## None

For when there is no user control of an animation. Typically, these types of animations are on an infinite loop so that the user can see them whenever they are happened upon. You could even apply this kind of thinking to motion on the screen like a background video or GIF. These animations play regardless of what the user does, barring any settings like `prefers-reduced-motion`. It is also important to note, that animations without controls that repeat may be in violation of WCAG 2.1 AA guidelines like [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html). 

## Scroll

Controlling animations via scrolling can also be referred to as "scroll-linked". In this particular type of control, we can think of the scrollbar itself as a scrubber of the timeline of the animation. The position of the scroll is directly tied to where the animation is on its own timeline. The scroll could be linked to the page or specific element overflow. A great example of this type of control is a reading progress indicator or certain types of parallax, as shown in the examples of [Practical Use Cases for Scroll-Linked Animations in CSS with Scroll Timelines](https://css-tricks.com/practical-use-cases-for-scroll-linked-animations-in-css-with-scroll-timelines/). While [@scroll-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/@scroll-timeline) in CSS is not widely supported as of writing, a library such as GSAP's [ScrollTrigger](https://greensock.com/scrolltrigger/) or [ScrollMagic](https://scrollmagic.io/) can easily support this type of control. Care should be taken to differentiate this type of control and "in view" animations.

## Intersection / Visibility

This type of control is usually associated with scrolling, since that is the main way elements would enter or exit visibility in the browser window. However, instead of the animation timeline being directly linked to the progress of the scroll (scrubbing), they simply start or stop based on the element visibility on the screen. Typically, this is accomplished through the use of something like the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). The [Animate On Scroll (AOS) library](http://michalsnik.github.io/aos/) has many examples on their homepage of this type of control for some common animations. These are sometimes referred to as "in view" animations. They may also reset their timeline when the element(s) with the animation _exit_ the viewport, so that when they're visible again, the animation will repeat.

## Interaction

One of the most common types of control, this type of animation is activated by a specific user interaction such as a key press, clicking, swiping, hovering, and others. This could also be tied to a device API like the [Sensor API](https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs), though it isn't as explicit. This could be as simple as a color change when hovering a link or as complex as an entire sequence of animations from clicking on an element.

Note, we're specifically excluding scrolling from this type of control and giving it its own category. This is because scrolling as a method of control isn't always as direct as something like a click or tap and can be easily confused since there are essentially two types of control closely associated with scrolling.