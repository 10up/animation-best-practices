!function(){const t=document.getElementById("illustration");let n=!1;const e=function(t){let n;return function(){const e=this,o=arguments;n&&window.cancelAnimationFrame(n),n=window.requestAnimationFrame((function(){t.apply(e,o)}))}}((()=>{if(!n)return;const e=t.getBoundingClientRect(),{top:o,height:i}=e,r=100*Math.abs(o/i);t.style.setProperty("--offset",r)}));new IntersectionObserver(((t,e)=>{t.forEach((t=>{const{intersectionRatio:e}=t;n=e>0}))}),{rootMargin:"0px 0px",threshold:0}).observe(t),window.addEventListener("scroll",e)}();