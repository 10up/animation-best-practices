"use strict";(self.webpackChunkanimation=self.webpackChunkanimation||[]).push([[608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Glossary"},o="Glossary",s={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"WAAPI",source:"@site/resources/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/animation-best-practices/resources/glossary",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Glossary"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/animation-best-practices/resources/"}},l={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glossary"},"Glossary"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WAAPI")),(0,r.kt)("p",null,'Short for "Web Animations API". The ',(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API"},"Web Animations API")," is a vanilla JavaScript API that browsers and developers can use to describe animations on DOM elements."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"keyframe")),(0,r.kt)("p",null,'Important positions in the animation defining the starting and ending points of a particular action. Think of a keyframe as a specific moment in time of the animation where something is fundamentally changed. These act as signposts for the animator (the browser in our case) to then fill in. These filled in areas are classically referred to as the "in-betweens" or "tweens".'),(0,r.kt)("p",null,"In CSS, a keyframe is defined by using ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes"},(0,r.kt)("inlineCode",{parentName:"a"},"@keyframes"))," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"animate")," property. With the WAAPI in JavaScript, keyframes are defined by the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyframeEffect")," options"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ease")),(0,r.kt)("p",null,"The acceleration and deceleration of a motion. It can be a motion created by a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function"},(0,r.kt)("inlineCode",{parentName:"a"},"function curve")),", or a series of animated drawings. Other common terms for ease-in and ease-out are slow-in and slow-out."),(0,r.kt)("p",null,"In CSS, this can be defined by ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function"},(0,r.kt)("inlineCode",{parentName:"a"},"animation-timing-function"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function"},(0,r.kt)("inlineCode",{parentName:"a"},"transition-timing-function")),". Typically, this would be a cubic-bezier. In JavaScript, easing can be defined in the vanilla ",(0,r.kt)("inlineCode",{parentName:"p"},"animate()")," method by using ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyframeEffect")," options"),"."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://easings.net/"},"easings.net")," to view some common eases and copy their specifications for their use, or use ",(0,r.kt)("a",{parentName:"p",href:"https://cubic-bezier.com/"},"cubic-bezier.com")," to even make your own. GSAP offers an ",(0,r.kt)("a",{parentName:"p",href:"https://greensock.com/ease-visualizer/"},"easing visualizer")," as well."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"stagger")),(0,r.kt)("p",null,"Animating properties sequentially over a series where the animations overlap. Typically, this applies to a group of elements with the same animation, where the start of each individual animation is offset or delayed."),(0,r.kt)("p",null,"You can use this ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/GreenSock/pen/WNbvZRX"},"example by GSAP on Codepen")," to experiment and see staggers in action."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FLIP")),(0,r.kt)("p",null,"FLIP is an acronym ",(0,r.kt)("a",{parentName:"p",href:"https://aerotwist.com/blog/flip-your-animations/"},"created by Paul Lewis")," to describe a performant technique of doing browser animations, which stands for: first, last, invert, play."),(0,r.kt)("p",null,"From the ",(0,r.kt)("a",{parentName:"p",href:"https://css-tricks.com/animating-layouts-with-the-flip-technique/"},"article on FLIP on CSS-Tricks"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"First"),": before anything happens, record the current (i.e., first) position and dimensions of the element that will transition. You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"element.getBoundingClientRect()")," for this, as will be shown below."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last"),": execute the code that causes the transition to instantaneously happen, and record the final (i.e., last) position and dimensions of the element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Invert"),": since the element is in the last position, we want to create the illusion that it\u2019s in the first position, by using transform to modify its position and dimensions. This takes a little math, but it\u2019s not too difficult."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Play"),": with the element inverted (and pretending to be in the first position), we can move it back to its last position by setting its transform to none."))),(0,r.kt)("p",null,"This technique is particularly useful if animations would've normally effected your browser layout, which can cause performance issues."),(0,r.kt)("p",null,"If your project uses GSAP, you can look into using their free ",(0,r.kt)("a",{parentName:"p",href:"https://greensock.com/docs/v3/Plugins/Flip/"},"FLIP plugin"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"rAF")),(0,r.kt)("p",null,"Short for the ",(0,r.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," method in JavaScript. You can read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," in ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"},"MDN's documentation"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FPS")),(0,r.kt)("p",null,'Short for "frames per second".'),(0,r.kt)("p",null,"With browsers, this is usually tied to the refresh rate of the display, but there are other factors that can effect the actual or perceived performance."),(0,r.kt)("p",null,"It is important to know that the frames shown per second on a device may not be constant, using ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Variable_refresh_rate"},"variable refresh rates"),", which are able to change the refresh rate of a display on the fly. Apple ProMotion, nVidia G-Sync, and AMD FreeSync are all examples of this."),(0,r.kt)("p",null,"Nor are refresh rates the same from device to device. Some may run at 60hz, some 144hz, and still others 240hz or more."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timeline")),(0,r.kt)("p",null,"The entirety of an animation from start to finish, representing the animation progress over time. Typically, represented as a horizontally aligned interface with a play head in editing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"scrub")),(0,r.kt)("p",null,"The process of moving the play head or position of an animation on its timeline forward or backward."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GSAP")),(0,r.kt)("p",null,'Short for "GreenSock Animation Platform". It is one of the industry-leading JavaScript animation plugins for browsers, having been in existence for over a decade.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://greensock.com/"},"Learn more about GSAP"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"prefers-reduced-motion")),(0,r.kt)("p",null,"A CSS media query that is used to detect if a user has requested the system minimize the amount of non-essential motion they experience when visiting a website. This is particularly important for accessibility and users that may have vestibular disorders and are prone to issues like ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Motion_sickness"},"motion sickness"),"."),(0,r.kt)("p",null,"Be sure to ",(0,r.kt)("a",{parentName:"p",href:"/guidelines/accessibility#prefers-reduced-motion"},"read the guidelines on accessibility")," and using ",(0,r.kt)("inlineCode",{parentName:"p"},"prefers-reduced-motion"),"."))}m.isMDXComponent=!0}}]);