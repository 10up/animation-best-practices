"use strict";(self.webpackChunkanimation=self.webpackChunkanimation||[]).push([[1560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||a;return n?i.createElement(d,r(r({ref:t},p),{},{components:n})):i.createElement(d,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Controlling animations"},r="Controlling Animations",s={unversionedId:"controlling-animations",id:"controlling-animations",title:"Controlling Animations",description:'There are many ways to control an animation. First we need to clarify what we mean by "control". There is the technical perspective of controlling an animation via CSS properties or JS APIs that engineers will often use. Designers might control an animation in Figma or another design tool via the built-in controls and options. The way that we\'re going to talk about controlling animations is from the user perspective while browsing a webpage.',source:"@site/guidelines/controlling-animations.md",sourceDirName:".",slug:"/controlling-animations",permalink:"/animation-best-practices/guidelines/controlling-animations",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Controlling animations"},sidebar:"tutorialSidebar",previous:{title:"Complexity",permalink:"/animation-best-practices/guidelines/complexity"},next:{title:"How & when to use animation",permalink:"/animation-best-practices/guidelines/how-and-when-to-use-animation"}},l={},c=[{value:"None",id:"none",level:2},{value:"Scroll",id:"scroll",level:2},{value:"Intersection / Visibility",id:"intersection--visibility",level:2},{value:"Interaction",id:"interaction",level:2}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"controlling-animations"},"Controlling Animations"),(0,o.kt)("p",null,'There are many ways to control an animation. First we need to clarify what we mean by "control". There is the technical perspective of controlling an animation via CSS properties or JS APIs that engineers will often use. Designers might control an animation in Figma or another design tool via the built-in controls and options. The way that we\'re going to talk about controlling animations is from the user perspective while browsing a webpage.'),(0,o.kt)("p",null,"Why? Because while we can come up with many examples of animations, we don't always want an animation controlled the same way in every circumstance of its use. In some cases, we want the user to explicitly invoke an animation. In others, it should be more passive, happening in the background. This could be the same animation, but how it starts and stops is different."),(0,o.kt)("p",null,"More importantly, this allows us to decouple the animation or motion itself from the ",(0,o.kt)("em",{parentName:"p"},"activation")," of the animation. Meaning, we can worry about defining an animation's internal characteristics of duration, easing, key frames, and so on without needing to know or worry about how it starts or stops (if they even do). This makes moving an animation between contexts or projects easier since only the control may change."),(0,o.kt)("h2",{id:"none"},"None"),(0,o.kt)("p",null,"For when there is no user control of an animation. Typically, these types of animations are on an infinite loop so that the user can see them whenever they are happened upon. You could even apply this kind of thinking to motion on the screen like a background video or GIF. These animations play regardless of what the user does, barring any settings like ",(0,o.kt)("inlineCode",{parentName:"p"},"prefers-reduced-motion"),". It is also important to note, that animations without controls that repeat may be in violation of WCAG 2.1 AA guidelines like ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html"},"2.2.2 Pause, Stop, Hide"),". "),(0,o.kt)("h2",{id:"scroll"},"Scroll"),(0,o.kt)("p",null,'Controlling animations via scrolling can also be referred to as "scroll-linked". In this particular type of control, we can think of the scrollbar itself as a scrubber of the timeline of the animation. The position of the scroll is directly tied to where the animation is on its own timeline. The scroll could be linked to the page or specific element overflow. A great example of this type of control is a reading progress indicator or certain types of parallax, as shown in the examples of ',(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/practical-use-cases-for-scroll-linked-animations-in-css-with-scroll-timelines/"},"Practical Use Cases for Scroll-Linked Animations in CSS with Scroll Timelines"),". While ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@scroll-timeline"},"@scroll-timeline")," in CSS is not widely supported as of writing, a library such as GSAP's ",(0,o.kt)("a",{parentName:"p",href:"https://greensock.com/scrolltrigger/"},"ScrollTrigger")," or ",(0,o.kt)("a",{parentName:"p",href:"https://scrollmagic.io/"},"ScrollMagic"),' can easily support this type of control. Care should be taken to differentiate this type of control and "in view" animations.'),(0,o.kt)("h2",{id:"intersection--visibility"},"Intersection / Visibility"),(0,o.kt)("p",null,"This type of control is usually associated with scrolling, since that is the main way elements would enter or exit visibility in the browser window. However, instead of the animation timeline being directly linked to the progress of the scroll (scrubbing), they simply start or stop based on the element visibility on the screen. Typically, this is accomplished through the use of something like the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"Intersection Observer API"),". The ",(0,o.kt)("a",{parentName:"p",href:"http://michalsnik.github.io/aos/"},"Animate On Scroll (AOS) library"),' has many examples on their homepage of this type of control for some common animations. These are sometimes referred to as "in view" animations. They may also reset their timeline when the element(s) with the animation ',(0,o.kt)("em",{parentName:"p"},"exit")," the viewport, so that when they're visible again, the animation will repeat."),(0,o.kt)("h2",{id:"interaction"},"Interaction"),(0,o.kt)("p",null,"One of the most common types of control, this type of animation is activated by a specific user interaction such as a key press, clicking, swiping, hovering, and others. This could also be tied to a device API like the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs"},"Sensor API"),", though it isn't as explicit. This could be as simple as a color change when hovering a link or as complex as an entire sequence of animations from clicking on an element."),(0,o.kt)("p",null,"Note, we're specifically excluding scrolling from this type of control and giving it its own category. This is because scrolling as a method of control isn't always as direct as something like a click or tap and can be easily confused since there are essentially two types of control closely associated with scrolling."))}h.isMDXComponent=!0}}]);