"use strict";(self.webpackChunkanimation=self.webpackChunkanimation||[]).push([[8740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?i.createElement(f,o(o({ref:t},p),{},{components:r})):i.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_label:"Accessibility"},o="Accessibility",s={unversionedId:"accessibility",id:"accessibility",title:"Accessibility",description:"Not every animation brings pleasure to the end user. In some cases motion can trigger harmful reactions from users with vestibular disorders, epilepsy or even migraines.",source:"@site/guidelines/accessibility.md",sourceDirName:".",slug:"/accessibility",permalink:"/guidelines/accessibility",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Accessibility"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/guidelines/"},next:{title:"Complexity",permalink:"/guidelines/complexity"}},l={},c=[{value:"prefers-reduced-motion",id:"prefers-reduced-motion",level:2},{value:"WCAG requirements",id:"wcag-requirements",level:2},{value:"Some other helpful tips",id:"some-other-helpful-tips",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"accessibility"},"Accessibility"),(0,n.kt)("p",null,"Not every animation brings pleasure to the end user. In some cases motion can trigger harmful reactions from users with vestibular disorders, epilepsy or even migraines."),(0,n.kt)("h2",{id:"prefers-reduced-motion"},"prefers-reduced-motion"),(0,n.kt)("p",null,"The\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"prefers-reduced-motion"),"\xa0CSS media query ",(0,n.kt)("a",{parentName:"p",href:"https://caniuse.com/prefers-reduced-motion"},"has wide support"),", so we recommend using it on all projects. Remember, ",(0,n.kt)("inlineCode",{parentName:"p"},"prefers-reduced-motion")," does not have mean to use ",(0,n.kt)("a",{parentName:"p",href:"https://css-tricks.com/nuking-motion-with-prefers-reduced-motion/"},(0,n.kt)("em",{parentName:"a"},"no motion")," at all"),", although it certainly ",(0,n.kt)("em",{parentName:"p"},"can")," mean no motion. Ideally, you should be crafting your media queries to modify the motion so that it is friendlier for people with vestibular disorders, but that still modify the UI in a meaningful way to help users retain context or other benefits that help reduce cognitive load."),(0,n.kt)("p",null,"Here is an example using CSS:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".animation {\n    animation: vibrate 0.3s linear infinite both;\n}\n\n@media (prefers-reduced-motion: reduce) {\n    .animation {\n        animation-duration: 1s;\n    }\n}\n")),(0,n.kt)("p",null,"Remember, media queries are also available in JavaScript:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const duration = (window.matchMedia('(prefers-reduced-motion: reduce)').matches) ? 1000 : 300;\n\nelement.animate([{ opacity: 0 }, { opacity: 1 }], { duration });\n")),(0,n.kt)("p",null,"Read more about\xa0",(0,n.kt)("a",{parentName:"p",href:"https://alistapart.com/blog/post/more-resources-for-accessible-animations"},"creating accessible animations"),"."),(0,n.kt)("h2",{id:"wcag-requirements"},"WCAG requirements"),(0,n.kt)("p",null,"Additionally, all motion enhancements are expected to meet\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa"},"WCAG AA accessibility requirements"),"\xa0including, but not limited to,\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa#contrast-minimum"},"color contrast"),",\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa#focus-visible"},"visible focus"),",\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa#navigable"},"tabbed navigation"),",\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/quickref/#three-flashes-or-below-threshold"},"three flashes"),", and\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa#focus-order"},"logical dom order"),".\xa0Always test with real users, if possible. Some people are also more susceptible to certain types of animation when used with controls like scrolling."),(0,n.kt)("p",null,"Additionally, ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/quickref/#animation-from-interactions"},"WCAG 2.1, Guideline 2.3.2 Motion from Animation"),'\xa0dictates that, "Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed."'),(0,n.kt)("h2",{id:"some-other-helpful-tips"},"Some other helpful tips"),(0,n.kt)("p",null,"Do not:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use 'hover' as the only method to reveal content."),(0,n.kt)("li",{parentName:"ul"},"Require animation to view / interact with the page, page components.")),(0,n.kt)("p",null,"Do:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure that\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"prefers-reduced-motion"),"\xa0is used to modify animations for people with discorders or motion sickness."),(0,n.kt)("li",{parentName:"ul"},"Make sure all content is accessible and navigable by assistive technologies, or strategically provide an assistive alternative experience.")))}u.isMDXComponent=!0}}]);